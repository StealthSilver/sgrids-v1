import React from 'react'
import Image from 'next/image'

export interface AuraExplainableSectionProps {}

const steps = [
  {
    number: '01',
    title: 'Deviation Detected',
    description:
      'Actual performance compared against schedule in real time, not just flagged after the fact.',
  },
  {
    number: '02',
    title: 'Root Cause Traced',
    description:
      'Underlying driver identified, with downstream impact mapped before any action is taken.',
  },
  {
    number: '03',
    title: 'Correction Generated',
    description:
      'Revised plan computed with cost, risk, and commitments weighed against each other.',
  },
  {
    number: '04',
    title: 'Operator Confirms',
    description: 'Human-in-the-loop validation before any action executes.',
  },
  {
    number: '05',
    title: 'Outcome Logged',
    description: 'Every decision recorded feeds counterfactual replay and model improvement.',
  },
] as const

const tradeOffs: { label: string; value: string; emphasize?: boolean }[] = [
  { label: 'Charging Cost', value: '₹1.20 → ₹1.60/kWh' },
  { label: 'Additional Cost', value: '₹18,400' },
  { label: 'Penalty Avoided', value: '₹1,24,000' },
  { label: 'Net Financial Benefit', value: '₹1,05,600', emphasize: true },
]

const AuraExplainableSection: React.FC<AuraExplainableSectionProps> = () => {
  return (
    <section id="explainable-intelligence" className="px-4 py-8 sm:px-6 sm:py-8 lg:px-8 lg:py-10">
      <div className="mx-auto w-full max-w-7xl">
        <div className="grid items-start gap-8 lg:grid-cols-2 lg:gap-10 xl:gap-14">
          <div className="min-w-0">
            <p className="[font-family:var(--font-ibm-plex-sans)] text-[0.875rem] font-medium uppercase leading-[1] tracking-[0.02rem] text-[#FF7F00] sm:text-[0.9375rem]">
              EXPLAINABLE INTELLIGENCE
            </p>
            <h2 className="mt-4 max-w-[34rem] [font-family:var(--font-ibm-plex-sans)] text-[1.5rem] font-bold leading-[1.2] tracking-[-0.03rem] text-[#1C1B1B] sm:text-[1.9rem] lg:text-[2.35rem] lg:leading-[1.16] lg:tracking-[-0.05rem]">
              Intelligence you can trust because you can see its reasoning.
            </h2>
            <p className="mt-4 max-w-[36rem] [font-family:var(--font-ibm-plex-sans)] text-[15px] leading-[1.4] text-[#7F7F7F] sm:text-base">
              AURA doesn&apos;t just optimize, it explains. Every dispatch decision, every schedule
              correction, every trade-off is traceable and human-readable.
            </p>

            <div className="mt-6 flex flex-col gap-2.5 sm:mt-8 sm:gap-3">
              {steps.map((step) => (
                <div
                  key={step.number}
                  className="flex gap-3 rounded-[14px] border border-[#EFE6DF] bg-[#FAFAFA] px-4 py-3.5 sm:gap-4 sm:px-5 sm:py-4"
                >
                  <span className="shrink-0 [font-family:var(--font-ibm-plex-sans)] text-[0.875rem] font-bold leading-[1.3] text-[#FF7F00] sm:text-[0.9375rem]">
                    {step.number}
                  </span>
                  <div className="min-w-0">
                    <h3 className="[font-family:var(--font-ibm-plex-sans)] text-[0.875rem] font-semibold leading-[1.3] tracking-[-0.01rem] text-[#1C1B1B] sm:text-[0.9375rem]">
                      {step.title}
                    </h3>
                    <p className="mt-1 [font-family:var(--font-ibm-plex-sans)] text-[0.75rem] leading-[1.4] text-[#7F7F7F] sm:text-[0.8125rem]">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <aside className="overflow-hidden rounded-[14px] bg-[#0B1B3A] px-5 py-6 shadow-[0px_7.72px_9.64px_0px_#FF6A0026] sm:px-6 sm:py-7 lg:px-7 lg:py-8">
            <p className="text-center [font-family:var(--font-ibm-plex-sans)] text-[0.6875rem] font-bold uppercase leading-[1.3] tracking-[0.04rem] text-[#FF7F00] sm:text-[0.75rem]">
              AURA • AUTONOMOUS SCHEDULE CORRECTION • BLOCK 58
            </p>

            <div className="mt-6 flex flex-col divide-y divide-white/10">
              <div className="flex gap-3 pb-5 sm:gap-4">
                <Image
                  src="/Images/aura-explainable-step-1.png"
                  alt=""
                  width={48}
                  height={48}
                  className="h-10 w-10 shrink-0 object-contain sm:h-12 sm:w-12"
                />
                <div className="min-w-0">
                  <h4 className="[font-family:var(--font-ibm-plex-sans)] text-[0.6875rem] font-bold uppercase leading-[1] tracking-[0.04rem] text-white sm:text-[0.75rem]">
                    Decision
                  </h4>
                  <p className="mt-2 [font-family:var(--font-ibm-plex-sans)] text-[0.75rem] leading-[1.45] text-white/85 sm:text-[0.8125rem]">
                    Charging schedule automatically revised to recover the State of Charge (SOC)
                    deficit before the evening peak discharge window.
                  </p>
                </div>
              </div>

              <div className="flex gap-3 py-5 sm:gap-4">
                <Image
                  src="/Images/aura-explainable-step-2.png"
                  alt=""
                  width={48}
                  height={48}
                  className="h-10 w-10 shrink-0 object-contain sm:h-12 sm:w-12"
                />
                <div className="min-w-0">
                  <h4 className="[font-family:var(--font-ibm-plex-sans)] text-[0.6875rem] font-bold uppercase leading-[1] tracking-[0.04rem] text-white sm:text-[0.75rem]">
                    Trigger &amp; Root Cause
                  </h4>
                  <p className="mt-2 [font-family:var(--font-ibm-plex-sans)] text-[0.75rem] leading-[1.45] text-white sm:text-[0.8125rem]">
                    <span className="font-semibold">SOC at 67.4% vs. 74.8% scheduled</span>
                    {', '}
                    <span className="font-semibold">5% deviation threshold exceeded</span>
                  </p>
                  <p className="mt-1.5 [font-family:var(--font-ibm-plex-sans)] text-[0.75rem] leading-[1.45] text-white/75 sm:text-[0.8125rem]">
                    Caused by lower-than-forecast solar generation during morning charging blocks.
                  </p>
                </div>
              </div>

              <div className="flex gap-3 py-5 sm:gap-4">
                <Image
                  src="/Images/aura-explainable-step-4.png"
                  alt=""
                  width={48}
                  height={48}
                  className="h-10 w-10 shrink-0 object-contain sm:h-12 sm:w-12"
                />
                <div className="min-w-0 flex-1">
                  <h4 className="[font-family:var(--font-ibm-plex-sans)] text-[0.6875rem] font-bold uppercase leading-[1] tracking-[0.04rem] text-white sm:text-[0.75rem]">
                    Trade-Off Analysis
                  </h4>
                  <dl className="mt-3 space-y-2">
                    {tradeOffs.map((row) => (
                      <div
                        key={row.label}
                        className="flex items-baseline justify-between gap-3 [font-family:var(--font-ibm-plex-sans)] text-[0.75rem] leading-[1.35] sm:text-[0.8125rem]"
                      >
                        <dt
                          className={
                            row.emphasize ? 'font-semibold text-white' : 'text-white/75'
                          }
                        >
                          {row.label}
                        </dt>
                        <dd
                          className={
                            row.emphasize
                              ? 'shrink-0 font-bold text-white'
                              : 'shrink-0 font-medium text-white'
                          }
                        >
                          {row.value}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </div>

              <div className="flex gap-3 py-5 sm:gap-4">
                <Image
                  src="/Images/aura-explainable-step-3.png"
                  alt=""
                  width={48}
                  height={48}
                  className="h-10 w-10 shrink-0 object-contain sm:h-12 sm:w-12"
                />
                <div className="min-w-0">
                  <h4 className="[font-family:var(--font-ibm-plex-sans)] text-[0.6875rem] font-bold uppercase leading-[1] tracking-[0.04rem] text-white sm:text-[0.75rem]">
                    Recommended Action
                  </h4>
                  <p className="mt-2 [font-family:var(--font-ibm-plex-sans)] text-[0.75rem] leading-[1.45] text-white/85 sm:text-[0.8125rem]">
                    Hold revised charging until SOC reaches 82%, then resume planned evening
                    discharge.
                  </p>
                </div>
              </div>

              <div className="flex gap-3 pt-5 sm:gap-4">
                <Image
                  src="/Images/aura-explainable-step-5.png"
                  alt=""
                  width={48}
                  height={48}
                  className="h-10 w-10 shrink-0 object-contain sm:h-12 sm:w-12"
                />
                <div className="min-w-0">
                  <h4 className="[font-family:var(--font-ibm-plex-sans)] text-[0.6875rem] font-bold uppercase leading-[1] tracking-[0.04rem] text-white sm:text-[0.75rem]">
                    Counterfactual Analysis
                  </h4>
                  <p className="mt-2 [font-family:var(--font-ibm-plex-sans)] text-[0.75rem] leading-[1.45] text-white/85 sm:text-[0.8125rem]">
                    Without corrective action:
                  </p>
                  <ul className="mt-2 space-y-1.5">
                    {[
                      '7.4% SOC shortfall',
                      '5 MW missed peak discharge',
                      '₹1,24,000 penalty exposure',
                    ].map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 [font-family:var(--font-ibm-plex-sans)] text-[0.75rem] leading-[1.4] text-white/85 sm:text-[0.8125rem]"
                      >
                        <span
                          aria-hidden="true"
                          className="mt-[0.45em] h-1.5 w-1.5 shrink-0 rounded-full bg-[#FF7F00]"
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  )
}

export default AuraExplainableSection
