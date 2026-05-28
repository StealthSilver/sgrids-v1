'use client'

import React from 'react'
import Image from 'next/image'

export interface AboutSectionProps {}

interface TimelineStep {
  id: 'see' | 'execute' | 'decide'
  label: string
  title: string
  description: string
  image: string
}

const timelineSteps: TimelineStep[] = [
  {
    id: 'see',
    label: 'SEE',
    title: 'Real-time plant visibility',
    description: 'SCADA and telemetry unify every asset into one operational picture.',
    image: '/Images/about_1.svg',
  },
  {
    id: 'execute',
    label: 'EXECUTE',
    title: 'Grid-ready EMS dispatch',
    description: 'Converts grid requirements into plant asset setpoints.',
    image: '/Images/about_2.svg',
  },
  {
    id: 'decide',
    label: 'DECIDE',
    title: 'AURA intelligence',
    description: 'Turns forecasts into schedules for hybrid and storage plants.',
    image: '/Images/about_3.svg',
  },
]

const AboutSection: React.FC<AboutSectionProps> = () => {
  const [activeStep, setActiveStep] = React.useState<TimelineStep['id']>('see')

  React.useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveStep((current) => {
        const currentIndex = timelineSteps.findIndex((step) => step.id === current)
        const nextIndex = (currentIndex + 1) % timelineSteps.length
        return timelineSteps[nextIndex].id
      })
    }, 3200)

    return () => window.clearInterval(interval)
  }, [])

  const activeStepData = timelineSteps.find((step) => step.id === activeStep) ?? timelineSteps[0]

  return (
    <section id="about" className="px-[24px] py-[58px]">
      <div className="mx-auto grid w-full max-w-[1240px] grid-cols-[1.05fr_0.95fr_1.05fr] items-center gap-[22px]">
        <div className="max-w-[430px]">
          <p className="[font-family:var(--font-ibm-plex-sans)] text-[30px] font-bold leading-[1.02] text-[#DA8326]">WHO WE ARE</p>
          <h2 className="mt-[12px] [font-family:var(--font-ibm-plex-sans)] text-[52px] font-semibold leading-[1.04] tracking-[-0.03em] text-[#1C1B1B]">
            We bridge the gap between knowing and doing in renewable energy
          </h2>
          <p className="mt-[20px] [font-family:var(--font-ibm-plex-sans)] text-[27px] font-normal leading-[1.38] text-[#5C5C5C]">
            Smart Grid Analytics was founded by control engineers, grid architects, and energy technologists with one clear purpose to build the
            software the renewable energy transition actually needs.
          </p>

          <div className="mt-[28px] rounded-[14px] border border-[#EFE6DF] bg-white px-[20px] py-[14px] shadow-[0px_3px_16px_0px_#00000010]">
            <p className="[font-family:var(--font-ibm-plex-sans)] text-[13px] font-medium leading-[1.4] text-[#666666]">
              EMS and AURA work together continuously to observe, decide, act, learn. The platform gets sharper every cycle.
            </p>
          </div>
        </div>

        <div className="mx-auto flex w-full max-w-[470px] flex-col">
          {timelineSteps.map((step, index) => {
            const isActive = step.id === activeStep
            const isLast = index === timelineSteps.length - 1

            return (
              <button
                key={step.id}
                type="button"
                onMouseEnter={() => setActiveStep(step.id)}
                onFocus={() => setActiveStep(step.id)}
                onClick={() => setActiveStep(step.id)}
                className="group flex w-full items-start gap-[20px] text-left"
              >
                <div className="flex w-[56px] shrink-0 flex-col items-center pt-[1px]">
                  <span
                    className={`flex h-[54px] w-[54px] items-center justify-center rounded-full border transition-colors ${
                      isActive ? 'border-[#E38D2D] bg-[#FFF8EE]' : 'border-[#ECECEC] bg-[#FFFFFF]'
                    }`}
                  >
                    <span
                      className={`[font-family:var(--font-ibm-plex-sans)] text-[14px] font-semibold leading-[1] ${
                        isActive ? 'text-[#D67812]' : 'text-[#C6C6C6]'
                      }`}
                    >
                      {index + 1}
                    </span>
                  </span>
                  {!isLast && <span className="mt-[7px] h-[88px] w-px bg-[#DDDDDD]" />}
                </div>

                <div className={`w-full pb-[24px] pr-[6px] ${isActive ? '' : 'opacity-45'}`}>
                  <p className={`[font-family:var(--font-ibm-plex-sans)] text-[20px] font-semibold leading-[1] ${isActive ? 'text-[#DA8326]' : 'text-[#C9C9C9]'}`}>
                    {step.label}
                  </p>
                  <p className={`mt-[12px] [font-family:var(--font-ibm-plex-sans)] text-[30px] font-semibold leading-[1.15] ${isActive ? 'text-[#131313]' : 'text-[#BEBEBE]'}`}>
                    {step.title}
                  </p>
                  <p className={`mt-[9px] [font-family:var(--font-ibm-plex-sans)] text-[23px] leading-[1.38] ${isActive ? 'text-[#646464]' : 'text-[#CFCFCF]'}`}>
                    {step.description}
                  </p>
                </div>
              </button>
            )
          })}
        </div>

        <div className="ml-auto flex w-full max-w-[560px] justify-end">
          <Image
            key={activeStepData.id}
            src={activeStepData.image}
            alt={`${activeStepData.label} illustration`}
            width={545}
            height={422}
            className="h-auto w-full max-w-[545px] object-contain drop-shadow-[0px_12px_24px_#00000021]"
            priority={false}
          />
        </div>
      </div>
    </section>
  )
}

export default AboutSection
