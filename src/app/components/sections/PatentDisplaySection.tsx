import React from 'react'
import Image from 'next/image'

export interface PatentDisplaySectionProps {}

interface CapabilityTag {
  line1: string
  line2: string
}

const capabilityTags: CapabilityTag[] = [
  { line1: 'Digital', line2: 'Twin' },
  { line1: 'EMS', line2: 'Dispatch' },
  { line1: 'AURA', line2: 'Intelligence' },
  { line1: 'Grid', line2: 'Control' },
]

const ChipIcon = (): React.JSX.Element => (
  <span className="inline-flex h-[1.9rem] w-[1.9rem] shrink-0 items-center justify-center">
    <Image src="/Icons/digital_twin.svg" alt="" width={32} height={32} aria-hidden="true" className="h-[1.8rem] w-[1.8rem] object-contain" />
  </span>
)

const PatentDisplaySection: React.FC<PatentDisplaySectionProps> = () => {
  return (
    <section id="patent-display" className="px-4 pb-8 pt-12 sm:px-6 sm:pb-10 sm:pt-14 lg:px-8 lg:pb-12 lg:pt-20">
      <div
        className="mx-auto flex w-full flex-col justify-center rounded-[0.95rem] border border-[#F2D4CE] px-4 py-[1.1rem] shadow-[0px_10px_19.9px_0px_#00000033] sm:px-5 sm:py-[1.35rem] lg:grid lg:min-h-[12.4rem] lg:grid-cols-[auto_1fr_auto] lg:items-center lg:px-[1.3rem] lg:py-[1.35rem]"
        style={{ background: 'linear-gradient(90deg, #F26C0D 0%, #C56D7C 41.47%, #8A70F8 100%)' }}
      >
        <div className="flex flex-col gap-[0.5rem] text-left">
          <p className="[font-family:var(--font-ibm-plex-sans)] text-[2.75rem] font-semibold leading-[0.92] tracking-[-0.06rem] text-[#FFF5EF] sm:text-[3.05rem] lg:text-[3.35rem]">
            14 +
          </p>
          <p className="[font-family:var(--font-ibm-plex-sans)] text-[1.62rem] font-semibold leading-[1] tracking-[-0.02rem] text-[#FFF5EF] sm:text-[1.78rem] lg:text-[1.92rem]">
            Patents
          </p>
          <p className="[font-family:var(--font-ibm-plex-sans)] text-[0.98rem] font-medium leading-[1.18] tracking-[0] text-[#FFEFE9] sm:text-[1.05rem]">
            <span className="block whitespace-nowrap">Filed and in progress across</span>
            <span className="block whitespace-nowrap">the Solvyn platform</span>
          </p>
        </div>

        <div className="mt-4 w-full max-w-[31rem] pt-[0.03rem] text-center lg:mt-0 lg:max-w-[34rem] lg:justify-self-center">
          <h3 className="[font-family:var(--font-ibm-plex-sans)] text-[1.22rem] font-medium leading-[1.22] tracking-[-0.01rem] text-[#FDF7FF] sm:text-[1.3rem] lg:text-[1.42rem]">
            <span className="block whitespace-nowrap">Covering Digital Twin Models, EMS Dispatch logic,</span>
            <span className="block whitespace-nowrap">AURA intelligence, and grid-interactive control systems.</span>
          </h3>
          <div className="mt-[0.9rem] flex w-full flex-nowrap justify-center gap-[0.58rem]">
            {capabilityTags.map((tag) => (
              <div
                key={`${tag.line1}-${tag.line2}`}
                className="inline-flex h-[4rem] items-center justify-center gap-[0.72rem] rounded-[0.65rem] border border-[#FFFFFF42] bg-[#FFFFFF24] px-[1rem]"
              >
                <ChipIcon />
                <span className="flex h-[1.85rem] flex-col justify-center text-left [font-family:var(--font-ibm-plex-sans)] text-[0.95rem] font-semibold leading-[0.95] tracking-[0] text-[#F4EAFE] sm:text-[1rem]">
                  <span>{tag.line1}</span>
                  <span>{tag.line2}</span>
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-4 flex shrink-0 flex-col items-center justify-center gap-[0.5rem] border-t border-white/25 pt-3.5 text-center lg:mt-0 lg:border-t-0 lg:pt-0">
          <Image
            src="/Icons/protection.svg"
            alt=""
            width={42}
            height={42}
            aria-hidden="true"
            className="h-[5.4rem] w-[5.4rem] sm:h-[6rem] sm:w-[6rem] lg:h-[6.8rem] lg:w-[6.8rem]"
          />
          <button
            type="button"
            className="[font-family:var(--font-ibm-plex-sans)] text-[1.2rem] font-semibold leading-[1] tracking-[-0.01rem] text-[#FFF8FF] sm:text-[1.3rem] lg:text-[1.4rem]"
          >
            View IP & patents
          </button>
        </div>
      </div>
    </section>
  )
}

export default PatentDisplaySection
