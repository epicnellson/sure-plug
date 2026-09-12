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
        >
          <p className="mb-4 font-mono text-xs uppercase tracking-[.2em] text-primary">
            Why the plug
          </p>
          <h2 className="text-balance text-4xl font-medium tracking-[-.045em] text-white sm:text-5xl">
            Reliability is the <span className="text-muted-foreground">whole point.</span>
          </h2>
          <p className="mt-6 max-w-md leading-7 text-muted-foreground">
            The internet is full of people who can do a thing. We built SurePlug for people who
            actually do the thing—and communicate while doing it.
          </p>
        </motion.div>

        <div className="grid gap-8 sm:grid-cols-2">
          {whyPoints.map((point) => {
            const Icon = point.icon
            return (
              <div
                key={point.title}
                className="group border-t border-white/10 pt-5 transition-colors duration-300 hover:border-primary/40"
              >
                <Icon className="size-5 text-primary transition-transform duration-300 group-hover:scale-110" />
                <h3 className="mt-7 font-semibold text-white">{point.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">{point.copy}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}