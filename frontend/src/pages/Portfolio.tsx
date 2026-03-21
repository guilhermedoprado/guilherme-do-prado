import { Footer } from '../components/Footer'
import { NavBar } from '../components/NavBar'
import { PortfolioPage } from '../components/PortfolioPage'

export default function Portfolio() {
  return (
    <>
      <NavBar variant="portfolio" />
      <PortfolioPage />
      <Footer />
    </>
  )
}
