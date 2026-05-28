'use client'

import { motion } from 'framer-motion'

type Props = {
  iconNode: React.ReactNode
  name: string
  body: string
}

export function IndustryCard({ iconNode, name, body }: Props) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ type: 'spring', stiffness: 320, damping: 22 }}
      className="group h-full rounded-3xl bg-white border border-line p-7 card-hover relative overflow-hidden"
    >
      {/* gradient halo on hover */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background:
            'radial-gradient(circle at 30% 0%, rgba(122,43,196,0.16), transparent 60%)',
        }}
      />
      <motion.span
        whileHover={{ rotate: 10, scale: 1.08 }}
        transition={{ type: 'spring', stiffness: 320, damping: 18 }}
        className="relative inline-flex w-11 h-11 rounded-2xl bg-accent-soft border border-accent/20 items-center justify-center mb-5"
      >
        {iconNode}
      </motion.span>
      <h3 className="relative text-lg font-semibold text-ink-900 leading-tight group-hover:text-accent transition-colors duration-300">
        {name}
      </h3>
      <p className="relative mt-2 text-sm text-body leading-relaxed">{body}</p>
    </motion.div>
  )
}
