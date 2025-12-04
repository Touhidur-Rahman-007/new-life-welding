'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Flame, Facebook, Twitter, Instagram, Linkedin, Youtube, Mail, Phone, MapPin, ArrowRight } from 'lucide-react'

const footerLinks = {
  programs: [
    { name: 'Basic Welding', href: '#programs' },
    { name: 'Advanced MIG/TIG', href: '#programs' },
    { name: 'Pipe Welding', href: '#programs' },
    { name: 'Underwater Welding', href: '#programs' },
    { name: 'Robotic Welding', href: '#programs' },
    { name: 'Fabrication & Design', href: '#programs' },
  ],
  resources: [
    { name: 'Certifications', href: '#certifications' },
    { name: 'Facilities', href: '#facilities' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Blog', href: '#' },
    { name: 'Career Center', href: '#' },
  ],
  company: [
    { name: 'About Us', href: '#about' },
    { name: 'Our Team', href: '#' },
    { name: 'Success Stories', href: '#testimonials' },
    { name: 'Partners', href: '#' },
    { name: 'Careers', href: '#' },
    { name: 'Contact', href: '#contact' },
  ],
}

const socialLinks = [
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Youtube, href: '#', label: 'YouTube' },
]

export default function Footer() {
  return (
    <footer className="relative bg-dark-950 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(249,115,22,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(249,115,22,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Footer */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-3 mb-6 cursor-pointer"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center shadow-lg">
                  <Flame className="w-8 h-8 text-white" />
                </div>
                <div>
                  <div className="text-2xl font-bold">New Life</div>
                  <div className="text-sm text-primary-400">Welding Training Center</div>
                </div>
              </motion.div>
            </Link>
            
            <p className="text-dark-400 mb-6 leading-relaxed">
              Empowering the next generation of welders with industry-leading training, 
              state-of-the-art facilities, and a commitment to excellence.
            </p>

            {/* Contact Info */}
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary-500 flex-shrink-0 mt-1" />
                <div className="text-dark-400">
                  <div>House 15, Road 8, Block C, Mirpur-1</div>
                  <div>Dhaka-1216, Bangladesh</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary-500" />
                <a href="tel:+1234567890" className="text-dark-400 hover:text-white transition-colors">
                  +880 1700-000000
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary-500" />
                <a href="mailto:info@newlifewelding.com" className="text-dark-400 hover:text-white transition-colors">
                  info@newlifewelding.com
                </a>
              </div>
            </div>
          </div>

          {/* Programs Column */}
          <div>
            <h3 className="text-lg font-bold mb-6">Programs</h3>
            <ul className="space-y-3">
              {footerLinks.programs.map((link) => (
                <li key={link.name}>
                  <Link href={link.href}>
                    <motion.div
                      whileHover={{ x: 5 }}
                      className="text-dark-400 hover:text-white transition-all flex items-center gap-2 group"
                    >
                      <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                      {link.name}
                    </motion.div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Column */}
          <div>
            <h3 className="text-lg font-bold mb-6">Resources</h3>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link href={link.href}>
                    <motion.div
                      whileHover={{ x: 5 }}
                      className="text-dark-400 hover:text-white transition-all flex items-center gap-2 group"
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
            <h3 className="text-lg font-bold mb-6">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link href={link.href}>
                    <motion.div
                      whileHover={{ x: 5 }}
                      className="text-dark-400 hover:text-white transition-all flex items-center gap-2 group"
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

        {/* Newsletter */}
        <div className="py-12 border-t border-dark-800">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
            <p className="text-dark-400 mb-6">
              Subscribe to our newsletter for program updates, industry news, and exclusive offers
            </p>
            <div className="flex gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 bg-dark-900 border border-dark-800 rounded-full text-white placeholder:text-dark-500 focus:outline-none focus:border-primary-500 transition-all"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-gradient-to-r from-primary-600 to-primary-500 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all"
              >
                Subscribe
              </motion.button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-8 border-t border-dark-800">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Copyright */}
            <div className="text-dark-500 text-sm">
              © {new Date().getFullYear()} New Life Welding Training Center. All rights reserved.
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <Link key={social.label} href={social.href}>
                  <motion.div
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="w-10 h-10 rounded-full bg-dark-900 hover:bg-dark-800 flex items-center justify-center border border-dark-800 hover:border-primary-500 transition-all"
                  >
                    <social.icon className="w-5 h-5 text-dark-400 hover:text-white" />
                  </motion.div>
                </Link>
              ))}
            </div>

            {/* Legal Links */}
            <div className="flex items-center gap-6 text-sm text-dark-500">
              <Link href="#" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="hover:text-white transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary-500/5 rounded-full blur-3xl" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent-500/5 rounded-full blur-3xl" />
    </footer>
  )
}
