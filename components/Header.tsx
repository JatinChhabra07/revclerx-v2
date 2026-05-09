'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import Brand from './Brand'
import { siteConfig } from '@/lib/site-config'

export default function Header() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/'
    return pathname.startsWith(href)
  }

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-xl bg-white/85 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Brand href="/" />
        <nav className="hidden lg:flex items-center gap-8 text-sm text-slate-600">
          {siteConfig.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={
                isActive(item.href)
                  ? 'text-slate-900 font-semibold'
                  : 'hover:text-slate-900 transition'
              }
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <Link
          href="/contact"
          className="hidden sm:inline-flex items-center gap-2 rounded-full bg-[#1f4d3a] hover:bg-[#163829] px-5 py-2 text-sm font-medium text-[#faf6ef] transition-colors"
        >
          Book a Strategy Call <span aria-hidden>→</span>
        </Link>
        <button
          type="button"
          className="lg:hidden text-slate-900 text-2xl"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? '×' : '☰'}
        </button>
      </div>
      {open && (
        <div className="lg:hidden border-t border-slate-200 px-6 py-4 space-y-3 text-sm text-slate-600 bg-white">
          {siteConfig.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block hover:text-slate-900"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  )
}
