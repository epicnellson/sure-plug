import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import {
  ArrowDown,
  ArrowRight,
  Check,
  CircleDollarSign,
  Clock,
  Quote,
  ShieldCheck,
  Sparkles,
} from 'lucide-react'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { BackHome } from '@/components/back-home'
import { RequestServiceButton } from '@/components/request-service-button'
import { CtaLink } from '@/components/ui/cta'
import { getServiceBySlug } from '@/lib/data'
import { getServiceDetail, serviceDetails } from '@/lib/servicesData'

export const dynamicParams = false

export function generateStaticParams() {
  return serviceDetails.map((detail) => ({ slug: detail.slug }))
}

type Params = { params: Promise<{ slug: string }> }

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params
  const detail = getServiceDetail(slug)
  if (!detail) return { title: 'Service not found' }

  return {
    title: detail.title,
    description: detail.subtitle,
    alternates: { canonical: `/services/${slug}` },
    openGraph: {
      title: `${detail.title} · Sure Plug`,
      description: detail.subtitle,
      type: 'website',
      url: `/services/${slug}`,
      images: ['/og-image.png'],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${detail.title} · Sure Plug`,
      description: detail.subtitle,
      images: ['/og-image.png'],
    },
  }
}

function SectionHeading({
  eyebrow,
  title,
  count,
}: {
  eyebrow: string
  title: string
  count?: number
}) {
  return (
    <div className="flex items-end justify-between gap-6">
      <div>
        <p className="font-mono text-xs uppercase tracking-[.2em] text-primary">{eyebrow}</p>
        <h2 className="mt-3 max-w-xl text-balance text-2xl font-medium tracking-[-.045em] text-white sm:text-3xl">
          {title}
        </h2>
      </div>
      {typeof count === 'number' && (
        <p className="shrink-0 pb-1 font-mono text-xs text-muted-foreground/70">
          {String(count).padStart(2, '0')}
        </p>
      )}
    </div>
  )
}

export default async function ServicePage({ params }: Params) {
  const { slug } = await params
  const detail = getServiceDetail(slug)
  const service = getServiceBySlug(slug)
  if (!detail || !service) notFound()

  const index = serviceDetails.findIndex((item) => item.slug === slug)
  const plugNo = `PLUG / ${String(index + 1).padStart(3, '0')}`
  const otherServices = serviceDetails.filter((item) => item.slug !== slug)
  const Icon = service.icon

  const snapshot = [
    { icon: Clock, label: 'Turnaround', value: detail.turnaround },
    { icon: CircleDollarSign, label: 'Pricing', value: detail.pricing },
    {
      icon: ShieldCheck,
      label: 'Execution',
      value: 'Direct to the specialist — no middlemen, no hand-offs',
    },
    { icon: Sparkles, label: 'Commitment', value: 'Scope, quote, and timeline agreed in writing first' },
  ]

  const onThisPage = [
    { href: '#usecases', label: 'What it handles' },
    { href: '#process', label: 'How it gets done' },
    { href: '#included', label: 'What is included' },
    { href: '#deliverables', label: 'Real projects' },
  ]

  return (
    <main className="min-h-screen overflow-x-clip bg-background text-foreground">
      <Navbar />
      <BackHome href="/#services" label="Back to Services" pinned />

      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="relative mx-auto max-w-7xl overflow-x-clip px-5 pb-16 pt-40 lg:px-8 lg:pt-44">
        <div aria-hidden className="absolute -left-40 top-16 -z-10 size-[440px] rounded-full bg-primary/10 blur-[130px]" />
        <div aria-hidden className="absolute -right-24 top-40 -z-10 size-[360px] rounded-full bg-cyan-400/[0.06] blur-[120px]" />

        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_.95fr] lg:gap-20">
          <header>
            <p className="inline-flex items-center gap-2.5 rounded-full border border-primary/25 bg-primary/[0.07] px-4 py-1.5 font-mono text-[11px] uppercase tracking-[.2em] text-primary">
              <span className="size-1.5 rounded-full bg-primary shadow-[0_0_10px_hsl(var(--primary)/.8)]" />
              {plugNo} · {service.title}
            </p>
            <h1 className="mt-7 max-w-2xl text-balance text-4xl font-medium leading-[1.05] tracking-[-.05em] text-white sm:text-5xl lg:text-6xl">
              {detail.title}
            </h1>
            <p className="mt-6 max-w-xl text-pretty text-lg leading-8 text-muted-foreground">
              {detail.subtitle}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-xs text-muted-foreground">
                <Clock className="size-3.5 text-primary" />
                {detail.turnaround}
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-xs text-muted-foreground">
                <CircleDollarSign className="size-3.5 text-primary" />
                {detail.pricing}
              </span>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-3">
              <RequestServiceButton service={detail.title} />
              <CtaLink href="#process">
                How it works
                <ArrowDown className="size-4" />
              </CtaLink>
            </div>
          </header>

          {service.image && (
            <figure className="relative isolate hidden sm:block">
              <span
                aria-hidden
                className="absolute inset-3 -z-10 rotate-2 rounded-[2rem] border border-primary/25 bg-primary/[0.06]"
              />
              <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-card shadow-[0_24px_80px_rgba(0,0,0,.5)]">
                <img
                  src={service.image}
                  alt={service.imageAlt ?? `${detail.title} — project example`}
                  width={800}
                  height={600}
                  loading="eager"
                  decoding="async"
                  className="aspect-[4/3] w-full object-cover"
                />
                <span className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#0b1010] via-[#0b1010]/40 to-transparent" />

                <span className="absolute left-4 top-4 rounded-full border border-white/15 bg-black/45 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[.2em] text-white/85 backdrop-blur-md">
                  {plugNo}
                </span>

                <span className="absolute bottom-4 right-4 inline-flex animate-float items-center gap-2 rounded-full border border-white/15 bg-black/45 px-3.5 py-2 text-[11px] font-medium text-white backdrop-blur-md">
                  <span className="flex size-5 items-center justify-center rounded-full bg-primary/25 text-primary">
                    <Icon className="size-3" />
                  </span>
                  Verified &amp; direct
                </span>
              </div>
            </figure>
          )}
        </div>
      </section>

      {/* ── Overview ─────────────────────────────────────────── */}
      <section className="border-t border-white/[0.08]">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 py-16 lg:grid-cols-[minmax(0,260px)_1fr] lg:gap-16 lg:py-20">
          <div>
            <p className="font-mono text-xs uppercase tracking-[.2em] text-primary">Overview</p>
            <h2 className="mt-3 max-w-[220px] text-balance text-2xl font-medium tracking-[-.045em] text-white sm:text-3xl">
              The short version
            </h2>
          </div>
          <p className="max-w-3xl text-pretty text-lg leading-8 text-muted-foreground">
            {detail.overview}
          </p>
        </div>
      </section>

      {/* ── Content + sticky sidebar ─────────────────────────── */}
      <section className="border-t border-white/[0.08]">
        <div className="mx-auto max-w-7xl px-5 py-16 lg:py-24">
          <div className="grid gap-16 lg:grid-cols-[minmax(0,1fr)_320px] lg:gap-16">
            <div className="min-w-0 space-y-20 lg:space-y-24">
              {/* Use cases */}
              <section id="usecases" className="scroll-mt-28">
                <SectionHeading
                  eyebrow="What it handles"
                  title="Built for specific jobs"
                  count={detail.useCases.length}
                />
                <div className="mt-10 grid gap-4 sm:grid-cols-2">
                  {detail.useCases.map((useCase, i) => (
                    <div
                      key={useCase.title}
                      className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition hover:border-primary/30 hover:bg-white/[0.05]"
                    >
                      <span className="absolute right-5 top-5 font-mono text-[11px] text-muted-foreground/40 transition group-hover:text-primary/70">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <h3 className="pr-10 text-base font-semibold text-white transition group-hover:text-primary">
                        {useCase.title}
                      </h3>
                      <p className="mt-2 text-sm leading-6 text-muted-foreground">{useCase.copy}</p>
                      <ArrowRight className="mt-5 size-4 text-muted-foreground/50 transition-all duration-300 group-hover:translate-x-1 group-hover:text-primary" />
                    </div>
                  ))}
                </div>
              </section>

              {/* Process */}
              <section id="process" className="scroll-mt-28">
                <SectionHeading
                  eyebrow="Process"
                  title="How it gets done"
                  count={detail.steps.length}
                />
                <ol className="mt-10">
                  {detail.steps.map((step, i) => (
                    <li key={step.title} className="relative flex gap-5 pb-2 pt-5 first:pt-0">
                      {i < detail.steps.length - 1 && (
                        <span className="absolute left-[23px] top-[64px] h-[calc(100%-56px)] w-px bg-gradient-to-b from-primary/40 to-white/10" />
                      )}
                      <span className="flex size-12 shrink-0 items-center justify-center rounded-xl border border-primary/25 bg-primary/10 font-mono text-sm text-primary shadow-[0_0_24px_hsl(var(--primary)/.2)]">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <div className="pt-2.5">
                        <h3 className="text-base font-semibold text-white">{step.title}</h3>
                        <p className="mt-1.5 max-w-xl text-sm leading-6 text-muted-foreground">
                          {step.copy}
                        </p>
                      </div>
                    </li>
                  ))}
                </ol>
              </section>

              {/* Included */}
              <section id="included" className="scroll-mt-28">
                <SectionHeading
                  eyebrow="Included"
                  title="Everything that comes with it"
                  count={detail.included.length}
                />
                <ul className="mt-10 grid gap-3 sm:grid-cols-2">
                  {detail.included.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/[0.02] px-4 py-3.5 transition hover:border-primary/25"
                    >
                      <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-primary/15 text-primary">
                        <Check className="size-3" />
                      </span>
                      <span className="text-sm leading-6 text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </section>

              {/* Deliverables + quote */}
              <section id="deliverables" className="scroll-mt-28">
                <SectionHeading
                  eyebrow="Real projects"
                  title="Deliverables &amp; case scenarios"
                  count={detail.deliverables.length}
                />
                <div className="mt-10 grid gap-4 md:grid-cols-3">
                  {detail.deliverables.map((deliverable) => (
                    <div
                      key={deliverable.title}
                      className="group flex flex-col rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition hover:-translate-y-0.5 hover:border-primary/30 hover:bg-white/[0.05]"
                    >
                      <span className="flex size-9 items-center justify-center rounded-lg border border-primary/25 bg-primary/10 text-primary">
                        <ArrowRight className="size-4" />
                      </span>
                      <h3 className="mt-4 text-sm font-semibold text-white">{deliverable.title}</h3>
                      <p className="mt-2 text-sm leading-6 text-muted-foreground">
                        {deliverable.copy}
                      </p>
                    </div>
                  ))}
                </div>

                {detail.quote && (
                  <figure className="relative mt-8 overflow-hidden rounded-2xl border border-primary/15 bg-primary/[0.04] p-7 sm:p-9">
                    <Quote
                      aria-hidden
                      className="absolute -right-3 -top-3 size-24 text-primary/[0.08]"
                    />
                    <blockquote className="relative max-w-3xl text-pretty text-lg leading-8 text-white">
                      “{detail.quote.copy}”
                    </blockquote>
                    <figcaption className="relative mt-6 flex items-center gap-4 border-t border-primary/15 pt-6">
                      <span className="flex size-11 items-center justify-center rounded-full bg-primary/15 font-mono text-sm font-medium text-primary">
                        {detail.quote.by
                          .split(' ')
                          .map((w) => w[0])
                          .slice(0, 2)
                          .join('')}
                      </span>
                      <span>
                        <span className="block text-sm font-semibold text-white">
                          {detail.quote.by}
                        </span>
                        <span className="block text-xs text-muted-foreground">
                          {detail.quote.project}
                        </span>
                      </span>
                    </figcaption>
                  </figure>
                )}
              </section>
            </div>

            {/* Sidebar */}
            <aside className="h-fit space-y-5 lg:sticky lg:top-28">
              <div className="rounded-2xl border border-white/10 bg-card p-6">
                <p className="font-mono text-xs uppercase tracking-[.2em] text-primary">
                  On this page
                </p>
                <ul className="mt-4 space-y-1">
                  {onThisPage.map((item) => (
                    <li key={item.href}>
                      <a
                        href={item.href}
                        className="group flex items-center justify-between rounded-lg px-3 py-2 text-sm text-muted-foreground transition hover:bg-white/5 hover:text-white"
                      >
                        {item.label}
                        <ArrowRight className="size-3.5 text-muted-foreground/50 transition group-hover:translate-x-0.5 group-hover:text-primary" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-2xl border border-white/10 bg-card p-6">
                <p className="font-mono text-xs uppercase tracking-[.2em] text-primary">
                  Snapshot
                </p>
                <dl className="mt-5 space-y-5">
                  {snapshot.map((row) => (
                    <div key={row.label} className="flex gap-4">
                      <span className="flex size-9 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03] text-primary">
                        <row.icon className="size-4" />
                      </span>
                      <div className="min-w-0">
                        <dt className="text-[11px] uppercase tracking-[.14em] text-muted-foreground/60">
                          {row.label}
                        </dt>
                        <dd className="mt-0.5 text-sm leading-6 text-white">{row.value}</dd>
                      </div>
                    </div>
                  ))}
                </dl>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* ── CTA band ─────────────────────────────────────────── */}
      <section className="mx-auto max-w-7xl px-5 pb-24 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-primary/25 bg-gradient-to-br from-primary/[0.12] via-[#0c1410] to-[#0c1410] p-8 text-center shadow-[inset_0_1px_0_hsl(var(--primary)/.15)] sm:p-14">
          <span className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />
          <span aria-hidden className="absolute -right-20 -top-20 size-56 rounded-full bg-primary/10 blur-3xl" />
          <h2 className="mx-auto max-w-xl text-balance text-3xl font-medium tracking-[-.045em] text-white sm:text-4xl">
            Need {detail.title.toLowerCase()}
          </h2>
          <p className="mx-auto mt-4 max-w-md text-sm leading-6 text-muted-foreground">
            The quote and timeline go in writing before any work starts. The button below opens the
            request form with {detail.title.toLowerCase()} already selected.
          </p>
          <div className="mt-8 flex justify-center">
            <RequestServiceButton
              service={detail.title}
              label="Request This Service"
              className="px-8 py-4 text-base"
            />
          </div>
        </div>
      </section>

      {/* ── Keep exploring ───────────────────────────────────── */}
      <section className="border-t border-white/[0.08]">
        <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-20">
          <div className="flex items-end justify-between gap-6">
            <div>
              <p className="font-mono text-xs uppercase tracking-[.2em] text-primary">
                Keep exploring
              </p>
              <h2 className="mt-3 max-w-xl text-balance text-2xl font-medium tracking-[-.045em] text-white sm:text-3xl">
                Other ways we can plug in
              </h2>
            </div>
            <CtaLink href="/#services" className="hidden shrink-0 sm:inline-flex">
              View full catalog
              <ArrowRight className="size-4" />
            </CtaLink>
          </div>

          <ul className="mt-10 grid gap-4 lg:grid-cols-3">
            {otherServices.map((other) => {
              const otherService = getServiceBySlug(other.slug)
              const OtherIcon = otherService?.icon
              return (
                <li key={other.slug}>
                  <a
                    href={`/services/${other.slug}`}
                    className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.02] p-5 transition hover:-translate-y-0.5 hover:border-primary/30 hover:bg-white/[0.05]"
                  >
                    {OtherIcon && (
                      <span className="flex size-11 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-primary/[0.06] text-primary transition group-hover:border-primary/40 group-hover:bg-primary/10">
                        <OtherIcon className="size-5" />
                      </span>
                    )}
                    <span className="min-w-0 flex-1">
                      <span className="block truncate text-sm font-semibold text-white">
                        {other.title}
                      </span>
                      <span className="mt-0.5 block truncate text-xs text-muted-foreground">
                        {other.subtitle}
                      </span>
                    </span>
                    <ArrowRight className="size-4 shrink-0 text-muted-foreground/50 transition group-hover:translate-x-0.5 group-hover:text-primary" />
                  </a>
                </li>
              )
            })}
          </ul>
        </div>
      </section>

      <Footer />
    </main>
  )
}