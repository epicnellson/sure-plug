import { cn } from '@/lib/utils'

const base = cn(
  'inline-flex items-center justify-center gap-2.5 whitespace-nowrap rounded-full',
  'px-6 py-3.5 text-sm font-semibold transition-all duration-300',
  'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary',
  'active:scale-[.98] disabled:pointer-events-none disabled:opacity-60',
)

export function CtaButton({ className, ...props }: React.ComponentPropsWithoutRef<'button'>) {
  return (
    <button
      className={cn(
        base,
        'bg-primary text-background shadow-[0_0_24px_hsl(var(--primary)/.22)]',
        'hover:brightness-110 hover:shadow-[0_0_36px_hsl(var(--primary)/.4)] hover:-translate-y-px',
        className,
      )}
      {...props}
    />
  )
}

export function CtaLink({ className, ...props }: React.ComponentPropsWithoutRef<'a'>) {
  return (
    <a
      className={cn(
        base,
        'border border-white/15 text-white',
        'hover:-translate-y-px hover:border-white/30 hover:bg-white/5',
        className,
      )}
      {...props}
    />
  )
}