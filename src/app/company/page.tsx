import type { Metadata } from 'next'
import SitePage from '@/app/components/pages/SitePage'
import { companyPages } from '@/app/data/pages.data'

export const metadata: Metadata = {
  title: 'Company | Smart Grid Analytics',
  description: companyPages.index.description,
}

export default function CompanyPage(): React.JSX.Element {
  return <SitePage {...companyPages.index} />
}
