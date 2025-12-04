'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Anchor, Facebook, Youtube, Mail, Phone, MapPin, Globe, ArrowRight } from 'lucide-react'
const footerLinks = {
  programs: [
    { name: 'Basic Welding', href: '#programs' },
    { name: 'Advanced MIG/TIG', href: '#programs' },
    { name: 'Pipe Welding', href: '#programs' },
    { name: 'Underwater Welding', href: '#programs' },
    { name: 'Robotic Welding', href: '#programs' },
  ],
  company: [
    { name: 'About Us', href: '#about' },
    { name: 'Our Team', href: '#team' },
    { name: 'Success Stories', href: '#testimonials' },
    { name: 'Visa Processing', href: '#visa' },
    { name: 'Contact', href: '#contact' },
  ],
}
export default function Footer() {
  return (
    <footer className="relative bg-[#4ADE80] text-dark-900 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Footer */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column with Logo */}
          <div className="lg:col-span-2">
            <Link href="/">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-4 mb-6 cursor-pointer"
              >
                {/* Logo Icon */}
                <div className="w-20 h-20 rounded-full bg-blue-800 flex items-center justify-center border-4 border-purple-600 shadow-lg">
                  <div className="text-center">
                    <Anchor className="w-8 h-8 text-white mx-auto" />
                    <span className="text-xs text-white font-bold">NEW LIFE</span>
                  </div>
                </div>
              </motion.div>
            </Link>
            <h3 className="text-xl font-bold text-dark-900 mb-4">New Life Welding Training Center</h3>
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-dark-800 flex-shrink-0 mt-1" />
                <div className="text-dark-800">
                  House # 5372, Road # Dakshinkhan Bazar, Dakshinkhan, Dhaka 1230, Bangladesh
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-dark-800" />
                <a href="tel:+8801712577508" className="text-dark-800 hover:text-dark-900 transition-colors font-medium">
                  01712-577508 , 01748-003338
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-dark-800" />
                <a href="mailto:newlifeweldingtrainingcenter@gmail.com" className="text-dark-800 hover:text-dark-900 transition-colors">
                  newlifeweldingtrainingcenter@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Globe className="w-5 h-5 text-dark-800" />
                <a href="http://www.newlifeweldingtrainingcenter.com" target="_blank" rel="noopener noreferrer" className="text-dark-800 hover:text-dark-900 transition-colors">
                  www.newlifeweldingtrainingcenter.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Facebook className="w-5 h-5 text-dark-800" />
                <a href="https://www.facebook.com/newlifeweldingtrainingcenter" target="_blank" rel="noopener noreferrer" className="text-dark-800 hover:text-dark-900 transition-colors">
                  facebook.com/newlifeweldingtrainingcenter
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Youtube className="w-5 h-5 text-dark-800" />
                <a href="https://www.youtube.com/@newlifeweldingtrainingcent9244" target="_blank" rel="noopener noreferrer" className="text-dark-800 hover:text-dark-900 transition-colors">
                  youtube.com/@newlifeweldingtrainingcent9244
                </a>
              </div>
            </div>
          </div>
          {/* Programs Column */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-dark-900">Programs</h3>
            <ul className="space-y-3">
              {footerLinks.programs.map((link) => (
                <li key={link.name}>
                  <Link href={link.href}>
                    <motion.div
                      whileHover={{ x: 5 }}
                      className="text-dark-700 hover:text-dark-900 transition-all flex items-center gap-2 group"
                    >
                      <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                      {link.name}
                    </motion.div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {/* Company Column */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-dark-900">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link href={link.href}>
                    <motion.div
                      whileHover={{ x: 5 }}
                      className="text-dark-700 hover:text-dark-900 transition-all flex items-center gap-2 group"
                    >
                      <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                      {link.name}
                    </motion.div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        {/* Bottom Bar */}
        <div className="border-t border-dark-400/30 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-dark-700 text-sm">
              © {new Date().getFullYear()} New Life Welding Training Center. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <Link href="#" className="text-dark-700 hover:text-dark-900 transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="text-dark-700 hover:text-dark-900 transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}