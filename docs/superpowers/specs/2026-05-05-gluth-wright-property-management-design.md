# John Gluth Wright Property Management Website Mockup Design

Date: 2026-05-05
Owner: John Gluth Wright Property Management
Prepared for: New website mockup presentation to win redesign engagement

## 1. Objective

Create a high-fidelity, presentation-ready website mockup that positions John Gluth Wright Property Management as a trusted, neighborhood-focused, modern property management company.

Primary business goal:
- Build trust and brand first, while still capturing both owner and renter leads.

Primary conversion goal across the experience:
- `Talk to Our Team`

Secondary conversion goal:
- `View Available Rentals`

## 2. Scope

Build a 3-page responsive mockup:
1. Home
2. Listings
3. About & Contact

Constraints and direction:
- Light brand refresh only (preserve recognizable identity, improve typography/colors/layout quality)
- Warm, approachable tone (not luxury/corporate cold)
- Realistic local-feeling photography and polished draft copy
- Presentation-ready quality suitable for client pitch

## 3. Audience and Positioning

Primary audiences:
- Property owners evaluating management partners
- Renters looking for available homes and responsive support

Positioning statement:
- A trusted local partner that combines friendly neighborhood service with professional, reliable operations.

## 4. Information Architecture

Global structure:
- Shared site shell with consistent navigation and footer across all pages
- Persistent conversion hierarchy: primary `Talk to Our Team`, secondary `View Available Rentals`

Page map:
- `/` Home: trust narrative + service clarity + proof + conversion
- `/listings` Listings: practical property browsing and filtering
- `/about-contact` About & Contact: credibility, process transparency, and direct outreach

## 5. Visual Design System

Design intent:
- Familiar but noticeably upgraded visual identity
- Warm and neighborly, yet competent and polished

Typography strategy:
- Serif display face for warmth and character in major headlines
- Clean sans-serif for body text, navigation, forms, and UI controls
- Clear hierarchy from hero headline to fine-print metadata

Color strategy:
- Soft neutral base for backgrounds and surfaces
- Earthy accent color for calls-to-action and emphasis
- Accessible contrast for all text and interactive elements
- Primary CTA styling reserved for `Talk to Our Team`

Imagery strategy:
- Real residential and neighborhood scenes that feel local and lived-in
- Family-ready interiors, streetscapes, and welcoming exteriors
- Avoid sterile corporate and generic office visuals

Component style:
- Moderately rounded cards and controls
- Intentional spacing rhythm and readable line lengths
- Subtle depth and hover feedback

## 6. Page-by-Page Content and Layout

### 6.1 Home

Purpose:
- Establish trust quickly and route users to the right next action.

Sections in order:
1. Hero
   - Trust-led headline
   - Local credibility subtext
   - Primary CTA `Talk to Our Team`
   - Secondary CTA `View Available Rentals`
2. Social Proof Strip
   - Service area and confidence metrics (years serving, homes managed, response expectations)
3. Services Bento Grid
   - Leasing support
   - Tenant communication
   - Maintenance coordination
   - Owner reporting
4. Featured Listings Preview
   - Three curated cards with practical details
5. Why Owners Choose Us
   - Plain-language differentiators
6. Testimonials
   - Mix of owner and renter voices
7. Final CTA Band
   - Reinforce primary action
8. Footer
   - Helpful links and contact pathways

### 6.2 Listings

Purpose:
- Provide an intuitive home search experience while reinforcing trust.

Sections and behaviors:
1. Intro Header
   - Friendly orientation copy
2. Filter Bar
   - Location
   - Price range
   - Beds/Baths
   - Pet-friendly toggle
3. Listing Grid
   - Cards with rent, beds, baths, neighborhood, availability, and image
4. Empty State
   - Helpful copy with clear next step when no results match
5. Support CTA
   - Persistent visible route to `Talk to Our Team`

### 6.3 About & Contact

Purpose:
- Convert trust into direct outreach through transparency and accessibility.

Sections in order:
1. Local Story
   - Company roots and service philosophy
2. Process Timeline
   - Inquiry -> Tour/Application -> Onboarding/Support
3. Trust Contact Block
   - Phone, email, office hours, expected response time
4. Contact Form
   - Intent selector (owner or renter)
   - Minimal friction field set
5. Area Coverage / Map Block
   - Service coverage clarity
6. Closing Reassurance CTA
   - Repeat primary action

## 7. Interaction and UX Behavior

Navigation:
- Sticky header
- Active route indication
- Mobile menu with large tap targets

Interactive patterns:
- Primary CTA remains visually dominant across pages
- Listing cards get subtle hover/focus affordances
- Filter updates provide immediate visual feedback
- Form validation uses clear inline messages
- Success state confirms submission outcome

Accessibility baseline:
- Semantic structure (`nav`, `main`, `section`, `footer`, form labels)
- Keyboard-accessible controls and navigation
- Visible focus states
- WCAG-aligned contrast
- Reduced-motion support

Motion direction:
- Subtle fade/slide entrances and quick hover transitions
- No decorative or distracting animation

## 8. Content Strategy

Voice and tone:
- Warm, trustworthy, plainspoken, local
- Confident but not salesy

Copy principles:
- Specific and service-oriented language
- Clear owner/renter pathways without diluting trust-first positioning
- No filler copy or placeholders

Data realism:
- Sample listings, testimonials, and metrics should appear plausible and region-appropriate for a pitch environment.

## 9. Responsive and Quality Requirements

Responsive behavior:
- Mobile-first implementation
- Verified layouts at common breakpoints (small mobile, tablet, desktop)

Quality gates:
- Presentation-ready visual polish
- Cohesive style across all pages
- Meaningful hover/focus states for all interactive controls
- Empty/error/success states where relevant (filters/forms/content modules)

## 10. Mockup Deliverable Definition

Deliverable includes:
- 3-page React + Tailwind mockup
- Shared nav/footer shell
- Realistic draft copy and real photography
- Conversion-ready CTA hierarchy
- Production-style behavior for key interactive states

Usage in pitch:
- The mockup should be directly demoable as the proposed upgraded web presence, showing clear improvements in trust communication, usability, and lead capture clarity.

## 11. Out of Scope

Not included in this design spec:
- Live backend integration
- Production CMS/data pipelines
- Final brand/legal copy approval
- Advanced map/search infrastructure beyond mockup behavior
