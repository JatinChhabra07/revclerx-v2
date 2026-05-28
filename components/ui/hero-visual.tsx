'use client'

import { useRef } from 'react'
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
} from 'framer-motion'
import Image from 'next/image'
import { Sparkles, Cpu, CheckCircle2, Workflow } from 'lucide-react'
import { ease } from '@/lib/motion'

// Hero visual: a workflow / agent canvas mockup paired with a real
// photo backdrop. Floating cards reinforce the consulting plus
// implementation proposition. Scroll parallax: the photo and the
// floating cards drift at different speeds for depth.
export function HeroVisual() {
  const ref = useRef<HTMLDivElement>(null)
  const reduce = useReducedMotion()

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })
  // Parallax bands.
  const yPhoto = useTransform(scrollYProgress, [0, 1], ['0%', reduce ? '0%' : '-15%'])
  const yCard1 = useTransform(scrollYProgress, [0, 1], ['0%', reduce ? '0%' : '-30%'])
  const yCard2 = useTransform(scrollYProgress, [0, 1], ['0%', reduce ? '0%' : '-20%'])
  const yChip = useTransform(scrollYProgress, [0, 1], ['0%', reduce ? '0%' : '-40%'])

  return (
    <div ref={ref} className="relative w-full aspect-[5/6] md:aspect-[1/1]">
      {/* Brand glows */}
      <div aria-hidden="true" className="absolute -inset-8 -z-10">
        <motion.div
          className="absolute top-0 left-0 w-72 h-72 rounded-full bg-brand-blue/25 blur-[110px]"
          animate={{ scale: [1, 1.1, 1], opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-0 right-0 w-72 h-72 rounded-full bg-brand-magenta/25 blur-[110px]"
          animate={{ scale: [1, 1.15, 1], opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        />
      </div>

      {/* Main image card with parallax */}
      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.9, ease }}
        style={{ y: yPhoto }}
        className="img-frame absolute inset-0"
      >
        <Image
          src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1400&q=80"
          alt="RevClerx team architecting an AI solution alongside an enterprise client"
          fill
          priority
          sizes="(min-width: 1024px) 600px, 100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-950/35 via-transparent to-transparent" />
      </motion.div>

      {/* Floating card 1, top left: live agent workflow */}
      <motion.div
        initial={{ opacity: 0, x: -20, y: -10 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 0.7, delay: 0.5, ease }}
        whileHover={{ y: -6, rotate: -1, scale: 1.03 }}
        style={{ y: yCard1 }}
        className="absolute -left-3 md:-left-8 top-10 md:top-16 w-[220px] md:w-[270px] cursor-default"
      >
        <div className="bg-white border border-line rounded-2xl shadow-[0_18px_40px_-18px_rgba(10,10,10,0.22)] p-4 animate-float-slow">
          <div className="flex items-center gap-2 mb-3">
            <motion.span
              className="w-7 h-7 rounded-full flex items-center justify-center text-white"
              style={{
                background:
                  'linear-gradient(135deg, #3340D4 0%, #7A2BC4 55%, #E91E83 100%)',
              }}
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            >
              <Workflow className="w-3.5 h-3.5" />
            </motion.span>
            <div>
              <p className="text-[11px] font-semibold text-ink-900">Agent, running</p>
              <p className="text-[10px] text-muted">Claims review, 1,284 docs</p>
            </div>
            <span className="ml-auto inline-flex items-center gap-1 text-[10px] text-accent font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse-soft" />
              live
            </span>
          </div>
          <div className="space-y-1.5">
            {[100, 80, 66].map((w, i) => (
              <motion.div
                key={i}
                initial={{ width: 0 }}
                animate={{ width: `${w}%` }}
                transition={{ duration: 0.6, delay: 0.9 + i * 0.12, ease }}
                className="h-1.5 rounded-full bg-cream-300"
              />
            ))}
          </div>
          <div className="mt-3 flex items-center justify-between text-[10px]">
            <span className="text-muted">Processed today</span>
            <span className="font-semibold text-ink-900">8,412</span>
          </div>
        </div>
      </motion.div>

      {/* Floating card 2, bottom right: stack stats */}
      <motion.div
        initial={{ opacity: 0, x: 20, y: 10 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 0.7, delay: 0.7, ease }}
        whileHover={{ y: -6, rotate: 1, scale: 1.03 }}
        style={{ y: yCard2 }}
        className="absolute -right-3 md:-right-8 bottom-12 md:bottom-20 w-[240px] md:w-[290px] cursor-default"
      >
        <div className="bg-white border border-line rounded-2xl shadow-[0_18px_40px_-18px_rgba(10,10,10,0.22)] p-4 animate-float-slow" style={{ animationDelay: '1.2s' }}>
          <div className="flex items-center justify-between mb-3">
            <p className="text-[11px] font-semibold text-ink-900 inline-flex items-center gap-1.5">
              <Cpu className="w-3.5 h-3.5 text-accent" /> AI deployment
            </p>
            <span className="text-[10px] text-muted">Last 30 days</span>
          </div>
          <div className="flex items-end gap-1.5 h-14">
            {[42, 65, 50, 78, 62, 84, 70, 92].map((h, i) => (
              <motion.div
                key={i}
                initial={{ height: 0 }}
                animate={{ height: `${h}%` }}
                transition={{ duration: 0.6, delay: 1 + i * 0.06, ease }}
                whileHover={{ scaleY: 1.08, transformOrigin: 'bottom' }}
                className={`flex-1 rounded-sm transition-colors ${
                  i === 7 ? 'bg-accent' : 'bg-cream-300 hover:bg-brand-purple/40'
                }`}
              />
            ))}
          </div>
          <p className="mt-3 text-[10px] text-muted leading-snug">
            <span className="text-ink-900 font-semibold">Customer ops</span> drives the highest production yield
          </p>
        </div>
      </motion.div>

      {/* Floating card 3, middle right: ROI chip, gradient brand */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 1.0, type: 'spring', stiffness: 240, damping: 18 }}
        whileHover={{ scale: 1.08, rotate: -2 }}
        style={{ y: yChip }}
        className="absolute right-4 md:right-12 top-24 md:top-32 cursor-default"
      >
        <div
          className="text-cream rounded-2xl shadow-[0_18px_40px_-12px_rgba(122,43,196,0.5)] px-3 py-2 inline-flex items-center gap-2"
          style={{
            background:
              'linear-gradient(135deg, #3340D4 0%, #7A2BC4 55%, #E91E83 100%)',
          }}
        >
          <CheckCircle2 className="w-3.5 h-3.5 text-cream" />
          <span className="text-[11px] font-semibold">4.1x ROI in year one</span>
        </div>
      </motion.div>

      {/* Sparkle accent */}
      <motion.div
        animate={{ rotate: [0, 18, -10, 0], scale: [1, 1.15, 1] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-2 right-6 text-brand-magenta"
      >
        <Sparkles className="w-6 h-6 drop-shadow" />
      </motion.div>
    </div>
  )
}
