'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { cn } from '@/lib/utils'

type Props = {
  children: React.ReactNode
  className?: string
  delay?: number
  y?: number
  blur?: boolean
  once?: boolean
}

export default function Reveal({
  children,
  className = '',
  delay = 0,
  y = 24,
  blur = false,
  once = true,
}: Props) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once, margin: '-80px 0px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y, filter: blur ? 'blur(8px)' : 'blur(0px)' }}
      animate={
        inView
          ? { opacity: 1, y: 0, filter: 'blur(0px)' }
          : { opacity: 0, y, filter: blur ? 'blur(8px)' : 'blur(0px)' }
      }
      transition={{
        duration: 0.7,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  )
}
