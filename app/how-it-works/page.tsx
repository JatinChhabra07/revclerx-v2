import PageShell from '@/components/PageShell'
import Reveal from '@/components/Reveal'
import Link from 'next/link'
import Image from 'next/image'
import type { Metadata } from 'next'
import { ArrowRight, Mic, Map, Compass, Rocket, Check } from 'lucide-react'
import { VerticalCutReveal } from '@/components/ui/vertical-cut-reveal'
import { CTABanner } from '@/components/ui/cta-banner'
import { SectionEyebrow } from '@/components/ui/section-eyebrow'
import { QuoteBlock } from '@/components/ui/quote-block'

export const metadata: Metadata = {
  title: 'How it works | The RevClerx method',
  description:
    'A four-step method for enterprise AI transformation: interview at scale, map how work flows, sequence a roadmap, transform with embedded engineers.',
}

type Step = {
  num: string
  icon: typeof Mic
  title: string
  tagline: string
  description: string
  deliverables: string[]
  image: string
  imageAlt: string
}

const STEPS: Step[] = [
  {
    num: '01',
    icon: Mic,
    title: 'Interviews',
    tagline: 'Every employee. Privately. In parallel.',
    description:
      'Senior consultants and dedicated AI agents run private 30-minute conversations across the organization. We talk to operators on the front line, the engineers behind the systems, and the executives setting the bar. The goal is to understand how work actually flows, not how the org chart claims it does.',
    deliverables: [
      'Confidential 30-min conversations across functions and seniority',
      'AI-assisted synthesis that captures every signal in the room',
      'Stakeholder map with explicit champions and quiet skeptics',
    ],
    image:
      'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'AI-assisted interview session in modern workspace',
  },
  {
    num: '02',
    icon: Map,
    title: 'Map',
    tagline: 'See your operating model. As it really is.',
    description:
      'We translate everything we heard into a granular operational map of your business. Every process, handoff, and decision point is on it. Where work moves smoothly, where it stalls, and where AI shifts the underlying math become visible in the same picture.',
    deliverables: [
      'Process-level map of operations across business units',
      'Friction inventory with quantified time and cost estimates',
      'Capability assessment of data, tooling, and team readiness',
    ],
    image:
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Operational map visualization on screen',
  },
  {
    num: '03',
    icon: Compass,
    title: 'Roadmap',
    tagline: 'A plan your CFO will sign off on.',
    description:
      'We sequence the opportunity set into a prioritized transformation plan. Each initiative carries a feasibility read, a measurable business outcome, and a defensible cost line. The order is set by dependency and risk, not by enthusiasm.',
    deliverables: [
      'Twelve-month roadmap with quarterly milestones and owners',
      'ROI model grounded in your numbers, not industry averages',
      'Risk register covering data, security, and change management',
    ],
    image:
      'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Strategy roadmap with priorities and timeline',
  },
  {
    num: '04',
    icon: Rocket,
    title: 'Transform',
    tagline: 'Production AI. Owned by your team.',
    description:
      'Forward-deployed engineers move inside your perimeter and ship the systems on the roadmap. Enablement runs alongside delivery so your operators learn the patterns as they land. We graduate ownership to your team before we leave.',
    deliverables: [
      'Production AI systems integrated with your stack and data',
      'Hands-on enablement so your team owns what we built',
      'Adoption telemetry that proves the change is real and sticking',
    ],
    image:
      'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Engineering team shipping production system',
  },
]

export default function HowItWorksPage() {
  return (
    <PageShell>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div aria-hidden="true" className="bg-radial-soft" />
        <div aria-hidden="true" className="bg-grid-faint" />
        <div className="relative max-w-7xl mx-auto px-6 pt-20 pb-16 md:pt-28 md:pb-20">
          <Reveal>
            <div className="badge-glass">
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              The method
            </div>
          </Reveal>
          <h1 className="mt-7 text-5xl md:text-7xl font-semibold tracking-tight text-ink-900 text-balance leading-[1.04] max-w-4xl">
            <VerticalCutReveal>How transformation actually happens.</VerticalCutReveal>
          </h1>
          <Reveal delay={0.4}>
            <p className="mt-7 max-w-2xl text-lg md:text-xl text-body leading-relaxed">
              A four-step method that pairs AI scale with human judgment. We listen across the organization, map how work moves, sequence the roadmap, and stay through execution until the change is real.
            </p>
            <p className="mt-3 max-w-2xl text-base text-muted leading-relaxed">
              The work compounds because every step hands the next one a sharper picture.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link href="/contact" className="btn-accent">
                Book a strategy call
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <Link href="/solutions" className="btn-secondary">
                See engagement models
              </Link>
            </div>
          </Reveal>

          {/* anchor strip */}
          <Reveal delay={0.55}>
            <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-3">
              {STEPS.map((s) => {
                const Icon = s.icon
                return (
                  <Link
                    key={s.num}
                    href={`#step-${s.num}`}
                    className="group flex items-center gap-3 rounded-2xl bg-white border border-line hover:border-accent hover:bg-accent-soft px-4 py-3 transition-all"
                  >
                    <span className="inline-flex w-9 h-9 rounded-xl bg-cream-200 group-hover:bg-white border border-line items-center justify-center">
                      <Icon className="w-4 h-4 text-accent" strokeWidth={1.8} />
                    </span>
                    <div>
                      <p className="font-mono text-[10px] text-accent">{s.num}</p>
                      <p className="text-sm font-semibold text-ink-900">{s.title}</p>
                    </div>
                  </Link>
                )
              })}
            </div>
          </Reveal>
        </div>
      </section>

      {/* STEPS */}
      {STEPS.map((step, idx) => {
        const Icon = step.icon
        const isCream = idx % 2 === 1
        const bg = isCream ? 'bg-cream-200' : 'bg-white'
        const reverse = idx % 2 === 1
        return (
          <section
            key={step.num}
            id={`step-${step.num}`}
            className={`${bg} border-t border-line scroll-mt-20`}
          >
            <div className="max-w-7xl mx-auto px-6 py-24 md:py-32">
              <div
                className={`grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center ${
                  reverse ? 'lg:[&>*:first-child]:order-2' : ''
                }`}
              >
                {/* COPY */}
                <Reveal className="lg:col-span-6">
                  <div className="flex items-center gap-3 mb-6">
                    <span className="inline-flex w-12 h-12 rounded-2xl bg-accent-soft border border-accent/20 items-center justify-center">
                      <Icon className="w-5 h-5 text-accent" strokeWidth={1.7} />
                    </span>
                    <span className="font-mono text-xs text-accent font-semibold">Step {step.num}</span>
                  </div>
                  <h2 className="text-4xl md:text-6xl font-semibold tracking-tight text-ink-900 text-balance leading-[1.05]">
                    {step.title}
                  </h2>
                  <p className="mt-5 text-lg md:text-xl text-accent font-medium italic leading-snug max-w-xl">
                    {step.tagline}
                  </p>
                  <p className="mt-6 text-base md:text-lg text-body leading-relaxed max-w-xl">
                    {step.description}
                  </p>
                  <div className="mt-10 pt-8 border-t border-line">
                    <p className="text-xs uppercase tracking-[0.25em] text-muted">What we deliver</p>
                    <ul className="mt-5 space-y-3">
                      {step.deliverables.map((d) => (
                        <li key={d} className="flex items-start gap-3 text-body">
                          <span className="mt-0.5 inline-flex items-center justify-center w-5 h-5 rounded-full bg-accent-soft border border-accent/30 flex-none">
                            <Check className="w-3 h-3 text-accent" strokeWidth={3} />
                          </span>
                          <span className="leading-relaxed">{d}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>

                {/* IMAGE */}
                <Reveal className="lg:col-span-6" delay={0.15}>
                  <div className="relative">
                    <div className="img-frame aspect-[4/3] relative">
                      <Image
                        src={step.image}
                        alt={step.imageAlt}
                        fill
                        sizes="(min-width: 1024px) 600px, 100vw"
                        className="object-cover"
                      />
                    </div>
                    {/* number badge floating */}
                    <div className="absolute -top-5 -left-5 md:-top-7 md:-left-7 inline-flex items-center justify-center w-20 h-20 md:w-24 md:h-24 rounded-3xl bg-ink-900 text-cream font-display font-bold text-3xl md:text-4xl shadow-[0_18px_40px_-18px_rgba(10,10,10,0.4)]">
                      {step.num}
                    </div>
                  </div>
                </Reveal>
              </div>
            </div>
          </section>
        )
      })}

      {/* WHY IT WORKS */}
      <section className="relative bg-ink-950 text-cream overflow-hidden border-t border-ink-800">
        <div aria-hidden="true" className="absolute -top-40 left-1/3 w-[500px] h-[500px] rounded-full bg-accent/30 blur-[140px]" />
        <div className="relative max-w-5xl mx-auto px-6 py-24 md:py-36 text-center">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.3em] text-cream/55">Why this works</p>
            <p className="mt-7 text-3xl md:text-5xl font-semibold tracking-tight leading-[1.15] text-cream text-balance">
              Most transformations stall because the people who design them never meet the people who have to live inside them. Our method closes that gap before a single line of code is written.
            </p>
          </Reveal>
        </div>
      </section>

      {/* QUOTE */}
      <section className="bg-cream-200 border-y border-line py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <QuoteBlock
            quote="AI transformation starts when the company can finally see itself."
            author="The RevClerx Method"
            role="In four words"
          />
        </div>
      </section>

      {/* CTA */}
      <CTABanner
        title="Ready to see the method in your business?"
        body="A short call is the fastest way to find out where AI shifts the math for your team and what a credible first step looks like."
        primaryLabel="Book a strategy call"
        secondaryLabel="Compare engagements"
        secondaryHref="/solutions"
      />
    </PageShell>
  )
}
