'use client'

import { motion } from 'framer-motion'
import { Target, Users2, Zap, Shield, BookOpen, Lightbulb } from 'lucide-react'
import Image from 'next/image'
import { AnimatedSection, StaggeredContainer, fadeInUp } from '@/components/ui/AnimatedSection'
import Tilt from 'react-parallax-tilt'

const values = [
  {
    icon: Target,
    title: 'Excellence',
    description: 'We strive for perfection in every weld, every lesson, and every interaction.',
    color: 'from-orange-500 to-orange-600',
    neonColor: '249,115,22',
  },
  {
    icon: Users2,
    title: 'Community',
    description: 'Building a supportive network of skilled professionals who lift each other up.',
    color: 'from-cyan-500 to-cyan-600',
    neonColor: '6,182,212',
  },
  {
    icon: Zap,
    title: 'Innovation',
    description: 'Embracing cutting-edge techniques and technology to stay ahead of industry trends.',
    color: 'from-purple-500 to-purple-600',
    neonColor: '168,85,247',
  },
  {
    icon: Shield,
    title: 'Safety First',
    description: 'Prioritizing safety in every aspect of training, from equipment to procedures.',
    color: 'from-green-500 to-green-600',
    neonColor: '34,197,94',
  },
]

const milestones = [
  { year: '1995', title: 'Founded', description: 'Established with a vision to transform welding education' },
  { year: '2005', title: 'Expansion', description: 'Opened state-of-the-art training facility' },
  { year: '2015', title: 'Recognition', description: 'Awarded Best Vocational Training Center' },
  { year: '2023', title: 'Innovation', description: 'Introduced advanced VR welding simulators' },
]

export default function About() {
  return (
    <section id="about" className="relative py-20 md:py-32 bg-gradient-to-b from-white to-dark-50 dark:from-dark-950 dark:to-dark-900 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 noise-bg opacity-10" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <AnimatedSection className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block mb-4"
          >
            <span className="px-4 py-2 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 text-sm font-semibold">
              About Us
            </span>
          </motion.div>
          <h2 className="heading-large text-white mb-6">
            Forging Futures Through <span className="gradient-text">Expert Training</span>
          </h2>
          <p className="text-lg md:text-xl text-dark-400 max-w-3xl mx-auto">
            For over 25 years, we've been the catalyst for thousands of successful welding careers
          </p>
        </AnimatedSection>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 mb-20 items-center">
          {/* Left: Image with 3D Tilt */}
          <AnimatedSection animation="slide" direction="left">
            <Tilt
              tiltMaxAngleX={10}
              tiltMaxAngleY={10}
              glareEnable={true}
              glareMaxOpacity={0.2}
              scale={1.02}
              transitionSpeed={2000}
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-accent-500/20 mix-blend-overlay" />
                <Image
                  src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=800&q=80"
                  alt="Welding Training Facility"
                  width={800}
                  height={600}
                  className="w-full h-[500px] object-cover"
                />
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-dark-900/80 via-transparent to-transparent flex items-end p-8"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                >
                  <div>
                    <h3 className="text-3xl font-bold text-white mb-2">
                      State-of-the-Art Facility
                    </h3>
                    <p className="text-dark-200">
                      20,000 sq ft of professional training space
                    </p>
                  </div>
                </motion.div>
              </div>
            </Tilt>
          </AnimatedSection>

          {/* Right: Content */}
          <AnimatedSection animation="slide" direction="right">
            <div className="space-y-8">
              <div>
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Your Journey to Welding Mastery Starts Here
                </h3>
                <p className="text-lg text-dark-400 mb-6 leading-relaxed">
                  New Life Welding Training Center is more than a school—it's a launchpad for your career. 
                  We combine hands-on experience with theoretical knowledge, ensuring our students are 
                  industry-ready from day one.
                </p>
                <p className="text-lg text-dark-400 leading-relaxed">
                  Our expert instructors bring decades of real-world experience, teaching you not just 
                  how to weld, but how to think like a professional welder. From basic techniques to 
                  advanced certifications, we guide you every step of the way.
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center gap-3 px-6 py-3 bg-primary-100 dark:bg-primary-900/30 rounded-full"
                >
                  <BookOpen className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                  <span className="font-semibold text-white">
                    Comprehensive Curriculum
                  </span>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center gap-3 px-6 py-3 bg-accent-100 dark:bg-accent-900/30 rounded-full"
                >
                  <Lightbulb className="w-5 h-5 text-accent-600 dark:text-accent-400" />
                  <span className="font-semibold text-white">
                    Hands-On Learning
                  </span>
                </motion.div>
              </div>
            </div>
          </AnimatedSection>
        </div>

        {/* Core Values */}
        <AnimatedSection className="mb-20">
          <h3 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">
            Our Core <span className="gradient-text">Values</span>
          </h3>
          <StaggeredContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -10, scale: 1.02 }}
                className="relative group cursor-pointer"
              >
                <div className="relative p-8 bg-dark-900 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-dark-800">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className={`w-14 h-14 rounded-xl bg-gradient-to-br ${value.color} flex items-center justify-center mb-4 shadow-lg`}
                  >
                    <value.icon className="w-7 h-7 text-white" />
                  </motion.div>
                  <h4 className="text-xl font-bold text-white mb-3">
                    {value.title}
                  </h4>
                  <p className="text-dark-400 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </StaggeredContainer>
        </AnimatedSection>

        {/* Timeline */}
        <AnimatedSection>
          <h3 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">
            Our <span className="gradient-text">Journey</span>
          </h3>
          <div className="relative max-w-5xl mx-auto">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary-500 via-accent-500 to-primary-600" />

            {/* Timeline Items */}
            <div className="space-y-16">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className={`flex items-center gap-8 ${
                    index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                  }`}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="inline-block p-6 bg-dark-900 rounded-2xl shadow-lg hover:shadow-xl transition-all"
                    >
                      <div className="text-3xl font-bold gradient-text mb-2">
                        {milestone.year}
                      </div>
                      <h4 className="text-xl font-bold text-white mb-2">
                        {milestone.title}
                      </h4>
                      <p className="text-dark-400">
                        {milestone.description}
                      </p>
                    </motion.div>
                  </div>
                  
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    className="w-8 h-8 rounded-full bg-gradient-to-br from-primary-500 to-accent-500 shadow-lg z-10 flex items-center justify-center"
                  >
                    <div className="w-4 h-4 rounded-full bg-white" />
                  </motion.div>
                  
                  <div className="flex-1" />
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
