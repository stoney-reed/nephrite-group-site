import { Link } from 'react-router-dom'

export default function SalonCard({ salon }) {
  const mapLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    salon.address
  )}`

  return (
    <div className="card salon-card">
      <img
        src={salon.cardImage}
        alt={salon.name}
        className="salon-card-image"
      />

      <div className="salon-card-body">
        <h3>{salon.name}</h3>

        <p className="muted-text">
          {salon.city}, {salon.state}
        </p>

        {salon.address && (
          <a
            href={mapLink}
            target="_blank"
            rel="noreferrer"
            className="salon-address"
          >
            {salon.address}
          </a>
        )}

        <div className="salon-pricing">
          <p><strong>Chair:</strong> {salon.chairPrice}</p>
          <p><strong>Suite:</strong> {salon.suitePrice}</p>
        </div>

        <div className="salon-availability">
          <p><strong>Available Chairs:</strong> {salon.chairsAvailable}</p>
          <p><strong>Available Suites:</strong> {salon.suitesAvailable}</p>
        </div>

        <Link className="button" to={`/salon/${salon.id}`}>
          View Salon
        </Link>
      </div>
    </div>
  )
}