import { Link } from 'react-router-dom'
import { PageContainer } from '../components/PageContainer'
import {
  homeServices,
  listings,
  ownerReasons,
  primaryCta,
  secondaryCta,
  testimonials,
  trustStats,
} from '../lib/siteContent'

export function HomePage(): JSX.Element {
  const featuredListings = listings.slice(0, 3)

  return (
    <>
      <section className="border-b border-[var(--color-border)] bg-[var(--color-surface-secondary)]">
        <PageContainer>
          <div className="grid gap-10 py-16 md:grid-cols-2 md:items-center md:py-24">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.12em] text-[var(--color-accent)]">
                John Gluth Wright Property Management
              </p>
              <h1 className="text-4xl font-semibold leading-tight tracking-tight md:text-5xl">
                Trusted neighborhood property management, built on real relationships.
              </h1>
              <p className="mt-5 max-w-xl text-lg text-[var(--color-text-muted)]">
                We help owners protect long-term value and help renters find homes that feel right from day one.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link className="btn-primary" to={primaryCta.href}>
                  {primaryCta.label}
                </Link>
                <Link className="btn-secondary" to={secondaryCta.href}>
                  {secondaryCta.label}
                </Link>
              </div>
            </div>
            <img
              alt="A welcoming residential street with well-kept homes"
              className="h-80 w-full rounded-2xl object-cover shadow-md"
              src="https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?auto=format&fit=crop&w=1400&q=80"
            />
          </div>
        </PageContainer>
      </section>

      <section className="border-b border-[var(--color-border)]">
        <PageContainer>
          <ul className="grid gap-4 py-8 sm:grid-cols-3">
            {trustStats.map((stat) => (
              <li className="rounded-xl border border-[var(--color-border)] bg-[var(--color-card)] p-4" key={stat.label}>
                <p className="text-2xl font-semibold text-[var(--color-accent)]">{stat.value}</p>
                <p className="mt-1 text-sm text-[var(--color-text-muted)]">{stat.label}</p>
              </li>
            ))}
          </ul>
        </PageContainer>
      </section>

      <section>
        <PageContainer>
          <div className="py-16">
            <h2 className="text-3xl font-semibold tracking-tight">Support built around owners and residents</h2>
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {homeServices.map((service) => (
                <article className="rounded-xl border border-[var(--color-border)] bg-[var(--color-card)] p-6" key={service.title}>
                  <h3 className="text-xl font-semibold">{service.title}</h3>
                  <p className="mt-2 text-[var(--color-text-muted)]">{service.description}</p>
                </article>
              ))}
            </div>
          </div>
        </PageContainer>
      </section>

      <section className="border-y border-[var(--color-border)] bg-[var(--color-surface-secondary)]">
        <PageContainer>
          <div className="py-16">
            <div className="flex items-end justify-between gap-4">
              <h2 className="text-3xl font-semibold tracking-tight">Featured rentals</h2>
              <Link className="text-sm font-semibold text-[var(--color-accent)] hover:underline" to="/listings">
                Browse all listings
              </Link>
            </div>
            <div className="mt-8 grid gap-5 md:grid-cols-3">
              {featuredListings.map((listing) => (
                <article className="overflow-hidden rounded-xl border border-[var(--color-border)] bg-[var(--color-card)]" key={listing.id}>
                  <img alt={listing.title} className="h-44 w-full object-cover" src={listing.imageUrl} />
                  <div className="p-4">
                    <h3 className="font-semibold">{listing.title}</h3>
                    <p className="mt-2 text-sm text-[var(--color-text-muted)]">
                      {listing.neighborhood} • {listing.beds} bd • {listing.baths} ba
                    </p>
                    <p className="mt-3 font-semibold text-[var(--color-accent)]">${listing.monthlyRent.toLocaleString()}/mo</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </PageContainer>
      </section>

      <section>
        <PageContainer>
          <div className="py-16">
            <h2 className="text-3xl font-semibold tracking-tight">Why owners choose our team</h2>
            <ul className="mt-6 grid gap-3">
              {ownerReasons.map((reason) => (
                <li className="rounded-lg border border-[var(--color-border)] bg-[var(--color-card)] px-4 py-3" key={reason}>
                  {reason}
                </li>
              ))}
            </ul>
          </div>
        </PageContainer>
      </section>

      <section className="border-y border-[var(--color-border)] bg-[var(--color-surface-secondary)]">
        <PageContainer>
          <div className="py-16">
            <h2 className="text-3xl font-semibold tracking-tight">What local clients say</h2>
            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {testimonials.map((testimonial) => (
                <blockquote className="rounded-xl border border-[var(--color-border)] bg-[var(--color-card)] p-5" key={testimonial.name}>
                  <p className="text-sm leading-relaxed">“{testimonial.quote}”</p>
                  <footer className="mt-4 text-sm text-[var(--color-text-muted)]">
                    <span className="font-semibold text-[var(--color-text)]">{testimonial.name}</span> — {testimonial.role}
                  </footer>
                </blockquote>
              ))}
            </div>
          </div>
        </PageContainer>
      </section>

      <section>
        <PageContainer>
          <div className="py-16">
            <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-card)] p-8 text-center">
              <h2 className="text-3xl font-semibold tracking-tight">Ready for property management that feels personal?</h2>
              <p className="mx-auto mt-3 max-w-2xl text-[var(--color-text-muted)]">
                Whether you are an owner looking for dependable support or a renter searching for the right home, we are here to help.
              </p>
              <div className="mt-6 flex justify-center">
                <Link className="btn-primary" to={primaryCta.href}>
                  {primaryCta.label}
                </Link>
              </div>
            </div>
          </div>
        </PageContainer>
      </section>
    </>
  )
}
