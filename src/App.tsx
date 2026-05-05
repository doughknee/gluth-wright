import { Navigate, Route, Routes } from 'react-router-dom'

export default function App(): JSX.Element {
  return (
    <Routes>
      <Route path="/" element={<div>Home</div>} />
      <Route path="/listings" element={<div>Listings</div>} />
      <Route path="/about-contact" element={<div>About &amp; Contact</div>} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}
