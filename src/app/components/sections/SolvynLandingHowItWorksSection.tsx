import React from 'react'

export interface SolvynLandingHowItWorksSectionProps {}

const steps = [
  {
    step: 'STEP 01',
    verb: 'Connects',
    product: 'Solvyn X',
    description:
      'Pulls real-time data from every asset, interface, and system into one normalised operational stream.',
    className: 'bg-[#FAD835] border-[#FAD835]',
  },
  {
    step: 'STEP 02',
    verb: 'See',
    product: 'Solvyn SCADA',
    description:
      'Transforms live data into operator intelligence alarms, guided recovery, schedules, and live plant context.',
    className: 'bg-[#F19430] border-[#F19430]',
  },
  {
    step: 'STEP 03',
    verb: 'Predicts',
    product: 'Digital Twin',
    description:
      'Maintains a live plant model to forecast generation, degradation, and grid response before events occur.',
    className: 'bg-[#ED6542] border-[#ED6542]',
  },
  {
    step: 'STEP 04',
    verb: 'Decides',
    product: 'AURA',
    description:
      'Reads the model, detects risk, evaluates options, and surfaces prescriptive guidance with explainable reasoning.',
    className: 'bg-[#7D81A6] border-[#7D81A6]',
  },
  {
    step: 'STEP 05',
    verb: 'Executes',
    product: 'Solvyn EMS',
    description:
      'Converts decisions into compliant, market-aligned, degradation-aware dispatch across hybrid assets in real time.',
    className: 'bg-[#BEBEBE] border-[#BEBEBE]',
  },
] as const

const SolvynLandingHowItWorksSection: React.FC<SolvynLandingHowItWorksSectionProps> = () => {
  return (
    <section id="how-it-works-together" className="px-4 py-8 sm:px-6 sm:py-8 lg:px-8 lg:py-10">
      <div className="mx-auto w-full max-w-7xl">
        <p className="[font-family:var(--font-ibm-plex-sans)] text-[0.875rem] font-medium uppercase leading-[1] tracking-[0.02rem] text-[#FF7F00] sm:text-[0.9375rem]">
          HOW IT WORKS TOGETHER
        </p>
        <h2 className="mt-4 max-w-[720px] [font-family:var(--font-ibm-plex-sans)] text-[1.5rem] font-bold leading-[1.2] tracking-[-0.03rem] text-[#1C1B1B] sm:text-[1.9rem] lg:text-[2.35rem] lg:leading-[1.16] lg:tracking-[-0.05rem]">
          Prediction. Decision. Action. Continuously.
        </h2>
        <p className="mt-4 max-w-[720px] [font-family:var(--font-ibm-plex-sans)] text-[15px] leading-[1.4] text-[#7F7F7F] sm:text-base">
          What makes Solvyn different is not any single layer. It is how all five work as one closed
          loop each layer feeding the next, every outcome improving the model.
        </p>

        <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {steps.map((item) => (
            <article
              key={item.step}
              className={`flex flex-col rounded-[14px] border px-4 py-5 transition-all duration-200 hover:-translate-y-1 sm:px-5 sm:py-6 ${item.className}`}
            >
              <p className="[font-family:var(--font-ibm-plex-sans)] text-[0.6875rem] font-semibold uppercase tracking-[0.04rem] text-[#1C1B1B]">
                {item.step}
              </p>
              <h3 className="mt-3 [font-family:var(--font-ibm-plex-sans)] text-[1.25rem] font-bold leading-[1.15] tracking-[-0.02rem] text-[#1C1B1B] sm:text-[1.375rem]">
                {item.verb}
              </h3>
              <p className="mt-1 [font-family:var(--font-ibm-plex-sans)] text-[0.8125rem] font-semibold text-[#1C1B1B]">
                {item.product}
              </p>
              <p className="mt-3 [font-family:var(--font-ibm-plex-sans)] text-[13px] leading-[1.4] text-[#2A2A2A] sm:text-[14px]">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SolvynLandingHowItWorksSection
