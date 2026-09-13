import type { Metadata } from 'next'
import { LegalLayout, LegalSection } from '@/components/legal-layout'
import { site } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'How Sure Plug handles the personal data you submit through the request form — plain English, no legalese.',
}

export default function PrivacyPage() {
  return (
    <LegalLayout eyebrow="Legal" title="Privacy Policy" updated="September 12, 2026">
      <LegalSection heading="The short version">
        <p>
          When you submit a request through the &quot;Start a request&quot; form, we collect the
          minimum needed to get your job done and have a human reply to you. We never sell your
          data, never rent it, and never hand it to advertisers.
        </p>
      </LegalSection>

      <LegalSection heading="What we collect">
        <ul className="list-disc pl-5">
          <li>Your name, so the specialist knows who they&apos;re talking to.</li>
          <li>An email address or WhatsApp number, so we can actually reply.</li>
          <li>The service category and budget range you picked, to match the right specialist.</li>
          <li>The project details you describe, because that&apos;s the brief.</li>
          <li>
            Basic technical data (IP address, timestamp) purely to block spam and abuse on the
            form.
          </li>
        </ul>
      </LegalSection>

      <LegalSection heading="How we use it">
        <p>
          Your submission is used strictly to fulfill your request: matching a specialist, sending
          you a reply, and following up until your job is done. We don&apos;t use it for marketing
          emails, newsletters, or ad retargeting — ever.
        </p>
      </LegalSection>

      <LegalSection heading="Who sees it">
        <p>
          The request goes to the Sure Plug team and the specific specialist handling your job.
          To alert the team instantly, a submission may pass through a third-party messaging or
          email delivery service (for example a push-notification or email service). These
          providers only relay your message; none of them are allowed to use it for their own
          purposes.
        </p>
      </LegalSection>

      <LegalSection heading="Storage & retention">
        <p>
          Submissions are kept in protected storage so we can honour our reply promise and keep a
          record of what was agreed. You can ask us to delete your submission at any time — just
          email {site.email} with the reference number from the confirmation screen and we&apos;ll
          remove it.
        </p>
      </LegalSection>

      <LegalSection heading="Cookies & analytics">
        <p>
          We don&apos;t set tracking or advertising cookies. We use privacy-preserving, aggregate
          website analytics (Vercel Analytics) that don&apos;t identify individual visitors — it
          simply tells us which pages get viewed.
        </p>
      </LegalSection>

      <LegalSection heading="Your rights">
        <p>
          You can request a copy of the data we hold about you, ask for corrections, or request
          deletion at any time. Reach us at {site.email} or on WhatsApp and a real person will
          action it — usually within 48 hours.
        </p>
      </LegalSection>
    </LegalLayout>
  )
}