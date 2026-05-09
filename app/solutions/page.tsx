import PageShell from '@/components/PageShell'
import Reveal from '@/components/Reveal'
import Link from 'next/link'
import type { Metadata } from 'next'
import { VerticalCutReveal } from '@/components/ui/vertical-cut-reveal'
import { FAQAccordion } from '@/components/ui/faq-accordion'

export const metadata: Metadata = {
  title: 'Solutions | RevClerx engagement models',
  description:
    'Three ways to engage with RevClerx: a four week AI readiness assessment, a continuous transformation partnership, and full enterprise deployment with forward deployed engineers.',
}

const faqItems = [
  {
    question: 'Which engagement should we start with?',
    answer:
      'Most organizations begin with the readiness assessment. Four weeks is enough time to surface where AI creates real value, align stakeholders, and decide whether continuous or full deployment is the right next step.',
  },
  {
    question: 'Can we move from one engagement into another?',
    answer:
      'Yes. The assessment is designed to flow naturally into continuous transformation, and continuous engagements often expand into full deployments as priorities sharpen. Nothing about the model locks you in.',
  },
  {
    question: 'How are continuous engagements priced?',
    answer:
      'Continuous transformation runs on a fixed monthly retainer based on the scope of teams, models, and adoption work in flight. We agree on outcomes and review them on a quarterly cadence so the work stays honest.',
  },
  {
    question: 'Who owns the work after a deployment ends?',
    answer:
      'Your team does. Forward deployed engineers document patterns, train your operators, and graduate ownership before they leave. We do not build dependency, we build capability that stays inside the company.',
  },
]

type SolutionBlockProps = {
  id: string
  step: string
  eyebrow: string
  title: string
  description: string
  bullets: string[]
  ctaLabel: string
  ctaHref: string
  reverse?: boolean
  surface: 'cream' | 'white'
}

function SolutionBlock({
  id,
  step,
  eyebrow,
  title,
  description,
  bullets,
  ctaLabel,
  ctaHref,
  reverse = false,
  surface,
}: SolutionBlockProps) {
  const bg = surface === 'cream' ? 'bg-[#faf6ef]' : 'bg-white'

  return (
    <section id={id} className={`${bg} border-t border-[#e5e2db]`}>
      <div className="max-w-6xl mx-auto px-6 py-24 md:py-32">
        <div
          className={`grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-center ${
            reverse ? 'md:[&>*:first-child]:order-2' : ''
          }`}
        >
          <Reveal className="md:col-span-8">
            <p className="text-xs uppercase tracking-[0.25em] text-[#6b6457]">{eyebrow}</p>
            <h2 className="mt-4 text-4xl md:text-5xl font-semibold tracking-tight text-[#0a0a0a] text-balance leading-[1.1]">
              {title}
            </h2>
            <p className="mt-6 max-w-xl text-lg text-[#2a2a2a] leading-relaxed">{description}</p>
            <ul className="mt-8 space-y-3">
              {bullets.map((b) => (
                <li key={b} className="flex items-start gap-3 text-[#2a2a2a]">
                  <span
                    aria-hidden="true"
                    className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-[#1f4d3a]"
                  />
                  <span className="leading-relaxed">{b}</span>
                </li>
              ))}
            </ul>
            <div className="mt-10">
              <Link
                href={ctaHref}
                className="inline-flex items-center gap-2 rounded-full bg-[#1f4d3a] px-7 py-3.5 text-sm font-semibold text-[#faf6ef] hover:bg-[#163829] transition-colors"
              >
                {ctaLabel}
                <span aria-hidden="true">{'→'}</span>
              </Link>
            </div>
          </Reveal>

          <Reveal className="md:col-span-4">
            <div className="flex md:justify-end">
              <div className="relative">
                <div className="flex h-48 w-48 md:h-56 md:w-56 items-center justify-center rounded-full bg-[#1f4d3a] text-[#faf6ef]">
                  <span className="text-7xl md:text-8xl font-semibold tracking-tight">{step}</span>
                </div>
                <div
                  aria-hidden="true"
                  className="absolute inset-0 rounded-full border border-[#0a0a0a]/10 translate-x-3 translate-y-3 -z-10"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

export default function SolutionsPage() {
  return (
    <PageShell>
      {/* HERO */}
      <section className="bg-[#faf6ef]">
        <div className="max-w-6xl mx-auto px-6 pt-24 pb-24 md:pt-32 md:pb-28">
          <div className="inline-flex items-center gap-2 rounded-full bg-white border border-[#e5e2db] px-4 py-1.5 text-xs font-medium text-[#0a0a0a]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#1f4d3a]"></span>
            Three ways to engage
          </div>
          <h1 className="mt-7 text-5xl md:text-7xl font-semibold tracking-tight text-[#0a0a0a] text-balance leading-[1.04]">
            <VerticalCutReveal>Pick the engagement that fits where you are.</VerticalCutReveal>
          </h1>
          <p className="mt-7 max-w-2xl text-lg md:text-xl text-[#2a2a2a] leading-relaxed">
            RevClerx scales with your moment. Start with a focused four week diagnostic, run a continuous transformation partnership, or bring in an embedded team that ships production AI alongside your operators.
          </p>
          <p className="mt-3 max-w-2xl text-lg md:text-xl text-[#2a2a2a] leading-relaxed">
            The same senior bench works across all three. The shape of the engagement is the only thing that changes.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link
              href="#assessment"
              className="inline-flex items-center gap-2 rounded-full bg-[#1f4d3a] px-7 py-3.5 text-sm font-semibold text-[#faf6ef] hover:bg-[#163829] transition-colors"
            >
              Start with the assessment
              <span aria-hidden="true">{'→'}</span>
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-[#0a0a0a] bg-transparent px-7 py-3.5 text-sm font-semibold text-[#0a0a0a] hover:bg-[#0a0a0a] hover:text-[#faf6ef] transition-colors"
            >
              Talk to a partner
            </Link>
          </div>
        </div>
      </section>

      {/* SOLUTION 1 */}
      <SolutionBlock
        id="assessment"
        step="01"
        eyebrow="One time engagement"
        title="AI Readiness Assessment"
        description="A focused four week diagnostic for leadership teams that need a defensible point of view on where AI fits, what it costs, and how it lands. We run interviews across the org, pressure test the math, and hand you a plan you can actually fund."
        bullets={[
          'Parallel mapping interviews across operations, technology, and the front line',
          'Opportunity model with feasibility, business impact, and ROI projections',
          'Prioritized 12 month roadmap sequenced by dependency and risk',
          'Executive readout with the trade offs your board will ask about',
        ]}
        ctaLabel="Book the assessment"
        ctaHref="/contact"
        surface="white"
      />

      {/* SOLUTION 2 */}
      <SolutionBlock
        id="continuous"
        step="02"
        eyebrow="Ongoing partnership"
        title="Continuous Transformation"
        description="A monthly engagement for organizations that need a senior partner alongside the operating team as priorities shift. We hold the AI portfolio honest, keep adoption climbing, and make sure the next quarter is sharper than the last."
        bullets={[
          'Monthly upskilling and pattern sharing for product, ops, and engineering',
          'Adoption tracking with leading indicators rather than vanity metrics',
          'Model performance and risk monitoring across deployed systems',
          'Quarterly executive briefings that keep the board on the same page',
        ]}
        ctaLabel="Talk to a partner"
        ctaHref="/contact"
        reverse
        surface="cream"
      />

      {/* SOLUTION 3 */}
      <SolutionBlock
        id="deployment"
        step="03"
        eyebrow="Embedded delivery"
        title="Enterprise Deployment"
        description="Forward deployed engineers working inside your perimeter to ship the systems your roadmap depends on. We handle the build, the integrations, and the security review, then graduate the work to your team."
        bullets={[
          'Dedicated cross functional team scoped to your priority initiatives',
          'Custom AI systems built against your data, your stack, and your policies',
          'Deep integration with the tools your operators already use every day',
          'Security, privacy, and compliance review baked into the delivery rhythm',
        ]}
        ctaLabel="Scope a deployment"
        ctaHref="/contact"
        surface="white"
      />

      {/* FAQ */}
      <section className="bg-[#faf6ef] border-t border-[#e5e2db]">
        <div className="max-w-3xl mx-auto px-6 py-24 md:py-32">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.25em] text-[#6b6457]">Common questions</p>
            <h2 className="mt-4 text-4xl md:text-5xl font-semibold tracking-tight text-[#0a0a0a] text-balance leading-[1.1]">
              Choosing between the three.
            </h2>
            <p className="mt-6 text-lg text-[#2a2a2a] leading-relaxed">
              A short read for leaders trying to figure out where to begin and how the engagements fit together.
            </p>
          </Reveal>
          <Reveal className="mt-12">
            <FAQAccordion items={faqItems} />
          </Reveal>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="bg-white border-t border-[#e5e2db]">
        <div className="max-w-3xl mx-auto px-6 py-24 md:py-32 text-center">
          <Reveal>
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-[#0a0a0a] text-balance leading-[1.1]">
              Not sure which fits? Talk it through with us.
            </h2>
            <p className="mt-6 text-lg text-[#2a2a2a] leading-relaxed">
              Thirty minutes with a partner is usually enough to decide where to start. No deck, no pitch, just a working conversation about your priorities.
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
                href="/how-it-works"
                className="inline-flex items-center gap-2 rounded-full border border-[#0a0a0a] bg-transparent px-7 py-3.5 text-sm font-semibold text-[#0a0a0a] hover:bg-[#0a0a0a] hover:text-[#faf6ef] transition-colors"
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
