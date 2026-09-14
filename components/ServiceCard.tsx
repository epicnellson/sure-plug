'use client'

import { ArrowRight, BadgeCheck } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { cn } from '@/lib/utils'
import type { Service } from '@/lib/data'
import { useRequest } from './request-context'

function CardImage({ service, remoteImageUrl }: { service: Service; remoteImageUrl?: string }) {
  const src = remoteImageUrl ?? service.image
  if (!src) return null

  return (
    <div className="relative -mx-7 -mt-7 mb-6 overflow-hidden aspect-[32/21] sm:-mx-8 sm:-mt-8">
      <img
        src={src}
        alt={service.imageAlt ?? `${service.title} — project example`}
        width={640}
        height={420}
        loading="lazy"
        decoding="async"
        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
      />
      <span className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/50 to-transparent" />
    </div>
  )
}

export function ServiceCard({
  service,
  remoteImageUrl,
}: {
  service: Service
  remoteImageUrl?: string
}) {
  const { openRequest } = useRequest()
  const router = useRouter()
  const Icon = service.icon
  const href = `/services/${service.slug}`

  const gotoDetail = () => router.push(href)

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      gotoDetail()
    }
  }

  const requestThis = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    openRequest(service.title)
  }

  const baseCard = cn(
    'group relative flex cursor-pointer flex-col overflow-hidden bg-card p-7 transition-all duration-300 hover:-translate-y-0.5 sm:p-8',
    'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-4px] focus-visible:outline-primary',
  )

  if (service.featured) {
    return (
      <article
        role="link"
        tabIndex={0}
        aria-label={`${service.title} — learn more and request this service`}
        onClick={gotoDetail}
        onKeyDown={handleKeyDown}
        className={cn(
          baseCard,
          'hover:shadow-[0_12px_60px_rgba(0,0,0,.45)]',
        )}
      >
        <span className="absolute inset-x-0 top-0 z-10 h-px bg-gradient-to-r from-transparent via-primary/70 to-transparent" />
        <span className="absolute -right-16 -top-16 z-0 size-40 rounded-full bg-primary/10 blur-3xl transition-opacity duration-300 group-hover:opacity-100" />

        <CardImage service={service} remoteImageUrl={remoteImageUrl} />

        <div className="relative mb-12 flex items-start justify-between">
          <span className="flex size-12 items-center justify-center rounded-xl border border-primary/30 bg-primary/10 text-primary shadow-[0_0_28px_hsl(var(--primary)/.35)] transition-all duration-300 group-hover:border-primary/50 group-hover:shadow-[0_0_36px_hsl(var(--primary)/.5)]">
            <Icon className="size-5" />
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/30 bg-primary/10 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[.14em] text-primary">
            <BadgeCheck className="size-3" /> Most requested
          </span>
        </div>

        <h3 className="relative text-xl font-semibold text-white">{service.title}</h3>
        <p className="relative mt-3 min-h-12 text-sm leading-6 text-muted-foreground">{service.copy}</p>

        <div className="relative mt-8 flex items-center justify-between gap-3 border-t border-white/10 pt-5">
          <span className="font-mono text-xs text-primary">{service.time}</span>
          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={requestThis}
              className="text-xs font-medium text-muted-foreground transition hover:text-white"
            >
              Request this
            </button>
            <span
              role="button"
              tabIndex={-1}
              onClick={(e) => {
                e.stopPropagation()
                gotoDetail()
              }}
              className="group/btn inline-flex items-center gap-2 text-sm font-semibold text-primary"
            >
              Learn more
              <ArrowRight className="size-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
            </span>
          </div>
        </div>
      </article>
    )
  }

  return (
    <article
      role="link"
      tabIndex={0}
      aria-label={`${service.title} — learn more and request this service`}
      onClick={gotoDetail}
      onKeyDown={handleKeyDown}
      className={cn(
        baseCard,
        'hover:border-l-2 hover:border-primary/60 hover:bg-white/[0.07] hover:shadow-[0_8px_40px_rgba(0,0,0,.35)]',
      )}
    >
      <CardImage service={service} remoteImageUrl={remoteImageUrl} />

      <div className="mb-12 flex items-start justify-between">
        <span className="flex size-11 items-center justify-center rounded-xl border border-white/10 bg-primary/[0.06] text-primary transition-all duration-300 group-hover:border-primary/40 group-hover:bg-primary/10 group-hover:shadow-[0_0_24px_hsl(var(--primary)/.3)]">
          <Icon className="size-5" />
        </span>
        <span className="rounded-full border border-white/10 px-2.5 py-1 font-mono text-[10px] text-muted-foreground">
          {service.time}
        </span>
      </div>
      <h3 className="text-lg font-semibold text-white">{service.title}</h3>
      <p className="mt-3 min-h-12 text-sm leading-6 text-muted-foreground">{service.copy}</p>
      <div className="mt-8 flex items-center justify-between gap-3 border-t border-white/10 pt-5">
        <span className="font-mono text-[11px] text-muted-foreground">Direct match</span>
        <div className="flex items-center gap-4">
          <button
            type="button"
            onClick={requestThis}
            className="text-xs font-medium text-muted-foreground transition hover:text-white"
          >
            Request this
          </button>
          <span
            role="button"
            tabIndex={-1}
            onClick={(e) => {
              e.stopPropagation()
              gotoDetail()
            }}
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition-all duration-300 group-hover:gap-3"
          >
            Learn more <ArrowRight className="size-4" />
          </span>
        </div>
      </div>
    </article>
  )
}