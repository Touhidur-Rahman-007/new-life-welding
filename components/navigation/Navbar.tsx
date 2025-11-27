'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, Flame, Phone, ChevronDown } from 'lucide-react'
import { useTheme } from 'next-themes'

const navLinks = [
  { name: 'Home', href: '#' },
  { 
    name: 'Programs', 
    href: '#programs',
    submenu: [
      { name: 'Basic Welding', href: '#programs' },
      { name: 'Advanced MIG/TIG', href: '#programs' },
      { name: 'Pipe Welding', href: '#programs' },
      { name: 'Underwater Welding', href: '#programs' },
      { name: 'Robotic Welding', href: '#programs' },
      { name: 'Fabrication & Design', href: '#programs' },
    ]
  },
  { name: 'Certifications', href: '#certifications' },
  { name: 'About', href: '#about' },
  { name: 'Team', href: '#team' },
  { name: 'Facilities', href: '#facilities' },
  { name: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null)
  const { scrollY } = useScroll()
  const { theme, setTheme } = useTheme()
  
  const backgroundColor = useTransform(
    scrollY,
    [0, 100],
    ['rgba(15, 23, 42, 0)', 'rgba(15, 23, 42, 0.95)']
  )
  
  const backdropBlur = useTransform(
    scrollY,
    [0, 100],
    ['blur(0px)', 'blur(20px)']
  )

  return (
    <motion.nav
      style={{ backgroundColor, backdropFilter: backdropBlur }}
      className="fixed top-0 left-0 right-0 z-50 border-b border-white/10"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-3 cursor-pointer"
            >
              <motion.div
                whileHover={{ rotate: 5 }}
                transition={{ duration: 0.3 }}
                className="relative w-12 h-12 rounded-xl overflow-hidden shadow-lg border-2 border-primary-500/30 bg-white/5 backdrop-blur-sm"
              >
                <Image
                  src="/images/team/Screenshot%202025-11-27%20102701.png"
                  alt="New Life Logo"
                  fill
                  className="object-contain p-1"
                  priority
                />
              </motion.div>
              <div>
                <div className="text-xl font-bold text-white">New Life</div>
                <div className="text-xs text-primary-400">Welding Training Center</div>
              </div>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-2">
            {navLinks.map((link) => (
              <div
                key={link.name}
                className="relative"
                onMouseEnter={() => link.submenu && setActiveSubmenu(link.name)}
                onMouseLeave={() => setActiveSubmenu(null)}
              >
                <Link href={link.href}>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    className="px-4 py-2 text-white/90 hover:text-white font-medium rounded-lg hover:bg-white/10 transition-all flex items-center gap-1"
                  >
                    {link.name}
                    {link.submenu && <ChevronDown className="w-4 h-4" />}
                  </motion.button>
                </Link>

                {/* Submenu */}
                {link.submenu && activeSubmenu === link.name && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute top-full left-0 mt-2 w-64 bg-dark-900/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/10 overflow-hidden"
                  >
                    {link.submenu.map((item) => (
                      <Link key={item.name} href={item.href}>
                        <motion.div
                          whileHover={{ x: 5, backgroundColor: 'rgba(249, 115, 22, 0.1)' }}
                          className="px-6 py-3 text-white/80 hover:text-white text-sm border-b border-white/5 last:border-0 transition-all"
                        >
                          {item.name}
                        </motion.div>
                      </Link>
                    ))}
                  </motion.div>
                )}
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <Link href="tel:+1234567890">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary-600 to-primary-500 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all"
              >
                <Phone className="w-4 h-4" />
                Call Now
              </motion.button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden w-10 h-10 rounded-lg bg-white/10 backdrop-blur-lg flex items-center justify-center"
          >
            {isOpen ? <X className="w-6 h-6 text-white" /> : <Menu className="w-6 h-6 text-white" />}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden pb-6"
          >
            {navLinks.map((link) => (
              <div key={link.name} className="border-b border-white/10">
                <Link href={link.href} onClick={() => setIsOpen(false)}>
                  <motion.div
                    whileHover={{ x: 5 }}
                    className="py-4 text-white/90 hover:text-white font-medium"
                  >
                    {link.name}
                  </motion.div>
                </Link>
                {link.submenu && (
                  <div className="pl-4 pb-4 space-y-2">
                    {link.submenu.map((item) => (
                      <Link key={item.name} href={item.href} onClick={() => setIsOpen(false)}>
                        <div className="py-2 text-sm text-white/70 hover:text-white">
                          {item.name}
                        </div>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Link href="tel:+1234567890">
              <motion.button
                whileHover={{ scale: 1.02 }}
                className="w-full mt-4 flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-primary-600 to-primary-500 text-white rounded-full font-semibold"
              >
                <Phone className="w-4 h-4" />
                Call Now
              </motion.button>
            </Link>
          </motion.div>
        )}
      </div>
    </motion.nav>
  )
}
