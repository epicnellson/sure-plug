import type { Metadata } from 'next'
import { LegalLayout, LegalSection } from '@/components/legal-layout'
import { site } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Terms & Conditions',
  description:
    'The agreed terms for using Sure Plug — how requests are processed, timelines, deposits, and client responsibilities.',
}

export default function TermsPage() {
  return (
    <LegalLayout eyebrow="Legal" title="Terms & Conditions" updated="September 12, 2026">
      <LegalSection heading="What Sure Plug is">
        <p>
          Sure Plug is a matching service. We connect clients with a vetted network of
          independent specialists who carry out the work. Sure Plug is not the employer of these
          specialists, and each job is delivered directly by the person assigned to you.
        </p>
      </LegalSection>

      <LegalSection heading="How a request works">
        <p>
          Submit the brief through the &quot;Start a request&quot; form. A member of the team
          reviews it and replies directly — normally on the same day. Once scope and price are
          agreed, your specialist is assigned and work begins. There are no hidden layers: the
          person who replies is connected to the person who does the work.
        </p>
      </LegalSection>

      <LegalSection heading="Timelines & delivery">
        <p>
          Turnaround times on the site are working estimates (for example &quot;3–7 business
          days&quot;). They become binding only once you approve the agreed scope and schedule in
          writing — by email or WhatsApp. If a delay is caused by a third party outside our control
          (a supplier, payment processor, or freight carrier), we tell you as soon as we know and
          agree a revised date with you.
        </p>
      </LegalSection>

      <LegalSection heading="Deposits & payment">
        <p>
          We don&apos;t charge anything just to submit a request or to reply to you. Once scope,
          price, and schedule are confirmed, some projects require a deposit before work starts;
          the balance is due on completion or at agreed milestones. Deposit terms are stated
          clearly in your quote before you commit to anything.
        </p>
      </LegalSection>

      <LegalSection heading="Client responsibilities">
        <p>
          You provide an accurate brief and the materials needed to execute it (logos, content,
          references, access as required). Delays caused by slow responses or missing assets count
          against project timelines. You agree to pay for work already completed if you cancel after
          sign-off.
        </p>
      </LegalSection>

      <LegalSection heading="Deliverables & ownership">
        <p>
          Finished work, including design and code source files, transfers to you once the final
          payment for that request is received. Unless agreed otherwise, we don&apos;t reuse your
          proprietary content or trade secrets for other clients.
        </p>
      </LegalSection>

      <LegalSection heading="If something isn&apos;t right">
        <p>
          Tell us within 7 days of delivery and we&apos;ll fix genuine defects at no extra cost
          before considering the job complete. We keep details and a delivery record for each
          request so this is easy to action.
        </p>
      </LegalSection>

      <LegalSection heading="Limitation of liability">
        <p>
          Specialists and Sure Plug each work in good faith to deliver what was agreed. To the
          extent permitted by law, liability for a given request is limited to the amount you
          actually paid for that request. Nothing here limits your statutory rights.
        </p>
      </LegalSection>

      <LegalSection heading="Disputes & contact">
        <p>
          Start with a direct message to {site.email} or WhatsApp. We respond to every dispute
          personally and aim to resolve it within 7 days. For anything else, ask us a question on
          the FAQ page.
        </p>
      </LegalSection>
    </LegalLayout>
  )
}