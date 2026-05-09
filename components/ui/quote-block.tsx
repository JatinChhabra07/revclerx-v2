'use client'

import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'

type Props = {
  quote: string
  author?: string
  role?: string
}

export function QuoteBlock({ quote, author, role }: Props) {
  return (
    <motion.figure
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="relative max-w-4xl mx-auto text-center"
    >
      <Quote className="mx-auto w-10 h-10 text-accent/40" strokeWidth={1.6} />
      <blockquote className="mt-6 text-3xl md:text-5xl font-semibold tracking-tight text-ink-900 leading-[1.15] text-balance">
        &ldquo;{quote}&rdquo;
      </blockquote>
      {(author || role) && (
        <figcaption className="mt-8 inline-flex flex-col gap-1">
          {author && <span className="text-sm font-semibold text-ink-900">{author}</span>}
          {role && <span className="text-xs uppercase tracking-[0.2em] text-muted">{role}</span>}
        </figcaption>
      )}
    </motion.figure>
  )
}
