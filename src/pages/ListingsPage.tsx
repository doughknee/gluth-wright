import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { PageContainer } from '../components/PageContainer'
import { listings, primaryCta } from '../lib/siteContent'

interface ListingsFilter {
  neighborhood: string
  maxRent: number
  minimumBeds: number
  petFriendlyOnly: boolean
}

const neighborhoods = ['All', ...new Set(listings.map((listing) => listing.neighborhood))]

export function ListingsPage(): JSX.Element {
  const [hasLoadError, setHasLoadError] = useState(false)
  const [filter, setFilter] = useState<ListingsFilter>({
    neighborhood: 'All',
    maxRent: 3000,
    minimumBeds: 0,
    petFriendlyOnly: false,
  })

  const filteredListings = useMemo(() => {
    return listings.filter((listing) => {
      if (filter.neighborhood !== 'All' && listing.neighborhood !== filter.neighborhood) {
        return false
      }
      if (listing.monthlyRent > filter.maxRent) {
        return false
      }
      if (listing.beds < filter.minimumBeds) {
        return false
      }
      if (filter.petFriendlyOnly && !listing.petFriendly) {
        return false
      }
      return true
    })
  }, [filter])

  return (
    <PageContainer>
      <section className="py-14">
        <h1 className="text-4xl font-semibold tracking-tight">Find a residence that matches your lifestyle</h1>
        <p className="mt-3 max-w-2xl text-[var(--color-text-muted)]">
          Explore current availability with clear pricing, neighborhood context, and direct access to our team for guided tours.
        </p>
      </section>

      <section className="panel p-5">
        <div className="grid gap-3 md:grid-cols-4">
          <label className="text-sm">
            <span className="mb-1 block font-medium">Area</span>
            <select
              className="input"
              onChange={(event) => setFilter((prev) => ({ ...prev, neighborhood: event.target.value }))}
              value={filter.neighborhood}
            >
              {neighborhoods.map((neighborhood) => (
                <option key={neighborhood} value={neighborhood}>
                  {neighborhood}
                </option>
              ))}
            </select>
          </label>
          <label className="text-sm">
            <span className="mb-1 block font-medium">Monthly Budget</span>
            <select
              className="input"
              onChange={(event) => setFilter((prev) => ({ ...prev, maxRent: Number(event.target.value) }))}
              value={filter.maxRent}
            >
              <option value={1400}>$1,400</option>
              <option value={1800}>$1,800</option>
              <option value={2200}>$2,200</option>
              <option value={3000}>$3,000</option>
            </select>
          </label>
          <label className="text-sm">
            <span className="mb-1 block font-medium">Bedrooms</span>
            <select
              className="input"
              onChange={(event) => setFilter((prev) => ({ ...prev, minimumBeds: Number(event.target.value) }))}
              value={filter.minimumBeds}
            >
              <option value={0}>Any</option>
              <option value={1}>1+</option>
              <option value={2}>2+</option>
              <option value={3}>3+</option>
            </select>
          </label>
          <label className="flex items-end gap-2 text-sm">
            <input
              checked={filter.petFriendlyOnly}
              className="h-4 w-4"
              onChange={(event) => setFilter((prev) => ({ ...prev, petFriendlyOnly: event.target.checked }))}
              type="checkbox"
            />
            <span className="font-medium">Pet-friendly residences only</span>
          </label>
        </div>
      </section>

      <section className="py-8">
        <button className="btn-secondary text-xs" onClick={() => setHasLoadError((prev) => !prev)} type="button">
          {hasLoadError ? 'Hide' : 'Show'} demo error state
        </button>
      </section>

      {hasLoadError ? (
        <section className="panel p-8">
          <h2 className="text-2xl font-semibold">We could not load residences right now</h2>
          <p className="mt-2 text-[var(--color-text-muted)]">
            Please try again in a moment, or contact our team directly and we will walk you through current availability.
          </p>
          <Link className="btn-primary mt-4 inline-flex" to={primaryCta.href}>
            {primaryCta.label}
          </Link>
        </section>
      ) : filteredListings.length === 0 ? (
        <section className="panel p-8">
          <h2 className="text-2xl font-semibold">No residences match those filters yet</h2>
          <p className="mt-2 text-[var(--color-text-muted)]">
            Try widening your budget or neighborhood preferences. We can also notify you when new homes become available.
          </p>
          <Link className="btn-primary mt-4 inline-flex" to={primaryCta.href}>
            {primaryCta.label}
          </Link>
        </section>
      ) : (
        <section className="grid gap-5 pb-16 pt-3 md:grid-cols-2 lg:grid-cols-3">
          {filteredListings.map((listing) => (
            <article className="panel overflow-hidden" key={listing.id}>
              <img alt={listing.title} className="h-48 w-full object-cover" loading="lazy" src={listing.imageUrl} />
              <div className="p-4">
                <h2 className="text-lg font-semibold">{listing.title}</h2>
                <p className="mt-1 text-sm text-[var(--color-text-muted)]">
                  {listing.neighborhood} • {listing.beds} bd • {listing.baths} ba
                </p>
                <p className="mt-3 text-sm text-[var(--color-text-muted)]">{listing.availableOn}</p>
                <p className="mt-2 text-lg font-semibold text-[var(--color-accent)]">${listing.monthlyRent.toLocaleString()}/mo</p>
              </div>
            </article>
          ))}
        </section>
      )}
    </PageContainer>
  )
}
