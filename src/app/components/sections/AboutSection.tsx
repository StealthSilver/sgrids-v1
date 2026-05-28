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
  icon: string
}

const timelineSteps: TimelineStep[] = [
  {
    id: 'see',
    label: 'SEE',
    title: 'Real-time plant visibility',
    description: 'SCADA and telemetry unify every asset into one operational picture.',
    image: '/Images/about_1.svg',
    icon: '/Icons/about_eye.svg',
  },
  {
    id: 'execute',
    label: 'EXECUTE',
    title: 'Grid-ready EMS dispatch',
    description: 'Converts grid requirements into plant asset setpoints.',
    image: '/Images/about_2.svg',
    icon: '/Icons/about_gear.svg',
  },
  {
    id: 'decide',
    label: 'DECIDE',
    title: 'AURA intelligence',
    description: 'Turns forecasts into schedules for hybrid and storage plants.',
    image: '/Images/about_3.svg',
    icon: '/Icons/about_ai.svg',
  },
]

const AboutSection: React.FC<AboutSectionProps> = () => {
  const [activeStep, setActiveStep] = React.useState<TimelineStep['id']>('see')
  const [isImageVisible, setIsImageVisible] = React.useState(true)

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

  React.useEffect(() => {
    setIsImageVisible(false)
    const timeout = window.setTimeout(() => {
      setIsImageVisible(true)
    }, 10)

    return () => window.clearTimeout(timeout)
  }, [activeStep])

  const activeStepData = timelineSteps.find((step) => step.id === activeStep) ?? timelineSteps[0]

  return (
    <section id="about" className="px-4 py-10 sm:px-6 lg:px-8 lg:py-20">
      <div className="mx-auto grid w-full max-w-[1180px] grid-cols-[1fr_0.95fr_1fr] items-center gap-6">
        <div className="max-w-[480px]">
          <p className="[font-family:var(--font-ibm-plex-sans)] text-[0.875rem] font-medium uppercase leading-[1] tracking-[0.02rem] text-[#FF7F00] sm:text-[0.9375rem]">
            WHO WE ARE
          </p>
          <h2 className="mt-4 [font-family:var(--font-ibm-plex-sans)] text-lg font-bold leading-[1.2] tracking-[-0.03rem] text-[#1C1B1B] sm:text-xl lg:text-[1.95rem] lg:leading-[1.16] lg:tracking-[-0.05rem]">
            We bridge the gap between knowing and doing in renewable energy
          </h2>
          <p className="mt-5 max-w-2xl text-[13px] leading-[1.45] text-black sm:text-[14px]">
            Smart Grid Analytics was founded by control engineers, grid architects, and energy technologists with one clear purpose to build the
            software the renewable energy transition actually needs.
          </p>

          <div className="mt-5 rounded-[10px] border-[0.95px] border-[#E4E4E7] bg-white px-3.5 py-3">
            <div className="flex items-center gap-2.5">
              <Image src="/Icons/tick.svg" alt="" width={16} height={16} aria-hidden="true" className="h-4 w-4 shrink-0" />
              <p className="[font-family:var(--font-ibm-plex-sans)] text-[11px] font-normal leading-[1.4] text-[#4E4E4E]">
                EMS and AURA work together continuously observe, decide, act, learn. The platform gets sharper every cycle.
              </p>
            </div>
          </div>
        </div>

        <div className="mx-auto flex w-full max-w-[345px] flex-col">
          {timelineSteps.map((step, index) => {
            const isActive = step.id === activeStep
            const isLast = index === timelineSteps.length - 1

            return (
              <div
                key={step.id}
                className="group flex w-full items-start gap-5 text-left"
              >
                <div className="flex w-[58px] shrink-0 flex-col items-center pt-[1px]">
                  <span
                    className="flex h-[56px] w-[56px] items-center justify-center rounded-full border border-[#ECECEC] bg-white shadow-[0px_3.7px_3.7px_0px_#FF6A0026]"
                  >
                    <span
                      aria-hidden="true"
                      className="h-[25px] w-[25px] transition-colors"
                      style={{
                        backgroundColor: isActive ? '#FF7F00' : 'rgba(0, 0, 0, 0.55)',
                        WebkitMaskImage: `url(${step.icon})`,
                        maskImage: `url(${step.icon})`,
                        WebkitMaskRepeat: 'no-repeat',
                        maskRepeat: 'no-repeat',
                        WebkitMaskPosition: 'center',
                        maskPosition: 'center',
                        WebkitMaskSize: 'contain',
                        maskSize: 'contain',
                      }}
                    />
                  </span>
                  {!isLast && <span className="mt-1.5 h-[58px] w-px bg-[#DDDDDD]" />}
                </div>

                <div className={`w-full max-w-[240px] rounded-[10px] border border-[#EFE6DF] bg-white px-3 py-2 shadow-[0px_3.37px_3.37px_0px_#FF6A0026] ${isActive ? '' : 'opacity-45'}`}>
                  <p className="[font-family:var(--font-ibm-plex-sans)] text-[12.5px] font-semibold leading-[1] text-[#FF7F00]">
                    {step.label}
                  </p>
                  <p className={`mt-1.5 [font-family:var(--font-ibm-plex-sans)] text-[12.5px] font-semibold leading-[1.14] ${isActive ? 'text-[#131313]' : 'text-[#BEBEBE]'}`}>
                    {step.title}
                  </p>
                  <p className="[font-family:var(--font-ibm-plex-sans)] mt-1 text-[12.5px] leading-[1.3] text-black">
                    {step.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>

        <div className="ml-auto flex w-full max-w-[500px] justify-end">
          <Image
            key={activeStepData.id}
            src={activeStepData.image}
            alt={`${activeStepData.label} illustration`}
            width={545}
            height={422}
            className={`h-auto w-full max-w-[545px] object-contain drop-shadow-[0px_12px_24px_#00000021] transition-opacity duration-500 ease-in-out ${
              isImageVisible ? 'opacity-100' : 'opacity-0'
            }`}
            priority={false}
          />
        </div>
      </div>
    </section>
  )
}

export default AboutSection
