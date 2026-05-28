import PageShell from '@/components/PageShell'
import Reveal from '@/components/Reveal'
import Link from 'next/link'
import Image from 'next/image'
import type { Metadata } from 'next'
import { ArrowRight, Search, Compass, Code2, Rocket, TrendingUp, Check } from 'lucide-react'
import { VerticalCutReveal } from '@/components/ui/vertical-cut-reveal'
import { CTABanner } from '@/components/ui/cta-banner'
import { SectionEyebrow } from '@/components/ui/section-eyebrow'
import { QuoteBlock } from '@/components/ui/quote-block'

export const metadata: Metadata = {
  title: 'How it works | The RevClerx method',
  description:
    'A five-step method for enterprise AI transformation: Assess, Strategize, Build, Deploy, Scale. One team owns the entire arc.',
}

type Step = {
  num: string
  icon: typeof Search
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
    icon: Search,
    title: 'Assess',
    tagline: 'See where AI moves the math. Honestly.',
    description:
      'Every engagement begins with an AI readiness audit. We look at your data, talent, tooling, governance, and operating reality, and surface where AI is high-leverage, and where it is theatre. No one writes a roadmap until we have that shared map.',
    deliverables: [
      'Data, talent, and tooling readiness scorecard',
      'Workflow inventory with AI-leverage scoring',
      'Risk, security, and compliance posture review',
      'Honest read on what is ready and what is not',
    ],
    image:
      'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'AI readiness assessment in a strategy session',
  },
  {
    num: '02',
    icon: Compass,
    title: 'Strategize',
    tagline: 'A roadmap your CFO will fund.',
    description:
      'We sequence the opportunities into a prioritized transformation plan. Each initiative carries a feasibility read, a measurable business outcome, and a defensible ROI line. The order is set by dependency and risk, not by enthusiasm or vendor pitches.',
    deliverables: [
      'Twelve-month roadmap with quarterly milestones and owners',
      'ROI model grounded in your numbers, not industry averages',
      'Architecture sketch covering data, models, integration, and ops',
      'Risk register covering data, security, and change management',
    ],
    image:
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'AI transformation roadmap on a screen',
  },
  {
    num: '03',
    icon: Code2,
    title: 'Build',
    tagline: 'Engineers shipping, not consultants slideware.',
    description:
      'Forward-deployed engineers move inside your perimeter and ship the systems on the roadmap. Agents, RAG, ML pipelines, fine-tuned models, integrations, all built against your real data, your real stack, your real security policy.',
    deliverables: [
      'Production AI systems built on your data and your stack',
      'Eval suites and guardrails sized to the use case',
      'Documentation, runbooks, and tests that your team can extend',
      'Hands-on knowledge transfer alongside delivery',
    ],
    image:
      'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Engineering team building a production AI system',
  },
  {
    num: '04',
    icon: Rocket,
    title: 'Deploy',
    tagline: 'Inside the workflows your operators already use.',
    description:
      'A model in a notebook is not a deployment. We integrate the system into the tools your operators live in (ERP, CRM, ticketing, internal apps), handle the security review, train the team, and watch the first weeks of production traffic with you.',
    deliverables: [
      'Deep integration with your ERP, CRM, ticketing, and data lake',
      'Security and compliance review baked into the cutover',
      'Operator enablement so your team owns what we built',
      'Adoption telemetry that proves the change is real and sticking',
    ],
    image:
      'https://images.unsplash.com/photo-1573164574572-cb89e39749b4?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'AI deployment workshop with the client team',
  },
  {
    num: '05',
    icon: TrendingUp,
    title: 'Scale',
    tagline: 'From one pilot to enterprise-wide value.',
    description:
      'Production AI compounds when you operate it well. We run MLOps, model performance and cost monitoring, governance reporting, and continuous improvement, while the playbooks we built take the win to the next business unit.',
    deliverables: [
      'MLOps and LLMOps with CI/CD, eval suites, and drift monitoring',
      'Model performance, cost, and safety monitoring with alerting',
      'Continuous tuning, prompt iteration, and retrieval optimization',
      'Scale-out playbooks that move the win across the business',
    ],
    image:
      'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Operations team scaling AI across the enterprise',
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
            <VerticalCutReveal>From idea to industrialization. In five steps.</VerticalCutReveal>
          </h1>
          <Reveal delay={0.4}>
            <p className="mt-7 max-w-2xl text-lg md:text-xl text-body leading-relaxed">
              A method built for the part where most AI work stalls: the handoff between strategy and engineering, between pilot and production, between a model that works and a system the business owns.
            </p>
            <p className="mt-3 max-w-2xl text-base text-muted leading-relaxed">
              We do not hand the work off. We carry it from readiness to scale with one team.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link href="/contact" className="btn-accent">
                Book a strategy call
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <Link href="/solutions" className="btn-secondary">
                See our services
              </Link>
            </div>
          </Reveal>

          {/* anchor strip */}
          <Reveal delay={0.55}>
            <div className="mt-14 grid grid-cols-2 md:grid-cols-5 gap-3">
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
                <Reveal className="lg:col-span-6" delay={0.15} variant="slide-up">
                  <div className="group relative">
                    <div className="img-frame aspect-[4/3] relative overflow-hidden">
                      <Image
                        src={step.image}
                        alt={step.imageAlt}
                        fill
                        sizes="(min-width: 1024px) 600px, 100vw"
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      />
                    </div>
                    {/* number badge floating, brand gradient pill */}
                    <div
                      className="absolute -top-5 -left-5 md:-top-7 md:-left-7 inline-flex items-center justify-center w-20 h-20 md:w-24 md:h-24 rounded-3xl text-cream font-display font-bold text-3xl md:text-4xl shadow-[0_18px_40px_-12px_rgba(122,43,196,0.45)] transition-transform duration-500 group-hover:rotate-[-6deg] group-hover:scale-105"
                      style={{
                        background:
                          'linear-gradient(135deg, #3340D4 0%, #7A2BC4 55%, #E91E83 100%)',
                      }}
                    >
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
      <section className="relative bg-cream-50 text-ink-900 overflow-hidden border-t border-line">
        <div aria-hidden="true" className="absolute -top-40 left-1/3 w-[500px] h-[500px] rounded-full bg-brand-purple/12 blur-[140px]" />
        <div aria-hidden="true" className="absolute -bottom-40 -right-32 w-[420px] h-[420px] rounded-full bg-brand-magenta/10 blur-[140px]" />
        <div className="relative max-w-5xl mx-auto px-6 py-24 md:py-36 text-center">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.3em] text-muted">Why this works</p>
            <p className="mt-7 text-3xl md:text-5xl font-semibold tracking-tight leading-[1.15] text-ink-900 text-balance">
              Most AI work breaks at the seams between disciplines: strategy to engineering, pilot to production, model to operations. <span className="grad-text-brand">Our method does not have those seams.</span>
            </p>
          </Reveal>
        </div>
      </section>

      {/* QUOTE */}
      <section className="bg-cream-200 border-y border-line py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <QuoteBlock
            quote="AI transformation is not a slide. It is a system running in production, owned by a team that knows why."
            author="The RevClerx Method"
            role="In one line"
          />
        </div>
      </section>

      {/* CTA */}
      <CTABanner
        title="Ready to see the method in your business?"
        body="A short call is the fastest way to find out where AI shifts the math for your team and what a credible first step looks like."
        primaryLabel="Book a strategy call"
        secondaryLabel="See our services"
        secondaryHref="/solutions"
      />
    </PageShell>
  )
}
