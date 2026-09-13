'use client'

import { motion } from 'framer-motion'
import { services } from '@/lib/data'
import { ServiceCard } from './ServiceCard'

export function Services() {
  return (
    <section
      id="services"
      className="scroll-mt-20 border-y border-white/[0.08] bg-white/[0.018] px-5 py-28 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="mb-14 flex flex-col justify-between gap-5 md:flex-row md:items-end"
        >
          <div>
            <p className="mb-4 font-mono text-xs uppercase tracking-[.2em] text-primary">
              What we handle
            </p>
            <h2 className="max-w-2xl text-balance text-4xl font-medium tracking-[-.045em] text-white sm:text-5xl">
              One direct line to work <span className="text-muted-foreground">that gets done.</span>
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-6 text-muted-foreground">
            No layers of account managers. No mystery timelines. Just the right specialist for the
            job — and a reply when you message them.
          </p>
        </motion.div>

        <div className="grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </div>
      </div>
    </section>
  )
}