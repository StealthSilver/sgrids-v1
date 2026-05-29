import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { siteConfig } from '@/data/site.data'

export interface FooterSectionProps {}

interface FooterLink {
  label: string
  href: string
}

const footerLinkClasses =
  'inline-flex [font-family:var(--font-ibm-plex-sans)] text-[0.875rem] font-medium leading-[1.35] text-[#808080] transition-colors duration-200 hover:text-[#FF7F00]'

const platformLinks: FooterLink[] = [
  { label: 'Solvyn Architecture', href: '#solvyn' },
  { label: 'Solvyn Studio', href: '#solvyn-studio' },
  { label: 'Digital Twin', href: '#about' },
  { label: 'AURA Intelligence', href: '#about' },
  { label: 'EMS & SCADA', href: '#about' },
]

const companyLinks: FooterLink[] = [
  { label: 'About', href: '#about' },
  { label: 'Asset Coverage', href: '#asset-coverage' },
  { label: 'The Team', href: '#team' },
  { label: 'Patents & IP', href: '#patent-display' },
  { label: 'Why SGA', href: '#reason' },
]

const legalLinkClasses =
  'inline-flex [font-family:var(--font-ibm-plex-sans)] text-[0.8125rem] font-normal leading-[1.35] text-[#808080] transition-colors duration-200 hover:text-[#FF7F00]'

const legalLinks: FooterLink[] = [
  { label: 'Privacy Policy', href: '#privacy-policy' },
  { label: 'Terms and Conditions', href: '#terms-and-conditions' },
]

interface SocialLink {
  label: string
  href: string
  icon: React.ReactNode
}

const socialIconClasses =
  'inline-flex h-9 w-9 items-center justify-center rounded-full border border-[#EFE6DF] text-[#808080] transition-colors duration-200 hover:border-[#FF7F0052] hover:text-[#FF7F00]'

const socialLinks: SocialLink[] = [
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/smartgrid_analytics',
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
        <path
          d="M8 1.6C10.1 1.6 10.4 1.6 11.2 1.7C12 1.7 12.4 1.9 12.7 2C13.1 2.1 13.4 2.3 13.7 2.6C14 2.9 14.2 3.2 14.3 3.6C14.4 3.9 14.6 4.3 14.6 5.1C14.7 5.9 14.7 6.2 14.7 8.3C14.7 10.4 14.7 10.7 14.6 11.5C14.6 12.3 14.4 12.7 14.3 13C14.2 13.4 14 13.7 13.7 14C13.4 14.3 13.1 14.5 12.7 14.6C12.4 14.7 12 14.9 11.2 14.9C10.4 15 10.1 15 8 15C5.9 15 5.6 15 4.8 14.9C4 14.9 3.6 14.7 3.3 14.6C2.9 14.5 2.6 14.3 2.3 14C2 13.7 1.8 13.4 1.7 13C1.6 12.7 1.4 12.3 1.4 11.5C1.3 10.7 1.3 10.4 1.3 8.3C1.3 6.2 1.3 5.9 1.4 5.1C1.4 4.3 1.6 3.9 1.7 3.6C1.8 3.2 2 2.9 2.3 2.6C2.6 2.3 2.9 2.1 3.3 2C3.6 1.9 4 1.7 4.8 1.7C5.6 1.6 5.9 1.6 8 1.6ZM8 0.5C5.8 0.5 5.5 0.5 4.7 0.6C3.9 0.6 3.4 0.8 3 1C2.5 1.1 2.1 1.4 1.7 1.8C1.3 2.2 1.1 2.6 0.9 3.1C0.8 3.5 0.6 4 0.6 4.8C0.5 5.6 0.5 5.9 0.5 8.1C0.5 10.3 0.5 10.6 0.6 11.4C0.6 12.2 0.8 12.7 0.9 13.2C1.1 13.7 1.3 14.1 1.7 14.5C2.1 14.9 2.5 15.1 3 15.3C3.4 15.4 3.9 15.6 4.7 15.6C5.5 15.7 5.8 15.7 8 15.7C10.2 15.7 10.5 15.7 11.3 15.6C12.1 15.6 12.6 15.4 13.1 15.3C13.6 15.1 14 14.9 14.4 14.5C14.8 14.1 15 13.7 15.2 13.2C15.3 12.7 15.5 12.2 15.5 11.4C15.6 10.6 15.6 10.3 15.6 8.1C15.6 5.9 15.6 5.6 15.5 4.8C15.5 4 15.3 3.5 15.2 3.1C15 2.6 14.8 2.2 14.4 1.8C14 1.4 13.6 1.2 13.1 1C12.6 0.8 12.1 0.6 11.3 0.6C10.5 0.5 10.2 0.5 8 0.5Z"
          fill="currentColor"
        />
        <path
          d="M8 4.1C5.8 4.1 4.1 5.8 4.1 8C4.1 10.2 5.8 11.9 8 11.9C10.2 11.9 11.9 10.2 11.9 8C11.9 5.8 10.2 4.1 8 4.1ZM8 10.8C6.5 10.8 5.2 9.5 5.2 8C5.2 6.5 6.5 5.2 8 5.2C9.5 5.2 10.8 6.5 10.8 8C10.8 9.5 9.5 10.8 8 10.8Z"
          fill="currentColor"
        />
        <path d="M12.2 3.7C12.2 4.2 11.8 4.6 11.3 4.6C10.8 4.6 10.4 4.2 10.4 3.7C10.4 3.2 10.8 2.8 11.3 2.8C11.8 2.8 12.2 3.2 12.2 3.7Z" fill="currentColor" />
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/company/smart-grid-analytics/',
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
        <path
          d="M3.6 1.8C4.7 1.8 5.6 2.7 5.6 3.8C5.6 4.9 4.7 5.8 3.6 5.8C2.5 5.8 1.6 4.9 1.6 3.8C1.6 2.7 2.5 1.8 3.6 1.8ZM1.8 14.4H5.4V6.4H1.8V14.4ZM6.7 6.4H10.1V7.8C10.6 6.9 11.7 6.2 13.1 6.2C16 6.2 16.4 8.2 16.4 10.8V14.4H12.8V11.4C12.8 10.4 12.8 9.1 11.4 9.1C10 9.1 9.8 10.2 9.8 11.3V14.4H6.7V6.4Z"
          fill="currentColor"
        />
      </svg>
    ),
  },
  {
    label: 'X',
    href: 'https://x.com',
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
        <path
          d="M9.5 6.8L14.8 0.5H13.5L8.9 6L5.2 0.5H0.5L6.1 8.7L0.5 15.5H1.8L6.7 9.5L10.7 15.5H15.4L9.5 6.8ZM7.7 8.8L7.1 8L2.2 1.7H4.3L8.3 6.8L8.9 7.6L14.1 14.4H12L7.7 8.8Z"
          fill="currentColor"
        />
      </svg>
    ),
  },
]

const FooterSection: React.FC<FooterSectionProps> = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer id="footer" className="border-t border-[#EFE6DF] pt-12 lg:pt-16">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          <div className="max-w-[320px] sm:col-span-2 lg:col-span-1">
            <Link href="/" aria-label={`${siteConfig.name} Home`} className="inline-flex">
              <Image
                src="/Logos/sgrids_main.svg"
                alt="Sgrids logo"
                width={184}
                height={42}
                className="h-7 w-auto"
              />
            </Link>

            <p className="mt-5 [font-family:var(--font-ibm-plex-sans)] text-[15px] leading-[1.45] text-[#1C1B1B]">
              Engineering the operating system for the renewable century.
            </p>

            <p className="mt-2 [font-family:var(--font-ibm-plex-sans)] text-[0.9375rem] font-medium leading-[1.3] text-[#FF7F00]">
              #EnergyThatThinks
            </p>
          </div>

          <div className="lg:pl-10 xl:pl-14">
            <p className="[font-family:var(--font-ibm-plex-sans)] text-[0.75rem] font-medium uppercase leading-[1] tracking-[0.02rem] text-[#FF7F00]">
              Platform
            </p>
            <ul className="mt-4 space-y-3">
              {platformLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className={footerLinkClasses}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:pl-10 xl:pl-14">
            <p className="[font-family:var(--font-ibm-plex-sans)] text-[0.75rem] font-medium uppercase leading-[1] tracking-[0.02rem] text-[#FF7F00]">
              Company
            </p>
            <ul className="mt-4 space-y-3">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className={footerLinkClasses}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="[font-family:var(--font-ibm-plex-sans)] text-[0.75rem] font-medium uppercase leading-[1] tracking-[0.02rem] text-[#FF7F00]">
              Contact
            </p>

            <div className="mt-4 max-w-[320px] space-y-3 [font-family:var(--font-ibm-plex-sans)] text-[0.875rem] leading-[1.45] text-[#808080]">
              <p className="text-[#1C1B1B]">info@sgrids.com</p>
              <p>
                Msm Plaza, 2nd floor, service rd, opp. Kallumantapa, Banaswadi, Bangalore, Karnataka – 560043.
              </p>
            </div>

            <div className="mt-5 flex items-center gap-3">
              {socialLinks.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={socialIconClasses}
                >
                  {social.icon}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="mt-10 w-full border-t border-[#EFE6DF] pb-6 lg:pb-8">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-3 px-4 py-3 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <p className="[font-family:var(--font-ibm-plex-sans)] text-[0.8125rem] leading-[1.35] text-[#808080]">
            © {currentYear} {siteConfig.name}. All rights reserved.
          </p>

          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            {legalLinks.map((link) => (
              <Link key={link.label} href={link.href} className={legalLinkClasses}>
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default FooterSection
