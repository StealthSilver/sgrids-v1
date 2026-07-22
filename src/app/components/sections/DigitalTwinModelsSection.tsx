import React from 'react'
import Image from 'next/image'

export interface DigitalTwinModelsSectionProps {}

const models = [
  {
    title: 'Solar Digital Twin',
    image: '/Images/digital-twin-model-solar.png',
    alt: 'Solar Digital Twin — solar panels with live data overlays',
    description:
      'Minute-by-minute generation forecasting from module to plant level using irradiance, temperature, PVsyst, and weather inputs to simulate performance, identify losses, and predict faults.',
  },
  {
    title: 'BESS Digital Twin',
    image: '/Images/digital-twin-model-bess.png',
    alt: 'BESS Digital Twin — battery storage units with orbital data rings',
    description:
      'Physics-based and AI-driven intelligence predicting degradation, validating dispatch, and forecasting lifecycle performance real-time closed-loop with EMS and BMS for warranty-safe operation.',
  },
] as const

const DigitalTwinModelsSection: React.FC<DigitalTwinModelsSectionProps> = () => {
  return (
    <section id="two-patented-models" className="px-4 py-8 sm:px-6 sm:py-8 lg:px-8 lg:py-10">
      <div className="mx-auto w-full max-w-7xl">
        <p className="[font-family:var(--font-ibm-plex-sans)] text-[0.875rem] font-medium uppercase leading-[1] tracking-[0.02rem] text-[#FF7F00] sm:text-[0.9375rem]">
          TWO PATENTED MODELS
        </p>
        <h2 className="mt-4 max-w-[720px] [font-family:var(--font-ibm-plex-sans)] text-[1.5rem] font-bold leading-[1.2] tracking-[-0.03rem] text-[#1C1B1B] sm:text-[1.9rem] lg:text-[2.35rem] lg:leading-[1.16] lg:tracking-[-0.05rem]">
          One for solar. One for storage.
          <br />
          Both always live.
        </h2>

        <div className="mt-6 grid grid-cols-1 gap-3 sm:mt-8 sm:gap-4 lg:mt-8 lg:grid-cols-2 lg:gap-4">
          {models.map((model) => (
            <article
              key={model.title}
              className="flex flex-col overflow-hidden rounded-[14px] border border-[#EFE6DF] bg-[#FFFFFF] p-4 shadow-[0px_7.72px_9.64px_0px_#FF6A0026] transition-all duration-200 hover:-translate-y-1 hover:border-[#FF7F0052] hover:shadow-[0px_12px_18px_0px_#FF6A0038] sm:p-5"
            >
              <div className="flex w-full items-center justify-center">
                <Image
                  src={model.image}
                  alt={model.alt}
                  width={900}
                  height={600}
                  className="h-auto w-full max-w-[17rem] object-contain sm:max-w-[18.5rem]"
                />
              </div>

              <p className="mt-3 [font-family:var(--font-ibm-plex-sans)] text-[0.75rem] font-semibold uppercase leading-[1] tracking-[0.02rem] text-[#FF7F00] sm:mt-4 sm:text-[0.8125rem]">
                PATENTED MODEL
              </p>
              <h3 className="mt-1.5 [font-family:var(--font-ibm-plex-sans)] text-[1.125rem] font-semibold leading-[1.2] tracking-[-0.01rem] text-[#131313] sm:text-[1.25rem]">
                {model.title}
              </h3>
              <p className="mt-2 [font-family:var(--font-ibm-plex-sans)] text-[0.875rem] leading-[1.45] text-[#4E4E4E] sm:text-[0.9375rem] sm:leading-[1.4]">
                {model.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default DigitalTwinModelsSection
