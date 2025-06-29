import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/about'
import Portfolio from '@/components/portfolio'
import Volunteering from '@/components/Volunteering' 
import Contact from '@/components/contact'
import Footer from '@/components/footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <Header />
      <Hero />
      <About />
      <Portfolio />
      <Volunteering /> 
      <Contact />
      <Footer />
    </main>
  )
}
