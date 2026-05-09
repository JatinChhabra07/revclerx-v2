import PageShell from '@/components/PageShell'
import Reveal from '@/components/Reveal'
import Link from 'next/link'
import type { Metadata } from 'next'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { VerticalCutReveal } from '@/components/ui/vertical-cut-reveal'
import { FAQAccordion } from '@/components/ui/faq-accordion'
import { HeroVisual } from '@/components/ui/hero-visual'
import { LogoStrip } from '@/components/ui/logo-strip'
import { MethodGrid } from '@/components/ui/method-grid'
import { SolutionCards } from '@/components/ui/solution-cards'
import { QuoteBlock } from '@/components/ui/quote-block'
import { TestimonialGrid } from '@/components/ui/testimonial-grid'
import { FeatureBento } from '@/components/ui/feature-bento'
import { CTABanner } from '@/components/ui/cta-banner'
import { SectionEyebrow } from '@/components/ui/section-eyebrow'
import { BackedByBadge } from '@/components/ui/yc-badge'
import { StatCounter } from '@/components/ui/stat-counter'

export const metadata: Metadata = {
  title: 'Your AI Transformation Partner',
  description:
    'RevClerx maps how your company really works, identifies where AI should change it, and helps you make it happen.',
}

const FAQ = [
  {
    question: 'How is this different from hiring a consulting firm?',
    answer:
      "Consultants interview a handful of leaders and give you a deck. We interview your entire organization through AI, map how things actually work, and stay with you to make sure the transformation happens. It's faster, deeper, and built for real change.",
  },
  {
    question: 'What do the AI interviews look like for my teams?',
    answer:
      "Each employee has a private 30-minute conversation with an AI agent about their daily work, tools, bottlenecks, and ideas. No prep needed on their side. It's simple, confidential, and people are often more open than they'd be with a human consultant.",
  },
  {
    question: 'How fast can we expect results?',
    answer:
      'The first Assessment takes about 10 days. We run all interviews in parallel, then deliver a full operational map and a prioritized transformation roadmap, validated by a dedicated human expert. You get clarity fast.',
  },
  {
    question: 'How do you upskill our employees on AI?',
    answer:
      "Every week, each employee receives a personalized briefing: relevant AI tips, industry news, and a short presentation tailored to their exact role and daily tasks. Because we know what each person actually does, the content is immediately actionable. That's how you make transformation stick.",
  },
  {
    question: 'Is this adapted to our company size?',
    answer:
      'Yes. We work with companies from 50 employees to large enterprises. The scope, format, and pricing are adapted to your reality. Every organization faces different challenges, and the engagement reflects that.',
  },
  {
    question: 'What about data security?',
    answer:
      'We sign NDAs and DPAs before any engagement. All data is encrypted, access is strictly controlled, and nothing is shared externally. Interview responses are anonymized in deliverables unless explicitly agreed otherwise.',
  },
  {
    question: 'How much does it cost?',
    answer:
      'Pricing depends on the plan you choose and the size of your organization. As a benchmark, RevClerx is typically 3 to 5x less expensive than traditional consulting — with broader coverage and faster delivery.',
  },
]

const STATS = [
  { value: 50, suffix: '+', label: 'Org-wide AI interviews per engagement', sub: 'Median per first assessment' },
  { value: 10, suffix: '', label: 'Days to a full operational map', sub: 'Parallel AI delivery' },
  { value: 3, suffix: '–5x', label: 'Less expensive than traditional consulting', sub: 'Broader coverage, faster' },
  { value: 92, suffix: '%', label: 'Of priorities make it to production', sub: 'Tracked across the first 12 months' },
]

export default function HomePage() {
  return (
    <PageShell>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div aria-hidden="true" className="bg-radial-soft" />
        <div aria-hidden="true" className="bg-grid-faint" />
        <div className="relative max-w-7xl mx-auto px-6 pt-20 pb-20 md:pt-28 md:pb-28">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* LEFT - copy */}
            <div className="lg:col-span-7">
              <BackedByBadge />
              <h1 className="mt-6 text-5xl md:text-7xl lg:text-[5.4rem] font-semibold tracking-tight text-ink-900 leading-[1.02] text-balance">
                <VerticalCutReveal>Your AI Transformation Partner.</VerticalCutReveal>
              </h1>
              <Reveal delay={0.4}>
                <p className="mt-7 max-w-xl text-lg md:text-xl text-body leading-relaxed">
                  RevClerx maps how your company really works, identifies where AI should change it, and helps you make it happen.
                </p>
              </Reveal>
              <Reveal delay={0.55}>
                <div className="mt-9 flex flex-wrap items-center gap-3">
                  <Link href="/contact" className="btn-accent">
                    Book a demo
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                  <Link href="/how-it-works" className="btn-secondary">
                    Explore our approach
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
                    Trusted by leadership at <span className="text-ink-900 font-semibold">enterprise teams</span> across regulated industries
                  </span>
                </div>
              </Reveal>
            </div>

            {/* RIGHT - visual */}
            <div className="lg:col-span-5 relative">
              <HeroVisual />
            </div>
          </div>
        </div>
      </section>

      {/* TRUST STRIP - LOGOS */}
      <section className="py-14 md:py-20 border-y border-line bg-cream-50">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal>
            <p className="text-center text-xs uppercase tracking-[0.3em] text-muted mb-10">
              Trusted alongside the platforms enterprises already run on
            </p>
          </Reveal>
          <LogoStrip />
        </div>
      </section>

      {/* METHOD */}
      <section className="relative py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal className="max-w-3xl">
            <SectionEyebrow>Our method</SectionEyebrow>
            <h2 className="mt-4 text-4xl md:text-6xl font-semibold tracking-tight text-ink-900 leading-[1.05] text-balance">
              AI agents for scale and depth.
              <br />
              <span className="text-muted">Human experts for judgment and implementation.</span>
            </h2>
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
            quote="AI transformation starts when the company can finally see itself."
            author="The RevClerx Method"
            role="In four words"
          />
        </div>
      </section>

      {/* SOLUTIONS */}
      <section className="relative py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
            <Reveal className="max-w-2xl">
              <SectionEyebrow>Solutions</SectionEyebrow>
              <h2 className="mt-4 text-4xl md:text-6xl font-semibold tracking-tight text-ink-900 leading-[1.05] text-balance">
                Three ways to engage.
              </h2>
              <p className="mt-5 text-base md:text-lg text-body max-w-xl leading-relaxed">
                The same senior bench works across all three. The shape of the engagement is the only thing that changes.
              </p>
            </Reveal>
            <Reveal>
              <Link href="/solutions" className="link-grow">
                See all engagements <ArrowUpRight className="w-4 h-4 arrow-x" />
              </Link>
            </Reveal>
          </div>
          <SolutionCards />
        </div>
      </section>

      {/* STATS */}
      <section className="relative py-24 md:py-32 bg-ink-950 text-cream overflow-hidden">
        <div aria-hidden="true" className="absolute -top-40 -left-32 w-[420px] h-[420px] rounded-full bg-accent/30 blur-[140px]" />
        <div aria-hidden="true" className="absolute -bottom-40 -right-32 w-[420px] h-[420px] rounded-full bg-amber-500/15 blur-[140px]" />
        <div className="relative max-w-7xl mx-auto px-6">
          <Reveal className="max-w-3xl">
            <p className="text-xs uppercase tracking-[0.28em] text-cream/55 inline-flex items-center gap-2">
              <span className="w-1 h-1 rounded-full bg-accent" />
              Outcomes we deliver
            </p>
            <h2 className="mt-4 text-4xl md:text-6xl font-semibold tracking-tight leading-[1.05] text-cream text-balance">
              Numbers that show up on the board deck.
            </h2>
          </Reveal>
          <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
            {STATS.map((s, i) => (
              <Reveal key={i} delay={i * 0.06}>
                <p className="text-5xl md:text-7xl font-semibold tracking-tighter text-cream">
                  <StatCounter value={s.value} suffix={s.suffix} />
                </p>
                <p className="mt-3 text-sm md:text-base text-cream/85 leading-snug font-medium">
                  {s.label}
                </p>
                <p className="mt-1 text-xs text-cream/45">{s.sub}</p>
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
            <SectionEyebrow className="justify-center">Voices from the work</SectionEyebrow>
            <h2 className="mt-4 text-4xl md:text-6xl font-semibold tracking-tight text-ink-900 leading-[1.05] text-balance">
              What operators say after the first quarter.
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
        eyebrow="Begin your AI transformation"
        title="Let's map your company's next move."
        body="Book a call with our team. Thirty minutes is enough to know whether RevClerx is the right partner for your moment."
        primaryLabel="Book a strategy call"
        secondaryLabel="See how we work"
        secondaryHref="/how-it-works"
      />
    </PageShell>
  )
}
