'use client'

import { ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'
import { useRequest } from './request-context'

export function RequestServiceButton({
  service,
  label = 'Request This Service',
  className,
}: {
  service: string
  label?: string
  className?: string
}) {
  const { openRequest } = useRequest()

  return (
    <button
      type="button"
      onClick={() => openRequest(service)}
      className={cn(
        'group inline-flex items-center justify-center gap-2.5 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-background shadow-[0_0_24px_hsl(var(--primary)/.22)] transition hover:bg-primary/90 hover:shadow-[0_0_36px_hsl(var(--primary)/.4)] active:scale-[.98]',
        className,
      )}
    >
      {label}
      <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
    </button>
  )
}