import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { ArrowRight, Check, CircleDollarSign, Clock } from 'lucide-react'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { BackHome } from '@/components/back-home'
import { RequestServiceButton } from '@/components/request-service-button'
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

export default async function ServicePage({ params }: Params) {
  const { slug } = await params
  const detail = getServiceDetail(slug)
  const service = getServiceBySlug(slug)
  if (!detail || !service) notFound()

  const otherServices = serviceDetails.filter((item) => item.slug !== slug)

  return (
    <main className="min-h-screen overflow-x-clip bg-background text-foreground">
      <Navbar />

      <div className="mx-auto max-w-5xl px-5 pb-28 pt-40 lg:px-8 lg:pt-36">
        <BackHome href="/#services" label="Back to Services" pinned />

        <header className="mt-8 lg:mt-10">
          <p className="inline-flex rounded-full border border-primary/25 bg-primary/10 px-3 py-1 font-mono text-[11px] uppercase tracking-[.2em] text-primary">
            {service.title}
          </p>
          <h1 className="mt-5 max-w-3xl text-balance text-4xl font-medium tracking-[-.045em] text-white sm:text-5xl">
            {detail.title}.
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-muted-foreground">{detail.subtitle}</p>

          <div className="mt-7 flex flex-wrap gap-3">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-xs text-muted-foreground">
              <Clock className="size-3.5 text-primary" />
              {detail.turnaround}
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-xs text-muted-foreground">
              <CircleDollarSign className="size-3.5 text-primary" />
              {detail.pricing}
            </span>
          </div>

          <div className="mt-9">
            <RequestServiceButton service={detail.title} />
          </div>
        </header>

        {service.image && (
          <div className="relative mt-12 overflow-hidden rounded-2xl border border-white/10">
            <img
              src={service.image}
              alt={service.imageAlt ?? `${detail.title} — project example`}
              width={800}
              height={420}
              loading="eager"
              decoding="async"
              className="aspect-[32/17] w-full object-cover"
            />
            <span className="absolute inset-0 bg-gradient-to-t from-[#0b1010]/70 via-transparent to-transparent" />
          </div>
        )}
      </div>

      <div className="mx-auto max-w-5xl px-5 pb-24 lg:px-8">
        <section className="border-t border-white/[0.08] py-16">
          <p className="font-mono text-xs uppercase tracking-[.2em] text-primary">Overview</p>
          <h2 className="mt-3 max-w-2xl text-balance text-3xl font-medium tracking-[-.045em] text-white sm:text-4xl">
            What this service actually is.
          </h2>
          <p className="mt-6 max-w-3xl text-base leading-7 text-muted-foreground">{detail.overview}</p>
        </section>

        <section className="border-t border-white/[0.08] py-16">
          <p className="font-mono text-xs uppercase tracking-[.2em] text-primary">
            What it handles
          </p>
          <h2 className="mt-3 max-w-2xl text-balance text-3xl font-medium tracking-[-.045em] text-white sm:text-4xl">
            Built for specific jobs.
          </h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {detail.useCases.map((useCase) => (
              <div
                key={useCase.title}
                className="group rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition hover:border-primary/30 hover:bg-white/[0.05]"
              >
                <h3 className="text-base font-semibold text-white transition group-hover:text-primary">
                  {useCase.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">{useCase.copy}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="border-t border-white/[0.08] py-16">
          <p className="font-mono text-xs uppercase tracking-[.2em] text-primary">Included</p>
          <h2 className="mt-3 max-w-2xl text-balance text-3xl font-medium tracking-[-.045em] text-white sm:text-4xl">
            Everything that comes with it.
          </h2>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {detail.included.map((item) => (
              <li key={item} className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/[0.02] px-4 py-3.5">
                <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-primary/15 text-primary">
                  <Check className="size-3" />
                </span>
                <span className="text-sm leading-6 text-muted-foreground">{item}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="border-t border-white/[0.08] py-16">
          <p className="font-mono text-xs uppercase tracking-[.2em] text-primary">Process</p>
          <h2 className="mt-3 max-w-2xl text-balance text-3xl font-medium tracking-[-.045em] text-white sm:text-4xl">
            How it gets done.
          </h2>
          <ol className="mt-8 space-y-0">
            {detail.steps.map((step, i) => (
              <li key={step.title} className="relative flex gap-5 pb-2 pt-5 first:pt-0">
                {i < detail.steps.length - 1 && (
                  <span className="absolute left-[19px] top-[58px] h-[calc(100%-52px)] w-px bg-white/10" />
                )}
                <span className="flex size-11 shrink-0 items-center justify-center rounded-xl border border-primary/25 bg-primary/10 font-mono text-sm text-primary shadow-[0_0_24px_hsl(var(--primary)/.25)]">
                  0{i + 1}
                </span>
                <div className="pt-1">
                  <h3 className="text-base font-semibold text-white">{step.title}</h3>
                  <p className="mt-1.5 max-w-xl text-sm leading-6 text-muted-foreground">{step.copy}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section className="border-t border-white/[0.08] py-16">
          <p className="font-mono text-xs uppercase tracking-[.2em] text-primary">Real projects</p>
          <h2 className="mt-3 max-w-2xl text-balance text-3xl font-medium tracking-[-.045em] text-white sm:text-4xl">
            Deliverables &amp; case scenarios.
          </h2>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {detail.deliverables.map((deliverable) => (
              <div
                key={deliverable.title}
                className="flex flex-col rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition hover:border-primary/30"
              >
                <span className="flex size-9 items-center justify-center rounded-lg border border-primary/25 bg-primary/10 text-primary">
                  <ArrowRight className="size-4" />
                </span>
                <h3 className="mt-4 text-sm font-semibold text-white">{deliverable.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">{deliverable.copy}</p>
              </div>
            ))}
          </div>

          {detail.quote && (
            <figure className="mt-8 rounded-2xl border border-primary/20 bg-primary/[0.05] p-7 sm:p-9">
              <blockquote className="max-w-3xl text-lg leading-8 text-white">“{detail.quote.copy}”</blockquote>
              <figcaption className="mt-5 flex items-center gap-3">
                <span className="flex size-10 items-center justify-center rounded-full bg-primary/15 font-mono text-sm font-medium text-primary">
                  {detail.quote.by
                    .split(' ')
                    .map((word) => word[0])
                    .slice(0, 2)
                    .join('')}
                </span>
                <span>
                  <span className="block text-sm font-semibold text-white">{detail.quote.by}</span>
                  <span className="block text-xs text-muted-foreground">{detail.quote.project}</span>
                </span>
              </figcaption>
            </figure>
          )}
        </section>

        <section className="overflow-hidden rounded-2xl border border-primary/25 bg-gradient-to-br from-primary/[0.12] via-[#0c1410] to-[#0c1410] p-8 text-center sm:p-12">
          <h2 className="mx-auto max-w-xl text-balance text-3xl font-medium tracking-[-.045em] text-white sm:text-4xl">
            Need {detail.title.toLowerCase()}?
          </h2>
          <p className="mx-auto mt-4 max-w-md text-sm leading-6 text-muted-foreground">
            The quote and timeline go in writing before any work starts. Push the button and it
            opens with {detail.title.toLowerCase()} already selected.
          </p>
          <div className="mt-8 flex justify-center">
            <RequestServiceButton
              service={detail.title}
              label="Request This Service"
              className="px-8 py-4 text-base"
            />
          </div>
        </section>

        <nav className="mt-14 border-t border-white/[0.08] pt-10" aria-label="Other services">
          <p className="font-mono text-xs uppercase tracking-[.2em] text-primary">Keep exploring</p>
          <ul className="mt-5 grid gap-3 sm:grid-cols-2">
            {otherServices.map((other) => (
              <li key={other.slug}>
                <a
                  href={`/services/${other.slug}`}
                  className="group flex items-center justify-between gap-3 rounded-xl border border-white/10 bg-white/[0.02] px-5 py-4 transition hover:border-primary/30 hover:bg-white/[0.05]"
                >
                  <span className="text-sm font-semibold text-white">{other.title}</span>
                  <ArrowRight className="size-4 text-muted-foreground transition group-hover:translate-x-0.5 group-hover:text-primary" />
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <Footer />
    </main>
  )
}