'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, Flame, Phone, ChevronDown, Globe } from 'lucide-react'
import { useTheme } from 'next-themes'
import { useLanguage } from '@/contexts/LanguageContext'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null)
  const [scrolled, setScrolled] = useState(false)
  const { scrollY } = useScroll()
  const { theme, setTheme } = useTheme()
  const { language, setLanguage, t } = useLanguage()

  const navLinks = [
    { name: t('nav.home'), href: '/#home' },
    { name: t('nav.about'), href: '/#about' },
    { 
      name: t('nav.programs'), 
      href: '/#programs',
      submenu: [
        { name: t('nav.basicWelding'), href: '/#programs' },
        { name: t('nav.advancedMigTig'), href: '/#programs' },
        { name: t('nav.pipeWelding'), href: '/#programs' },
      ]
    },
    { name: t('nav.videos'), href: '/#videos' },
    { name: t('nav.team'), href: '/#team' },
    { name: t('nav.contact'), href: '/contact' },
  ]
  
  // Track scroll position for text color change
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  
  const backgroundColor = useTransform(
    scrollY,
    [0, 100],
    ['rgba(0, 0, 0, 0)', 'rgba(255, 255, 255, 0.95)']
  )
  
  const backdropBlur = useTransform(
    scrollY,
    [0, 100],
    ['blur(0px)', 'blur(20px)']
  )

  return (
    <motion.nav
      style={{ backgroundColor, backdropFilter: backdropBlur }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'border-b border-emerald-100 shadow-sm' : ''}`}
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
                className="relative w-12 h-12 rounded-xl overflow-hidden shadow-lg border-2 border-emerald-500/30 bg-white/5 backdrop-blur-sm"
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
                <div className={`text-xl font-bold transition-colors duration-300 ${scrolled ? 'text-gray-900' : 'text-white'}`}>New Life</div>
                <div className={`text-xs transition-colors duration-300 ${scrolled ? 'text-emerald-500' : 'text-emerald-400'}`}>Welding Training Center</div>
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
                    className={`px-4 py-2 font-medium rounded-lg transition-all flex items-center gap-1 ${language === 'bn' ? 'font-bengali' : ''} ${
                      scrolled 
                        ? 'text-gray-700 hover:text-emerald-600 hover:bg-emerald-50' 
                        : 'text-white/90 hover:text-white hover:bg-white/10'
                    }`}
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
                    className="absolute top-full left-0 mt-2 w-64 bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-emerald-100 overflow-hidden"
                  >
                    {link.submenu.map((item) => (
                      <Link key={item.name} href={item.href}>
                        <motion.div
                          whileHover={{ x: 5, backgroundColor: 'rgba(16, 185, 129, 0.1)' }}
                          className={`px-6 py-3 text-gray-700 hover:text-emerald-600 text-sm border-b border-emerald-50 last:border-0 transition-all ${language === 'bn' ? 'font-bengali' : ''}`}
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

          {/* CTA Button & Language Toggle */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Language Toggle */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setLanguage(language === 'en' ? 'bn' : 'en')}
              className={`flex items-center gap-2 px-4 py-2 rounded-full font-medium transition-all ${
                scrolled 
                  ? 'bg-emerald-50 text-emerald-700 border border-emerald-200 hover:bg-emerald-100' 
                  : 'bg-white/10 text-white border border-white/20 hover:bg-white/20'
              }`}
            >
              <Globe className="w-4 h-4" />
              <span className={language === 'bn' ? 'font-[var(--font-hind-siliguri)]' : ''}>
                {language === 'en' ? 'বাংলা' : 'English'}
              </span>
            </motion.button>
            
            <Link href="tel:+8801712577508">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-emerald-600 to-emerald-500 text-white rounded-full font-semibold text-sm shadow-lg hover:shadow-xl transition-all"
              >
                <Phone className="w-4 h-4" />
                <span className={language === 'bn' ? 'font-[var(--font-hind-siliguri)]' : ''}>
                  {t('nav.callNow')}
                </span>
              </motion.button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden w-10 h-10 rounded-lg backdrop-blur-lg flex items-center justify-center border transition-all duration-300 ${
              scrolled 
                ? 'bg-emerald-50 border-emerald-200' 
                : 'bg-white/10 border-white/20'
            }`}
          >
            {isOpen ? (
              <X className={`w-6 h-6 ${scrolled ? 'text-gray-800' : 'text-white'}`} />
            ) : (
              <Menu className={`w-6 h-6 ${scrolled ? 'text-gray-800' : 'text-white'}`} />
            )}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden pb-6 bg-white/95 backdrop-blur-xl rounded-2xl mt-2 shadow-xl border border-emerald-100"
          >
            {navLinks.map((link) => (
              <div key={link.name} className="border-b border-emerald-50 last:border-0">
                <Link href={link.href} onClick={() => setIsOpen(false)}>
                  <motion.div
                    whileHover={{ x: 5 }}
                    className={`px-4 py-4 text-gray-700 hover:text-emerald-600 font-medium ${language === 'bn' ? 'font-bengali' : ''}`}
                  >
                    {link.name}
                  </motion.div>
                </Link>
                {link.submenu && (
                  <div className="pl-6 pb-4 space-y-2">
                    {link.submenu.map((item) => (
                      <Link key={item.name} href={item.href} onClick={() => setIsOpen(false)}>
                        <div className={`py-2 text-sm text-gray-500 hover:text-emerald-600 ${language === 'bn' ? 'font-bengali' : ''}`}>
                          {item.name}
                        </div>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Link href="tel:+8801712577508">
              <motion.button
                whileHover={{ scale: 1.02 }}
                className={`w-full mt-4 flex items-center justify-center gap-2 px-5 py-2.5 bg-gradient-to-r from-emerald-600 to-emerald-500 text-white rounded-full font-semibold text-sm ${language === 'bn' ? 'font-bengali' : ''}`}
              >
                <Phone className="w-4 h-4" />
                {t('nav.callNow')}
              </motion.button>
            </Link>
          </motion.div>
        )}
      </div>
    </motion.nav>
  )
}
