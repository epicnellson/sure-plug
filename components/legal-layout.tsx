import type { ReactNode } from 'react'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'

export function LegalLayout({
  eyebrow,
  title,
  updated,
  children,
}: {
  eyebrow: string
  title: string
  updated: string
  children: ReactNode
}) {
  return (
    <main className="min-h-screen overflow-x-clip bg-background text-foreground">
      <Navbar />
      <div className="mx-auto min-h-[70vh] max-w-3xl px-5 pb-24 pt-36 lg:px-8">
        <a href="/" className="font-mono text-xs uppercase tracking-[.2em] text-muted-foreground transition hover:text-primary">
          ← Back to SurePlug
        </a>
        <p className="mt-8 font-mono text-xs uppercase tracking-[.2em] text-primary">{eyebrow}</p>
        <h1 className="mt-3 text-balance text-4xl font-medium tracking-[-.045em] text-white sm:text-5xl">
          {title}
        </h1>
        <p className="mt-4 font-mono text-xs text-muted-foreground/70">Last updated {updated}</p>
        <div className="mt-10 space-y-10">{children}</div>
      </div>
      <Footer />
    </main>
  )
}

export function LegalSection({ heading, children }: { heading: string; children: ReactNode }) {
  return (
    <section>
      <h2 className="text-xl font-semibold tracking-[-.02em] text-white">{heading}</h2>
      <div className="mt-3 space-y-3 leading-7 text-muted-foreground">{children}</div>
    </section>
  )
}