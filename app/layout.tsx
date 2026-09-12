import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { ToastProvider } from '@/components/Toast'
import { RequestProvider } from '@/components/request-context'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://sureplug.co'),
  title: {
    default: 'SurePlug – Your Direct Line to Top-Tier Execution',
    template: '%s · SurePlug',
  },
  description:
    'Fast, verified, and 100% reliable service provider platform. Get connected to premium services—tech, design, sourcing, and more.',
  applicationName: 'SurePlug',
  keywords: [
    'SurePlug',
    'freelance services',
    'web development',
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
  icons: {
    icon: [
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
  },
  openGraph: {
    type: 'website',
    url: '/',
    siteName: 'SurePlug',
    title: 'SurePlug – Your Direct Line to Top-Tier Execution',
    description:
      'Fast, verified, and 100% reliable service provider platform. Get connected to premium services—tech, design, sourcing, and more.',
  },
  twitter: {
    card: 'summary',
    title: 'SurePlug – Your Direct Line to Top-Tier Execution',
    description:
      'Fast, verified, and 100% reliable service provider platform. Get connected to premium services—tech, design, sourcing, and more.',
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