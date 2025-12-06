"use client"

import { FormEvent, useState } from 'react'
import { motion } from 'framer-motion'
import { useLanguage } from '@/contexts/LanguageContext'

export default function ContactPage() {
  const { language, t } = useLanguage()
  const [status, setStatus] = useState<'idle' | 'success'>('idle')

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const form = event.currentTarget
    const formData = new FormData(form)
    console.log('Contact submission', Object.fromEntries(formData.entries()))
    setStatus('success')
    form.reset()
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-teal-50 py-20 px-4">
      <div className="max-w-4xl mx-auto bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl border border-emerald-100 p-8 md:p-12 relative overflow-hidden">
        <div className="absolute -left-16 -top-16 w-52 h-52 bg-emerald-100 rounded-full blur-3xl opacity-60" />
        <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-teal-100 rounded-full blur-3xl opacity-60" />

        <div className="relative space-y-4 mb-10 text-center">
          <span className={`inline-flex px-4 py-2 rounded-full bg-emerald-100 text-emerald-700 text-sm font-semibold ${language === 'bn' ? 'font-bengali' : ''}`}>
            {t('contact.badge')}
          </span>
          <h1 className={`text-3xl md:text-4xl font-bold text-dark-900 ${language === 'bn' ? 'font-bengali' : ''}`}>
            {t('contact.title')} <span className="text-emerald-600">{t('contact.titleHighlight')}</span>
          </h1>
          <p className={`text-dark-600 max-w-2xl mx-auto ${language === 'bn' ? 'font-bengali' : ''}`}>
            {t('contact.description')}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="relative grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="md:col-span-1">
            <label className={`block text-sm font-semibold text-dark-700 mb-2 ${language === 'bn' ? 'font-bengali' : ''}`}>
              {t('contact.name')}
            </label>
            <input name="name" required className="w-full rounded-2xl border border-emerald-100 focus:border-emerald-400 focus:ring-emerald-200 px-4 py-3 bg-white shadow-sm" />
          </div>
          <div className="md:col-span-1">
            <label className={`block text-sm font-semibold text-dark-700 mb-2 ${language === 'bn' ? 'font-bengali' : ''}`}>
              {t('contact.email')}
            </label>
            <input type="email" name="email" required className="w-full rounded-2xl border border-emerald-100 focus:border-emerald-400 focus:ring-emerald-200 px-4 py-3 bg-white shadow-sm" />
          </div>
          <div className="md:col-span-1">
            <label className={`block text-sm font-semibold text-dark-700 mb-2 ${language === 'bn' ? 'font-bengali' : ''}`}>
              {t('contact.phone')}
            </label>
            <input name="phone" required className="w-full rounded-2xl border border-emerald-100 focus:border-emerald-400 focus:ring-emerald-200 px-4 py-3 bg-white shadow-sm" />
          </div>
          <div className="md:col-span-2">
            <label className={`block text-sm font-semibold text-dark-700 mb-2 ${language === 'bn' ? 'font-bengali' : ''}`}>
              {t('contact.message')}
            </label>
            <textarea name="message" required rows={4} className="w-full rounded-2xl border border-emerald-100 focus:border-emerald-400 focus:ring-emerald-200 px-4 py-3 bg-white shadow-sm resize-none" />
          </div>
          <div className="md:col-span-2 flex flex-col gap-3">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className={`inline-flex items-center justify-center gap-2 px-6 py-3 rounded-2xl bg-gradient-to-r from-emerald-600 to-emerald-500 text-white font-semibold shadow-lg hover:shadow-xl transition-all ${language === 'bn' ? 'font-bengali' : ''}`}
            >
              {t('contact.submit')}
            </motion.button>
            {status === 'success' && (
              <p className={`text-emerald-700 font-semibold ${language === 'bn' ? 'font-bengali' : ''}`}>
                Thanks! We received your message.
              </p>
            )}
          </div>
        </form>
      </div>
    </main>
  )
}
