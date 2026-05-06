import { Link } from 'react-router-dom'
import { navItems, secondaryCta } from '../lib/siteContent'
import { PageContainer } from './PageContainer'

export function SiteFooter(): JSX.Element {
  return (
    <footer className="mt-16 border-t border-[var(--color-border)] bg-[var(--color-surface-secondary)]/80">
      <PageContainer>
        <div className="flex flex-col gap-5 py-8 sm:flex-row sm:items-center sm:justify-between sm:py-10">
          <div>
            <p className="text-sm font-semibold text-[var(--color-text)]">Gluth Wright Property Management</p>
            <p className="mt-1 text-sm text-[var(--color-text-muted)]">Locally focused leasing and resident care.</p>
          </div>
          <nav aria-label="Footer navigation" className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm">
            {navItems.map((item) => (
              <Link key={item.path} to={item.path} className="text-[var(--color-text-muted)] hover:text-[var(--color-text)]">
                {item.label}
              </Link>
            ))}
            <Link to={secondaryCta.href} className="font-semibold text-[var(--color-accent)] hover:text-[var(--color-accent-strong)]">
              {secondaryCta.label}
            </Link>
          </nav>
        </div>
      </PageContainer>
    </footer>
  )
}
