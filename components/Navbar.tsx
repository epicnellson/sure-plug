'use client'

import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowRight, Mail, Menu, MessageCircle, X } from 'lucide-react'
import { navLinks } from '@/lib/data'
import { site, whatsappUrl } from '@/lib/site'
import { BrandLogo } from './brand'
import { useRequest } from './request-context'

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const { openRequest } = useRequest()
  const closeBtnRef = useRef<HTMLButtonElement>(null)

  const closeMenu = () => setMenuOpen(false)

  useEffect(() => {
    if (!menuOpen) return
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    closeBtnRef.current?.focus()
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeMenu()
    }
    window.addEventListener('keydown', onKeyDown)
    return () => {
      document.body.style.overflow = prevOverflow
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [menuOpen])

  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-white/[0.08] bg-background/75 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-8">
        <a href="#top" aria-label="Sure Plug — back to top">
          <BrandLogo />
        </a>

        <nav className="hidden items-center gap-8 text-sm text-muted-foreground md:flex">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="transition hover:text-white">
              {link.label}
            </a>
          ))}
        </nav>

        <button
          onClick={() => openRequest()}
          className="group hidden items-center gap-2 rounded-full bg-primary px-4 py-2.5 text-sm font-semibold text-background shadow-[0_0_24px_hsl(var(--primary)/.22)] transition hover:bg-primary/90 hover:shadow-[0_0_32px_hsl(var(--primary)/.4)] active:scale-[.98] md:flex"
        >
          Start a request
          <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
        </button>

        <button
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          aria-haspopup="dialog"
          onClick={() => setMenuOpen((v) => !v)}
          className="rounded-lg border border-white/10 p-2 text-white transition hover:bg-white/5 md:hidden"
        >
          {menuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.button
              aria-label="Close menu"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={closeMenu}
              className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm md:hidden"
            />
            <motion.aside
              role="dialog"
              aria-modal="true"
              aria-label="Site menu"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="fixed inset-y-0 right-0 z-50 flex w-[min(20rem,85vw)] flex-col border-l border-white/10 bg-[#0c1410] shadow-2xl md:hidden"
            >
              <div className="flex items-center justify-between border-b border-white/10 px-5 py-5">
                <a href="#top" aria-label="Sure Plug — back to top" onClick={closeMenu}>
                  <BrandLogo />
                </a>
                <button
                  ref={closeBtnRef}
                  aria-label="Close menu"
                  onClick={closeMenu}
                  className="rounded-lg p-2 text-muted-foreground transition hover:bg-white/10 hover:text-white"
                >
                  <X className="size-5" />
                </button>
              </div>

              <nav className="flex flex-1 flex-col gap-1 overflow-y-auto px-4 py-6">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={closeMenu}
                    className="rounded-xl px-4 py-3 text-base font-medium text-muted-foreground transition hover:bg-white/5 hover:text-white"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>

              <div className="flex flex-col gap-3 border-t border-white/10 px-5 py-6">
                <button
                  onClick={() => {
                    closeMenu()
                    openRequest()
                  }}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-4 py-3.5 font-semibold text-background shadow-[0_0_20px_hsl(var(--primary)/.25)] transition hover:bg-primary/90 active:scale-[.98]"
                >
                  Start a request
                  <ArrowRight className="size-4" />
                </button>
                <div className="flex items-center justify-center gap-5 text-xs text-muted-foreground">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 transition hover:text-white"
                  >
                    <MessageCircle className="size-3.5" /> WhatsApp
                  </a>
                  <a
                    href={`mailto:${site.email}`}
                    className="inline-flex items-center gap-1.5 transition hover:text-white"
                  >
                    <Mail className="size-3.5" /> Email
                  </a>
                </div>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </header>
  )
}