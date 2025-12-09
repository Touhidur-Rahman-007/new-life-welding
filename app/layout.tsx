import type { Metadata } from 'next'
import { Inter, Hind_Siliguri } from 'next/font/google'
import './globals.css'
import { Providers } from '@/components/Providers'
import Navbar from '@/components/navigation/Navbar'
import Footer from '@/components/navigation/Footer'
import ScrollProgress from '@/components/ui/ScrollProgress'
import CustomCursor from '@/components/ui/CustomCursor'
import PageTransition from '@/components/ui/PageTransition'
import SmoothScroll from '@/components/ui/SmoothScroll'
import { LanguageProvider } from '@/contexts/LanguageContext'
import { MessageCircle } from 'lucide-react'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const hindSiliguri = Hind_Siliguri({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['bengali'],
  variable: '--font-hind-siliguri',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'New Life Welding Training Center | Premier Welding Education & Certification',
  description: 'Master the art of welding with industry-leading certification programs. Expert instruction, state-of-the-art facilities, and comprehensive training in all welding techniques.',
  keywords: ['welding training', 'welding certification', 'vocational training', 'trade school', 'welding courses', 'AWS certification', 'welding school'],
  authors: [{ name: 'New Life Welding Training Center' }],
  openGraph: {
    title: 'New Life Welding Training Center',
    description: 'Premier welding education and certification programs',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${hindSiliguri.variable} antialiased`}>
        <LanguageProvider>
          <Providers>
            <SmoothScroll>
              <CustomCursor />
              <ScrollProgress />
              <Navbar />
              <a
                href="https://wa.me/8801712577508"
                target="_blank"
                rel="noopener noreferrer"
                className="fixed bottom-6 right-4 z-50 inline-flex items-center gap-2 px-4 py-3 rounded-full bg-gradient-to-r from-emerald-600 to-emerald-500 text-white shadow-xl hover:shadow-2xl hover:scale-[1.02] transition-all"
                aria-label="Chat on WhatsApp"
              >
                <MessageCircle className="w-5 h-5" />
                <span className="text-sm font-semibold">WhatsApp</span>
              </a>
              <PageTransition>
                {children}
              </PageTransition>
              <Footer />
            </SmoothScroll>
          </Providers>
        </LanguageProvider>
      </body>
    </html>
  )
}
