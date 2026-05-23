'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import Link from 'next/link'

export default function BottomCTASection() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  const bgY = useTransform(scrollYProgress, [0, 1], ['-10%', '10%'])

  return (
    <section ref={ref} className="relative py-24 md:py-32 overflow-hidden">
      {/* Parallax Background */}
      <motion.div
        className="absolute inset-0"
        style={{ y: bgY }}
      >
        <div
          className="absolute inset-[-10%] bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(/images/cta-bg.png)',
            backgroundColor: '#1B2A4A',
          }}
        />
      </motion.div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-realty-navy/75 backdrop-blur-[2px]" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3 text-center lg:text-left"
          >
            <p className="font-body text-realty-gold text-sm uppercase tracking-widest font-semibold">
              Realizing and helping you
            </p>
            <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl font-bold text-white mt-3 leading-tight">
              Find Exactly What You Need
            </h2>
            <p className="font-body text-lg text-white/70 mt-3 italic">
              to create the memories you and your family desire
            </p>
            <div className="flex flex-wrap gap-4 mt-8 justify-center lg:justify-start">
              <Link href="/#cma" className="btn-gold px-8 py-4">
                Get Free Analysis
              </Link>
              <a
                href={`tel:9105129568`}
                className="inline-flex items-center justify-center px-8 py-4 rounded-[10px] font-body font-semibold border-2 border-white/30 text-white cursor-pointer transition-all duration-300 hover:bg-white/10 hover:border-white/60"
              >
                Call Now
              </a>
            </div>
          </motion.div>

          {/* Family Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2 flex justify-center"
          >
            <div className="w-64 h-64 md:w-72 md:h-72 rounded-2xl overflow-hidden shadow-2xl ring-2 ring-white/10 rotate-2 hover:rotate-0 transition-transform duration-500">
              <div
                className="w-full h-full bg-cover bg-center"
                style={{ backgroundImage: 'url(/images/family-moving.jpg)' }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
