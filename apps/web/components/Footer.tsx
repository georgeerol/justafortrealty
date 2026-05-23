import Link from 'next/link'
import { Phone, Mail, MapPin, Globe, ExternalLink } from 'lucide-react'
import { navLinks, businessInfo, agentInfo } from '@/lib/data'

export default function Footer() {
  return (
    <footer className="bg-realty-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        {/* Top section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16">
          {/* Brand */}
          <div>
            <Link href="/" className="inline-block cursor-pointer">
              <span className="font-heading text-2xl font-bold text-white">
                Justafort{' '}
                <span className="text-realty-gold">Realty</span>
              </span>
            </Link>
            <p className="font-body text-slate-300 mt-3 text-sm leading-relaxed">
              {agentInfo.brandTagline}
            </p>
            <p className="font-body text-slate-400 text-xs mt-2">
              Building Trust. Closing Success. Strong Relationships.
            </p>

            {/* Social Icons */}
            <div className="flex gap-3 mt-5">
              {businessInfo.socials.map((social) => (
                <a
                  key={social.platform}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-9 h-9 rounded-full bg-white/10 text-slate-300 hover:bg-realty-teal hover:text-white transition-all duration-200 cursor-pointer"
                  aria-label={social.platform}
                >
                  {social.platform === 'facebook' && <Globe size={16} />}
                  {social.platform === 'instagram' && <ExternalLink size={16} />}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading text-sm font-semibold text-realty-gold uppercase tracking-wider mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-body text-sm text-slate-300 hover:text-white transition-colors duration-200 cursor-pointer"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/#cma"
                  className="font-body text-sm text-slate-300 hover:text-white transition-colors duration-200 cursor-pointer"
                >
                  Free Market Analysis
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading text-sm font-semibold text-realty-gold uppercase tracking-wider mb-4">
              Contact
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href={`tel:${businessInfo.phone.replace(/[^\d]/g, '')}`}
                  className="flex items-center gap-3 font-body text-sm text-slate-300 hover:text-white transition-colors duration-200 cursor-pointer"
                >
                  <Phone size={15} className="text-realty-teal flex-shrink-0" />
                  <span>{businessInfo.phone}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${businessInfo.email}`}
                  className="flex items-center gap-3 font-body text-sm text-slate-300 hover:text-white transition-colors duration-200 cursor-pointer"
                >
                  <Mail size={15} className="text-realty-teal flex-shrink-0" />
                  <span>{businessInfo.email}</span>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 font-body text-sm text-slate-300">
                  <MapPin size={15} className="text-realty-teal flex-shrink-0 mt-0.5" />
                  <span>{businessInfo.address}, {businessInfo.state} {businessInfo.zip}</span>
                </div>
              </li>
            </ul>

            {/* Credentials */}
            <div className="mt-6 pt-4 border-t border-white/10">
              <p className="font-body text-xs text-slate-400">
                License {businessInfo.license}
              </p>
              <p className="font-body text-xs text-slate-400 mt-1">
                Languages: {agentInfo.languages.join(', ')}
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-body text-xs text-slate-400">
            &copy; {new Date().getFullYear()} Justafort Realty. All rights reserved.
          </p>
          <p className="font-body text-xs text-slate-500">
            Built by{' '}
            <a
              href="https://fouchesystems.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-realty-teal transition-colors cursor-pointer"
            >
              Fouché Systems
            </a>
          </p>
        </div>
      </div>

      {/* Extra padding for mobile phone CTA bar */}
      <div className="h-14 lg:hidden" />
    </footer>
  )
}
