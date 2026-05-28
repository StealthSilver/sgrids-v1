// Section: Navbar — top navigation placeholder section
import React from 'react'

// --- Types ---
export interface NavbarSectionProps {}

// --- Main Section Component ---
const NavbarSection: React.FC<NavbarSectionProps> = () => {
  return (
    <section id="navbar" className="border-b border-slate-200 px-4 py-16 sm:px-6 lg:px-8">
      <h2 className="text-2xl font-semibold text-slate-900">Navbar</h2>
    </section>
  )
}

export default NavbarSection
