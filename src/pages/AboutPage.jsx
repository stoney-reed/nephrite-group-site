import Header from '../components/Header'
import Footer from '../components/Footer'

export default function AboutPage() {
  return (
    <>
      <Header />

      <main className="container page-section">
        <h1>About Nephrite Group</h1>

        <p>
          Nephrite Group is building a growing collection of salon businesses and
          rental opportunities, starting with Narcissus Hair Design in Rochester.
        </p>

        <p>
          Our goal is simple: create strong salon spaces where beauty professionals
          can build their business and where clients can easily connect with trusted providers.
        </p>

        <p>
          As we grow, this platform will showcase more salon locations, more rental
          opportunities, and more ways for clients to book services across the group.
        </p>
      </main>

      <Footer />
    </>
  )
}