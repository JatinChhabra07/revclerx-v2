export const siteConfig = {
  name: 'RevClerx',
  domain: 'revclerx.ai',
  email: 'hello@revclerx.ai',
  phone: '+1 (415) 555-0142',
  tagline: 'Your enterprise AI transformation partner.',
  social: {
    linkedin: '#',
    twitter: '#'
  },
  nav: [
    { label: 'Solutions', href: '/solutions' },
    { label: 'How it works', href: '/how-it-works' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' }
  ],
  solutions: [
    { label: 'AI Readiness Assessment', href: '/solutions#assessment' },
    { label: 'Continuous Transformation', href: '/solutions#continuous' },
    { label: 'Enterprise Deployment', href: '/solutions#deployment' }
  ],
  company: [
    { label: 'About', href: '/about' },
    { label: 'How it works', href: '/how-it-works' },
    { label: 'Contact', href: '/contact' }
  ]
} as const
