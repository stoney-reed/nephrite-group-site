import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header className="site-header">
      <div className="container nav-row">
        <Link to="/" className="brand">Nephrite Group</Link>

        <nav>
          <Link to="/">Home</Link>
          <Link to="/rochester-salon-rentals">Rochester Rentals</Link>
          <Link to="/about">About</Link>
        </nav>
      </div>
    </header>
  )
}