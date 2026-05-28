import PageShell from '@/components/PageShell'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function NotFound() {
  return (
    <PageShell>
      <section className="relative overflow-hidden min-h-[80vh] flex items-center justify-center">
        <div aria-hidden="true" className="bg-radial-soft" />
        <div aria-hidden="true" className="bg-grid-faint" />
        <div className="relative max-w-3xl mx-auto px-6 py-24 text-center">
          <span className="badge-glass">
            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            Page not found
          </span>
          <h1 className="mt-8 text-[10rem] md:text-[14rem] font-display font-bold tracking-tighter text-ink-900 leading-[0.9]">
            404
          </h1>
          <p className="mt-2 text-2xl md:text-3xl font-semibold tracking-tight text-ink-900 text-balance">
            This page is no longer here.
          </p>
          <p className="mt-5 max-w-xl mx-auto text-base md:text-lg text-body leading-relaxed">
            The link may be broken or the page may have moved. Try one of the routes below.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <Link href="/" className="btn-accent">
              Back to home
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
            <Link href="/solutions" className="btn-secondary">
              Explore services
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-7 py-3.5 text-sm font-semibold text-ink-900 hover:border-ink-900 transition-colors"
            >
              Contact us
            </Link>
          </div>
        </div>
      </section>
    </PageShell>
  )
}
