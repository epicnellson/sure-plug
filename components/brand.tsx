import { cn } from '@/lib/utils'

/**
 * Primary brand lockup: the local SVG logo (emerald plug-glyph mark + wordmark).
 */
export function BrandLogo({ className, imgClassName }: { className?: string; imgClassName?: string }) {
  return (
    <span className={cn('inline-flex shrink-0 items-center justify-center', className)}>
      <img
        src="/logo.svg"
        alt="Sure Plug"
        width={220}
        height={48}
        loading="eager"
        className={cn('h-9 w-auto', imgClassName)}
      />
    </span>
  )
}