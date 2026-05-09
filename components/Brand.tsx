import Link from 'next/link'

type Props = { href?: string; size?: 'sm' | 'md' | 'lg'; className?: string; light?: boolean }

export default function Brand({ href = '/', size = 'md', className = '', light = false }: Props) {
  const txt = size === 'sm' ? 'text-base' : size === 'lg' ? 'text-2xl' : 'text-lg'
  const main = light ? 'text-cream' : 'text-ink-900'
  const dot = light ? 'text-cream/70' : 'text-accent'
  const Inner = (
    <span className={`inline-flex items-center gap-0.5 font-display ${className}`}>
      <span className={`${txt} font-bold tracking-tight ${main}`}>RevClerx</span>
      <span aria-hidden="true" className={`${txt} font-bold tracking-tight ${dot}`}>.</span>
    </span>
  )
  if (href) return <Link href={href} className="inline-flex items-baseline">{Inner}</Link>
  return Inner
}
