import type { Metadata } from 'next'
import SitePage from '@/app/components/pages/SitePage'
import { companyPages } from '@/app/data/pages.data'

export const metadata: Metadata = {
  title: 'Careers | Smart Grid Analytics',
  description: companyPages.careers.description,
}

export default function CareersPage(): React.JSX.Element {
  return <SitePage {...companyPages.careers} />
}
