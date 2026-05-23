# Justafort Realty — Frontend Build Phases

> Frontend-first build with fake data, Dockerized, viewable at `http://localhost:3000`
> Each phase has sub-phases. Complete all sub-phases before moving to the next phase.
> Check off items as completed.
>
> **Design system rule:** Before building each section, reference `design-system/justafort-realty/MASTER.md` for tokens, components, and anti-patterns.
>
> **Stack:** Next.js 14 (App Router) + TypeScript + Tailwind CSS + Framer Motion + Lucide React
> **Monorepo:** Turborepo + pnpm (same pattern as sliverpizzeria, barnyardwinebar, FoucheSystems)
> **Deployment target:** Railway (final phase)

---

## Phase 1: Project Setup & Docker

### 1.1 Initialize Turborepo monorepo
- [ ] Create root `package.json` (name: `justafortrealty`, Turborepo + pnpm)
- [ ] Create `pnpm-workspace.yaml` (workspaces: `apps/*`, `packages/*`)
- [ ] Create `turbo.json` with `dev`, `build`, `lint`, `clean` tasks
- [ ] Create `packages/` placeholder directory

### 1.2 Scaffold Next.js app
- [ ] Create `apps/web/` directory structure
- [ ] Initialize `apps/web/package.json` (`@justafortrealty/web`)
- [ ] Create `next.config.js` (standalone output for Docker/Railway)
- [ ] Create `tsconfig.json`
- [ ] Create `postcss.config.js`

### 1.3 Configure Tailwind with design system tokens
- [ ] Create `apps/web/tailwind.config.ts`
  - Custom colors: `realty-navy`, `realty-gold`, `realty-teal`, `realty-light`, `realty-warm`
  - Custom fonts: `font-heading` (Cinzel), `font-body` (Josefin Sans)
  - Custom screens: `xs: 375px`, `xxs: 320px`
  - Border radius tokens
- [ ] Create `apps/web/app/globals.css`
  - Google Fonts import (Cinzel + Josefin Sans)
  - CSS custom properties from MASTER.md (shadows, spacing)
  - Base styles: body font, text color, background
  - Utility classes: `.btn-primary`, `.btn-secondary`, `.btn-gold`
  - Scroll-padding-top for sticky nav

### 1.4 Create root layout
- [ ] Create `apps/web/app/layout.tsx`
  - HTML lang="en", viewport meta with `viewport-fit=cover`
  - Google Fonts via `next/font/google` (Cinzel + Josefin Sans)
  - Site metadata (title, description, OG tags from SCRAPED_SITE_DATA.md)
  - Favicon setup

### 1.5 Install dependencies
- [ ] Run `pnpm install` in root
- [ ] Core deps in `apps/web`: `next`, `react`, `react-dom`, `typescript`
- [ ] Animation: `framer-motion`
- [ ] Icons: `lucide-react`
- [ ] Dev deps: `tailwindcss`, `postcss`, `autoprefixer`, `@types/react`, `@types/node`, `eslint`, `eslint-config-next`

### 1.6 Fake data layer
- [ ] Create `apps/web/lib/data.ts` with TypeScript interfaces + mock data:
  - `agentInfo` — name, title, license, phone, bio paragraphs, languages, military background
  - `listings` — 3 properties (price, address, beds, baths, sqft, image placeholder, status)
  - `testimonials` — James A. review + 2-3 fabricated placeholders
  - `services` — buying, selling, market analysis (title, description, icon name)
  - `stats` — years experience (16+), homes sold, happy clients, languages spoken
  - `businessInfo` — phone, email, license, location, social links
  - `cmaForm` — field definitions for the lead capture form
  - `navLinks` — navigation items

### 1.7 Custom 404 page
- [ ] Create `apps/web/app/not-found.tsx`
- [ ] Light theme matching site, logo, "Page not found" message, "Back to Home" link

### 1.8 Dockerize the frontend
- [ ] Create `apps/web/Dockerfile` (multi-stage: deps → build → runner)
- [ ] Create `apps/web/.dockerignore`
- [ ] Create root `docker-compose.yml` (web service only, port 3000)

### 1.9 Docker checkpoint
- [ ] Run `docker-compose up --build`
- [ ] Verify `http://localhost:3000` serves the Next.js app with correct fonts/title
- [ ] Verify Tailwind is processing (test a utility class)

---

## Phase 2: Layout Shell (Nav + Footer)

### 2.1 Desktop navigation (`Navbar`)
- [ ] Create `apps/web/components/Navbar.tsx`
- [ ] Sticky top, transparent initially → frosted glass on scroll (`backdrop-filter: blur(12px)`)
- [ ] Left: Justafort Realty logo (shield from existing brand assets)
- [ ] Center/Right: nav links — Home, Listings, About, Services, Contact
- [ ] Far right: "(910) 512-9568" phone button (teal, tap-to-call `tel:` link)
- [ ] All links have `cursor-pointer`, hover color transition 200ms
- [ ] Use Framer Motion for glass transition on scroll
- [ ] Hide on mobile (< `lg` breakpoint)

### 2.2 Mobile navigation
- [ ] Create `apps/web/components/MobileNav.tsx`
- [ ] Sticky top bar: logo (left) + hamburger menu button (right) + phone icon
- [ ] Hamburger opens slide-in overlay (from right)
- [ ] Overlay: nav links + phone + "Get Free CMA" CTA button
- [ ] Framer Motion for slide + overlay animations
- [ ] Close on link click, outside tap, or X button
- [ ] All touch targets ≥ 44×44px
- [ ] Show only on mobile (< `lg` breakpoint)

### 2.3 Sticky mobile phone bar
- [ ] Create `apps/web/components/MobilePhoneCTA.tsx`
- [ ] Fixed bottom bar on mobile only: "Call (910) 512-9568" tap-to-call
- [ ] Teal background, white text, full-width
- [ ] `pb-safe-bottom` for iPhone home indicator
- [ ] Disappears when scrolled to footer (or always visible — decide)

### 2.4 Footer
- [ ] Create `apps/web/components/Footer.tsx`
- [ ] Navy background (`realty-navy`)
- [ ] Logo + tagline: "Making your dream a reality."
- [ ] Three-column grid (stacked on mobile):
  - Quick links: Home, Listings, About, Services, Contact
  - Contact: phone (clickable), email, address
  - Credentials: License #249302, Equal Housing, languages spoken
- [ ] Social icons row (Lucide SVGs)
- [ ] Copyright: "© 2026 Justafort Realty. Built by Fouché Systems"
- [ ] Bottom padding clears mobile phone CTA bar

### 2.5 Wire into layout
- [ ] Update `app/layout.tsx` to include Navbar + Footer
- [ ] Navbar fixed top with proper content offset (`pt-16` or similar)
- [ ] Footer at bottom of content flow
- [ ] MobilePhoneCTA fixed bottom on mobile

### 2.6 Docker checkpoint
- [ ] Run `docker-compose up --build`
- [ ] Desktop: glass nav at top, footer at bottom
- [ ] Mobile: hamburger nav, sticky phone bar at bottom
- [ ] All links styled, hover transitions work

---

## Phase 3: Homepage — Hero Section

### 3.1 Hero section layout
- [ ] Create `apps/web/components/HeroSection.tsx`
- [ ] Full viewport height (`min-h-screen`)
- [ ] Background: property/landscape image with dark gradient overlay
  - Gradient: `from-realty-navy/70 via-realty-navy/40 to-transparent`
  - Use `next/image` with `fill` + `priority` for LCP
- [ ] Content vertically centered, left-aligned on desktop, centered on mobile

### 3.2 Hero content
- [ ] Headline: "I'll Get You The **BEST DEAL** on the market!" (Cinzel, large)
- [ ] Subtitle: "Your Trusted Real Estate Expert in Eastern North Carolina" (Josefin Sans)
- [ ] Staggered fade-in animation (Framer Motion: parent + children `staggerChildren: 0.15`)
- [ ] Two CTA buttons below:
  - "Get Free Analysis" — `.btn-primary` (teal gradient)
  - "View Listings" — `.btn-secondary` (white outline on dark)
- [ ] Scroll indicator at bottom (Lucide `ChevronDown`, CSS bounce animation)

### 3.3 Hero CMA form (desktop)
- [ ] On larger screens (≥ `lg`): show CMA lead form card overlaid on hero (right side)
- [ ] White card with subtle shadow, rounded-xl
- [ ] Heading: "Get a **FREE** comparative market analysis!"
- [ ] Fields: Name, Email, Phone (all with proper `inputMode` attributes)
- [ ] Submit: "Get My Analysis" button (teal gradient)
- [ ] Form submits to `console.log` for now
- [ ] On mobile: form not in hero (appears in dedicated section below)

### 3.4 Docker checkpoint
- [ ] Run `docker-compose up --build`
- [ ] Hero displays with background, text animations, and CTAs
- [ ] CMA form visible on desktop hero
- [ ] Mobile: clean hero without form clutter
- [ ] Scroll indicator bounces at bottom

---

## Phase 4: Homepage — Content Sections

> Scroll order: Hero → Trust Bar → About → Services → Featured Listings → Testimonials → CMA Form → Footer
>
> Each section uses Framer Motion `InView` for fade-up entrance (see MASTER.md animation table)

### 4.1 Trust/credentials bar
- [ ] Create `apps/web/components/sections/TrustBar.tsx`
- [ ] Light background (`realty-light`)
- [ ] Horizontal row of trust signals (centered):
  - "16+ Years Experience"
  - "USMC Veteran"
  - "Bilingual Agent"
  - "Licensed #249302"
- [ ] Each with Lucide icon + text
- [ ] Responsive: 4 across desktop, 2×2 grid mobile
- [ ] Subtle entrance animation on scroll

### 4.2 About preview
- [ ] Create `apps/web/components/sections/AboutPreview.tsx`
- [ ] White background section
- [ ] Two-column layout (stacked mobile):
  - Left: agent headshot (circular, gold border ring) — use placeholder until real asset
  - Right: name, title, 2-paragraph bio excerpt, credentials
- [ ] "Learn More" link with arrow (Lucide `ArrowRight`)
- [ ] Framer Motion: image fades in from left, text from right

### 4.3 Services section
- [ ] Create `apps/web/components/sections/ServicesSection.tsx`
- [ ] Light gray background (`realty-light`)
- [ ] Section heading: "How I Can Help" (Cinzel, centered)
- [ ] Three cards in a row (stacked mobile):
  - **Buying** — Lucide `Home` icon, title, description
  - **Selling** — Lucide `DollarSign` icon, title, description
  - **Market Analysis** — Lucide `BarChart3` icon, title, description
- [ ] Cards: white bg, rounded-xl, shadow-md, hover lift + teal border glow
- [ ] Staggered entrance animation (0.1s delay between cards)

### 4.4 Featured listings
- [ ] Create `apps/web/components/sections/FeaturedListings.tsx`
- [ ] White background section
- [ ] Section heading: "Featured Properties" (Cinzel, centered)
- [ ] Three property cards (from fake data):
  - Property image (16:10 aspect ratio, placeholder gradient or stock)
  - Image hover zoom (scale 1.03, overflow hidden)
  - Price badge overlay (top-left, gold background)
  - Address, beds/baths/sqft info row with Lucide icons
- [ ] "View All Listings" link below
- [ ] Cards: rounded-xl, shadow-md, hover lift + shadow-lg + teal border
- [ ] Responsive: 1 col mobile, 2 col tablet, 3 col desktop

### 4.5 Testimonials section
- [ ] Create `apps/web/components/sections/TestimonialsSection.tsx`
- [ ] Navy background (`realty-navy`) — provides visual contrast break
- [ ] Section heading: "What My Clients Say" (white, Cinzel)
- [ ] Featured testimonial:
  - 5 gold stars (Lucide `Star` filled)
  - Large quote text (white, italic)
  - "— James A." attribution (gold)
- [ ] If multiple testimonials: dots navigation or simple fade rotation
- [ ] Framer Motion fade entrance

### 4.6 CMA form section (standalone)
- [ ] Create `apps/web/components/sections/CMAFormSection.tsx`
- [ ] Light background with subtle pattern or image
- [ ] Two-column (stacked mobile):
  - Left: headline "Get a FREE Comparative Market Analysis", value props with checkmarks
  - Right: form card (white, rounded-xl, shadow-xl)
    - Fields: Name, Email, Phone, Property Address (optional)
    - `inputMode` attributes: `email`, `tel`
    - All inputs ≥ 16px font size
    - Submit button: "Get My Analysis" (teal gradient, full-width)
- [ ] Form submits to `console.log` for now
- [ ] This is where mobile users see the form (not in hero)

### 4.7 Stats counter (optional — inside About or standalone)
- [ ] Animated counting numbers on scroll into view:
  - 16+ years, 100+ homes sold, 3 languages, 5-star rating
- [ ] Framer Motion `useInView` + counter animation
- [ ] Gold numbers, navy labels

### 4.8 Docker checkpoint
- [ ] Run `docker-compose up --build`
- [ ] Full homepage scrolls: Hero → Trust → About → Services → Listings → Testimonials → CMA → Footer
- [ ] All sections animate in on scroll
- [ ] Card hovers work with lift + glow
- [ ] Responsive at 375px, 768px, 1024px

---

## Phase 5: Subpages

> All subpage content comes from `lib/data.ts` (fake data).
> Each subpage exports `metadata` for SEO (unique title + description).
> Shared layout: Navbar + Footer wraps all pages via root layout.

### 5.1 Listings page
- [ ] Create `apps/web/app/listings/page.tsx`
- [ ] Page heading: "Properties in Eastern North Carolina"
- [ ] Grid of property cards (same component as homepage, but more)
- [ ] Filter bar placeholder (location, price range, beds) — non-functional for now
- [ ] Responsive grid: 1 → 2 → 3 columns

### 5.2 About page
- [ ] Create `apps/web/app/about/page.tsx`
- [ ] Full agent bio (all 3 paragraphs from current site)
- [ ] Large headshot
- [ ] Credential badges section (Equal Housing, MLS)
- [ ] Military service callout
- [ ] Community involvement section
- [ ] Languages spoken with flags/icons

### 5.3 Contact page
- [ ] Create `apps/web/app/contact/page.tsx`
- [ ] Two-column (stacked mobile):
  - Left: contact info (phone, email, address, hours of availability)
  - Right: contact form (name, email, phone, message)
- [ ] Map embed placeholder (dark box with address text)
- [ ] Form submits to `console.log`

### 5.4 Docker checkpoint
- [ ] Run `docker-compose up --build`
- [ ] Navigate to all subpages from nav links
- [ ] SEO metadata renders in `<head>` for each page
- [ ] Responsive layouts work

---

## Phase 6: Animation Polish & Responsive QA

### 6.1 Scroll animation refinement
- [ ] Verify all sections have Framer Motion InView reveal
- [ ] Stagger timing feels natural (not too fast, not too slow)
- [ ] Hero text stagger is smooth
- [ ] Stats counter counts up cleanly

### 6.2 Micro-interaction polish
- [ ] Button hover: gradient shift + lift + glow shadow (250ms)
- [ ] Button active/press: scale(0.97) + reduced shadow (150ms)
- [ ] Card hover: lift + shadow expand + teal border glow (300ms)
- [ ] Card image: subtle zoom on hover (scale 1.03, 500ms)
- [ ] Nav link: underline grows from center on hover
- [ ] Input focus: teal border + subtle ring (200ms)
- [ ] Navbar: smooth transparent → glass transition on scroll

### 6.3 Responsive testing
- [ ] 375px (iPhone SE) — no overflow, text readable, cards stack
- [ ] 390px (iPhone 14) — standard mobile
- [ ] 768px (iPad) — 2-column layouts kick in
- [ ] 1024px (laptop) — desktop nav, 3-column cards
- [ ] 1440px (desktop) — max content width, generous spacing
- [ ] No horizontal scroll on ANY breakpoint

### 6.4 Performance
- [ ] Hero image: `priority` flag, proper `sizes` attribute
- [ ] All other images: lazy loaded via Next.js `<Image>`
- [ ] Fonts: `display=swap` (next/font handles this)
- [ ] Animations: `prefers-reduced-motion` disables all
- [ ] Bundle check: Framer Motion tree-shaken, no unused imports

### 6.5 Pre-delivery checklist (UI Pro Max)
- [ ] All icons from Lucide React — zero emojis in UI
- [ ] `cursor-pointer` on every clickable element
- [ ] All hover states use transitions (150–300ms, never instant)
- [ ] Text contrast: 4.5:1 minimum (check navy text on white, white text on navy)
- [ ] Focus states: visible ring for keyboard navigation
- [ ] `prefers-reduced-motion` respected
- [ ] No content hidden behind fixed navbar (scroll-padding-top set)
- [ ] No horizontal scroll on mobile
- [ ] Phone number is `tel:` link everywhere
- [ ] All `<img>` / `<Image>` have descriptive `alt` text
- [ ] Form inputs have associated `<label>` elements
- [ ] 16px minimum font size on all inputs (prevents iOS zoom)

### 6.6 Docker checkpoint (final frontend QA)
- [ ] Run `docker-compose up --build`
- [ ] Full walkthrough: homepage → every section → every subpage
- [ ] Test on mobile viewport
- [ ] Test keyboard-only navigation (Tab through all elements)
- [ ] Verify glass nav, scroll animations, card hovers all work
- [ ] No console errors

---

## Phase 7: Railway Deployment

### 7.1 Railway configuration
- [ ] Create `apps/web/railway.json` (build command, start command, healthcheck)
- [ ] Verify `next.config.js` has `output: 'standalone'`
- [ ] Verify Dockerfile works in production mode (not just dev)
- [ ] Add `NEXT_PUBLIC_SITE_URL` env var support

### 7.2 Deploy to Railway
- [ ] Create Railway project (justafortrealty-web)
- [ ] Connect GitHub repo (`georgeerol/justafortrealty`)
- [ ] Set root directory to `apps/web`
- [ ] Configure build settings (Dockerfile or Nixpacks)
- [ ] Set environment variables
- [ ] Deploy and verify at `*.up.railway.app` URL

### 7.3 Post-deploy verification
- [ ] Site loads at Railway URL
- [ ] All pages navigable
- [ ] Images/fonts load correctly
- [ ] No console errors in production
- [ ] Mobile responsive works
- [ ] Performance: LCP < 2.5s, CLS < 0.1

### 7.4 Custom domain (future — after DNS migration)
- [ ] Add `justafortrealty.com` custom domain in Railway
- [ ] Configure DNS records (CNAME or A record)
- [ ] Verify SSL certificate
- [ ] Test www → non-www redirect (or vice versa)

---

## Phase Summary

| Phase | What | Deliverables | Status |
|-------|------|-------------|--------|
| 1 | Setup & Docker | Turborepo, Next.js, Tailwind, fake data, Docker | ✅ Complete |
| 2 | Layout Shell | Navbar (glass) + MobileNav + Footer + Phone CTA | ✅ Complete |
| 3 | Hero Section | Background image hero + CTAs + CMA form (desktop) | ✅ Complete |
| 4 | Content Sections | Trust bar, About, Services, Listings, Testimonials, CMA | ✅ Complete |
| 5 | Subpages | Listings, About, Contact pages with SEO metadata | ✅ Complete |
| 6 | Polish & QA | Animations, micro-interactions, responsive, a11y | ✅ Complete |
| 7 | Railway Deploy | Dockerized production deploy to Railway | ⏳ Config ready, needs deploy |

---

## Bonus: Visual Upgrade (Completed)

> Merged to main — clear "wow factor" improvements over original WordPress site.

- [x] Parallax hero with background zoom on scroll
- [x] Gradient animated "BEST DEAL" text with gold underline animation
- [x] Floating ambient orbs (teal + gold) in hero
- [x] Logo image in navbar (transparent → glass transition, color-aware links)
- [x] Frosted glass CMA form with gradient accent bar
- [x] Bottom CTA section with parallax interior bg + family photo with tilt
- [x] Page transition animations (fade-up) on route changes
- [x] Real images from original site (hero, headshot, listings, logos, favicons)
- [x] Testimonial section with sold-home background image

## Bonus: SEO & Production Readiness (Completed)

- [x] `sitemap.xml` — auto-generated with all pages
- [x] `robots.txt` — allows all crawlers, links to sitemap
- [x] `manifest.json` — PWA-ready with app name, icons, theme color
- [x] Favicon + Apple Touch Icon in metadata
- [x] Equal Housing / MLS / Realtor badge in footer
- [x] `railway.toml` + `railway.json` deployment config

---

## What's Next

### Immediate (to go live)
- [ ] **Railway deployment** — authenticate CLI (`railway login`) or deploy via dashboard
  - Root directory: `apps/web`
  - Builder: Dockerfile
  - Env var: `PORT=3000`
- [ ] **Custom domain** — point `justafortrealty.com` DNS to Railway
- [ ] **SSL certificate** — auto-provisioned by Railway after domain setup

### Future Phases (Backend + Enhancements)
- [ ] **Backend API** — FastAPI (Python) for form submissions, CRM integration
- [ ] **Contact/CMA form** — wire to backend endpoint (email notifications)
- [ ] **Google Maps embed** — real map on Contact page
- [ ] **Blog/Content section** — SEO-driven property market updates
- [ ] **MLS integration** — real-time listing data from MLS feed
- [ ] **Analytics** — Google Analytics 4 or Plausible
- [ ] **Image optimization** — convert to Next.js `<Image>` components with proper sizing
- [ ] **Performance audit** — Lighthouse 90+ on all metrics

---

## Notes

- **No backend in these phases** — all data is static/fake in `lib/data.ts`
- **No GSAP, no Lenis** — Framer Motion + CSS transitions handle everything
- **Each phase must pass Docker checkpoint** before moving to next
- **Design system reference:** `design-system/justafort-realty/MASTER.md`
- **Backend + API will be a separate set of phases** after frontend is deployed
