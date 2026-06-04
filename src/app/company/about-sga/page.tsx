import type { Metadata } from 'next'
import SitePage from '@/app/components/pages/SitePage'
import { companyPages } from '@/app/data/pages.data'

export const metadata: Metadata = {
  title: 'About SGA | Smart Grid Analytics',
  description: companyPages['about-sga'].description,
}

export default function AboutSgaPage(): React.JSX.Element {
  return <SitePage {...companyPages['about-sga']} />
}
