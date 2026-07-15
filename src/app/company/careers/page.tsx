import type { Metadata } from 'next'
import CareersHeroSection from '@/app/components/sections/CareersHeroSection'
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
      <FooterSection />
    </div>
  )
}
