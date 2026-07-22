import React from 'react'

export interface AuraHighlightsSectionProps {}

const highlights = [
  'Ingests all kinds of data',
  'Built for BESS & Solar at scale',
  'ECU Logic & Security by Design',
  'Plug-and-Play Integration',
  'Market-Aware Actions, Not Just Reports',
] as const

function LightningIcon() {
  return (
    <svg className="h-5 w-5 sm:h-6 sm:w-6" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path
        d="M9.2 1.5L3.5 9.1H7.4L6.6 14.5L12.5 6.7H8.4L9.2 1.5Z"
        fill="currentColor"
      />
    </svg>
  )
}

const AuraHighlightsSection: React.FC<AuraHighlightsSectionProps> = () => {
  return (
    <section id="aura-highlights" className="px-4 py-8 sm:px-6 sm:py-8 lg:px-8 lg:py-10">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-5 sm:gap-6 lg:gap-7">
        <div className="rounded-[14px] border border-[#EFE6DF] bg-[#FFFFFF] px-4 py-5 shadow-[0px_7.72px_9.64px_0px_#FF6A0026] sm:px-5 sm:py-5 lg:px-6 lg:py-6">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5 lg:gap-0">
            {highlights.map((label, index) => (
              <div
                key={label}
                className={`flex items-center gap-3 sm:gap-3.5 lg:px-3 xl:px-4 ${
                  index > 0 ? 'lg:border-l lg:border-[#E0D8D0]' : ''
                }`}
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[0.75rem] bg-[#FF7F0026] text-[#FF7F00] sm:h-12 sm:w-12">
                  <LightningIcon />
                </div>
                <p className="min-w-0 [font-family:var(--font-ibm-plex-sans)] text-[0.8125rem] font-semibold leading-[1.25] tracking-[-0.01rem] text-[#1C1B1B] sm:text-[0.875rem]">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div
          className="relative overflow-hidden rounded-[14px] px-5 py-7 shadow-[0px_7.72px_9.64px_0px_#FF6A0026] sm:px-8 sm:py-8 lg:px-10 lg:py-9"
          style={{
            background: 'linear-gradient(90deg, #FF7F00 0%, #C45CE8 50%, #8A70F8 100%)',
          }}
        >
          <div className="flex items-start gap-4 sm:gap-5 lg:gap-6">
            <span
              aria-hidden="true"
              className="mt-[-0.15em] shrink-0 select-none [font-family:Georgia,serif] text-[3.75rem] font-bold leading-none text-[#FFD4B0] sm:text-[4.5rem] lg:text-[5.25rem]"
            >
              “
            </span>

            <div className="min-w-0 flex-1 pt-1 sm:pt-1.5 lg:pt-2">
              <p className="max-w-[52rem] [font-family:var(--font-ibm-plex-sans)] text-[0.9375rem] font-medium leading-[1.45] text-white sm:text-[1.0625rem] lg:text-[1.125rem] lg:leading-[1.4]">
                AURA converts complex data uncertainty and variability into optimized schedules and
                clear, executable actions across renewable and storage assets.
              </p>
              <p className="mt-4 [font-family:var(--font-ibm-plex-sans)] text-[0.9375rem] font-bold leading-[1.3] tracking-[-0.01rem] text-white sm:mt-5 sm:text-[1.0625rem] lg:text-[1.125rem]">
                Scheduling • Price • Execution
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AuraHighlightsSection
