'use client'

import { useState } from 'react'
import PageShell from '@/components/PageShell'
import Reveal from '@/components/Reveal'
import { siteConfig } from '@/lib/site-config'

const stages = ['Just exploring', 'Running a pilot', 'Ready to scale', 'Already in production']

const faqs = [
  {
    q: 'Who reads inbound messages?',
    a: 'A senior partner reads every inbound message. There is no SDR layer and no triage queue.'
  },
  {
    q: 'How fast will I hear back?',
    a: 'Within one business day, in writing, from a partner. If we are the wrong fit, we will say so plainly and point you somewhere useful.'
  },
  {
    q: 'Do I need to have a project ready?',
    a: 'No. Many of our best engagements start with a single conversation about whether something should be a project at all.'
  },
  {
    q: 'Can we sign an NDA before talking?',
    a: 'Yes. Send a request and we will return a signed mutual NDA the same day.'
  }
]

export default function ContactPage() {
  const [stage, setStage] = useState<string>(stages[0])
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  })

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <PageShell>
      {/* HERO */}
      <section className="px-6 lg:px-8 pt-20 pb-16 md:pt-28 md:pb-20">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <p className="text-xs uppercase tracking-widest text-[#767069] font-semibold">
              Contact
            </p>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="mt-6 text-5xl md:text-7xl font-extrabold text-[#1C1C1C] leading-[0.98] text-balance max-w-4xl">
              Tell us about your program.
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-8 max-w-2xl text-lg text-[#3a3a3a] leading-relaxed">
              A senior partner reads every inbound and writes back within one business day.
              If we are not the right team for the work, we will tell you and we will point
              you to someone who is.
            </p>
          </Reveal>
        </div>
      </section>

      {/* FORM + INFO */}
      <section className="px-6 lg:px-8 py-16 md:py-20 border-t border-[#ebe6dd]">
        <div className="mx-auto max-w-7xl grid gap-12 md:grid-cols-12">
          {/* Form */}
          <div className="md:col-span-7">
            <div className="rounded-2xl border border-[#ebe6dd] bg-white p-8 md:p-10">
              {submitted ? (
                <div className="py-12 text-center">
                  <div className="mx-auto inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#1C1C1C] text-[#f9f7f3]">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M5 12l5 5L20 7" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <h2 className="mt-6 text-2xl font-extrabold text-[#1C1C1C]">
                    Thanks. Your note is in.
                  </h2>
                  <p className="mt-3 text-sm text-[#3a3a3a] max-w-md mx-auto leading-relaxed">
                    A senior partner will reply within one business day. If anything is
                    urgent, email{' '}
                    <a
                      href={`mailto:${siteConfig.email}`}
                      className="text-[#ff5a1f] underline underline-offset-4"
                    >
                      {siteConfig.email}
                    </a>{' '}
                    directly.
                  </p>
                </div>
              ) : (
                <form onSubmit={onSubmit} className="space-y-6">
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div>
                      <label htmlFor="name" className="block text-xs font-semibold uppercase tracking-widest text-[#1C1C1C]">
                        Name
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={form.name}
                        onChange={onChange}
                        className="mt-2 w-full rounded-lg border border-[#ebe6dd] bg-[#f9f7f3] px-4 py-3 text-sm text-[#1C1C1C] placeholder-[#767069] focus:border-[#1C1C1C] focus:outline-none"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-widest text-[#1C1C1C]">
                        Work email
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={form.email}
                        onChange={onChange}
                        className="mt-2 w-full rounded-lg border border-[#ebe6dd] bg-[#f9f7f3] px-4 py-3 text-sm text-[#1C1C1C] placeholder-[#767069] focus:border-[#1C1C1C] focus:outline-none"
                        placeholder="you@company.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-xs font-semibold uppercase tracking-widest text-[#1C1C1C]">
                      Company
                    </label>
                    <input
                      id="company"
                      name="company"
                      type="text"
                      required
                      value={form.company}
                      onChange={onChange}
                      className="mt-2 w-full rounded-lg border border-[#ebe6dd] bg-[#f9f7f3] px-4 py-3 text-sm text-[#1C1C1C] placeholder-[#767069] focus:border-[#1C1C1C] focus:outline-none"
                      placeholder="Company name"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-widest text-[#1C1C1C]">
                      Where is your program today
                    </label>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {stages.map((s) => (
                        <button
                          key={s}
                          type="button"
                          onClick={() => setStage(s)}
                          className={`rounded-full border px-4 py-2 text-xs font-medium transition-colors ${
                            stage === s
                              ? 'border-[#1C1C1C] bg-[#1C1C1C] text-[#f9f7f3]'
                              : 'border-[#ebe6dd] bg-white text-[#3a3a3a] hover:border-[#d4cfc4]'
                          }`}
                        >
                          {s}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-widest text-[#1C1C1C]">
                      What is on your mind
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      value={form.message}
                      onChange={onChange}
                      className="mt-2 w-full rounded-lg border border-[#ebe6dd] bg-[#f9f7f3] px-4 py-3 text-sm text-[#1C1C1C] placeholder-[#767069] focus:border-[#1C1C1C] focus:outline-none"
                      placeholder="A few sentences are plenty. We will reply with questions."
                    />
                  </div>

                  <button
                    type="submit"
                    className="inline-flex items-center justify-center rounded-full bg-[#1C1C1C] px-6 py-3 text-sm font-medium text-[#f9f7f3] hover:bg-black transition-colors"
                  >
                    Send message
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Info */}
          <div className="md:col-span-4 md:col-start-9 space-y-10">
            <div>
              <p className="text-xs uppercase tracking-widest text-[#767069] font-semibold">
                Email
              </p>
              <a
                href={`mailto:${siteConfig.email}`}
                className="mt-3 block text-xl font-bold text-[#1C1C1C] hover:text-[#ff5a1f] transition-colors"
              >
                {siteConfig.email}
              </a>
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-[#767069] font-semibold">
                Phone
              </p>
              <p className="mt-3 text-xl font-bold text-[#1C1C1C]">{siteConfig.phone}</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-[#767069] font-semibold">
                Response time
              </p>
              <p className="mt-3 text-base text-[#3a3a3a] leading-relaxed">
                One business day, in writing, from a partner. We do not auto-reply.
              </p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-[#767069] font-semibold">
                For partners
              </p>
              <p className="mt-3 text-base text-[#3a3a3a] leading-relaxed">
                If you are a vendor, integrator, or platform team, please send a one paragraph
                introduction first.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-6 lg:px-8 py-24 md:py-32 border-t border-[#ebe6dd]">
        <div className="mx-auto max-w-7xl grid gap-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <Reveal>
              <p className="text-xs uppercase tracking-widest text-[#767069] font-semibold">
                Before you write
              </p>
              <h2 className="mt-4 text-3xl md:text-4xl font-extrabold text-[#1C1C1C] leading-tight">
                A few things people usually ask first.
              </h2>
            </Reveal>
          </div>
          <div className="md:col-span-7 md:col-start-6 divide-y divide-[#ebe6dd] border-t border-b border-[#ebe6dd]">
            {faqs.map((f) => (
              <details key={f.q} className="group py-5">
                <summary className="flex items-center justify-between gap-4 text-base md:text-lg font-medium text-[#1C1C1C]">
                  <span>{f.q}</span>
                  <span className="ml-4 inline-flex h-6 w-6 flex-none items-center justify-center rounded-full border border-[#ebe6dd] text-[#3a3a3a] transition-transform group-open:rotate-45">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M12 5v14M5 12h14" strokeLinecap="round" />
                    </svg>
                  </span>
                </summary>
                <p className="mt-3 text-sm md:text-base leading-relaxed text-[#3a3a3a]">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  )
}
