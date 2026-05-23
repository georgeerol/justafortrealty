'use client'

import { motion } from 'framer-motion'
import { Shield, Award, Globe, BadgeCheck } from 'lucide-react'

const trustItems = [
  { icon: Award, label: '16+ Years Experience' },
  { icon: Shield, label: 'USMC Veteran' },
  { icon: Globe, label: 'Bilingual Agent' },
  { icon: BadgeCheck, label: 'Licensed #249302' },
]

export default function TrustBar() {
  return (
    <section className="bg-realty-light py-8 border-y border-slate-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8"
        >
          {trustItems.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="flex flex-col items-center gap-2 text-center"
            >
              <item.icon size={28} className="text-realty-teal" strokeWidth={1.5} />
              <span className="font-body text-sm font-medium text-realty-navy">
                {item.label}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
