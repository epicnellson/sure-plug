import { ArrowLeft } from 'lucide-react'
import { cn } from '@/lib/utils'

export function BackHome({
  href = '/',
  label = 'Back to Sure Plug',
  pinned = false,
}: {
  href?: string
  label?: string
  pinned?: boolean
}) {
  return (
    <a
      href={href}
      aria-label={label}
      className={cn(
        'inline-flex min-h-11 items-center gap-2 rounded-full border border-white/12 bg-background/85 px-4 text-xs font-medium text-muted-foreground backdrop-blur-md transition hover:border-white/25 hover:text-white sm:text-sm',
        pinned
          ? 'fixed left-4 top-24 z-30'
          : 'fixed left-4 top-24 z-30 lg:relative lg:top-auto lg:left-auto lg:z-auto lg:my-0 lg:inline-flex lg:w-fit lg:border-0 lg:bg-transparent lg:p-0 lg:backdrop-blur-none lg:hover:border-primary/25 lg:hover:text-primary',
      )}
    >
      <ArrowLeft className="size-3.5" />
      {label}
    </a>
  )
}