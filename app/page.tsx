import { Nav } from './(sections)/nav'
import { HeroSection } from './(sections)/hero-section'
import { About } from './(sections)/about'
import { Founder } from './(sections)/founder'
import { Services } from './(sections)/services'
import { Expertise } from './(sections)/expertise'
import { Testimonials } from './(sections)/testimonials'
import { Contact } from './(sections)/contact'
import { Footer } from './(sections)/footer'

export default function HomePage() {
  return (
    <main>
      <Nav />
      <HeroSection />
      <About />
      <Founder />
      <Services />
      <Expertise />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  )
}
