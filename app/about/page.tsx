import PageShell from '@/components/PageShell'
import Reveal from '@/components/Reveal'
import Link from 'next/link'
import Image from 'next/image'
import type { Metadata } from 'next'
import { ArrowRight, Linkedin, Target, Shield, GitMerge, Compass } from 'lucide-react'
import { VerticalCutReveal } from '@/components/ui/vertical-cut-reveal'
import { CTABanner } from '@/components/ui/cta-banner'
import { SectionEyebrow } from '@/components/ui/section-eyebrow'
import { BackedByBadge } from '@/components/ui/yc-badge'

export const metadata: Metadata = {
  title: 'About | RevClerx',
  description:
    'A senior team of AI engineers, data scientists, and former enterprise CIOs. Built to close the gap between AI strategy and production reality.',
}

const PRINCIPLES = [
  {
    icon: Target,
    n: '01',
    title: 'Outcomes over output.',
    body: 'A model in a notebook is not an outcome. We define the metric on day one and own it through to deployment.',
  },
  {
    icon: Shield,
    n: '02',
    title: 'Security as default.',
    body: 'Every architecture decision starts with your data residency and compliance posture. Not the model, not the demo.',
  },
  {
    icon: GitMerge,
    n: '03',
    title: 'Integration is the product.',
    body: 'If it does not slot into your ERP, your CRM, or your data lake, it does not ship. Connectors are first-class work.',
  },
  {
    icon: Compass,
    n: '04',
    title: 'Honest about limits.',
    body: 'If AI is not the right answer, we will say so on day one. We have walked away from work that was not ready.',
  },
]

const FOUNDERS = [
  {
    name: 'Alex Carter',
    role: 'Co-founder & Partner',
    bio: 'Former CIO of a Fortune 500 supply chain. Twenty years of enterprise delivery in regulated industries.',
    image:
      'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=600&q=80',
    linkedin: '#',
  },
  {
    name: 'Maya Lindberg',
    role: 'Co-founder & Partner',
    bio: 'Built ML platforms at two unicorns and ran AI strategy for a global bank. Passionate about adoption.',
    image:
      'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=600&q=80',
    linkedin: '#',
  },
]

export default function AboutPage() {
  return (
    <PageShell>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div aria-hidden="true" className="bg-radial-soft" />
        <div className="relative max-w-7xl mx-auto px-6 pt-20 pb-16 md:pt-28 md:pb-20">
          <Reveal>
            <BackedByBadge />
          </Reveal>
          <h1 className="mt-7 text-5xl md:text-7xl font-semibold tracking-tight text-ink-900 text-balance leading-[1.04] max-w-5xl">
            <VerticalCutReveal>We built RevClerx to make AI transformation work.</VerticalCutReveal>
          </h1>
          <Reveal delay={0.45}>
            <div className="mt-9 grid lg:grid-cols-12 gap-10">
              <p className="lg:col-span-7 text-lg md:text-xl text-body leading-relaxed">
                Most organizations lack a clear picture of how they actually operate. From years inside enterprise teams, we watched scattered pilots, tools adopted without context, and transformation plans that never connected to the reality of day-to-day work.
              </p>
              <p className="lg:col-span-5 text-base md:text-lg text-muted leading-relaxed">
                We use AI to map the operational reality, providing the clarity needed to deploy technology where it actually moves the business.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* MISSION QUOTE */}
      <section className="bg-cream-200 border-y border-line py-24 md:py-32">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <Reveal>
            <SectionEyebrow className="justify-center">Mission</SectionEyebrow>
            <p className="mt-7 text-3xl md:text-5xl font-semibold text-ink-900 leading-[1.15] text-balance tracking-tight">
              Make enterprise AI a P&amp;L line item, not a slide.
            </p>
            <p className="mt-7 max-w-2xl mx-auto text-base md:text-lg text-body leading-relaxed">
              Most AI programs do not fail because of the model. They fail on integration, governance, change management, and the absence of a roadmap that ties to revenue. We exist to fix all of that, in production, on your stack.
            </p>
          </Reveal>
        </div>
      </section>

      {/* FOUNDERS */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal className="max-w-3xl mb-14 md:mb-20">
            <SectionEyebrow>The team</SectionEyebrow>
            <h2 className="mt-4 text-4xl md:text-6xl font-semibold tracking-tight text-ink-900 leading-[1.05] text-balance">
              Senior team. Direct accountability.
            </h2>
            <p className="mt-6 text-base md:text-lg text-body max-w-2xl leading-relaxed">
              Every engagement is led by a partner with at least a decade of enterprise delivery, paired with engineers who have shipped AI in regulated environments. No layered handoffs, no junior bench, no surprises. You work with the people doing the work.
            </p>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {FOUNDERS.map((f, i) => (
              <Reveal key={f.name} delay={i * 0.1}>
                <div className="group relative overflow-hidden rounded-3xl bg-cream-200 border border-line">
                  <div className="relative aspect-[4/5] overflow-hidden bg-cream-300">
                    <Image
                      src={f.image}
                      alt={f.name}
                      fill
                      sizes="(min-width: 768px) 50vw, 100vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink-950/85 via-ink-950/30 to-transparent" />
                    <div className="absolute inset-0 p-7 md:p-9 flex flex-col justify-end">
                      <p className="text-xs uppercase tracking-[0.25em] text-cream/65">{f.role}</p>
                      <h3 className="mt-2 text-3xl md:text-4xl font-semibold text-cream tracking-tight">
                        {f.name}
                      </h3>
                      <p className="mt-3 text-sm md:text-base text-cream/85 max-w-md leading-relaxed">
                        {f.bio}
                      </p>
                      <a
                        href={f.linkedin}
                        aria-label={`${f.name} on LinkedIn`}
                        className="mt-5 inline-flex w-10 h-10 items-center justify-center rounded-full bg-cream/10 backdrop-blur border border-cream/20 text-cream hover:bg-cream hover:text-ink-900 transition-all"
                      >
                        <Linkedin className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PRINCIPLES */}
      <section className="bg-cream-200 border-y border-line py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal className="max-w-3xl">
            <SectionEyebrow>Principles</SectionEyebrow>
            <h2 className="mt-4 text-4xl md:text-6xl font-semibold tracking-tight text-ink-900 leading-[1.05] text-balance">
              Four things we will not compromise on.
            </h2>
          </Reveal>
          <div className="mt-14 grid md:grid-cols-2 gap-6">
            {PRINCIPLES.map((p, i) => {
              const Icon = p.icon
              return (
                <Reveal key={p.n} delay={i * 0.08}>
                  <div className="bg-white rounded-3xl border border-line p-8 md:p-10 card-hover h-full">
                    <div className="flex items-center gap-4 mb-6">
                      <span className="inline-flex w-12 h-12 rounded-2xl bg-accent-soft border border-accent/20 items-center justify-center">
                        <Icon className="w-5 h-5 text-accent" strokeWidth={1.7} />
                      </span>
                      <span className="font-mono text-xs text-accent font-semibold">{p.n}</span>
                    </div>
                    <h3 className="text-2xl font-semibold text-ink-900 tracking-tight leading-tight">
                      {p.title}
                    </h3>
                    <p className="mt-3 text-base text-body leading-relaxed">{p.body}</p>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* OFFICE / CULTURE STRIP */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal className="max-w-3xl mb-14">
            <SectionEyebrow>Inside the work</SectionEyebrow>
            <h2 className="mt-4 text-4xl md:text-5xl font-semibold tracking-tight text-ink-900 leading-[1.05] text-balance">
              How we actually spend our days.
            </h2>
          </Reveal>
          <div className="grid grid-cols-12 gap-4 md:gap-6">
            <div className="col-span-12 md:col-span-8 relative aspect-[16/10] rounded-3xl overflow-hidden img-frame">
              <Image
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1400&q=80"
                alt="Inside RevClerx — strategy in working session"
                fill
                sizes="(min-width: 768px) 66vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="col-span-6 md:col-span-4 relative aspect-square rounded-3xl overflow-hidden img-frame">
              <Image
                src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=900&q=80"
                alt="Workshop with a client team"
                fill
                sizes="(min-width: 768px) 33vw, 50vw"
                className="object-cover"
              />
            </div>
            <div className="col-span-6 md:col-span-4 relative aspect-[4/5] rounded-3xl overflow-hidden img-frame">
              <Image
                src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=900&q=80"
                alt="Code review and engineering session"
                fill
                sizes="(min-width: 768px) 33vw, 50vw"
                className="object-cover"
              />
            </div>
            <div className="col-span-12 md:col-span-8 relative aspect-[16/9] rounded-3xl overflow-hidden img-frame">
              <Image
                src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1400&q=80"
                alt="Off-site planning with leadership"
                fill
                sizes="(min-width: 768px) 66vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTABanner
        title="Want to see how we work?"
        body="Book a 30-minute call. We will walk you through a recent deployment in your industry and outline what your first weeks with RevClerx would look like."
        primaryLabel="Book a strategy call"
        secondaryLabel="Read the method"
        secondaryHref="/how-it-works"
      />
    </PageShell>
  )
}
