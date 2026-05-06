import { Link, NavLink } from 'react-router-dom'
import { navItems, primaryCta } from '../lib/siteContent'
import { PageContainer } from './PageContainer'

export function SiteHeader(): JSX.Element {
  return (
    <header className="sticky top-0 z-20 border-b border-[var(--color-border)] bg-[var(--color-card)]/90 backdrop-blur-md">
      <PageContainer>
        <div className="flex min-h-16 items-center justify-between gap-2 py-2 sm:min-h-20 sm:gap-4 sm:py-0">
          <Link to="/" className="flex items-center gap-2.5 sm:gap-3">
            <img
              alt="Gluth Wright Properties logo"
              className="logo-cutout h-9 w-auto sm:h-10"
              loading="eager"
              src="https://lirp.cdn-website.com/5a3149f7/dms3rep/multi/opt/logo-2-1920w.jpg"
            />
            <span className="hidden text-sm font-semibold leading-tight tracking-wide text-[var(--color-text)] sm:block sm:text-base">
              Gluth Wright Properties
            </span>
          </Link>
          <Link
            to={primaryCta.href}
            className="rounded-full bg-[var(--color-accent)] px-3 py-2 text-xs font-semibold text-[#1c150c] transition-colors hover:bg-[var(--color-accent-strong)] sm:px-4 sm:py-2 sm:text-sm"
          >
            Talk to Us
          </Link>
        </div>
        <nav aria-label="Primary navigation" className="scrollbar-none -mx-1 flex gap-2 overflow-x-auto pb-2 sm:mx-0 sm:gap-6 sm:overflow-visible sm:pb-0">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                [
                  'whitespace-nowrap rounded-full border px-3 py-1.5 text-xs font-semibold transition-colors sm:border-0 sm:px-0 sm:py-0 sm:text-sm',
                  isActive
                    ? 'border-[var(--color-accent)] text-[var(--color-accent)]'
                    : 'border-[var(--color-border)] text-[var(--color-text-muted)] hover:text-[var(--color-text)]',
                ].join(' ')
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </PageContainer>
    </header>
  )
}
