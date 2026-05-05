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
