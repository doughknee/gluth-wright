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

export interface ServiceItem {
  title: string
  description: string
}

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

export interface Testimonial {
  quote: string
  name: string
  role: string
}

export const trustStats = [
  { label: 'Years Serving Local Communities', value: '18+' },
  { label: 'Homes Under Management', value: '240' },
  { label: 'Average Response Time', value: 'Same Day' },
] as const

export const homeServices: ServiceItem[] = [
  {
    title: 'Leasing Support',
    description: 'Professional marketing, thoughtful showings, and careful screening for lasting placements.',
  },
  {
    title: 'Tenant Care',
    description: 'Friendly communication that keeps residents informed, respected, and supported year-round.',
  },
  {
    title: 'Maintenance Coordination',
    description: 'Reliable local vendors and clear updates so issues are handled quickly and correctly.',
  },
  {
    title: 'Owner Reporting',
    description: 'Simple monthly reporting with practical insight into performance and property health.',
  },
]

export const listings: Listing[] = [
  {
    id: 'l1',
    title: 'Bright 3-Bedroom Near Riverfront Trails',
    neighborhood: 'Downtown',
    monthlyRent: 1895,
    beds: 3,
    baths: 2,
    petFriendly: true,
    availableOn: 'Available Now',
    imageUrl:
      'https://images.unsplash.com/photo-1560185007-cde436f6a4d0?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'l2',
    title: 'Cozy 2-Bed Cottage with Fenced Yard',
    neighborhood: 'West Side',
    monthlyRent: 1540,
    beds: 2,
    baths: 1,
    petFriendly: true,
    availableOn: 'Available May 18',
    imageUrl:
      'https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'l3',
    title: 'Updated 1-Bedroom Close to Transit',
    neighborhood: 'North End',
    monthlyRent: 1225,
    beds: 1,
    baths: 1,
    petFriendly: false,
    availableOn: 'Available June 1',
    imageUrl:
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'l4',
    title: 'Family 4-Bedroom with Two Living Areas',
    neighborhood: 'Oak Hills',
    monthlyRent: 2290,
    beds: 4,
    baths: 3,
    petFriendly: true,
    availableOn: 'Available June 10',
    imageUrl:
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'l5',
    title: 'Quiet 2-Bed Townhome Near Schools',
    neighborhood: 'South Ridge',
    monthlyRent: 1695,
    beds: 2,
    baths: 2,
    petFriendly: false,
    availableOn: 'Available Now',
    imageUrl:
      'https://images.unsplash.com/photo-1449844908441-8829872d2607?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'l6',
    title: 'Modern 3-Bed Home with Backyard Deck',
    neighborhood: 'West Side',
    monthlyRent: 1975,
    beds: 3,
    baths: 2,
    petFriendly: true,
    availableOn: 'Available May 25',
    imageUrl:
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
  },
]

export const ownerReasons = [
  'Local market knowledge that protects your rental value',
  'Transparent communication and no mystery around next steps',
  'Hands-on support from first inquiry to long-term tenancy',
] as const

export const testimonials: Testimonial[] = [
  {
    quote:
      'John Gluth Wright took over two properties that had been stressful to manage. Within weeks, communication was clear and everything was organized.',
    name: 'Rachel M.',
    role: 'Property Owner',
  },
  {
    quote:
      'As a renter, I felt heard from day one. Questions were answered quickly and move-in was straightforward.',
    name: 'Devin L.',
    role: 'Resident',
  },
  {
    quote:
      'Their team treats our homes like they matter. Reporting is simple and I always know what is happening.',
    name: 'Anthony P.',
    role: 'Property Owner',
  },
]
