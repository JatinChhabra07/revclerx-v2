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
    <section className="relative overflow-hidden bg-cream-50 border-t border-line">
      {/* Soft brand glows */}
      <div
        aria-hidden="true"
        className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full blur-[140px] pointer-events-none"
        style={{ background: 'rgba(122,43,196,0.18)' }}
      />
      <div
        aria-hidden="true"
        className="absolute -bottom-32 -right-20 w-[420px] h-[420px] rounded-full blur-[120px] pointer-events-none"
        style={{ background: 'rgba(233,30,131,0.14)' }}
      />
      <div
        aria-hidden="true"
        className="absolute -bottom-32 -left-20 w-[420px] h-[420px] rounded-full blur-[120px] pointer-events-none"
        style={{ background: 'rgba(51,64,212,0.14)' }}
      />

      <div className="relative max-w-5xl mx-auto px-6 py-24 md:py-32 text-center">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-xs uppercase tracking-[0.3em] text-muted"
        >
          {eyebrow}
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
          className="mt-5 text-4xl md:text-7xl font-semibold tracking-tight leading-[1.05] text-ink-900 text-balance"
        >
          {title}
        </motion.h2>
        {body && (
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-7 max-w-2xl mx-auto text-base md:text-lg text-body leading-relaxed"
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
          <Link href={primaryHref} className="btn-accent">
            <CalendarCheck className="w-4 h-4" />
            {primaryLabel}
            <ArrowUpRight className="w-4 h-4" />
          </Link>
          {secondaryLabel && secondaryHref && (
            <Link href={secondaryHref} className="btn-secondary">
              {secondaryLabel}
            </Link>
          )}
        </motion.div>
      </div>
    </section>
  )
}
