'use client'

import { motion } from 'framer-motion'
import { ArrowRight, ShieldCheck, Zap } from 'lucide-react'
import { stats } from '@/lib/data'
import { CtaButton, CtaLink } from './ui/cta'
import { useRequest } from './request-context'

export function Hero() {
  const { openRequest } = useRequest()

  return (
    <section
      id="top"
      className="relative isolate mx-auto flex min-h-[760px] max-w-7xl scroll-mt-24 items-center px-5 pb-24 pt-36 lg:px-8"
    >
      <div className="absolute -right-24 top-24 -z-10 size-[480px] rounded-full bg-primary/10 blur-[120px]" />
      <div className="absolute bottom-0 left-1/3 -z-10 h-40 w-96 rounded-full bg-cyan-400/5 blur-[100px]" />

      <div className="grid w-full items-center gap-16 lg:grid-cols-[1.1fr_.9fr]">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-7 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.2em] text-primary"
          >
            <span className="size-1.5 animate-pulse rounded-full bg-primary" />
            Taking new requests
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="max-w-4xl text-balance text-5xl font-medium leading-[.98] tracking-[-.055em] text-white sm:text-7xl lg:text-[5.5rem] xl:text-[6.4rem]"
          >
            Your <span className="text-primary">sure plug</span> for what&apos;s next.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-8 max-w-xl text-pretty text-lg leading-8 text-muted-foreground"
          >
            Direct contacts, vetted operators, real timelines. No middlemen, no runaround, no
            ghosting.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-10 flex flex-wrap items-center gap-3"
          >
            <CtaButton onClick={openRequest} className="group">
              Get connected now
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </CtaButton>
            <CtaLink href="#services">View service catalog</CtaLink>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-14 grid max-w-2xl grid-cols-3 gap-5 border-t border-white/10 pt-6"
          >
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="text-2xl font-semibold text-white sm:text-3xl">
                  {stat.value}
                  {stat.suffix && <span className="text-primary">{stat.suffix}</span>}
                </p>
                <p className="mt-1 text-xs text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>

        <div className="relative hidden min-h-[420px] lg:block">
          <motion.div
            initial={{ opacity: 0, y: 40, rotate: 8 }}
            animate={{ opacity: 1, y: 0, rotate: 3 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="absolute right-0 top-4 w-[350px] xl:w-[390px]"
          >
            <div className="animate-float rounded-[2rem] border border-white/10 bg-white/[0.035] p-5 shadow-2xl">
              <div className="flex h-full flex-col justify-between rounded-2xl border border-white/10 bg-[#111817] p-7">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs tracking-[.2em] text-primary">PLUG / 001</span>
                  <span className="flex size-8 items-center justify-center rounded-full bg-primary/15 text-primary shadow-[0_0_20px_hsl(var(--primary)/.25)]">
                    <Zap className="size-4" />
                  </span>
                </div>
                <div className="my-8">
                  <p className="font-mono text-xs uppercase tracking-[.18em] text-muted-foreground">
                    Execution status
                  </p>
                  <p className="mt-3 text-5xl font-medium tracking-[-.06em] text-white">
                    Locked in<span className="text-primary">.</span>
                  </p>
                </div>
                <div className="flex items-center gap-3 border-t border-white/10 pt-5 text-sm text-muted-foreground">
                  <span className="flex size-8 items-center justify-center rounded-full bg-primary/15 text-primary">
                    <ShieldCheck className="size-4" />
                  </span>
                  Verified operator network
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30, rotate: -10 }}
            animate={{ opacity: 1, y: 0, rotate: -6 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="absolute bottom-4 left-2 w-64"
          >
            <div className="animate-float rounded-2xl border border-cyan-300/20 bg-cyan-200/[0.06] p-5 backdrop-blur-xl [animation-delay:-3s]">
              <p className="font-mono text-xs uppercase tracking-[.18em] text-cyan-300">
                Live availability
              </p>
              <div className="mt-4 flex items-end justify-between">
                <span className="text-3xl font-semibold text-white">Open</span>
                <span className="flex items-center gap-1.5 text-xs text-cyan-300">
                  <span className="size-1.5 animate-pulse rounded-full bg-cyan-300" /> online
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}