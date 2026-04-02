import Header from '../components/Header'
import Footer from '../components/Footer'
import SalonCard from '../components/SalonCard'
import { salons } from '../data/salons.js'

export default function HomePage() {
  return (
    <>
      <Header />

      <main>
        <section className="hero container">
          <div className="hero-copy">
            <h1>Salon spaces and beauty businesses built to grow.</h1>

            <p>
              Nephrite Group helps clients discover trusted salon professionals
              and gives independent beauty professionals a place to grow their business.
            </p>

            <div style={{ marginTop: '1.5rem' }}>
              <a href="#locations" className="button">
                View Locations
              </a>
            </div>
          </div>

          {salons[0]?.heroImage && (
            <img
              src={salons[0].heroImage}
              alt={salons[0].name}
              className="home-hero-image"
            />
          )}
        </section>

        <section id="locations" className="container grid">
          {salons.map((salon) => (
            <SalonCard key={salon.id} salon={salon} />
          ))}
        </section>
      </main>

      <Footer />
    </>
  )
}