import Link from 'next/link'
import Image from 'next/image'

type Props = {
  href?: string
  size?: 'sm' | 'md' | 'lg'
  className?: string
  light?: boolean
  logoOnly?: boolean
}

export default function Brand({
  href = '/',
  size = 'md',
  className = '',
  light = false,
  logoOnly = false,
}: Props) {
  const txt = size === 'sm' ? 'text-base' : size === 'lg' ? 'text-2xl' : 'text-lg'
  const mark = size === 'sm' ? 32 : size === 'lg' ? 56 : 42
  const main = light ? 'text-cream' : 'text-ink-900'

  const Inner = (
    <span className={`inline-flex items-center gap-2.5 font-display ${className}`}>
      <Image
        src="/revclerx-mark.png"
        alt="RevClerx"
        width={mark * 2}
        height={mark * 2}
        priority
        className="object-contain shrink-0"
        style={{ width: mark, height: mark }}
      />
      {!logoOnly && (
        <span className={`${txt} font-bold tracking-tight ${main}`}>
          RevClerx
          <span aria-hidden="true" className="text-brand-magenta">.</span>
        </span>
      )}
    </span>
  )
  if (href)
    return (
      <Link href={href} className="inline-flex items-center" aria-label="RevClerx, home">
        {Inner}
      </Link>
    )
  return Inner
}
