import type { Metadata } from 'next'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { BackHome } from '@/components/back-home'
import { site } from '@/lib/site'

export const metadata: Metadata = {
  title: 'FAQ',
  description:
    'How Last Bus Stop works: request timelines, deposits, refunds, specialist vetting, and where to reach the team.',
}

const faqs: Array<{ q: string; a: string }> = [
  {
    q: 'What exactly does Last Bus Stop do?',
    a: 'We match you with a specialized developer or designer who actually does the work — web and app builds, design, product sourcing, strategy, and time-critical assistance. You talk to one real person, not a ticketing queue.',
  },
  {
    q: 'Why "Last Bus Stop"?',
    a: 'Because it is the final destination after every other option. No more juggling cold leads, chasing quotes, or projects that stall halfway. You arrive, you get matched, work gets done.',
  },
  {
    q: 'How fast do I hear back after submitting a request?',
    a: 'The team is notified the moment you submit. A first reply usually lands within 15 minutes, and practically all requests get a reply the same day.',
  },
  {
    q: 'Does it cost anything to submit a request or get a quote?',
    a: 'No. Submitting the form and getting our reply is free. Some projects require a deposit before work starts, but only after you approve the scope and price in writing.',
  },
  {
    q: 'Who actually does the work?',
    a: 'A hand-checked specialist assigned to your brief. Every operator is vetted for craft, communication, and follow-through before joining the network — and you keep their direct contact for the whole job.',
  },
  {
    q: 'What happens if the delivery isn’t right?',
    a: 'Tell us within 7 days and we fix genuine defects at no extra cost before we call the job done. If something is fundamentally off, we re-match you rather than leave you stuck.',
  },
  {
    q: 'Can I get a refund?',
    a: 'Refunds and rework follow the deposit and payment terms on your signed quote. If we miss an agreed deadline through our own fault, we say so and make it right — often by waiving the balance.',
  },
  {
    q: 'Do you only work with local clients?',
    a: 'No. Most work is digital and our network spans multiple regions, currencies, and time zones. Your WhatsApp number can be in a different country from ours — we work wherever the job needs to get done.',
  },
  {
    q: 'How do I reach a human, right now?',
    a: `Email ${site.email} or WhatsApp ${site.whatsapp}. If it's urgent, mark it "URGENT" and it jumps the queue.`,
  },
]

export default function FaqPage() {
  return (
    <main className="min-h-screen overflow-x-clip bg-background text-foreground">
      <Navbar />
      <div className="mx-auto max-w-3xl px-5 pb-24 pt-40 lg:px-8 lg:pt-36">
        <BackHome />
        <p className="mt-8 font-mono text-xs uppercase tracking-[.2em] text-primary">Answers</p>
        <h1 className="mt-3 text-balance text-4xl font-medium tracking-[-.045em] text-white sm:text-5xl">
          Straight questions, straight answers.
        </h1>
        <p className="mt-4 max-w-lg leading-7 text-muted-foreground">
          Everything clients ask before they press submit. Anything not covered — just message us
          directly.
        </p>

        <div className="mt-10 divide-y divide-white/10 border-y border-white/10">
          {faqs.map((item) => (
            <details key={item.q} className="group py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left text-base font-semibold text-white transition group-open:text-primary [&::-webkit-details-marker]:hidden">
                {item.q}
                <span className="shrink-0 rounded-full border border-white/10 p-1 text-muted-foreground transition group-open:rotate-45 group-open:border-primary/40 group-open:text-primary">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                    <path d="M7 1v12M1 7h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </span>
              </summary>
              <p className="mt-3 max-w-xl leading-7 text-muted-foreground">{item.a}</p>
            </details>
          ))}
        </div>

        <div className="mt-10 rounded-2xl border border-primary/20 bg-primary/[0.05] p-6 text-center">
          <p className="text-sm text-muted-foreground">
            Still on the fence? Message us and get a straight answer.
          </p>
          <p className="mt-2 font-mono text-xs text-primary">{site.email}</p>
        </div>
      </div>
      <Footer />
    </main>
  )
}