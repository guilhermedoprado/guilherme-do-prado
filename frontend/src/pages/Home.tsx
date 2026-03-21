import { AboutSection } from '../components/AboutSection'
import { ContactSection } from '../components/ContactSection'
import { EducationSection } from '../components/EducationSection'
import { ExperienceSection } from '../components/ExperienceSection'
import { Footer } from '../components/Footer'
import { HeroSection } from '../components/HeroSection'
import { NavBar } from '../components/NavBar'
import { PortfolioSection } from '../components/PortfolioSection'
import { SkillsSection } from '../components/SkillsSection'

export default function Home() {
  return (
    <>
      <NavBar variant="home" />
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <PortfolioSection />
      <SkillsSection />
      <EducationSection />
      <ContactSection />
      <Footer />
    </>
  )
}
