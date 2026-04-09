import { useState } from 'react'
import { salons } from '../data/salons.js'

export default function HomePage() {
  const [mode, setMode] = useState('clients')

  return (
    <>
      {/* NAV */}
      <header className="site-header">
        <div className="container nav-row">
          <span className="brand">Nephrite Group</span>
          <nav>
            <a href="#hero">Home</a>
            <a href="#rentals">Rochester Rentals</a>
            <a href="#about">About</a>
          </nav>
        </div>
      </header>

      <main>
        {/* HERO */}
        <section id="hero" className="hero-section container">
          <div className="hero-box">
            <h1>Connecting Clients To Beauty &amp; Beauty To Spaces</h1>
            <p>
              Nephrite Group helps clients discover trusted salon professionals
              and gives independent beauty professionals a place to grow their business.
            </p>
          </div>
        </section>

        {/* TOGGLE */}
        <section className="toggle-section container">
          <div className="toggle-pills">
            <button
              className={`pill ${mode === 'clients' ? 'pill--active' : ''}`}
              onClick={() => setMode('clients')}
            >
              Clients
            </button>
            <button
              className={`pill ${mode === 'professionals' ? 'pill--active' : ''}`}
              onClick={() => setMode('professionals')}
            >
              Beauty Professionals
            </button>
          </div>
        </section>

        {/* SALON CARDS */}
        <section className="salons-grid container">
          {salons.map((salon) => (
            <div key={salon.id} className="salon-card">
              <img
                src={salon.heroImage}
                alt={salon.name}
                className="salon-card-hero"
              />
              <div className="salon-card-body">
                <h2 className="salon-name">{salon.name}</h2>
                <p className="salon-city">{salon.city}, {salon.state}</p>
                <p className="salon-address-text">{salon.address}</p>

                {mode === 'clients' ? (
                  <div className="clients-section">
                    <h3 className="section-label">Book With Our Stylists</h3>
                    {salon.workers.map((worker) => (
                      <div key={worker.name} className="worker-block">
                        <p className="worker-name">{worker.name}</p>
                        <p className="worker-specialty">{worker.specialty}</p>
                        <div className="booking-buttons">
                          {worker.bookingOptions.map((opt) => (
                            <a
                              key={opt.label}
                              href={
                                opt.type === 'text'
                                  ? `sms:${opt.value}`
                                  : opt.type === 'email'
                                  ? `mailto:${opt.value}`
                                  : opt.value
                              }
                              target={opt.type === 'website' || opt.type === 'booking' ? '_blank' : undefined}
                              rel="noreferrer"
                              className="booking-btn"
                            >
                              {opt.label}
                            </a>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="professionals-section">
                    <div className="rental-pricing">
                      {salon.rentalOpportunities.map((opp) => (
                        <div key={opp.title} className="pricing-block">
                          <p className="pricing-label">{opp.title}</p>
                          <p className="pricing-price">{opp.price}</p>
                          <p className="pricing-avail">{opp.availability}</p>
                        </div>
                      ))}
                    </div>
                    <div className="rental-actions">
                      <a href={salon.id === 'wosas-loc-salon' ? 'https://wosasofnewyork.as.me/' : 'https://salonreed.as.me/'} target="_blank" rel="noreferrer" className="btn-dark">Book Now</a>
                      <a href={salon.id === 'wosas-loc-salon' ? 'https://wosasofnewyork.as.me/' : 'https://salonreed.as.me/'} target="_blank" rel="noreferrer" className="btn-light">Schedule a Tour</a>
                    </div>

                    <div className="gallery-preview">
                      <p className="gallery-label">Inside the salon</p>
                      <a href={salon.id === 'wosas-loc-salon' ? 'https://wosasofnewyork.as.me/' : 'https://salonreed.as.me/'} target="_blank" rel="noreferrer" className="claim-spot-btn">Claim Your Spot</a>
                      <div className="gallery-thumbs">
                        {salon.gallery.map((img, i) => (
                          <img key={i} src={img} alt={`${salon.name} gallery ${i + 1}`} className="gallery-thumb" />
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </section>

        {/* BEAUTY PROFESSIONALS INFO — only visible in professionals mode */}
        {mode === 'professionals' && (
          <section id="rentals" className="why-rent-section container">
            <div className="why-rent-grid">
              <div className="why-rent-col">
                <h2>Make More, Keep More</h2>
                <p>
                  Your space only needs a handful of appointments each week to cover rent.
                  After that, you keep the upside of the clients you bring in and the brand you build.
                </p>
                <p>
                  This is designed for professionals who want a polished setup without taking
                  on the overhead of a larger commercial space.
                </p>
              </div>
              <div className="why-rent-col">
                <h3>Why Rent Here</h3>
                <ul>
                  <li>Prime Rochester location</li>
                  <li>Professional salon setting</li>
                  <li>Flexible weekly rental structure</li>
                  <li>Clean, welcoming environment for beauty professionals</li>
                  <li>Built for independent providers growing their client base</li>
                </ul>
              </div>
              <div className="why-rent-col">
                <h3>Who This Is Best For</h3>
                <ul>
                  <li>Hair stylists building or growing a book of business</li>
                  <li>Barbers, cosmetologists, and beauty professionals ready for more independence</li>
                  <li>Providers who want a cleaner, more professional client experience</li>
                  <li>Professionals looking for flexibility without heavy long-term overhead</li>
                </ul>
              </div>
            </div>

            <div className="stepping-into-banner">
              <h2>What You're Stepping Into</h2>
              <p>Straightforward weekly pricing for chair and suite rentals</p>
              <p>A polished salon setting in a strong Rochester location</p>
              <p>A good fit for independent beauty professionals ready to grow</p>
            </div>
          </section>
        )}
      </main>

      {/* FOOTER */}
      <footer id="about" className="site-footer">
        <div className="container">
          <p>© {new Date().getFullYear()} Nephrite Group · Rochester, NY</p>
        </div>
      </footer>
    </>
  )
}
