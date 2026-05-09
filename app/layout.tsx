import type { Metadata } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-inter',
  display: 'swap'
})

const grotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['500', '700'],
  variable: '--font-grotesk',
  display: 'swap'
})

export const metadata: Metadata = {
  metadataBase: new URL('https://revclerx.ai'),
  title: {
    default: 'RevClerx.ai | Enterprise AI That Delivers Outcomes',
    template: '%s | RevClerx.ai'
  },
  description:
    'RevClerx partners with enterprises to design, deploy, and operationalize AI that drives measurable business value. 50+ deployments, 12+ industries, 4 week POC delivery.',
  applicationName: 'RevClerx.ai',
  keywords: [
    'enterprise AI',
    'AI consulting',
    'AI agents',
    'process automation',
    'conversational AI',
    'AI strategy',
    'ML operations'
  ],
  authors: [{ name: 'RevClerx.ai' }],
  openGraph: {
    type: 'website',
    siteName: 'RevClerx.ai',
    title: 'RevClerx.ai | Enterprise AI That Delivers Outcomes',
    description:
      'AI that works. Results that matter. Assess, accelerate, and sustain enterprise AI with RevClerx.',
    url: 'https://revclerx.ai',
    images: [{ url: '/logo.png', width: 1200, height: 630, alt: 'RevClerx.ai' }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'RevClerx.ai | Enterprise AI That Delivers Outcomes',
    description: 'AI that works. Results that matter.',
    images: ['/logo.png']
  },
  robots: { index: true, follow: true },
  icons: { icon: '/favicon.svg' }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${grotesk.variable}`}>
      <body className="bg-white text-slate-700 antialiased font-sans">
        <div className="bg-grid" aria-hidden="true" />
        {children}
      </body>
    </html>
  )
}
