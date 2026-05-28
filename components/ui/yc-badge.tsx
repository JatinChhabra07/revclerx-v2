'use client'

import { motion } from 'framer-motion'
import { Sparkles } from 'lucide-react'

/**
 * Brand pill that sits above the hero headline. Uses the brand
 * gradient to telegraph the logo's identity from the first glance.
 */
export function BackedByBadge() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="inline-flex items-center gap-2.5 rounded-full bg-white/85 backdrop-blur border border-line pl-1.5 pr-4 py-1"
    >
      <span
        className="inline-flex items-center justify-center w-6 h-6 rounded-full text-white"
        style={{
          background:
            'linear-gradient(135deg, #3340D4 0%, #7A2BC4 55%, #E91E83 100%)',
        }}
      >
        <Sparkles className="w-3 h-3" strokeWidth={2.4} />
      </span>
      <span className="text-xs font-medium text-ink-900">
        AI transformation, end to end
      </span>
    </motion.div>
  )
}
