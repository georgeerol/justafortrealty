'use client'

import { motion } from 'framer-motion'
import { Bed, Bath, Ruler, Search } from 'lucide-react'
import { useState } from 'react'
import { listings, formatPrice } from '@/lib/data'

export default function ListingsClient() {
  const [filter, setFilter] = useState<'all' | 'active' | 'pending' | 'sold'>('all')

  const filtered = filter === 'all'
    ? listings
    : listings.filter((l) => l.status === filter)

  return (
    <div className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h1 className="section-heading text-3xl md:text-4xl">
            Properties in Eastern North Carolina
          </h1>
          <div className="gold-divider mt-4" />
          <p className="section-subheading mx-auto mt-3">
            Browse available homes in Lumberton, NC and surrounding areas
          </p>
        </motion.div>

        {/* Filter Bar */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="mt-10 flex flex-wrap items-center justify-between gap-4 p-4 bg-realty-light rounded-xl border border-slate-100"
        >
          <div className="flex flex-wrap gap-2">
            {(['all', 'active', 'pending', 'sold'] as const).map((status) => (
              <button
                key={status}
                onClick={() => setFilter(status)}
                className={`px-4 py-2 rounded-lg font-body text-sm font-medium capitalize cursor-pointer transition-all duration-200 ${
                  filter === status
                    ? 'bg-realty-teal text-white shadow-sm'
                    : 'bg-white text-slate-600 hover:bg-slate-50 border border-slate-200'
                }`}
              >
                {status === 'all' ? 'All Properties' : status}
              </button>
            ))}
          </div>
          <div className="relative">
            <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Search by address..."
              className="input pl-9 py-2 text-sm w-56"
              disabled
            />
          </div>
        </motion.div>

        {/* Listings Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
          {filtered.map((listing, i) => (
            <motion.div
              key={listing.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="card group"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <div
                  className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                  style={{
                    backgroundImage: `url(${listing.image})`,
                    backgroundColor: '#e2e8f0',
                  }}
                />
                <div className="absolute top-3 left-3 bg-realty-gold text-white font-body font-bold text-sm px-3 py-1.5 rounded-lg shadow-md">
                  {formatPrice(listing.price)}
                </div>
                <div className={`absolute top-3 right-3 backdrop-blur-sm font-body text-xs font-medium px-2.5 py-1 rounded-full capitalize ${
                  listing.status === 'sold'
                    ? 'bg-red-100/90 text-red-700'
                    : listing.status === 'pending'
                    ? 'bg-yellow-100/90 text-yellow-700'
                    : 'bg-white/90 text-realty-navy'
                }`}>
                  {listing.status}
                </div>
              </div>

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

        {filtered.length === 0 && (
          <p className="text-center font-body text-slate-500 mt-12">
            No properties found with that filter.
          </p>
        )}
      </div>
    </div>
  )
}
