import { ArrowRight } from 'lucide-react'
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
              Handed over, not hyped.
            </h2>
            <p className="mt-4 max-w-md text-sm leading-6 text-muted-foreground">
              Real deliverables from named clients — scope, timeline, and hand-off spelled out.
              References available on request.
            </p>
          </div>
          <a
            href="#request"
            className="hidden items-center gap-2 text-sm text-muted-foreground transition hover:text-white sm:flex"
          >
            Get your own&nbsp;
            <ArrowRight className="size-4" />
          </a>
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