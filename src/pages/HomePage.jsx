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
            <h1>Connecting Beauty To Spaces & Clients To Beauty</h1>

            <p>
              Nephrite Group helps clients discover trusted salon professionals
              and gives independent beauty professionals a place to grow their business.
            </p>
          </div>
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