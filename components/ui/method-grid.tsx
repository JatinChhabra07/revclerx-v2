'use client'

import { motion } from 'framer-motion'
import { Mic, Map, Compass, Rocket } from 'lucide-react'

const STEPS = [
  {
    icon: Mic,
    n: '01',
    title: 'Interviews',
    body: 'AI agents and senior consultants run private 30-minute conversations across the org. Front line to executive. Confidential by design.',
  },
  {
    icon: Map,
    n: '02',
    title: 'Map',
    body: 'We translate every signal into a granular operational map. Every process, handoff, and bottleneck shows up on the same picture.',
  },
  {
    icon: Compass,
    n: '03',
    title: 'Roadmap',
    body: 'A prioritized plan with feasibility, ROI, and sequence. Initiatives are ranked by dependency and risk, not enthusiasm.',
  },
  {
    icon: Rocket,
    n: '04',
    title: 'Transform',
    body: 'Forward deployed engineers ship the systems alongside your team, with enablement that lands ownership inside the company.',
  },
]

export function MethodGrid() {
  return (
    <div className="relative">
      {/* connecting dotted line on desktop */}
      <div
        aria-hidden="true"
        className="hidden md:block absolute top-[28px] left-12 right-12 h-px"
        style={{
          backgroundImage:
            'linear-gradient(90deg, transparent 0, rgba(31,77,58,0.5) 8%, rgba(31,77,58,0.5) 92%, transparent 100%)',
          backgroundSize: '12px 1px',
        }}
      />
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-6 relative">
        {STEPS.map((step, i) => {
          const Icon = step.icon
          return (
            <motion.div
              key={step.n}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="relative group"
            >
              {/* numbered icon */}
              <div className="relative inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-cream border border-line group-hover:border-accent/60 group-hover:bg-accent-soft transition-all duration-300">
                <Icon className="w-6 h-6 text-accent" strokeWidth={1.7} />
                <span className="absolute -top-2 -right-2 inline-flex items-center justify-center w-6 h-6 rounded-full bg-ink-900 text-cream text-[10px] font-mono font-semibold">
                  {step.n}
                </span>
              </div>
              <h3 className="mt-5 text-xl font-semibold text-ink-900 tracking-tight">
                {step.title}
              </h3>
              <p className="mt-2.5 text-sm text-body leading-relaxed">{step.body}</p>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}
