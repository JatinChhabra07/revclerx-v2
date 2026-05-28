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

// The three flagship service shapes RevClerx delivers. Each links into
// the deeper sections on the Services page.
const CARDS: Card[] = [
  {
    badge: '01 · Consulting',
    title: 'AI Strategy & Consulting',
    body:
      'Readiness audits, use-case prioritization, and a board-ready roadmap. We tell you where AI actually shifts revenue, cost, and risk, and where it does not.',
    href: '/solutions#consulting',
    image:
      'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Senior consultants reviewing an AI strategy roadmap',
  },
  {
    badge: '02 · Build',
    title: 'AI & GenAI Implementation',
    body:
      'Custom AI agents, RAG systems, fine-tuned models, and production ML on your stack. Engineered to ship, not to demo.',
    href: '/solutions#implementation',
    image:
      'https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Engineer building a production AI system at workstation',
  },
  {
    badge: '03 · Scale',
    title: 'AI Operations & Scale',
    body:
      'MLOps, model monitoring, governance, and continuous improvement. From single pilot to enterprise-wide value realization.',
    href: '/solutions#scale',
    image:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Operations dashboard tracking AI model performance',
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
          whileHover={{ y: -8 }}
        >
          <Link
            href={card.href}
            className="group block h-full rounded-3xl bg-white border border-line overflow-hidden card-hover relative"
          >
            {/* gradient ring on hover */}
            <span
              aria-hidden="true"
              className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{
                background:
                  'linear-gradient(135deg, rgba(51,64,212,0.35), rgba(122,43,196,0.35), rgba(233,30,131,0.35))',
                WebkitMask:
                  'linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)',
                WebkitMaskComposite: 'xor',
                mask:
                  'linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)',
                maskComposite: 'exclude',
                padding: '1px',
              }}
            />
            <div className="relative aspect-[5/3] overflow-hidden bg-cream-200">
              <Image
                src={card.image}
                alt={card.imageAlt}
                fill
                sizes="(min-width: 768px) 33vw, 100vw"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-950/30 via-ink-950/5 to-transparent transition-opacity duration-500 group-hover:opacity-60" />
              <span className="absolute top-4 left-4 inline-flex items-center gap-1.5 rounded-full bg-cream/95 backdrop-blur px-3 py-1 text-[11px] font-medium text-ink-900 transform transition-transform duration-500 group-hover:-translate-y-0.5">
                <span className="w-1 h-1 rounded-full bg-accent" />
                {card.badge}
              </span>
            </div>
            <div className="p-7 relative">
              <h3 className="text-2xl font-semibold tracking-tight text-ink-900 leading-snug group-hover:text-accent transition-colors duration-300">
                {card.title}
              </h3>
              <p className="mt-3 text-sm text-body leading-relaxed">{card.body}</p>
              <span className="link-grow mt-7 inline-flex">
                Learn more
                <ArrowUpRight className="w-4 h-4 arrow-x transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5" />
              </span>
            </div>
          </Link>
        </motion.div>
      ))}
    </div>
  )
}
