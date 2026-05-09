import Link from 'next/link'
import { cn } from '@/lib/utils'

type Props = {
  href?: string
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

const sizeMap: Record<NonNullable<Props['size']>, string> = {
  sm: 'text-base',
  md: 'text-lg',
  lg: 'text-2xl'
}

export default function Brand({ href = '/', size = 'md', className }: Props) {
  return (
    <Link
      href={href}
      aria-label="RevClerx home"
      className={cn(
        'inline-flex items-baseline font-bold tracking-tight text-[#1C1C1C]',
        sizeMap[size],
        className
      )}
    >
      <span>Rev</span>
      <span>Clerx</span>
      <span className="text-[#ff5a1f] text-[0.7em] ml-0.5 font-bold">.ai</span>
    </Link>
  )
}
