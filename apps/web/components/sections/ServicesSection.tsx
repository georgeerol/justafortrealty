'use client'

import { motion } from 'framer-motion'
import { Home, DollarSign, BarChart3, type LucideIcon } from 'lucide-react'
import { services } from '@/lib/data'

const iconMap: Record<string, LucideIcon> = {
  Home,
  DollarSign,
  BarChart3,
}

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-realty-light">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="section-heading">How I Can Help</h2>
          <div className="gold-divider mt-4" />
          <p className="section-subheading mx-auto mt-3">
            Whether buying, selling, or exploring your options — I&apos;m here to guide you every step of the way.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-14">
          {services.map((service, i) => {
            const Icon = iconMap[service.icon] || Home
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="card p-8 text-center group"
              >
                <div className="w-14 h-14 rounded-2xl bg-realty-teal/10 flex items-center justify-center mx-auto group-hover:bg-realty-teal/20 transition-colors duration-300">
                  <Icon size={28} className="text-realty-teal" strokeWidth={1.5} />
                </div>
                <h3 className="font-heading text-lg font-semibold text-realty-navy mt-5">
                  {service.title}
                </h3>
                <p className="font-body text-sm text-slate-600 mt-3 leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
