'use client'

import { motion } from 'framer-motion'

type Props = {
  children: React.ReactNode
  className?: string
  dot?: boolean
}

export function SectionEyebrow({ children, className = '', dot = true }: Props) {
  return (
    <p className={`inline-flex items-center gap-2 text-xs uppercase tracking-[0.28em] text-muted ${className}`}>
      {dot && (
        <motion.span
          className="w-1.5 h-1.5 rounded-full bg-accent"
          animate={{ scale: [1, 1.6, 1], opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
        />
      )}
      {children}
    </p>
  )
}
