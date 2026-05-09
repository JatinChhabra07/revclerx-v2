'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import Brand from './Brand'
import { siteConfig } from '@/lib/site-config'
import { cn } from '@/lib/utils'

export default function Header() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/'
    return pathname?.startsWith(href)
  }

  return (
    <header className="sticky top-0 z-40 border-b border-[#ebe6dd] bg-[#f9f7f3]/85 backdrop-blur supports-[backdrop-filter]:bg-[#f9f7f3]/70">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-10">
            <Brand size="md" />
            <nav className="hidden md:flex items-center gap-8">
              {siteConfig.nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    'text-sm text-[#3a3a3a] hover:text-[#1C1C1C] transition-colors',
                    isActive(item.href) &&
                      'text-[#1C1C1C] underline underline-offset-8 decoration-[#ff5a1f] decoration-2'
                  )}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center rounded-full bg-[#1C1C1C] px-4 py-2 text-sm font-medium text-[#f9f7f3] hover:bg-black transition-colors"
            >
              Book a call
            </Link>
          </div>

          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-[#1C1C1C]"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {open ? (
                <path d="M18 6 6 18M6 6l12 12" strokeLinecap="round" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
              )}
            </svg>
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4">
            <nav className="flex flex-col gap-1 pt-2 border-t border-[#ebe6dd]">
              {siteConfig.nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    'rounded-md px-2 py-2 text-sm text-[#3a3a3a]',
                    isActive(item.href) && 'text-[#1C1C1C] font-medium'
                  )}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="mt-2 inline-flex items-center justify-center rounded-full bg-[#1C1C1C] px-4 py-2 text-sm font-medium text-[#f9f7f3]"
              >
                Book a call
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
