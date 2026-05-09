import type { Metadata } from 'next'
import Link from 'next/link'
import PageShell from '@/components/PageShell'
import Reveal from '@/components/Reveal'

export const metadata: Metadata = {
  title: 'About',
  description:
    'RevClerx is a small senior team of engineers, product leaders, and operators building enterprise AI programs that survive contact with reality.'
}

const principles = [
  {
    title: 'Senior people on the work.',
    body:
      'The partner who scopes the engagement is the same partner who writes the code, runs the review, and signs off the deploy. No pyramid, no analyst layer, no hidden offshore team.'
  },
  {
    title: 'Direct accountability.',
    body:
      'One named owner on our side. One on yours. We agree on outcomes in writing, we report on them in writing, and we say so when we are off track.'
  },
  {
    title: 'We tell you when not to build.',
    body:
      'Most of the value in early AI work is killing the wrong projects fast. We will say so plainly, and we will give you the reasoning in a form you can take to a board.'
  },
  {
    title: 'Built to leave.',
    body:
      'Every engagement has a defined exit ramp. We document, we transfer, we hand off cleanly. Your team is stronger after we go than before we arrived.'
  }
]

export default function AboutPage() {
  return (
    <PageShell>
      {/* HERO */}
      <section className="px-6 lg:px-8 pt-20 pb-16 md:pt-28 md:pb-20">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <p className="text-xs uppercase tracking-widest text-[#767069] font-semibold">
              About
            </p>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="mt-6 text-5xl md:text-7xl font-extrabold text-[#1C1C1C] leading-[0.98] text-balance max-w-4xl">
              A small senior team for enterprise AI.
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-8 max-w-2xl text-lg text-[#3a3a3a] leading-relaxed">
              RevClerx is a partnership of engineers, product leaders, and operators who
              have spent careers shipping software inside large, regulated organizations. We
              started this firm because the AI work that mattered most was not getting done.
            </p>
          </Reveal>
        </div>
      </section>

      {/* MISSION */}
      <section className="px-6 lg:px-8 py-24 md:py-28 border-t border-[#ebe6dd]">
        <div className="mx-auto max-w-7xl grid gap-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <Reveal>
              <p className="text-xs uppercase tracking-widest text-[#767069] font-semibold">
                Mission
              </p>
              <h2 className="mt-4 text-3xl md:text-4xl font-extrabold text-[#1C1C1C] leading-tight">
                We build AI programs that hold up after we leave the room.
              </h2>
            </Reveal>
          </div>
          <div className="md:col-span-7 md:col-start-6 text-base md:text-lg leading-relaxed text-[#3a3a3a]">
            <Reveal delay={80}>
              <p>
                Our work is the unglamorous part. The data plumbing nobody volunteers for. The
                evaluation harness that catches the regression before it hits a customer. The
                quiet conversation with a head of risk that reshapes a roadmap. The version of
                the system that ships and stays shipped. We do this work because it is what
                makes everything else possible, and because too few firms are willing to.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* PRINCIPLES */}
      <section className="px-6 lg:px-8 py-24 md:py-32 border-t border-[#ebe6dd]">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <p className="text-xs uppercase tracking-widest text-[#767069] font-semibold">
              Principles
            </p>
            <h2 className="mt-4 text-3xl md:text-5xl font-extrabold text-[#1C1C1C] max-w-3xl leading-tight">
              How we work, in four lines.
            </h2>
          </Reveal>

          <div className="mt-16 grid gap-y-12 gap-x-16 md:grid-cols-2">
            {principles.map((p, i) => (
              <Reveal key={p.title} delay={i * 80}>
                <div className="border-t border-[#1C1C1C] pt-6">
                  <h3 className="text-2xl font-extrabold text-[#1C1C1C] leading-tight">
                    {p.title}
                  </h3>
                  <p className="mt-4 text-base leading-relaxed text-[#3a3a3a]">{p.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="px-6 lg:px-8 py-24 md:py-32 border-t border-[#ebe6dd]">
        <div className="mx-auto max-w-4xl text-center">
          <Reveal>
            <h2 className="text-4xl md:text-6xl font-extrabold text-[#1C1C1C] leading-[0.98] text-balance">
              If this sounds like the team you want.
            </h2>
            <p className="mt-6 text-base md:text-lg text-[#3a3a3a] max-w-2xl mx-auto leading-relaxed">
              Send a short note. A senior partner reads every inbound and replies in person.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-[#1C1C1C] px-6 py-3 text-sm font-medium text-[#f9f7f3] hover:bg-black transition-colors"
              >
                Get in touch
              </Link>
              <Link
                href="/how-it-works"
                className="inline-flex items-center justify-center rounded-full border border-[#d4cfc4] bg-white px-6 py-3 text-sm font-medium text-[#1C1C1C] hover:border-[#1C1C1C] transition-colors"
              >
                See the method
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </PageShell>
  )
}
