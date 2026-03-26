import Navbar from '../components/Navbar.jsx'
import Hero from '../components/Hero.jsx'
import About from '../components/About.jsx'
import Gallery from '../components/Gallery.jsx'
import Order from '../components/Order.jsx'
import Contact from '../components/Contact.jsx'
import Footer from '../components/Footer.jsx'
import WhatsApp from '../components/whatsapp.jsx'

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-neutral-900">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Gallery />
        <Order />
        <Contact />
      </main>
      <Footer />
      <WhatsApp />
    </div>
  )
}
