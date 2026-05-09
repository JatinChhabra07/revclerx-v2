import PageShell from '@/components/PageShell'
import Link from 'next/link'

export default function NotFound() {
  return (
    <PageShell>
      <section className="bg-[#faf6ef] min-h-[70vh] flex items-center justify-center">
        <div className="max-w-3xl mx-auto px-6 py-24 text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-white border border-[#e5e2db] px-4 py-1.5 text-xs font-medium text-[#0a0a0a]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#1f4d3a]"></span>
            Page not found
          </div>
          <h1 className="mt-8 text-7xl md:text-8xl font-semibold tracking-tight text-[#0a0a0a] leading-none">404</h1>
          <p className="mt-6 text-2xl md:text-3xl font-semibold tracking-tight text-[#0a0a0a] text-balance">
            This page is no longer here.
          </p>
          <p className="mt-5 max-w-xl mx-auto text-lg text-[#2a2a2a] leading-relaxed">
            The link may be broken or the page may have moved. Try one of the routes below.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-full bg-[#1f4d3a] hover:bg-[#163829] px-7 py-3.5 text-sm font-semibold text-[#faf6ef] transition-colors"
            >
              Back to home
              <span aria-hidden="true">{'→'}</span>
            </Link>
            <Link
              href="/solutions"
              className="inline-flex items-center gap-2 rounded-full border border-[#0a0a0a] bg-transparent px-7 py-3.5 text-sm font-semibold text-[#0a0a0a] hover:bg-[#0a0a0a] hover:text-[#faf6ef] transition-colors"
            >
              Explore solutions
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-[#e5e2db] bg-white px-7 py-3.5 text-sm font-semibold text-[#0a0a0a] hover:border-[#0a0a0a] transition-colors"
            >
              Contact us
            </Link>
          </div>
        </div>
      </section>
    </PageShell>
  )
}
