import { cn } from '@/lib/utils'

/**
 * Primary brand lockup: the official Sure Plug logo (SURE/PLUG wordmark + green glyph).
 */
export function BrandLogo({ className, imgClassName }: { className?: string; imgClassName?: string }) {
  return (
    <span className={cn('inline-flex shrink-0 items-center justify-center', className)}>
      <img
        src="/logo.png"
        alt="Sure Plug"
        width={676}
        height={369}
        loading="eager"
        className={cn('h-11 w-auto', imgClassName)}
      />
    </span>
  )
}