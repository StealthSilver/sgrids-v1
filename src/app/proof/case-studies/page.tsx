import type { Metadata } from 'next'
import CaseStudiesCTASection from '@/app/components/sections/CaseStudiesCTASection'
import CaseStudiesFeaturedSection from '@/app/components/sections/CaseStudiesFeaturedSection'
import CaseStudiesGridSection from '@/app/components/sections/CaseStudiesGridSection'
import CaseStudiesHeroSection from '@/app/components/sections/CaseStudiesHeroSection'
import CaseStudiesProofSection from '@/app/components/sections/CaseStudiesProofSection'
import FooterSection from '@/app/components/sections/FooterSection'

export const metadata: Metadata = {
  title: 'Case Studies | Smart Grid Analytics',
  description:
    "From India's first hybrid EMS to grid-scale BESS deployments in the USA every Solvyn deployment is a proof point for what intelligent energy control can deliver.",
}

export default function CaseStudiesPage(): React.JSX.Element {
  return (
    <div className="flex min-h-[calc(100vh-3rem)] flex-col bg-[#FFFFFF]">
      <CaseStudiesHeroSection />
      <CaseStudiesFeaturedSection />
      <CaseStudiesGridSection />
      <CaseStudiesProofSection />
      <CaseStudiesCTASection />
      <FooterSection />
    </div>
  )
}
