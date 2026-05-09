'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Lock, Users, Layers, Zap, BarChart3, Globe } from 'lucide-react'

/**
 * Bento grid of differentiators - 6 cards with mixed layouts
 */
export function FeatureBento() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-6 gap-5">
      {/* BIG - col-span-4 - Mapped at AI scale */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="md:col-span-4 relative overflow-hidden rounded-3xl bg-white border border-line p-8 md:p-10 card-hover min-h-[280px] flex flex-col justify-between"
      >
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center justify-center w-9 h-9 rounded-xl bg-accent-soft border border-accent/20">
            <Layers className="w-4 h-4 text-accent" />
          </span>
          <span className="text-xs uppercase tracking-[0.2em] text-muted">Operational map</span>
        </div>
        <div>
          <h3 className="mt-6 text-2xl md:text-3xl font-semibold tracking-tight text-ink-900 leading-tight max-w-md">
            Mapped at the speed of AI. Validated by senior judgment.
          </h3>
          <p className="mt-3 text-sm md:text-base text-body leading-relaxed max-w-lg">
            Parallel interviews surface every signal. A senior partner pressure tests every conclusion before it ends up on the roadmap.
          </p>
        </div>
        {/* visual decoration */}
        <div aria-hidden="true" className="absolute -right-10 -bottom-10 w-72 h-72 opacity-30">
          <div className="absolute inset-0 rounded-full border border-accent/40" />
          <div className="absolute inset-6 rounded-full border border-accent/30" />
          <div className="absolute inset-12 rounded-full border border-accent/20" />
          <div className="absolute inset-20 rounded-full bg-accent/10" />
        </div>
      </motion.div>

      {/* TALL - col-span-2 - Image */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        className="md:col-span-2 relative overflow-hidden rounded-3xl bg-ink-900 min-h-[280px] card-hover"
      >
        <Image
          src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=800&q=80"
          alt="Strategy session"
          fill
          sizes="(min-width: 768px) 33vw, 100vw"
          className="object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/60 to-transparent" />
        <div className="absolute inset-0 p-7 flex flex-col justify-end">
          <span className="inline-flex w-9 h-9 rounded-xl bg-cream/15 backdrop-blur items-center justify-center mb-4">
            <Users className="w-4 h-4 text-cream" />
          </span>
          <h3 className="text-xl font-semibold text-cream leading-tight">
            Senior bench. No junior layer.
          </h3>
          <p className="mt-2 text-sm text-cream/75 leading-relaxed">
            Every engagement is led by a partner with a decade of enterprise delivery.
          </p>
        </div>
      </motion.div>

      {/* SMALL 1 */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        className="md:col-span-2 rounded-3xl bg-white border border-line p-7 card-hover"
      >
        <span className="inline-flex w-9 h-9 rounded-xl bg-accent-soft border border-accent/20 items-center justify-center mb-4">
          <Lock className="w-4 h-4 text-accent" />
        </span>
        <h3 className="text-lg font-semibold text-ink-900 leading-tight">Security-first by default</h3>
        <p className="mt-2 text-sm text-body leading-relaxed">
          NDA and DPA on day one. Encrypted at rest, anonymized in deliverables, audit-ready.
        </p>
      </motion.div>

      {/* SMALL 2 */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        className="md:col-span-2 rounded-3xl bg-cream-200 border border-line p-7 card-hover"
      >
        <span className="inline-flex w-9 h-9 rounded-xl bg-white border border-line items-center justify-center mb-4">
          <Zap className="w-4 h-4 text-accent" />
        </span>
        <h3 className="text-lg font-semibold text-ink-900 leading-tight">10-day diagnostics</h3>
        <p className="mt-2 text-sm text-body leading-relaxed">
          Parallel AI interviews mean we hit organization-wide coverage in days, not months.
        </p>
      </motion.div>

      {/* SMALL 3 */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.6, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
        className="md:col-span-2 rounded-3xl bg-white border border-line p-7 card-hover"
      >
        <span className="inline-flex w-9 h-9 rounded-xl bg-accent-soft border border-accent/20 items-center justify-center mb-4">
          <BarChart3 className="w-4 h-4 text-accent" />
        </span>
        <h3 className="text-lg font-semibold text-ink-900 leading-tight">3 to 5x cost advantage</h3>
        <p className="mt-2 text-sm text-body leading-relaxed">
          Broader coverage, faster delivery, at a fraction of traditional consulting fees.
        </p>
      </motion.div>
    </div>
  )
}
