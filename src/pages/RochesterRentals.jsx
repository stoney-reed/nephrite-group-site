import Header from '../components/Header'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'
import { salons } from '../data/salons.js'

export default function RochesterRentals() {
  return (
    <>
      <Header />

      <main className="container page-section">
        <div className="seo-hero">
          <div className="eyebrow">Rochester Salon Rentals</div>
          <h1>Salon Chair & Suite Rentals in Rochester, NY</h1>

          <p className="seo-lead">
            Looking for salon chair rental or salon suite rental in Rochester?
            Nephrite Group offers flexible weekly rental options for beauty professionals
            across multiple salon locations.
          </p>

          <div className="hero-actions">
            <a href="#available-locations" className="button">
              View Available Locations
            </a>
          </div>
        </div>

        <section id="available-locations" className="page-section">
          <h2>Available Salon Locations</h2>

          <div className="grid">
            {salons.map((salon) => (
              <div key={salon.id} className="card">
                <h3>{salon.name}</h3>

                {salon.address && <p className="salon-address">{salon.address}</p>}

                <p>
                  <strong>Chair:</strong> {salon.chairPrice}
                  <br />
                  <strong>Suite:</strong> {salon.suitePrice}
                </p>

                <p>
                  <strong>Available Chairs:</strong> {salon.chairsAvailable}
                  <br />
                  <strong>Available Suites:</strong> {salon.suitesAvailable}
                </p>

                <Link to={`/salon/${salon.id}`} className="button">
                  View Availability
                </Link>
              </div>
            ))}
          </div>
        </section>

        <section className="page-section">
          <h2>Why Rent a Salon Space in Rochester?</h2>

          <ul className="feature-list">
            <li>Lower overhead compared to opening your own full salon</li>
            <li>Flexible weekly rental options</li>
            <li>Ability to grow your own brand and client base</li>
            <li>Access to established salon environments and good locations</li>
          </ul>
        </section>

        <section className="page-section">
          <h2>Who This Is For</h2>

          <ul className="feature-list">
            <li>Hair stylists</li>
            <li>Barbers</li>
            <li>Braiders and locticians</li>
            <li>Beauty professionals building clientele</li>
          </ul>
        </section>

        <section className="page-section card">
          <h2>Ready to Find Your Next Space?</h2>

          <p>
            Explore current salon opportunities in Rochester and apply for the chair
            or suite setup that fits your business best.
          </p>

          <div className="hero-actions">
            {salons.map((salon) => (
              <Link key={salon.id} to={`/salon/${salon.id}`} className="button">
                Explore {salon.name}
              </Link>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}