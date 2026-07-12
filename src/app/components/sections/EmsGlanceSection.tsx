import React from 'react'

export interface EmsGlanceSectionProps {}

function IconEye() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path
        d="M10 4.25C5.8 4.25 2.35 6.9 1 10C2.35 13.1 5.8 15.75 10 15.75C14.2 15.75 17.65 13.1 19 10C17.65 6.9 14.2 4.25 10 4.25Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <circle cx="10" cy="10" r="2.75" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  )
}

function IconSliders() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path d="M3 5.5H17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M3 10H17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M3 14.5H17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="7" cy="5.5" r="1.75" fill="currentColor" stroke="currentColor" strokeWidth="0.5" />
      <circle cx="13" cy="10" r="1.75" fill="currentColor" stroke="currentColor" strokeWidth="0.5" />
      <circle cx="9" cy="14.5" r="1.75" fill="currentColor" stroke="currentColor" strokeWidth="0.5" />
    </svg>
  )
}

function IconShieldCheck() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path
        d="M10 2.5L16.5 5V10C16.5 13.9 13.7 17.2 10 18.2C6.3 17.2 3.5 13.9 3.5 10V5L10 2.5Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M7.2 9.8L9.1 11.7L12.9 7.8"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function IconBars() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path d="M4 15.5V11" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M10 15.5V7.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M16 15.5V4.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  )
}

const glanceItems = [
  {
    title: 'Real-Time Visibility',
    description:
      'Unified monitoring across assets, devices, and plant systems every data point in one operational view.',
    icon: <IconEye />,
  },
  {
    title: 'Intelligent Dispatch',
    description:
      'Automated control strategies for stable and optimized operations 100ms control loop, 11 simultaneous modes.',
    icon: <IconSliders />,
  },
  {
    title: 'Grid Compliance',
    description:
      'Built-in protections and grid code adherence CEA, IEGC, CERC, DEWA, and 21+ grid codes supported.',
    icon: <IconShieldCheck />,
  },
  {
    title: 'Performance Intelligence',
    description:
      'Operational analytics for higher yield and reduced losses — integrated with AURA and Digital Twins.',
    icon: <IconBars />,
  },
] as const

const EmsGlanceSection: React.FC<EmsGlanceSectionProps> = () => {
  return (
    <section id="ems-at-a-glance" className="px-4 py-10 sm:px-6 lg:px-8 lg:py-20">
      <div className="mx-auto w-full max-w-7xl">
        <p className="[font-family:var(--font-ibm-plex-sans)] text-[0.875rem] font-medium uppercase leading-[1] tracking-[0.02rem] text-[#FF7F00] sm:text-[0.9375rem]">
          EMS AT A GLANCE
        </p>
        <h2 className="mt-4 max-w-[720px] [font-family:var(--font-ibm-plex-sans)] text-[1.5rem] font-bold leading-[1.2] tracking-[-0.03rem] text-[#1C1B1B] sm:text-[1.9rem] lg:text-[2.35rem] lg:leading-[1.16] lg:tracking-[-0.05rem]">
          Four dimensions of centralised intelligence.
        </h2>
        <p className="mt-4 max-w-[720px] [font-family:var(--font-ibm-plex-sans)] text-[15px] leading-[1.4] text-[#7F7F7F] sm:text-base">
          What makes Solvyn different is not any single layer. It is how all five work as one closed
          loop each layer feeding the next, every outcome improving the model.
        </p>

        <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {glanceItems.map((item) => (
            <article
              key={item.title}
              className="flex flex-col rounded-[14px] border border-[#EFE6DF] bg-[#FFFFFF] px-5 py-5 shadow-[0px_7.72px_9.64px_0px_#FF6A0026] transition-all duration-200 hover:-translate-y-1 hover:border-[#FF7F0052] hover:shadow-[0px_12px_18px_0px_#FF6A0038] sm:px-6 sm:py-6"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-[0.625rem] bg-[#FF7F0026] text-[#FF7F00]">
                {item.icon}
              </div>
              <h3 className="mt-4 [font-family:var(--font-ibm-plex-sans)] text-[18px] font-semibold leading-[1.2] text-[#131313]">
                {item.title}
              </h3>
              <p className="mt-2 [font-family:var(--font-ibm-plex-sans)] text-[15px] leading-[1.4] text-[#4E4E4E]">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default EmsGlanceSection
