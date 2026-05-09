import type { Metadata } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-inter',
  display: 'swap'
})

const grotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  variable: '--font-grotesk',
  display: 'swap'
})

export const metadata: Metadata = {
  metadataBase: new URL('https://revclerx.ai'),
  title: {
    default: 'RevClerx | Your AI Transformation Partner',
    template: '%s | RevClerx'
  },
  description:
    'RevClerx maps how your company really works, identifies where AI should change it, and helps you make it happen. Senior consultants paired with dedicated AI agents.',
  applicationName: 'RevClerx',
  keywords: [
    'enterprise AI',
    'AI transformation',
    'AI consulting',
    'AI agents',
    'process automation',
    'AI strategy'
  ],
  authors: [{ name: 'RevClerx' }],
  openGraph: {
    type: 'website',
    siteName: 'RevClerx',
    title: 'RevClerx | Your AI Transformation Partner',
    description:
      'We map how your company really works, identify where AI shifts the math, and stay alongside your team until the change is real.',
    url: 'https://revclerx.ai',
    images: [{ url: '/og.png', width: 1200, height: 630, alt: 'RevClerx' }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'RevClerx | Your AI Transformation Partner',
    description: 'AI scale for breadth. Human judgment for depth.',
    images: ['/og.png']
  },
  robots: { index: true, follow: true },
  icons: { icon: '/favicon.svg' }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${grotesk.variable}`}>
      <body className="bg-cream text-body antialiased font-sans">
        {children}
      </body>
    </html>
  )
}
