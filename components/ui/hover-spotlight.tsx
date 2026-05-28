'use client'

import { useRef, useState } from 'react'
import { motion, useMotionValue, useMotionTemplate, useReducedMotion } from 'framer-motion'

type Props = {
  children: React.ReactNode
  className?: string
  /** Radius of the spotlight in pixels. */
  size?: number
  /** CSS color string for the halo. Defaults to a brand-purple soft halo. */
  glow?: string
}

// Tracks the cursor inside the bounding box and renders a soft
// radial halo at the cursor position. The halo sits in an absolutely
// positioned sibling so it can blend with the host element's content.
export function HoverSpotlight({
  children,
  className = '',
  size = 320,
  glow = 'rgba(122,43,196,0.22)',
}: Props) {
  const ref = useRef<HTMLDivElement>(null)
  const x = useMotionValue(-9999)
  const y = useMotionValue(-9999)
  const [hovering, setHovering] = useState(false)
  const reduce = useReducedMotion()

  // Compose CSS background via motion template, no React re-renders on mouse-move.
  const background = useMotionTemplate`radial-gradient(${size}px circle at ${x}px ${y}px, ${glow}, transparent 60%)`

  function onMove(e: React.MouseEvent<HTMLDivElement>) {
    if (reduce) return
    const rect = ref.current?.getBoundingClientRect()
    if (!rect) return
    x.set(e.clientX - rect.left)
    y.set(e.clientY - rect.top)
  }

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
      className={`relative overflow-hidden ${className}`}
    >
      {!reduce && (
        <motion.div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-300"
          style={{
            background,
            opacity: hovering ? 1 : 0,
          }}
        />
      )}
      <div className="relative z-10">{children}</div>
    </div>
  )
}
