'use client'

import { motion, useScroll, useSpring } from 'framer-motion'

// Top-of-viewport progress bar tied to document scroll. Animated via
// a spring so it never feels jittery, gradient-filled to read as brand.
export function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 130,
    damping: 25,
    mass: 0.3,
  })

  return (
    <motion.div
      aria-hidden="true"
      style={{
        scaleX,
        transformOrigin: '0% 50%',
        background:
          'linear-gradient(90deg, #3340D4 0%, #7A2BC4 55%, #E91E83 100%)',
      }}
      className="fixed top-0 left-0 right-0 h-[2px] z-[60] pointer-events-none"
    />
  )
}
