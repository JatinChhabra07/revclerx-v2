'use client'

import { useRef, useState } from 'react'
import { motion, useMotionValue, useSpring, useReducedMotion } from 'framer-motion'
import { magneticSpring } from '@/lib/motion'

type Props = {
  children: React.ReactNode
  className?: string
  strength?: number
  as?: 'button' | 'div' | 'span'
}

// Wraps children in a motion element that gently pulls toward the
// cursor on hover. Respects prefers-reduced-motion. Use sparingly,
// reserve for hero CTAs and accent buttons that deserve weight.
export function MagneticButton({
  children,
  className,
  strength = 0.35,
  as = 'span',
}: Props) {
  const ref = useRef<HTMLDivElement>(null)
  const [hovering, setHovering] = useState(false)
  const reduce = useReducedMotion()

  const rawX = useMotionValue(0)
  const rawY = useMotionValue(0)
  const x = useSpring(rawX, magneticSpring)
  const y = useSpring(rawY, magneticSpring)

  function onMove(e: React.MouseEvent<HTMLDivElement>) {
    if (reduce) return
    const rect = ref.current?.getBoundingClientRect()
    if (!rect) return
    const cx = rect.left + rect.width / 2
    const cy = rect.top + rect.height / 2
    rawX.set((e.clientX - cx) * strength)
    rawY.set((e.clientY - cy) * strength)
  }

  function onLeave() {
    setHovering(false)
    rawX.set(0)
    rawY.set(0)
  }

  const Tag = motion[as] as typeof motion.span

  return (
    <Tag
      ref={ref as React.Ref<HTMLDivElement>}
      onMouseMove={onMove}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={onLeave}
      style={{ x, y, display: 'inline-flex' }}
      animate={{ scale: hovering && !reduce ? 1.04 : 1 }}
      transition={{ type: 'spring', stiffness: 320, damping: 22 }}
      className={className}
    >
      {children}
    </Tag>
  )
}
