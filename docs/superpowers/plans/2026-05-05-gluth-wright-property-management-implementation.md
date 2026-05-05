# Gluth Wright Property Management Mockup Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a 3-page, presentation-ready React + Tailwind mockup (Home, Listings, About & Contact) that leads with trust and drives users to `Talk to Our Team`.

**Architecture:** Use a Vite React SPA with React Router for three routes and a shared shell (`SiteHeader` + `SiteFooter`). Centralize site content and listing data in typed constants so copy/UI can be iterated quickly before the pitch. Build reusable section and UI components, then compose each page with consistent CTA hierarchy and responsive behavior.

**Tech Stack:** React 18, React Router 6, Tailwind CSS v4, TypeScript, Lucide React, Vite 7

---

### Task 1: Scaffold Project and Dependencies

**Files:**
- Create: `package.json`
- Create: `tsconfig.json`
- Create: `tsconfig.app.json`
- Create: `tsconfig.node.json`
- Create: `vite.config.ts`
- Create: `index.html`
- Create: `src/main.tsx`
- Create: `src/App.tsx`
- Create: `src/index.css`
- Create: `src/vite-env.d.ts`

- [ ] **Step 1: Write the failing build command**

Run: `npm run build`
Expected: FAIL with "Missing script: build"

- [ ] **Step 2: Create package manifest and scripts**

```json
{
  "name": "gluth-wright",
  "private": true,
  "version": "0.1.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "tsc -b && vite build",
    "preview": "vite preview",
    "typecheck": "tsc --noEmit",
    "lint": "eslint ."
  },
  "dependencies": {
    "lucide-react": "^0.536.0",
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "react-router-dom": "^6.30.1"
  },
  "devDependencies": {
    "@types/react": "^18.3.12",
    "@types/react-dom": "^18.3.1",
    "@vitejs/plugin-react": "^4.4.1",
    "tailwindcss": "^4.1.12",
    "typescript": "^5.6.3",
    "vite": "^7.1.7"
  }
}
```

- [ ] **Step 3: Add base TypeScript/Vite app files**

```tsx
// src/main.tsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
```

```tsx
// src/App.tsx
import { Navigate, Route, Routes } from 'react-router-dom'

export default function App(): JSX.Element {
  return (
    <Routes>
      <Route path="/" element={<div>Home</div>} />
      <Route path="/listings" element={<div>Listings</div>} />
      <Route path="/about-contact" element={<div>About &amp; Contact</div>} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}
```

- [ ] **Step 4: Install dependencies**

Run: `npm install`
Expected: PASS, `node_modules` + `package-lock.json` created

- [ ] **Step 5: Run build to verify setup**

Run: `npm run build`
Expected: PASS, Vite build output in `dist/`

- [ ] **Step 6: Commit scaffold**

```bash
git add package.json package-lock.json tsconfig.json tsconfig.app.json tsconfig.node.json vite.config.ts index.html src/main.tsx src/App.tsx src/index.css src/vite-env.d.ts
git commit -m "feat: scaffold React and Tailwind mockup app"
```

### Task 2: Build Global Design System and Shell

**Files:**
- Modify: `src/index.css`
- Create: `src/lib/siteContent.ts`
- Create: `src/components/SiteHeader.tsx`
- Create: `src/components/SiteFooter.tsx`
- Create: `src/components/PageContainer.tsx`
- Modify: `src/App.tsx`

- [ ] **Step 1: Write failing route-shell test target (manual)**

Run: `npm run dev`
Expected: App renders plain placeholder text without shared header/footer

- [ ] **Step 2: Define global tokens and dark/light auto mode in CSS**

```css
/* src/index.css */
@import 'tailwindcss';

:root {
  --color-surface: #f7f3ed;
  --color-surface-secondary: #efe6db;
  --color-card: #fffdf9;
  --color-text: #2f2a25;
  --color-text-muted: #6f665d;
  --color-border: #d8ccbf;
  --color-accent: #9a4f2a;
  --color-accent-strong: #7f3f20;
  --color-success: #2e7d4d;
  --color-warning: #a56a1c;
  --color-error: #9f2f2f;
}

@media (prefers-color-scheme: dark) {
  :root {
    --color-surface: #1e1a17;
    --color-surface-secondary: #2a241f;
    --color-card: #302923;
    --color-text: #f4ede5;
    --color-text-muted: #cfbda9;
    --color-border: #4a4037;
    --color-accent: #cf8157;
    --color-accent-strong: #dd946c;
    --color-success: #70c48e;
    --color-warning: #e1b463;
    --color-error: #de7373;
  }
}
```

- [ ] **Step 3: Add shared content model and navigation links**

```ts
// src/lib/siteContent.ts
export interface NavItem {
  label: string
  path: string
}

export const navItems: NavItem[] = [
  { label: 'Home', path: '/' },
  { label: 'Listings', path: '/listings' },
  { label: 'About & Contact', path: '/about-contact' },
]

export const primaryCta = { label: 'Talk to Our Team', href: '/about-contact#contact-form' } as const
export const secondaryCta = { label: 'View Available Rentals', href: '/listings' } as const
```

- [ ] **Step 4: Implement shell components and route composition**

```tsx
// src/App.tsx
import { Navigate, Route, Routes } from 'react-router-dom'
import { SiteFooter } from './components/SiteFooter'
import { SiteHeader } from './components/SiteHeader'
import { AboutContactPage } from './pages/AboutContactPage'
import { HomePage } from './pages/HomePage'
import { ListingsPage } from './pages/ListingsPage'

export default function App(): JSX.Element {
  return (
    <div className="min-h-screen bg-[var(--color-surface)] text-[var(--color-text)]">
      <SiteHeader />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/listings" element={<ListingsPage />} />
          <Route path="/about-contact" element={<AboutContactPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <SiteFooter />
    </div>
  )
}
```

- [ ] **Step 5: Verify shell behavior**

Run: `npm run build`
Expected: PASS with no type errors; shared shell visible on all routes in `npm run dev`

- [ ] **Step 6: Commit shell foundation**

```bash
git add src/index.css src/lib/siteContent.ts src/components/SiteHeader.tsx src/components/SiteFooter.tsx src/components/PageContainer.tsx src/App.tsx
git commit -m "feat: add warm design system and shared site shell"
```

### Task 3: Implement Home Page Sections

**Files:**
- Create: `src/pages/HomePage.tsx`
- Create: `src/sections/home/HeroSection.tsx`
- Create: `src/sections/home/SocialProofStrip.tsx`
- Create: `src/sections/home/ServicesGrid.tsx`
- Create: `src/sections/home/FeaturedListingsPreview.tsx`
- Create: `src/sections/home/OwnerDifferentiators.tsx`
- Create: `src/sections/home/TestimonialsSection.tsx`
- Create: `src/sections/home/FinalCtaBand.tsx`
- Modify: `src/lib/siteContent.ts`

- [ ] **Step 1: Write failing smoke assertion (manual)**

Run: `npm run dev`
Expected: `/` route does not yet contain required section sequence

- [ ] **Step 2: Add structured homepage content constants**

```ts
// src/lib/siteContent.ts (append)
export interface ServiceItem {
  title: string
  description: string
}

export const homeServices: ServiceItem[] = [
  { title: 'Leasing Support', description: 'We market, screen, and place reliable tenants with care.' },
  { title: 'Tenant Care', description: 'Friendly communication that keeps renters informed and supported.' },
  { title: 'Maintenance Coordination', description: 'Responsive issue handling with trusted local vendors.' },
  { title: 'Owner Reporting', description: 'Clear monthly updates so you always know what is happening.' },
]
```

- [ ] **Step 3: Implement Home page composition**

```tsx
// src/pages/HomePage.tsx
import { FeaturedListingsPreview } from '../sections/home/FeaturedListingsPreview'
import { FinalCtaBand } from '../sections/home/FinalCtaBand'
import { HeroSection } from '../sections/home/HeroSection'
import { OwnerDifferentiators } from '../sections/home/OwnerDifferentiators'
import { ServicesGrid } from '../sections/home/ServicesGrid'
import { SocialProofStrip } from '../sections/home/SocialProofStrip'
import { TestimonialsSection } from '../sections/home/TestimonialsSection'

export function HomePage(): JSX.Element {
  return (
    <>
      <HeroSection />
      <SocialProofStrip />
      <ServicesGrid />
      <FeaturedListingsPreview />
      <OwnerDifferentiators />
      <TestimonialsSection />
      <FinalCtaBand />
    </>
  )
}
```

- [ ] **Step 4: Add realistic copy and imagery URLs in sections**

```tsx
// Example in HeroSection.tsx
<h1>Trusted neighborhood property management, built on real relationships.</h1>
<p>John Gluth Wright helps owners protect their investments and helps renters find homes they can feel good about.</p>
```

- [ ] **Step 5: Verify section order and responsive behavior**

Run: `npm run build`
Expected: PASS; Home page contains all seven designed sections and both CTAs

- [ ] **Step 6: Commit home page**

```bash
git add src/pages/HomePage.tsx src/sections/home src/lib/siteContent.ts
git commit -m "feat: build trust-first homepage narrative sections"
```

### Task 4: Implement Listings Page with Filter + Empty/Error/Loading States

**Files:**
- Create: `src/pages/ListingsPage.tsx`
- Create: `src/components/listings/ListingFilterBar.tsx`
- Create: `src/components/listings/ListingCard.tsx`
- Create: `src/components/listings/ListingsGrid.tsx`
- Modify: `src/lib/siteContent.ts`

- [ ] **Step 1: Write failing filter behavior check (manual)**

Run: `npm run dev`
Expected: `/listings` has no interactive filtering yet

- [ ] **Step 2: Define listing data and filter interfaces**

```ts
// src/lib/siteContent.ts (append)
export interface Listing {
  id: string
  title: string
  neighborhood: string
  monthlyRent: number
  beds: number
  baths: number
  petFriendly: boolean
  availableOn: string
  imageUrl: string
}

export interface ListingsFilter {
  neighborhood: string
  maxRent: number
  minimumBeds: number
  petFriendlyOnly: boolean
}
```

- [ ] **Step 3: Implement page state machine for loading/error/empty/content**

```tsx
// src/pages/ListingsPage.tsx
type ListingsViewState = 'loading' | 'error' | 'ready'

const [viewState, setViewState] = useState<ListingsViewState>('loading')

useEffect(() => {
  const timer = window.setTimeout(() => setViewState('ready'), 350)
  return () => window.clearTimeout(timer)
}, [])
```

- [ ] **Step 4: Implement filters and derived results**

```tsx
const filteredListings = useMemo(() => {
  return listingData.filter((listing) => {
    if (filter.neighborhood !== 'All' && listing.neighborhood !== filter.neighborhood) return false
    if (listing.monthlyRent > filter.maxRent) return false
    if (listing.beds < filter.minimumBeds) return false
    if (filter.petFriendlyOnly && !listing.petFriendly) return false
    return true
  })
}, [filter])
```

- [ ] **Step 5: Verify all states manually**

Run: `npm run dev`
Expected:
- Loading state visible on initial route entry
- Error state render path available via temporary toggle variable
- Empty state appears when restrictive filters produce no results
- Ready state shows listing cards with data

- [ ] **Step 6: Commit listings page**

```bash
git add src/pages/ListingsPage.tsx src/components/listings src/lib/siteContent.ts
git commit -m "feat: add interactive listings page with robust states"
```

### Task 5: Implement About & Contact Page with Form Validation

**Files:**
- Create: `src/pages/AboutContactPage.tsx`
- Create: `src/components/contact/ContactForm.tsx`
- Create: `src/components/contact/ProcessTimeline.tsx`
- Create: `src/components/contact/TeamTrustBlock.tsx`
- Modify: `src/lib/siteContent.ts`

- [ ] **Step 1: Write failing form behavior check (manual)**

Run: `npm run dev`
Expected: `/about-contact` does not yet include validated contact flow

- [ ] **Step 2: Define form interfaces and initial form state**

```ts
interface ContactFormValues {
  intent: 'owner' | 'renter'
  fullName: string
  email: string
  phone: string
  message: string
}

interface ContactFormErrors {
  fullName?: string
  email?: string
  message?: string
}
```

- [ ] **Step 3: Implement synchronous validation and inline errors**

```ts
function validate(values: ContactFormValues): ContactFormErrors {
  const errors: ContactFormErrors = {}
  if (!values.fullName.trim()) errors.fullName = 'Please add your full name.'
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) errors.email = 'Please enter a valid email.'
  if (!values.message.trim()) errors.message = 'Please share how we can help.'
  return errors
}
```

- [ ] **Step 4: Add submit success and submit error states**

```tsx
type SubmitState = 'idle' | 'submitting' | 'success' | 'error'
```

Render confirmation copy for `success` and fallback help text for `error`.

- [ ] **Step 5: Verify contact pathway end-to-end**

Run: `npm run build`
Expected: PASS; About & Contact shows timeline, trust block, validated form, and success/error messages

- [ ] **Step 6: Commit about/contact page**

```bash
git add src/pages/AboutContactPage.tsx src/components/contact src/lib/siteContent.ts
git commit -m "feat: implement about and contact page with validated form"
```

### Task 6: Accessibility, Motion, and SEO Polish

**Files:**
- Modify: `index.html`
- Modify: `src/components/SiteHeader.tsx`
- Modify: `src/index.css`
- Modify: `src/pages/HomePage.tsx`
- Modify: `src/pages/ListingsPage.tsx`
- Modify: `src/pages/AboutContactPage.tsx`

- [ ] **Step 1: Write failing quality check**

Run: `npm run build`
Expected: PASS build, but manual checks reveal missing metadata and reduced-motion handling

- [ ] **Step 2: Add SEO metadata and social preview tags**

```html
<!-- index.html head -->
<title>John Gluth Wright Property Management | Trusted Local Rentals</title>
<meta name="description" content="Neighborhood-focused property management with responsive support for owners and renters." />
<meta property="og:title" content="John Gluth Wright Property Management" />
<meta property="og:description" content="Trusted local property management with clear communication and modern renter experiences." />
```

- [ ] **Step 3: Add reduced motion CSS strategy**

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

- [ ] **Step 4: Verify accessibility semantics and focus states**

Check:
- One `h1` per page
- Interactive controls are keyboard reachable
- Visible focus ring on links, buttons, and inputs
- Form fields have associated labels

- [ ] **Step 5: Run final verification suite**

Run: `npm run typecheck && npm run build`
Expected: PASS

- [ ] **Step 6: Commit final polish**

```bash
git add index.html src/index.css src/components/SiteHeader.tsx src/pages/HomePage.tsx src/pages/ListingsPage.tsx src/pages/AboutContactPage.tsx
git commit -m "chore: finalize accessibility, motion, and SEO polish"
```

### Task 7: Final Demo Readiness Verification

**Files:**
- Modify: `README.md`

- [ ] **Step 1: Add run instructions for mockup demo**

```md
## Run locally

1. `npm install`
2. `npm run dev`
3. Open the printed local URL
```

- [ ] **Step 2: Add demo script checklist**

```md
## Demo flow

1. Home trust narrative and primary CTA
2. Listings filtering and empty-state handling
3. About & Contact form success state
```

- [ ] **Step 3: Verify final app runtime**

Run: `npm run dev`
Expected: All 3 pages are responsive and ready for live walkthrough

- [ ] **Step 4: Commit documentation**

```bash
git add README.md
git commit -m "docs: add local run and demo walkthrough guidance"
```

## Spec Coverage Check

- 3-page scope (`Home`, `Listings`, `About & Contact`) covered in Tasks 3-5.
- Trust-first narrative and CTA hierarchy (`Talk to Our Team` primary, `View Available Rentals` secondary) covered in Tasks 2-5.
- Warm visual refresh and real-content direction covered in Tasks 2-3 plus content constants.
- Listings utility and required states (loading/error/empty/content) covered in Task 4.
- Contact credibility and form flow with owner/renter intent and validation covered in Task 5.
- Accessibility, motion restraint, and SEO baseline covered in Task 6.
- Demo readiness for pitch presentation covered in Task 7.

## Placeholder and Consistency Check

- No `TODO`/`TBD` placeholders remain.
- Shared naming is consistent: `AboutContactPage`, `ListingsPage`, `primaryCta`.
- File paths are explicit and scoped to a Vite + React + TypeScript app.
