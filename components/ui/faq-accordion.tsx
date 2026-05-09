'use client'

import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Plus } from 'lucide-react'
import { cn } from '@/lib/utils'

interface Q {
  question: string
  answer: React.ReactNode
}

export function FAQAccordion({
  items,
  className,
  defaultOpen = -1,
}: {
  items: Q[]
  className?: string
  defaultOpen?: number
}) {
  const [open, setOpen] = useState(defaultOpen)

  return (
    <div className={cn('divide-y divide-line border-y border-line', className)}>
      {items.map((q, i) => {
        const isOpen = open === i
        return (
          <div key={i} className="group">
            <button
              onClick={() => setOpen(isOpen ? -1 : i)}
              className="w-full flex items-start justify-between gap-6 py-6 text-left"
              aria-expanded={isOpen}
            >
              <span className="text-base md:text-lg font-semibold text-ink-900 leading-snug pr-6 group-hover:text-accent transition-colors">
                {q.question}
              </span>
              <motion.span
                animate={{ rotate: isOpen ? 45 : 0 }}
                transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                className="flex-none mt-1 inline-flex items-center justify-center w-9 h-9 rounded-full border border-line group-hover:border-accent group-hover:text-accent text-ink-700 transition-colors"
                aria-hidden="true"
              >
                <Plus className="w-4 h-4" strokeWidth={2.2} />
              </motion.span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <div className="pb-6 pr-12 text-base text-body leading-relaxed">
                    {q.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )
      })}
    </div>
  )
}
