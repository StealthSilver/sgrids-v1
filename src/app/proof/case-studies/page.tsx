import type { Metadata } from 'next'
import BookDemoCTASection from '@/app/components/sections/BookDemoCTASection'
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
      <BookDemoCTASection
        id="case-studies-cta"
        className="px-4 py-8 sm:px-6 sm:py-8 lg:px-8 lg:py-10"
        title="Want to see what Solvyn can do for your plant?"
        description="Talk To Our Team About Your Asset Type, Grid Environment, And Commercial Objectives. We'll Show You The Most Relevant Deployments."
      />
      <FooterSection />
    </div>
  )
}
