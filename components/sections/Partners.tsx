'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { AnimatedSection, StaggeredContainer, fadeInUp } from '@/components/ui/AnimatedSection'

const partners = [
  { name: 'American Welding Society', logo: 'https://placehold.co/200x100/1e293b/f97316?text=AWS', url: '#' },
  { name: 'Lincoln Electric', logo: 'https://placehold.co/200x100/1e293b/f97316?text=Lincoln', url: '#' },
  { name: 'Miller', logo: 'https://placehold.co/200x100/1e293b/f97316?text=Miller', url: '#' },
  { name: 'ESAB', logo: 'https://placehold.co/200x100/1e293b/f97316?text=ESAB', url: '#' },
  { name: 'Hypertherm', logo: 'https://placehold.co/200x100/1e293b/f97316?text=Hypertherm', url: '#' },
  { name: 'OSHA', logo: 'https://placehold.co/200x100/1e293b/f97316?text=OSHA', url: '#' },
  { name: 'ASME', logo: 'https://placehold.co/200x100/1e293b/f97316?text=ASME', url: '#' },
  { name: 'API', logo: 'https://placehold.co/200x100/1e293b/f97316?text=API', url: '#' },
]

export default function Partners() {
  return (
    <section className="relative py-20 bg-white dark:bg-dark-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-12">
          <h3 className="text-2xl md:text-3xl font-bold text-dark-900 dark:text-white mb-4">
            Trusted By Industry <span className="gradient-text">Leaders</span>
          </h3>
          <p className="text-dark-600 dark:text-dark-400 max-w-2xl mx-auto">
            We partner with the best to provide you with world-class training
          </p>
        </AnimatedSection>

        <StaggeredContainer className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {partners.map((partner, index) => (
            <motion.a
              key={index}
              href={partner.url}
              variants={fadeInUp}
              whileHover={{ scale: 1.05, y: -5 }}
              className="flex items-center justify-center p-6 bg-dark-50 dark:bg-dark-900 rounded-xl hover:bg-dark-100 dark:hover:bg-dark-800 transition-all grayscale hover:grayscale-0"
            >
              <div className="relative w-full h-12">
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  fill
                  className="object-contain"
                />
              </div>
            </motion.a>
          ))}
        </StaggeredContainer>
      </div>
    </section>
  )
}
