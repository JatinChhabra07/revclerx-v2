'use client'

import { motion } from 'framer-motion'

/**
 * Y Combinator-style backer badge — visually similar trust mark
 * without using YC trademarks. Renders an "Backed by top operators"
 * style chip that's subtle and professional.
 */
export function BackedByBadge() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="inline-flex items-center gap-3 rounded-full bg-white/80 backdrop-blur border border-line pl-1 pr-4 py-1"
    >
      <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-orange-500 text-white font-display font-bold text-sm leading-none">
        F
      </span>
      <span className="text-xs font-medium text-ink-900">
        Backed by top enterprise operators
      </span>
    </motion.div>
  )
}
