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
  title: 'Services | AI consulting and implementation',
  description:
    'RevClerx services span AI strategy, data foundations, custom GenAI and agentic builds, AI-driven automation, and managed AI operations. End to end.',
}

const FAQ = [
  {
    question: 'Which service should we start with?',
    answer:
      'Almost every engagement begins with an AI readiness assessment, even teams who think they know what they want often re-sequence after the audit. If you already have a defensible roadmap, we will go straight to implementation.',
  },
  {
    question: 'Can we engage just one service, or do we have to take the whole arc?',
    answer:
      'Any service can stand alone. Strategy without implementation is fine. Implementation without prior strategy work is fine if you already have one. The advantage of taking more than one is continuity: the same team owns the work, so nothing falls between disciplines.',
  },
  {
    question: 'Do you build with open-source or proprietary models?',
    answer:
      'Stack-agnostic. We have shipped on GPT-4 class APIs, on Anthropic Claude, on Llama and Mistral fine-tunes, and on internal proprietary models for clients who need air-gapped deployments. The model choice falls out of the use case, not the other way around.',
  },
  {
    question: 'How is pricing structured?',
    answer:
      'Strategy and assessment work runs on fixed fees. Implementation is project-based with optional retainer for managed operations afterward. Every proposal has an explicit definition of done and milestone-based billing.',
  },
]

type Service = {
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

const SERVICES: Service[] = [
  {
    id: 'consulting',
    step: '01',
    badge: 'Advisory · 3 to 4 weeks',
    title: 'AI Strategy & Consulting',
    tagline: 'Where AI moves the math. Where it does not.',
    description:
      'A focused engagement for leadership teams that need a defensible point of view on AI. We audit readiness across data, talent, governance, and tooling, then deliver a prioritized roadmap that ties each initiative to a measurable business outcome.',
    bullets: [
      'AI readiness assessment across data, talent, process, and risk posture',
      'Use-case discovery and prioritization with feasibility and ROI scoring',
      'Twelve-month transformation roadmap with milestones and owners',
      'GenAI and agentic AI advisory grounded in your industry context',
      'Executive readout your CFO and board can sign off on',
    ],
    ctaLabel: 'Book a readiness call',
    image:
      'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'AI strategy workshop with leadership team',
    surface: 'white',
  },
  {
    id: 'data',
    step: '02',
    badge: 'Foundation · 6 to 12 weeks',
    title: 'Data Engineering & AI Foundations',
    tagline: 'AI is only as smart as the data you feed it.',
    description:
      'Modernize the data layer so AI work has something to build on. We design and ship data platforms, ingestion pipelines, vector stores, and governance the rest of the AI program depends on. Cloud-native, audit-friendly, and tuned for AI workloads.',
    bullets: [
      'Data lakehouse and warehouse architecture on Databricks, Snowflake, or BigQuery',
      'Streaming and batch pipelines with quality gates and observability',
      'Vector databases and retrieval indexes for RAG-grade GenAI',
      'Metadata, lineage, and governance aligned with SOC 2 and GDPR',
      'MLOps platform setup so models ship through a real pipeline',
    ],
    ctaLabel: 'Scope a foundation build',
    image:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Data platform architecture on a screen',
    surface: 'cream',
    reverse: true,
  },
  {
    id: 'implementation',
    step: '03',
    badge: 'Build · 8 to 16 weeks',
    title: 'AI & GenAI Implementation',
    tagline: 'Custom AI. Production-grade. On your stack.',
    description:
      'Forward-deployed engineers build the systems your roadmap depends on: custom AI agents, RAG pipelines, fine-tuned models, and ML services that integrate where your operators actually work. Engineered to ship, not to demo.',
    bullets: [
      'Custom agentic AI for back-office, customer ops, and knowledge work',
      'RAG and enterprise search across your documents, contracts, and tickets',
      'LLM fine-tuning on your data with eval and guardrails',
      'Classical ML for forecasting, classification, fraud, and recommendations',
      'Deep integration with your ERP, CRM, ticketing, and data lake',
    ],
    ctaLabel: 'Scope a build',
    image:
      'https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Engineers shipping a production AI system',
    surface: 'white',
  },
  {
    id: 'automation',
    step: '04',
    badge: 'Automate · 6 to 12 weeks',
    title: 'AI Process Automation',
    tagline: 'Where AI replaces a workflow, not just a button.',
    description:
      'End-to-end AI-driven automation across the workflows that eat your operators alive. Document intelligence, agentic process flows, copilots inside the tools your team already uses, and back-office automations that move volume off humans cleanly.',
    bullets: [
      'Intelligent document processing for claims, KYC, invoices, and contracts',
      'Agentic workflows that orchestrate across systems with human-in-the-loop',
      'In-app copilots embedded into Salesforce, ServiceNow, SAP, and custom apps',
      'Conversational AI for support, sales, and internal knowledge',
      'Process intelligence to find the next workflow worth automating',
    ],
    ctaLabel: 'Find your highest-leverage workflow',
    image:
      'https://images.unsplash.com/photo-1543286386-713bdd548da4?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Operator running an automated AI workflow',
    surface: 'cream',
    reverse: true,
  },
  {
    id: 'scale',
    step: '05',
    badge: 'Operate · monthly',
    title: 'Managed AI Operations & Scale',
    tagline: 'From pilot to platform. From one use case to the enterprise.',
    description:
      'Production AI is not done at go-live. It is done when it keeps performing, governing, and improving without your team having to babysit it. We run the MLOps, monitoring, governance, and continuous improvement so the value compounds.',
    bullets: [
      'MLOps and LLMOps with CI/CD, eval suites, and drift monitoring',
      'Model performance, cost, and safety monitoring with alerting',
      'Continuous fine-tuning, prompt iteration, and retrieval optimization',
      'Responsible AI controls, audit logs, and compliance reporting',
      'Scale-out playbooks that take one win to the rest of the business',
    ],
    ctaLabel: 'Run your AI in production',
    image:
      'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'AI operations dashboard tracking models in production',
    surface: 'white',
  },
]

function ServiceBlock({ s }: { s: Service }) {
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
          <Reveal className="lg:col-span-6" delay={0.15} variant="slide-up">
            <div className="group relative">
              <div className="img-frame aspect-[4/3] relative overflow-hidden">
                <Image
                  src={s.image}
                  alt={s.imageAlt}
                  fill
                  sizes="(min-width: 1024px) 600px, 100vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                {/* gradient wash on hover */}
                <div
                  aria-hidden="true"
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background:
                      'linear-gradient(135deg, rgba(51,64,212,0.16), rgba(233,30,131,0.16))',
                  }}
                />
              </div>
              <div className="absolute -bottom-5 -right-3 md:-right-6 bg-white border border-line rounded-2xl shadow-[0_18px_40px_-18px_rgba(10,10,10,0.22)] p-4 max-w-[230px] transition-transform duration-500 group-hover:-translate-y-1 group-hover:rotate-[-1deg]">
                <p className="text-[11px] uppercase tracking-widest text-muted">Service {s.step}</p>
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

export default function ServicesPage() {
  return (
    <PageShell>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div aria-hidden="true" className="bg-radial-soft" />
        <div className="relative max-w-7xl mx-auto px-6 pt-20 pb-16 md:pt-28 md:pb-20">
          <Reveal>
            <div className="badge-glass">
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              Five services. One team.
            </div>
          </Reveal>
          <h1 className="mt-7 text-5xl md:text-7xl font-semibold tracking-tight text-ink-900 text-balance leading-[1.04] max-w-4xl">
            <VerticalCutReveal>AI services that span strategy through scale.</VerticalCutReveal>
          </h1>
          <Reveal delay={0.4}>
            <p className="mt-7 max-w-2xl text-lg md:text-xl text-body leading-relaxed">
              Most providers do part of the arc. We do all of it, and the same team carries the work from readiness audit to industrialized production. No lost context, no fresh kickoff for each leg.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link href="#consulting" className="btn-accent">
                Start with consulting
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
              {SERVICES.map((s) => (
                <Link
                  key={s.id}
                  href={`#${s.id}`}
                  className="inline-flex items-center gap-2 rounded-full border border-line bg-white hover:border-accent hover:bg-accent-soft px-4 py-2 text-xs font-semibold text-ink-900 transition-all"
                >
                  <span className="font-mono text-accent group-hover:text-cream">{s.step}</span>
                  {s.title}
                </Link>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* SERVICE BLOCKS */}
      {SERVICES.map((s) => (
        <ServiceBlock key={s.id} s={s} />
      ))}

      {/* COMPARISON STRIP: engagement shapes */}
      <section className="bg-cream-200 border-y border-line py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal className="max-w-3xl">
            <SectionEyebrow>How we engage</SectionEyebrow>
            <h2 className="mt-4 text-4xl md:text-5xl font-semibold tracking-tight text-ink-900 leading-[1.05]">
              Three shapes that combine across the five services.
            </h2>
            <p className="mt-5 text-base md:text-lg text-body max-w-2xl leading-relaxed">
              The work is the same. The commercial shape adapts to where you are and how fast you need to move.
            </p>
          </Reveal>

          <div className="mt-12 overflow-hidden rounded-3xl border border-line bg-white">
            <div className="grid grid-cols-4 text-sm">
              <div className="p-5 border-b border-line bg-cream font-semibold text-ink-900">Dimension</div>
              <div className="p-5 border-b border-line bg-cream font-semibold text-ink-900">Diagnostic</div>
              <div className="p-5 border-b border-line bg-cream font-semibold text-ink-900">Project</div>
              <div className="p-5 border-b border-line bg-cream font-semibold text-ink-900">Managed</div>

              {[
                ['Timeline', '3 to 4 weeks', '8 to 16 weeks per system', 'Monthly, ongoing'],
                ['Output', 'Roadmap + ROI model', 'Production AI on your stack', 'Operated AI portfolio'],
                ['Best for', 'Leadership clarity', 'Building specific systems', 'Sustained scale and ops'],
                ['Pricing', 'Fixed fee', 'Project + milestones', 'Monthly retainer'],
                ['Ownership', 'Your strategy team', 'Joint through handover', 'Shared with our ops bench'],
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
              Choosing the right service to start with.
            </h2>
            <p className="mt-6 text-lg text-body leading-relaxed max-w-2xl">
              A short read for leaders trying to figure out which service fits where they are right now.
            </p>
          </Reveal>
          <Reveal className="mt-12">
            <FAQAccordion items={FAQ} defaultOpen={0} />
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <CTABanner
        eyebrow="Not sure which service fits"
        title="Talk it through with a partner."
        body="Thirty minutes is usually enough to decide where to start. No deck, no pitch. A working conversation about your priorities and constraints."
        primaryLabel="Book a strategy call"
        secondaryLabel="See how we work"
        secondaryHref="/how-it-works"
      />
    </PageShell>
  )
}
