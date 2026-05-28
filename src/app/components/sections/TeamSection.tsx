import React from 'react'
import Image from 'next/image'

export interface TeamSectionProps {}

interface TeamMemberCard {
  id: 'kumar' | 'venkata' | 'tirumaleswara'
  roleText: string
  subtitleText: string
}

const teamCards: TeamMemberCard[] = [
  {
    id: 'kumar',
    roleText: 'Kumar M',
    subtitleText: 'Founder & CEO',
  },
  {
    id: 'venkata',
    roleText: 'Venkata Krishnan',
    subtitleText: 'Co-founder & CGO',
  },
  {
    id: 'tirumaleswara',
    roleText: 'Tirumaleswara',
    subtitleText: 'CTO',
  },
]

const TeamSection: React.FC<TeamSectionProps> = () => {
  return (
    <section id="team" className="px-4 py-10 sm:px-6 lg:px-8 lg:py-20">
      <div className="mx-auto grid w-full max-w-[1180px] gap-8 lg:grid-cols-[1fr_1.55fr] lg:items-start">
        <div className="max-w-[470px]">
          <p className="[font-family:var(--font-ibm-plex-sans)] text-[0.875rem] font-medium uppercase leading-[1] tracking-[0.02rem] text-[#FF7F00] sm:text-[0.9375rem]">
            THE TEAM
          </p>
          <h2 className="mt-4 [font-family:var(--font-ibm-plex-sans)] text-[1.5rem] font-bold leading-[1.2] tracking-[-0.03rem] text-[#1C1B1B] sm:text-[1.9rem] lg:text-[2.35rem] lg:leading-[1.16] lg:tracking-[-0.05rem]">
            <span className="block">Built By Engineers.</span>
            <span className="block">Guided By Decades Of</span>
            <span className="block text-[#F58D27]">Grid Experience.</span>
          </h2>
          <p className="mt-4 max-w-[450px] [font-family:var(--font-ibm-plex-sans)] text-[15px] leading-[1.35] text-black">
            A leadership team with deep engineering roots and a long track record in building critical energy systems
          </p>
        </div>

        <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-3">
          {teamCards.map((card) => {
            return (
              <article
                key={card.id}
                className="group relative h-[380px] overflow-hidden rounded-[12px] border border-[#ECECEC] shadow-[-3.7px_3.7px_9.43px_0px_#FF6A0033]"
              >
                <Image
                  src="/Images/team_1.png"
                  alt="Team member portrait"
                  fill
                  sizes="(max-width: 640px) 100vw, 33vw"
                  className="object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0A0A0ACC]" />

                <div className="absolute bottom-4 left-4 right-4 transition-all duration-300 ease-out group-hover:translate-y-6 group-hover:opacity-0">
                  <p className="[font-family:var(--font-ibm-plex-sans)] text-[1.4rem] font-medium leading-[1] tracking-[-0.02rem] text-white">
                    {card.roleText}
                  </p>
                  <p className="mt-1 [font-family:var(--font-ibm-plex-sans)] text-[0.82rem] font-normal leading-[1] text-[#F5F5F5]">
                    {card.subtitleText}
                  </p>
                </div>

                <div
                  className="absolute inset-0 translate-y-full transition-transform duration-300 ease-out group-hover:translate-y-0"
                  style={{ background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.35) 100%)' }}
                >
                  <div className="flex h-full items-start p-5">
                    <ul className="space-y-5 [font-family:var(--font-ibm-plex-sans)] text-[0.82rem] font-normal leading-[1.25] text-white">
                      <li className="flex items-start gap-2">
                        <span className="mt-[0.18rem] h-[6px] w-[6px] shrink-0 rounded-full bg-white" />
                        <span>20+ years in renewable innovation and grid automation.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-[0.18rem] h-[6px] w-[6px] shrink-0 rounded-full bg-white" />
                        <span>Founded Armax in 2005, then SGA.</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default TeamSection
