import React from 'react'
import Image from 'next/image'

export interface PatentDisplaySectionProps {}

interface CapabilityTag {
  line1: string
  line2: string
  icon: string
}

const capabilityTags: CapabilityTag[] = [
  { line1: 'Digital', line2: 'Twin', icon: '/Icons/Patent_Card_Icons/digital-twin.svg' },
  { line1: 'EMS', line2: 'Dispatch', icon: '/Icons/Patent_Card_Icons/ems-dispatch.svg' },
  { line1: 'AURA', line2: 'Intelligence', icon: '/Icons/Patent_Card_Icons/aura-intelligence.svg' },
  { line1: 'Grid', line2: 'Control', icon: '/Icons/Patent_Card_Icons/grid-control.svg' },
]

const PatentDisplaySection: React.FC<PatentDisplaySectionProps> = () => {
  return (
    <section id="patent-display" className="px-4 pb-16 pt-16 sm:px-6 sm:pb-8 sm:pt-12 lg:px-8 lg:pb-16 lg:pt-16">
      <div
        className="relative mx-auto w-full overflow-hidden rounded-[14px] px-4 py-[1.1rem] shadow-[0px_7.72px_9.64px_0px_#FF6A0026] sm:px-5 sm:py-[1.35rem] lg:grid lg:min-h-[12.4rem] lg:grid-cols-[auto_1fr_auto] lg:items-center lg:px-[1.3rem] lg:py-[1.35rem]"
        style={{
          background: 'linear-gradient(90deg, #F26C0D 0%, #C56D7C 41.47%, #8A70F8 100%)',
        }}
      >
        <div className="relative z-[2] flex flex-col gap-[0.5rem] text-left">
          <p className="[font-family:var(--font-ibm-plex-sans)] text-[2.75rem] font-semibold leading-[0.92] tracking-[-0.06rem] text-white sm:text-[3.05rem] lg:text-[3.35rem]">
            14 +
          </p>
          <p className="[font-family:var(--font-ibm-plex-sans)] text-[1.62rem] font-semibold leading-[1] tracking-[-0.02rem] text-white sm:text-[1.78rem] lg:text-[1.92rem]">
            Patents
          </p>
          <p className="[font-family:var(--font-ibm-plex-sans)] text-[0.98rem] font-medium leading-[1.18] tracking-[0] text-white/85 sm:text-[1.05rem]">
            <span className="block whitespace-nowrap">Filed and in progress across</span>
            <span className="block whitespace-nowrap">the Solvyn platform</span>
          </p>
        </div>

        <div className="relative z-[2] mt-4 w-full max-w-[31rem] pt-[0.03rem] text-center lg:mt-0 lg:max-w-[34rem] lg:justify-self-center">
          <h3 className="[font-family:var(--font-ibm-plex-sans)] text-[1.22rem] font-medium leading-[1.22] tracking-[-0.01rem] text-white sm:text-[1.3rem] lg:text-[1.42rem]">
            <span className="block whitespace-nowrap">Covering Digital Twin Models, EMS Dispatch logic,</span>
            <span className="block whitespace-nowrap">AURA intelligence, and grid-interactive control systems.</span>
          </h3>
          <div className="mt-[0.9rem] flex w-full flex-nowrap justify-center gap-[0.58rem]">
            {capabilityTags.map((tag) => (
              <div
                key={`${tag.line1}-${tag.line2}`}
                className="inline-flex h-[4rem] items-center justify-center gap-[0.72rem] rounded-[0.65rem] border border-white/25 bg-white/10 px-[1rem] backdrop-blur-[4px]"
              >
                <span className="inline-flex h-[1.9rem] w-[1.9rem] shrink-0 items-center justify-center">
                  <Image src={tag.icon} alt="" width={32} height={32} aria-hidden="true" className="h-[1.8rem] w-[1.8rem] object-contain brightness-0 invert" />
                </span>
                <span className="flex h-[1.85rem] flex-col justify-center text-left [font-family:var(--font-ibm-plex-sans)] text-[0.95rem] font-semibold leading-[0.95] tracking-[0] text-white sm:text-[1rem]">
                  <span>{tag.line1}</span>
                  <span>{tag.line2}</span>
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="relative z-[2] mt-4 flex shrink-0 flex-col items-center justify-center gap-4 border-t border-white/20 pt-5 text-center sm:pt-6 lg:mt-0 lg:border-t-0 lg:pt-0 lg:pl-4">
          <Image
            src="/Icons/patents-shield.svg"
            alt=""
            width={80}
            height={80}
            aria-hidden="true"
            className="h-[6rem] w-[6rem] brightness-0 invert sm:h-[6.5rem] sm:w-[6.5rem]"
          />
          <button
            type="button"
            className="mt-1.5 inline-flex cursor-pointer items-center justify-center rounded-full border-[1.5px] border-[#FF7A3D] bg-transparent px-4 py-1.5 transition-all duration-200 ease-out hover:bg-white/10 [font-family:var(--font-ibm-plex-sans)] text-[0.875rem] font-semibold leading-[1] tracking-[-0.01rem] text-white sm:mt-2 sm:px-5 sm:py-2 sm:text-[0.9375rem]"
          >
            View IP & Patents
          </button>
        </div>
      </div>
    </section>
  )
}

export default PatentDisplaySection
