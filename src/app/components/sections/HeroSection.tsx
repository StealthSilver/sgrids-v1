// Section: Hero — primary above-the-fold placeholder section
import React from 'react'

// --- Types ---
export interface HeroSectionProps {}

// --- Main Section Component ---
const HeroSection: React.FC<HeroSectionProps> = () => {
  return (
    <section id="hero" className="border-b border-slate-200 px-4 py-16 sm:px-6 lg:px-8">
      <h2 className="text-2xl font-semibold text-slate-900">Hero</h2>
    </section>
  )
}

export default HeroSection
