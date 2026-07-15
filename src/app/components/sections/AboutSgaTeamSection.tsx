import React from 'react'
import Image from 'next/image'

export interface AboutSgaTeamSectionProps {}

const bio =
  "20+ years of expertise in renewables with a deep background in controls automation. Founded SGA to build the unified operating infrastructure that renewable energy needs. Primary inventor behind SGA's patent portfolio including patented Solar and BESS Digital Twins, EMS dispatch logic, and the AURA intelligence architecture."

const stats = [
  {
    value: '20+',
    label: 'Years of Experience',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="h-8 w-8 shrink-0 text-[#FF7F00] sm:h-9 sm:w-9">
        <path
          d="M12 2.75 13.7 5.9l3.5.5-2.53 2.47.6 3.48L12 10.9l-3.27 1.45.6-3.48L6.8 6.4l3.5-.5L12 2.75Z"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinejoin="round"
        />
        <path
          d="M7.5 13.5 6 20.25l6-2.25 6 2.25-1.5-6.75"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="12" cy="8.25" r="2.1" stroke="currentColor" strokeWidth="1.3" />
      </svg>
    ),
  },
  {
    value: '14+',
    label: 'Patents Filed',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="h-8 w-8 shrink-0 text-[#FF7F00] sm:h-9 sm:w-9">
        <path
          d="M7 3.5h7.2L17.5 7v13.5H7V3.5Z"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinejoin="round"
        />
        <path d="M14.2 3.5V7h3.3M9.5 11h5M9.5 14h5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
        <circle cx="12" cy="18" r="1.6" stroke="currentColor" strokeWidth="1.3" />
      </svg>
    ),
  },
  {
    value: 'Industry Firsts',
    label: "India's First Hybrid EMS",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="h-8 w-8 shrink-0 text-[#FF7F00] sm:h-9 sm:w-9">
        <path
          d="M8.2 4.2C6.4 5.5 5.25 7.55 5.25 9.9c0 2.55 1.45 4.7 3.55 5.85L12 20.5l3.2-4.75c2.1-1.15 3.55-3.3 3.55-5.85 0-2.35-1.15-4.4-2.95-5.7"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
        />
        <path
          d="M9.1 4.55C10 3.85 11 3.5 12 3.5s2 .35 2.9 1.05"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
        />
        <path
          d="M12 7.4 12.85 9.2l1.95.28-1.4 1.37.33 1.94L12 11.85l-1.73.94.33-1.94-1.4-1.37 1.95-.28L12 7.4Z"
          fill="currentColor"
        />
      </svg>
    ),
  },
] as const

const members = [
  {
    name: 'Venkata Krishnan',
    title: 'Co-Founder & CGO',
    image: '/Images/Ellipse 7 (1).png',
    bio: '20+ years in renewables with a background in mechanical engineering. Specialises in growth strategies, business development, and market expansion.',
    expertise: 'Renewable Energy & Growth Strategy',
  },
  {
    name: 'Thirumaleswar Reddy',
    title: 'Co-Founder & CTO',
    image: '/Images/Ellipse 7 (2).png',
    bio: '25+ years in software development and IT infrastructure. Expert in digital solutions architecting Solvyn for utility-grade reliability and scalability.',
    expertise: 'Software Development & IT Infrastructure',
  },
  {
    name: 'Pankaj Ghai',
    title: 'Strategic Advisor',
    image: '/Images/Ellipse 7.png',
    bio: '20+ years in private equity and climate-focused consulting. Expert in North American expansion, cash flow optimisation, and strategic scaling.',
    expertise: 'Private Equity & Climate Infrastructure',
  },
] as const

const AboutSgaTeamSection: React.FC<AboutSgaTeamSectionProps> = () => {
  return (
    <section className="px-4 py-10 sm:px-6 lg:px-8 lg:py-20">
      <div className="mx-auto w-full max-w-7xl">
        <p className="[font-family:var(--font-ibm-plex-sans)] text-[0.875rem] font-medium uppercase leading-[1] tracking-[0.02rem] text-[#FF7F00] sm:text-[0.9375rem]">
          Our Team
        </p>
        <h2 className="mt-4 max-w-[40rem] [font-family:var(--font-ibm-plex-sans)] text-[1.5rem] font-bold leading-[1.2] tracking-[-0.03rem] text-[#1C1B1B] sm:text-[1.9rem] lg:text-[2.35rem] lg:leading-[1.16] lg:tracking-[-0.05rem]">
          The team building the platform.
        </h2>

        <article className="mt-8 rounded-[14px] border border-[#E8C4A0] bg-[#FAFAFA] p-4 shadow-[0px_4px_12px_0px_#FF6A0014] sm:mt-10 sm:p-6 lg:mt-12 lg:p-8">
          <div className="grid items-start gap-6 lg:grid-cols-[minmax(0,17.5rem)_1fr] lg:gap-8 xl:grid-cols-[minmax(0,19.5rem)_1fr] xl:gap-10">
            <div className="mx-auto w-full max-w-[17.5rem] overflow-hidden rounded-[14px] border border-[#FF7F00] bg-white lg:mx-0 lg:max-w-none">
              <Image
                src="/Images/kumar-team.png"
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

              <div className="mt-6 rounded-[14px] border border-[#E8C4A0] bg-[#FFFFFF] px-4 py-4 sm:mt-8 sm:px-5 sm:py-5 lg:mt-auto lg:pt-5">
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-3 sm:gap-0">
                  {stats.map((stat, index) => (
                    <div
                      key={stat.label}
                      className={`flex items-start gap-3 sm:px-3 xl:px-4 ${
                        index > 0 ? 'sm:border-l sm:border-[#E0D8D0]' : ''
                      }`}
                    >
                      {stat.icon}
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
                className="h-[6.5rem] w-[6.5rem] object-contain sm:h-[7rem] sm:w-[7rem]"
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
