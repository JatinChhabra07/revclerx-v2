'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowUpRight, CalendarCheck } from 'lucide-react'

type Props = {
  eyebrow?: string
  title: string
  body?: string
  primaryLabel?: string
  primaryHref?: string
  secondaryLabel?: string
  secondaryHref?: string
}

export function CTABanner({
  eyebrow = 'Begin your AI transformation',
  title,
  body,
  primaryLabel = 'Book a strategy call',
  primaryHref = '/contact',
  secondaryLabel,
  secondaryHref,
}: Props) {
  return (
    <section className="relative overflow-hidden bg-ink-950 text-cream">
      {/* glows */}
      <div aria-hidden="true" className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full bg-accent/30 blur-[140px] pointer-events-none" />
      <div aria-hidden="true" className="absolute -bottom-32 -right-20 w-[420px] h-[420px] rounded-full bg-amber-500/10 blur-[120px] pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-6 py-24 md:py-32 text-center">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-xs uppercase tracking-[0.3em] text-cream/55"
        >
          {eyebrow}
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
          className="mt-5 text-4xl md:text-7xl font-semibold tracking-tight leading-[1.05] text-cream text-balance"
        >
          {title}
        </motion.h2>
        {body && (
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-7 max-w-2xl mx-auto text-base md:text-lg text-cream/70 leading-relaxed"
          >
            {body}
          </motion.p>
        )}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="mt-11 flex flex-wrap items-center justify-center gap-3"
        >
          <Link
            href={primaryHref}
            className="inline-flex items-center gap-2 rounded-full bg-cream px-7 py-4 text-sm font-semibold text-ink-900 hover:bg-white transition-all hover:translate-x-1"
          >
            <CalendarCheck className="w-4 h-4 text-accent" />
            {primaryLabel}
            <ArrowUpRight className="w-4 h-4" />
          </Link>
          {secondaryLabel && secondaryHref && (
            <Link
              href={secondaryHref}
              className="inline-flex items-center gap-2 rounded-full border border-cream/25 bg-cream/5 backdrop-blur px-7 py-4 text-sm font-semibold text-cream hover:bg-cream/10 hover:border-cream/40 transition-all"
            >
              {secondaryLabel}
            </Link>
          )}
        </motion.div>
      </div>
    </section>
  )
}
