// Section: About — company overview placeholder section
import React from 'react'

// --- Types ---
export interface AboutSectionProps {}

// --- Main Section Component ---
const AboutSection: React.FC<AboutSectionProps> = () => {
  return (
    <section id="about" className="border-b border-slate-200 px-4 py-16 sm:px-6 lg:px-8">
      <h2 className="text-2xl font-semibold text-slate-900">About</h2>
    </section>
  )
}

export default AboutSection
