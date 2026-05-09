import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Talk to a senior partner at RevClerx. Tell us about your AI program and a partner will write back within one business day.'
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
