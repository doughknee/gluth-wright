import { Link, NavLink } from 'react-router-dom'
import { navItems, primaryCta } from '../lib/siteContent'
import { PageContainer } from './PageContainer'

export function SiteHeader(): JSX.Element {
  return (
    <header className="sticky top-0 z-20 border-b border-[var(--color-border)] bg-[var(--color-card)]/95 backdrop-blur-md">
      <PageContainer>
        <div className="hidden min-h-20 items-center justify-between gap-6 md:flex">
          <Link to="/" className="flex items-center gap-3">
            <img
              alt="Gluth Wright Properties logo"
              className="logo-cutout h-11 w-auto"
              loading="eager"
              src="https://lirp.cdn-website.com/5a3149f7/dms3rep/multi/opt/logo-2-1920w.jpg"
            />
            <span className="text-sm font-semibold leading-tight tracking-wide text-[var(--color-text)]">
              Gluth Wright Properties
            </span>
          </Link>
          <nav aria-label="Primary navigation" className="flex items-center gap-7">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  [
                    'text-sm font-semibold tracking-wide transition-colors',
                    isActive ? 'text-[var(--color-accent)]' : 'text-[var(--color-text-muted)] hover:text-[var(--color-text)]',
                  ].join(' ')
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
          <Link
            to={primaryCta.href}
            className="rounded-full bg-[var(--color-accent)] px-4 py-2 text-sm font-semibold text-[var(--color-card)] transition-colors hover:bg-[var(--color-accent-strong)]"
          >
            Talk to Our Team
          </Link>
        </div>

        <div className="py-2 md:hidden">
          <div className="flex items-center justify-between gap-3">
            <Link to="/" className="flex items-center gap-2">
              <img
                alt="Gluth Wright Properties logo"
                className="logo-cutout h-9 w-auto"
                loading="eager"
                src="https://lirp.cdn-website.com/5a3149f7/dms3rep/multi/opt/logo-2-1920w.jpg"
              />
            </Link>
            <Link to={primaryCta.href} className="rounded-full bg-[var(--color-accent)] px-3 py-2 text-xs font-semibold text-[var(--color-card)]">
              Talk to Us
            </Link>
          </div>
          <nav aria-label="Mobile navigation" className="mt-2 grid grid-cols-3 gap-2">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  [
                    'rounded-full border px-3 py-2 text-center text-xs font-semibold',
                    isActive
                      ? 'border-[var(--color-accent)] bg-[color-mix(in_oklab,var(--color-accent),white_86%)] text-[var(--color-accent)]'
                      : 'border-[var(--color-border)] text-[var(--color-text-muted)]',
                  ].join(' ')
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>
      </PageContainer>
    </header>
  )
}
