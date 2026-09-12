'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Sparkles } from 'lucide-react'
import { CtaButton } from './ui/cta'
import { useRequest } from './request-context'

export function Cta() {
  const { openRequest } = useRequest()

  return (
    <section id="faq" className="mx-auto max-w-7xl scroll-mt-20 px-5 py-28 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6 }}
        className="rounded-3xl border border-primary/20 bg-primary/[0.06] p-8 text-center shadow-[inset_0_1px_0_hsl(var(--primary)/.15)] sm:p-16"
      >
        <Sparkles className="mx-auto size-6 text-primary" />
        <h2 className="mx-auto mt-5 max-w-2xl text-balance text-4xl font-medium tracking-[-.045em] text-white sm:text-6xl">
          Have a request? We&apos;ve got a plug for that.
        </h2>
        <p className="mx-auto mt-5 max-w-lg leading-7 text-muted-foreground">
          Tell us what you need. We&apos;ll match you with the right operator and come back with a
          clear next step.
        </p>
        <CtaButton onClick={openRequest} className="group mt-9">
          Start a request
          <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
        </CtaButton>
      </motion.div>
    </section>
  )
}