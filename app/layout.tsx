import type { Metadata } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import './globals.css'
import { ScrollProgress } from '@/components/ui/scroll-progress'

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
    default: 'RevClerx | AI Transformation, From Strategy to Production',
    template: '%s | RevClerx'
  },
  description:
    'RevClerx is an AI transformation partner for enterprises. We deliver AI consulting, GenAI implementation, and managed AI operations, from board-ready strategy to systems running in production.',
  applicationName: 'RevClerx',
  keywords: [
    'AI consulting',
    'AI transformation',
    'enterprise AI',
    'GenAI implementation',
    'AI strategy',
    'agentic AI',
    'AI implementation services',
    'MLOps',
    'AI readiness assessment',
    'AI services company'
  ],
  authors: [{ name: 'RevClerx' }],
  openGraph: {
    type: 'website',
    siteName: 'RevClerx',
    title: 'RevClerx | AI Transformation, From Strategy to Production',
    description:
      'AI consulting and implementation for enterprises. We pair board-ready strategy with engineers who ship, and stay through scale.',
    url: 'https://revclerx.ai',
    images: [{ url: '/og.png', width: 1200, height: 630, alt: 'RevClerx' }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'RevClerx | AI Transformation, From Strategy to Production',
    description: 'AI consulting plus implementation. From roadmap to production AI on your stack.',
    images: ['/og.png']
  },
  robots: { index: true, follow: true }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${grotesk.variable}`}>
      <body className="bg-cream text-body antialiased font-sans">
        <ScrollProgress />
        {children}
      </body>
    </html>
  )
}
