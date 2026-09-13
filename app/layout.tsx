import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { ToastProvider } from '@/components/Toast'
import { RequestProvider } from '@/components/request-context'
import { site } from '@/lib/site'
import './globals.css'

const title = `Sure Plug – Direct Execution, No Middlemen`

export const metadata: Metadata = {
  metadataBase: new URL(site.baseUrl),
  title: {
    default: title,
    template: '%s · Sure Plug',
  },
  description:
    'Fast, verified, and 100% reliable. Direct execution with zero middleman delays. Sure Plug connects you directly with specialized developers & designers — real timelines, direct replies, no ghosting.',
  applicationName: site.name,
  keywords: [
    'Sure Plug',
    'web development',
    'app development',
    'graphic design',
    'product sourcing',
    'priority assistance',
    'digital strategy',
  ],
  authors: [{ name: site.name }],
  category: 'Business',
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: [{ url: '/brand-mark.png', sizes: '512x512', type: 'image/png' }],
    shortcut: '/brand-mark.png',
    apple: [{ url: '/apple-icon.png', sizes: '180x180', type: 'image/png' }],
  },
  appleWebApp: {
    title: site.name,
    capable: true,
    statusBarStyle: 'black-translucent',
  },
  manifest: '/site.webmanifest',
  openGraph: {
    type: 'website',
    url: '/',
    siteName: site.name,
    title,
    description:
      'Fast, verified, and 100% reliable. Direct execution with zero middleman delays. Sure Plug connects you directly with specialized developers & designers — real timelines, direct replies, no ghosting.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: `${site.name} — Direct Execution. No Middlemen.`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description:
      'Fast, verified, and 100% reliable. Direct execution with zero middleman delays. Sure Plug connects you directly with specialized developers & designers — real timelines, direct replies, no ghosting.',
    images: ['/og-image.png'],
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