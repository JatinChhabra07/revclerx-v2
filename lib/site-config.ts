export const siteConfig = {
  name: 'RevClerx.ai',
  domain: 'revclerx.ai',
  email: 'hello@revclerx.ai',
  phone: '+1 (415) 555-0142',
  tagline: 'AI That Works. Results That Matter.',
  social: {
    linkedin: '#',
    twitter: '#',
    facebook: '#'
  },
  nav: [
    { label: 'Solutions', href: '/solutions' },
    { label: 'How it works', href: '/how-it-works' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' }
  ],
  services: [
    { label: 'AI Readiness Assessment', href: '/solutions#assessment' },
    { label: 'Continuous Transformation', href: '/solutions#continuous' },
    { label: 'Enterprise Deployment', href: '/solutions#deployment' }
  ],
  company: [
    { label: 'About', href: '/about' },
    { label: 'How it works', href: '/how-it-works' },
    { label: 'Contact', href: '/contact' }
  ],
  stats: [
    { value: 50, suffix: '+', label: 'Enterprise Deployments' },
    { value: 12, suffix: '+', label: 'Industries Served' },
    { value: 4, suffix: ' wks', label: 'Average POC Delivery' },
    { value: 94, suffix: '%', label: 'Client Retention' }
  ]
} as const
