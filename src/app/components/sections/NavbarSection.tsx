// Section: Navbar — top navigation placeholder section
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

// --- Types ---
export interface NavbarSectionProps {}

const navItems = [
  { label: 'Solvyn', href: '#solvyn' },
  { label: 'Proof', href: '#proof' },
  { label: 'Company', href: '#company' },
  { label: 'Contact', href: '#footer' },
]

const navLinkClasses =
  'inline-flex items-center justify-center whitespace-nowrap border-b-2 border-transparent bg-transparent pb-0.5 [font-family:var(--font-ibm-plex-sans)] text-[0.6875rem] font-medium leading-[1.1] tracking-[0.02em] text-[#808080] capitalize transition-colors duration-200 hover:border-[#FF7F00] hover:text-[#FF7F00] lg:text-xs lg:tracking-[0.03em]'

// --- Main Section Component ---
const NavbarSection: React.FC<NavbarSectionProps> = () => {
  return (
    <section
      id="navbar"
      className="py-3"
    >
      <div className="mx-auto flex h-14 w-full max-w-7xl items-center gap-3 px-1.5 sm:px-2 lg:gap-5 lg:px-2.5 xl:px-3">
        <Link href="/" aria-label="Smart Grid Analytics Home" className="shrink-0">
          <Image
            src="/Logos/sgrids_main.svg"
            alt="Sgrids logo"
            width={184}
            height={42}
            priority
            className="h-4 w-auto md:h-6 lg:h-7"
          />
        </Link>

        <nav className="order-2 mt-3 flex flex-1 items-center justify-center gap-4 overflow-x-auto pb-1 lg:gap-7">
          {navItems.map((item) => (
            <Link key={item.label} href={item.href} className={navLinkClasses}>
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          href="#request-demo"
          className="order-3 ml-auto inline-flex h-7 shrink-0 items-center justify-center rounded-full bg-[#FF7F00] px-1.5 [font-family:var(--font-ibm-plex-sans)] text-[0.625rem] font-semibold uppercase leading-[1] tracking-[0.02rem] text-white transition-colors duration-200 hover:bg-[#E67300] md:px-2 lg:w-30 lg:px-2.5 lg:text-[0.625rem]"
        >
          Request Demo
        </Link>
      </div>
    </section>
  )
}

export default NavbarSection
