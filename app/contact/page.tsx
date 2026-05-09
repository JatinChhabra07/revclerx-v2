'use client'

import { useState } from 'react'
import Link from 'next/link'
import PageShell from '@/components/PageShell'
import Reveal from '@/components/Reveal'
import { VerticalCutReveal } from '@/components/ui/vertical-cut-reveal'
import { FAQAccordion } from '@/components/ui/faq-accordion'

const faqItems = [
  {
    question: 'How long does a typical engagement take?',
    answer:
      'Most engagements run between 4 and 16 weeks end to end. A focused proof of concept lands in 4 weeks, a full production deployment in 10 to 12, and an ongoing managed program runs quarter by quarter after that.'
  },
  {
    question: 'Do you work with our existing data team or replace it?',
    answer:
      'We work with you, never around you. Our model is to embed alongside your existing data, ML, and engineering teams, transfer knowledge throughout the engagement, and leave your team strictly more capable than we found them.'
  },
  {
    question: 'What does the AI Readiness Sprint cover?',
    answer:
      'The two week sprint maps your data landscape, prioritizes use cases against expected ROI, evaluates risk and compliance posture, and outputs a 90 day execution plan with budget and staffing. You walk away with a credible roadmap whether or not you continue with us.'
  },
  {
    question: 'Can you deploy on premise or air gapped?',
    answer:
      'Yes. We have shipped into VPC, on premise, and fully air gapped environments. We support open weight model deployment, private inference endpoints, and a model agnostic architecture so you stay in control of where data lives.'
  },
  {
    question: 'How do you handle data security and compliance?',
    answer:
      'Security is treated as a first class engineering deliverable, not an afterthought. We follow SOC 2 Type II controls, support GDPR and HIPAA workloads, ship with audit logging by default, and run threat modeling and red team exercises before any model touches production data.'
  }
]

const trustItems = [
  'SOC 2 ready',
  'GDPR aligned',
  'HIPAA experienced',
  'ISO 27001 in process'
]

const expectSteps = [
  {
    title: 'Discovery call',
    body: 'A 30 minute conversation to understand your goal, your stack, and your constraints.'
  },
  {
    title: 'Scoping workshop',
    body: 'A working session with your team to align on outcomes, success metrics, and risks.'
  },
  {
    title: 'Written proposal',
    body: 'Plan, milestones, team, fixed fee budget, and an explicit definition of done.'
  },
  {
    title: 'Kickoff',
    body: 'Within one week of signoff, we are in your sprint board and shipping.'
  }
]

const inputClasses =
  'bg-white border border-[#e5e2db] text-[#0a0a0a] placeholder-[#6b6457] focus:border-[#1f4d3a] focus:ring-2 focus:ring-[#1f4d3a]/20 focus:outline-none rounded-lg px-4 py-3 w-full'

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
      <section className="bg-[#faf6ef]">
        <div className="max-w-7xl mx-auto px-6 pt-24 pb-16 md:pt-32 md:pb-20">
          <Reveal>
            <span className="inline-flex items-center rounded-full border border-[#e5e2db] bg-white px-3 py-1 text-xs uppercase tracking-[0.25em] text-[#6b6457]">
              Book a call
            </span>
            <h1 className="mt-6 text-5xl md:text-7xl font-bold tracking-tight text-[#0a0a0a] text-balance leading-[1.05]">
              <VerticalCutReveal>
                {'Begin your AI transformation.'}
              </VerticalCutReveal>
            </h1>
            <p className="mt-7 max-w-3xl text-lg md:text-xl text-[#2a2a2a] leading-relaxed">
              Whether you are scoping your first deployment or reworking a stalled program, we will help you find the highest leverage move and chart a credible path to production.
            </p>
          </Reveal>
        </div>
      </section>

      {/* TWO COLUMN: FORM + INFO */}
      <section className="bg-[#faf6ef] border-t border-[#e5e2db]">
        <div className="max-w-7xl mx-auto px-6 py-16 md:py-20">
          <div className="grid lg:grid-cols-2 gap-10">

            {/* LEFT: FORM */}
            <Reveal>
              <div className="bg-white border border-[#e5e2db] rounded-2xl p-8">
                <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-[#0a0a0a]">
                  Tell us what you are exploring.
                </h2>
                <p className="mt-3 text-[#2a2a2a]">
                  A few quick fields and we will route you to the right specialist.
                </p>

                <form id="contactForm" onSubmit={onSubmit} className="mt-8 space-y-5" noValidate>
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-[#2a2a2a] mb-2">
                      Full name <span className="text-[#1f4d3a]">*</span>
                    </label>
                    <input id="name" name="name" type="text" required placeholder="Jane Doe" className={inputClasses} />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-[#2a2a2a] mb-2">
                      Work email <span className="text-[#1f4d3a]">*</span>
                    </label>
                    <input id="email" name="email" type="email" required placeholder="jane@company.com" className={inputClasses} />
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-[#2a2a2a] mb-2">
                      Company <span className="text-[#1f4d3a]">*</span>
                    </label>
                    <input id="company" name="company" type="text" required placeholder="Acme Corp" className={inputClasses} />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="role" className="block text-sm font-medium text-[#2a2a2a] mb-2">Role</label>
                      <select id="role" name="role" className={inputClasses}>
                        <option value="">Select your role</option>
                        <option value="CEO">CEO</option>
                        <option value="CTO">CTO</option>
                        <option value="CIO">CIO</option>
                        <option value="VP Engineering">VP Engineering</option>
                        <option value="Head of Data">Head of Data</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="size" className="block text-sm font-medium text-[#2a2a2a] mb-2">Company size</label>
                      <select id="size" name="size" className={inputClasses}>
                        <option value="">Select company size</option>
                        <option value="1-50">1 to 50</option>
                        <option value="51-250">51 to 250</option>
                        <option value="251-1000">251 to 1000</option>
                        <option value="1000+">1000 plus</option>
                        <option value="Public">Public</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-[#2a2a2a] mb-2">
                      What are you exploring?
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      placeholder="Tell us about the workflow, metric, or problem you are looking to move."
                      className={inputClasses}
                    />
                  </div>

                  <div>
                    <button
                      type="submit"
                      className="inline-flex items-center justify-center rounded-full bg-[#1f4d3a] px-7 py-3.5 text-sm font-semibold text-[#faf6ef] hover:bg-[#163829] transition"
                    >
                      Schedule strategy call
                    </button>
                  </div>

                  <p className="text-xs text-[#6b6457] leading-relaxed">
                    We respond within 1 business day. All conversations are NDA ready on request.
                  </p>

                  {submitted && (
                    <p
                      role="status"
                      aria-live="polite"
                      className="rounded-lg border border-[#1f4d3a]/30 bg-[#1f4d3a]/5 px-4 py-3 text-sm text-[#1f4d3a]"
                    >
                      Thanks. A senior consultant will reach out within one business day.
                    </p>
                  )}
                </form>
              </div>
            </Reveal>

            {/* RIGHT: INFO */}
            <Reveal>
              <div className="space-y-10">

                {/* Get in touch */}
                <div>
                  <h3 className="text-sm uppercase tracking-[0.25em] text-[#6b6457]">Get in touch</h3>
                  <div className="mt-5 space-y-4">
                    <div>
                      <p className="text-xs uppercase tracking-widest text-[#6b6457]">Email</p>
                      <a href="mailto:hello@revclerx.ai" className="mt-1 inline-block text-base font-semibold text-[#0a0a0a] hover:text-[#1f4d3a] transition">
                        hello@revclerx.ai
                      </a>
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-widest text-[#6b6457]">Phone</p>
                      <a href="tel:+14155550142" className="mt-1 inline-block text-base font-semibold text-[#0a0a0a] hover:text-[#1f4d3a] transition">
                        +1 (415) 555 0142
                      </a>
                    </div>
                  </div>
                </div>

                {/* What to expect */}
                <div>
                  <h3 className="text-sm uppercase tracking-[0.25em] text-[#6b6457]">What to expect</h3>
                  <ul className="mt-5 space-y-4">
                    {expectSteps.map((step, i) => (
                      <li key={step.title} className="flex items-start gap-4">
                        <span className="mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#1f4d3a] text-xs font-semibold text-[#faf6ef]">
                          {i + 1}
                        </span>
                        <div>
                          <p className="font-semibold text-[#0a0a0a]">{step.title}</p>
                          <p className="mt-1 text-sm text-[#2a2a2a] leading-relaxed">{step.body}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Press / Partnerships / Careers */}
                <div>
                  <h3 className="text-sm uppercase tracking-[0.25em] text-[#6b6457]">
                    For press, partnerships, careers
                  </h3>
                  <div className="mt-5 flex flex-col gap-2">
                    <a href="mailto:press@revclerx.ai" className="text-sm text-[#0a0a0a] hover:text-[#1f4d3a] transition">
                      <span className="font-semibold">Press</span>
                      <span className="text-[#6b6457]"> press@revclerx.ai</span>
                    </a>
                    <a href="mailto:partners@revclerx.ai" className="text-sm text-[#0a0a0a] hover:text-[#1f4d3a] transition">
                      <span className="font-semibold">Partnerships</span>
                      <span className="text-[#6b6457]"> partners@revclerx.ai</span>
                    </a>
                    <a href="mailto:careers@revclerx.ai" className="text-sm text-[#0a0a0a] hover:text-[#1f4d3a] transition">
                      <span className="font-semibold">Careers</span>
                      <span className="text-[#6b6457]"> careers@revclerx.ai</span>
                    </a>
                  </div>
                </div>

              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[#faf6ef] border-t border-[#e5e2db]">
        <div className="max-w-4xl mx-auto px-6 py-20 md:py-24">
          <Reveal className="text-center max-w-2xl mx-auto">
            <span className="text-xs uppercase tracking-[0.25em] text-[#6b6457]">FAQ</span>
            <h2 className="mt-4 text-4xl md:text-5xl font-bold tracking-tight text-[#0a0a0a] text-balance">
              Frequently asked.
            </h2>
            <p className="mt-5 text-lg text-[#2a2a2a] leading-relaxed">
              Quick answers to the questions we hear most often on first calls.
            </p>
          </Reveal>
          <div className="mt-12">
            <FAQAccordion items={faqItems} />
          </div>
        </div>
      </section>

      {/* TRUST STRIP */}
      <section className="bg-[#faf6ef] border-t border-[#e5e2db]">
        <div className="max-w-7xl mx-auto px-6 py-14">
          <Reveal>
            <div className="flex flex-wrap items-center justify-center gap-3">
              {trustItems.map((label) => (
                <span
                  key={label}
                  className="inline-flex items-center rounded-full border border-[#e5e2db] bg-white px-4 py-2 text-sm text-[#2a2a2a]"
                >
                  {label}
                </span>
              ))}
            </div>
            <p className="mt-6 text-center text-xs uppercase tracking-[0.25em] text-[#6b6457]">
              Built for regulated enterprises
            </p>
            <div className="mt-8 text-center">
              <Link
                href="/solutions"
                className="inline-flex items-center rounded-full border border-[#0a0a0a] px-6 py-2.5 text-sm font-semibold text-[#0a0a0a] hover:bg-[#0a0a0a] hover:text-[#faf6ef] transition"
              >
                Explore solutions
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </PageShell>
  )
}
