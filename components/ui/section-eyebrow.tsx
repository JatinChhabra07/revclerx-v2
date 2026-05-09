type Props = {
  children: React.ReactNode
  className?: string
  dot?: boolean
}

export function SectionEyebrow({ children, className = '', dot = true }: Props) {
  return (
    <p className={`inline-flex items-center gap-2 text-xs uppercase tracking-[0.28em] text-muted ${className}`}>
      {dot && <span className="w-1 h-1 rounded-full bg-accent" />}
      {children}
    </p>
  )
}
