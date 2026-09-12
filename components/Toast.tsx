'use client'

import { createContext, useCallback, useContext, useRef, useState, type ReactNode } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { CircleCheck, CircleX, X } from 'lucide-react'

interface ToastItem {
  id: number
  title: string
  description?: string
  variant?: 'success' | 'error'
}

interface ToastInput {
  title: string
  description?: string
  variant?: 'success' | 'error'
}

const ToastContext = createContext<{ toast: (input: ToastInput) => void } | null>(null)

export function ToastProvider({ children }: { children: ReactNode }) {
  const [toasts, setToasts] = useState<ToastItem[]>([])
  const idRef = useRef(0)

  const dismiss = useCallback((id: number) => {
    setToasts((prev) => prev.filter((t) => t.id !== id))
  }, [])

  const toast = useCallback(
    (input: ToastInput) => {
      const id = ++idRef.current
      setToasts((prev) => [...prev, { id, ...input }])
      window.setTimeout(() => {
        setToasts((prev) => prev.filter((t) => t.id !== id))
      }, 5000)
    },
    [],
  )

  return (
    <ToastContext.Provider value={{ toast }}>
      {children}
      <div
        aria-live="polite"
        aria-atomic="false"
        className="pointer-events-none fixed inset-x-4 bottom-4 z-[70] flex flex-col items-center gap-3 sm:inset-x-auto sm:right-6 sm:items-end"
      >
        <AnimatePresence mode="popLayout">
          {toasts.map((t) => (
            <motion.div
              key={t.id}
              layout
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.95 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className={`pointer-events-auto flex max-w-sm items-start gap-3 rounded-2xl border bg-[#0d1512]/95 p-4 pr-3 shadow-[0_8px_40px_rgba(0,0,0,.45)] backdrop-blur-xl ${
                t.variant === 'error' ? 'border-red-400/25' : 'border-emerald-400/25'
              }`}
            >
              {t.variant === 'error' ? (
                <CircleX className="mt-0.5 size-5 shrink-0 text-destructive" />
              ) : (
                <CircleCheck className="mt-0.5 size-5 shrink-0 text-primary" />
              )}
              <div className="min-w-0 flex-1">
                <p className="text-sm font-semibold text-white">{t.title}</p>
                {t.description && (
                  <p className="mt-0.5 text-xs leading-5 text-muted-foreground">{t.description}</p>
                )}
              </div>
              <button
                onClick={() => dismiss(t.id)}
                aria-label="Dismiss notification"
                className="rounded-lg p-1 text-muted-foreground transition hover:bg-white/10 hover:text-white"
              >
                <X className="size-4" />
              </button>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </ToastContext.Provider>
  )
}

export function useToast() {
  const ctx = useContext(ToastContext)
  if (!ctx) throw new Error('useToast must be used within ToastProvider')
  return ctx
}
