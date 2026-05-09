import PageShell from '@/components/PageShell'
import Reveal from '@/components/Reveal'
import Link from 'next/link'
import type { Metadata } from 'next'
import { VerticalCutReveal } from '@/components/ui/vertical-cut-reveal'

export const metadata: Metadata = {
  title: 'About | RevClerx',
  description: 'A senior team building AI systems that ship. We close the gap between strategy decks and production for data rich, regulated organizations.'
}

const principles = [
  {
    n: '01',
    title: 'Outcomes over output.',
    body: 'A model in a notebook is not an outcome. We define the metric on day one and own it through to deployment.'
  },
  {
    n: '02',
    title: 'Security as default.',
    body: 'Every architecture decision starts with your data residency and compliance posture. Not the model, not the demo.'
  },
  {
    n: '03',
    title: 'Integration is the product.',
    body: 'If it does not slot into your ERP, your CRM, or your data lake, it does not ship. Connectors are first class work.'
  },
  {
    n: '04',
    title: 'Honest about limits.',
    body: 'If AI is not the right answer, we will say so on day one. We have walked away from work that was not ready.'
  }
]

export default function AboutPage() {
  return (
    <PageShell>
      <section className="bg-[#faf6ef]">
        <div className="max-w-7xl mx-auto px-6 pt-24 pb-20 md:pt-32 md:pb-24">
          <span className="inline-flex items-center rounded-full border border-[#e5e2db] bg-white px-3 py-1 text-xs uppercase tracking-[0.25em] text-[#6b6457]">
            About RevClerx
          </span>
          <h1 className="mt-6 text-5xl md:text-7xl font-bold tracking-tight text-[#0a0a0a] text-balance leading-[1.05]">
            <VerticalCutReveal>
              {'A senior team for serious AI work.'}
            </VerticalCutReveal>
          </h1>
          <p className="mt-7 max-w-3xl text-lg md:text-xl text-[#2a2a2a] leading-relaxed">
            We are a small, senior team of AI engineers, data scientists, and former enterprise CIOs. We started RevClerx because too many AI programs were stalling between brilliant slideware and production reality, and our job is to close that gap.
          </p>
        </div>
      </section>

      <section className="bg-[#faf6ef] border-t border-[#e5e2db]">
        <div className="max-w-3xl mx-auto px-6 py-20 md:py-24 text-center">
          <Reveal>
            <span className="text-xs uppercase tracking-[0.25em] text-[#6b6457]">Mission</span>
            <p className="mt-6 text-2xl md:text-3xl font-medium text-[#0a0a0a] leading-snug text-balance">
              Make enterprise AI a P&amp;L line item, not a slide.
            </p>
            <p className="mt-6 text-base md:text-lg text-[#2a2a2a] leading-relaxed">
              Most AI programs do not fail because of the model. They fail on integration, governance, change management, and the absence of a roadmap that ties to revenue. We exist to fix all of that, in production, on your stack.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-[#faf6ef] border-t border-[#e5e2db]">
        <div className="max-w-7xl mx-auto px-6 py-20 md:py-24">
          <Reveal className="max-w-3xl">
            <span className="text-xs uppercase tracking-[0.25em] text-[#6b6457]">Principles</span>
            <h2 className="mt-4 text-4xl md:text-5xl font-bold tracking-tight text-[#0a0a0a] text-balance">
              Four things we will not compromise on.
            </h2>
          </Reveal>
          <div className="mt-14 grid md:grid-cols-2 gap-x-12 gap-y-12">
            {principles.map((p) => (
              <Reveal key={p.n}>
                <div className="border-l-2 border-[#1f4d3a] pl-5">
                  <div className="font-mono text-xs text-[#1f4d3a] tracking-widest">{p.n}</div>
                  <h3 className="mt-3 text-xl md:text-2xl font-semibold text-[#0a0a0a]">{p.title}</h3>
                  <p className="mt-3 text-[#2a2a2a] leading-relaxed">{p.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#faf6ef] border-t border-[#e5e2db]">
        <div className="max-w-3xl mx-auto px-6 py-20 md:py-24 text-center">
          <Reveal>
            <span className="text-xs uppercase tracking-[0.25em] text-[#6b6457]">The team</span>
            <p className="mt-6 text-2xl md:text-3xl font-medium text-[#0a0a0a] leading-snug text-balance">
              Senior team. Direct accountability.
            </p>
            <p className="mt-6 text-base md:text-lg text-[#2a2a2a] leading-relaxed">
              Every engagement is led by a partner with at least a decade of enterprise delivery, paired with engineers who have shipped AI in regulated environments. No layered hand offs, no junior bench, no surprises. You work with the people doing the work.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-[#faf6ef] border-t border-[#e5e2db]">
        <div className="max-w-3xl mx-auto px-6 py-20 md:py-24 text-center">
          <Reveal>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-[#0a0a0a] text-balance">
              Want to see how we work?
            </h2>
            <p className="mt-5 text-base md:text-lg text-[#2a2a2a] leading-relaxed">
              Book a 30 minute call. We will walk you through a recent deployment in your industry and outline what your first four weeks with RevClerx would look like.
            </p>
            <div className="mt-10">
              <Link
                href="/contact"
                className="inline-flex items-center rounded-full bg-[#1f4d3a] px-7 py-3.5 text-sm font-semibold text-[#faf6ef] hover:bg-[#163829] transition"
              >
                Book a strategy call
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </PageShell>
  )
}
