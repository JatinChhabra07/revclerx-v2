import PageShell from '@/components/PageShell'
import Reveal from '@/components/Reveal'
import Link from 'next/link'
import type { Metadata } from 'next'
import { VerticalCutReveal } from '@/components/ui/vertical-cut-reveal'

export const metadata: Metadata = {
  title: 'How it works | The RevClerx method',
  description:
    'A four step method for enterprise AI transformation: listen across the organization, map how work flows, sequence a roadmap, and execute with forward deployed engineers.',
}

type Step = {
  num: string
  title: string
  description: string
  deliverables: string[]
}

const steps: Step[] = [
  {
    num: '01',
    title: 'Listen',
    description:
      'Senior consultants and dedicated AI agents run parallel interviews across the organization. We talk to operators on the front line, the engineers behind the systems, and the executives setting the bar. The goal is to understand how work actually flows, not how the org chart claims it does.',
    deliverables: [
      'Structured interviews across functions, regions, and seniority',
      'AI assisted synthesis that captures every signal in the room',
      'Stakeholder map with explicit champions and quiet skeptics',
    ],
  },
  {
    num: '02',
    title: 'Map',
    description:
      'We translate everything we heard into a granular operational map of your business. Every process, handoff, and decision point is on it. Where work moves smoothly, where it stalls, and where AI shifts the underlying math become visible in the same picture.',
    deliverables: [
      'Process level map of operations across business units',
      'Friction inventory with quantified time and cost estimates',
      'Capability assessment of data, tooling, and team readiness',
    ],
  },
  {
    num: '03',
    title: 'Roadmap',
    description:
      'We sequence the opportunity set into a prioritized transformation plan. Each initiative carries a feasibility read, a measurable business outcome, and a defensible cost line. The order is set by dependency and risk, not by enthusiasm.',
    deliverables: [
      'Twelve month roadmap with quarterly milestones and owners',
      'ROI model grounded in your numbers, not industry averages',
      'Risk register covering data, security, and change management',
    ],
  },
  {
    num: '04',
    title: 'Execute',
    description:
      'Forward deployed engineers move inside your perimeter and ship the systems on the roadmap. Enablement runs alongside delivery so your operators learn the patterns as they land. We graduate ownership to your team before we leave.',
    deliverables: [
      'Production AI systems integrated with your stack and data',
      'Hands on enablement so your team owns what we built',
      'Adoption telemetry that proves the change is real and sticking',
    ],
  },
]

export default function HowItWorksPage() {
  return (
    <PageShell>
      {/* HERO */}
      <section className="bg-[#faf6ef]">
        <div className="max-w-6xl mx-auto px-6 pt-24 pb-24 md:pt-32 md:pb-28">
          <div className="inline-flex items-center gap-2 rounded-full bg-white border border-[#e5e2db] px-4 py-1.5 text-xs font-medium text-[#0a0a0a]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#1f4d3a]"></span>
            The method
          </div>
          <h1 className="mt-7 text-5xl md:text-7xl font-semibold tracking-tight text-[#0a0a0a] text-balance leading-[1.04]">
            <VerticalCutReveal>How transformation actually happens.</VerticalCutReveal>
          </h1>
          <p className="mt-7 max-w-2xl text-lg md:text-xl text-[#2a2a2a] leading-relaxed">
            A four step method that pairs human judgment with AI scale. We listen across the organization, map how work moves, sequence the roadmap, and stay through execution until the change is real.
          </p>
          <p className="mt-3 max-w-2xl text-lg md:text-xl text-[#2a2a2a] leading-relaxed">
            The work compounds because every step hands the next one a sharper picture.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-[#1f4d3a] px-7 py-3.5 text-sm font-semibold text-[#faf6ef] hover:bg-[#163829] transition-colors"
            >
              Book a strategy call
              <span aria-hidden="true">{'→'}</span>
            </Link>
            <Link
              href="/solutions"
              className="inline-flex items-center gap-2 rounded-full border border-[#0a0a0a] bg-transparent px-7 py-3.5 text-sm font-semibold text-[#0a0a0a] hover:bg-[#0a0a0a] hover:text-[#faf6ef] transition-colors"
            >
              See engagement models
            </Link>
          </div>
        </div>
      </section>

      {/* STEPS */}
      {steps.map((step, idx) => {
        const isCream = idx % 2 === 1
        const bg = isCream ? 'bg-[#faf6ef]' : 'bg-white'
        return (
          <section key={step.num} className={`${bg} border-t border-[#e5e2db]`}>
            <div className="max-w-5xl mx-auto px-6 py-24 md:py-32">
              <Reveal>
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16">
                  <div className="md:col-span-3">
                    <span className="block text-7xl md:text-8xl font-semibold tracking-tight text-[#1f4d3a] leading-none">
                      {step.num}
                    </span>
                    <p className="mt-4 text-xs uppercase tracking-[0.25em] text-[#6b6457]">
                      Step {step.num}
                    </p>
                  </div>
                  <div className="md:col-span-9">
                    <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-[#0a0a0a] text-balance leading-[1.1]">
                      {step.title}
                    </h2>
                    <p className="mt-6 text-lg text-[#2a2a2a] leading-relaxed">
                      {step.description}
                    </p>
                    <div className="mt-10 border-t border-[#e5e2db] pt-8">
                      <p className="text-xs uppercase tracking-[0.25em] text-[#6b6457]">
                        What we deliver
                      </p>
                      <ul className="mt-5 space-y-3">
                        {step.deliverables.map((d) => (
                          <li key={d} className="flex items-start gap-3 text-[#2a2a2a]">
                            <span
                              aria-hidden="true"
                              className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-[#1f4d3a]"
                            />
                            <span className="leading-relaxed">{d}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </section>
        )
      })}

      {/* WHY THIS WORKS */}
      <section className="bg-[#0a0a0a] border-t border-[#0a0a0a]">
        <div className="max-w-4xl mx-auto px-6 py-24 md:py-32 text-center">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.25em] text-[#faf6ef]/60">Why this works</p>
            <p className="mt-6 text-3xl md:text-4xl font-semibold tracking-tight text-[#faf6ef] text-balance leading-[1.2]">
              Most transformations stall because the people who design them never meet the people who have to live inside them. Our method closes that gap before a single line of code is written.
            </p>
          </Reveal>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-[#faf6ef] border-t border-[#e5e2db]">
        <div className="max-w-3xl mx-auto px-6 py-24 md:py-32 text-center">
          <Reveal>
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-[#0a0a0a] text-balance leading-[1.1]">
              Ready to see the method in your business?
            </h2>
            <p className="mt-6 text-lg text-[#2a2a2a] leading-relaxed">
              A short call is the fastest way to find out where AI shifts the math for your team and what a credible first step looks like.
            </p>
            <div className="mt-10 flex flex-wrap gap-3 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-[#1f4d3a] px-7 py-3.5 text-sm font-semibold text-[#faf6ef] hover:bg-[#163829] transition-colors"
              >
                Book a strategy call
                <span aria-hidden="true">{'→'}</span>
              </Link>
              <Link
                href="/solutions"
                className="inline-flex items-center gap-2 rounded-full border border-[#0a0a0a] bg-transparent px-7 py-3.5 text-sm font-semibold text-[#0a0a0a] hover:bg-[#0a0a0a] hover:text-[#faf6ef] transition-colors"
              >
                Compare engagements
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </PageShell>
  )
}
