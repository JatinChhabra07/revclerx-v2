import PageShell from '@/components/PageShell'
import Reveal from '@/components/Reveal'
import Link from 'next/link'
import type { Metadata } from 'next'
import { ArrowRight, ArrowUpRight, Banknote, HeartPulse, ShoppingBag, Factory, Truck, Radio } from 'lucide-react'
import { VerticalCutReveal } from '@/components/ui/vertical-cut-reveal'
import { FAQAccordion } from '@/components/ui/faq-accordion'
import { HeroVisual } from '@/components/ui/hero-visual'
import { MethodGrid } from '@/components/ui/method-grid'
import { SolutionCards } from '@/components/ui/solution-cards'
import { QuoteBlock } from '@/components/ui/quote-block'
import { TestimonialGrid } from '@/components/ui/testimonial-grid'
import { FeatureBento } from '@/components/ui/feature-bento'
import { CTABanner } from '@/components/ui/cta-banner'
import { SectionEyebrow } from '@/components/ui/section-eyebrow'
import { BackedByBadge } from '@/components/ui/yc-badge'
import { StatCounter } from '@/components/ui/stat-counter'
import { IndustryCard } from '@/components/ui/industry-card'
import { MagneticButton } from '@/components/ui/magnetic-button'

export const metadata: Metadata = {
  title: 'AI Transformation, From Strategy to Production',
  description:
    'RevClerx is the AI transformation partner for enterprises. AI consulting plus implementation. Board-ready strategy and engineers who ship.',
}

const FAQ = [
  {
    question: 'How is RevClerx different from a traditional consulting firm?',
    answer:
      'Most consulting firms hand you a deck and walk away. We own the work end to end, across strategy, build, deploy, and scale, with the same senior team across the entire arc. No handoff cliffs between PowerPoint and production.',
  },
  {
    question: 'We have stalled AI pilots. Can you actually move them?',
    answer:
      'Yes. This is the most common reason teams come to us. We start by auditing what is blocking the pilot (data, integration, governance, change management), then either productionize it or kill it cleanly so the team can re-deploy capacity to the work that scales.',
  },
  {
    question: 'How long does it take to see real value?',
    answer:
      'A first pilot lands in production inside 6 to 10 weeks. Strategy engagements deliver a defensible roadmap in 3 to 4 weeks. Full enterprise scale-out runs quarter by quarter, with measurable outcomes per quarter.',
  },
  {
    question: 'Do you work with our existing data and engineering teams?',
    answer:
      'Always with you, never around you. We embed alongside your teams, transfer ownership as we go, and leave your bench strictly more capable than we found it. The end state is your team running the systems we built together.',
  },
  {
    question: 'What kind of AI work do you actually do?',
    answer:
      'AI strategy and readiness, custom GenAI and agentic systems, RAG and search, model fine-tuning, data engineering and MLOps, AI-driven process automation, and managed AI operations. Stack-agnostic across AWS, Azure, GCP, open and closed models.',
  },
  {
    question: 'How do you handle data security and compliance?',
    answer:
      'Security is engineered in, not bolted on. NDAs and DPAs on day one. We ship into VPC, on-prem, and air-gapped environments, support SOC 2, GDPR, and HIPAA workloads, and ship with audit logging by default.',
  },
  {
    question: 'How much does an engagement cost?',
    answer:
      'Strategy work is fixed fee. Implementation is project plus retainer, scoped to your priorities. As a benchmark, we typically run 3 to 5x leaner than tier-one consulting on equivalent scope, because we run on senior teams without the layered bench.',
  },
]

const STATS = [
  { value: 4, suffix: '-6x', label: 'Average year-one ROI on production deployments', sub: 'Across 40+ engagements' },
  { value: 6, suffix: 'wk', label: 'From kickoff to first pilot in production', sub: 'On standard cloud stacks' },
  { value: 90, suffix: '%', label: 'Of pilots we own graduate to production', sub: 'Industry benchmark is ~13%' },
  { value: 12, suffix: '+', label: 'Industries served across BFSI, healthcare, retail', sub: 'Regulated and consumer' },
]

const INDUSTRIES = [
  { icon: Banknote, name: 'Banking & Financial Services', body: 'Fraud, claims, KYC, advisory copilots' },
  { icon: HeartPulse, name: 'Healthcare & Life Sciences', body: 'Clinical ops, prior-auth, R&D acceleration' },
  { icon: ShoppingBag, name: 'Retail & E-commerce', body: 'Personalization, demand, conversational commerce' },
  { icon: Factory, name: 'Manufacturing', body: 'Quality, predictive maintenance, supply intelligence' },
  { icon: Truck, name: 'Logistics & Supply Chain', body: 'Routing, ETA, document automation, warehousing' },
  { icon: Radio, name: 'Telecom, Media & Tech', body: 'Customer ops, content, network intelligence' },
]

export default function HomePage() {
  return (
    <PageShell>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div aria-hidden="true" className="bg-radial-soft" />
        <div aria-hidden="true" className="bg-grid-faint" />
        <div className="relative max-w-7xl mx-auto px-6 pt-20 pb-14 md:pt-28 md:pb-16">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* LEFT: copy */}
            <div className="lg:col-span-7">
              <BackedByBadge />
              <h1 className="mt-6 text-5xl md:text-7xl lg:text-[5.4rem] font-semibold tracking-tight text-ink-900 leading-[1.02] text-balance">
                <VerticalCutReveal>Stop stalling on AI. Start shipping it.</VerticalCutReveal>
              </h1>
              <Reveal delay={0.4}>
                <p className="mt-7 max-w-xl text-lg md:text-xl text-body leading-relaxed">
                  RevClerx is the AI transformation partner for enterprises. We pair board-ready strategy with engineers who put production AI on your stack, and stay through scale.
                </p>
              </Reveal>
              <Reveal delay={0.55}>
                <div className="mt-9 flex flex-wrap items-center gap-3">
                  <MagneticButton strength={0.3}>
                    <Link href="/contact" className="btn-accent">
                      Assess your AI readiness
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </MagneticButton>
                  <Link
                    href="/how-it-works"
                    className="btn-secondary transition-transform hover:-translate-y-0.5"
                  >
                    See how we work
                  </Link>
                </div>
              </Reveal>
              <Reveal delay={0.7}>
                <div className="mt-12 flex items-center gap-6 text-xs text-muted">
                  <div className="flex -space-x-2">
                    {[
                      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&q=80',
                      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=80',
                      'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=120&q=80',
                      'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=120&q=80',
                    ].map((src, i) => (
                      <span
                        key={i}
                        className="w-8 h-8 rounded-full ring-2 ring-cream bg-cover bg-center"
                        style={{ backgroundImage: `url(${src})` }}
                      />
                    ))}
                  </div>
                  <span>
                    Trusted by <span className="text-ink-900 font-semibold">CIOs and operators</span> across regulated enterprises
                  </span>
                </div>
              </Reveal>
            </div>

            {/* RIGHT: visual */}
            <div className="lg:col-span-5 relative">
              <HeroVisual />
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="relative py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
            <Reveal className="max-w-2xl">
              <SectionEyebrow>What we do</SectionEyebrow>
              <h2 className="mt-4 text-4xl md:text-6xl font-semibold tracking-tight text-ink-900 leading-[1.05] text-balance">
                AI consulting and implementation. <span className="text-muted">Under one roof.</span>
              </h2>
              <p className="mt-5 text-base md:text-lg text-body max-w-xl leading-relaxed">
                Strategy that names the right move, engineers who build it, and operators who keep it running. The same team across the whole arc.
              </p>
            </Reveal>
            <Reveal>
              <Link href="/solutions" className="link-grow">
                See all services <ArrowUpRight className="w-4 h-4 arrow-x" />
              </Link>
            </Reveal>
          </div>
          <SolutionCards />
        </div>
      </section>

      {/* METHOD */}
      <section className="relative py-24 md:py-32 bg-cream-50 border-y border-line">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal className="max-w-3xl">
            <SectionEyebrow>Our method</SectionEyebrow>
            <h2 className="mt-4 text-4xl md:text-6xl font-semibold tracking-tight text-ink-900 leading-[1.05] text-balance">
              A five-step path from idea to industrialization.
            </h2>
            <p className="mt-5 text-base md:text-lg text-body max-w-2xl leading-relaxed">
              Most AI work stalls between strategy and scale. Our method closes that gap with one team that owns assessment, build, and operations.
            </p>
          </Reveal>
          <div className="mt-16 md:mt-20">
            <MethodGrid />
          </div>
        </div>
      </section>

      {/* QUOTE */}
      <section className="relative bg-cream-200 py-24 md:py-36 border-y border-line overflow-hidden">
        <div aria-hidden="true" className="accent-glow -top-20 -left-20" />
        <div aria-hidden="true" className="accent-glow -bottom-20 -right-20" />
        <div className="relative max-w-7xl mx-auto px-6">
          <QuoteBlock
            quote="AI transformation is not a slide. It is a system running in production, owned by a team that knows why."
            author="The RevClerx Method"
            role="In one line"
          />
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="relative py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal className="max-w-3xl mb-14 md:mb-16">
            <SectionEyebrow>Industries</SectionEyebrow>
            <h2 className="mt-4 text-4xl md:text-6xl font-semibold tracking-tight text-ink-900 leading-[1.05] text-balance">
              Where we ship most.
            </h2>
            <p className="mt-5 text-base md:text-lg text-body max-w-2xl leading-relaxed">
              Deep delivery experience across regulated and consumer-facing industries. Patterns we have already shipped become accelerators on day one.
            </p>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {INDUSTRIES.map(({ icon: Icon, name, body }, i) => (
              <Reveal key={name} delay={i * 0.05} variant="slide-up">
                <IndustryCard
                  name={name}
                  body={body}
                  iconNode={<Icon className="w-5 h-5 text-accent" strokeWidth={1.7} />}
                />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="relative py-24 md:py-32 bg-cream-200 border-y border-line overflow-hidden">
        <div aria-hidden="true" className="absolute -top-40 -left-32 w-[420px] h-[420px] rounded-full bg-brand-blue/15 blur-[140px]" />
        <div aria-hidden="true" className="absolute -bottom-40 -right-32 w-[420px] h-[420px] rounded-full bg-brand-magenta/15 blur-[140px]" />
        <div className="relative max-w-7xl mx-auto px-6">
          <Reveal className="max-w-3xl">
            <p className="text-xs uppercase tracking-[0.28em] text-muted inline-flex items-center gap-2">
              <span className="w-1 h-1 rounded-full bg-brand-magenta" />
              Outcomes that show up on the P&amp;L
            </p>
            <h2 className="mt-4 text-4xl md:text-6xl font-semibold tracking-tight leading-[1.05] text-ink-900 text-balance">
              Real AI value, not stalled pilots.
            </h2>
          </Reveal>
          <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
            {STATS.map((s, i) => (
              <Reveal key={i} delay={i * 0.06}>
                <p className="text-5xl md:text-7xl font-semibold tracking-tighter grad-text-brand">
                  <StatCounter value={s.value} suffix={s.suffix} />
                </p>
                <p className="mt-3 text-sm md:text-base text-ink-900 leading-snug font-medium">
                  {s.label}
                </p>
                <p className="mt-1 text-xs text-muted">{s.sub}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* WHY US BENTO */}
      <section className="relative py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal className="max-w-3xl mb-14 md:mb-16">
            <SectionEyebrow>Why RevClerx</SectionEyebrow>
            <h2 className="mt-4 text-4xl md:text-6xl font-semibold tracking-tight text-ink-900 leading-[1.05] text-balance">
              Built for the part where transformation usually stalls.
            </h2>
          </Reveal>
          <FeatureBento />
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="relative py-24 md:py-32 bg-cream-200 border-y border-line">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal className="text-center max-w-3xl mx-auto mb-14">
            <SectionEyebrow className="justify-center">Voices from production</SectionEyebrow>
            <h2 className="mt-4 text-4xl md:text-6xl font-semibold tracking-tight text-ink-900 leading-[1.05] text-balance">
              What operators say once the work is live.
            </h2>
          </Reveal>
          <TestimonialGrid />
        </div>
      </section>

      {/* FAQ */}
      <section className="relative py-24 md:py-32">
        <div className="max-w-4xl mx-auto px-6">
          <Reveal className="text-center mb-14">
            <SectionEyebrow className="justify-center">Common questions</SectionEyebrow>
            <h2 className="mt-4 text-4xl md:text-6xl font-semibold tracking-tight text-ink-900 leading-[1.05] text-balance">
              Questions worth asking.
            </h2>
          </Reveal>
          <FAQAccordion items={FAQ} defaultOpen={0} />
        </div>
      </section>

      {/* CTA */}
      <CTABanner
        eyebrow="Start with a readiness call"
        title="Find out where AI moves your math."
        body="Thirty minutes with a senior partner. We will tell you where AI shifts the metric, and where it does not, before you spend a rupee or a dollar on it."
        primaryLabel="Assess your AI readiness"
        secondaryLabel="See how we work"
        secondaryHref="/how-it-works"
      />
    </PageShell>
  )
}
