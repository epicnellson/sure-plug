import { BadgeCheck, Check, Star } from 'lucide-react'
import type { Testimonial } from '@/lib/data'

export function VouchCard({ testimonial }: { testimonial: Testimonial }) {
  const featured = testimonial.featured
  return (
    <figure
      className={`group relative flex flex-col rounded-2xl border p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_14px_48px_rgba(0,0,0,.45)] ${
        featured
          ? 'border-primary/30 bg-[#0e1612] hover:border-primary/50'
          : 'border-white/10 bg-white/[0.035] hover:border-primary/30'
      }`}
    >
      {featured && (
        <span className="absolute -top-2.5 left-5 rounded-full bg-primary px-2.5 py-0.5 font-mono text-[9px] uppercase tracking-[.14em] text-background shadow-[0_0_18px_hsl(var(--primary)/.4)]">
          Recent vouch
        </span>
      )}

      <div className="flex items-center justify-between">
        <div className="flex gap-1 text-primary">
          {[1, 2, 3, 4, 5].map((star) => (
            <Star
              key={star}
              className="size-3.5 fill-current transition-transform duration-300 group-hover:scale-110"
            />
          ))}
        </div>
        <span className="font-mono text-[10px] text-muted-foreground/50">{testimonial.project}</span>
      </div>

      <blockquote className={`mt-6 leading-7 text-white ${featured ? 'text-lg' : 'text-[15px]'}`}>
        &ldquo;{testimonial.copy}&rdquo;
      </blockquote>

      <figcaption className="mt-auto flex items-center justify-between gap-3 border-t border-white/10 pt-5">
        <div className="min-w-0">
          <p className="truncate text-sm font-semibold text-white">{testimonial.name}</p>
          <p className="mt-0.5 truncate text-xs text-muted-foreground">{testimonial.role}</p>
        </div>
        <div className="flex shrink-0 items-center gap-1.5">
          <span className="inline-flex items-center gap-1 rounded-full bg-primary/10 px-2 py-1 text-[10px] font-medium text-primary">
            <Check className="size-3" /> Verified client
          </span>
          <BadgeCheck className="size-4 text-primary/70" />
        </div>
      </figcaption>
    </figure>
  )
}