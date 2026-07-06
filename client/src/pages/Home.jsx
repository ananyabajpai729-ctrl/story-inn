import Navbar from '../components/Navbar.jsx'
import Hero from '../components/Hero.jsx'
import FeaturesSection from '../components/FeaturesSection.jsx'
import FeaturedStories from '../components/FeaturedStories.jsx'
import Footer from '../components/Footer.jsx'

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <FeaturesSection />
      <FeaturedStories />
      <Footer />
    </div>
  )
}