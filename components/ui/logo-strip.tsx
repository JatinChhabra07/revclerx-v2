'use client'

import { motion } from 'framer-motion'

// Tech platforms we build on and partner across, what enterprises
// already run, plus the AI/data stack we ship into production.
const LOGOS = [
  'AWS', 'Microsoft Azure', 'Google Cloud', 'Databricks', 'Snowflake',
  'NVIDIA', 'OpenAI', 'Anthropic', 'Hugging Face', 'Pinecone',
  'MongoDB', 'PostgreSQL', 'Kubernetes', 'Docker'
]

export function LogoStrip() {
  return (
    <div className="marquee-fade overflow-hidden">
      <div className="marquee-track">
        {[...LOGOS, ...LOGOS].map((name, i) => (
          <motion.span
            key={i}
            whileHover={{ scale: 1.06, color: '#0a0a0a' }}
            className="text-2xl md:text-3xl font-display font-semibold tracking-tight text-ink-900/35 hover:text-ink-900 transition-colors whitespace-nowrap select-none"
          >
            {name}
          </motion.span>
        ))}
      </div>
    </div>
  )
}
