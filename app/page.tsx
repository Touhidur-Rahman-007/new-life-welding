import Hero from '@/components/sections/Hero'
import Programs from '@/components/sections/Programs'
import Videos from '@/components/sections/Videos'
import Team from '@/components/sections/Team'
import Testimonials from '@/components/sections/Testimonials'
import Facilities from '@/components/sections/Facilities'
import FAQ from '@/components/sections/FAQ'
import Process from '@/components/sections/Process'
import About from '@/components/sections/About'

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      <Hero />
      <Programs />
      <Videos />
      <Team />
      <Testimonials />
      <Facilities />
      <FAQ />
      <Process />
      <About />
    </main>
  )
}