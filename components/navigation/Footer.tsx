'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { Facebook, Youtube, Mail, Phone, MapPin, Globe, ArrowRight, Heart, ExternalLink } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'

export default function Footer() {
  const { language } = useLanguage()

  const footerLinks = {
    programs: [
      { name: language === 'bn' ? 'অ্যাডভান্সড MIG/TIG' : 'Advanced MIG/TIG', href: '/programs/advanced-mig-tig' },
      { name: language === 'bn' ? 'পাইপ ওয়েল্ডিং' : 'Pipe Welding', href: '/programs/pipe-welding' },
      { name: language === 'bn' ? 'স্ট্রাকচারাল ওয়েল্ডিং' : 'Structural Welding', href: '/programs/structural-welding' },
    ],
    company: [
      { name: language === 'bn' ? 'আমাদের সম্পর্কে' : 'About Us', href: '/#about' },
      { name: language === 'bn' ? 'আমাদের টিম' : 'Our Team', href: '/#team' },
      { name: language === 'bn' ? 'যোগাযোগ' : 'Contact', href: '/#contact' },
    ],
  }
  return (
    <footer className="relative overflow-hidden">
      {/* Premium Dark Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-zinc-900" />

      {/* Decorative Gradient Orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-violet-600/20 to-purple-600/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-to-br from-cyan-500/15 to-blue-500/10 rounded-full blur-3xl" />
      <div className="absolute top-1/2 right-0 w-64 h-64 bg-gradient-to-br from-emerald-500/10 to-teal-500/10 rounded-full blur-3xl" />

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Footer */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column with Logo */}
          <div className="lg:col-span-2">
            <Link href="/">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="flex items-center gap-4 mb-8 cursor-pointer"
              >
                <div className="relative w-20 h-20 rounded-2xl overflow-hidden shadow-2xl border-2 border-emerald-500/30 bg-white/10 backdrop-blur-sm p-1">
                  <Image
                    src="/images/team/Screenshot%202025-11-27%20102701.png"
                    alt="New Life Logo"
                    fill
                    className="object-contain"
                  />
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">New Life</div>
                  <div className={`text-sm text-emerald-400 font-medium ${language === 'bn' ? 'font-bengali' : ''}`}>{language === 'bn' ? 'ওয়েল্ডিং প্রশিক্ষণ কেন্দ্র' : 'Welding Training Center'}</div>
                </div>
              </motion.div>
            </Link>

            {/* Contact Cards */}
            <div className="space-y-3">
              <motion.div
                whileHover={{ x: 5 }}
                className="flex items-start gap-4 p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-emerald-500/30 transition-all"
              >
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center flex-shrink-0 shadow-lg">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className={`text-xs text-emerald-400 font-semibold mb-1 ${language === 'bn' ? 'font-bengali' : ''}`}>{language === 'bn' ? 'ঠিকানা' : 'ADDRESS'}</div>
                  <div className={`text-gray-300 text-sm ${language === 'bn' ? 'font-bengali' : ''}`}>
                    {language === 'bn' ? 'বাড়ি # ৫৩৭২, দক্ষিণখান বাজার, ঢাকা ১২৩০, বাংলাদেশ' : 'House # 5372, Dakshinkhan Bazar, Dhaka 1230, Bangladesh'}
                  </div>
                </div>
              </motion.div>

              <motion.a
                href="tel:+8801712577508"
                whileHover={{ x: 5 }}
                className="flex items-center gap-4 p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-emerald-500/30 transition-all"
              >
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center flex-shrink-0 shadow-lg">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className={`text-xs text-emerald-400 font-semibold mb-1 ${language === 'bn' ? 'font-bengali' : ''}`}>{language === 'bn' ? 'ফোন' : 'PHONE'}</div>
                  <div className="text-gray-300 font-medium">01712-577508 , 01748-003338</div>
                </div>
              </motion.a>

              <motion.a
                href="mailto:newlifeweldingtrainingcenter@gmail.com"
                whileHover={{ x: 5 }}
                className="flex items-center gap-4 p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-emerald-500/30 transition-all"
              >
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center flex-shrink-0 shadow-lg">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className={`text-xs text-emerald-400 font-semibold mb-1 ${language === 'bn' ? 'font-bengali' : ''}`}>{language === 'bn' ? 'ইমেইল' : 'EMAIL'}</div>
                  <div className="text-gray-300 text-sm">newlifeweldingtrainingcenter@gmail.com</div>
                </div>
              </motion.a>
            </div>

            {/* Social Links */}
            <div className="mt-8 flex gap-3">
              <motion.a
                href="https://www.facebook.com/newlifeweldingtrainingcenter"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -3 }}
                className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center shadow-lg hover:shadow-blue-500/30 transition-all"
              >
                <Facebook className="w-5 h-5 text-white" />
              </motion.a>
              <motion.a
                href="https://www.youtube.com/@newlifeweldingtrainingcent9244"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -3 }}
                className="w-12 h-12 rounded-xl bg-gradient-to-br from-red-500 to-red-700 flex items-center justify-center shadow-lg hover:shadow-red-500/30 transition-all"
              >
                <Youtube className="w-5 h-5 text-white" />
              </motion.a>
              <motion.a
                href="http://www.newlifeweldingtrainingcenter.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -3 }}
                className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center shadow-lg hover:shadow-emerald-500/30 transition-all"
              >
                <Globe className="w-5 h-5 text-white" />
              </motion.a>
            </div>
          </div>

          {/* Programs Column */}
          <div>
            <h3 className={`text-lg font-bold mb-6 text-white flex items-center gap-3 ${language === 'bn' ? 'font-bengali' : ''}`}>
              <span className="w-10 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full" />
              {language === 'bn' ? 'প্রোগ্রাম' : 'Programs'}
            </h3>
            <ul className="space-y-4">
              {footerLinks.programs.map((link) => (
                <li key={link.name}>
                  <Link href={link.href}>
                    <motion.div
                      whileHover={{ x: 8 }}
                      className={`text-gray-400 hover:text-emerald-400 transition-all flex items-center gap-2 group ${language === 'bn' ? 'font-bengali' : ''}`}
                    >
                      <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity text-emerald-400" />
                      {link.name}
                    </motion.div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className={`text-lg font-bold mb-6 text-white flex items-center gap-3 ${language === 'bn' ? 'font-bengali' : ''}`}>
              <span className="w-10 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full" />
              {language === 'bn' ? 'কোম্পানি' : 'Company'}
            </h3>
            <ul className="space-y-4">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link href={link.href}>
                    <motion.div
                      whileHover={{ x: 8 }}
                      className={`text-gray-400 hover:text-emerald-400 transition-all flex items-center gap-2 group ${language === 'bn' ? 'font-bengali' : ''}`}
                    >
                      <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity text-emerald-400" />
                      {link.name}
                    </motion.div>
                  </Link>
                </li>
              ))}
            </ul>

            {/* Quick Contact CTA */}
            <div className="mt-8">
              <Link href="/#contact">
                <motion.button
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-600 text-white rounded-xl font-semibold text-sm shadow-lg hover:shadow-emerald-500/30 transition-all flex items-center justify-center gap-2 ${language === 'bn' ? 'font-bengali' : ''}`}
                >
                  {language === 'bn' ? 'যোগাযোগ করুন' : 'Get In Touch'}
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 py-6">
          <div className="flex flex-col items-center gap-4 text-center">
            <p className={`text-gray-500 text-sm ${language === 'bn' ? 'font-bengali' : ''}`}>
              © {new Date().getFullYear()} New Life Welding Training Center. {language === 'bn' ? 'সর্বস্বত্ব সংরক্ষিত।' : 'All rights reserved.'}
            </p>
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <span>{language === 'bn' ? 'ডেভেলপ করেছে' : 'Powered by'}</span>
              <motion.a
                href="https://zyrotech.io"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                className="inline-flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 font-semibold transition-colors"
              >
                Zyrotech Bangladesh
                <ExternalLink className="w-3.5 h-3.5" />
              </motion.a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}