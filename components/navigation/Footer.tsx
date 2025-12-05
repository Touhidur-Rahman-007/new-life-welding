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
    <footer className="relative overflow-hidden bg-gradient-to-br from-stone-100 via-neutral-50 to-warm-gray-100">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(120,113,108,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(120,113,108,0.04)_1px,transparent_1px)] bg-[size:40px_40px]" />
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-br from-amber-200/20 to-orange-200/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-rose-200/20 to-pink-200/20 rounded-full blur-3xl" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top CTA Banner */}
        <div className="py-8 border-b border-stone-200">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row items-center justify-between gap-6 bg-gradient-to-r from-amber-500 via-orange-500 to-rose-500 rounded-2xl p-6 shadow-xl"
          >
            <div className="text-center md:text-left">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-1">Ready to Start Your Welding Career?</h3>
              <p className="text-white/90 text-sm">Join 500+ successful graduates working worldwide</p>
            </div>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-6 py-3 bg-white text-orange-600 font-bold rounded-full shadow-lg hover:shadow-xl transition-all"
            >
              <span>Enroll Now</span>
              <Send className="w-4 h-4" />
            </motion.a>
          </motion.div>
        </div>
        {/* Main Footer */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column with Logo */}
          <div className="lg:col-span-2">
            <Link href="/">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-4 mb-6 cursor-pointer"
              >
                {/* Logo - same as Navbar */}
                <div className="relative w-16 h-16 rounded-xl overflow-hidden shadow-lg border-2 border-amber-400/50 bg-white">
                  <Image
                    src="/images/team/Screenshot%202025-11-27%20102701.png"
                    alt="New Life Logo"
                    fill
                    className="object-contain p-1"
                  />
                </div>
                <div>
                  <div className="text-xl font-bold text-gray-800">New Life</div>
                  <div className="text-sm text-amber-600 font-medium">Welding Training Center</div>
                </div>
              </motion.div>
            </Link>
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-start gap-3 p-3 bg-white/80 rounded-xl border border-stone-200 shadow-sm">
                <MapPin className="w-5 h-5 text-amber-600 flex-shrink-0 mt-1" />
                <div className="text-gray-700 text-sm">
                  House # 5372, Road # Dakshinkhan Bazar, Dakshinkhan, Dhaka 1230, Bangladesh
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 bg-white/80 rounded-xl border border-stone-200 shadow-sm">
                <Phone className="w-5 h-5 text-green-600" />
                <a href="tel:+8801712577508" className="text-gray-700 hover:text-amber-600 transition-colors font-medium">
                  01712-577508 , 01748-003338
                </a>
              </div>
              <div className="flex items-center gap-3 p-3 bg-white/80 rounded-xl border border-stone-200 shadow-sm">
                <Mail className="w-5 h-5 text-rose-500" />
                <a href="mailto:newlifeweldingtrainingcenter@gmail.com" className="text-gray-700 hover:text-amber-600 transition-colors text-sm">
                  newlifeweldingtrainingcenter@gmail.com
                </a>
              </div>
            </div>
            {/* Social Links */}
            <div className="mt-6 flex gap-3">
              <a href="https://www.facebook.com/newlifeweldingtrainingcenter" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-blue-500 hover:bg-blue-600 flex items-center justify-center transition-colors shadow-md">
                <Facebook className="w-5 h-5 text-white" />
              </a>
              <a href="https://www.youtube.com/@newlifeweldingtrainingcent9244" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-red-500 hover:bg-red-600 flex items-center justify-center transition-colors shadow-md">
                <Youtube className="w-5 h-5 text-white" />
              </a>
              <a href="http://www.newlifeweldingtrainingcenter.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-amber-500 hover:bg-amber-600 flex items-center justify-center transition-colors shadow-md">
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
                      className="text-gray-600 hover:text-amber-600 transition-all flex items-center gap-2 group"
                    >
                      <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity text-amber-500" />
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
                      className="text-gray-600 hover:text-rose-600 transition-all flex items-center gap-2 group"
                    >
                      <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity text-rose-500" />
                      {link.name}
                    </motion.div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        {/* Bottom Bar */}
        <div className="border-t border-stone-300 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-600 text-sm flex items-center gap-2">
              © {new Date().getFullYear()} New Life Welding Training Center. Made with <Heart className="w-4 h-4 text-red-500 fill-red-500" /> in Bangladesh
            </p>
            <div className="flex gap-6 text-sm">
              <Link href="#" className="text-gray-600 hover:text-amber-600 transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="text-gray-600 hover:text-amber-600 transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}