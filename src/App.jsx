import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import SalonPage from './pages/SalonPage'
import AboutPage from './pages/AboutPage'
import RochesterRentals from './pages/RochesterRentals'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/salon/:salonId" element={<SalonPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/rochester-salon-rentals" element={<RochesterRentals />} />
    </Routes>
  )
}