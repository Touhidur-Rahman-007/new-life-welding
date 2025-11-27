import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import Programs from '@/components/sections/Programs'
import Certifications from '@/components/sections/Certifications'
import Facilities from '@/components/sections/Facilities'
import Process from '@/components/sections/Process'
import Testimonials from '@/components/sections/Testimonials'
import Stats from '@/components/sections/Stats'
import FAQ from '@/components/sections/FAQ'
import Team from '@/components/sections/Team'
import Videos from '@/components/sections/Videos'

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
      <Videos />
      <Testimonials />
      <Team />
      <FAQ />
    </main>
  )
}
