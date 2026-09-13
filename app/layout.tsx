import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { ToastProvider } from '@/components/Toast'
import { RequestProvider } from '@/components/request-context'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://sureplug.co'),
  title: {
    default: 'SurePlug – Direct Contacts, Vetted Operators, Real Timelines',
    template: '%s · SurePlug',
  },
  description:
    'Skip the middlemen. SurePlug connects you directly with vetted operators for web & app builds, design, product sourcing, and time-critical assistance — with real timelines and no ghosting.',
  applicationName: 'SurePlug',
  keywords: [
    'SurePlug',
    'web development',
    'app development',
    'graphic design',
    'product sourcing',
    'priority assistance',
    'digital strategy',
  ],
  authors: [{ name: 'SurePlug' }],
  category: 'Business',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    url: '/',
    siteName: 'SurePlug',
    title: 'SurePlug – Direct Contacts, Vetted Operators, Real Timelines',
    description:
      'Skip the middlemen. SurePlug connects you directly with vetted operators for web & app builds, design, product sourcing, and time-critical assistance — with real timelines and no ghosting.',
  },
  twitter: {
    card: 'summary',
    title: 'SurePlug – Direct Contacts, Vetted Operators, Real Timelines',
    description:
      'Skip the middlemen. SurePlug connects you directly with vetted operators for web & app builds, design, product sourcing, and time-critical assistance — with real timelines and no ghosting.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#10b981',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <ToastProvider>
          <RequestProvider>{children}</RequestProvider>
        </ToastProvider>
        {process.env.NODE_ENV === 'production' && process.env.VERCEL === '1' && <Analytics />}
      </body>
    </html>
  )
}