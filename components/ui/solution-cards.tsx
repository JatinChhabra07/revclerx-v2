'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'

type Card = {
  badge: string
  title: string
  body: string
  href: string
  image: string
  imageAlt: string
}

const CARDS: Card[] = [
  {
    badge: '01 · Diagnostic',
    title: 'AI Transformation Assessment',
    body:
      'A focused 4-week diagnostic. Org-wide AI interviews, an operational map, and a prioritized roadmap your board can fund.',
    href: '/solutions#assessment',
    image:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Analytics dashboard showing operational map',
  },
  {
    badge: '02 · Partnership',
    title: 'Continuous AI Transformation',
    body:
      'A monthly partnership that keeps the AI portfolio honest. Weekly briefings, quarterly executive readouts, and adoption that sticks.',
    href: '/solutions#continuous',
    image:
      'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Team in working session reviewing AI strategy',
  },
  {
    badge: '03 · Embedded',
    title: 'Enterprise Deployment',
    body:
      'Forward deployed engineers inside your perimeter. Production AI on your stack, with security and handover baked in.',
    href: '/solutions#deployment',
    image:
      'https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Engineer building AI system at workstation',
  },
]

export function SolutionCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {CARDS.map((card, i) => (
        <motion.div
          key={card.title}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
        >
          <Link
            href={card.href}
            className="group block h-full rounded-3xl bg-white border border-line overflow-hidden card-hover"
          >
            {/* image */}
            <div className="relative aspect-[5/3] overflow-hidden bg-cream-200">
              <Image
                src={card.image}
                alt={card.imageAlt}
                fill
                sizes="(min-width: 768px) 33vw, 100vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-950/55 via-ink-950/10 to-transparent" />
              <span className="absolute top-4 left-4 inline-flex items-center gap-1.5 rounded-full bg-cream/95 backdrop-blur px-3 py-1 text-[11px] font-medium text-ink-900">
                <span className="w-1 h-1 rounded-full bg-accent" />
                {card.badge}
              </span>
            </div>
            {/* content */}
            <div className="p-7">
              <h3 className="text-2xl font-semibold tracking-tight text-ink-900 leading-snug">
                {card.title}
              </h3>
              <p className="mt-3 text-sm text-body leading-relaxed">{card.body}</p>
              <span className="link-grow mt-7 inline-flex">
                Learn more <ArrowUpRight className="w-4 h-4 arrow-x" />
              </span>
            </div>
          </Link>
        </motion.div>
      ))}
    </div>
  )
}
