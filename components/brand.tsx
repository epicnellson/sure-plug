import { PlugZap } from 'lucide-react'
import { cn } from '@/lib/utils'

/**
 * Brand glyph: an electric plug with a lightning bolt — the "Sure Plug".
 */
export function BrandMark({ className, glyphClassName }: { className?: string; glyphClassName?: string }) {
  return (
    <span
      aria-hidden="true"
      className={cn(
        'flex size-8 shrink-0 items-center justify-center rounded-lg bg-primary text-background shadow-[0_0_20px_hsl(var(--primary)/.35)]',
        className,
      )}
    >
      <PlugZap className={cn('size-4', glyphClassName)} />
    </span>
  )
}