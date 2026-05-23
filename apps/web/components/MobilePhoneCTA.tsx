'use client'

import { Phone } from 'lucide-react'
import { businessInfo } from '@/lib/data'

export default function MobilePhoneCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden">
      <a
        href={`tel:${businessInfo.phone.replace(/[^\d]/g, '')}`}
        className="flex items-center justify-center gap-2 w-full py-3.5 pb-[calc(0.875rem+env(safe-area-inset-bottom))] bg-realty-teal text-white font-body font-semibold text-sm cursor-pointer hover:bg-realty-teal/90 transition-colors"
      >
        <Phone size={16} />
        <span>Call {businessInfo.phone}</span>
      </a>
    </div>
  )
}
