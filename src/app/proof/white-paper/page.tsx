import type { Metadata } from 'next'
import SitePage from '@/app/components/pages/SitePage'
import { proofPages } from '@/app/data/pages.data'

export const metadata: Metadata = {
  title: 'White Paper | Smart Grid Analytics',
  description: proofPages['white-paper'].description,
}

export default function WhitePaperPage(): React.JSX.Element {
  return <SitePage {...proofPages['white-paper']} />
}
