'use client'

import { useRef } from 'react'
import { motion, useInView, useReducedMotion } from 'framer-motion'
import { cn } from '@/lib/utils'
import { ease } from '@/lib/motion'

type Variant = 'fade-up' | 'slide-up' | 'scale-in' | 'blur' | 'slide-left' | 'fade'

type Props = {
  children: React.ReactNode
  className?: string
  delay?: number
  y?: number
  blur?: boolean
  once?: boolean
  variant?: Variant
  duration?: number
}

function hidden(variant: Variant, y: number, blur: boolean) {
  switch (variant) {
    case 'fade':
      return { opacity: 0 }
    case 'scale-in':
      return { opacity: 0, scale: 0.94 }
    case 'slide-up':
      return { opacity: 0, y: y * 1.6 }
    case 'slide-left':
      return { opacity: 0, x: -40 }
    case 'blur':
      return { opacity: 0, y, filter: 'blur(10px)' }
    case 'fade-up':
    default:
      return { opacity: 0, y, filter: blur ? 'blur(8px)' : 'blur(0px)' }
  }
}

function shown(variant: Variant) {
  switch (variant) {
    case 'fade':
      return { opacity: 1 }
    case 'scale-in':
      return { opacity: 1, scale: 1 }
    case 'slide-up':
      return { opacity: 1, y: 0 }
    case 'slide-left':
      return { opacity: 1, x: 0 }
    case 'blur':
      return { opacity: 1, y: 0, filter: 'blur(0px)' }
    case 'fade-up':
    default:
      return { opacity: 1, y: 0, filter: 'blur(0px)' }
  }
}

export default function Reveal({
  children,
  className = '',
  delay = 0,
  y = 24,
  blur = false,
  once = true,
  variant = 'fade-up',
  duration = 0.65,
}: Props) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once, margin: '-80px 0px' })
  const reduce = useReducedMotion()

  const initial = hidden(variant, y, blur)
  const animate = inView ? shown(variant) : initial

  return (
    <motion.div
      ref={ref}
      initial={reduce ? false : initial}
      animate={reduce ? undefined : animate}
      transition={{ duration, delay, ease }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  )
}
