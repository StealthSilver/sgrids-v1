import AboutSection from './components/sections/AboutSection'
import AssetCoverageSection from './components/sections/AssetCoverageSection'
import FooterSection from './components/sections/FooterSection'
import HeroSection from './components/sections/HeroSection'
import HomeCTASection from './components/sections/HomeCTASection'
import NavbarSection from './components/sections/NavbarSection'
import PatentDisplaySection from './components/sections/PatentDisplaySection'
import ReasonSection from './components/sections/ReasonSection'
import SolvynSection from './components/sections/SolvynSection'
import SolvynStudioSection from './components/sections/SolvynStudioSection'
import TeamSection from './components/sections/TeamSection'

export default function Home(): React.JSX.Element {
  return (
    <main className="min-h-screen w-full bg-[#FFFFFF]">
      <NavbarSection />
      <div className="mx-auto w-full max-w-7xl">
        <HeroSection />
        <PatentDisplaySection />
        <AboutSection />
        <SolvynSection />
        <SolvynStudioSection />
        <AssetCoverageSection />
        <TeamSection />
        <ReasonSection />
        <HomeCTASection />
        <FooterSection />
      </div>
    </main>
  )
}
