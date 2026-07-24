import React from 'react'
import Link from 'next/link'

export interface PrivacyPolicySectionProps {}

const sections = [
  {
    id: 'what-we-collect',
    label: 'A1',
    title: 'What we collect on the website',
    items: [
      'Contact form details (name, email, phone, company, message).',
      'Usage data & diagnostics (IP address, device/browser data, pages viewed, timestamps).',
      'Optional marketing preferences.',
      'We do not sell personal data.',
    ],
  },
  {
    id: 'why-we-collect',
    label: 'A2',
    title: 'Why we collect it (purposes)',
    items: [
      'Respond to your inquiries and provide requested information (contract/legitimate interest).',
      'Secure, operate and improve the site (legitimate interest/security).',
      'Send product updates/marketing only with your consent (unsubscribe anytime).',
      'GDPR legal bases: Art. 6(1)(a), (b), (f).',
    ],
  },
  {
    id: 'cookies',
    label: 'A3',
    title: 'Cookies & similar tech',
    items: [
      'We use strictly necessary cookies and, with consent where required (e.g., EU/UK), analytics/functional cookies.',
      'The banner lets you Accept all, Reject non-essential, or Manage choices.',
      'A cookie list with purposes and lifetimes is linked from the banner.',
    ],
  },
  {
    id: 'sharing',
    label: 'A4',
    title: 'Sharing',
    items: [
      'Limited sharing with processors (hosting, email, analytics, security).',
      'No cross-context behavioural advertising.',
    ],
  },
  {
    id: 'retention',
    label: 'A5',
    title: 'Retention',
    items: [
      'Form submissions: 24 months (or sooner on deletion request).',
      'Web logs (security): ≥ 180 days per CERT-In; analytics data per tool defaults, then aggregated.',
    ],
  },
  {
    id: 'rights',
    label: 'A6',
    title: 'Your rights & choices',
    items: [
      'Access, correct, or delete your data.',
      'Withdraw consent and object to non-essential processing.',
      'EU/UK users also have portability and supervisory-authority rights.',
      'India users have grievance redressal/erasure aligned with DPDP-ready flows.',
    ],
  },
  {
    id: 'how-to-exercise',
    label: 'A7',
    title: 'How to exercise',
    items: [
      'Email to cybersecuritysg@sgrids.io.',
      'We verify identity before fulfilling requests.',
    ],
  },
] as const

const PrivacyPolicySection: React.FC<PrivacyPolicySectionProps> = () => {
  return (
    <>
      <section className="px-4 pb-8 pt-6 sm:px-6 sm:pb-8 sm:pt-8 lg:px-8 lg:pb-10 lg:pt-10">
        <div className="mx-auto w-full max-w-7xl">
          <div className="mb-4 inline-flex items-center justify-center rounded-full bg-[#FF7F0026] px-3.5 py-1.5">
            <span className="[font-family:var(--font-ibm-plex-sans)] text-[0.625rem] font-bold uppercase leading-[1] tracking-[0.015rem] text-[#FF7F00] sm:text-[0.6875rem]">
              Legal
            </span>
          </div>

          <h1 className="max-w-[40rem] [font-family:var(--font-ibm-plex-sans)] text-2xl font-bold leading-[1.2] tracking-[-0.06rem] text-[#1C1B1B] sm:text-3xl lg:text-[2.75rem] lg:leading-[1.2] lg:tracking-[-0.1rem]">
            Privacy Policy
          </h1>

          <p className="mt-5 max-w-[42rem] [font-family:var(--font-ibm-plex-sans)] text-sm leading-relaxed text-[#7F7F7F] sm:text-base">
            How Smart Grid Analytics collects, uses, and protects personal data when you use our
            website.
          </p>
        </div>
      </section>

      <section className="border-t border-[#EFE6DF] px-4 py-10 sm:px-6 sm:py-12 lg:px-8 lg:py-14">
        <div className="mx-auto w-full max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,16rem)_minmax(0,1fr)] lg:gap-14">
            <aside className="lg:sticky lg:top-20 lg:self-start">
              <h2 className="[font-family:var(--font-ibm-plex-sans)] text-[0.75rem] font-bold uppercase tracking-[0.06em] text-[#FF7F00]">
                Who we are
              </h2>
              <p className="mt-3 [font-family:var(--font-ibm-plex-sans)] text-[0.9375rem] font-semibold leading-snug text-[#1C1B1B]">
                Smart Grid Analytics Private Limited
              </p>
              <p className="mt-2 [font-family:var(--font-ibm-plex-sans)] text-sm leading-relaxed text-[#7F7F7F]">
                Registered Office: MSM Plaza, Banaswadi, Outer Ring Road, Bengaluru, 560043, India.
              </p>
              <p className="mt-5 [font-family:var(--font-ibm-plex-sans)] text-sm leading-relaxed text-[#7F7F7F]">
                Questions or requests:{' '}
                <a
                  href="mailto:cybersecuritysg@sgrids.io"
                  className="font-medium text-[#FF7F00] transition-colors hover:text-[#E67300]"
                >
                  cybersecuritysg@sgrids.io
                </a>
              </p>
            </aside>

            <div className="flex flex-col gap-10 sm:gap-12">
              {sections.map((section) => (
                <article key={section.id} id={section.id} className="scroll-mt-24">
                  <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                    <span className="[font-family:var(--font-ibm-plex-sans)] text-[0.75rem] font-bold uppercase tracking-[0.06em] text-[#FF7F00]">
                      {section.label}
                    </span>
                    <h2 className="[font-family:var(--font-ibm-plex-sans)] text-xl font-bold leading-snug tracking-[-0.02rem] text-[#1C1B1B] sm:text-[1.375rem]">
                      {section.title}
                    </h2>
                  </div>

                  <ul className="mt-4 space-y-3 border-l border-[#EFE6DF] pl-4 sm:pl-5">
                    {section.items.map((item) => (
                      <li
                        key={item}
                        className="relative [font-family:var(--font-ibm-plex-sans)] text-sm leading-relaxed text-[#4A4A4A] sm:text-[0.9375rem] sm:leading-[1.65]"
                      >
                        <span
                          aria-hidden="true"
                          className="absolute -left-[1.15rem] top-[0.55em] h-1.5 w-1.5 rounded-full bg-[#FF7F00] sm:-left-[1.35rem]"
                        />
                        {item.includes('cybersecuritysg@sgrids.io') ? (
                          <>
                            Email to{' '}
                            <a
                              href="mailto:cybersecuritysg@sgrids.io"
                              className="font-medium text-[#FF7F00] transition-colors hover:text-[#E67300]"
                            >
                              cybersecuritysg@sgrids.io
                            </a>
                            .
                          </>
                        ) : (
                          item
                        )}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}

              <p className="border-t border-[#EFE6DF] pt-8 [font-family:var(--font-ibm-plex-sans)] text-sm leading-relaxed text-[#7F7F7F]">
                For more about Smart Grid Analytics, visit our{' '}
                <Link
                  href="/company/about-sga"
                  className="font-medium text-[#FF7F00] transition-colors hover:text-[#E67300]"
                >
                  About page
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default PrivacyPolicySection
