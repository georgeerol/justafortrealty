'use client'

import { motion } from 'framer-motion'
import { Bed, Bath, Ruler, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { listings, formatPrice } from '@/lib/data'

export default function FeaturedListings() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="section-heading">Featured Properties</h2>
          <div className="gold-divider mt-4" />
          <p className="section-subheading mx-auto mt-3">
            Explore available homes in Eastern North Carolina
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-14">
          {listings.map((listing, i) => (
            <motion.div
              key={listing.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="card group"
            >
              {/* Image */}
              <div className="relative aspect-[16/10] overflow-hidden">
                <div
                  className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                  style={{
                    backgroundImage: `url(${listing.image})`,
                    backgroundColor: '#e2e8f0',
                  }}
                />
                {/* Price badge */}
                <div className="absolute top-3 left-3 bg-realty-gold text-white font-body font-bold text-sm px-3 py-1.5 rounded-lg shadow-md">
                  {formatPrice(listing.price)}
                </div>
                {/* Status badge */}
                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm text-realty-navy font-body text-xs font-medium px-2.5 py-1 rounded-full capitalize">
                  {listing.status}
                </div>
              </div>

              {/* Details */}
              <div className="p-5">
                <h3 className="font-heading text-base font-semibold text-realty-navy">
                  {listing.address}
                </h3>
                <p className="font-body text-sm text-slate-500 mt-1">
                  {listing.city}, {listing.state} {listing.zip}
                </p>

                <div className="flex items-center gap-4 mt-4 font-body text-sm text-slate-600">
                  <span className="flex items-center gap-1">
                    <Bed size={16} className="text-realty-teal" />
                    {listing.beds} Beds
                  </span>
                  <span className="flex items-center gap-1">
                    <Bath size={16} className="text-realty-teal" />
                    {listing.baths} Baths
                  </span>
                  <span className="flex items-center gap-1">
                    <Ruler size={16} className="text-realty-teal" />
                    {listing.sqft.toLocaleString()} sqft
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-12"
        >
          <Link
            href="/listings"
            className="inline-flex items-center gap-2 font-body font-semibold text-realty-teal hover:gap-3 transition-all duration-200"
          >
            View All Listings <ArrowRight size={18} />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
