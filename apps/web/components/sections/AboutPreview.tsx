'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { agentInfo } from '@/lib/data'

export default function AboutPreview() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Agent Photo */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden ring-4 ring-realty-gold/40 ring-offset-4 ring-offset-white">
                <div
                  className="w-full h-full bg-cover bg-center bg-slate-200"
                  style={{ backgroundImage: `url(${agentInfo.photo})`, backgroundColor: '#cbd5e1' }}
                />
              </div>
              {/* Decorative badge */}
              <div className="absolute -bottom-2 -right-2 bg-realty-teal text-white rounded-full p-3 shadow-lg">
                <span className="font-body text-xs font-bold">16+ YRS</span>
              </div>
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          >
            <h2 className="section-heading">
              Meet {agentInfo.name.split(' ')[0]}
            </h2>
            <div className="gold-divider mt-3 !mx-0" />
            <p className="font-body text-base text-slate-600 mt-6 leading-relaxed">
              {agentInfo.bio[0]}
            </p>
            <p className="font-body text-base text-slate-600 mt-4 leading-relaxed">
              {agentInfo.bio[2]}
            </p>

            {/* Credentials */}
            <div className="flex flex-wrap gap-3 mt-6">
              {agentInfo.languages.map((lang) => (
                <span
                  key={lang}
                  className="font-body text-xs font-medium px-3 py-1.5 rounded-full bg-realty-light text-realty-navy border border-slate-200"
                >
                  {lang}
                </span>
              ))}
            </div>

            <Link
              href="/about"
              className="inline-flex items-center gap-2 font-body font-semibold text-realty-teal mt-8 hover:gap-3 transition-all duration-200"
            >
              Learn More <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
