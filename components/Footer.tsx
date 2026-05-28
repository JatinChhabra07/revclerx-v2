import Link from 'next/link'
import Brand from './Brand'
import { ArrowUpRight, Linkedin, Twitter, Mail } from 'lucide-react'

const FOOTER_NAV = {
  Services: [
    { label: 'AI Strategy & Consulting', href: '/solutions#consulting' },
    { label: 'Data Engineering & Foundations', href: '/solutions#data' },
    { label: 'AI & GenAI Implementation', href: '/solutions#implementation' },
    { label: 'AI Process Automation', href: '/solutions#automation' },
    { label: 'Managed AI Operations', href: '/solutions#scale' },
  ],
  Company: [
    { label: 'About', href: '/about' },
    { label: 'How it works', href: '/how-it-works' },
    { label: 'Contact', href: '/contact' },
  ],
  Resources: [
    { label: 'Blog', href: '#' },
    { label: 'Insights', href: '#' },
    { label: 'Case studies', href: '#' },
  ],
}

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="relative bg-cream-200 text-body border-t border-line overflow-hidden">
      {/* Soft brand glows */}
      <div
        aria-hidden="true"
        className="absolute -top-40 -left-32 w-[420px] h-[420px] rounded-full blur-[120px] pointer-events-none"
        style={{ background: 'rgba(51,64,212,0.10)' }}
      />
      <div
        aria-hidden="true"
        className="absolute -bottom-40 right-0 w-[380px] h-[380px] rounded-full blur-[120px] pointer-events-none"
        style={{ background: 'rgba(233,30,131,0.10)' }}
      />

      <div className="relative max-w-7xl mx-auto px-6 pt-20 md:pt-28 pb-10">
        {/* Big CTA mark */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 pb-16 md:pb-20 border-b border-line">
          <div className="lg:col-span-6">
            <p className="text-xs uppercase tracking-[0.25em] text-muted">Begin your AI transformation</p>
            <h3 className="mt-4 text-4xl md:text-6xl font-semibold tracking-tight text-ink-900 leading-[1.05]">
              Let&apos;s map your <br className="hidden md:block" />
              <span className="italic font-light grad-text-brand">company&apos;s next move.</span>
            </h3>
            <Link href="/contact" className="mt-9 btn-accent">
              Book a call with our team
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="lg:col-span-6 lg:pl-12 lg:border-l lg:border-line">
            <p className="text-sm text-body leading-relaxed max-w-md">
              AI consulting and implementation under one roof. Built for enterprises and fast-scaling mid-market organizations across BFSI, healthcare, retail, and manufacturing.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-6 max-w-md">
              <div>
                <p className="text-xs uppercase tracking-widest text-muted">Email</p>
                <a href="mailto:hello@revclerx.ai" className="mt-1 block text-sm font-semibold text-ink-900 hover:text-accent transition">
                  hello@revclerx.ai
                </a>
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-muted">Office</p>
                <p className="mt-1 text-sm font-semibold text-ink-900">San Francisco, CA</p>
              </div>
            </div>
          </div>
        </div>

        {/* Link columns */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 pt-12">
          <div className="lg:col-span-4">
            <Brand href={undefined} />
            <p className="mt-4 text-sm text-body leading-relaxed max-w-sm">
              AI strategy plus AI implementation under one roof. We deliver the roadmap and the engineers who ship it, and stay through scale.
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
                  className="w-9 h-9 rounded-full border border-line bg-white flex items-center justify-center text-muted hover:text-accent hover:border-accent transition-all"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
          {Object.entries(FOOTER_NAV).map(([title, items]) => (
            <div key={title} className="lg:col-span-2">
              <h4 className="text-xs uppercase tracking-[0.2em] text-muted mb-5">{title}</h4>
              <ul className="space-y-3">
                {items.map((item) => (
                  <li key={item.label}>
                    <Link href={item.href} className="text-sm text-body hover:text-accent transition-colors">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div className="lg:col-span-2">
            <h4 className="text-xs uppercase tracking-[0.2em] text-muted mb-5">Legal</h4>
            <ul className="space-y-3 text-sm text-body">
              <li><Link href="#" className="hover:text-accent transition">Privacy</Link></li>
              <li><Link href="#" className="hover:text-accent transition">Terms</Link></li>
              <li><Link href="#" className="hover:text-accent transition">Security</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-line flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted">
          <p>© {year} RevClerx · All rights reserved.</p>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse-soft" />
            <span>System operational</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
