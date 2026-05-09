import Link from 'next/link'

type Props = { href?: string; size?: 'sm' | 'md'; className?: string }

export default function Brand({ href = '/', size = 'md', className = '' }: Props) {
  const txt = size === 'sm' ? 'text-lg' : 'text-xl'
  const Inner = (
    <span className={`inline-flex items-baseline ${className}`}>
      <span className={`${txt} font-bold tracking-tight text-[#0a0a0a]`}>RevClerx</span>
      <span className={`${txt} font-bold tracking-tight text-[#1f4d3a]`}>.ai</span>
    </span>
  )
  if (href) return <Link href={href} className="inline-flex items-baseline">{Inner}</Link>
  return Inner
}
