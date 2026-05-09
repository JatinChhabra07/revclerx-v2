import PageShell from '@/components/PageShell'
import Reveal from '@/components/Reveal'
import Link from 'next/link'
import Image from 'next/image'
import type { Metadata } from 'next'
import { ArrowRight, Check } from 'lucide-react'
import { VerticalCutReveal } from '@/components/ui/vertical-cut-reveal'
import { FAQAccordion } from '@/components/ui/faq-accordion'
import { CTABanner } from '@/components/ui/cta-banner'
import { SectionEyebrow } from '@/components/ui/section-eyebrow'

export const metadata: Metadata = {
  title: 'Solutions | RevClerx engagement models',
  description:
    'Three ways to engage with RevClerx: AI Transformation Assessment, Continuous AI Transformation, and Enterprise Deployment.',
}

const FAQ = [
  {
    question: 'Which engagement should we start with?',
    answer:
      'Most organizations begin with the Assessment. Ten days is enough to surface where AI creates real value and decide whether continuous or full deployment is the right next step.',
  },
  {
    question: 'Can we move from one engagement into another?',
    answer:
      'Yes. The Assessment is designed to flow naturally into Continuous Transformation, and continuous engagements often expand into full Deployments as priorities sharpen. Nothing locks you in.',
  },
  {
    question: 'How are continuous engagements priced?',
    answer:
      'Continuous Transformation runs on a fixed monthly retainer scoped to teams, models, and adoption work in flight. Outcomes are agreed quarterly and reviewed honestly.',
  },
  {
    question: 'Who owns the work after a deployment ends?',
    answer:
      'Your team. Forward-deployed engineers document patterns, train your operators, and graduate ownership before they leave. We do not build dependency, we build capability that stays.',
  },
]

type Solution = {
  id: string
  step: string
  badge: string
  title: string
  tagline: string
  description: string
  bullets: string[]
  ctaLabel: string
  image: string
  imageAlt: string
  surface: 'cream' | 'white'
  reverse?: boolean
}

const SOLUTIONS: Solution[] = [
  {
    id: 'assessment',
    step: '01',
    badge: 'Diagnostic · 10 days',
    title: 'AI Transformation Assessment',
    tagline: 'See your company clearly. In days, not months.',
    description:
      'A focused 10-day diagnostic for leadership teams that need a defensible point of view on where AI fits, what it costs, and how it lands. Parallel AI interviews surface every signal. A senior partner pressure tests every conclusion.',
    bullets: [
      'Org-wide AI interviews — front line to executive, in parallel',
      'Operational map of how work actually moves through your business',
      'Opportunity model with feasibility, business impact, and ROI projections',
      'Prioritized 12-month roadmap sequenced by dependency and risk',
      'Executive readout with the trade-offs your board will ask about',
    ],
    ctaLabel: 'Book the assessment',
    image:
      'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Strategic working session with operational map projected',
    surface: 'white',
  },
  {
    id: 'continuous',
    step: '02',
    badge: 'Partnership · monthly',
    title: 'Continuous AI Transformation',
    tagline: 'A senior partner alongside your operating team.',
    description:
      'A monthly engagement for organizations that need a senior partner alongside the operating team as priorities shift. We hold the AI portfolio honest, keep adoption climbing, and make sure each quarter is sharper than the last.',
    bullets: [
      'Personalized weekly briefings tailored to each role',
      'Adoption tracking with leading indicators, not vanity metrics',
      'Model performance and risk monitoring across deployed systems',
      'Quarterly executive briefings that keep the board on the same page',
      'Continuous map updates as the business evolves',
    ],
    ctaLabel: 'Talk to a partner',
    image:
      'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Continuous partnership team in collaborative session',
    surface: 'cream',
    reverse: true,
  },
  {
    id: 'deployment',
    step: '03',
    badge: 'Embedded · in your perimeter',
    title: 'Enterprise Deployment',
    tagline: 'Forward-deployed engineers building inside your stack.',
    description:
      'Forward-deployed engineers working inside your perimeter to ship the systems your roadmap depends on. We handle the build, the integrations, and the security review, then graduate the work to your team.',
    bullets: [
      'Dedicated cross-functional team scoped to your priority initiatives',
      'Custom AI systems built against your data, your stack, your policies',
      'Deep integration with the tools your operators already use every day',
      'Security, privacy, and compliance review baked into the delivery rhythm',
      'Hands-on enablement so your team owns what we built',
    ],
    ctaLabel: 'Scope a deployment',
    image:
      'https://images.unsplash.com/photo-1573164574572-cb89e39749b4?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Engineers shipping production AI systems',
    surface: 'white',
  },
]

function SolutionBlock({ s }: { s: Solution }) {
  const bg = s.surface === 'cream' ? 'bg-cream-200' : 'bg-white'
  return (
    <section id={s.id} className={`${bg} border-t border-line scroll-mt-20`}>
      <div className="max-w-7xl mx-auto px-6 py-24 md:py-32">
        <div
          className={`grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center ${
            s.reverse ? 'lg:[&>*:first-child]:order-2' : ''
          }`}
        >
          {/* Copy */}
          <Reveal className="lg:col-span-6">
            <div className="flex items-center gap-3 mb-6">
              <span className="font-mono text-xs text-accent font-semibold">{s.step}</span>
              <span className="badge-glass">
                <span className="w-1 h-1 rounded-full bg-accent" />
                {s.badge}
              </span>
            </div>
            <h2 className="text-4xl md:text-6xl font-semibold tracking-tight text-ink-900 text-balance leading-[1.05]">
              {s.title}
            </h2>
            <p className="mt-5 text-lg md:text-xl text-accent font-medium italic leading-snug max-w-xl">
              {s.tagline}
            </p>
            <p className="mt-6 text-base md:text-lg text-body leading-relaxed max-w-xl">
              {s.description}
            </p>
            <ul className="mt-8 space-y-3">
              {s.bullets.map((b) => (
                <li key={b} className="flex items-start gap-3 text-body">
                  <span className="mt-0.5 inline-flex items-center justify-center w-5 h-5 rounded-full bg-accent-soft border border-accent/30 flex-none">
                    <Check className="w-3 h-3 text-accent" strokeWidth={3} />
                  </span>
                  <span className="leading-relaxed">{b}</span>
                </li>
              ))}
            </ul>
            <div className="mt-10">
              <Link href="/contact" className="btn-accent">
                {s.ctaLabel}
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </Reveal>

          {/* Image */}
          <Reveal className="lg:col-span-6" delay={0.15}>
            <div className="relative">
              <div className="img-frame aspect-[4/3] relative">
                <Image
                  src={s.image}
                  alt={s.imageAlt}
                  fill
                  sizes="(min-width: 1024px) 600px, 100vw"
                  className="object-cover"
                />
              </div>
              {/* Overlay annotation chip */}
              <div className="absolute -bottom-5 -right-3 md:-right-6 bg-white border border-line rounded-2xl shadow-[0_18px_40px_-18px_rgba(10,10,10,0.22)] p-4 max-w-[230px]">
                <p className="text-[11px] uppercase tracking-widest text-muted">Step {s.step}</p>
                <p className="mt-1 text-sm font-semibold text-ink-900 leading-snug">
                  {s.title}
                </p>
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
      <section className="relative overflow-hidden">
        <div aria-hidden="true" className="bg-radial-soft" />
        <div className="relative max-w-7xl mx-auto px-6 pt-20 pb-16 md:pt-28 md:pb-20">
          <Reveal>
            <div className="badge-glass">
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              Three ways to engage
            </div>
          </Reveal>
          <h1 className="mt-7 text-5xl md:text-7xl font-semibold tracking-tight text-ink-900 text-balance leading-[1.04] max-w-4xl">
            <VerticalCutReveal>Pick the engagement that fits where you are.</VerticalCutReveal>
          </h1>
          <Reveal delay={0.4}>
            <p className="mt-7 max-w-2xl text-lg md:text-xl text-body leading-relaxed">
              RevClerx scales with your moment. Start with a focused diagnostic, run a continuous transformation partnership, or bring in an embedded team that ships production AI alongside your operators.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link href="#assessment" className="btn-accent">
                Start with the assessment
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <Link href="/contact" className="btn-secondary">
                Talk to a partner
              </Link>
            </div>
          </Reveal>
          {/* quick anchor nav */}
          <Reveal delay={0.55}>
            <div className="mt-14 flex flex-wrap gap-2">
              {SOLUTIONS.map((s) => (
                <Link
                  key={s.id}
                  href={`#${s.id}`}
                  className="inline-flex items-center gap-2 rounded-full border border-line bg-white hover:border-ink-900 hover:bg-ink-900 hover:text-cream px-4 py-2 text-xs font-semibold text-ink-900 transition-all"
                >
                  <span className="font-mono text-accent group-hover:text-cream">{s.step}</span>
                  {s.title}
                </Link>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* SOLUTION BLOCKS */}
      {SOLUTIONS.map((s) => (
        <SolutionBlock key={s.id} s={s} />
      ))}

      {/* COMPARISON STRIP */}
      <section className="bg-cream-200 border-y border-line py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal className="max-w-3xl">
            <SectionEyebrow>Side by side</SectionEyebrow>
            <h2 className="mt-4 text-4xl md:text-5xl font-semibold tracking-tight text-ink-900 leading-[1.05]">
              Compare engagement shapes.
            </h2>
          </Reveal>

          <div className="mt-12 overflow-hidden rounded-3xl border border-line bg-white">
            <div className="grid grid-cols-4 text-sm">
              <div className="p-5 border-b border-line bg-cream font-semibold text-ink-900">Dimension</div>
              <div className="p-5 border-b border-line bg-cream font-semibold text-ink-900">Assessment</div>
              <div className="p-5 border-b border-line bg-cream font-semibold text-ink-900">Continuous</div>
              <div className="p-5 border-b border-line bg-cream font-semibold text-ink-900">Deployment</div>

              {[
                ['Timeline', '~10 days', 'Monthly, ongoing', '8–16 weeks per system'],
                ['Output', 'Map + roadmap', 'Adoption + ops', 'Production AI'],
                ['Best for', 'Leadership clarity', 'Sustained shift', 'Embedded delivery'],
                ['Pricing', 'Fixed fee', 'Monthly retainer', 'Project + retainer'],
                ['Ownership', 'Your strategy team', 'Shared with us', 'Graduates to you'],
              ].map((row, i) => (
                <div key={i} className="contents">
                  {row.map((cell, j) => (
                    <div
                      key={j}
                      className={`p-5 border-b border-line text-body last:border-b-0 ${
                        j === 0 ? 'font-semibold text-ink-900 bg-cream-50' : ''
                      }`}
                    >
                      {cell}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 md:py-32">
        <div className="max-w-4xl mx-auto px-6">
          <Reveal>
            <SectionEyebrow>Common questions</SectionEyebrow>
            <h2 className="mt-4 text-4xl md:text-6xl font-semibold tracking-tight text-ink-900 text-balance leading-[1.05]">
              Choosing between the three.
            </h2>
            <p className="mt-6 text-lg text-body leading-relaxed max-w-2xl">
              A short read for leaders trying to figure out where to begin and how the engagements fit together.
            </p>
          </Reveal>
          <Reveal className="mt-12">
            <FAQAccordion items={FAQ} defaultOpen={0} />
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <CTABanner
        title="Not sure which fits? Talk it through."
        body="Thirty minutes with a partner is usually enough to decide where to start. No deck, no pitch, just a working conversation about your priorities."
        primaryLabel="Book a strategy call"
        secondaryLabel="See how we work"
        secondaryHref="/how-it-works"
      />
    </PageShell>
  )
}
