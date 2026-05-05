import { Navigate, Route, Routes } from 'react-router-dom'
import { SiteFooter } from './components/SiteFooter'
import { SiteHeader } from './components/SiteHeader'
import { AboutContactPage } from './pages/AboutContactPage'
import { HomePage } from './pages/HomePage'
import { ListingsPage } from './pages/ListingsPage'

export default function App(): JSX.Element {
  return (
    <div className="min-h-screen bg-[var(--color-surface)] text-[var(--color-text)]">
      <SiteHeader />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/listings" element={<ListingsPage />} />
          <Route path="/about-contact" element={<AboutContactPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <SiteFooter />
    </div>
  )
}
