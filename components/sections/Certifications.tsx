'use client'

import { motion } from 'framer-motion'
import { Award, Shield, Star, TrendingUp, CheckCircle2, FileCheck } from 'lucide-react'
import Image from 'next/image'
import { AnimatedSection, StaggeredContainer, fadeInUp } from '@/components/ui/AnimatedSection'
import { useLanguage } from '@/contexts/LanguageContext'

const certifications = [
  {
    id: 'api-1104',
    title: 'API 1104 Pipeline Welding',
    titleBn: 'API 1104 পাইপলাইন ওয়েল্ডিং',
    org: 'American Petroleum Institute',
    orgBn: 'আমেরিকান পেট্রোলিয়াম ইনস্টিটিউট',
    icon: TrendingUp,
    color: 'from-emerald-600 to-emerald-700',
    duration: '6 Weeks',
    durationBn: '৬ সপ্তাহ',
    level: 'Advanced',
    levelBn: 'উন্নত',
    description: 'Essential certification for pipeline welding in the energy sector.',
    descriptionBn: 'জ্বালানি খাতে পাইপলাইন ওয়েল্ডিংয়ের জন্য অপরিহার্য সার্টিফিকেশন।',
    requirements: ['6G position capability', 'Field experience', 'Code welding proficiency'],
    requirementsBn: ['6G পজিশন সক্ষমতা', 'ফিল্ড অভিজ্ঞতা', 'কোড ওয়েল্ডিং দক্ষতা'],
    benefits: ['Pipeline projects', 'Travel opportunities', '$80,000-$120,000 annually'],
    benefitsBn: ['পাইপলাইন প্রকল্প', 'ভ্রমণের সুযোগ', 'বার্ষিক $৮০,০০০-$১২০,০০০'],
  },
  {
    id: 'aws-d17',
    title: 'AWS D17.1 Aerospace',
    titleBn: 'AWS D17.1 এয়ারোস্পেস',
    org: 'American Welding Society',
    orgBn: 'আমেরিকান ওয়েল্ডিং সোসাইটি',
    icon: CheckCircle2,
    color: 'from-teal-600 to-teal-700',
    duration: '8 Weeks',
    durationBn: '৮ সপ্তাহ',
    level: 'Expert',
    levelBn: 'বিশেষজ্ঞ',
    description: 'Precision welding certification for aerospace and aviation applications.',
    descriptionBn: 'এয়ারোস্পেস এবং বিমান অ্যাপ্লিকেশনের জন্য প্রিসিশন ওয়েল্ডিং সার্টিফিকেশন।',
    requirements: ['TIG welding mastery', 'Aerospace materials knowledge', 'Microscopic quality'],
    requirementsBn: ['TIG ওয়েল্ডিং দক্ষতা', 'এয়ারোস্পেস উপকরণ জ্ঞান', 'মাইক্রোস্কোপিক গুণমান'],
    benefits: ['Aerospace industry', 'High precision work', 'Premium compensation'],
    benefitsBn: ['এয়ারোস্পেস শিল্প', 'উচ্চ নির্ভুলতার কাজ', 'প্রিমিয়াম ক্ষতিপূরণ'],
  },
  {
    id: 'cw',
    title: 'Certified Welder (CW)',
    titleBn: 'সার্টিফাইড ওয়েল্ডার (CW)',
    org: 'American Welding Society',
    orgBn: 'আমেরিকান ওয়েল্ডিং সোসাইটি',
    icon: FileCheck,
    color: 'from-green-600 to-green-700',
    duration: '1 Month',
    durationBn: '১ মাস',
    level: 'Entry-Professional',
    levelBn: 'প্রবেশ-পেশাদার',
    description: 'Entry-level certification validating core welding competencies.',
    descriptionBn: 'মূল ওয়েল্ডিং দক্ষতা যাচাই করার জন্য প্রবেশ-স্তরের সার্টিফিকেশন।',
    requirements: ['Basic welding training', 'Practical test', 'Written exam'],
    requirementsBn: ['বেসিক ওয়েল্ডিং প্রশিক্ষণ', 'ব্যবহারিক পরীক্ষা', 'লিখিত পরীক্ষা'],
    benefits: ['Industry recognition', 'Employment advantage', 'Career foundation'],
    benefitsBn: ['শিল্প স্বীকৃতি', 'কর্মসংস্থানের সুবিধা', 'ক্যারিয়ারের ভিত্তি'],
  },
]

const certificationPath = [
  { stage: 'Foundation', stageBn: 'ভিত্তি', certs: ['Certified Welder (CW)', 'OSHA Safety'], certsBn: ['সার্টিফাইড ওয়েল্ডার (CW)', 'OSHA নিরাপত্তা'], duration: '1-3 months', durationBn: '১-৩ মাস' },
  { stage: 'Professional', stageBn: 'পেশাদার', certs: ['AWS D1.1', 'ASME Section IX'], certsBn: ['AWS D1.1', 'ASME সেকশন IX'], duration: '4-6 months', durationBn: '৪-৬ মাস' },
  { stage: 'Specialized', stageBn: 'বিশেষায়িত', certs: ['API 1104', 'AWS D17.1'], certsBn: ['API 1104', 'AWS D17.1'], duration: '6-12 months', durationBn: '৬-১২ মাস' },
  { stage: 'Expert', stageBn: 'বিশেষজ্ঞ', certs: ['CWI', 'CWE'], certsBn: ['CWI', 'CWE'], duration: '12-24 months', durationBn: '১২-২৪ মাস' },
]

export default function Certifications() {
  const { language } = useLanguage()

  return (
    <section id="certifications" className="relative py-20 md:py-32 bg-gradient-to-b from-white to-dark-50">
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
              {language === 'bn' ? 'পেশাদার সার্টিফিকেশন' : 'Professional Certifications'}
            </span>
          </motion.div>
          <h2 className={`heading-large text-dark-900 mb-6 ${language === 'bn' ? 'font-bengali' : ''}`}>
            {language === 'bn' ? 'শিল্প-স্বীকৃত' : 'Industry-Recognized'} <span className="bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent">{language === 'bn' ? 'সার্টিফিকেশন' : 'Certifications'}</span>
          </h2>
          <p className={`text-lg md:text-xl text-dark-600 max-w-3xl mx-auto ${language === 'bn' ? 'font-bengali' : ''}`}>
            {language === 'bn' ? 'উচ্চ বেতনের ক্যারিয়ার এবং বৈশ্বিক সুযোগের দরজা খুলে দেয় এমন সনদ অর্জন করুন' : 'Earn credentials that open doors to high-paying careers and global opportunities'}
          </p>
        </AnimatedSection>

        {/* Certification Cards */}
        <StaggeredContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              variants={fadeInUp}
              whileHover={{ y: -10, scale: 1.02 }}
              className="relative group"
            >
              <div className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-dark-100">
                {/* Icon */}
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  className={`w-16 h-16 rounded-xl bg-gradient-to-br ${cert.color} flex items-center justify-center mb-6 shadow-lg`}
                >
                  <cert.icon className="w-8 h-8 text-white" />
                </motion.div>

                {/* Badge */}
                <div className="absolute top-6 right-6">
                  <span className={`px-3 py-1 rounded-full bg-dark-100 text-dark-700 text-xs font-semibold ${language === 'bn' ? 'font-bengali' : ''}`}>
                    {language === 'bn' ? cert.levelBn : cert.level}
                  </span>
                </div>

                {/* Content */}
                <h3 className={`text-2xl font-bold text-dark-900 mb-2 ${language === 'bn' ? 'font-bengali' : ''}`}>
                  {language === 'bn' ? cert.titleBn : cert.title}
                </h3>
                <p className={`text-sm text-emerald-600 mb-4 font-medium ${language === 'bn' ? 'font-bengali' : ''}`}>
                  {language === 'bn' ? cert.orgBn : cert.org}
                </p>
                <p className={`text-dark-600 mb-6 ${language === 'bn' ? 'font-bengali' : ''}`}>
                  {language === 'bn' ? cert.descriptionBn : cert.description}
                </p>

                {/* Duration */}
                <div className={`flex items-center gap-2 mb-6 text-dark-700 ${language === 'bn' ? 'font-bengali' : ''}`}>
                  <Award className="w-4 h-4" />
                  <span className="text-sm font-medium">{language === 'bn' ? cert.durationBn : cert.duration} {language === 'bn' ? 'প্রোগ্রাম' : 'Program'}</span>
                </div>

                {/* Requirements */}
                <div className="mb-6">
                  <h4 className={`text-sm font-semibold text-dark-900 mb-3 ${language === 'bn' ? 'font-bengali' : ''}`}>
                    {language === 'bn' ? 'প্রয়োজনীয়তা:' : 'Requirements:'}
                  </h4>
                  <ul className="space-y-2">
                    {(language === 'bn' ? cert.requirementsBn : cert.requirements).map((req, i) => (
                      <li key={i} className={`flex items-start gap-2 text-sm text-dark-600 ${language === 'bn' ? 'font-bengali' : ''}`}>
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Benefits */}
                <div>
                  <h4 className={`text-sm font-semibold text-dark-900 mb-3 ${language === 'bn' ? 'font-bengali' : ''}`}>
                    {language === 'bn' ? 'সুবিধা:' : 'Benefits:'}
                  </h4>
                  <ul className="space-y-2">
                    {(language === 'bn' ? cert.benefitsBn : cert.benefits).map((benefit, i) => (
                      <li key={i} className={`flex items-start gap-2 text-sm text-dark-600 ${language === 'bn' ? 'font-bengali' : ''}`}>
                        <Star className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Hover Glow */}
                <div className={`absolute inset-0 bg-gradient-to-br ${cert.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-500`} />
              </div>
            </motion.div>
          ))}
        </StaggeredContainer>

        {/* Certification Path */}
        <AnimatedSection>
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl">
            <h3 className={`text-3xl md:text-4xl font-bold text-center text-dark-900 mb-12 ${language === 'bn' ? 'font-bengali' : ''}`}>
              {language === 'bn' ? 'আপনার সার্টিফিকেশন' : 'Your Certification'} <span className="bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent">{language === 'bn' ? 'যাত্রা' : 'Journey'}</span>
            </h3>

            <div className="relative">
              {/* Stages */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
                {certificationPath.map((stage, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 }}
                    className="relative"
                  >
                    {/* Stage Number */}
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center shadow-lg"
                    >
                      <span className="text-2xl font-bold text-white">{index + 1}</span>
                    </motion.div>

                    {/* Content */}
                    <div className="text-center">
                      <h4 className={`text-xl font-bold text-dark-900 mb-3 ${language === 'bn' ? 'font-bengali' : ''}`}>
                        {language === 'bn' ? stage.stageBn : stage.stage}
                      </h4>
                      <div className="space-y-2 mb-4">
                        {(language === 'bn' ? stage.certsBn : stage.certs).map((cert, i) => (
                          <div
                            key={i}
                            className={`text-sm text-dark-600 px-3 py-1 bg-dark-50 rounded-full inline-block mx-1 ${language === 'bn' ? 'font-bengali' : ''}`}
                          >
                            {cert}
                          </div>
                        ))}
                      </div>
                      <p className={`text-sm text-emerald-600 font-medium ${language === 'bn' ? 'font-bengali' : ''}`}>
                        {language === 'bn' ? stage.durationBn : stage.duration}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
