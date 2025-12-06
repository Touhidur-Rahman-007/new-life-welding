import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import Programs from '@/components/sections/Programs'
import Videos from '@/components/sections/Videos'
import Team from '@/components/sections/Team'
import Testimonials from '@/components/sections/Testimonials'
import Facilities from '@/components/sections/Facilities'
import FAQ from '@/components/sections/FAQ'
import Process from '@/components/sections/Process'
import CoreValues from '@/components/sections/CoreValues'

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      <Hero />
      <About />
      <Programs />
      <Videos />
      <Team />
      <Testimonials />
      <Facilities />
      <FAQ />
      <Process />
      <CoreValues />
    </main>
  )
}