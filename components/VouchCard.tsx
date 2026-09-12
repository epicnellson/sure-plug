import { Check, Star } from 'lucide-react'
import type { Testimonial } from '@/lib/data'

export function VouchCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <figure className="group rounded-2xl border border-white/10 bg-white/[0.035] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-[0_12px_44px_rgba(0,0,0,.4)]">
      <div className="flex gap-1 text-primary">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star key={star} className="size-3.5 fill-current transition-transform duration-300 group-hover:scale-110" />
        ))}
      </div>
      <blockquote className="mt-7 min-h-24 text-lg leading-7 text-white">
        &quot;{testimonial.copy}&quot;
      </blockquote>
      <figcaption className="mt-8 flex items-center justify-between border-t border-white/10 pt-5">
        <div>
          <p className="text-sm font-semibold text-white">{testimonial.name}</p>
          <p className="mt-1 text-xs text-muted-foreground">{testimonial.service}</p>
        </div>
        <span className="inline-flex items-center gap-1 rounded-full bg-primary/10 px-2 py-1 text-[10px] font-medium text-primary shadow-[0_0_16px_hsl(var(--primary)/.15)]">
          <Check className="size-3" /> Verified buyer
        </span>
      </figcaption>
    </figure>
  )
}