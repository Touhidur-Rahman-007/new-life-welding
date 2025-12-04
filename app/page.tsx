import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import Programs from '@/components/sections/Programs'
import Facilities from '@/components/sections/Facilities'
import Process from '@/components/sections/Process'
import Testimonials from '@/components/sections/Testimonials'
import FAQ from '@/components/sections/FAQ'
import Team from '@/components/sections/Team'
import Videos from '@/components/sections/Videos'
import VisaProcessing from '@/components/sections/VisaProcessing'
export default function Home() {
  return (
    <main className="relative overflow-hidden">
      <Hero />
      <About />
      <Programs />
      <Process />
      <Facilities />
      <Videos />
      <Testimonials />
      <VisaProcessing />
      <Team />
      <FAQ />
    </main>
  )
}