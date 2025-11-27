'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { Phone, Mail, Briefcase, Award, Star, Flame } from 'lucide-react'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import Image from 'next/image'
import { useRef } from 'react'

const teamLogoSrc = '/images/team/Screenshot%202025-11-27%20102701.png'

const teamMembers = [
  {
    id: 1,
    name: 'Abdur Rahman Jony',
    role: 'CHAIRMAN',
    phone: '01712577508',
    email: 'jonymiah84@gmail.com',
    image: '/images/team/chairman.png',
    category: 'leadership',
    gradient: 'from-yellow-500 via-orange-500 to-red-500'
  },
  {
    id: 2,
    name: 'Md Sajjad Hossain',
    role: 'MANAGING DIRECTOR',
    phone: '01748003338',
    email: 'sazzadraj0007@gmail.com',
    image: '/images/team/md.png',
    category: 'leadership',
    gradient: 'from-orange-500 via-red-500 to-pink-500'
  },
  {
    id: 3,
    name: 'Noor Mohammad Naim',
    role: 'GENERAL MANAGER',
    phone: '01972577508',
    email: 'noor.nayeem1998@gmail.com',
    image: '/images/team/gm.png',
    category: 'management',
    gradient: 'from-blue-500 via-cyan-500 to-teal-500'
  },
  {
    id: 4,
    name: 'Soumik Kumar Shil',
    role: 'MANAGER',
    phone: '0133318183',
    email: 'shilsoumikkumar@gmail.com',
    image: '/images/team/manager.png',
    category: 'management',
    gradient: 'from-cyan-500 via-blue-500 to-indigo-500'
  },
  {
    id: 5,
    name: 'Sharmin Akter Sumi',
    role: 'CHIEF MARKETING EXECUTIVE',
    phone: '01753110311',
    email: 'shominlwtc@gmail.com',
    image: '/images/team/cmo.png',
    category: 'marketing',
    gradient: 'from-purple-500 via-pink-500 to-rose-500'
  },
  {
    id: 6,
    name: 'Sakufa Akter (Nishad)',
    role: 'MARKETING EXECUTIVE',
    phone: '01714815179',
    email: 'mrnishad729@gmail.com',
    image: '/images/team/marketing.png',
    category: 'marketing',
    gradient: 'from-pink-500 via-rose-500 to-red-500'
  },
  {
    id: 7,
    name: 'Rahatul Islam Kabbo',
    role: 'CHIEF WELDING INSTRUCTOR',
    phone: '01819301056',
    email: 'rahatulnlwtc@gmail.com',
    image: '/images/team/chief-instructor.png',
    category: 'instructors',
    gradient: 'from-amber-500 via-orange-500 to-red-500'
  },
  {
    id: 8,
    name: 'Md Billal Hossain Mreda',
    role: 'WELDING INSTRUCTOR',
    phone: '01893272962',
    email: 'mdbillalhossain1x@gmail.com',
    image: '/images/team/instructor-1.png',
    category: 'instructors',
    gradient: 'from-red-500 via-orange-500 to-yellow-500'
  },
  {
    id: 9,
    name: 'Md Ojjol Miah',
    role: 'WELDING INSTRUCTOR',
    phone: '01744109435',
    email: '',
    image: '/images/team/instructor-2.png',
    category: 'instructors',
    gradient: 'from-orange-500 via-amber-500 to-yellow-500'
  },
  {
    id: 10,
    name: 'Sheikh Rezaul',
    role: 'WELDING INSTRUCTOR + FABRICATOR',
    phone: '01680368012',
    email: 'rezaulsheikh187@gmail.com',
    image: '/images/team/instructor-3.png',
    category: 'instructors',
    gradient: 'from-yellow-500 via-orange-500 to-red-500'
  },
  {
    id: 11,
    name: 'Md Shanto',
    role: 'GAS CUTTER',
    phone: '01626592327',
    email: '',
    image: '/images/team/gas-cutter.png',
    category: 'technical',
    gradient: 'from-green-500 via-emerald-500 to-teal-500'
  },
  {
    id: 12,
    name: 'Parvez Islam',
    role: 'JOB CONTROLLER',
    phone: '01616348564',
    email: 'parvez2372669@gmail.com',
    image: '/images/team/controller.png',
    category: 'technical',
    gradient: 'from-teal-500 via-cyan-500 to-blue-500'
  }
]

export default function Team() {
  return (
    <section id="team" className="relative py-32 bg-dark-950 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(249,115,22,0.15),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(239,68,68,0.15),transparent_50%)]" />
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      </div>

      <div className="container-custom relative z-10">
        {/* Section Header with Flame Animation */}
        <AnimatedSection className="text-center mb-24">
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', duration: 1 }}
            className="inline-flex items-center gap-3 mb-6 px-8 py-3 bg-gradient-to-r from-primary-500/20 via-accent-500/20 to-primary-500/20 border border-primary-500/30 rounded-full"
          >
            <Flame className="w-6 h-6 text-primary-400 animate-pulse" />
            <span className="text-primary-400 font-bold text-lg">Our Expert Team</span>
            <Flame className="w-6 h-6 text-primary-400 animate-pulse" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-6xl md:text-7xl lg:text-8xl font-black mb-8 font-display leading-tight"
          >
            <span className="inline-block bg-gradient-to-r from-primary-400 via-accent-400 to-primary-400 bg-clip-text text-transparent animate-gradient">
              Meet The Masters
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-xl md:text-2xl text-dark-300 max-w-4xl mx-auto leading-relaxed"
          >
            The passionate professionals behind Bangladesh's premier welding training institution
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, type: 'spring', stiffness: 120 }}
            className="mt-12 flex justify-center"
          >
            <div className="relative p-4 rounded-3xl bg-white/5 border border-primary-500/30 shadow-2xl backdrop-blur">
              <Image
                src={teamLogoSrc}
                alt="New Life Welding logo"
                width={280}
                height={140}
                className="object-contain"
                priority
              />
            </div>
          </motion.div>
        </AnimatedSection>

        {/* Leadership - Hero Style Cards */}
        <AnimatedSection className="mb-32">
          <SectionTitle icon={Award} title="Leadership" subtitle="Visionary Leaders" />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {teamMembers.filter(m => m.category === 'leadership').map((member, index) => (
              <LeadershipCard key={member.id} member={member} index={index} />
            ))}
          </div>
        </AnimatedSection>

        {/* Management Team - Hexagon Grid */}
        <AnimatedSection className="mb-32">
          <SectionTitle icon={Briefcase} title="Management" subtitle="Strategic Minds" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {teamMembers.filter(m => m.category === 'management').map((member, index) => (
              <HexagonCard key={member.id} member={member} index={index} />
            ))}
          </div>
        </AnimatedSection>

        {/* Marketing Team - Modern Cards */}
        <AnimatedSection className="mb-32">
          <SectionTitle icon={Star} title="Marketing" subtitle="Brand Champions" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {teamMembers.filter(m => m.category === 'marketing').map((member, index) => (
              <ModernCard key={member.id} member={member} index={index} />
            ))}
          </div>
        </AnimatedSection>

        {/* Instructors - Circular Spotlight */}
        <AnimatedSection className="mb-32">
          <SectionTitle icon={Flame} title="Master Instructors" subtitle="Skill Forgers" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.filter(m => m.category === 'instructors').map((member, index) => (
              <CircularCard key={member.id} member={member} index={index} />
            ))}
          </div>
        </AnimatedSection>

        {/* Technical Staff - Compact Pro Cards */}
        <AnimatedSection>
          <SectionTitle icon={Briefcase} title="Technical Staff" subtitle="Workshop Experts" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {teamMembers.filter(m => m.category === 'technical').map((member, index) => (
              <CompactCard key={member.id} member={member} index={index} />
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}


// Section Title Component
interface SectionTitleProps {
  icon: any
  title: string
  subtitle: string
}

function SectionTitle({ icon: Icon, title, subtitle }: SectionTitleProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-center mb-16"
    >
      <div className="inline-flex items-center gap-4 mb-4">
        <motion.div
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        >
          <Icon className="w-8 h-8 text-primary-400" />
        </motion.div>
        <h3 className="text-4xl md:text-5xl font-bold font-display text-white">
          {title}
        </h3>
        <motion.div
          animate={{ rotate: [360, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        >
          <Icon className="w-8 h-8 text-primary-400" />
        </motion.div>
      </div>
      <p className="text-xl text-primary-400/80 font-semibold">{subtitle}</p>
    </motion.div>
  )
}

// Leadership Card - Hero Style
interface CardProps {
  member: typeof teamMembers[0]
  index: number
}

function LeadershipCard({ member, index }: CardProps) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  })
  const y = useTransform(scrollYProgress, [0, 1], [100, -100])

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.2 }}
      className="group relative"
    >
      <motion.div style={{ y }} className="relative">
        {/* Card Container */}
        <div className="relative bg-gradient-to-br from-dark-900/90 to-dark-950/90 backdrop-blur-2xl border-2 border-primary-500/30 rounded-3xl overflow-hidden p-8 hover:border-primary-500 transition-all duration-700 group-hover:shadow-2xl group-hover:shadow-primary-500/50">
          
          {/* Animated Gradient Overlay */}
          <div className={`absolute inset-0 bg-gradient-to-br ${member.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-700`} />
          
          {/* Spark Effect */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary-500/20 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700" />
          
          <div className="relative z-10 flex flex-col md:flex-row gap-8 items-center">
            {/* Image with Hexagon Mask */}
            <div className="relative flex-shrink-0">
              <motion.div
                whileHover={{ rotate: 5, scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="relative w-56 h-56 rounded-full overflow-hidden border-4 border-primary-500/50 group-hover:border-primary-400 transition-colors duration-500"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500/30 to-accent-500/30 group-hover:opacity-100 opacity-0 transition-opacity duration-500 z-10" />
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                {/* Rotating Ring */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
                  className="absolute inset-0 border-4 border-transparent border-t-primary-400 rounded-full"
                />
              </motion.div>
              
              {/* Achievement Badge */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: 0.5, type: 'spring' }}
                className="absolute -bottom-2 -right-2 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full p-3 shadow-lg"
              >
                <Award className="w-6 h-6 text-white" />
              </motion.div>
            </div>

            {/* Info */}
            <div className="flex-1 text-center md:text-left">
              <motion.h4
                whileHover={{ x: 10 }}
                className="text-3xl md:text-4xl font-black mb-3 font-display bg-gradient-to-r from-white to-primary-200 bg-clip-text text-transparent"
              >
                {member.name}
              </motion.h4>
              
              <div className="inline-flex items-center gap-3 mb-6 px-6 py-2 bg-primary-500/20 border border-primary-500/50 rounded-full">
                <Briefcase className="w-5 h-5 text-primary-400" />
                <p className="text-lg font-bold text-primary-400 uppercase tracking-wider">
                  {member.role}
                </p>
              </div>

              {/* Contact Buttons */}
              <div className="space-y-3">
                <motion.a
                  href={`tel:${member.phone}`}
                  whileHover={{ scale: 1.05, x: 10 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center justify-center md:justify-start gap-3 px-6 py-4 bg-gradient-to-r from-dark-800 to-dark-900 hover:from-primary-500/20 hover:to-accent-500/20 border border-dark-700 hover:border-primary-500 rounded-xl transition-all group/btn"
                >
                  <Phone className="w-5 h-5 text-primary-400 group-hover/btn:animate-bounce" />
                  <span className="text-base font-semibold text-white">{member.phone}</span>
                </motion.a>

                {member.email && (
                  <motion.a
                    href={`mailto:${member.email}`}
                    whileHover={{ scale: 1.05, x: 10 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center justify-center md:justify-start gap-3 px-6 py-4 bg-gradient-to-r from-dark-800 to-dark-900 hover:from-primary-500/20 hover:to-accent-500/20 border border-dark-700 hover:border-primary-500 rounded-xl transition-all group/btn"
                  >
                    <Mail className="w-5 h-5 text-primary-400 group-hover/btn:animate-bounce" />
                    <span className="text-sm font-medium text-white break-all">{member.email}</span>
                  </motion.a>
                )}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

// Hexagon Card
function HexagonCard({ member, index }: CardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.15 }}
      whileHover={{ y: -10 }}
      className="group relative"
    >
      <div className="relative bg-dark-900/80 backdrop-blur-xl border border-dark-700/50 rounded-2xl overflow-hidden p-8 hover:border-primary-500/50 transition-all duration-500">
        {/* Background Gradient */}
        <div className={`absolute inset-0 bg-gradient-to-br ${member.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
        
        {/* Image */}
        <div className="relative w-48 h-48 mx-auto mb-6 rounded-2xl overflow-hidden border-4 border-dark-700 group-hover:border-primary-500 transition-all duration-500 rotate-0 group-hover:rotate-3">
          <Image
            src={member.image}
            alt={member.name}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className={`absolute inset-0 bg-gradient-to-t ${member.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />
        </div>

        {/* Name */}
        <h4 className="text-2xl font-bold text-center mb-2 group-hover:text-primary-400 transition-colors font-display">
          {member.name}
        </h4>

        {/* Role */}
        <div className="flex items-center justify-center gap-2 mb-6">
          <Briefcase className="w-4 h-4 text-primary-400" />
          <p className="text-sm text-primary-400 font-bold uppercase tracking-wide">
            {member.role}
          </p>
        </div>

        {/* Contact */}
        <div className="space-y-2">
          <a
            href={`tel:${member.phone}`}
            className="flex items-center justify-center gap-2 px-4 py-3 bg-dark-800/50 hover:bg-primary-500/10 border border-dark-700 hover:border-primary-500/50 rounded-lg transition-all text-sm"
          >
            <Phone className="w-4 h-4 text-primary-400" />
            <span className="text-dark-200">{member.phone}</span>
          </a>
          {member.email && (
            <a
              href={`mailto:${member.email}`}
              className="flex items-center justify-center gap-2 px-4 py-3 bg-dark-800/50 hover:bg-primary-500/10 border border-dark-700 hover:border-primary-500/50 rounded-lg transition-all text-xs"
            >
              <Mail className="w-4 h-4 text-primary-400" />
              <span className="text-dark-200 break-all">{member.email}</span>
            </a>
          )}
        </div>
      </div>
    </motion.div>
  )
}

// Modern Card
function ModernCard({ member, index }: CardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.2 }}
      className="group"
    >
      <div className="relative bg-gradient-to-br from-dark-900 to-dark-950 rounded-3xl overflow-hidden border border-dark-700 hover:border-primary-500 transition-all duration-500">
        {/* Top Color Bar */}
        <div className={`h-2 bg-gradient-to-r ${member.gradient}`} />
        
        <div className="p-8">
          {/* Image Circle */}
          <div className="relative w-40 h-40 mx-auto mb-6">
            <motion.div
              whileHover={{ scale: 1.1, rotate: 5 }}
              className="relative w-full h-full rounded-full overflow-hidden border-4 border-primary-500/30 group-hover:border-primary-400 transition-colors"
            >
              <Image
                src={member.image}
                alt={member.name}
                fill
                className="object-cover"
              />
              <div className={`absolute inset-0 bg-gradient-to-br ${member.gradient} opacity-0 group-hover:opacity-20 transition-opacity`} />
            </motion.div>
            
            {/* Floating Icons */}
            <motion.div
              animate={{ y: [-5, 5, -5] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -top-2 -right-2 bg-primary-500 rounded-full p-2"
            >
              <Star className="w-5 h-5 text-white" />
            </motion.div>
          </div>

          <h4 className="text-2xl font-bold text-center mb-2 group-hover:text-primary-400 transition-colors font-display">
            {member.name}
          </h4>
          
          <p className="text-center text-primary-400 font-semibold text-sm uppercase tracking-wider mb-6">
            {member.role}
          </p>

          <div className="space-y-2">
            <a
              href={`tel:${member.phone}`}
              className="flex items-center justify-center gap-2 px-4 py-3 bg-primary-500/10 hover:bg-primary-500/20 border border-primary-500/30 hover:border-primary-500 rounded-xl transition-all"
            >
              <Phone className="w-4 h-4 text-primary-400" />
              <span className="text-sm text-white">{member.phone}</span>
            </a>
            {member.email && (
              <a
                href={`mailto:${member.email}`}
                className="flex items-center justify-center gap-2 px-4 py-3 bg-primary-500/10 hover:bg-primary-500/20 border border-primary-500/30 hover:border-primary-500 rounded-xl transition-all"
              >
                <Mail className="w-4 h-4 text-primary-400" />
                <span className="text-xs text-white break-all">{member.email}</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

// Circular Spotlight Card
function CircularCard({ member, index }: CardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, type: 'spring' }}
      whileHover={{ y: -15, scale: 1.05 }}
      className="group"
    >
      <div className="relative bg-dark-900/50 backdrop-blur-xl rounded-2xl overflow-hidden border border-dark-700/50 hover:border-primary-500 transition-all duration-500 p-6">
        {/* Spotlight Effect */}
        <motion.div
          className={`absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br ${member.gradient} rounded-full blur-3xl opacity-0 group-hover:opacity-50 transition-opacity duration-500`}
        />
        
        {/* Image */}
        <div className="relative w-32 h-32 mx-auto mb-4">
          <motion.div
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.6 }}
            className="relative w-full h-full rounded-full overflow-hidden border-4 border-primary-500/40 group-hover:border-primary-400 transition-colors"
          >
            <Image
              src={member.image}
              alt={member.name}
              fill
              className="object-cover"
            />
          </motion.div>
          
          {/* Flame Badge */}
          <div className="absolute -bottom-1 -right-1 bg-gradient-to-br from-orange-500 to-red-500 rounded-full p-2">
            <Flame className="w-4 h-4 text-white" />
          </div>
        </div>

        <h4 className="text-lg font-bold text-center mb-1 group-hover:text-primary-400 transition-colors font-display">
          {member.name}
        </h4>
        
        <p className="text-center text-xs text-primary-400 font-semibold uppercase tracking-wider mb-4">
          {member.role}
        </p>

        <div className="space-y-2">
          <a
            href={`tel:${member.phone}`}
            className="flex items-center justify-center gap-2 px-3 py-2 bg-dark-800/50 hover:bg-primary-500/10 border border-dark-700 hover:border-primary-500/50 rounded-lg transition-all text-xs"
          >
            <Phone className="w-3 h-3 text-primary-400" />
            <span className="text-dark-200">{member.phone}</span>
          </a>
          {member.email && (
            <a
              href={`mailto:${member.email}`}
              className="flex items-center justify-center gap-1 px-3 py-2 bg-dark-800/50 hover:bg-primary-500/10 border border-dark-700 hover:border-primary-500/50 rounded-lg transition-all"
            >
              <Mail className="w-3 h-3 text-primary-400" />
              <span className="text-[10px] text-dark-200 break-all">{member.email}</span>
            </a>
          )}
        </div>
      </div>
    </motion.div>
  )
}

// Compact Professional Card
function CompactCard({ member, index }: CardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.2 }}
      whileHover={{ y: -10 }}
      className="group"
    >
      <div className="relative bg-gradient-to-br from-dark-900 via-dark-900 to-dark-800 rounded-2xl overflow-hidden border border-dark-700 hover:border-primary-500 transition-all duration-500 p-6">
        {/* Gradient Bar */}
        <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${member.gradient}`} />
        
        <div className="flex items-center gap-6">
          {/* Image */}
          <div className="relative w-32 h-32 flex-shrink-0">
            <div className="relative w-full h-full rounded-xl overflow-hidden border-2 border-dark-700 group-hover:border-primary-500 transition-colors">
              <Image
                src={member.image}
                alt={member.name}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
          </div>

          {/* Info */}
          <div className="flex-1">
            <h4 className="text-xl font-bold mb-2 group-hover:text-primary-400 transition-colors font-display">
              {member.name}
            </h4>
            
            <div className="flex items-center gap-2 mb-4">
              <Briefcase className="w-4 h-4 text-primary-400" />
              <p className="text-sm text-primary-400 font-semibold uppercase">
                {member.role}
              </p>
            </div>

            <div className="space-y-2">
              <a
                href={`tel:${member.phone}`}
                className="flex items-center gap-2 text-sm text-dark-300 hover:text-primary-400 transition-colors"
              >
                <Phone className="w-4 h-4" />
                {member.phone}
              </a>
              {member.email && (
                <a
                  href={`mailto:${member.email}`}
                  className="flex items-center gap-2 text-xs text-dark-300 hover:text-primary-400 transition-colors break-all"
                >
                  <Mail className="w-4 h-4 flex-shrink-0" />
                  {member.email}
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
