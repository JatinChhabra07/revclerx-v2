'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Star } from 'lucide-react'

const T = [
  {
    quote:
      'In four weeks they had a clearer map of how our supply chain actually runs than we built in two years of internal workshops. The roadmap is now what the board reviews.',
    author: 'Marcus Chen',
    role: 'Chief Operating Officer · Industrial Manufacturing',
    image:
      'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=200&q=80',
    accent: 'bg-amber-100 text-amber-900',
  },
  {
    quote:
      'The AI interviews surfaced friction the front-line had stopped raising. Two of those bottlenecks turned into our biggest first-quarter wins.',
    author: 'Priya Ramaswamy',
    role: 'VP Operations · Financial Services',
    image:
      'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=200&q=80',
    accent: 'bg-emerald-100 text-emerald-900',
  },
  {
    quote:
      'Forward-deployed engineers shipped what our internal team would have taken six months to scope. And the handover was real, not a deck.',
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
          className="bg-white border border-line rounded-3xl p-7 card-hover"
        >
          <div className="flex items-center gap-1 text-amber-500 mb-4">
            {Array.from({ length: 5 }).map((_, j) => (
              <Star key={j} className="w-4 h-4 fill-current" />
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
