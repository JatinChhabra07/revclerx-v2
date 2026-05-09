'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import Brand from './Brand'
import { ArrowRight, ChevronDown, Menu, X } from 'lucide-react'

const NAV = [
  { label: 'Solutions', href: '/solutions' },
  { label: 'How it works', href: '/how-it-works' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
] as const

const SOLUTIONS_DROPDOWN = [
  {
    label: 'AI Transformation Assessment',
    href: '/solutions#assessment',
    desc: 'A focused 4-week diagnostic',
  },
  {
    label: 'Continuous AI Transformation',
    href: '/solutions#continuous',
    desc: 'Monthly partnership across the org',
  },
  {
    label: 'Enterprise Deployment',
    href: '/solutions#deployment',
    desc: 'Forward-deployed engineers in-house',
  },
] as const

export default function Header() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [dropdown, setDropdown] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href)

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-cream/85 backdrop-blur-xl border-b border-line shadow-[0_2px_24px_-8px_rgba(10,10,10,0.06)]'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Brand href="/" />

        <nav className="hidden lg:flex items-center gap-8 text-sm text-ink-700">
          {NAV.map((item) =>
            item.label === 'Solutions' ? (
              <div
                key={item.href}
                className="relative"
                onMouseEnter={() => setDropdown(true)}
                onMouseLeave={() => setDropdown(false)}
              >
                <Link
                  href={item.href}
                  className={`inline-flex items-center gap-1 transition-colors ${
                    isActive(item.href) ? 'text-ink-900 font-semibold' : 'hover:text-ink-900'
                  }`}
                >
                  {item.label}
                  <ChevronDown
                    className={`w-3.5 h-3.5 transition-transform ${dropdown ? 'rotate-180' : ''}`}
                  />
                </Link>
                {dropdown && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 w-[360px]">
                    <div className="bg-white border border-line rounded-2xl shadow-[0_24px_60px_-20px_rgba(10,10,10,0.18)] p-2">
                      {SOLUTIONS_DROPDOWN.map((s) => (
                        <Link
                          key={s.href}
                          href={s.href}
                          className="block px-4 py-3 rounded-xl hover:bg-cream-200 transition group"
                        >
                          <p className="text-sm font-semibold text-ink-900 group-hover:text-accent transition-colors">
                            {s.label}
                          </p>
                          <p className="mt-0.5 text-xs text-muted">{s.desc}</p>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className={
                  isActive(item.href)
                    ? 'text-ink-900 font-semibold'
                    : 'hover:text-ink-900 transition-colors'
                }
              >
                {item.label}
              </Link>
            )
          )}
        </nav>

        <div className="flex items-center gap-3">
          <Link href="/contact" className="hidden sm:inline-flex btn-primary">
            Book a call
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
          <button
            type="button"
            className="lg:hidden text-ink-900 p-2 -mr-2"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-line bg-cream/95 backdrop-blur-xl">
          <div className="px-6 py-5 space-y-1">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block py-2.5 text-sm text-ink-700 hover:text-ink-900 transition-colors"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="mt-3 inline-flex btn-primary"
            >
              Book a call
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
