import type { Metadata } from 'next'
import AboutSgaCTASection from '@/app/components/sections/AboutSgaCTASection'
import AboutSgaExperienceSection from '@/app/components/sections/AboutSgaExperienceSection'
import AboutSgaHeroSection from '@/app/components/sections/AboutSgaHeroSection'
import AboutSgaLegacySection from '@/app/components/sections/AboutSgaLegacySection'
import AboutSgaMissionSection from '@/app/components/sections/AboutSgaMissionSection'
import AboutSgaOperateSection from '@/app/components/sections/AboutSgaOperateSection'
import AboutSgaTeamSection from '@/app/components/sections/AboutSgaTeamSection'
import FooterSection from '@/app/components/sections/FooterSection'
import { companyPages } from '@/app/data/pages.data'

export const metadata: Metadata = {
  title: 'About SGA | Smart Grid Analytics',
  description: companyPages['about-sga'].description,
}

export default function AboutSgaPage(): React.JSX.Element {
  return (
    <div className="flex min-h-[calc(100vh-3rem)] flex-col bg-[#FFFFFF]">
      <AboutSgaHeroSection />
      <AboutSgaExperienceSection />
      <AboutSgaLegacySection />
      <AboutSgaOperateSection />
      <AboutSgaMissionSection />
      <AboutSgaTeamSection />
      <AboutSgaCTASection />
      <FooterSection />
    </div>
  )
}
