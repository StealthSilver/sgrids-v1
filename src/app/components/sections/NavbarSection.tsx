// Section: Navbar — top navigation placeholder section
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

// --- Types ---
export interface NavbarSectionProps {}

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'Solvyn', href: '#solvyn' },
  { label: 'Application', href: '#application' },
  { label: 'Proof', href: '#proof' },
  { label: 'Company', href: '#company' },
]

const navLinkClasses =
  'inline-flex items-center justify-center whitespace-nowrap border-b-2 border-transparent bg-transparent pb-[2px] [font-family:var(--font-ibm-plex-sans)] text-[13px] font-medium leading-[1.1] tracking-[0.35px] text-[#808080] capitalize transition-colors duration-200 hover:border-[#FF7F00] hover:text-[#FF7F00] sm:text-[14px] sm:tracking-[0.45px] lg:text-[16px] lg:tracking-[0.6px]'

// --- Main Section Component ---
const NavbarSection: React.FC<NavbarSectionProps> = () => {
  return (
    <section
      id="navbar"
      className="border-b border-slate-200 py-3 sm:py-3"
    >
      <div className="mx-auto flex w-full max-w-7xl flex-wrap items-center gap-x-4 gap-y-2 px-4 sm:px-6 md:h-[72px] md:flex-nowrap md:gap-5 lg:gap-8 lg:px-8 xl:px-10">
        <Link href="/" aria-label="Smart Grid Analytics Home" className="shrink-0">
          <Image
            src="/Logos/sgrids_main.svg"
            alt="Sgrids logo"
            width={184}
            height={42}
            priority
            className="h-6 w-auto md:h-[30px] lg:h-[34px]"
          />
        </Link>

        <nav className="order-3 flex basis-full items-center justify-start gap-4 overflow-x-auto pb-1 md:order-2 md:basis-auto md:flex-1 md:justify-center md:gap-5 lg:gap-7">
          {navItems.map((item) => (
            <Link key={item.label} href={item.href} className={navLinkClasses}>
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          href="#request-demo"
          className="order-2 ml-auto inline-flex h-8 shrink-0 items-center justify-center rounded-full px-4 text-[10px] font-semibold uppercase tracking-[0.18em] text-white md:order-3 md:ml-0 md:h-9 md:px-5 md:text-[11px] lg:w-[166.47px] lg:px-6"
          style={{
            background: 'linear-gradient(103.51deg, #A14000 0%, #FF7F00 100%)',
          }}
        >
          Request Demo
        </Link>
      </div>
    </section>
  )
}

export default NavbarSection
