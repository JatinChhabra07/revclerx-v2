'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Search, Compass, Code2, Rocket, TrendingUp } from 'lucide-react'
import { ease, buttonSpring } from '@/lib/motion'

const STEPS = [
  {
    icon: Search,
    n: '01',
    title: 'Assess',
    body: 'AI readiness audit across data, talent, and process. We surface where AI moves the math and where it does not.',
  },
  {
    icon: Compass,
    n: '02',
    title: 'Strategize',
    body: 'Prioritized roadmap with feasibility, ROI, and sequence. Every use case carries a business outcome and an owner.',
  },
  {
    icon: Code2,
    n: '03',
    title: 'Build',
    body: 'Engineers ship pilots and production systems against your data, your stack, your security posture.',
  },
  {
    icon: Rocket,
    n: '04',
    title: 'Deploy',
    body: 'Integration, security review, and rollout. We embed AI into the workflows your operators already use.',
  },
  {
    icon: TrendingUp,
    n: '05',
    title: 'Scale',
    body: 'MLOps, monitoring, and continuous improvement. From one pilot to enterprise-wide value realization.',
  },
]

export function MethodGrid() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <div ref={ref} className="relative">
      {/* connecting line on desktop, draws left to right on scroll */}
      <div
        aria-hidden="true"
        className="hidden md:block absolute top-[28px] left-12 right-12 h-px origin-left"
      >
        <motion.div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'linear-gradient(90deg, transparent 0, rgba(51,64,212,0.6) 8%, rgba(122,43,196,0.65) 50%, rgba(233,30,131,0.6) 92%, transparent 100%)',
            backgroundSize: '12px 1px',
          }}
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : { scaleX: 0 }}
          transition={{ duration: 1.4, delay: 0.25, ease }}
          // origin-left handled by parent
        />
      </div>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-10 md:gap-5 relative">
        {STEPS.map((step, i) => {
          const Icon = step.icon
          return (
            <motion.div
              key={step.n}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.12, ease }}
              className="relative group"
            >
              <motion.div
                whileHover={{ y: -4, scale: 1.05 }}
                transition={buttonSpring}
                className="relative inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-cream border border-line group-hover:border-accent/60 group-hover:bg-accent-soft transition-colors duration-300"
              >
                <motion.span
                  whileHover={{ rotate: 8 }}
                  transition={buttonSpring}
                  className="inline-flex"
                >
                  <Icon className="w-6 h-6 text-accent" strokeWidth={1.7} />
                </motion.span>
                <span
                  className="absolute -top-2 -right-2 inline-flex items-center justify-center w-6 h-6 rounded-full text-cream text-[10px] font-mono font-semibold shadow-[0_4px_12px_-3px_rgba(122,43,196,0.5)]"
                  style={{
                    background:
                      'linear-gradient(135deg, #3340D4 0%, #7A2BC4 55%, #E91E83 100%)',
                  }}
                >
                  {step.n}
                </span>
              </motion.div>
              <h3 className="mt-5 text-xl font-semibold text-ink-900 tracking-tight group-hover:text-accent transition-colors">
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
