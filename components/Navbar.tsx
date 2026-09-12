'use client'

import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowRight, Menu, PlugZap, X } from 'lucide-react'
import { navLinks } from '@/lib/data'
import { useRequest } from './request-context'

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const { openRequest } = useRequest()

  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-white/[0.08] bg-background/75 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-8">
        <a
          href="#top"
          className="flex items-center gap-2 font-mono text-sm font-bold tracking-[0.18em] text-white"
        >
          <span className="flex size-8 items-center justify-center rounded-lg bg-primary text-background shadow-[0_0_20px_hsl(var(--primary)/.35)]">
            <PlugZap className="size-4" />
          </span>
          SUREPLUG
          <span className="ml-1 size-1.5 rounded-full bg-primary shadow-[0_0_10px_hsl(var(--primary))]" />
        </a>

        <nav className="hidden items-center gap-8 text-sm text-muted-foreground md:flex">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="transition hover:text-white">
              {link.label}
            </a>
          ))}
        </nav>

        <button
          onClick={openRequest}
          className="group hidden items-center gap-2 rounded-full bg-primary px-4 py-2.5 text-sm font-semibold text-background shadow-[0_0_24px_hsl(var(--primary)/.22)] transition hover:bg-primary/90 hover:shadow-[0_0_32px_hsl(var(--primary)/.4)] active:scale-[.98] md:flex"
        >
          Request a Plug
          <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
        </button>

        <button
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
          className="rounded-lg border border-white/10 p-2 text-white transition hover:bg-white/5 md:hidden"
        >
          {menuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="overflow-hidden border-t border-white/10 md:hidden"
          >
            <div className="flex flex-col gap-1 px-5 py-5">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="rounded-lg px-3 py-2.5 text-sm text-muted-foreground transition hover:bg-white/5 hover:text-white"
                >
                  {link.label}
                </a>
              ))}
              <button
                onClick={() => {
                  setMenuOpen(false)
                  openRequest()
                }}
                className="mt-2 w-fit rounded-full bg-primary px-4 py-2 font-semibold text-background shadow-[0_0_20px_hsl(var(--primary)/.25)] transition hover:bg-primary/90"
              >
                Request a Plug
              </button>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}