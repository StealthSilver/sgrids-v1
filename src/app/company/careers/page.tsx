import type { Metadata } from 'next'
import CareersCTASection from '@/app/components/sections/CareersCTASection'
import CareersHeroSection from '@/app/components/sections/CareersHeroSection'
import CareersLifeSection from '@/app/components/sections/CareersLifeSection'
import CareersOpeningsSection from '@/app/components/sections/CareersOpeningsSection'
import CareersWhyJoinSection from '@/app/components/sections/CareersWhyJoinSection'
import FooterSection from '@/app/components/sections/FooterSection'
import { companyPages } from '@/app/data/pages.data'

export const metadata: Metadata = {
  title: 'Careers | Smart Grid Analytics',
  description: companyPages.careers.description,
}

export default function CareersPage(): React.JSX.Element {
  return (
    <div className="flex min-h-[calc(100vh-3rem)] flex-col bg-[#FFFFFF]">
      <CareersHeroSection />
      <CareersWhyJoinSection />
      <CareersOpeningsSection />
      <CareersLifeSection />
      <CareersCTASection />
      <FooterSection />
    </div>
  )
}
