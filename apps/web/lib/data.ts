export interface AgentInfo {
  name: string
  title: string
  license: string
  phone: string
  email: string
  photo: string
  bio: string[]
  languages: string[]
  militaryBackground: string
  community: string
  tagline: string
  brandTagline: string
}

export interface Listing {
  id: string
  price: number
  address: string
  city: string
  state: string
  zip: string
  beds: number
  baths: number
  sqft: number
  image: string
  status: 'active' | 'pending' | 'sold'
  featured: boolean
}

export interface Testimonial {
  id: string
  name: string
  quote: string
  rating: number
  date: string
}

export interface Service {
  id: string
  title: string
  description: string
  icon: string
}

export interface Stat {
  label: string
  value: string
  suffix?: string
}

export interface NavLink {
  label: string
  href: string
}

export interface BusinessInfo {
  phone: string
  email: string
  license: string
  address: string
  city: string
  state: string
  zip: string
  socials: { platform: string; url: string }[]
}

// Agent Information
export const agentInfo: AgentInfo = {
  name: 'Benoit Justafort',
  title: 'Real Estate Agent',
  license: '#249302',
  phone: '(910) 512-9568',
  email: 'info@justafortrealty.com',
  photo: '/images/agent-headshot.png',
  bio: [
    "I've had a career in Real Estate Management and Sales for over 16 years working in Eastern North Carolina. Prior to entering real estate, I served in the United States Marine Corps, stationed at Camp Lejeune. With multiple tours around the world, these experiences instilled in me the discipline and focus to then become a seasoned real estate professional.",
    'In my free time, I work with many families of the Haitian community and enjoy carpentry work and spending time with my family-especially my 8 year old Granddaughter. I am also fluent in Haitian Creole and French language.',
    'I recognize and value the trust my clients place upon me, and strive every day to exceed their expectations. I am here to keep the home buying or selling process fluid, successful, and as low-stress as possible for you.',
  ],
  languages: ['English', 'Haitian Creole', 'French'],
  militaryBackground:
    'United States Marine Corps, stationed at Camp Lejeune. Multiple tours worldwide.',
  community:
    'Works with families of the Haitian community in Eastern North Carolina.',
  tagline: "I'll Get You The BEST DEAL on the market!",
  brandTagline: 'Making your dream a reality.',
}

// Property Listings
export const listings: Listing[] = [
  {
    id: '1',
    price: 200000,
    address: '203 Elmhurst Dr',
    city: 'Lumberton',
    state: 'NC',
    zip: '28358',
    beds: 3,
    baths: 2,
    sqft: 1650,
    image: '/images/listings/listing-1.jpg',
    status: 'active',
    featured: true,
  },
  {
    id: '2',
    price: 243000,
    address: '107 Best Dr',
    city: 'Lumberton',
    state: 'NC',
    zip: '28358',
    beds: 4,
    baths: 2.5,
    sqft: 2100,
    image: '/images/listings/listing-2.jpg',
    status: 'active',
    featured: true,
  },
  {
    id: '3',
    price: 228000,
    address: '2840 Kale Dr',
    city: 'Lumberton',
    state: 'NC',
    zip: '28358',
    beds: 3,
    baths: 2,
    sqft: 1850,
    image: '/images/listings/listing-3.jpg',
    status: 'active',
    featured: true,
  },
  {
    id: '4',
    price: 175000,
    address: '512 Pine Valley Rd',
    city: 'Lumberton',
    state: 'NC',
    zip: '28360',
    beds: 3,
    baths: 1.5,
    sqft: 1420,
    image: '/images/listings/listing-4.jpg',
    status: 'pending',
    featured: false,
  },
  {
    id: '5',
    price: 315000,
    address: '1024 Riverside Dr',
    city: 'Lumberton',
    state: 'NC',
    zip: '28358',
    beds: 4,
    baths: 3,
    sqft: 2650,
    image: '/images/listings/listing-5.jpg',
    status: 'active',
    featured: false,
  },
  {
    id: '6',
    price: 189000,
    address: '308 Magnolia Ct',
    city: 'St. Pauls',
    state: 'NC',
    zip: '28384',
    beds: 3,
    baths: 2,
    sqft: 1550,
    image: '/images/listings/listing-6.jpg',
    status: 'sold',
    featured: false,
  },
]

// Testimonials
export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'James A.',
    quote:
      'Benoit was awesome! He made my home buying process a breeze and he\'s super knowledgeable. I highly recommend his services to anyone looking to sell or buy a home.',
    rating: 5,
    date: '2024',
  },
  {
    id: '2',
    name: 'Marie L.',
    quote:
      'Benoit helped us find the perfect home for our family. His bilingual skills made the process so much easier for us. Truly a professional who cares.',
    rating: 5,
    date: '2024',
  },
  {
    id: '3',
    name: 'David T.',
    quote:
      'From start to finish, Benoit was there every step of the way. His military discipline shows in how organized and thorough he is. Got us the best deal!',
    rating: 5,
    date: '2023',
  },
]

// Services
export const services: Service[] = [
  {
    id: 'buying',
    title: 'Buying a Home',
    description:
      'Find your dream home in Eastern North Carolina. I\'ll guide you through every step of the buying process with expertise and care.',
    icon: 'Home',
  },
  {
    id: 'selling',
    title: 'Selling Your Home',
    description:
      'Get the best deal on the market. I leverage 16+ years of experience to price, market, and sell your property quickly and at top value.',
    icon: 'DollarSign',
  },
  {
    id: 'analysis',
    title: 'Market Analysis',
    description:
      'Get a FREE comparative market analysis to understand your home\'s true value. Data-driven insights for smart decisions.',
    icon: 'BarChart3',
  },
]

// Stats
export const stats: Stat[] = [
  { label: 'Years Experience', value: '16', suffix: '+' },
  { label: 'Homes Sold', value: '100', suffix: '+' },
  { label: 'Languages Spoken', value: '3' },
  { label: 'Client Rating', value: '5', suffix: '★' },
]

// Navigation
export const navLinks: NavLink[] = [
  { label: 'Home', href: '/' },
  { label: 'Listings', href: '/listings' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/#services' },
  { label: 'Contact', href: '/contact' },
]

// Business Info
export const businessInfo: BusinessInfo = {
  phone: '(910) 512-9568',
  email: 'info@justafortrealty.com',
  license: '#249302',
  address: 'Lumberton',
  city: 'Lumberton',
  state: 'NC',
  zip: '28358',
  socials: [
    { platform: 'facebook', url: 'https://facebook.com/justafortrealty' },
    { platform: 'instagram', url: 'https://instagram.com/justafortrealty' },
  ],
}

// Utility: format price
export function formatPrice(price: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(price)
}
