'use client'

import { ArrowRight, BadgeCheck } from 'lucide-react'
import type { Service } from '@/lib/data'
import { useRequest } from './request-context'

export function ServiceCard({ service }: { service: Service }) {
  const { openRequest } = useRequest()
  const Icon = service.icon

  if (service.featured) {
    return (
      <article className="group relative overflow-hidden bg-card p-7 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_60px_rgba(0,0,0,.45)] sm:p-8">
        <span className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/70 to-transparent" />
        <span className="absolute -right-16 -top-16 size-40 rounded-full bg-primary/10 blur-3xl transition-opacity duration-300 group-hover:opacity-100" />

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

        <div className="relative mt-8 flex items-center justify-between border-t border-white/10 pt-5">
          <span className="font-mono text-xs text-primary">{service.time}</span>
          <button
            onClick={openRequest}
            className="group/btn inline-flex items-center gap-2 text-sm font-semibold text-primary"
          >
            Request this
            <ArrowRight className="size-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
          </button>
        </div>
      </article>
    )
  }

  return (
    <article className="group bg-card p-7 transition-all duration-300 hover:-translate-y-0.5 hover:border-l-2 hover:border-primary/60 hover:bg-white/[0.07] hover:shadow-[0_8px_40px_rgba(0,0,0,.35)]">
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
      <div className="mt-8 flex items-center justify-between border-t border-white/10 pt-5">
        <span className="font-mono text-[11px] text-muted-foreground">Direct match</span>
        <button
          onClick={openRequest}
          className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition-all duration-300 group-hover:gap-3"
        >
          Request this <ArrowRight className="size-4" />
        </button>
      </div>
    </article>
  )
}