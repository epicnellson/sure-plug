import { cn } from '@/lib/utils'

/**
 * Brand glyph: a location pin with a stop-sign (octagon) head — the "last bus stop".
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
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={cn('size-4', glyphClassName)}
      >
        <path d="M12 21.5c-5.2-6.8-7-10.4-7-13.1a7 7 0 0 1 14 0c0 2.7-1.8 6.3-7 13.1Z" />
        <path d="M15.5 8.5 14.5 11 12 12 9.5 11 8.5 8.5 9.5 6 12 5 14.5 6Z" fill="currentColor" stroke="none" />
        <circle cx="12" cy="8.5" r="1.2" fill="currentColor" stroke="none" />
      </svg>
    </span>
  )
}