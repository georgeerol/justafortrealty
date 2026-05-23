import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        'xxs': '320px',
        'xs': '375px',
      },
      spacing: {
        'safe-top': 'env(safe-area-inset-top)',
        'safe-bottom': 'env(safe-area-inset-bottom)',
        'safe-left': 'env(safe-area-inset-left)',
        'safe-right': 'env(safe-area-inset-right)',
      },
      colors: {
        'realty-navy': '#1B2A4A',
        'realty-gold': '#C9A049',
        'realty-teal': '#2AABB3',
        'realty-light': '#F8FAFB',
        'realty-warm': '#D4A855',
      },
      fontFamily: {
        heading: ['var(--font-heading)', 'Cinzel', 'Georgia', 'serif'],
        body: ['var(--font-body)', 'Josefin Sans', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        'xl': '12px',
        '2xl': '16px',
      },
      boxShadow: {
        'soft-sm': '0 1px 3px rgba(27,42,74,0.04), 0 1px 2px rgba(27,42,74,0.06)',
        'soft-md': '0 4px 6px rgba(27,42,74,0.04), 0 2px 4px rgba(27,42,74,0.06)',
        'soft-lg': '0 10px 20px rgba(27,42,74,0.06), 0 4px 8px rgba(27,42,74,0.04)',
        'soft-xl': '0 20px 40px rgba(27,42,74,0.08), 0 8px 16px rgba(27,42,74,0.04)',
        'glow-teal': '0 0 20px rgba(42,171,179,0.15)',
        'glow-gold': '0 0 20px rgba(201,160,73,0.15)',
      },
    },
  },
  plugins: [],
}

export default config
