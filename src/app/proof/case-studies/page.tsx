import type { Metadata } from 'next'
import SitePage from '@/app/components/pages/SitePage'
import { proofPages } from '@/app/data/pages.data'

export const metadata: Metadata = {
  title: 'Case Studies | Smart Grid Analytics',
  description: proofPages['case-studies'].description,
}

export default function CaseStudiesPage(): React.JSX.Element {
  return <SitePage {...proofPages['case-studies']} />
}
