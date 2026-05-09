import Link from 'next/link'
import Brand from './Brand'
import { ArrowUpRight, Linkedin, Twitter, Mail } from 'lucide-react'

const FOOTER_NAV = {
  Solutions: [
    { label: 'AI Transformation Assessment', href: '/solutions#assessment' },
    { label: 'Continuous AI Transformation', href: '/solutions#continuous' },
    { label: 'Enterprise Deployment', href: '/solutions#deployment' },
  ],
  Company: [
    { label: 'About', href: '/about' },
    { label: 'How it works', href: '/how-it-works' },
    { label: 'Contact', href: '/contact' },
  ],
  Resources: [
    { label: 'Blog', href: '#' },
    { label: 'Research', href: '#' },
    { label: 'Case study', href: '#' },
  ],
}

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="relative bg-ink-950 text-cream/80 overflow-hidden">
      <div aria-hidden="true" className="absolute -top-40 -left-32 w-[420px] h-[420px] rounded-full bg-accent/30 blur-[120px] pointer-events-none" />
      <div aria-hidden="true" className="absolute -bottom-40 right-0 w-[380px] h-[380px] rounded-full bg-accent/20 blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 pt-20 md:pt-28 pb-10">
        {/* Big CTA mark */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 pb-16 md:pb-20 border-b border-cream/10">
          <div className="lg:col-span-6">
            <p className="text-xs uppercase tracking-[0.25em] text-cream/50">Begin your AI transformation</p>
            <h3 className="mt-4 text-4xl md:text-6xl font-semibold tracking-tight text-cream leading-[1.05]">
              Let&apos;s map your <br className="hidden md:block" />
              <span className="italic font-light">company&apos;s next move.</span>
            </h3>
            <Link
              href="/contact"
              className="mt-9 inline-flex items-center gap-2 rounded-full bg-cream px-7 py-3.5 text-sm font-semibold text-ink-900 hover:bg-white transition-all hover:translate-x-1"
            >
              Book a call with our team
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="lg:col-span-6 lg:pl-12 lg:border-l lg:border-cream/10">
            <p className="text-sm text-cream/60 leading-relaxed max-w-md">
              Senior consultants paired with dedicated AI agents. Built for enterprises and fast-scaling mid-market organizations across regulated industries.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-6 max-w-md">
              <div>
                <p className="text-xs uppercase tracking-widest text-cream/45">Email</p>
                <a href="mailto:hello@revclerx.ai" className="mt-1 block text-sm font-medium text-cream hover:text-accent transition">
                  hello@revclerx.ai
                </a>
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-cream/45">Office</p>
                <p className="mt-1 text-sm font-medium text-cream">San Francisco, CA</p>
              </div>
            </div>
          </div>
        </div>

        {/* Link columns */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 pt-12">
          <div className="lg:col-span-4">
            <Brand href={undefined} light />
            <p className="mt-4 text-sm text-cream/55 leading-relaxed max-w-sm">
              We map how your organization actually works, identify where AI shifts the math, and stay alongside your team until the change is real.
            </p>
            <div className="flex gap-2 mt-6">
              {[
                { Icon: Linkedin, href: '#' },
                { Icon: Twitter, href: '#' },
                { Icon: Mail, href: 'mailto:hello@revclerx.ai' },
              ].map(({ Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  aria-label="Social"
                  className="w-9 h-9 rounded-full border border-cream/15 flex items-center justify-center text-cream/60 hover:text-cream hover:border-cream/40 hover:bg-cream/5 transition-all"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
          {Object.entries(FOOTER_NAV).map(([title, items]) => (
            <div key={title} className="lg:col-span-2">
              <h4 className="text-xs uppercase tracking-[0.2em] text-cream/45 mb-5">{title}</h4>
              <ul className="space-y-3">
                {items.map((item) => (
                  <li key={item.label}>
                    <Link href={item.href} className="text-sm text-cream/75 hover:text-cream transition-colors">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div className="lg:col-span-2">
            <h4 className="text-xs uppercase tracking-[0.2em] text-cream/45 mb-5">Legal</h4>
            <ul className="space-y-3 text-sm text-cream/75">
              <li><Link href="#" className="hover:text-cream transition">Privacy</Link></li>
              <li><Link href="#" className="hover:text-cream transition">Terms</Link></li>
              <li><Link href="#" className="hover:text-cream transition">Security</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-cream/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-cream/45">
          <p>© {year} RevClerx · All rights reserved.</p>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse-soft" />
            <span>System operational</span>
          </div>
        </div>
      </div>

      {/* HUGE WORDMARK */}
      <div className="relative overflow-hidden border-t border-cream/10">
        <p className="text-center font-display font-bold tracking-tighter text-cream/[0.04] leading-none py-8 md:py-12 text-[18vw] select-none">
          REVCLERX
        </p>
      </div>
    </footer>
  )
}
