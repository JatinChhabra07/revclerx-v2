import PageShell from '@/components/PageShell'
import Reveal from '@/components/Reveal'
import Link from 'next/link'
import type { Metadata } from 'next'
import { VerticalCutReveal } from '@/components/ui/vertical-cut-reveal'
import { FAQAccordion } from '@/components/ui/faq-accordion'

export const metadata: Metadata = {
  title: 'Your enterprise AI transformation partner',
  description: 'RevClerx maps how your organization actually works, identifies where AI creates real value, and helps your team execute the change with confidence.'
}

const faqItems = [
  {
    question: 'How is this different from a traditional consulting firm?',
    answer: 'Most firms hand over a deck and a roadmap. We pair senior consultants with dedicated AI agents to interview teams at scale, and we stay through execution with forward deployed engineers. The deliverable is working software and adopted change, not a document.'
  },
  {
    question: 'What do the discovery interviews actually look like?',
    answer: 'Structured conversations with people across the org, from the front line to the executive team. Our AI agents capture and synthesize signals while our consultants probe the edges humans always miss. Most clients reach full coverage in two to four weeks instead of months.'
  },
  {
    question: 'How quickly do results land?',
    answer: 'A typical readiness assessment surfaces priority opportunities within four to six weeks. First production deployments ship inside the first quarter, and continuous engagement compounds value across teams from there.'
  },
  {
    question: 'How do you upskill our internal teams?',
    answer: 'Enablement is built into every engagement. We pair your operators with our engineers, document patterns as we go, and graduate ownership to your team so the capability stays inside the company instead of leaving with us.'
  },
  {
    question: 'What size of company do you work with?',
    answer: 'We focus on enterprises and fast scaling mid market organizations where the operating model is complex enough that AI cannot be bolted on. If your org chart spans multiple business units or regulated functions, we are built for you.'
  },
  {
    question: 'How do you handle data security and compliance?',
    answer: 'Every engagement is shaped around your data residency, access controls, and audit requirements. We deploy inside your perimeter when needed, work against approved model providers, and document every flow so security and legal can sign off without surprises.'
  },
]

export default function HomePage() {
  return (
    <PageShell>
      {/* HERO */}
      <section className="bg-[#faf6ef]">
        <div className="max-w-6xl mx-auto px-6 pt-24 pb-24 md:pt-32 md:pb-28">
          <div className="inline-flex items-center gap-2 rounded-full bg-white border border-[#e5e2db] px-4 py-1.5 text-xs font-medium text-[#0a0a0a]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#1f4d3a]"></span>
            Enterprise AI consulting
          </div>
          <h1 className="mt-7 text-5xl md:text-7xl font-semibold tracking-tight text-[#0a0a0a] text-balance leading-[1.04]">
            <VerticalCutReveal>Your enterprise AI transformation partner.</VerticalCutReveal>
          </h1>
          <p className="mt-7 max-w-2xl text-lg md:text-xl text-[#2a2a2a] leading-relaxed">
            RevClerx maps how your organization actually works, identifies where AI shifts the math, and stays alongside your team until the change is real.
          </p>
          <p className="mt-3 max-w-2xl text-lg md:text-xl text-[#2a2a2a] leading-relaxed">
            Senior consultants paired with dedicated AI agents, working at the speed your business demands.
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
              href="/how-it-works"
              className="inline-flex items-center gap-2 rounded-full border border-[#0a0a0a] bg-transparent px-7 py-3.5 text-sm font-semibold text-[#0a0a0a] hover:bg-[#0a0a0a] hover:text-[#faf6ef] transition-colors"
            >
              How we work
            </Link>
          </div>
          <p className="mt-10 text-xs uppercase tracking-[0.22em] text-[#6b6457]">
            Trusted by enterprise teams across regulated industries
          </p>
        </div>
      </section>

      {/* PROBLEM NARRATIVE */}
      <section className="bg-white border-t border-[#e5e2db]">
        <div className="max-w-3xl mx-auto px-6 py-24 md:py-32">
          <Reveal>
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-[#0a0a0a] text-balance leading-[1.1]">
              AI moves faster than most organizations can adapt.
            </h2>
            <div className="mt-10 space-y-6 text-lg text-[#2a2a2a] leading-relaxed">
              <p>
                Every quarter, a new generation of tools lands on your team. Pilots multiply. Vendor decks pile up. Real production capability remains rare.
              </p>
              <p>
                Most enterprise transformation still runs on slide decks and gut feel. Six months in, the architecture diagram is updated, the operating model is not.
              </p>
              <p>
                RevClerx exists to fix that gap. We translate AI capability into operational change your people actually adopt, with the depth and accountability the work demands.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* THE METHOD */}
      <section className="bg-[#faf6ef] border-t border-[#e5e2db]">
        <div className="max-w-6xl mx-auto px-6 py-24 md:py-32">
          <Reveal className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.25em] text-[#6b6457]">How we work</p>
            <h2 className="mt-4 text-4xl md:text-5xl font-semibold tracking-tight text-[#0a0a0a] text-balance leading-[1.1]">
              AI scale for breadth, human judgment for depth.
            </h2>
          </Reveal>

          <div className="mt-16 border-t border-[#0a0a0a]">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8 pt-10">
              <Reveal className="relative">
                <span className="text-xs font-mono text-[#1f4d3a]">01</span>
                <h3 className="mt-3 text-xl font-semibold text-[#0a0a0a]">Listen</h3>
                <p className="mt-3 text-sm text-[#2a2a2a] leading-relaxed">
                  Senior consultants and dedicated AI agents conduct structured interviews across the organization. We capture how work actually flows, not how the org chart claims it does.
                </p>
              </Reveal>
              <Reveal className="relative">
                <span className="text-xs font-mono text-[#1f4d3a]">02</span>
                <h3 className="mt-3 text-xl font-semibold text-[#0a0a0a]">Map</h3>
                <p className="mt-3 text-sm text-[#2a2a2a] leading-relaxed">
                  We build a granular operational map of your business. It surfaces where work moves, where it stalls, and where AI shifts the math.
                </p>
              </Reveal>
              <Reveal className="relative">
                <span className="text-xs font-mono text-[#1f4d3a]">03</span>
                <h3 className="mt-3 text-xl font-semibold text-[#0a0a0a]">Roadmap</h3>
                <p className="mt-3 text-sm text-[#2a2a2a] leading-relaxed">
                  A prioritized transformation plan with technical feasibility, business impact, and a clear sequence. Every initiative ties to a measurable outcome.
                </p>
              </Reveal>
              <Reveal className="relative">
                <span className="text-xs font-mono text-[#1f4d3a]">04</span>
                <h3 className="mt-3 text-xl font-semibold text-[#0a0a0a]">Execute</h3>
                <p className="mt-3 text-sm text-[#2a2a2a] leading-relaxed">
                  Forward deployed engineers and ongoing enablement until the change is real, measured, and sticking. We graduate ownership to your team as it lands.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* SOLUTIONS */}
      <section className="bg-white border-t border-[#e5e2db]">
        <div className="max-w-6xl mx-auto px-6 py-24 md:py-32">
          <Reveal className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.25em] text-[#6b6457]">Engagement models</p>
            <h2 className="mt-4 text-4xl md:text-5xl font-semibold tracking-tight text-[#0a0a0a] text-balance leading-[1.1]">
              Three ways to engage.
            </h2>
          </Reveal>

          <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-5">
            <Reveal>
              <Link
                href="/solutions#assessment"
                className="block h-full rounded-2xl border border-[#e5e2db] bg-[#faf6ef] p-8 transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_12px_32px_-12px_rgba(10,10,10,0.18)]"
              >
                <p className="text-xs font-mono text-[#1f4d3a]">01</p>
                <h3 className="mt-4 text-2xl font-semibold text-[#0a0a0a]">AI Readiness Assessment</h3>
                <p className="mt-3 text-sm text-[#2a2a2a] leading-relaxed">
                  A one time deep diagnostic that surfaces where AI creates value across your operating model and what it will take to capture it.
                </p>
                <span className="mt-6 inline-flex items-center gap-1 text-xs font-medium text-[#0a0a0a]">
                  Learn more <span aria-hidden="true">{'→'}</span>
                </span>
              </Link>
            </Reveal>

            <Reveal>
              <Link
                href="/solutions#continuous"
                className="block h-full rounded-2xl border border-[#e5e2db] bg-[#faf6ef] p-8 transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_12px_32px_-12px_rgba(10,10,10,0.18)]"
              >
                <p className="text-xs font-mono text-[#1f4d3a]">02</p>
                <h3 className="mt-4 text-2xl font-semibold text-[#0a0a0a]">Continuous Transformation</h3>
                <p className="mt-3 text-sm text-[#2a2a2a] leading-relaxed">
                  Ongoing monthly support that drives adoption, measures progress, and keeps the operating map current as your business evolves.
                </p>
                <span className="mt-6 inline-flex items-center gap-1 text-xs font-medium text-[#0a0a0a]">
                  Learn more <span aria-hidden="true">{'→'}</span>
                </span>
              </Link>
            </Reveal>

            <Reveal>
              <Link
                href="/solutions#deployment"
                className="block h-full rounded-2xl border border-[#e5e2db] bg-[#faf6ef] p-8 transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_12px_32px_-12px_rgba(10,10,10,0.18)]"
              >
                <p className="text-xs font-mono text-[#1f4d3a]">03</p>
                <h3 className="mt-4 text-2xl font-semibold text-[#0a0a0a]">Enterprise Deployment</h3>
                <p className="mt-3 text-sm text-[#2a2a2a] leading-relaxed">
                  Forward deployed engineers building custom AI inside your perimeter, with full security, governance, and handover to your team.
                </p>
                <span className="mt-6 inline-flex items-center gap-1 text-xs font-medium text-[#0a0a0a]">
                  Learn more <span aria-hidden="true">{'→'}</span>
                </span>
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[#faf6ef] border-t border-[#e5e2db]">
        <div className="max-w-3xl mx-auto px-6 py-24 md:py-32">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.25em] text-[#6b6457]">Common questions</p>
            <h2 className="mt-4 text-4xl md:text-5xl font-semibold tracking-tight text-[#0a0a0a] text-balance leading-[1.1]">
              Questions worth asking.
            </h2>
          </Reveal>
          <div className="mt-12">
            <FAQAccordion items={faqItems} />
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-white border-t border-[#e5e2db]">
        <div className="max-w-4xl mx-auto px-6 py-24 md:py-32 text-center">
          <Reveal>
            <h2 className="text-4xl md:text-6xl font-semibold tracking-tight text-[#0a0a0a] text-balance leading-[1.05]">
              Begin your AI transformation.
            </h2>
            <p className="mt-6 text-lg md:text-xl text-[#2a2a2a] leading-relaxed">
              Book a strategy call and leave with a clear view of where AI creates the most value inside your business.
            </p>
            <div className="mt-9 flex justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-[#1f4d3a] px-8 py-4 text-sm font-semibold text-[#faf6ef] hover:bg-[#163829] transition-colors"
              >
                Book a strategy call
                <span aria-hidden="true">{'→'}</span>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </PageShell>
  )
}
