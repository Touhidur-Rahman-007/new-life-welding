import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import Programs from '@/components/sections/Programs'
import Certifications from '@/components/sections/Certifications'
import Facilities from '@/components/sections/Facilities'
import Process from '@/components/sections/Process'
import Testimonials from '@/components/sections/Testimonials'
import Stats from '@/components/sections/Stats'
import CTA from '@/components/sections/CTA'
import Gallery from '@/components/sections/Gallery'
import FAQ from '@/components/sections/FAQ'
import Partners from '@/components/sections/Partners'
import Team from '@/components/sections/Team'

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      <Hero />
      <Stats />
      <About />
      <Programs />
      <Process />
      <Certifications />
      <Facilities />
      <Gallery />
      <Testimonials />
      <Team />
      <Partners />
      <FAQ />
      <CTA />
    </main>
  )
}
