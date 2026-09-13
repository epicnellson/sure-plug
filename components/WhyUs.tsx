'use client'

import { motion } from 'framer-motion'
import { whyPoints } from '@/lib/data'

export function WhyUs() {
  return (
    <section id="why" className="mx-auto max-w-7xl scroll-mt-20 px-5 py-28 lg:px-8">
      <div className="grid gap-16 lg:grid-cols-[.8fr_1.2fr]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="lg:sticky lg:top-28 lg:self-start"
        >
          <p className="mb-4 font-mono text-xs uppercase tracking-[.2em] text-primary">
            Why the plug
          </p>
          <h2 className="text-balance text-4xl font-medium tracking-[-.045em] text-white sm:text-5xl">
            Reliability is the <span className="text-muted-foreground">whole point.</span>
          </h2>
          <p className="mt-6 max-w-md leading-7 text-muted-foreground">
            The internet is full of people who can do a thing. We built SurePlug for people who
            actually do the thing — and pick up the phone while doing it.
          </p>
          <div className="mt-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-xs text-muted-foreground">
            <span className="size-1.5 animate-pulse rounded-full bg-primary" />
            Every operator verified by hand
          </div>
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-2">
          {whyPoints.map((point, i) => {
            const Icon = point.icon
            const highlighted = i === 0
            return (
              <motion.div
                key={point.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.45, delay: i * 0.06 }}
                className={`group relative flex flex-col rounded-2xl border p-6 transition-all duration-300 ${
                  highlighted
                    ? 'border-primary/25 bg-primary/[0.05] hover:border-primary/45 hover:shadow-[0_10px_40px_rgba(0,0,0,.35)]'
                    : 'border-white/10 bg-white/[0.02] hover:border-white/20 hover:bg-white/[0.05]'
                } sm:${i % 2 === 1 ? 'mt-8' : ''}`}
              >
                {highlighted && (
                  <span className="absolute -top-2.5 right-4 rounded-full bg-primary px-2.5 py-0.5 font-mono text-[9px] uppercase tracking-[.14em] text-background">
                    The rule
                  </span>
                )}
                <span className="font-mono text-[11px] text-muted-foreground/60">0{i + 1}</span>
                <Icon className="mt-5 size-5 text-primary transition-transform duration-300 group-hover:scale-110" />
                <h3 className="mt-4 font-semibold text-white">{point.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">{point.copy}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}