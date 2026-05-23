# Justafort Realty — Modern Website Build Plan

> **Client:** Benoit Justafort — Real Estate Agent, License #249302
> **Location:** Eastern North Carolina (Lumberton, NC area)
> **Current Site:** https://justafortrealty.com/ (built by poweredupweb.com)
> **New Site:** Modern rebuild using our proven Turborepo + Next.js + FastAPI stack
> **Design System:** UI UX Pro Max (clean, trust-forward, light theme with navy + gold + teal brand colors)

---

## Tech Stack

| Layer | Technology | Notes |
|-------|-----------|-------|
| Monorepo | Turborepo + pnpm workspaces | Same as sliverpizzeria, barnyard, FoucheSystems |
| Frontend | Next.js 14+ (App Router) | TypeScript, SSR/SSG for SEO |
| Styling | Tailwind CSS 3.4+ | Custom color palette, responsive utilities |
| Animations | Framer Motion | Modern scroll reveals, glass nav, micro-interactions |
| Icons | Lucide React | Consistent iconography |
| Backend | FastAPI (Python) | Listings API, contact form, CMA requests |
| Database | PostgreSQL | Listings, leads, testimonials |
| Deployment | Docker + Railway | Auto-deploy from main branch |
| Domain | justafortrealty.com | DNS migration after launch |

---

## Architecture

```
justafortrealty/
├── apps/
│   ├── web/                    # Next.js frontend
│   │   ├── app/                # App Router pages
│   │   │   ├── layout.tsx      # Root layout with fonts, metadata
│   │   │   ├── page.tsx        # Homepage (single-page scroll)
│   │   │   ├── listings/       # Property listings page
│   │   │   ├── about/          # Full about/bio page
│   │   │   └── contact/        # Contact page
│   │   ├── components/         # React components
│   │   │   ├── HeroSection.tsx
│   │   │   ├── AboutPreview.tsx
│   │   │   ├── ListingsPreview.tsx
│   │   │   ├── TestimonialsCarousel.tsx
│   │   │   ├── CMAForm.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── MobileNav.tsx
│   │   │   ├── ScrollAnimation.tsx
│   │   │   ├── SmoothScroll.tsx
│   │   │   ├── LoadingScreen.tsx
│   │   │   └── sections/
│   │   │       ├── ServicesSection.tsx
│   │   │       ├── FeaturedListings.tsx
│   │   │       ├── WhyChooseMe.tsx
│   │   │       └── CTASection.tsx
│   │   ├── lib/
│   │   │   ├── api.ts          # API client
│   │   │   ├── data.ts         # Static/fallback data
│   │   │   └── utils.ts        # Helpers
│   │   ├── public/             # Static assets (images, favicon)
│   │   ├── tailwind.config.ts
│   │   ├── next.config.js
│   │   ├── Dockerfile
│   │   └── package.json
│   └── api/                    # FastAPI backend
│       ├── app/
│       │   ├── main.py
│       │   ├── routers/
│       │   │   ├── listings.py
│       │   │   ├── contacts.py
│       │   │   └── testimonials.py
│       │   ├── models/
│       │   ├── schemas/
│       │   └── database.py
│       ├── requirements.txt
│       └── Dockerfile
├── packages/                   # Shared packages (if needed)
├── docker-compose.yml
├── turbo.json
├── pnpm-workspace.yaml
├── package.json
└── PROJECT_PLAN.md
```

---

## Design System — UI UX Pro Max (Real Estate Agent)

### Color Palette

| Token | Hex | Usage |
|-------|-----|-------|
| `realty-navy` | `#1B2A4A` | Headers, nav, footer, trust sections |
| `realty-gold` | `#C9A049` | Logo accents, badges, premium highlights |
| `realty-teal` | `#2AABB3` | CTA buttons, links, interactive elements |
| `realty-light` | `#F8FAFB` | Alternating section backgrounds, cards |
| `white` | `#FFFFFF` | Main page background — clean, open |
| `slate-800` | `#1E293B` | Body text (high contrast on white) |
| `slate-600` | `#475569` | Supporting text, captions |

### Typography

| Role | Font | Weight |
|------|------|--------|
| Headings | Cinzel | 500–700 |
| Body | Josefin Sans | 300–600 |
| Accent/Quotes | Cinzel Italic | 400 |

### Design Approach
- **Modern, clean, trust-forward** — elevated design that feels current (2026)
- **NOT dark/cinematic** — wrong for family home buyers in $200K–$250K range
- **Glass-effect sticky nav** — transparent → frosted blur on scroll
- **Soft multi-layer shadows** — modern depth, not flat
- **Rounded-xl cards** (12–16px radius) with hover lift + glow
- **Gradient CTA buttons** — subtle teal gradient with glow shadow
- **Navy for trust** — testimonials, footer, credential sections
- **Gold for prestige** — logo, stars, badges, accent borders
- **Teal for action** — all CTAs and interactive elements
- **Generous white space** — property photos need room to breathe
- **Micro-interactions** — button press, card hover zoom, focus rings
- **Framer Motion** — scroll reveals, staggered text, page transitions (no GSAP)

### Mobile-First Principles (UI UX Pro Max)

- **Touch targets:** All interactive elements ≥ 44×44px
- **Sticky top nav** with hamburger on mobile / full nav on desktop
- **Sticky phone CTA** on mobile bottom bar (tap-to-call)
- **Generous spacing:** 48px mobile, 64px tablet, 80–96px desktop sections
- **No horizontal overflow** at 375px minimum
- **Input zoom prevention:** All form inputs ≥ 16px font size
- **Scroll animations:** Framer Motion subtle fade-up on InView
- **No GSAP / No Lenis** — overkill for this site type
- **Safe area handling:** iPhone notch + home indicator
- **Property cards:** 1 col → 2 col → 3 col responsive grid

---

## Page Sections — Homepage

### 1. Hero Section
- Full-viewport height with bright property/landscape background image
- Clean headline: "I'll Get You The BEST DEAL on the market!"
- Sub-headline: "Your Trusted Real Estate Expert in Eastern North Carolina"
- CMA Lead Form card (above the fold) — the primary conversion tool
- Phone number visible in header

### 2. About Preview
- Professional headshot of Benoit (circular with gold border)
- Short bio highlighting: 16+ years experience, USMC veteran, bilingual (Haitian Creole, French)
- Credentials: License #, Equal Housing badge
- "Learn More" link to full about page
- Light background with subtle navy accent

### 3. Services Section
- Three cards with icons:
  - **Buying** — "Find your dream home in Eastern NC"
  - **Selling** — "Get the best deal on the market"
  - **Market Analysis** — "Free comparative market analysis"
- Scroll-triggered reveal animations

### 4. Featured Listings
- Horizontal scrollable cards (mobile) / 3-column grid (desktop)
- Each card: property image, price, address, beds/baths/sqft
- "View All Listings" CTA
- Pull from API (with static fallback data)

### 5. Why Choose Me
- Military discipline + real estate expertise
- Community involvement (Haitian community)
- Bilingual service
- 16+ years of experience
- Stats counters (animated on scroll): homes sold, years experience, etc.

### 6. Testimonials
- Navy background section for contrast and trust
- Large quote with gold stars
- Client attribution
- Simple, no carousel for now (expand when more testimonials exist)

### 7. CMA Form (Call-to-Action Repeat)
- "Get a FREE Comparative Market Analysis"
- Fields: Name, Email, Phone, Property Address (optional)
- Light section with teal CTA button
- Form submits to FastAPI → sends notification to Benoit

### 8. Footer
- Navy background for contrast/authority
- Contact info: (910) 512-9568
- License #249302
- Quick links
- Social media
- Languages spoken
- Copyright + "Built by Fouché Systems"

---

## Key Features

### From Current Site (must keep)
- Free CMA offer (primary lead generation)
- Property listings display
- Agent bio / credentials
- Testimonial from James A.
- Phone number prominent: (910) 512-9568
- License number displayed

### New / Improved
- Mobile-first responsive design (current site is not mobile-optimized)
- Property search/filter on listings page
- Contact form with email notifications
- SEO-optimized metadata for local search ("real estate agent Lumberton NC")
- Performance: lazy loading, optimized images, Core Web Vitals
- Bilingual support (English + Haitian Creole toggle — future phase)
- MLS integration (future phase)
- Blog/market updates (future phase)

---

## SEO Strategy

- **Title:** "Benoit Justafort | Real Estate Agent in Eastern North Carolina"
- **Meta description:** "Buy or sell your home in Lumberton, NC and Eastern North Carolina. 16+ years experience, USMC veteran, bilingual agent. Free market analysis."
- **Local keywords:** Lumberton NC real estate, Eastern NC homes for sale, Robeson County realtor
- **Structured data:** LocalBusiness + RealEstateAgent schema
- **Open Graph:** Property images for social sharing

---

## Deployment Pipeline

1. **Development:** `pnpm dev` runs both Next.js (3000) and FastAPI (8000)
2. **Docker:** `docker-compose up` for full local stack with PostgreSQL
3. **Staging:** Railway preview deployments on PR
4. **Production:** Railway auto-deploy from `main` branch
5. **DNS:** Point justafortrealty.com to Railway after launch

---

## Build Phases

### Phase 1: Foundation
- [ ] Initialize Turborepo monorepo structure
- [ ] Set up Next.js 14 app with Tailwind + Framer Motion + GSAP + Lenis
- [ ] Create base layout, fonts, color tokens
- [ ] Build Hero Section with animations
- [ ] Build About Preview section
- [ ] Build Footer + Mobile Nav

### Phase 2: Content Sections
- [ ] Services Section (3 cards)
- [ ] Featured Listings (static data first)
- [ ] Why Choose Me section with stats
- [ ] Testimonials Carousel
- [ ] CMA Form section

### Phase 3: Backend + API
- [ ] Set up FastAPI with PostgreSQL
- [ ] Listings CRUD endpoints
- [ ] Contact form / CMA request endpoint
- [ ] Email notification system
- [ ] Docker Compose configuration

### Phase 4: Additional Pages
- [ ] Full Listings page with grid + filters
- [ ] Individual listing detail page
- [ ] Full About page
- [ ] Contact page

### Phase 5: Polish + Deploy
- [ ] Mobile responsive audit (44px touch targets, safe areas)
- [ ] SEO metadata + structured data
- [ ] Performance optimization (images, lazy loading)
- [ ] Loading screen animation
- [ ] Railway deployment
- [ ] DNS migration

### Phase 6: Future Enhancements
- [ ] Bilingual toggle (English / Haitian Creole)
- [ ] MLS feed integration
- [ ] Blog / Market updates
- [ ] Virtual tour embeds
- [ ] Mortgage calculator widget

---

## Content to Migrate

### From Current Site
- **Agent Name:** Benoit Justafort
- **License:** #249302
- **Phone:** (910) 512-9568
- **Location:** Eastern North Carolina
- **Experience:** 16+ years in Real Estate Management and Sales
- **Background:** United States Marine Corps, Camp Lejeune, multiple tours
- **Languages:** English, Haitian Creole, French
- **Personal:** Works with Haitian community families, enjoys carpentry, has 8-year-old granddaughter
- **Testimonial:** "Benoit was awesome! He made my home buying process a breeze and he's super knowledgeable. I highly recommend his services to anyone looking to sell or buy a home." — James A.
- **Current Listings:**
  - 203 Elmhurst Dr, Lumberton NC 28358 — $200,000
  - 107 Best Dr, Lumberton NC 28358 — $243,000
  - 2840 Kale Dr, Lumberton NC 28358 — $228,000

---

## Notes

- This project follows the same monorepo pattern as `sliverpizzeria`, `barnyardwinebar`, and `FoucheSystems`
- UI/UX design uses **UI UX Pro Max** with a clean, light, trust-forward approach — NOT the dark cinematic barnyard style
- The Navy + Gold + Teal color scheme comes from the client's existing brand (shield logo)
- Light backgrounds let property photos and family imagery breathe
- Subtle Framer Motion animations only (no GSAP, no Lenis)
- This audience is home buyers/sellers in the $200K–$250K range in rural NC — keep it approachable
- Bilingual capability is a unique selling point — highlight it visually
- Military background conveys discipline and trust — use in credential section
