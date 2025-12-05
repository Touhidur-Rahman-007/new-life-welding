'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { Facebook, Youtube, Mail, Phone, MapPin, Globe, ArrowRight, Heart, Send } from 'lucide-react'

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
    <footer className="relative overflow-hidden bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />
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
                {/* Logo - same as Navbar */}
                <div className="relative w-16 h-16 rounded-xl overflow-hidden shadow-lg border-2 border-primary-500/30 bg-white/20 backdrop-blur-sm">
                  <Image
                    src="/images/team/Screenshot%202025-11-27%20102701.png"
                    alt="New Life Logo"
                    fill
                    className="object-contain p-1"
                  />
                </div>
                <div>
                  <div className="text-xl font-bold text-gray-800">New Life</div>
                  <div className="text-sm text-indigo-600 font-medium">Welding Training Center</div>
                </div>
              </motion.div>
            </Link>
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-start gap-3 p-3 bg-white/60 rounded-xl border border-indigo-100">
                <MapPin className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-1" />
                <div className="text-gray-700 text-sm">
                  House # 5372, Road # Dakshinkhan Bazar, Dakshinkhan, Dhaka 1230, Bangladesh
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 bg-white/60 rounded-xl border border-indigo-100">
                <Phone className="w-5 h-5 text-green-600" />
                <a href="tel:+8801712577508" className="text-gray-700 hover:text-indigo-600 transition-colors font-medium">
                  01712-577508 , 01748-003338
                </a>
              </div>
              <div className="flex items-center gap-3 p-3 bg-white/60 rounded-xl border border-indigo-100">
                <Mail className="w-5 h-5 text-orange-500" />
                <a href="mailto:newlifeweldingtrainingcenter@gmail.com" className="text-gray-700 hover:text-indigo-600 transition-colors text-sm">
                  newlifeweldingtrainingcenter@gmail.com
                </a>
              </div>
            </div>
            {/* Social Links */}
            <div className="mt-6 flex gap-3">
              <a href="https://www.facebook.com/newlifeweldingtrainingcenter" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-blue-500 hover:bg-blue-600 flex items-center justify-center transition-colors">
                <Facebook className="w-5 h-5 text-white" />
              </a>
              <a href="https://www.youtube.com/@newlifeweldingtrainingcent9244" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-red-500 hover:bg-red-600 flex items-center justify-center transition-colors">
                <Youtube className="w-5 h-5 text-white" />
              </a>
              <a href="http://www.newlifeweldingtrainingcenter.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-teal-500 hover:bg-teal-600 flex items-center justify-center transition-colors">
                <Globe className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>
          {/* Programs Column */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-gray-800">Programs</h3>
            <ul className="space-y-3">
              {footerLinks.programs.map((link) => (
                <li key={link.name}>
                  <Link href={link.href}>
                    <motion.div
                      whileHover={{ x: 5 }}
                      className="text-gray-600 hover:text-indigo-600 transition-all flex items-center gap-2 group"
                    >
                      <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity text-indigo-500" />
                      {link.name}
                    </motion.div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {/* Company Column */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-gray-800">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link href={link.href}>
                    <motion.div
                      whileHover={{ x: 5 }}
                      className="text-gray-600 hover:text-purple-600 transition-all flex items-center gap-2 group"
                    >
                      <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity text-purple-500" />
                      {link.name}
                    </motion.div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        {/* Bottom Bar */}
        <div className="border-t border-indigo-200 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-600 text-sm flex items-center gap-2">
              © {new Date().getFullYear()} New Life Welding Training Center. Made with <Heart className="w-4 h-4 text-red-500 fill-red-500" /> in Bangladesh
            </p>
            <div className="flex gap-6 text-sm">
              <Link href="#" className="text-gray-600 hover:text-indigo-600 transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="text-gray-600 hover:text-indigo-600 transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}