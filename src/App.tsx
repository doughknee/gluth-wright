import { Navigate, Route, Routes } from 'react-router-dom'
import { PageContainer } from './components/PageContainer'
import { SiteFooter } from './components/SiteFooter'
import { SiteHeader } from './components/SiteHeader'

function PlaceholderPage({ title }: { title: string }): JSX.Element {
  return (
    <PageContainer>
      <section className="py-16">
        <h1 className="text-3xl font-semibold tracking-tight">{title}</h1>
      </section>
    </PageContainer>
  )
}

export default function App(): JSX.Element {
  return (
    <div className="min-h-screen bg-[var(--color-surface)] text-[var(--color-text)]">
      <SiteHeader />
      <main>
        <Routes>
          <Route path="/" element={<PlaceholderPage title="Home" />} />
          <Route path="/listings" element={<PlaceholderPage title="Listings" />} />
          <Route path="/about-contact" element={<PlaceholderPage title="About & Contact" />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <SiteFooter />
    </div>
  )
}
