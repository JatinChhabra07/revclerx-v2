'use client'

import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'

type Props = {
  value: number
  suffix?: string
  prefix?: string
  duration?: number
  decimals?: number
}

export function StatCounter({ value, suffix = '', prefix = '', duration = 1.6, decimals = 0 }: Props) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: '-30px' })
  const [n, setN] = useState(0)

  useEffect(() => {
    if (!inView) return
    const start = performance.now()
    let raf = 0
    const loop = (t: number) => {
      const p = Math.min(1, (t - start) / (duration * 1000))
      const eased = 1 - Math.pow(1 - p, 3)
      setN(value * eased)
      if (p < 1) raf = requestAnimationFrame(loop)
    }
    raf = requestAnimationFrame(loop)
    return () => cancelAnimationFrame(raf)
  }, [inView, value, duration])

  const display = decimals === 0 ? Math.floor(n).toString() : n.toFixed(decimals)
  return (
    <span ref={ref} className="tabular">
      {prefix}
      {display}
      {suffix}
    </span>
  )
}
