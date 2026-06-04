import type { Metadata } from 'next'
import SitePage from '@/app/components/pages/SitePage'
import { proofPages } from '@/app/data/pages.data'

export const metadata: Metadata = {
  title: 'Proof | Smart Grid Analytics',
  description: proofPages.index.description,
}

export default function ProofPage(): React.JSX.Element {
  return <SitePage {...proofPages.index} />
}
