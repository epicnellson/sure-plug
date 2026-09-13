'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Bus } from 'lucide-react'
import { CtaButton } from './ui/cta'
import { useRequest } from './request-context'

export function Cta() {
  const { openRequest } = useRequest()

  return (
    <section id="request" className="mx-auto max-w-7xl scroll-mt-20 px-5 py-28 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6 }}
        className="relative overflow-hidden rounded-3xl border border-primary/20 bg-primary/[0.06] p-8 text-center shadow-[inset_0_1px_0_hsl(var(--primary)/.15)] sm:p-16"
      >
        <span className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />
        <Bus className="mx-auto size-6 text-primary" />
        <h2 className="mx-auto mt-5 max-w-2xl text-balance text-4xl font-medium tracking-[-.045em] text-white sm:text-6xl">
          Runarounds end at the last stop.
        </h2>
        <p className="mx-auto mt-5 max-w-lg leading-7 text-muted-foreground">
          Drop the brief below. We&apos;ll match it to the right specialist and come back with a
          name, a realistic timeline, and a clear next step — usually the same day.
        </p>
        <CtaButton onClick={openRequest} className="group mt-9">
          Start a request
          <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
        </CtaButton>
      </motion.div>
    </section>
  )
}