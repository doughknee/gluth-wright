import { Link } from 'react-router-dom'
import { PageContainer } from '../components/PageContainer'
import {
  homeServices,
  listings,
  primaryCta,
  secondaryCta,
  testimonials,
  trustStats,
} from '../lib/siteContent'

export function HomePage(): JSX.Element {
  const featuredListings = listings.slice(0, 3)
  const ownerShift = [
    { before: 'Slow replies and fragmented updates', after: 'Single point of contact and predictable reporting' },
    { before: 'Vacancy drags with generic listing copy', after: 'Positioned listings with faster qualified inquiries' },
    { before: 'Reactive maintenance and budget drift', after: 'Proactive coordination with clear cost visibility' },
  ]

  return (
    <>
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute -left-28 top-16 h-72 w-72 rounded-full bg-[color-mix(in_oklab,var(--color-highlight),transparent_82%)] blur-3xl" />
        <div className="pointer-events-none absolute -right-24 bottom-10 h-64 w-64 rounded-full bg-[color-mix(in_oklab,var(--color-accent),transparent_84%)] blur-3xl" />
        <PageContainer>
          <div className="grid gap-10 py-12 md:grid-cols-[1.05fr_0.95fr] md:items-center md:py-28">
            <div>
              <p className="eyebrow mb-3">
                Gluth Wright Properties
              </p>
              <h1 className="hero-title font-semibold">
                Property management that feels <span className="luxury-line">elevated, local, and deeply reliable.</span>
              </h1>
              <p className="mt-4 max-w-xl text-base text-[var(--color-text-muted)] sm:text-lg">
                We combine high-touch neighborhood care with disciplined operations so owners protect value and residents feel at home from day one.
              </p>
              <p className="mt-4 max-w-xl border-l-2 border-[var(--color-accent)] pl-3 text-xs uppercase tracking-[0.14em] text-[var(--color-highlight)] sm:pl-4 sm:text-sm sm:tracking-[0.16em]">
                Strategy-grade management for real neighborhoods
              </p>
              <div className="mt-7 flex flex-wrap gap-2.5 sm:gap-3">
                <Link className="btn-primary" to={primaryCta.href}>
                  {primaryCta.label}
                </Link>
                <Link className="btn-secondary" to={secondaryCta.href}>
                  {secondaryCta.label}
                </Link>
              </div>
            </div>
            <div className="panel overflow-hidden p-2 md:rotate-[1.2deg]">
              <img
                alt="Luxury residential home exterior at dusk"
                className="h-72 w-full rounded-xl object-cover sm:h-96"
                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=80"
              />
            </div>
          </div>
        </PageContainer>
      </section>

      <section>
        <PageContainer>
          <ul className="grid gap-3 py-8 sm:grid-cols-3 sm:gap-4 sm:py-10">
            {trustStats.map((stat) => (
              <li className="panel p-5" key={stat.label}>
                <p className="text-2xl font-semibold text-[var(--color-accent)]">{stat.value}</p>
                <p className="mt-1 text-sm text-[var(--color-text-muted)]">{stat.label}</p>
              </li>
            ))}
          </ul>
        </PageContainer>
      </section>

      <section className="relative">
        <PageContainer>
          <div className="py-12 sm:py-20">
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Concierge-level support for owners and residents</h2>
            <div className="mt-8 grid gap-5 md:grid-cols-[1.3fr_0.7fr]">
              <div className="grid gap-5 sm:grid-cols-2">
                {homeServices.map((service) => (
                  <article className="panel p-6" key={service.title}>
                    <h3 className="text-xl font-semibold">{service.title}</h3>
                    <p className="mt-2 text-[var(--color-text-muted)]">{service.description}</p>
                  </article>
                ))}
              </div>
              <aside className="panel p-6 sm:p-7">
                <p className="eyebrow">Owner Promise</p>
                <h3 className="mt-2 text-2xl font-semibold">No black-box management.</h3>
                <p className="mt-3 text-[var(--color-text-muted)]">
                  You get transparent reporting, proactive communication, and decisive action when issues surface.
                </p>
              </aside>
            </div>
          </div>
        </PageContainer>
      </section>

      <section className="bg-[color-mix(in_oklab,var(--color-surface-secondary),transparent_25%)]">
        <PageContainer>
          <div className="py-12 sm:py-16">
            <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-end sm:justify-between sm:gap-4">
              <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Featured residences</h2>
              <Link className="text-sm font-semibold text-[var(--color-accent)] hover:underline" to="/listings">
                Browse all listings
              </Link>
            </div>
            <div className="mt-6 grid gap-6 sm:mt-8">
              {featuredListings.map((listing) => (
                <article className="grid gap-4 border-b border-[color-mix(in_oklab,var(--color-border),transparent_25%)] pb-6 last:border-b-0 md:grid-cols-[260px_1fr] md:items-center" key={listing.id}>
                  <img alt={listing.title} className="h-48 w-full rounded-lg object-cover md:h-36" src={listing.imageUrl} />
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-highlight)]">{listing.neighborhood}</p>
                    <h3 className="mt-1 text-xl font-semibold">{listing.title}</h3>
                    <p className="mt-2 text-sm text-[var(--color-text-muted)]">{listing.beds} bedrooms • {listing.baths} bathrooms</p>
                    <div className="mt-3 flex flex-wrap items-center gap-3">
                      <p className="font-semibold text-[var(--color-accent)]">${listing.monthlyRent.toLocaleString()}/mo</p>
                      <span className="text-xs font-medium text-[var(--color-text-muted)]">{listing.availableOn}</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </PageContainer>
      </section>

      <section>
        <PageContainer>
          <div className="py-12 sm:py-16">
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">What changes when owners switch</h2>
            <div className="mt-6 grid gap-5 md:grid-cols-3">
              {ownerShift.map((item) => (
                <article className="border-l-2 border-[var(--color-accent)] pl-4" key={item.before}>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[var(--color-highlight)]">Before</p>
                  <p className="mt-1 text-sm text-[var(--color-text-muted)]">{item.before}</p>
                  <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.12em] text-[var(--color-accent)]">After</p>
                  <p className="mt-1 text-sm font-semibold">{item.after}</p>
                </article>
              ))}
            </div>
          </div>
        </PageContainer>
      </section>

      <section>
        <PageContainer>
          <div className="py-12 sm:py-16">
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Client outcomes, not promises</h2>
            <div className="mt-8 grid gap-6 md:grid-cols-[1.2fr_0.8fr]">
              <blockquote className="border-l-4 border-[var(--color-accent)] bg-[color-mix(in_oklab,var(--color-surface-secondary),transparent_35%)] p-6 sm:p-7">
                <p className="text-lg leading-relaxed">“{testimonials[0].quote}”</p>
                <footer className="mt-5 text-sm text-[var(--color-text-muted)]">
                  <span className="font-semibold text-[var(--color-text)]">{testimonials[0].name}</span> — {testimonials[0].role}
                </footer>
              </blockquote>
              <div className="grid gap-4">
                {testimonials.slice(1).map((testimonial) => (
                  <blockquote className="border-b border-[color-mix(in_oklab,var(--color-border),transparent_20%)] pb-4 last:border-b-0 last:pb-0" key={testimonial.name}>
                    <p className="text-sm leading-relaxed">“{testimonial.quote}”</p>
                    <footer className="mt-4 text-sm text-[var(--color-text-muted)]">
                      <span className="font-semibold text-[var(--color-text)]">{testimonial.name}</span> — {testimonial.role}
                    </footer>
                  </blockquote>
                ))}
              </div>
            </div>
          </div>
        </PageContainer>
      </section>

      <section>
        <PageContainer>
          <div className="py-12 sm:py-16">
            <div className="panel p-6 text-center sm:p-8">
              <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Ready for a management partner your properties deserve?</h2>
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
