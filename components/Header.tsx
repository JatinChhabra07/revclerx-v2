'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Brand from './Brand'
import { ArrowRight, ChevronDown, Menu, X } from 'lucide-react'
import { dropdownVariants, itemVariants, ease } from '@/lib/motion'

const NAV = [
  { label: 'Services', href: '/solutions' },
  { label: 'How it works', href: '/how-it-works' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
] as const

const SOLUTIONS_DROPDOWN = [
  {
    label: 'AI Strategy & Consulting',
    href: '/solutions#consulting',
    desc: 'Readiness, roadmap, ROI in 3 to 4 weeks',
  },
  {
    label: 'Data Engineering & AI Foundations',
    href: '/solutions#data',
    desc: 'Lakehouses, pipelines, vector stores',
  },
  {
    label: 'AI & GenAI Implementation',
    href: '/solutions#implementation',
    desc: 'Custom agents, RAG, fine-tunes, ML',
  },
  {
    label: 'AI Process Automation',
    href: '/solutions#automation',
    desc: 'Document AI, agentic workflows, copilots',
  },
  {
    label: 'Managed AI Operations & Scale',
    href: '/solutions#scale',
    desc: 'MLOps, monitoring, scale-out',
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

  // Close mobile menu when route changes.
  useEffect(() => {
    setOpen(false)
  }, [pathname])

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href)

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-cream/85 backdrop-blur-xl border-b border-line shadow-[0_2px_24px_-8px_rgba(10,10,10,0.06)]'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <motion.div
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          transition={{ type: 'spring', stiffness: 400, damping: 22 }}
        >
          <Brand href="/" />
        </motion.div>

        <nav className="hidden lg:flex items-center gap-1 text-sm text-ink-700">
          {NAV.map((item) =>
            item.label === 'Services' ? (
              <div
                key={item.href}
                className="relative"
                onMouseEnter={() => setDropdown(true)}
                onMouseLeave={() => setDropdown(false)}
              >
                <Link
                  href={item.href}
                  className={`relative inline-flex items-center gap-1 px-3 py-2 rounded-full transition-colors ${
                    isActive(item.href) ? 'text-ink-900 font-semibold' : 'hover:text-ink-900'
                  }`}
                >
                  {item.label}
                  <ChevronDown
                    className={`w-3.5 h-3.5 transition-transform ${dropdown ? 'rotate-180' : ''}`}
                  />
                  {isActive(item.href) && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute left-3 right-3 -bottom-0.5 h-[2px] rounded-full"
                      style={{
                        background:
                          'linear-gradient(90deg, #3340D4, #7A2BC4, #E91E83)',
                      }}
                      transition={{ type: 'spring', stiffness: 320, damping: 28 }}
                    />
                  )}
                </Link>
                <AnimatePresence>
                  {dropdown && (
                    <motion.div
                      variants={dropdownVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      className="absolute top-full left-1/2 -translate-x-1/2 pt-3 w-[380px]"
                    >
                      <div className="bg-white border border-line rounded-2xl shadow-[0_24px_60px_-20px_rgba(10,10,10,0.18)] p-2">
                        {SOLUTIONS_DROPDOWN.map((s) => (
                          <motion.div key={s.href} variants={itemVariants}>
                            <Link
                              href={s.href}
                              className="block px-4 py-3 rounded-xl hover:bg-accent-soft transition group"
                            >
                              <p className="text-sm font-semibold text-ink-900 group-hover:text-accent transition-colors">
                                {s.label}
                              </p>
                              <p className="mt-0.5 text-xs text-muted">{s.desc}</p>
                            </Link>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className={`relative inline-flex items-center px-3 py-2 rounded-full transition-colors ${
                  isActive(item.href)
                    ? 'text-ink-900 font-semibold'
                    : 'hover:text-ink-900'
                }`}
              >
                {item.label}
                {isActive(item.href) && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute left-3 right-3 -bottom-0.5 h-[2px] rounded-full"
                    style={{
                      background:
                        'linear-gradient(90deg, #3340D4, #7A2BC4, #E91E83)',
                    }}
                    transition={{ type: 'spring', stiffness: 320, damping: 28 }}
                  />
                )}
              </Link>
            )
          )}
        </nav>

        <div className="flex items-center gap-3">
          <motion.div
            whileHover={{ y: -1 }}
            whileTap={{ y: 0, scale: 0.98 }}
            transition={{ type: 'spring', stiffness: 400, damping: 22 }}
            className="hidden sm:inline-flex"
          >
            <Link href="/contact" className="btn-accent">
              Book a call
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </motion.div>
          <button
            type="button"
            className="lg:hidden text-ink-900 p-2 -mr-2"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <motion.span
              key={open ? 'x' : 'm'}
              initial={{ rotate: -45, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              transition={{ duration: 0.18 }}
              className="block"
            >
              {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </motion.span>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease }}
            className="lg:hidden border-t border-line bg-cream/95 backdrop-blur-xl overflow-hidden"
          >
            <div className="px-6 py-5 space-y-1">
              {NAV.map((item, i) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.05 + i * 0.04, ease }}
                >
                  <Link
                    href={item.href}
                    className="block py-2.5 text-sm text-ink-700 hover:text-accent transition-colors"
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.25, ease }}
              >
                <Link
                  href="/contact"
                  onClick={() => setOpen(false)}
                  className="mt-3 inline-flex btn-accent"
                >
                  Book a call
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
