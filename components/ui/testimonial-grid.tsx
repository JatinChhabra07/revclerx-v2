'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Star } from 'lucide-react'

const T = [
  {
    quote:
      'They walked in with a roadmap, walked out with the systems running in production. The team I usually have to chase for handover documents handed mine ownership and a Slack channel.',
    author: 'Marcus Chen',
    role: 'Chief Operating Officer · Industrial Manufacturing',
    image:
      'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=200&q=80',
    accent: 'bg-amber-100 text-amber-900',
  },
  {
    quote:
      'Our claims review agent processes documents at a third of the time and double the precision. The ROI conversation with the board was the easiest one all year.',
    author: 'Priya Ramaswamy',
    role: 'VP Operations · Financial Services',
    image:
      'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=200&q=80',
    accent: 'bg-emerald-100 text-emerald-900',
  },
  {
    quote:
      'Six months ago we had four stuck pilots. RevClerx killed two, productionized one, and built the fourth into a platform our other business units now use.',
    author: 'David Klein',
    role: 'Chief Information Officer · Healthcare Network',
    image:
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80',
    accent: 'bg-sky-100 text-sky-900',
  },
]

export function TestimonialGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
      {T.map((t, i) => (
        <motion.figure
          key={i}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
          whileHover={{ y: -6 }}
          className="group bg-white border border-line rounded-3xl p-7 card-hover"
        >
          <div className="flex items-center gap-1 text-amber-500 mb-4">
            {Array.from({ length: 5 }).map((_, j) => (
              <motion.span
                key={j}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.1 + j * 0.06, type: 'spring', stiffness: 300, damping: 18 }}
              >
                <Star className="w-4 h-4 fill-current" />
              </motion.span>
            ))}
          </div>
          <blockquote className="text-base text-ink-900 leading-relaxed">
            &ldquo;{t.quote}&rdquo;
          </blockquote>
          <figcaption className="mt-6 flex items-center gap-3 pt-5 border-t border-line">
            <div className="relative w-10 h-10 rounded-full overflow-hidden bg-cream-300 flex-none">
              <Image
                src={t.image}
                alt={t.author}
                fill
                sizes="40px"
                className="object-cover"
              />
            </div>
            <div>
              <p className="text-sm font-semibold text-ink-900">{t.author}</p>
              <p className="text-xs text-muted">{t.role}</p>
            </div>
          </figcaption>
        </motion.figure>
      ))}
    </div>
  )
}
