import Link from 'next/link'
import PageShell from '@/components/PageShell'
import Reveal from '@/components/Reveal'

const methodSteps = [
  {
    n: '01',
    title: 'Listen',
    body: 'We start by sitting with the people who actually run the work. Operators, engineers, ops leads. The stories they tell are the brief.'
  },
  {
    n: '02',
    title: 'Map',
    body: 'We turn those stories into a clear map of where AI moves the needle, where it does not, and which dependencies have to be true first.'
  },
  {
    n: '03',
    title: 'Roadmap',
    body: 'A short, sequenced plan that names owners, costs, and the conditions under which we kill or scale each initiative.'
  },
  {
    n: '04',
    title: 'Execute',
    body: 'Senior engineers ship. Weekly demos, production-grade infrastructure, and a clean handoff path back to your team.'
  }
]

const solutions = [
  {
    href: '/solutions#assessment',
    eyebrow: 'Solution 01',
    title: 'AI Readiness Assessment',
    body: 'A four week study of your data, workflows, and risk surface. You leave with an honest map of what is real, what is theater, and a sequenced plan you can defend to a board.'
  },
  {
    href: '/solutions#continuous',
    eyebrow: 'Solution 02',
    title: 'Continuous Transformation',
    body: 'An embedded senior team that runs the AI program with you. We pair with internal owners, ship in monthly cycles, and stay close to the metrics that pay the bills.'
  },
  {
    href: '/solutions#deployment',
    eyebrow: 'Solution 03',
    title: 'Enterprise Deployment',
    body: 'Production builds for the AI systems that matter most. Evaluation, observability, security review, and a rollback plan. Built to live in a real company, not a demo deck.'
  }
]

const faqs = [
  {
    q: 'How is RevClerx different from a traditional consultancy?',
    a: 'No pyramid. The people you meet in the first call are the people who write the code. Every engagement is staffed with senior practitioners who have shipped AI systems into regulated environments.'
  },
  {
    q: 'Do you only work with companies that have clean data?',
    a: 'No. Most of the work happens in places where the data is messy. We treat data quality as a workstream, not a precondition, and we are honest about what is achievable in the meantime.'
  },
  {
    q: 'What does an engagement actually look like?',
    a: 'A typical engagement opens with a two to four week assessment, then moves into a roadmap phase, then into delivery. You see weekly demos, weekly written updates, and a single point of accountability.'
  },
  {
    q: 'Can you work alongside our existing teams?',
    a: 'Yes. Most of our work is co-delivery. We pair with internal engineers and product leads, transfer ownership on a defined schedule, and document everything we build.'
  },
  {
    q: 'How do you handle data security and compliance?',
    a: 'All work is performed under enterprise NDA. We can deploy inside your cloud account, against your identity provider, and against your existing compliance program. Nothing leaves your perimeter unless you ask for it to.'
  },
  {
    q: 'How do we know if we are ready to start?',
    a: 'You probably are. The fastest way to find out is the readiness assessment. If we do not see a path to value, we tell you, and we do not start the next phase.'
  }
]

export default function HomePage() {
  return (
    <PageShell>
      {/* HERO */}
      <section className="px-6 lg:px-8 pt-20 pb-24 md:pt-28 md:pb-32">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#ebe6dd] bg-white px-3 py-1 text-xs text-[#3a3a3a]">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#ff5a1f]" />
              Trusted by enterprise teams
            </div>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="mt-8 text-5xl md:text-7xl lg:text-8xl font-extrabold text-[#1C1C1C] leading-[0.95] text-balance max-w-5xl">
              Your enterprise AI transformation partner.
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="mt-8 max-w-2xl text-lg md:text-xl text-[#3a3a3a] leading-relaxed">
              We help large organizations move from AI experiments to AI in production.
              Senior engineers, honest assessments, and durable systems built to live inside
              the messy reality of a real company.
            </p>
          </Reveal>

          <Reveal delay={240}>
            <div className="mt-10 flex flex-wrap items-center gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-[#1C1C1C] px-6 py-3 text-sm font-medium text-[#f9f7f3] hover:bg-black transition-colors"
              >
                Book a call
              </Link>
              <Link
                href="/how-it-works"
                className="inline-flex items-center justify-center rounded-full border border-[#d4cfc4] bg-white px-6 py-3 text-sm font-medium text-[#1C1C1C] hover:border-[#1C1C1C] transition-colors"
              >
                How we work
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* PROBLEM NARRATIVE */}
      <section className="px-6 lg:px-8 py-24 md:py-28 border-t border-[#ebe6dd]">
        <div className="mx-auto max-w-7xl grid gap-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <Reveal>
              <p className="text-xs uppercase tracking-widest text-[#767069] font-semibold">
                Why programs stall
              </p>
              <h2 className="mt-4 text-3xl md:text-4xl font-extrabold text-[#1C1C1C] leading-tight">
                Most enterprise AI programs do not fail in the model. They fail in the room.
              </h2>
            </Reveal>
          </div>

          <div className="md:col-span-7 md:col-start-6 space-y-6 text-base md:text-lg leading-relaxed text-[#3a3a3a]">
            <Reveal delay={80}>
              <p>
                The pattern is familiar. A leadership team commits to AI. A pilot ships. A few
                slides circulate. Then the program drifts because nobody owns the next step,
                the data work is harder than the deck implied, and the operational risk is
                quietly absorbed by people too senior to complain.
              </p>
            </Reveal>
            <Reveal delay={140}>
              <p>
                The fix is not another vendor demo or another foundation model. It is a
                small group of senior practitioners who can look at your business with the
                same honesty you would bring to a financial audit, and design a program that
                survives the second quarter.
              </p>
            </Reveal>
            <Reveal delay={200}>
              <p>
                That is the work we do. Quiet, sequenced, and accountable. We say no to
                projects that should not be built, we ship the ones that should, and we leave
                your team stronger than we found them.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 4-STEP METHOD */}
      <section className="px-6 lg:px-8 py-24 md:py-32 border-t border-[#ebe6dd]">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <p className="text-xs uppercase tracking-widest text-[#767069] font-semibold">
              The method
            </p>
            <h2 className="mt-4 text-3xl md:text-5xl font-extrabold text-[#1C1C1C] max-w-3xl leading-tight">
              Four steps. Senior people on every one.
            </h2>
          </Reveal>

          <div className="mt-16 grid gap-10 md:grid-cols-4">
            {methodSteps.map((step, i) => (
              <Reveal key={step.n} delay={i * 80}>
                <div className="border-t border-[#1C1C1C] pt-6">
                  <div className="text-sm font-mono text-[#ff5a1f]">{step.n}</div>
                  <h3 className="mt-3 text-xl font-bold text-[#1C1C1C]">{step.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#3a3a3a]">{step.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SOLUTIONS */}
      <section className="px-6 lg:px-8 py-24 md:py-32 border-t border-[#ebe6dd]">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <p className="text-xs uppercase tracking-widest text-[#767069] font-semibold">
              What we do
            </p>
            <h2 className="mt-4 text-3xl md:text-5xl font-extrabold text-[#1C1C1C] max-w-3xl leading-tight">
              Three engagements. One standard.
            </h2>
          </Reveal>

          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {solutions.map((sol, i) => (
              <Reveal key={sol.href} delay={i * 80}>
                <Link
                  href={sol.href}
                  className="group block h-full rounded-2xl border border-[#ebe6dd] bg-white p-8 transition-all hover:-translate-y-1 hover:border-[#d4cfc4] hover:shadow-[0_24px_48px_-24px_rgba(28,28,28,0.18)]"
                >
                  <p className="text-xs uppercase tracking-widest text-[#ff5a1f] font-semibold">
                    {sol.eyebrow}
                  </p>
                  <h3 className="mt-4 text-2xl font-bold text-[#1C1C1C]">{sol.title}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-[#3a3a3a]">{sol.body}</p>
                  <div className="mt-8 inline-flex items-center text-sm font-medium text-[#1C1C1C]">
                    Read more
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="ml-1 transition-transform group-hover:translate-x-1"
                    >
                      <path d="M5 12h14M13 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-6 lg:px-8 py-24 md:py-32 border-t border-[#ebe6dd]">
        <div className="mx-auto max-w-7xl grid gap-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <Reveal>
              <p className="text-xs uppercase tracking-widest text-[#767069] font-semibold">
                Common questions
              </p>
              <h2 className="mt-4 text-3xl md:text-4xl font-extrabold text-[#1C1C1C] leading-tight">
                Honest answers, before the first call.
              </h2>
              <p className="mt-6 text-sm text-[#3a3a3a] leading-relaxed">
                If your question is not here, send it to{' '}
                <a href="mailto:hello@revclerx.ai" className="text-[#ff5a1f] underline underline-offset-4">
                  hello@revclerx.ai
                </a>{' '}
                and a senior partner will reply.
              </p>
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

      {/* FINAL CTA */}
      <section className="px-6 lg:px-8 py-24 md:py-32 border-t border-[#ebe6dd]">
        <div className="mx-auto max-w-4xl text-center">
          <Reveal>
            <p className="text-xs uppercase tracking-widest text-[#767069] font-semibold">
              Ready when you are
            </p>
            <h2 className="mt-6 text-4xl md:text-6xl font-extrabold text-[#1C1C1C] leading-[0.98] text-balance">
              Let us look at your AI program with you.
            </h2>
            <p className="mt-6 text-base md:text-lg text-[#3a3a3a] max-w-2xl mx-auto leading-relaxed">
              A 30 minute conversation, no slides, no sales engineer. We will tell you what we
              think and you will leave with a useful answer either way.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-[#1C1C1C] px-6 py-3 text-sm font-medium text-[#f9f7f3] hover:bg-black transition-colors"
              >
                Book a call
              </Link>
              <Link
                href="/solutions"
                className="inline-flex items-center justify-center rounded-full border border-[#d4cfc4] bg-white px-6 py-3 text-sm font-medium text-[#1C1C1C] hover:border-[#1C1C1C] transition-colors"
              >
                See solutions
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </PageShell>
  )
}
