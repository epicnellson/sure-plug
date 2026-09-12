import { Star } from 'lucide-react'
import { testimonials } from '@/lib/data'
import { VouchCard } from './VouchCard'

export function Proof() {
  return (
    <section
      id="proof"
      className="scroll-mt-20 border-y border-white/10 bg-[#0b1010] px-5 py-28 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 flex items-end justify-between">
          <div>
            <p className="mb-4 font-mono text-xs uppercase tracking-[.2em] text-primary">
              Proof &amp; vouches
            </p>
            <h2 className="text-balance text-4xl font-medium tracking-[-.045em] text-white sm:text-5xl">
              Good work travels.
            </h2>
          </div>
          <div className="hidden items-center gap-2 text-sm text-muted-foreground sm:flex">
            <Star className="size-4 fill-primary text-primary" /> 4.9 average rating
          </div>
        </div>

        <div className="grid gap-4 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <VouchCard key={testimonial.name} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  )
}