import { Link, NavLink } from 'react-router-dom'
import { navItems, primaryCta } from '../lib/siteContent'
import { PageContainer } from './PageContainer'

export function SiteHeader(): JSX.Element {
  return (
    <header className="sticky top-0 z-20 border-b border-[var(--color-border)] bg-[var(--color-card)]/90 backdrop-blur-md">
      <PageContainer>
        <div className="flex min-h-20 flex-wrap items-center justify-between gap-4">
          <Link to="/" className="text-lg font-semibold tracking-wide text-[var(--color-text)]">
            Gluth Wright Property Management
          </Link>
          <nav aria-label="Primary navigation" className="flex items-center gap-4 sm:gap-6">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  [
                    'text-sm font-medium transition-colors',
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
            className="rounded-md bg-[var(--color-accent)] px-4 py-2 text-sm font-semibold text-[var(--color-card)] transition-colors hover:bg-[var(--color-accent-strong)]"
          >
            {primaryCta.label}
          </Link>
        </div>
      </PageContainer>
    </header>
  )
}
