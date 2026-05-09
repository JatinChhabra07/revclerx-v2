import type { Metadata } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap'
})

const grotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-grotesk',
  display: 'swap'
})

export const metadata: Metadata = {
  metadataBase: new URL('https://revclerx.ai'),
  title: {
    default: 'RevClerx | Your AI transformation partner',
    template: '%s | RevClerx'
  },
  description:
    'RevClerx is a senior consulting team that helps enterprises ship AI programs that survive contact with reality. Assessment, continuous transformation, and production deployment.',
  keywords: [
    'enterprise AI consulting',
    'AI readiness assessment',
    'AI deployment',
    'AI transformation',
    'RevClerx'
  ],
  openGraph: {
    type: 'website',
    title: 'RevClerx | Your AI transformation partner',
    description:
      'A senior consulting team for enterprise AI programs. Honest assessments, durable architectures, and deployments that hold up in production.',
    url: 'https://revclerx.ai',
    siteName: 'RevClerx'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'RevClerx | Your AI transformation partner',
    description:
      'A senior consulting team for enterprise AI programs. Honest assessments, durable architectures, and deployments that hold up in production.'
  },
  robots: {
    index: true,
    follow: true
  },
  icons: {
    icon: '/favicon.ico'
  }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${grotesk.variable}`}>
      <body className="bg-[#f9f7f3] text-[#3a3a3a] antialiased font-sans">{children}</body>
    </html>
  )
}
