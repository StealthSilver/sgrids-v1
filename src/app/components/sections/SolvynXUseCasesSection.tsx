import React from 'react'
import Image from 'next/image'

export interface SolvynXUseCasesSectionProps {}

const useCases = [
  {
    title: 'Renewable Energy Plants',
    description: 'Solar, wind, hydro and storage assets.',
    image: '/Images/icon-3d-security-lock.png',
  },
  {
    title: 'Industrial Automation Systems',
    description: 'PLCs, DCS, and control system integration.',
    image: '/Images/icon-3d-lightbulb.png',
  },
  {
    title: 'Multi-Site Enterprise Integration',
    description: 'Standardize data across assets and locations.',
    image: '/Images/icon-3d-lightbulb.png',
  },
  {
    title: 'SCADA, EMS & IoT Ecosystems',
    description: 'Seamless connectivity across platforms and protocols.',
    image: '/Images/icon-3d-compliance-card.png',
  },
] as const

const SolvynXUseCasesSection: React.FC<SolvynXUseCasesSectionProps> = () => {
  return (
    <section id="use-cases" className="px-4 py-10 sm:px-6 lg:px-8 lg:py-20">
      <div className="mx-auto w-full max-w-7xl">
        <p className="[font-family:var(--font-ibm-plex-sans)] text-[0.875rem] font-medium uppercase leading-[1] tracking-[0.02rem] text-[#FF7F00] sm:text-[0.9375rem]">
          USE CASES
        </p>
        <h2 className="mt-4 max-w-[720px] [font-family:var(--font-ibm-plex-sans)] text-[1.5rem] font-bold leading-[1.2] tracking-[-0.03rem] text-[#1C1B1B] sm:text-[1.9rem] lg:text-[2.35rem] lg:leading-[1.16] lg:tracking-[-0.05rem]">
          Built for every energy environment.
        </h2>

        <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {useCases.map((useCase) => (
            <article
              key={useCase.title}
              className="flex flex-col rounded-[14px] border border-[#EFE6DF] bg-[#FFFFFF] px-5 py-5 shadow-[0px_7.72px_9.64px_0px_#FF6A0026] transition-all duration-200 hover:-translate-y-1 hover:border-[#FF7F0052] hover:shadow-[0px_12px_18px_0px_#FF6A0038] sm:px-6 sm:py-6"
            >
              <div className="flex h-[72px] w-[72px] items-center justify-center sm:h-[80px] sm:w-[80px]">
                <Image
                  src={useCase.image}
                  alt=""
                  width={160}
                  height={160}
                  className="h-full w-full object-contain"
                />
              </div>

              <h3 className="mt-4 [font-family:var(--font-ibm-plex-sans)] text-[18px] font-semibold leading-[1.2] text-[#131313]">
                {useCase.title}
              </h3>
              <p className="mt-2 [font-family:var(--font-ibm-plex-sans)] text-[15px] leading-[1.4] text-[#4E4E4E]">
                {useCase.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SolvynXUseCasesSection
