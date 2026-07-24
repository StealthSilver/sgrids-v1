import type { Metadata } from 'next'
import FooterSection from '@/app/components/sections/FooterSection'
import PrivacyPolicySection from '@/app/components/sections/PrivacyPolicySection'

export const metadata: Metadata = {
  title: 'Privacy Policy | Smart Grid Analytics',
  description:
    'Privacy Policy for Smart Grid Analytics Private Limited. Learn what data we collect on our website, why we collect it, cookie use, sharing, retention, and your rights.',
}

export default function PrivacyPolicyPage(): React.JSX.Element {
  return (
    <div className="flex min-h-[calc(100vh-3rem)] flex-col bg-[#FFFFFF]">
      <PrivacyPolicySection />
      <FooterSection />
    </div>
  )
}
