import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, Award, Check, Clock } from 'lucide-react'

import { getProgramById } from '@/data/programs'

type ProgramPageProps = {
  params: Promise<{
    id: string
  }>
}

export const dynamic = 'force-dynamic'
export const revalidate = 0

export default async function ProgramDetailsPage({ params }: ProgramPageProps) {
  const { id } = await params
  const program = getProgramById(id)

  if (!program) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-white dark:bg-dark-950 pt-24 pb-12 md:pt-28 md:pb-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-10">
        <Link
          href="/#programs"
          scroll={false}
          className="inline-flex items-center gap-2 text-sm font-semibold text-dark-600 dark:text-dark-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors mb-10"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Programs
        </Link>
        <div className="grid gap-10 lg:grid-cols-[1.7fr,1fr]">
          {/* Hero Card */}
          <div className="bg-white dark:bg-dark-900 rounded-3xl overflow-hidden shadow-2xl border border-dark-100/50 dark:border-dark-800">
            <div className="relative h-80">
              <Image
                src={program.image}
                alt={program.title}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover"
              />
              <div className={`absolute inset-0 bg-gradient-to-r ${program.color} opacity-40`} />
              <div className="absolute inset-0 flex flex-col justify-end p-8 text-white">
                <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-white/80">
                  Premium Training
                </span>
                <h1 className="text-4xl md:text-5xl font-black mt-4 mb-3">{program.title}</h1>
                <p className="text-lg text-white/90">{program.subtitle}</p>
              </div>
            </div>
            <div className="p-6 md:p-10 space-y-8">
              <p className="text-lg text-dark-600 dark:text-dark-300 leading-relaxed">
                {program.description}
              </p>
            </div>
          </div>

          {/* Enroll Section */}
          <div className="space-y-6">
            <div className="bg-white dark:bg-dark-900 rounded-3xl p-6 shadow-lg border border-dark-100/60 dark:border-dark-800">
              <h3 className="text-xl font-bold text-dark-900 dark:text-white mb-4">Ready to Enroll?</h3>
              <p className="text-dark-600 dark:text-dark-300 mb-6">
                Talk to our admission desk for schedules, tuition plans, and seat availability. Seats are limited for each cohort to ensure 1:1 mentorship.
              </p>
              <Link
                href="/#contact"
                className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-emerald-600 to-emerald-500 py-4 text-white font-semibold shadow-lg hover:shadow-xl transition-all"
              >
                Join This Program
              </Link>
            </div>
          </div>
        </div>

        {/* Overview Sections */}
        <div className="mt-16 space-y-12">
          <section>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-2xl bg-emerald-100 dark:bg-emerald-900/40 flex items-center justify-center">
                <Check className="w-5 h-5 text-emerald-600" />
              </div>
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-dark-500 dark:text-dark-400">Skills You Master</p>
                <h2 className="text-3xl font-bold text-dark-900 dark:text-white">Learning Outcomes</h2>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-5">
              {program.features.map((feature) => (
                <div key={feature} className="flex items-start gap-3 p-5 rounded-2xl bg-dark-50 dark:bg-dark-900/60 border border-dark-100 dark:border-dark-800">
                  <div className="w-3 h-3 rounded-full bg-emerald-500 mt-2" />
                  <p className="text-dark-700 dark:text-dark-200 leading-relaxed">{feature}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-2xl bg-emerald-100 dark:bg-emerald-900/40 flex items-center justify-center">
                <Clock className="w-5 h-5 text-emerald-600" />
              </div>
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-dark-500 dark:text-dark-400">Step-by-Step Journey</p>
                <h2 className="text-3xl font-bold text-dark-900 dark:text-white">Curriculum Timeline</h2>
              </div>
            </div>
            <div className="space-y-6">
              {program.modules.map((module, index) => (
                <div key={`${module.title}-${index}`} className="relative pl-8 pb-8 border-l-2 border-emerald-300 dark:border-emerald-700 last:border-0 last:pb-0">
                  <span className="absolute left-[-11px] top-0 w-5 h-5 rounded-full bg-gradient-to-br from-emerald-500 to-emerald-600 shadow-lg" />
                  <h3 className="text-2xl font-semibold text-dark-900 dark:text-white mb-3">{module.title}</h3>
                  <p className="text-dark-600 dark:text-dark-300 whitespace-pre-line leading-relaxed">
                    {module.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section className="grid md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-dark-900 rounded-3xl p-8 border border-dark-100 dark:border-dark-800 shadow-lg">
              <h3 className="text-2xl font-bold text-dark-900 dark:text-white mb-4">Career Development</h3>
              <p className="text-dark-600 dark:text-dark-300 leading-relaxed">
                {program.career}
              </p>
            </div>
            <div className="bg-white dark:bg-dark-900 rounded-3xl p-8 border border-dark-100 dark:border-dark-800 shadow-lg">
              <h3 className="text-2xl font-bold text-dark-900 dark:text-white mb-4">Certifications You Earn</h3>
              <div className="flex flex-wrap gap-3">
                {program.certifications.map((cert) => (
                  <span key={`${cert}-detail`} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 font-semibold text-sm">
                    <Award className="w-4 h-4" />
                    {cert}
                  </span>
                ))}
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
