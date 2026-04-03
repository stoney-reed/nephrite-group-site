import { Link, useParams } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import RentalForm from '../components/RentalForm'
import { salons } from '../data/salons.js'

export default function SalonPage() {
  const { salonId } = useParams()
  const salon = salons.find((item) => item.id === salonId)
  const mapLink = salon
    ? `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(salon.address)}`
    : '#'
  if (!salon) {
    return <div>Salon not found.</div>
  }

  return (
    <>
      <Header />

      <main className="container page-section">
        <p className="back-link">
          <Link to="/">← Back to all salons</Link>
        </p>

        <section className="salon-hero">
          <img
            src={salon.heroImage}
            alt={salon.name}
            className="salon-hero-image"
          />

          <div className="salon-hero-content">
            <div className="eyebrow">Salon Chair & Suite Rentals</div>

            <h1>{salon.name}</h1>

            {salon.address && (
                <a
                    href={mapLink}
                    target="_blank"
                    rel="noreferrer"
                    className="salon-page-address"
                >
                    {salon.address}
                </a>
            )}

            <p className="salon-hero-text">
              Grow your business in a professional salon environment in Rochester.
              Limited availability for independent beauty professionals ready for a
              clean, polished space to serve clients and build their brand.
            </p>

            {salon.id === 'wosas-loc-salon' && (
              <p className="salon-hero-text">
                Located in Village Gate Square, this space benefits from strong foot traffic
                and an established local presence, making it a strong fit for professionals
                looking to grow quickly.
              </p>
            )}

            <div className="hero-actions">
              <a href="#apply" className="button">
                Apply Now
              </a>

              <a href="#tour" className="button secondary-button">
                Schedule a Tour
              </a>
            </div>
          </div>
        </section>

        <section id="availability" className="availability-banner">
          <div className="availability-banner-top">
            <div>
              <div className="eyebrow">Now Available</div>
              <h2>Current Openings at {salon.name}</h2>
            </div>

            <div className="urgency-badge">Limited Availability</div>
          </div>

          <div className="availability-grid">
            <div className="availability-card">
              <h3>Chair Rental</h3>
              <p className="price">{salon.chairPrice}</p>
              <p>{salon.chairsAvailable} chair currently available</p>
            </div>

            <div className="availability-card">
              <h3>Suite Rental</h3>
              <p className="price">{salon.suitePrice}</p>
              <p>{salon.suitesAvailable} suite currently available</p>
            </div>
          </div>

          <p className="urgency-text">
            Spaces fill quickly. Apply now to be considered before current openings are gone.
          </p>
        </section>

        <section id="tour" className="tour-section card">
          <h2>Schedule a Tour</h2>

          <p>
            Want to see the space in person before committing? Schedule a quick walkthrough
            and get a feel for the salon, layout, and environment.
          </p>

          <p className="tour-note">
            Tours are quick and flexible — we’ll coordinate a time that works for you.
          </p>

          <a href="sms:15855038797" className="button">
            Text to Schedule a Tour
          </a>
        </section>

        <div id="apply" className="page-section">
          <RentalForm salon={salon} />
        </div>

        <section className="conversion-section">
          <div className="conversion-grid">
            <div className="card">
              <h2>Why Rent Here</h2>
              <ul className="feature-list">
                <li>Prime Rochester location</li>
                <li>Professional salon setting</li>
                <li>Flexible weekly rental structure</li>
                <li>Clean, welcoming environment for beauty professionals</li>
                <li>Built for independent providers growing their client base</li>
              </ul>
            </div>

            <div className="card">
              <h2>Make More, Keep More</h2>
              <p>
                Your space only needs a handful of appointments each week to cover rent.
                After that, you keep the upside of the clients you bring in and the brand you build.
              </p>
              <p>
                This is designed for professionals who want a polished setup without taking on the
                overhead of a larger commercial space.
              </p>
            </div>

            <div className="card">
              <h2>Who This Is Best For</h2>
              <ul className="feature-list">
                <li>Hair stylists building or growing a book of business</li>
                <li>Barbers, cosmetologists, and beauty professionals ready for more independence</li>
                <li>Providers who want a cleaner, more professional client experience</li>
                <li>Professionals looking for flexibility without heavy long-term overhead</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="rent-highlights-section card">
          <h2>What You’re Stepping Into</h2>

          <div className="rent-highlights-grid">
            {salon.renterHighlights.map((item, index) => (
              <div key={index} className="rent-highlight-item">
                <p>{item}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="grid two-col">
          <section id="book-services" className="card">
            <h2>Book With Our Stylists</h2>

            {salon.workers.map((worker) => (
              <div key={worker.name} className="worker-card">
                <h3>{worker.name}</h3>

                {worker.specialty && (
                  <p className="worker-specialty">{worker.specialty}</p>
                )}

                <div className="worker-actions">
                  {worker.bookingOptions.map((option, index) => {
                    let href = '#'

                    if (option.type === 'text') href = `sms:${option.value}`
                    if (option.type === 'email') href = `mailto:${option.value}`
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
            <h2>About {salon.name}</h2>
            <p>{salon.about}</p>

            <div className="about-stats">
              <p>
                <strong>Address:</strong>{' '}
                <a
                    href={mapLink}
                    target="_blank"
                    rel="noreferrer"
                    className="salon-page-address inline-address"
                >
                    {salon.address}
                </a>
              </p>
              <p><strong>Chair Rental:</strong> {salon.chairPrice}</p>
              <p><strong>Suite Rental:</strong> {salon.suitePrice}</p>
              <p><strong>Available Chairs:</strong> {salon.chairsAvailable}</p>
              <p><strong>Available Suites:</strong> {salon.suitesAvailable}</p>
            </div>

            <a href="#apply" className="button">
              Apply for a Space
            </a>
          </section>
        </div>

        <section className="gallery-section">
          <div className="section-heading-row">
            <div>
              <div className="eyebrow">Gallery</div>
              <h2>Inside the salon</h2>
            </div>

            <a href="#apply" className="button secondary-button">
              Claim Your Spot
            </a>
          </div>

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
      </main>

      <Footer />
    </>
  )
}