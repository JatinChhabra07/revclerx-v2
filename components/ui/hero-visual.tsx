'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Sparkles, MessageSquare, CheckCircle2, Brain } from 'lucide-react'

/**
 * Premium hero visual: a fake AI-interview product mockup
 * with floating annotation cards. Uses a real photo as backdrop.
 */
export function HeroVisual() {
  return (
    <div className="relative w-full aspect-[5/6] md:aspect-[6/7]">
      {/* glow */}
      <div aria-hidden="true" className="absolute -inset-8 -z-10">
        <div className="absolute top-0 left-0 w-72 h-72 rounded-full bg-accent/15 blur-[100px]" />
        <div className="absolute bottom-0 right-0 w-72 h-72 rounded-full bg-amber-200/40 blur-[100px]" />
      </div>

      {/* main image card */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="img-frame absolute inset-0"
      >
        <Image
          src="https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=1200&q=80"
          alt="Senior consultant working with team on AI transformation"
          fill
          priority
          sizes="(min-width: 1024px) 600px, 100vw"
          className="object-cover"
        />
        {/* tint */}
        <div className="absolute inset-0 bg-gradient-to-t from-ink-950/30 via-transparent to-transparent" />
      </motion.div>

      {/* Floating card 1 — top left: AI Interview snippet */}
      <motion.div
        initial={{ opacity: 0, x: -20, y: -10 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 0.7, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="absolute -left-3 md:-left-8 top-10 md:top-16 w-[210px] md:w-[260px] glass-card animate-float-slow"
      >
        <div className="bg-white border border-line rounded-2xl shadow-[0_18px_40px_-18px_rgba(10,10,10,0.22)] p-4">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-7 h-7 rounded-full bg-accent flex items-center justify-center">
              <MessageSquare className="w-3.5 h-3.5 text-cream" />
            </span>
            <div>
              <p className="text-[11px] font-semibold text-ink-900">AI interview · live</p>
              <p className="text-[10px] text-muted">Operations · 32 sessions</p>
            </div>
            <span className="ml-auto inline-flex items-center gap-1 text-[10px] text-accent font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse-soft" />
              recording
            </span>
          </div>
          <div className="space-y-1.5">
            <div className="h-1.5 rounded-full bg-cream-300 w-full" />
            <div className="h-1.5 rounded-full bg-cream-300 w-4/5" />
            <div className="h-1.5 rounded-full bg-cream-300 w-2/3" />
          </div>
        </div>
      </motion.div>

      {/* Floating card 2 — bottom right: Operational map */}
      <motion.div
        initial={{ opacity: 0, x: 20, y: 10 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 0.7, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="absolute -right-3 md:-right-8 bottom-12 md:bottom-20 w-[230px] md:w-[280px]"
        style={{ animationDelay: '1.2s' }}
      >
        <div className="bg-white border border-line rounded-2xl shadow-[0_18px_40px_-18px_rgba(10,10,10,0.22)] p-4 animate-float-slow">
          <div className="flex items-center justify-between mb-3">
            <p className="text-[11px] font-semibold text-ink-900 inline-flex items-center gap-1.5">
              <Brain className="w-3.5 h-3.5 text-accent" /> Operational map
            </p>
            <span className="text-[10px] text-muted">Q1 · 2026</span>
          </div>
          {/* fake mini bar chart */}
          <div className="flex items-end gap-1.5 h-14">
            {[55, 78, 42, 90, 64, 82, 48, 70].map((h, i) => (
              <motion.div
                key={i}
                initial={{ height: 0 }}
                animate={{ height: `${h}%` }}
                transition={{ duration: 0.6, delay: 1 + i * 0.06, ease: [0.22, 1, 0.36, 1] }}
                className={`flex-1 rounded-sm ${i === 3 ? 'bg-accent' : 'bg-cream-300'}`}
              />
            ))}
          </div>
          <p className="mt-3 text-[10px] text-muted leading-snug">
            <span className="text-ink-900 font-semibold">Procurement</span> shows the highest AI leverage
          </p>
        </div>
      </motion.div>

      {/* Floating card 3 — middle right: success */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 1.0, ease: [0.22, 1, 0.36, 1] }}
        className="absolute right-4 md:right-12 top-24 md:top-32"
      >
        <div className="bg-ink-900 text-cream rounded-2xl shadow-[0_18px_40px_-18px_rgba(10,10,10,0.4)] px-3 py-2 inline-flex items-center gap-2">
          <CheckCircle2 className="w-3.5 h-3.5 text-accent" />
          <span className="text-[11px] font-semibold">3.2x ROI projected</span>
        </div>
      </motion.div>

      {/* Sparkle accent */}
      <motion.div
        animate={{ rotate: [0, 12, 0, -8, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-2 right-6 text-amber-500"
      >
        <Sparkles className="w-6 h-6 drop-shadow" />
      </motion.div>
    </div>
  )
}
