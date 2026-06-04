import type { Metadata } from 'next'
import SitePage from '@/app/components/pages/SitePage'
import { companyPages } from '@/app/data/pages.data'

export const metadata: Metadata = {
  title: 'IP & Patents | Smart Grid Analytics',
  description: companyPages['ip-patents'].description,
}

export default function IpPatentsPage(): React.JSX.Element {
  return <SitePage {...companyPages['ip-patents']} />
}
