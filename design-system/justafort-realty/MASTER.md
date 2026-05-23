# Design System Master File

> **LOGIC:** When building a specific page, first check `design-system/pages/[page-name].md`.
> If that file exists, its rules **override** this Master file.
> If not, strictly follow the rules below.

---

**Project:** Justafort Realty
**Generated:** 2026-05-23
**Category:** Real Estate / Personal Agent Brand
**Aesthetic:** Clean, trustworthy, warm, professional — light theme with navy + gold accents

---

## Design Philosophy

This is a **solo real estate agent's personal brand site**. The design must:
1. **Build trust immediately** — military veteran, 16+ years, licensed professional
2. **Feel warm and approachable** — families buying homes, not luxury condos
3. **Be light and open** — homes are bright, inviting places; the site should reflect that
4. **Convert visitors to leads** — CMA form is the #1 goal
5. **Respect the existing brand** — gold shield logo, navy + teal identity already established

This is NOT a dark/cinematic site. This is NOT a luxury brokerage. This is a community-focused, family-oriented agent who sells homes in the $200K–$250K range in Eastern NC.

---

## Global Rules

### Color Palette

| Role | Hex | Tailwind Token | Usage |
|------|-----|----------------|-------|
| Primary (Navy) | `#1B2A4A` | `realty-navy` | Headers, nav, footer, trust sections |
| Accent (Gold) | `#C9A049` | `realty-gold` | Logo accents, badges, premium highlights |
| CTA (Teal) | `#2AABB3` | `realty-teal` | Buttons, links, interactive elements |
| Background | `#FFFFFF` | `white` | Main page background — clean, open |
| Surface | `#F8FAFB` | `realty-light` | Alternating section backgrounds, cards |
| Text Primary | `#1E293B` | `slate-800` | Body text (high contrast on white) |
| Text Secondary | `#475569` | `slate-600` | Supporting text, captions |
| Border | `#E2E8F0` | `slate-200` | Card borders, dividers |
| Success | `#059669` | `emerald-600` | Positive states, "sold" badges |
| Warning/Warm | `#D4A855` | `realty-warm` | Gold stars, testimonial highlights |

**Color Notes:** These colors come directly from the existing Justafort Realty brand (shield logo uses navy + gold, CTAs are teal). We're not reinventing — we're refining and systematizing.

### Typography

- **Heading Font:** Cinzel (elegant, real estate luxury, serif)
- **Body Font:** Josefin Sans (clean, modern, highly readable)
- **Accent Font:** None — use Cinzel italic sparingly for quotes/taglines
- **Mood:** Professional, trustworthy, established, approachable

**Google Fonts:**
```css
@import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600;700&family=Josefin+Sans:wght@300;400;500;600;700&display=swap');
```

**Type Scale:**

| Element | Size (mobile → desktop) | Weight | Font |
|---------|-------------------------|--------|------|
| H1 (Hero) | 2.5rem → 4rem | 700 | Cinzel |
| H2 (Section) | 2rem → 2.5rem | 600 | Cinzel |
| H3 (Card title) | 1.25rem → 1.5rem | 600 | Cinzel |
| Body | 1rem → 1.125rem | 400 | Josefin Sans |
| Small/Caption | 0.875rem | 400 | Josefin Sans |
| Button | 1rem | 600 | Josefin Sans |
| Nav links | 0.875rem → 1rem | 500 | Josefin Sans |

### Spacing

| Token | Value | Usage |
|-------|-------|-------|
| `--space-xs` | `4px` | Tight gaps |
| `--space-sm` | `8px` | Icon gaps, inline spacing |
| `--space-md` | `16px` | Standard padding |
| `--space-lg` | `24px` | Card padding, gaps |
| `--space-xl` | `32px` | Section inner padding |
| `--space-2xl` | `48px` | Section margins mobile |
| `--space-3xl` | `64px` | Section margins tablet |
| `--space-4xl` | `80px` → `96px` | Section margins desktop |

### Border Radius

| Token | Value | Usage |
|-------|-------|-------|
| `rounded-sm` | `6px` | Inputs, small elements |
| `rounded-md` | `8px` | Buttons |
| `rounded-lg` | `12px` | Cards |
| `rounded-xl` | `16px` | Featured cards, modals |
| `rounded-full` | `9999px` | Avatar, pills, badges |

### Shadows

| Level | Value | Usage |
|-------|-------|-------|
| `shadow-sm` | `0 1px 3px rgba(27,42,74,0.04), 0 1px 2px rgba(27,42,74,0.06)` | Subtle lift |
| `shadow-md` | `0 4px 6px rgba(27,42,74,0.04), 0 2px 4px rgba(27,42,74,0.06)` | Cards at rest |
| `shadow-lg` | `0 10px 20px rgba(27,42,74,0.06), 0 4px 8px rgba(27,42,74,0.04)` | Cards on hover |
| `shadow-xl` | `0 20px 40px rgba(27,42,74,0.08), 0 8px 16px rgba(27,42,74,0.04)` | Modals, featured |
| `shadow-glow` | `0 0 20px rgba(42,171,179,0.15)` | CTA hover glow |

---

## Component Specs

### Buttons

```css
/* Primary CTA — Teal gradient (main action: "Get My Analysis", "Contact Me") */
.btn-primary {
  background: linear-gradient(135deg, #2AABB3 0%, #239BA3 100%);
  color: white;
  padding: 14px 28px;
  border-radius: 10px;
  font-family: 'Josefin Sans', sans-serif;
  font-weight: 600;
  font-size: 1rem;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  box-shadow: 0 4px 12px rgba(42,171,179,0.25);
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(42,171,179,0.35);
}

.btn-primary:active {
  transform: translateY(0);
  box-shadow: 0 2px 8px rgba(42,171,179,0.3);
}

/* Secondary — Navy with modern rounded style */
.btn-secondary {
  background: transparent;
  color: #1B2A4A;
  border: 2px solid #1B2A4A;
  padding: 12px 24px;
  border-radius: 10px;
  font-weight: 600;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
}

.btn-secondary:hover {
  background: #1B2A4A;
  color: white;
  transform: translateY(-1px);
}

/* Gold accent — for premium/highlight CTAs */
.btn-gold {
  background: linear-gradient(135deg, #C9A049 0%, #B8913E 100%);
  color: white;
  padding: 14px 28px;
  border-radius: 10px;
  font-weight: 600;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  box-shadow: 0 4px 12px rgba(201,160,73,0.25);
}
```

### Property Cards

```css
.property-card {
  background: white;
  border-radius: 16px;
  overflow: hidden;
  border: 1px solid rgba(226,232,240,0.8);
  box-shadow: 0 4px 6px rgba(27,42,74,0.04), 0 2px 4px rgba(27,42,74,0.06);
  transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
}

.property-card:hover {
  box-shadow: 0 20px 40px rgba(27,42,74,0.08), 0 8px 16px rgba(27,42,74,0.04);
  transform: translateY(-6px);
  border-color: rgba(42,171,179,0.3);
}

.property-card__image {
  aspect-ratio: 16/10;
  object-fit: cover;
  width: 100%;
  transition: transform 500ms cubic-bezier(0.4, 0, 0.2, 1);
}

.property-card:hover .property-card__image {
  transform: scale(1.03);
}

.property-card__price {
  font-family: 'Cinzel', serif;
  font-weight: 700;
  font-size: 1.5rem;
  color: #1B2A4A;
}

.property-card__address {
  color: #475569;
  font-size: 0.875rem;
}
```

### Navigation (Glass Effect)

```css
.navbar {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 50;
  transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1);
}

/* Default state: transparent */
.navbar--transparent {
  background: transparent;
}

/* Scrolled state: frosted glass */
.navbar--scrolled {
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-bottom: 1px solid rgba(226,232,240,0.5);
  box-shadow: 0 1px 3px rgba(27,42,74,0.04);
}
```

### Form Inputs

```css
.input {
  padding: 14px 16px;
  border: 1.5px solid #E2E8F0;
  border-radius: 8px;
  font-size: 16px; /* prevents iOS zoom */
  font-family: 'Josefin Sans', sans-serif;
  background: white;
  transition: border-color 200ms ease, box-shadow 200ms ease;
  width: 100%;
}

.input:focus {
  border-color: #2AABB3;
  outline: none;
  box-shadow: 0 0 0 3px rgba(42,171,179,0.15);
}

.input::placeholder {
  color: #94A3B8;
}
```

### Trust Badges / Credential Section

```css
.trust-badge {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 16px 20px;
  background: #F8FAFB;
  border: 1px solid #E2E8F0;
  border-radius: 12px;
}

.trust-badge__icon {
  color: #C9A049;
  flex-shrink: 0;
}
```

### Testimonial Card

```css
.testimonial {
  background: #1B2A4A;
  color: white;
  border-radius: 16px;
  padding: 40px;
  position: relative;
}

.testimonial__stars {
  color: #C9A049;
}

.testimonial__quote {
  font-size: 1.125rem;
  line-height: 1.7;
  font-style: italic;
}

.testimonial__author {
  font-weight: 600;
  color: #C9A049;
}
```

---

## Style Guidelines

**Style:** Modern Soft UI — Clean Professional with Warm Trust Signals

A modern, elevated design that feels current (2026) while maintaining trust and approachability:
- **Soft multi-layer shadows** for modern depth (not flat, not heavy)
- **Rounded corners** (10–16px) on cards and UI elements for a friendly, modern feel
- **Subtle gradient accents** — hero backgrounds, CTA buttons with slight gradient lift
- **Light backgrounds** (white / off-white) with navy contrast sections
- **Modern card hover states** — lift + shadow expansion + subtle border glow
- **Clean typography hierarchy** — big bold headings, generous line height
- **Photo-forward** — large hero images, property cards with aspect-ratio images
- **Micro-interactions** — button press feedback, input focus rings, scroll reveals
- **Glass-effect header** — sticky nav with backdrop-blur on scroll (modern touch)

**What makes it "modern" vs just "clean":**
1. Backdrop-blur glass nav (transparent → frosted on scroll)
2. Soft shadow layers (not just `box-shadow: 0 4px 6px`)
3. Rounded-xl cards (12–16px radius)
4. Gradient CTA buttons (subtle, not garish)
5. Smooth 200–300ms transitions on everything
6. Generous padding and breathing room
7. Modern font pairing (Cinzel serif headings + clean sans body)
8. Animated stat counters and scroll reveals

**Page Pattern:** Lead Generation + Listings Showcase

- **Primary Goal:** CMA form submission (lead capture)
- **Secondary Goal:** Call the phone number
- **Tertiary Goal:** Browse listings
- **Section Order:**
  1. Hero (value prop + CMA form above the fold)
  2. Trust signals (credentials, experience, military)
  3. About (personal connection, community, bilingual)
  4. Featured Listings (property cards)
  5. Testimonials (social proof)
  6. CTA repeat (CMA form again)
  7. Footer (contact, credentials, links)

---

## Mobile-First Rules

| Rule | Spec |
|------|------|
| Touch targets | All interactive elements ≥ 44×44px |
| Font minimum | 16px for form inputs (prevents iOS zoom) |
| Body text | ≥ 14px mobile, ≥ 16px desktop |
| Section spacing | 48px mobile, 64px tablet, 80–96px desktop |
| Card grid | 1 col mobile → 2 col tablet → 3 col desktop |
| Nav pattern | Sticky top bar with hamburger (mobile) / full nav (desktop) |
| Phone CTA | Sticky bottom bar on mobile with tap-to-call |
| No horizontal scroll | Verified at 375px |
| Safe areas | iPhone notch + home indicator handled |

---

## Animation Philosophy

**Modern and purposeful — smooth, polished micro-interactions that feel premium without being theatrical.**

| Element | Animation | Duration | Easing | Library |
|---------|-----------|----------|--------|---------|
| Section entrance | Fade up + slight scale (0.97→1) | 500ms | ease-out | Framer Motion `InView` |
| Cards | Lift + shadow expand + border glow | 300ms | cubic-bezier(0.4,0,0.2,1) | CSS transition |
| Card image | Subtle zoom on hover | 500ms | cubic-bezier(0.4,0,0.2,1) | CSS transition |
| Hero text | Staggered fade-in from below | 800ms total | spring | Framer Motion |
| Navbar | Transparent → glass blur on scroll | 300ms | ease | Framer Motion |
| Form focus | Border color + ring expansion | 200ms | ease | CSS transition |
| Button press | Scale down 0.97 + shadow shrink | 150ms | ease | CSS transition |
| Button hover | Lift + shadow glow | 250ms | cubic-bezier(0.4,0,0.2,1) | CSS transition |
| Page transition | Cross-fade | 300ms | ease | Framer Motion |
| Stats counter | Count up on scroll | 1.5s | ease-out | Framer Motion |
| Mobile nav | Slide + fade overlay | 300ms | spring | Framer Motion |
| Scroll indicator | Gentle bounce | infinite 2s | ease-in-out | CSS keyframes |

**No GSAP** — Framer Motion covers everything needed for this modern approach.
**No Lenis** — standard scroll with `scroll-behavior: smooth` is fine.
**Respect `prefers-reduced-motion`** — disable all animations.

---

## Anti-Patterns (Do NOT Use)

- ❌ **Dark theme / cinematic style** — wrong audience; homes should feel bright
- ❌ **Poor property photos** — use high-quality, well-lit images only
- ❌ **Emojis as icons** — use Lucide icons consistently
- ❌ **Auto-playing video** — distracting for lead-gen focused page
- ❌ **Complex animations** — keep it simple and fast-loading
- ❌ **Cluttered hero** — one clear value prop + one clear CTA
- ❌ **Missing phone number** — must be visible at all times (header + sticky mobile)
- ❌ **Tiny text on listing cards** — prices and addresses must be scannable
- ❌ **Missing cursor:pointer** — all clickable elements need it
- ❌ **Instant state changes** — always 150–250ms transitions
- ❌ **Layout-shifting hovers** — no scale that moves other content
- ❌ **Form without 16px input text** — causes iOS zoom issues

---

## Pre-Delivery Checklist

### Visual Quality
- [ ] No emojis used as icons (use Lucide SVG)
- [ ] All icons from consistent set (Lucide)
- [ ] Logo renders crisply at all sizes
- [ ] Property photos have proper aspect ratios (16:10 or 4:3)
- [ ] Gold stars use actual star icon, not image

### Interaction
- [ ] All clickable elements have `cursor-pointer`
- [ ] Hover states provide clear visual feedback
- [ ] Transitions are 150–250ms
- [ ] Focus states visible for keyboard navigation
- [ ] Phone number is tap-to-call on mobile (`tel:` link)

### Contrast & Readability
- [ ] Body text on white: 4.5:1+ contrast
- [ ] White text on navy: 4.5:1+ contrast
- [ ] Form labels clearly associated with inputs
- [ ] Prices and addresses are highly scannable

### Responsive
- [ ] No horizontal scroll at 375px
- [ ] Property cards stack to 1 column on mobile
- [ ] CMA form is fully usable at 375px
- [ ] Phone number sticky-visible on mobile
- [ ] Responsive at 375px, 768px, 1024px, 1440px

### Accessibility
- [ ] All images have descriptive alt text
- [ ] Form inputs have proper labels
- [ ] Color is not the only indicator
- [ ] `prefers-reduced-motion` respected
- [ ] Skip to content link present

### Performance
- [ ] Images lazy-loaded (except hero/above-fold)
- [ ] Next.js Image component with proper sizes
- [ ] No render-blocking resources
- [ ] Core Web Vitals passing (LCP < 2.5s, CLS < 0.1)
