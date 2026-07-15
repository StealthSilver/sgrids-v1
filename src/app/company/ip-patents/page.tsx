import type { Metadata } from 'next'
import IpPatentsDomainsSection from '@/app/components/sections/IpPatentsDomainsSection'
import IpPatentsFiledSection from '@/app/components/sections/IpPatentsFiledSection'
import IpPatentsGrantedSection from '@/app/components/sections/IpPatentsGrantedSection'
import IpPatentsHeroSection from '@/app/components/sections/IpPatentsHeroSection'
import IpPatentsMattersSection from '@/app/components/sections/IpPatentsMattersSection'
import IpPatentsStackSection from '@/app/components/sections/IpPatentsStackSection'
import IpPatentsWhyYouSection from '@/app/components/sections/IpPatentsWhyYouSection'
import FooterSection from '@/app/components/sections/FooterSection'
import { companyPages } from '@/app/data/pages.data'

export const metadata: Metadata = {
  title: 'IP & Patents | Smart Grid Analytics',
  description: companyPages['ip-patents'].description,
}

export default function IpPatentsPage(): React.JSX.Element {
  return (
    <div className="flex min-h-[calc(100vh-3rem)] flex-col bg-[#FFFFFF]">
      <IpPatentsHeroSection />
      <IpPatentsFiledSection />
      <IpPatentsMattersSection />
      <IpPatentsDomainsSection />
      <IpPatentsGrantedSection />
      <IpPatentsStackSection />
      <IpPatentsWhyYouSection />
      <FooterSection />
    </div>
  )
}
