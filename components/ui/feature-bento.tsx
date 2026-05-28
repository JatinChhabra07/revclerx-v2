'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Lock, Users, Layers, Zap, BarChart3, Check } from 'lucide-react'
import { HoverSpotlight } from './hover-spotlight'
import { buttonSpring, ease } from '@/lib/motion'

const STAGES = ['Strategy', 'Build', 'Deploy', 'Scale']
const COMPLIANCE = ['SOC 2', 'GDPR', 'HIPAA']

const reveal = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
}

/**
 * Bento grid of differentiators on a 12-col structure.
 * Row 1: feature card (8) + senior-bench image card (4).
 * Row 2: three metric cards (4 each): compliance, speed, outcomes.
 */
export function FeatureBento() {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      transition={{ staggerChildren: 0.1 }}
      className="grid grid-cols-1 md:grid-cols-12 gap-5 auto-rows-fr"
    >
      {/* FEATURE: col-span-8, End-to-end ownership */}
      <motion.div
        variants={reveal}
        transition={{ duration: 0.6, ease }}
        whileHover={{ y: -4 }}
        className="md:col-span-8 rounded-3xl"
      >
        <HoverSpotlight
          className="relative h-full rounded-3xl bg-white border border-line p-8 md:p-10 flex flex-col"
          size={420}
          glow="rgba(122,43,196,0.16)"
        >
          {/* subtle corner accent, not a dominating ring */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-16 -right-16 w-56 h-56 rounded-full blur-[80px]"
            style={{ background: 'rgba(122,43,196,0.12)' }}
          />

          <div className="relative flex items-center gap-2">
            <motion.span
              whileHover={{ rotate: 12, scale: 1.06 }}
              transition={buttonSpring}
              className="inline-flex items-center justify-center w-9 h-9 rounded-xl bg-accent-soft border border-accent/20"
            >
              <Layers className="w-4 h-4 text-accent" />
            </motion.span>
            <span className="text-xs uppercase tracking-[0.2em] text-muted">End-to-end ownership</span>
          </div>

          <div className="relative mt-6 max-w-xl">
            <h3 className="text-2xl md:text-[2rem] font-semibold tracking-tight text-ink-900 leading-tight">
              One team from strategy to scale. No handoff cliffs.
            </h3>
            <p className="mt-3 text-sm md:text-base text-body leading-relaxed">
              The consultants who write your roadmap stay on through build, deploy, and scale. The map and the code never lose sync because the same people own both.
            </p>
          </div>

          {/* "no handoff" stage flow, fills the card with meaning */}
          <div className="relative mt-auto pt-9">
            <div className="flex items-center gap-2 sm:gap-3">
              {STAGES.map((stage, i) => (
                <div key={stage} className="flex items-center gap-2 sm:gap-3">
                  <motion.span
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.3 + i * 0.12, ease }}
                    className="inline-flex items-center gap-1.5 rounded-full border border-line bg-cream-50 px-3 py-1.5 text-xs font-semibold text-ink-900 whitespace-nowrap"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                    {stage}
                  </motion.span>
                  {i < STAGES.length - 1 && (
                    <motion.span
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.38 + i * 0.12, ease }}
                      className="hidden sm:block h-px w-5 origin-left"
                      style={{
                        background:
                          'linear-gradient(90deg, #7A2BC4, #E91E83)',
                      }}
                    />
                  )}
                </div>
              ))}
            </div>
            <p className="mt-4 inline-flex items-center gap-2 text-xs font-medium text-accent">
              <span className="inline-flex items-center justify-center w-4 h-4 rounded-full bg-accent-soft border border-accent/30">
                <Check className="w-2.5 h-2.5 text-accent" strokeWidth={3} />
              </span>
              Owned by one accountable team, start to finish
            </p>
          </div>
        </HoverSpotlight>
      </motion.div>

      {/* IMAGE: col-span-4, Senior bench */}
      <motion.div
        variants={reveal}
        transition={{ duration: 0.6, ease }}
        whileHover={{ y: -4 }}
        className="md:col-span-4 group relative overflow-hidden rounded-3xl bg-white border border-line card-hover flex flex-col"
      >
        <div className="relative h-44 w-full overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=900&q=80"
            alt="Senior engineering and consulting team in a working session"
            fill
            sizes="(min-width: 768px) 33vw, 100vw"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white via-white/10 to-transparent" />
        </div>
        <div className="p-7 flex-1 flex flex-col">
          <motion.span
            whileHover={{ rotate: 10, scale: 1.1 }}
            transition={buttonSpring}
            className="inline-flex w-9 h-9 rounded-xl bg-accent-soft border border-accent/20 items-center justify-center mb-4"
          >
            <Users className="w-4 h-4 text-accent" />
          </motion.span>
          <h3 className="text-xl font-semibold text-ink-900 leading-tight group-hover:text-accent transition-colors">
            Senior bench. Principal-led.
          </h3>
          <p className="mt-2 text-sm text-body leading-relaxed">
            Every engagement is led by an AI principal with a decade of enterprise delivery. No junior layer between you and the work.
          </p>
        </div>
      </motion.div>

      {/* METRIC 1: Responsible AI with compliance chips */}
      <motion.div
        variants={reveal}
        transition={{ duration: 0.6, ease }}
        whileHover={{ y: -4 }}
        className="md:col-span-4 group rounded-3xl bg-white border border-line p-7 card-hover flex flex-col"
      >
        <motion.span
          whileHover={{ rotate: -10, scale: 1.1 }}
          transition={buttonSpring}
          className="inline-flex w-9 h-9 rounded-xl bg-accent-soft border border-accent/20 items-center justify-center mb-4"
        >
          <Lock className="w-4 h-4 text-accent" />
        </motion.span>
        <h3 className="text-lg font-semibold text-ink-900 leading-tight group-hover:text-accent transition-colors">
          Responsible AI by default
        </h3>
        <p className="mt-2 text-sm text-body leading-relaxed">
          NDA and DPA on day one. Encrypted at rest and audit-logged in production.
        </p>
        <div className="mt-5 flex flex-wrap gap-2">
          {COMPLIANCE.map((c) => (
            <span
              key={c}
              className="inline-flex items-center gap-1.5 rounded-full border border-line bg-cream-50 px-2.5 py-1 text-[11px] font-semibold text-ink-900"
            >
              <span className="w-1 h-1 rounded-full bg-accent" />
              {c}
            </span>
          ))}
        </div>
      </motion.div>

      {/* METRIC 2: Speed with big number */}
      <motion.div
        variants={reveal}
        transition={{ duration: 0.6, ease }}
        whileHover={{ y: -4 }}
        className="md:col-span-4 group rounded-3xl bg-cream-200 border border-line p-7 card-hover flex flex-col"
      >
        <motion.span
          whileHover={{ rotate: 10, scale: 1.1 }}
          transition={buttonSpring}
          className="inline-flex w-9 h-9 rounded-xl bg-white border border-line items-center justify-center mb-4"
        >
          <Zap className="w-4 h-4 text-accent" />
        </motion.span>
        <p className="text-4xl md:text-5xl font-semibold tracking-tighter grad-text-brand leading-none">
          6 wk
        </p>
        <h3 className="mt-3 text-lg font-semibold text-ink-900 leading-tight group-hover:text-accent transition-colors">
          Pilots in weeks, not quarters
        </h3>
        <p className="mt-2 text-sm text-body leading-relaxed">
          Delivery accelerators and pre-built agent patterns land the first working pilot fast.
        </p>
      </motion.div>

      {/* METRIC 3: Outcomes with big number */}
      <motion.div
        variants={reveal}
        transition={{ duration: 0.6, ease }}
        whileHover={{ y: -4 }}
        className="md:col-span-4 group rounded-3xl bg-white border border-line p-7 card-hover flex flex-col"
      >
        <motion.span
          whileHover={{ rotate: -10, scale: 1.1 }}
          transition={buttonSpring}
          className="inline-flex w-9 h-9 rounded-xl bg-accent-soft border border-accent/20 items-center justify-center mb-4"
        >
          <BarChart3 className="w-4 h-4 text-accent" />
        </motion.span>
        <p className="text-4xl md:text-5xl font-semibold tracking-tighter grad-text-brand leading-none">
          90%
        </p>
        <h3 className="mt-3 text-lg font-semibold text-ink-900 leading-tight group-hover:text-accent transition-colors">
          Underwritten by outcomes
        </h3>
        <p className="mt-2 text-sm text-body leading-relaxed">
          Metrics are set on day one and tracked to production. Pilots that miss the metric do not graduate.
        </p>
      </motion.div>
    </motion.div>
  )
}
