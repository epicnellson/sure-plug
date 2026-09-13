'use client'

import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowRight, Check, LoaderCircle, X } from 'lucide-react'
import { budgetOptions, serviceOptions } from '@/lib/data'
import { validateRequest, type RequestForm } from '@/lib/validation'
import { useToast } from './Toast'

type FormErrors = Partial<Record<keyof RequestForm, string>>

const initialForm: RequestForm = { name: '', contact: '', service: '', budget: '', details: '' }

const inputClass =
  'mt-2 w-full rounded-xl border bg-white/[.04] px-4 py-3 text-white outline-none transition placeholder:text-muted-foreground/50 focus:border-primary'

const FOCUSABLE_SELECTOR = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'

export function RequestModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [form, setForm] = useState<RequestForm>(initialForm)
  const [errors, setErrors] = useState<FormErrors>({})
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle')
  const [submitError, setSubmitError] = useState<string | null>(null)
  const [requestId, setRequestId] = useState<string | null>(null)
  const [shake, setShake] = useState(0)
  const panelRef = useRef<HTMLDivElement>(null)
  const closeRef = useRef<HTMLButtonElement>(null)
  const previouslyFocused = useRef<HTMLElement | null>(null)
  const { toast } = useToast()

  const setField = useCallback(<K extends keyof RequestForm>(key: K, value: RequestForm[K]) => {
    setForm((prev) => ({ ...prev, [key]: value }))
    setErrors((prev) => ({ ...prev, [key]: undefined }))
  }, [])

  const hasErrors = useMemo(() => Object.values(errors).some(Boolean), [errors])

  const close = useCallback(() => {
    onClose()
    window.setTimeout(() => {
      setStatus('idle')
      setErrors({})
      setSubmitError(null)
      setRequestId(null)
      setForm(initialForm)
    }, 250)
  }, [onClose])

  useEffect(() => {
    if (!open) return

    previouslyFocused.current = document.activeElement as HTMLElement | null
    closeRef.current?.focus()
    document.body.style.overflow = 'hidden'

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault()
        close()
        return
      }
      if (e.key === 'Tab' && panelRef.current) {
        const nodes = Array.from(
          panelRef.current.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR),
        ).filter((el) => !el.hasAttribute('disabled'))
        if (nodes.length === 0) return
        const first = nodes[0]
        const last = nodes[nodes.length - 1]
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault()
          last.focus()
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault()
          first.focus()
        }
      }
    }

    window.addEventListener('keydown', onKeyDown)
    return () => {
      window.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = ''
      previouslyFocused.current?.focus()
    }
  }, [open, close])

  const submit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmitError(null)
    const nextErrors = validateRequest(form)
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length > 0) {
      setShake((s) => s + 1)
      return
    }
    setStatus('loading')
    try {
      const res = await fetch('/api/request', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const data: { ok: boolean; id?: string; error?: string; errors?: FormErrors } | null = await res
        .json()
        .catch(() => null)

      if (res.ok && data?.ok) {
        setRequestId(data.id ?? null)
        setStatus('success')
        toast({
          title: 'Request sent',
          description: `Matching you with the right specialist — expect a reply within 15 minutes.`,
        })
        return
      }

      const serverErrors = data?.errors
      if (serverErrors && Object.keys(serverErrors).length > 0) setErrors(serverErrors)
      setSubmitError(data?.error ?? "We couldn't submit your request. Please try again.")
      setShake((s) => s + 1)
      setStatus('idle')
      toast({
        title: 'Request failed',
        description: "We couldn't submit your request. Please try again.",
        variant: 'error',
      })
    } catch {
      setSubmitError('Network error — check your connection and try again.')
      setShake((s) => s + 1)
      setStatus('idle')
      toast({
        title: 'Request failed',
        description: 'Network error — check your connection and try again.',
        variant: 'error',
      })
    }
  }

  const errorText = (key: keyof RequestForm) =>
    errors[key] ? (
      <span role="alert" className="mt-1.5 block text-xs font-medium text-destructive">
        {errors[key]}
      </span>
    ) : null

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-label="New request form"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/75 p-4 backdrop-blur-sm"
          onMouseDown={(e) => {
            if (e.target === e.currentTarget) close()
          }}
        >
          <motion.div
            ref={panelRef}
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.97 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="relative max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-2xl border border-white/15 bg-[#111817] p-6 shadow-2xl sm:p-8"
          >
            <button
              ref={closeRef}
              aria-label="Close request form"
              onClick={close}
              className="absolute right-5 top-5 rounded-lg p-2 text-muted-foreground transition hover:bg-white/10 hover:text-white"
            >
              <X className="size-5" />
            </button>

            <AnimatePresence mode="wait" initial={false}>
              {status === 'success' ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.3 }}
                  className="py-14 text-center"
                >
                  <motion.span
                    initial={{ scale: 0.6 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', stiffness: 260, damping: 18 }}
                    className="mx-auto flex size-16 items-center justify-center rounded-full bg-primary/15 text-primary shadow-[0_0_40px_hsl(var(--primary)/.25)]"
                  >
                    <Check className="size-8" />
                  </motion.span>
                  <h2 className="mt-6 text-3xl font-medium tracking-[-.04em] text-white">
                    Request received.
                  </h2>
                  <p className="mx-auto mt-3 max-w-xs text-sm leading-6 text-muted-foreground">
                    A specialist is reviewing your brief. Expect a reply within 15 minutes.
                  </p>
                  {requestId && (
                    <p className="mt-4 font-mono text-xs text-muted-foreground/60">
                      Ref {requestId.slice(0, 8)}
                    </p>
                  )}
                  <button
                    onClick={close}
                    className="mt-8 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-background transition hover:bg-primary/90 hover:shadow-[0_0_30px_hsl(var(--primary)/.3)]"
                  >
                    Back to site
                  </button>
                </motion.div>
              ) : (
                <motion.div
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <p className="font-mono text-xs uppercase tracking-[.2em] text-primary">
                    Start a request
                  </p>
                  <h2 className="mt-3 text-3xl font-medium tracking-[-.04em] text-white">
                    What do you need done?
                  </h2>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">
                    Give us the basics and we&apos;ll put you in front of the right specialist.
                  </p>

                  <motion.form
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' && (e.target as HTMLElement).tagName === 'SELECT') {
                        e.preventDefault()
                      }
                    }}
                    animate={shake > 0 ? { x: [0, -10, 10, -6, 6, 0] } : undefined}
                    transition={{ duration: 0.4 }}
                    onSubmit={submit}
                    noValidate
                    className="mt-8 flex flex-col gap-4"
                  >
                    <label className="text-sm text-muted-foreground">
                      Full name
                      <input
                        name="name"
                        value={form.name}
                        onChange={(e) => setField('name', e.target.value)}
                        aria-invalid={Boolean(errors.name)}
                        aria-describedby={errors.name ? 'name-error' : undefined}
                        className={`${inputClass} ${errors.name ? 'border-destructive/60 focus:border-destructive' : 'border-white/10'}`}
                        placeholder="Your name"
                      />
                      <span id="name-error">{errorText('name')}</span>
                    </label>

                    <label className="text-sm text-muted-foreground">
                      Email or WhatsApp
                      <input
                        name="contact"
                        value={form.contact}
                        onChange={(e) => setField('contact', e.target.value)}
                        aria-invalid={Boolean(errors.contact)}
                        aria-describedby={errors.contact ? 'contact-error' : undefined}
                        className={`${inputClass} ${errors.contact ? 'border-destructive/60 focus:border-destructive' : 'border-white/10'}`}
                        placeholder="you@example.com"
                      />
                      <span id="contact-error">{errorText('contact')}</span>
                    </label>

                    <div className="grid gap-4 sm:grid-cols-2">
                      <label className="text-sm text-muted-foreground">
                        Service category
                        <select
                          name="service"
                          value={form.service}
                          onChange={(e) => setField('service', e.target.value)}
                          aria-invalid={Boolean(errors.service)}
                          aria-describedby={errors.service ? 'service-error' : undefined}
                          className={`${inputClass} appearance-none ${errors.service ? 'border-destructive/60 focus:border-destructive' : 'border-white/10'}`}
                        >
                          <option value="" disabled>
                            Select…
                          </option>
                          {serviceOptions.map((o) => (
                            <option key={o} value={o} className="bg-[#111817]">
                              {o}
                            </option>
                          ))}
                        </select>
                        <span id="service-error">{errorText('service')}</span>
                      </label>
                      <label className="text-sm text-muted-foreground">
                        Budget range
                        <select
                          name="budget"
                          value={form.budget}
                          onChange={(e) => setField('budget', e.target.value)}
                          aria-invalid={Boolean(errors.budget)}
                          aria-describedby={errors.budget ? 'budget-error' : undefined}
                          className={`${inputClass} appearance-none ${errors.budget ? 'border-destructive/60 focus:border-destructive' : 'border-white/10'}`}
                        >
                          <option value="" disabled>
                            Select…
                          </option>
                          {budgetOptions.map((o) => (
                            <option key={o} value={o} className="bg-[#111817]">
                              {o}
                            </option>
                          ))}
                        </select>
                        <span id="budget-error">{errorText('budget')}</span>
                      </label>
                    </div>

                    <label className="text-sm text-muted-foreground">
                      Project details
                      <textarea
                        name="details"
                        rows={4}
                        value={form.details}
                        onChange={(e) => setField('details', e.target.value)}
                        aria-invalid={Boolean(errors.details)}
                        aria-describedby={errors.details ? 'details-error' : undefined}
                        className={`${inputClass} resize-none ${errors.details ? 'border-destructive/60 focus:border-destructive' : 'border-white/10'}`}
                        placeholder="What do you need done?"
                      />
                      <span id="details-error">{errorText('details')}</span>
                    </label>

                    {hasErrors && (
                      <p role="alert" className="text-xs font-medium text-destructive">
                        Please fix the highlighted fields above and try again.
                      </p>
                    )}

                    {submitError && (
                      <p
                        role="alert"
                        className="rounded-xl border border-destructive/40 bg-destructive/10 px-4 py-3 text-xs font-medium text-destructive"
                      >
                        {submitError}
                      </p>
                    )}

                    <button
                      type="submit"
                      disabled={status === 'loading'}
                      className="mt-2 inline-flex items-center justify-center gap-2.5 rounded-xl bg-primary px-5 py-3.5 font-semibold text-background transition hover:bg-primary/90 hover:shadow-[0_0_30px_hsl(var(--primary)/.3)] active:scale-[.98] disabled:pointer-events-none disabled:opacity-60"
                    >
                      {status === 'loading' ? (
                        <>
                          <LoaderCircle className="size-4 animate-spin" />
                          Sending request…
                        </>
                      ) : (
                        <>
                          Submit request
                          <ArrowRight className="size-4" />
                        </>
                      )}
                    </button>
                  </motion.form>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}