import type { Metadata } from 'next'
import Link from 'next/link'
import PageShell from '@/components/PageShell'
import Reveal from '@/components/Reveal'

export const metadata: Metadata = {
  title: 'How it works',
  description:
    'A four step method built for enterprise AI programs. Listen, map, roadmap, execute. Senior people on every step.'
}

const steps = [
  {
    n: '01',
    title: 'Listen',
    lead:
      'Every engagement begins with a quiet week of conversations.',
    body:
      'We sit with the operators, engineers, and leaders who actually run the work. We watch how decisions move, where the friction is, and what the data is silently telling everyone. The brief is in the room. We just have to write it down.',
    notes: [
      'Discovery interviews with 8 to 15 stakeholders.',
      'Walk-throughs of current workflows, in their tools.',
      'A short written field report at the end of week one.'
    ]
  },
  {
    n: '02',
    title: 'Map',
    lead:
      'We translate the stories into a clear map of opportunity, risk, and dependency.',
    body:
      'Not every problem is an AI problem. We mark which ones are, which ones are simply broken process, and which ones depend on a piece of plumbing nobody has built yet. The map is sequenced so the first thing you do unblocks the next.',
    notes: [
      'Opportunity inventory with effort and value estimates.',
      'Data and platform dependency graph.',
      'Risk register, including the things that should not be automated.'
    ]
  },
  {
    n: '03',
    title: 'Roadmap',
    lead:
      'A short, defensible plan that names owners, costs, and the conditions for go and no go.',
    body:
      'A roadmap is only useful if you can take it to a board, a CFO, and a head of risk and have all three nod. We write it that way. Each initiative comes with a defined outcome, a budget, a kill criterion, and a single accountable owner.',
    notes: [
      'Sequenced 6 to 12 month plan with quarterly checkpoints.',
      'Named owners on both sides of the table.',
      'Explicit kill and scale criteria for each initiative.'
    ]
  },
  {
    n: '04',
    title: 'Execute',
    lead:
      'Senior engineers ship. Weekly demos and a clean handoff path back to your team.',
    body:
      'Delivery is done by the same people who scoped the work. We ship in production-grade environments from day one, run live evaluation against the criteria we set, and document everything we build so it survives the engagement.',
    notes: [
      'Weekly working demo and a written status note.',
      'Production deploys against your security and compliance program.',
      'Documentation, runbooks, and a defined exit path.'
    ]
  }
]

export default function HowItWorksPage() {
  return (
    <PageShell>
      {/* HERO */}
      <section className="px-6 lg:px-8 pt-20 pb-16 md:pt-28 md:pb-20">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <p className="text-xs uppercase tracking-widest text-[#767069] font-semibold">
              How it works
            </p>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="mt-6 text-5xl md:text-7xl font-extrabold text-[#1C1C1C] leading-[0.98] text-balance max-w-4xl">
              Four steps. Senior people on every one.
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-8 max-w-2xl text-lg text-[#3a3a3a] leading-relaxed">
              Our method is short, repeatable, and designed to expose problems early. It is
              the same shape we have used inside banks, insurers, and global retailers.
            </p>
          </Reveal>
        </div>
      </section>

      {/* STEP DEEP DIVES */}
      {steps.map((s) => (
        <section
          key={s.n}
          className="px-6 lg:px-8 py-24 md:py-28 border-t border-[#ebe6dd]"
        >
          <div className="mx-auto max-w-7xl grid gap-12 md:grid-cols-12 items-start">
            <div className="md:col-span-4">
              <Reveal>
                <div className="text-sm font-mono text-[#ff5a1f]">{s.n}</div>
                <h2 className="mt-3 text-4xl md:text-5xl font-extrabold text-[#1C1C1C] leading-tight">
                  {s.title}
                </h2>
                <p className="mt-6 text-base md:text-lg text-[#3a3a3a] leading-relaxed">
                  {s.lead}
                </p>
              </Reveal>
            </div>

            <div className="md:col-span-7 md:col-start-6 space-y-8">
              <Reveal delay={100}>
                <p className="text-base md:text-lg text-[#3a3a3a] leading-relaxed">{s.body}</p>
              </Reveal>
              <Reveal delay={160}>
                <ul className="divide-y divide-[#ebe6dd] border-t border-b border-[#ebe6dd]">
                  {s.notes.map((note, idx) => (
                    <li key={idx} className="flex gap-4 py-4">
                      <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-[#ff5a1f] flex-none" />
                      <p className="text-sm md:text-base text-[#3a3a3a] leading-relaxed">
                        {note}
                      </p>
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
          </div>
        </section>
      ))}

      {/* BOTTOM CTA */}
      <section className="px-6 lg:px-8 py-24 md:py-32 border-t border-[#ebe6dd]">
        <div className="mx-auto max-w-4xl text-center">
          <Reveal>
            <h2 className="text-4xl md:text-6xl font-extrabold text-[#1C1C1C] leading-[0.98] text-balance">
              The first step is a conversation.
            </h2>
            <p className="mt-6 text-base md:text-lg text-[#3a3a3a] max-w-2xl mx-auto leading-relaxed">
              Thirty minutes with a senior partner. No slides. We will tell you whether your
              program is in a good place to start, and what we would do first.
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
