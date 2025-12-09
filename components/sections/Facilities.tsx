'use client'

import { motion } from 'framer-motion'
import { Building2, Hammer, Shield, Zap, Users, Star } from 'lucide-react'
import Image from 'next/image'
import { AnimatedSection, StaggeredContainer, fadeInUp } from '@/components/ui/AnimatedSection'
import Tilt from 'react-parallax-tilt'
import { useLanguage } from '@/contexts/LanguageContext'

export default function Facilities() {
  const { language, t } = useLanguage()

  const facilities = [
    {
      title: t('facilities.items.trainingBays.title'),
      description: t('facilities.items.trainingBays.description'),
      icon: Hammer,
      image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&q=80',
      specs: [
        t('facilities.items.trainingBays.specs.0'),
        t('facilities.items.trainingBays.specs.1'),
        t('facilities.items.trainingBays.specs.2'),
        t('facilities.items.trainingBays.specs.3'),
      ],
    },
    {
      title: t('facilities.items.classroomLabs.title'),
      description: t('facilities.items.classroomLabs.description'),
      icon: Building2,
      image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&q=80',
      specs: [
        t('facilities.items.classroomLabs.specs.0'),
        t('facilities.items.classroomLabs.specs.1'),
        t('facilities.items.classroomLabs.specs.2'),
        t('facilities.items.classroomLabs.specs.3'),
      ],
    },
    {
      title: t('facilities.items.safetyCenter.title'),
      description: t('facilities.items.safetyCenter.description'),
      icon: Shield,
      image: 'https://images.unsplash.com/photo-1581092162384-8987c1d64718?w=800&q=80',
      specs: [
        t('facilities.items.safetyCenter.specs.0'),
        t('facilities.items.safetyCenter.specs.1'),
        t('facilities.items.safetyCenter.specs.2'),
        t('facilities.items.safetyCenter.specs.3'),
      ],
    },
    {
      title: t('facilities.items.fabricationShop.title'),
      description: t('facilities.items.fabricationShop.description'),
      icon: Zap,
      image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&q=80',
      specs: [
        t('facilities.items.fabricationShop.specs.0'),
        t('facilities.items.fabricationShop.specs.1'),
        t('facilities.items.fabricationShop.specs.2'),
        t('facilities.items.fabricationShop.specs.3'),
      ],
    },
    {
      title: t('facilities.items.studentLounge.title'),
      description: t('facilities.items.studentLounge.description'),
      icon: Users,
      image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800&q=80',
      specs: [
        t('facilities.items.studentLounge.specs.0'),
        t('facilities.items.studentLounge.specs.1'),
        t('facilities.items.studentLounge.specs.2'),
        t('facilities.items.studentLounge.specs.3'),
      ],
    },
    {
      title: t('facilities.items.testingCenter.title'),
      description: t('facilities.items.testingCenter.description'),
      icon: Star,
      image: 'https://images.unsplash.com/photo-1581092335397-9583eb92d232?w=800&q=80',
      specs: [
        t('facilities.items.testingCenter.specs.0'),
        t('facilities.items.testingCenter.specs.1'),
        t('facilities.items.testingCenter.specs.2'),
        t('facilities.items.testingCenter.specs.3'),
      ],
    },
  ]
  return (
    <section id="facilities" className="relative py-20 md:py-32 bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(16,185,129,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <AnimatedSection className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block mb-4"
          >
            <span className={`px-4 py-2 rounded-full bg-emerald-100 text-emerald-600 text-sm font-semibold ${language === 'bn' ? 'font-bengali' : ''}`}>
              {t('facilities.badge')}
            </span>
          </motion.div>
          <h2 className={`heading-large text-dark-900 mb-6 ${language === 'bn' ? 'font-bengali' : ''}`}>
            {t('facilities.title')} <span className="bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent">{t('facilities.titleHighlight')}</span>
          </h2>
          <p className={`text-lg md:text-xl text-dark-600 max-w-3xl mx-auto ${language === 'bn' ? 'font-bengali' : ''}`}>
            {t('facilities.subtitle')}
          </p>
        </AnimatedSection>

        {/* Facility Grid */}
        <StaggeredContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {facilities.map((facility, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              whileHover={{ y: -10 }}
              className="group h-full"
            >
              <Tilt
                tiltMaxAngleX={5}
                tiltMaxAngleY={5}
                glareEnable={true}
                glareMaxOpacity={0.1}
                scale={1.02}
                className="h-full"
              >
                <div className="relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 h-full flex flex-col">
                  {/* Image */}
                  <div className="relative h-64 overflow-hidden flex-shrink-0">
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
                      className="absolute top-4 left-4 w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center shadow-lg"
                    >
                      <facility.icon className="w-6 h-6 text-white" />
                    </motion.div>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className={`text-2xl font-bold text-dark-900 mb-3 ${language === 'bn' ? 'font-bengali' : ''}`}>
                      {facility.title}
                    </h3>
                    <p className={`text-dark-600 mb-4 ${language === 'bn' ? 'font-bengali' : ''}`}>
                      {facility.description}
                    </p>

                    {/* Specs */}
                    <div className="space-y-2 mt-auto">
                      {facility.specs.map((spec, i) => (
                        <div
                          key={i}
                          className="flex items-center gap-2 text-sm text-dark-600"
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                          <span className={language === 'bn' ? 'font-bengali' : ''}>{spec}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Tilt>
            </motion.div>
          ))}
        </StaggeredContainer>
      </div>
    </section>
  )
}
