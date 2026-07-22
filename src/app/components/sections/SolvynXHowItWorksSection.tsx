import { assetUrl } from '@/lib/cdn'
import React from 'react'
import Image from 'next/image'

export interface SolvynXHowItWorksSectionProps {}

const steps = [
  {
    titleLine1: 'Ingest',
    titleLine2: 'Devices & Systems',
    image: assetUrl('/assets/solvyn-x/images/how-it-works-ingest.png'),
    description: 'PLC/RTU, Sensors,\nMeters, Inverters,\nBMS, PPCs',
  },
  {
    titleLine1: 'Process',
    titleLine2: 'Solvyn X',
    image: assetUrl('/assets/solvyn-x/images/how-it-works-process.png'),
    description: 'Connect, Convert,\nSynchronize',
  },
  {
    titleLine1: 'Cloud & Data',
    titleLine2: 'Databases & Cloud',
    image: assetUrl('/assets/solvyn-x/images/how-it-works-cloud-data.png'),
    description: 'AWS, Azure, GCP,\nOn-Prem',
  },
  {
    titleLine1: 'Control',
    titleLine2: 'EMS + SCADA',
    image: assetUrl('/assets/solvyn-x/images/how-it-works-control.png'),
    description: 'Dispatch, Visibility,\nAlarms, Schedules',
  },
  {
    titleLine1: 'Enterprise',
    titleLine2: 'Business Systems',
    image: assetUrl('/assets/solvyn-x/images/how-it-works-enterprise.png'),
    description: 'CMMS, ERP\nAnalytics, Finance',
  },
] as const

const SolvynXHowItWorksSection: React.FC<SolvynXHowItWorksSectionProps> = () => {
  return (
    <section id="how-it-works" className="px-4 py-8 sm:px-6 sm:py-8 lg:px-8 lg:py-10">
      <div className="mx-auto w-full max-w-7xl">
        <p className="[font-family:var(--font-ibm-plex-sans)] text-[0.875rem] font-medium uppercase leading-[1] tracking-[0.02rem] text-[#FF7F00] sm:text-[0.9375rem]">
          HOW IT WORKS
        </p>
        <h2 className="mt-4 max-w-[720px] [font-family:var(--font-ibm-plex-sans)] text-[1.5rem] font-bold leading-[1.2] tracking-[-0.03rem] text-[#1C1B1B] sm:text-[1.9rem] lg:text-[2.35rem] lg:leading-[1.16] lg:tracking-[-0.05rem]">
          From field signal to operational intelligence.
        </h2>
        <p className="mt-4 max-w-[720px] [font-family:var(--font-ibm-plex-sans)] text-[15px] leading-[1.4] text-[#7F7F7F] sm:text-base">
          Solvyn X sits at the centre of your plant data architecture, normalising every data stream
          and publishing it simultaneously to every system that needs it.
        </p>

        <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {steps.map((step) => (
            <article
              key={`${step.titleLine1}-${step.titleLine2}`}
              className="flex min-h-[320px] flex-col items-center rounded-[14px] border border-[#EFE6DF] bg-[#FFFFFF] px-3 pb-5 pt-5 text-center shadow-[0px_7.72px_9.64px_0px_#FF6A0026] transition-all duration-200 hover:-translate-y-1 hover:border-[#FF7F0052] hover:shadow-[0px_12px_18px_0px_#FF6A0038]"
            >
              <h3 className="[font-family:var(--font-ibm-plex-sans)] text-[18px] font-semibold leading-[1.2] text-[#131313]">
                <span className="block">{step.titleLine1}</span>
                <span className="block">{step.titleLine2}</span>
              </h3>

              <div className="mt-4 flex h-[160px] w-full items-center justify-center">
                <Image
                  src={step.image}
                  alt={`${step.titleLine1} — ${step.titleLine2}`}
                  width={280}
                  height={220}
                  className="h-full w-auto max-w-full object-contain"
                />
              </div>

              <p className="mt-4 whitespace-pre-line [font-family:var(--font-ibm-plex-sans)] text-[13px] leading-[1.4] text-[#7F7F7F] sm:text-[14px]">
                {step.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SolvynXHowItWorksSection
