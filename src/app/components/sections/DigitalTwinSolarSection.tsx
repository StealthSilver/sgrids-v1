import React from 'react'
import Image from 'next/image'

export interface DigitalTwinSolarSectionProps {}

const steps = [
  {
    step: 'STEP 01',
    title: 'Module',
    image: '/Images/digital-twin-solar-module.png',
    product: 'Solvyn X',
    description: 'Cell-level irradiance and temperature',
  },
  {
    step: 'STEP 02',
    title: 'String',
    image: '/Images/digital-twin-solar-string.png',
    product: 'Solvyn SCADA',
    description: 'String current mis-match fault detection',
  },
  {
    step: 'STEP 03',
    title: 'Inverter',
    image: '/Images/digital-twin-solar-inverter.png',
    product: 'Digital Twin',
    description: 'Clipping efficiency diagnostics',
  },
  {
    step: 'STEP 04',
    title: 'Transformer',
    image: '/Images/digital-twin-solar-transformer.png',
    product: 'AURA',
    description: 'Loss modelling thermal loading',
  },
  {
    step: 'STEP 05',
    title: 'Plant',
    image: '/Images/digital-twin-solar-plant.png',
    product: 'Solvyn EMS',
    description: 'Total output PR capacity factor',
  },
] as const

const DigitalTwinSolarSection: React.FC<DigitalTwinSolarSectionProps> = () => {
  return (
    <section id="solar-digital-twin" className="px-4 py-10 sm:px-6 lg:px-8 lg:py-20">
      <div className="mx-auto w-full max-w-7xl">
        <p className="[font-family:var(--font-ibm-plex-sans)] text-[0.875rem] font-medium uppercase leading-[1] tracking-[0.02rem] text-[#FF7F00] sm:text-[0.9375rem]">
          SOLAR DIGITAL TWIN
        </p>
        <h2 className="mt-4 max-w-[720px] [font-family:var(--font-ibm-plex-sans)] text-[1.5rem] font-bold leading-[1.2] tracking-[-0.03rem] text-[#1C1B1B] sm:text-[1.9rem] lg:text-[2.35rem] lg:leading-[1.16] lg:tracking-[-0.05rem]">
          Forecast at every level of your plant simultaneously.
        </h2>
        <p className="mt-4 max-w-[720px] [font-family:var(--font-ibm-plex-sans)] text-[15px] leading-[1.4] text-[#7F7F7F] sm:text-base">
          From a single module to total plant output Solvyn&apos;s Solar Digital Twin generates
          minute-by-minute forecasts at every level of the generation stack, using real weather and
          plant data.
        </p>

        <div className="mt-8 grid grid-cols-1 gap-3 sm:mt-10 sm:grid-cols-2 sm:gap-4 lg:mt-12 lg:grid-cols-5 lg:gap-3 xl:gap-4">
          {steps.map((item) => (
            <article
              key={item.step}
              className="flex flex-col rounded-[14px] border border-[#E8C4A0] bg-[#FFFFFF] px-4 py-4 transition-all duration-200 hover:-translate-y-1 hover:border-[#FF7F0052] hover:shadow-[0px_12px_18px_0px_#FF6A0038] sm:px-4 sm:py-5"
            >
              <p className="[font-family:var(--font-ibm-plex-sans)] text-[0.6875rem] font-medium uppercase leading-[1] tracking-[0.04rem] text-[#9A9A9A]">
                {item.step}
              </p>
              <h3 className="mt-2 [font-family:var(--font-ibm-plex-sans)] text-[1.0625rem] font-semibold leading-[1.2] tracking-[-0.01rem] text-[#131313] sm:text-[1.125rem]">
                {item.title}
              </h3>

              <div className="mt-4 flex min-h-[7.5rem] flex-1 items-center justify-center sm:min-h-[8.5rem]">
                <Image
                  src={item.image}
                  alt={`${item.title} — ${item.product}`}
                  width={220}
                  height={220}
                  className="h-auto max-h-[8.5rem] w-full object-contain"
                />
              </div>

              <div className="mt-4">
                <p className="[font-family:var(--font-ibm-plex-sans)] text-[0.875rem] font-semibold leading-[1.2] text-[#FF7F00]">
                  {item.product}
                </p>
                <p className="mt-1.5 [font-family:var(--font-ibm-plex-sans)] text-[0.75rem] leading-[1.35] text-[#4E4E4E] sm:text-[0.8125rem]">
                  {item.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default DigitalTwinSolarSection
