import React from 'react'
import Image from 'next/image'

export interface TeamSectionProps {}

interface TeamMemberCard {
  name: string
  title: string
  image: string
  bio: string
}

const teamCards: TeamMemberCard[] = [
  {
    name: 'Kumar M',
    title: 'Founder & CEO',
    image: '/Images/team-kumar-m.png',
    bio: "20+ years of expertise in renewables with a deep background in controls automation. Founded SGA to build the unified operating infrastructure that renewable energy needs. Primary inventor behind SGA's patent portfolio including patented Solar and BESS Digital Twins, EMS dispatch logic, and the AURA intelligence architecture.",
  },
  {
    name: 'Venkata Krishnan',
    title: 'Co-Founder & CGO',
    image: '/Images/tam-venkata-krishnan.png',
    bio: '20+ years in renewables with a background in mechanical engineering. Specialises in growth strategies, business development, and market expansion.',
  },
  {
    name: 'Thirumaleswar Reddy',
    title: 'Co-Founder & CTO',
    image: '/Images/team-thirumaleswar-reddy-v2.png',
    bio: '25+ years in software development and IT infrastructure. Expert in digital solutions architecting Solvyn for utility-grade reliability and scalability.',
  },
  {
    name: 'Pankaj Ghai',
    title: 'Strategic Advisor',
    image: '/Images/team-pankaj-ghai-v2.png',
    bio: '20+ years in private equity and climate-focused consulting. Expert in North American expansion, cash flow optimisation, and strategic scaling.',
  },
]

const TeamSection: React.FC<TeamSectionProps> = () => {
  return (
    <section id="team" className="px-4 py-8 sm:px-6 lg:px-8 lg:py-16">
      <div className="mx-auto w-full max-w-7xl">
        <p className="[font-family:var(--font-ibm-plex-sans)] text-[0.875rem] font-medium uppercase leading-[1] tracking-[0.02rem] text-[#FF7F00] sm:text-[0.9375rem]">
          THE TEAM
        </p>

        <h2 className="mt-4 max-w-[760px] [font-family:var(--font-ibm-plex-sans)] text-[1.5rem] font-bold leading-[1.2] tracking-[-0.03rem] text-[#1C1B1B] sm:text-[1.9rem] lg:text-[2.35rem] lg:leading-[1.16] lg:tracking-[-0.05rem]">
          <span className="block">Built By Engineers.</span>
          <span className="block">
            Guided By Decades Of <span className="text-[#FF7F00]">Grid Experience.</span>
          </span>
        </h2>

        <p className="mt-4 max-w-[620px] [font-family:var(--font-ibm-plex-sans)] text-[15px] leading-[1.35] text-black">
          A leadership team with deep engineering roots and a long track record in building critical energy systems
        </p>

        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {teamCards.map((card) => (
            <article
              key={card.name}
              className="group relative h-[420px] overflow-hidden rounded-[12px] border border-[#ECECEC] shadow-[-3.7px_3.7px_9.43px_0px_#FF6A0033] transition-shadow duration-300 hover:shadow-[-3.7px_6px_16px_0px_#FF6A0040]"
            >
              <Image
                src={card.image}
                alt={card.name}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 25vw"
                className="object-cover object-top"
              />

              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0A0A0ACC]" />

              <div className="absolute bottom-4 left-4 right-4 transition-all duration-300 ease-out group-hover:translate-y-6 group-hover:opacity-0">
                <p className="[font-family:var(--font-ibm-plex-sans)] text-[1.4rem] font-medium leading-[1] tracking-[-0.02rem] text-white">
                  {card.name}
                </p>
                <p className="mt-1 [font-family:var(--font-ibm-plex-sans)] text-[0.82rem] font-normal leading-[1] text-[#F5F5F5]">
                  {card.title}
                </p>
              </div>

              <div
                className="absolute inset-0 translate-y-full transition-transform duration-300 ease-out group-hover:translate-y-0"
                style={{
                  background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.35) 100%)',
                }}
              >
                <div className="flex h-full items-start p-5">
                  <p className="[font-family:var(--font-ibm-plex-sans)] text-[0.82rem] font-normal leading-[1.45] text-white">
                    {card.bio}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TeamSection
