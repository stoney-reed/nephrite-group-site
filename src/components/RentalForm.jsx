import { useState } from 'react'

const options = [
  'Shared Suite',
  'Single Suite',
  'Space with windows',
  'Chair Rental',
  'Room Rental',
]

export default function RentalForm({ salon }) {
  const [selected, setSelected] = useState([])

  function toggleOption(value) {
    setSelected((current) =>
      current.includes(value)
        ? current.filter((item) => item !== value)
        : [...current, value]
    )
  }

  const fullyBooked = salon.chairsAvailable === 0 && salon.suitesAvailable === 0

  return (
    <form
      className="card rental-form"
      action="https://formspree.io/f/xzdkapjv"
      method="POST"
    >
      <h3>{fullyBooked ? 'Join Waitlist' : 'Apply for Salon Chair Rental'}</h3>

      <input type="hidden" name="salonName" value={salon.name} />
      <input
        type="hidden"
        name="availabilityType"
        value={fullyBooked ? 'Waitlist' : 'Openings'}
      />

      <label htmlFor="firstName">First Name</label>
      <input id="firstName" type="text" name="firstName" required />

      <label htmlFor="lastName">Last Name</label>
      <input id="lastName" type="text" name="lastName" required />

      <label htmlFor="email">Email</label>
      <input id="email" type="email" name="email" required />

      <label htmlFor="phone">Phone</label>
      <input id="phone" type="tel" name="phone" required />

      <label htmlFor="moveInDate">Preferred Move-In Date</label>
      <input id="moveInDate" type="date" name="moveInDate" />

      <fieldset>
        <legend>License Type</legend>

        <label className="checkbox-row">
            <input type="radio" name="licenseType" value="Cosmetology" />
            <span>Cosmetology</span>
        </label>

        <label className="checkbox-row">
            <input type="radio" name="licenseType" value="Esthetics" required />
            <span>Esthetics</span>
        </label>

        <label className="checkbox-row">
            <input type="radio" name="licenseType" value="Natural Hair Styling" />
            <span>Natural Hair Styling</span>
        </label>

        <label className="checkbox-row">
            <input type="radio" name="licenseType" value="Waxing" />
            <span>Waxing</span>
        </label>

        <label className="checkbox-row">
            <input type="radio" name="licenseType" value="Barber" />
            <span>Barber</span>
        </label>
        </fieldset>

      <label htmlFor="yearsExperience">Years of Experience</label>
      <input
        id="yearsExperience"
        type="number"
        name="yearsExperience"
        min="0"
        placeholder="e.g. 5"
      />

      <label htmlFor="serviceFocus">Current Service Focus</label>
      <input
        id="serviceFocus"
        type="text"
        name="serviceFocus"
        placeholder="e.g. color, braiding, locs, barbering, extensions"
      />

      <label htmlFor="portfolio">Portfolio or Instagram</label>
      <input
        id="portfolio"
        type="text"
        name="portfolio"
        placeholder="https://instagram.com/yourhandle"
      />

      <label htmlFor="preferredLocation">Preferred Location</label>
      <input
        id="preferredLocation"
        type="text"
        name="preferredLocation"
        placeholder="e.g. Narcissus Hair Design or Rochester area"
      />

      <fieldset>
        <legend>What are you looking for?</legend>

        {options.map((option) => (
          <label key={option} className="checkbox-row">
            <input
              type="checkbox"
              name="lookingFor"
              value={option}
              checked={selected.includes(option)}
              onChange={() => toggleOption(option)}
            />
            <span>{option}</span>
          </label>
        ))}
      </fieldset>

      <label htmlFor="message">Anything else you'd like us to know?</label>
      <textarea
        id="message"
        name="message"
        rows="4"
        placeholder="Move-in timing, preferred setup, experience, questions, etc."
      />

      <button type="submit" className="button">
        {fullyBooked ? 'Join Waitlist' : 'Submit Application'}
      </button>
    </form>
  )
}