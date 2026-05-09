import type { Metadata } from 'next'
import Link from 'next/link'
import PageShell from '@/components/PageShell'
import Reveal from '@/components/Reveal'

export const metadata: Metadata = {
  title: 'Solutions',
  description:
    'Three ways RevClerx works with enterprise teams: readiness assessment, continuous transformation, and production deployment.'
}

const solutions = [
  {
    id: 'assessment',
    eyebrow: 'Solution 01',
    title: 'AI Readiness Assessment',
    summary:
      'A short, intensive study of where your business actually meets AI. You leave with a sequenced roadmap and a clear answer to the question every leadership team is quietly asking.',
    bullets: [
      'A senior partner is on the work from day one. No analysts, no offshore handoff.',
      'We interview operators, engineers, and risk owners. The answers shape the plan.',
      'A written report you can defend to a board, with named owners and honest costs.',
      'Delivered in four weeks. If we do not see a path to value, we tell you.'
    ]
  },
  {
    id: 'continuous',
    eyebrow: 'Solution 02',
    title: 'Continuous Transformation',
    summary:
      'An embedded senior team that runs the AI program with you. We pair with internal owners, ship in monthly cycles, and stay close to the metrics that pay the bills.',
    bullets: [
      'A small fixed pod of senior engineers, product, and operations.',
      'Monthly delivery cadence with a written update and a working demo.',
      'Co-built with your team so capability transfers cleanly when we leave.',
      'A defined exit ramp. We are designed to make ourselves unnecessary.'
    ]
  },
  {
    id: 'deployment',
    eyebrow: 'Solution 03',
    title: 'Enterprise Deployment',
    summary:
      'Production builds for the AI systems that matter most. Evaluation, observability, security review, and a rollback plan. Built to live in a real company, not a demo deck.',
    bullets: [
      'Architecture reviewed against your security and compliance program.',
      'Evaluation harness so you know when the system is improving and when it is not.',
      'Observability and on-call runbook handed to your team on day one.',
      'Cost and latency budgets set before code ships, and reviewed each cycle.'
    ]
  }
]

export default function SolutionsPage() {
  return (
    <PageShell>
      {/* HERO */}
      <section className="px-6 lg:px-8 pt-20 pb-16 md:pt-28 md:pb-20">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <p className="text-xs uppercase tracking-widest text-[#767069] font-semibold">
              Solutions
            </p>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="mt-6 text-5xl md:text-7xl font-extrabold text-[#1C1C1C] leading-[0.98] text-balance max-w-4xl">
              Three ways to work with us.
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-8 max-w-2xl text-lg text-[#3a3a3a] leading-relaxed">
              We package our work into three engagements. Each one is staffed with senior
              practitioners and ships against the metrics your business already cares about.
            </p>
          </Reveal>
        </div>
      </section>

      {/* DEEP DIVE BLOCKS */}
      {solutions.map((sol, i) => {
        const reverse = i % 2 === 1
        return (
          <section
            key={sol.id}
            id={sol.id}
            className="px-6 lg:px-8 py-24 md:py-32 border-t border-[#ebe6dd] scroll-mt-24"
          >
            <div className="mx-auto max-w-7xl grid gap-12 md:grid-cols-12 items-start">
              <div className={`md:col-span-5 ${reverse ? 'md:order-2 md:col-start-8' : ''}`}>
                <Reveal>
                  <p className="text-xs uppercase tracking-widest text-[#ff5a1f] font-semibold">
                    {sol.eyebrow}
                  </p>
                  <h2 className="mt-4 text-4xl md:text-5xl font-extrabold text-[#1C1C1C] leading-tight">
                    {sol.title}
                  </h2>
                  <p className="mt-6 text-base md:text-lg text-[#3a3a3a] leading-relaxed">
                    {sol.summary}
                  </p>
                  <Link
                    href="/contact"
                    className="mt-8 inline-flex items-center justify-center rounded-full bg-[#1C1C1C] px-5 py-2.5 text-sm font-medium text-[#f9f7f3] hover:bg-black transition-colors"
                  >
                    Talk to a partner
                  </Link>
                </Reveal>
              </div>

              <div className={`md:col-span-6 ${reverse ? 'md:order-1 md:col-start-1' : 'md:col-start-7'}`}>
                <Reveal delay={120}>
                  <ul className="divide-y divide-[#ebe6dd] border-t border-b border-[#ebe6dd]">
                    {sol.bullets.map((b, idx) => (
                      <li key={idx} className="flex gap-4 py-5">
                        <span className="mt-1 inline-flex h-5 w-5 flex-none items-center justify-center rounded-full bg-[#1C1C1C] text-[#f9f7f3] text-[11px] font-mono">
                          {String(idx + 1).padStart(2, '0')}
                        </span>
                        <p className="text-base leading-relaxed text-[#3a3a3a]">{b}</p>
                      </li>
                    ))}
                  </ul>
                </Reveal>
              </div>
            </div>
          </section>
        )
      })}

      {/* BOTTOM CTA */}
      <section className="px-6 lg:px-8 py-24 md:py-32 border-t border-[#ebe6dd]">
        <div className="mx-auto max-w-4xl text-center">
          <Reveal>
            <h2 className="text-4xl md:text-6xl font-extrabold text-[#1C1C1C] leading-[0.98] text-balance">
              Not sure which one fits.
            </h2>
            <p className="mt-6 text-base md:text-lg text-[#3a3a3a] max-w-2xl mx-auto leading-relaxed">
              Send a short note about where your program is today. A senior partner reads
              every inbound and will write back with an honest opinion.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-[#1C1C1C] px-6 py-3 text-sm font-medium text-[#f9f7f3] hover:bg-black transition-colors"
              >
                Start a conversation
              </Link>
              <Link
                href="/how-it-works"
                className="inline-flex items-center justify-center rounded-full border border-[#d4cfc4] bg-white px-6 py-3 text-sm font-medium text-[#1C1C1C] hover:border-[#1C1C1C] transition-colors"
              >
                See how we work
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </PageShell>
  )
}
