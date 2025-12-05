'use client'

import { motion } from 'framer-motion'
import { Building2, Hammer, Shield, Zap, Users, Star } from 'lucide-react'
import Image from 'next/image'
import { AnimatedSection, StaggeredContainer, fadeInUp } from '@/components/ui/AnimatedSection'
import Tilt from 'react-parallax-tilt'

const facilities = [
  {
    title: 'Training Bays',
    description: '50+ individual welding stations with latest equipment',
    icon: Hammer,
    image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&q=80',
    specs: ['Lincoln Electric equipment', 'Miller machines', 'State-of-the-art ventilation', 'Personal safety gear'],
  },
  {
    title: 'Classroom Labs',
    description: 'Modern classrooms with interactive learning technology',
    icon: Building2,
    image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&q=80',
    specs: ['Smart boards', 'VR welding simulators', 'Video analysis systems', 'Computer workstations'],
  },
  {
    title: 'Safety Center',
    description: 'Dedicated safety training and certification area',
    icon: Shield,
    image: 'https://images.unsplash.com/photo-1581092162384-8987c1d64718?w=800&q=80',
    specs: ['OSHA certified trainers', 'Emergency response drills', 'PPE fitting station', 'Safety equipment library'],
  },
  {
    title: 'Fabrication Shop',
    description: 'Full-scale fabrication facility for real-world projects',
    icon: Zap,
    image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&q=80',
    specs: ['CNC plasma cutter', 'Press brake', 'Rolling machines', 'Material storage'],
  },
  {
    title: 'Student Lounge',
    description: 'Comfortable space for breaks and networking',
    icon: Users,
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800&q=80',
    specs: ['Vending area', 'Study rooms', 'WiFi access', 'Lockers'],
  },
  {
    title: 'Testing Center',
    description: 'AWS certified testing facility for certifications',
    icon: Star,
    image: 'https://images.unsplash.com/photo-1581092335397-9583eb92d232?w=800&q=80',
    specs: ['AWS accredited', 'X-ray inspection', 'Bend test equipment', 'Documentation center'],
  },
]

const equipment = [
  { name: 'Lincoln Electric Power MIG', count: 25, image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=400&q=80' },
  { name: 'Miller Dynasty TIG', count: 20, image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=400&q=80' },
  { name: 'ESAB Stick Welders', count: 15, image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=400&q=80' },
  { name: 'Hypertherm Plasma Cutters', count: 10, image: 'https://images.unsplash.com/photo-1581092162384-8987c1d64718?w=400&q=80' },
  { name: 'VR Welding Simulators', count: 8, image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=400&q=80' },
  { name: 'Orbital Welding Systems', count: 5, image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=400&q=80' },
]

export default function Facilities() {
  return (
    <section id="facilities" className="relative py-20 md:py-32 bg-white dark:bg-dark-950 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 noise-bg opacity-5" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <AnimatedSection className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block mb-4"
          >
            <span className="px-4 py-2 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 text-sm font-semibold">
              World-Class Facilities
            </span>
          </motion.div>
          <h2 className="heading-large text-dark-900 dark:text-white mb-6">
            State-of-the-Art <span className="gradient-text">Training Environment</span>
          </h2>
          <p className="text-lg md:text-xl text-dark-600 dark:text-dark-400 max-w-3xl mx-auto">
            Train with professional-grade equipment in facilities designed for optimal learning
          </p>
        </AnimatedSection>

        {/* Facility Grid */}
        <StaggeredContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {facilities.map((facility, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              whileHover={{ y: -10 }}
              className="group"
            >
              <Tilt
                tiltMaxAngleX={5}
                tiltMaxAngleY={5}
                glareEnable={true}
                glareMaxOpacity={0.1}
                scale={1.02}
              >
                <div className="relative bg-white dark:bg-dark-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
                  {/* Image */}
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={facility.image}
                      alt={facility.title}
                      width={400}
                      height={300}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-dark-900/50 to-transparent" />
                    
                    {/* Icon */}
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                      className="absolute top-4 left-4 w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center shadow-lg"
                    >
                      <facility.icon className="w-6 h-6 text-white" />
                    </motion.div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-dark-900 dark:text-white mb-3">
                      {facility.title}
                    </h3>
                    <p className="text-dark-600 dark:text-dark-400 mb-4">
                      {facility.description}
                    </p>

                    {/* Specs */}
                    <div className="space-y-2">
                      {facility.specs.map((spec, i) => (
                        <div
                          key={i}
                          className="flex items-center gap-2 text-sm text-dark-600 dark:text-dark-400"
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-primary-500" />
                          {spec}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Tilt>
            </motion.div>
          ))}
        </StaggeredContainer>

        {/* Equipment Showcase */}
        <AnimatedSection className="bg-gradient-to-br from-rose-50 via-orange-50 to-amber-50 rounded-3xl p-8 md:p-12 shadow-xl border border-orange-100">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Professional-Grade <span className="bg-gradient-to-r from-orange-500 to-rose-500 bg-clip-text text-transparent">Equipment</span>
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Train with the same equipment used by industry professionals worldwide
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {equipment.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="relative group"
              >
                <div className="relative bg-white/80 backdrop-blur-sm rounded-xl overflow-hidden border border-orange-200 hover:border-orange-400 hover:shadow-lg transition-all">
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={400}
                      height={200}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-white/80 to-transparent" />
                    
                    {/* Count Badge */}
                    <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-gradient-to-r from-orange-500 to-rose-500 text-white text-sm font-bold shadow-md">
                      {item.count} Units
                    </div>
                  </div>

                  {/* Name */}
                  <div className="p-4">
                    <h4 className="text-lg font-bold text-gray-800">
                      {item.name}
                    </h4>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
