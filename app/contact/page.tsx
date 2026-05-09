'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import PageShell from '@/components/PageShell'
import Reveal from '@/components/Reveal'
import { ArrowRight, Mail, MapPin, Phone, ShieldCheck, CheckCircle2, Sparkles } from 'lucide-react'
import { VerticalCutReveal } from '@/components/ui/vertical-cut-reveal'
import { FAQAccordion } from '@/components/ui/faq-accordion'
import { SectionEyebrow } from '@/components/ui/section-eyebrow'

const FAQ = [
  {
    question: 'How long does a typical engagement take?',
    answer:
      'Most engagements run between 4 and 16 weeks end to end. A focused proof of concept lands in 4 weeks, a full production deployment in 10 to 12, and an ongoing managed program runs quarter by quarter after that.',
  },
  {
    question: 'Do you work with our existing data team or replace it?',
    answer:
      'We work with you, never around you. Our model is to embed alongside your existing data, ML, and engineering teams, transfer knowledge throughout the engagement, and leave your team strictly more capable than we found them.',
  },
  {
    question: 'What does the AI Readiness Sprint cover?',
    answer:
      'The two-week sprint maps your data landscape, prioritizes use cases against expected ROI, evaluates risk and compliance posture, and outputs a 90-day execution plan with budget and staffing.',
  },
  {
    question: 'Can you deploy on premise or air gapped?',
    answer:
      'Yes. We have shipped into VPC, on premise, and fully air gapped environments. We support open-weight model deployment, private inference endpoints, and a model-agnostic architecture.',
  },
  {
    question: 'How do you handle data security and compliance?',
    answer:
      'Security is treated as a first-class engineering deliverable, not an afterthought. We follow SOC 2 Type II controls, support GDPR and HIPAA workloads, and ship with audit logging by default.',
  },
]

const TRUST = ['SOC 2 ready', 'GDPR aligned', 'HIPAA experienced', 'ISO 27001 in process']

const EXPECT = [
  { title: 'Discovery call', body: 'A 30-minute conversation to understand your goal, your stack, and your constraints.' },
  { title: 'Scoping workshop', body: 'A working session with your team to align on outcomes, success metrics, and risks.' },
  { title: 'Written proposal', body: 'Plan, milestones, team, fixed-fee budget, and an explicit definition of done.' },
  { title: 'Kickoff', body: 'Within one week of signoff, we are in your sprint board and shipping.' },
]

const inputClasses =
  'bg-white border border-line text-ink-900 placeholder-muted focus:border-accent focus:ring-2 focus:ring-accent/20 focus:outline-none rounded-xl px-4 py-3 w-full text-sm transition'

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmitted(true)
    e.currentTarget.reset()
  }

  return (
    <PageShell>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div aria-hidden="true" className="bg-radial-soft" />
        <div className="relative max-w-7xl mx-auto px-6 pt-20 pb-12 md:pt-28 md:pb-16">
          <Reveal>
            <span className="badge-glass">
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              Book a call
            </span>
          </Reveal>
          <h1 className="mt-7 text-5xl md:text-7xl font-semibold tracking-tight text-ink-900 text-balance leading-[1.04] max-w-4xl">
            <VerticalCutReveal>Begin your AI transformation.</VerticalCutReveal>
          </h1>
          <Reveal delay={0.4}>
            <p className="mt-7 max-w-2xl text-lg md:text-xl text-body leading-relaxed">
              Whether you are scoping your first deployment or reworking a stalled program, we will help you find the highest-leverage move and chart a credible path to production.
            </p>
          </Reveal>
        </div>
      </section>

      {/* FORM + INFO */}
      <section className="pb-20 md:pb-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-10">
            {/* LEFT — FORM */}
            <Reveal className="lg:col-span-7">
              <div className="relative bg-white border border-line rounded-3xl p-7 md:p-10 shadow-[0_30px_80px_-30px_rgba(10,10,10,0.18)]">
                <div className="flex items-start justify-between gap-4 mb-7">
                  <div>
                    <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-ink-900">
                      Tell us what you are exploring.
                    </h2>
                    <p className="mt-2 text-sm text-body">
                      A few quick fields and we will route you to the right specialist.
                    </p>
                  </div>
                  <span className="hidden sm:inline-flex items-center justify-center w-10 h-10 rounded-2xl bg-accent-soft border border-accent/20 flex-none">
                    <Sparkles className="w-4 h-4 text-accent" />
                  </span>
                </div>

                <form onSubmit={onSubmit} className="space-y-5" noValidate>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="firstName" className="block text-xs font-semibold text-ink-900 mb-2">
                        First name <span className="text-accent">*</span>
                      </label>
                      <input id="firstName" name="firstName" type="text" required placeholder="Jane" className={inputClasses} />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-xs font-semibold text-ink-900 mb-2">
                        Last name <span className="text-accent">*</span>
                      </label>
                      <input id="lastName" name="lastName" type="text" required placeholder="Doe" className={inputClasses} />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-xs font-semibold text-ink-900 mb-2">
                      Work email <span className="text-accent">*</span>
                    </label>
                    <input id="email" name="email" type="email" required placeholder="jane@company.com" className={inputClasses} />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="company" className="block text-xs font-semibold text-ink-900 mb-2">
                        Company name <span className="text-accent">*</span>
                      </label>
                      <input id="company" name="company" type="text" required placeholder="Acme Corp" className={inputClasses} />
                    </div>
                    <div>
                      <label htmlFor="size" className="block text-xs font-semibold text-ink-900 mb-2">
                        Company size
                      </label>
                      <select id="size" name="size" className={inputClasses}>
                        <option value="">Select size</option>
                        <option value="50-250">50 to 250</option>
                        <option value="251-1000">251 to 1,000</option>
                        <option value="1001-5000">1,001 to 5,000</option>
                        <option value="5000+">5,000+</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="role" className="block text-xs font-semibold text-ink-900 mb-2">
                      Your role
                    </label>
                    <select id="role" name="role" className={inputClasses}>
                      <option value="">Select your role</option>
                      <option value="CEO">CEO</option>
                      <option value="CTO">CTO</option>
                      <option value="CIO">CIO</option>
                      <option value="VP Engineering">VP Engineering</option>
                      <option value="Head of Data">Head of Data</option>
                      <option value="Head of Operations">Head of Operations</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs font-semibold text-ink-900 mb-2">
                      What are you exploring?
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      placeholder="Tell us about the workflow, metric, or problem you are looking to move."
                      className={inputClasses}
                    />
                  </div>

                  <div className="pt-2">
                    <button type="submit" className="btn-accent w-full sm:w-auto justify-center">
                      Schedule strategy call
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  <p className="text-xs text-muted leading-relaxed flex items-start gap-2">
                    <ShieldCheck className="w-3.5 h-3.5 text-accent mt-0.5 flex-none" />
                    We respond within 1 business day. All conversations are NDA-ready on request.
                  </p>

                  {submitted && (
                    <div
                      role="status"
                      aria-live="polite"
                      className="rounded-2xl border border-accent/30 bg-accent-soft px-5 py-4 text-sm text-accent flex items-start gap-3"
                    >
                      <CheckCircle2 className="w-5 h-5 flex-none mt-0.5" />
                      <div>
                        <p className="font-semibold">You&apos;re on the list.</p>
                        <p className="mt-0.5 text-accent/85">A senior consultant will reach out within one business day.</p>
                      </div>
                    </div>
                  )}
                </form>
              </div>
            </Reveal>

            {/* RIGHT — INFO PANEL */}
            <Reveal className="lg:col-span-5" delay={0.15}>
              <div className="space-y-8">
                {/* Visual */}
                <div className="relative aspect-[4/3] rounded-3xl overflow-hidden img-frame">
                  <Image
                    src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1200&q=80"
                    alt="Strategy session in progress"
                    fill
                    sizes="(min-width: 1024px) 480px, 100vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-950/80 via-ink-950/30 to-transparent" />
                  <div className="absolute inset-0 p-6 flex flex-col justify-end">
                    <p className="text-cream text-lg font-semibold leading-tight max-w-xs">
                      &ldquo;Thirty minutes to know if RevClerx is the right partner for your moment.&rdquo;
                    </p>
                  </div>
                </div>

                {/* Get in touch */}
                <div className="bg-white border border-line rounded-3xl p-7">
                  <h3 className="text-xs uppercase tracking-[0.25em] text-muted">Get in touch</h3>
                  <ul className="mt-5 space-y-4">
                    <li className="flex items-start gap-3">
                      <span className="inline-flex w-9 h-9 rounded-xl bg-accent-soft border border-accent/20 items-center justify-center flex-none">
                        <Mail className="w-4 h-4 text-accent" />
                      </span>
                      <div>
                        <p className="text-xs uppercase tracking-widest text-muted">Email</p>
                        <a href="mailto:hello@revclerx.ai" className="text-sm font-semibold text-ink-900 hover:text-accent transition">
                          hello@revclerx.ai
                        </a>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="inline-flex w-9 h-9 rounded-xl bg-accent-soft border border-accent/20 items-center justify-center flex-none">
                        <Phone className="w-4 h-4 text-accent" />
                      </span>
                      <div>
                        <p className="text-xs uppercase tracking-widest text-muted">Phone</p>
                        <a href="tel:+14155550142" className="text-sm font-semibold text-ink-900 hover:text-accent transition">
                          +1 (415) 555-0142
                        </a>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="inline-flex w-9 h-9 rounded-xl bg-accent-soft border border-accent/20 items-center justify-center flex-none">
                        <MapPin className="w-4 h-4 text-accent" />
                      </span>
                      <div>
                        <p className="text-xs uppercase tracking-widest text-muted">Office</p>
                        <p className="text-sm font-semibold text-ink-900">San Francisco, CA</p>
                      </div>
                    </li>
                  </ul>
                </div>

                {/* What to expect */}
                <div className="bg-cream-200 border border-line rounded-3xl p-7">
                  <h3 className="text-xs uppercase tracking-[0.25em] text-muted">What to expect</h3>
                  <ol className="mt-5 space-y-4">
                    {EXPECT.map((s, i) => (
                      <li key={s.title} className="flex items-start gap-4">
                        <span className="flex-none inline-flex w-7 h-7 items-center justify-center rounded-full bg-accent text-cream text-xs font-bold">
                          {i + 1}
                        </span>
                        <div>
                          <p className="text-sm font-semibold text-ink-900">{s.title}</p>
                          <p className="mt-0.5 text-xs text-body leading-relaxed">{s.body}</p>
                        </div>
                      </li>
                    ))}
                  </ol>
                </div>

                {/* Specialty mailers */}
                <div>
                  <h3 className="text-xs uppercase tracking-[0.25em] text-muted">Press, partnerships, careers</h3>
                  <div className="mt-4 space-y-1.5">
                    {[
                      ['Press', 'press@revclerx.ai'],
                      ['Partnerships', 'partners@revclerx.ai'],
                      ['Careers', 'careers@revclerx.ai'],
                    ].map(([k, v]) => (
                      <a
                        key={v}
                        href={`mailto:${v}`}
                        className="block text-sm text-ink-900 hover:text-accent transition"
                      >
                        <span className="font-semibold">{k}</span>
                        <span className="text-muted"> · {v}</span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* TRUST STRIP */}
      <section className="bg-cream-200 border-y border-line py-16">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal>
            <p className="text-center text-xs uppercase tracking-[0.3em] text-muted mb-6">
              Built for regulated enterprises
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {TRUST.map((label) => (
                <span
                  key={label}
                  className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-5 py-2.5 text-sm font-medium text-ink-900"
                >
                  <ShieldCheck className="w-3.5 h-3.5 text-accent" />
                  {label}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 md:py-32">
        <div className="max-w-4xl mx-auto px-6">
          <Reveal className="text-center mb-12">
            <SectionEyebrow className="justify-center">FAQ</SectionEyebrow>
            <h2 className="mt-4 text-4xl md:text-5xl font-semibold tracking-tight text-ink-900 text-balance">
              Frequently asked.
            </h2>
            <p className="mt-5 text-base md:text-lg text-body leading-relaxed">
              Quick answers to the questions we hear most often on first calls.
            </p>
          </Reveal>
          <FAQAccordion items={FAQ} defaultOpen={0} />
          <Reveal className="mt-12 text-center">
            <Link href="/solutions" className="btn-secondary">
              Explore solutions
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </Reveal>
        </div>
      </section>
    </PageShell>
  )
}
