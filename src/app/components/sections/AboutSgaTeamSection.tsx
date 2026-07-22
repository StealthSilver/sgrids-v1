import { assetUrl } from '@/lib/cdn'
import React from 'react'
import Image from 'next/image'

export interface AboutSgaTeamSectionProps {}

const bio =
  "20+ years of expertise in renewables with a deep background in controls automation. Founded SGA to build the unified operating infrastructure that renewable energy needs. Primary inventor behind SGA's patent portfolio including patented Solar and BESS Digital Twins, EMS dispatch logic, and the AURA intelligence architecture."

const stats = [
  {
    value: '20+',
    label: 'Years of Experience',
    image: assetUrl('/assets/about-sga/images/team-kumar-1.png'),
  },
  {
    value: '14+',
    label: 'Patents Filed',
    image: assetUrl('/assets/about-sga/images/team-kumar-2.png'),
  },
  {
    value: 'Industry Firsts',
    label: "India's First Hybrid EMS",
    image: assetUrl('/assets/about-sga/images/team-kumar-3.png'),
  },
] as const

const members = [
  {
    name: 'Venkata Krishnan',
    title: 'Co-Founder & CGO',
    image: assetUrl('/assets/about-sga/images/team-venkat.png'),
    bio: '20+ years in renewables with a background in mechanical engineering. Specialises in growth strategies, business development, and market expansion.',
    expertise: 'Renewable Energy & Growth Strategy',
  },
  {
    name: 'Thirumaleswar Reddy',
    title: 'Co-Founder & CTO',
    image: assetUrl('/assets/about-sga/images/team-tirumala.png'),
    bio: '25+ years in software development and IT infrastructure. Expert in digital solutions architecting Solvyn for utility-grade reliability and scalability.',
    expertise: 'Software Development & IT Infrastructure',
  },
  {
    name: 'Pankaj Ghai',
    title: 'Strategic Advisor',
    image: assetUrl('/assets/about-sga/images/team-pankaj.png'),
    bio: '20+ years in private equity and climate-focused consulting. Expert in North American expansion, cash flow optimisation, and strategic scaling.',
    expertise: 'Private Equity & Climate Infrastructure',
  },
] as const

const AboutSgaTeamSection: React.FC<AboutSgaTeamSectionProps> = () => {
  return (
    <section className="px-4 py-8 sm:px-6 sm:py-8 lg:px-8 lg:py-10">
      <div className="mx-auto w-full max-w-7xl">
        <p className="[font-family:var(--font-ibm-plex-sans)] text-[0.875rem] font-medium uppercase leading-[1] tracking-[0.02rem] text-[#FF7F00] sm:text-[0.9375rem]">
          Our Team
        </p>
        <h2 className="mt-4 max-w-[40rem] [font-family:var(--font-ibm-plex-sans)] text-[1.5rem] font-bold leading-[1.2] tracking-[-0.03rem] text-[#1C1B1B] sm:text-[1.9rem] lg:text-[2.35rem] lg:leading-[1.16] lg:tracking-[-0.05rem]">
          The team building the platform.
        </h2>

        <article className="mt-8 rounded-[14px] border border-[#E8C4A0] bg-[#FFFFFF] p-4 shadow-[0px_4px_12px_0px_#FF6A0014] sm:mt-10 sm:p-6 lg:mt-12 lg:p-8">
          <div className="grid items-start gap-6 lg:grid-cols-[minmax(0,17.5rem)_1fr] lg:gap-8 xl:grid-cols-[minmax(0,19.5rem)_1fr] xl:gap-10">
            <div className="mx-auto w-full max-w-[17.5rem] overflow-hidden rounded-[14px] border border-[#FF7F00] bg-white lg:mx-0 lg:max-w-none">
              <Image
                src={assetUrl('/assets/about-sga/images/team-kumar.png')}
                alt="Kumar M, Founder and Chief Executive Officer"
                width={409}
                height={441}
                className="h-auto w-full object-cover object-top"
                priority={false}
              />
            </div>

            <div className="flex min-w-0 flex-col">
              <h3 className="[font-family:var(--font-ibm-plex-sans)] text-[1.5rem] font-bold leading-[1.15] tracking-[-0.02rem] text-[#1C1B1B] sm:text-[1.75rem] lg:text-[2rem]">
                Kumar M
              </h3>
              <p className="mt-2 [font-family:var(--font-ibm-plex-sans)] text-[0.9375rem] font-semibold leading-[1.3] text-[#FF7F00] sm:text-[1.0625rem]">
                Founder &amp; Chief Executive Officer
              </p>
              <p className="mt-4 max-w-[42rem] [font-family:var(--font-ibm-plex-sans)] text-[0.875rem] leading-[1.5] text-[#1C1B1B] sm:text-[0.9375rem] lg:mt-5">
                {bio}
              </p>

              <div className="mt-9 rounded-[14px] border border-[#FF7F00] bg-[#FFFFFF] px-4 py-4 sm:mt-11 sm:px-5 sm:py-5 lg:mt-10 lg:pt-5">
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-3 sm:gap-0">
                  {stats.map((stat, index) => (
                    <div
                      key={stat.label}
                      className={`flex items-start gap-3 sm:px-3 xl:px-4 ${
                        index > 0 ? 'sm:border-l sm:border-[#E0D8D0]' : ''
                      }`}
                    >
                      <Image
                        src={stat.image}
                        alt=""
                        width={64}
                        height={64}
                        className="h-8 w-8 shrink-0 object-contain sm:h-9 sm:w-9"
                      />
                      <div className="min-w-0">
                        <p className="[font-family:var(--font-ibm-plex-sans)] text-[1rem] font-bold leading-[1.15] tracking-[-0.01rem] text-[#FF7F00] sm:text-[1.0625rem]">
                          {stat.value}
                        </p>
                        <p className="mt-1 [font-family:var(--font-ibm-plex-sans)] text-[0.6875rem] leading-[1.3] text-[#1C1B1B] sm:text-[0.75rem]">
                          {stat.label}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </article>

        <div className="mt-4 grid grid-cols-1 gap-3 sm:mt-5 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
          {members.map((member) => (
            <article
              key={member.name}
              className="flex flex-col rounded-[14px] border border-[#E8E8E8] bg-[#F5F5F5] px-5 py-6 sm:px-6 sm:py-7 lg:px-7 lg:py-8"
            >
              <Image
                src={member.image}
                alt={member.name}
                width={250}
                height={250}
                className="h-[8.5rem] w-[8.5rem] object-contain sm:h-[9.5rem] sm:w-[9.5rem]"
              />
              <h3 className="mt-5 [font-family:var(--font-ibm-plex-sans)] text-[1.25rem] font-bold leading-[1.2] tracking-[-0.02rem] text-[#1C1B1B] sm:text-[1.375rem]">
                {member.name}
              </h3>
              <p className="mt-1.5 [font-family:var(--font-ibm-plex-sans)] text-[0.9375rem] leading-[1.3] text-[#1C1B1B] sm:text-[1rem]">
                {member.title}
              </p>
              <p className="mt-4 flex-1 [font-family:var(--font-ibm-plex-sans)] text-[0.875rem] leading-[1.5] text-[#1C1B1B] sm:text-[0.9375rem]">
                {member.bio}
              </p>
              <p className="mt-6 [font-family:var(--font-ibm-plex-sans)] text-[0.8125rem] leading-[1.4] text-[#1C1B1B] sm:text-[0.875rem]">
                <span className="font-bold">Expertise:</span> {member.expertise}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AboutSgaTeamSection
