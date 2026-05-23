'use client'

import { motion } from 'framer-motion'
import { Shield, Globe, Heart, Award, Users } from 'lucide-react'
import { agentInfo } from '@/lib/data'

const credentials = [
  { icon: Award, label: 'Licensed Agent', detail: `NC License ${agentInfo.license}` },
  { icon: Shield, label: 'USMC Veteran', detail: 'Camp Lejeune, multiple tours' },
  { icon: Globe, label: '3 Languages', detail: 'English, Haitian Creole, French' },
  { icon: Users, label: 'Equal Housing', detail: 'Fair housing for all' },
]

export default function AboutClient() {
  return (
    <div className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-start">
          {/* Photo Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 flex justify-center"
          >
            <div className="sticky top-28">
              <div className="w-64 h-80 sm:w-72 sm:h-96 rounded-2xl overflow-hidden ring-4 ring-realty-gold/30 ring-offset-4 ring-offset-white shadow-soft-xl">
                <div
                  className="w-full h-full bg-cover bg-center bg-slate-200"
                  style={{ backgroundImage: `url(${agentInfo.photo})`, backgroundColor: '#cbd5e1' }}
                />
              </div>
              <div className="mt-6 text-center">
                <h2 className="font-heading text-xl font-semibold text-realty-navy">
                  {agentInfo.name}
                </h2>
                <p className="font-body text-sm text-slate-500 mt-1">
                  {agentInfo.title} — License {agentInfo.license}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Content Column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-3"
          >
            <h1 className="section-heading text-3xl md:text-4xl">
              About Me
            </h1>
            <div className="gold-divider mt-4 !mx-0" />

            {/* Bio */}
            <div className="mt-8 space-y-5">
              {agentInfo.bio.map((paragraph, i) => (
                <p key={i} className="font-body text-base text-slate-600 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Military Service */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-10 p-6 bg-realty-light rounded-2xl border border-slate-100"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-realty-navy/10 flex items-center justify-center flex-shrink-0">
                  <Shield size={24} className="text-realty-navy" />
                </div>
                <div>
                  <h3 className="font-heading text-lg font-semibold text-realty-navy">
                    Military Service
                  </h3>
                  <p className="font-body text-sm text-slate-600 mt-2 leading-relaxed">
                    {agentInfo.militaryBackground}
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Community */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-4 p-6 bg-realty-light rounded-2xl border border-slate-100"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-realty-teal/10 flex items-center justify-center flex-shrink-0">
                  <Heart size={24} className="text-realty-teal" />
                </div>
                <div>
                  <h3 className="font-heading text-lg font-semibold text-realty-navy">
                    Community Involvement
                  </h3>
                  <p className="font-body text-sm text-slate-600 mt-2 leading-relaxed">
                    {agentInfo.community}
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Languages */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="mt-8"
            >
              <h3 className="font-heading text-lg font-semibold text-realty-navy">
                Languages Spoken
              </h3>
              <div className="flex flex-wrap gap-3 mt-4">
                {agentInfo.languages.map((lang) => (
                  <span
                    key={lang}
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white border border-slate-200 shadow-soft-sm font-body text-sm font-medium text-realty-navy"
                  >
                    <Globe size={16} className="text-realty-teal" />
                    {lang}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Credentials Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-20"
        >
          <h2 className="section-heading text-center">Credentials & Values</h2>
          <div className="gold-divider mt-4" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
            {credentials.map((cred, i) => (
              <motion.div
                key={cred.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.7 + i * 0.1 }}
                className="card p-6 text-center"
              >
                <div className="w-12 h-12 rounded-xl bg-realty-teal/10 flex items-center justify-center mx-auto">
                  <cred.icon size={24} className="text-realty-teal" />
                </div>
                <h4 className="font-heading text-sm font-semibold text-realty-navy mt-4">
                  {cred.label}
                </h4>
                <p className="font-body text-xs text-slate-500 mt-1.5">
                  {cred.detail}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}
