import { Link, useParams } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import RentalForm from '../components/RentalForm'
import { salons } from '../data/salons.js'

export default function SalonPage() {
  const { salonId } = useParams()
  const salon = salons.find((item) => item.id === salonId)

  if (!salon) {
    return <div>Salon not found.</div>
  }

  return (
    <>
      <Header />

      <main className="container page-section">
        <p>
          <Link to="/">← Back to all salons</Link>
        </p>

        <section className="salon-hero">
          <img
            src={salon.heroImage}
            alt={salon.name}
            className="salon-hero-image"
          />

          <div className="salon-hero-content">
            <h1>{salon.name}</h1>

            <p className="salon-hero-text">
              {salon.about}
            </p>

            <div className="hero-actions">
              <a href="#book-services" className="button">
                Book Services
              </a>

              <a href="#rental-form" className="button secondary-button">
                Apply for Rental
              </a>
            </div>
          </div>
        </section>

        <section className="rent-highlights-section card">
          <h2>Why Rent Here</h2>

          <div className="rent-highlights-grid">
            {salon.renterHighlights.map((item, index) => (
              <div key={index} className="rent-highlight-item">
                <p>{item}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="conversion-section">
          <div className="conversion-grid">
            <div className="card">
              <h2>Rental Opportunities</h2>

              <div className="conversion-list">
                {salon.rentalOpportunities.map((item, index) => (
                  <div key={index} className="conversion-item">
                    <h3>{item.title}</h3>
                    <p><strong>{item.price}</strong></p>
                    <p>{item.availability}</p>
                    <p>{item.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="card">
              <h2>What’s Included</h2>

              <ul className="feature-list">
                {salon.includedFeatures.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="card">
              <h2>Who It’s Best For</h2>

              <ul className="feature-list">
                {salon.idealFor.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <div className="grid two-col">
          <section id="book-services" className="card">
            <h2>Book With Our Stylists</h2>

            {salon.workers.map((worker) => (
              <div key={worker.name} className="worker-card">
                <h3 style={{ marginBottom: '0.25rem' }}>{worker.name}</h3>

                {worker.specialty && (
                  <p className="worker-specialty">
                    {worker.specialty}
                  </p>
                )}

                <div className="worker-actions">
                  {worker.bookingOptions.map((option, index) => {
                    let href = '#'

                    if (option.type === 'text') {
                      href = `sms:${option.value}`
                    }

                    if (option.type === 'email') {
                      href = `mailto:${option.value}`
                    }

                    if (option.type === 'website' || option.type === 'booking') {
                      href = option.value
                    }

                    return (
                      <a
                        key={index}
                        href={href}
                        className="button"
                        target={
                          option.type === 'website' || option.type === 'booking'
                            ? '_blank'
                            : undefined
                        }
                        rel={
                          option.type === 'website' || option.type === 'booking'
                            ? 'noreferrer'
                            : undefined
                        }
                      >
                        {option.label}
                      </a>
                    )
                  })}
                </div>
              </div>
            ))}
          </section>

          <section className="card">
            <h2>About Us</h2>
            <p>{salon.about}</p>
            <p>Chair rental: {salon.chairPrice}</p>
            <p>Suite rental: {salon.suitePrice}</p>

            <div style={{ marginTop: '1rem' }}>
              <p><strong>Available Chairs:</strong> {salon.chairsAvailable}</p>
              <p><strong>Available Suites:</strong> {salon.suitesAvailable}</p>
            </div>
          </section>
        </div>

        <section className="gallery-section">
          <h2>Inside the salon</h2>

          <div className="gallery-grid">
            {salon.gallery.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`${salon.name} ${index + 1}`}
                className="gallery-image"
              />
            ))}
          </div>
        </section>

        <div id="rental-form" className="page-section">
          <RentalForm salon={salon} />
        </div>
      </main>

      <Footer />
    </>
  )
}