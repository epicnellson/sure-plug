'use client'

import { ArrowRight } from 'lucide-react'
import type { Service } from '@/lib/data'
import { useRequest } from './request-context'

export function ServiceCard({ service }: { service: Service }) {
  const { openRequest } = useRequest()
  const Icon = service.icon

  return (
    <article className="group bg-card p-7 transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/[0.07] hover:shadow-[0_8px_40px_rgba(0,0,0,.35)]">
      <div className="mb-12 flex items-start justify-between">
        <span className="flex size-11 items-center justify-center rounded-xl border border-primary/20 bg-primary/10 text-primary transition-all duration-300 group-hover:border-primary/40 group-hover:shadow-[0_0_24px_hsl(var(--primary)/.3)]">
          <Icon className="size-5" />
        </span>
        <span className="rounded-full border border-white/10 px-2.5 py-1 font-mono text-[10px] text-muted-foreground">
          {service.time}
        </span>
      </div>
      <h3 className="text-lg font-semibold text-white">{service.title}</h3>
      <p className="mt-3 min-h-12 text-sm leading-6 text-muted-foreground">{service.copy}</p>
      <button
        onClick={openRequest}
        className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-primary transition-all duration-300 group-hover:gap-3"
      >
        Inquire now <ArrowRight className="size-4" />
      </button>
    </article>
  )
}