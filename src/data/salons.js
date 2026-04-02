import narcissusHero from '../assets/narcissus-hero.jpg'
import narcissusInterior from '../assets/narcissus-interior.jpg'
import narcissusChair from '../assets/narcissus-chair.jpg'

export const salons = [
  {
    id: 'narcissus-hair-design',
    name: 'Narcissus Hair Design',
    city: 'Rochester',
    state: 'NY',
    chairsAvailable: 1,
    suitesAvailable: 1,
    chairPrice: '$175/week',
    suitePrice: '$200-$225/week',

    heroImage: narcissusHero,
    cardImage: narcissusInterior,
    gallery: [narcissusHero, narcissusInterior, narcissusChair],

    renterHighlights: [
      'Straightforward weekly pricing for chair and suite rentals',
      'A polished salon setting in a strong Rochester location',
      'A good fit for independent beauty professionals ready to grow',
    ],

    rentalOpportunities: [
      {
        title: 'Chair Rental',
        price: '$175/week',
        availability: '1 chair currently available',
        description:
          'A simple, affordable setup for professionals who want a professional space without taking on the cost of a full private suite.',
      },
      {
        title: 'Suite Rental',
        price: '$200-$225/week',
        availability: '1 suite currently available',
        description:
          'A more private setup for beauty professionals who want greater independence and a space that feels more like their own.',
      },
    ],

    includedFeatures: [
      'Professional salon atmosphere',
      'Flexible weekly rental structure',
      'Strong Rochester location',
      'A clean and welcoming environment',
      'Room to grow your client base and your brand',
    ],

    idealFor: [
      'Stylists growing an existing book of business',
      'Independent beauty professionals ready for a more polished setup',
      'Cosmetologists, barbers, hair stylists, and related service providers',
      'Professionals looking for flexibility without heavy commercial overhead',
    ],

    workers: [
      {
        name: 'Kym',
        specialty: 'Color and styles',
        bookingOptions: [
          {
            type: 'text',
            label: 'Text Kym',
            value: '15855551234',
          },
          {
            type: 'website',
            label: 'Visit Website',
            value: 'https://example.com/kym',
          },
        ],
      },
      {
        name: 'Mark',
        specialty: 'Color, highlights, and modern cuts',
        bookingOptions: [
          {
            type: 'email',
            label: 'Email Mark',
            value: 'mark@example.com',
          },
        ],
      },
      {
        name: 'Jess',
        specialty: 'Waxes, deep tissue messages, and cleanses',
        bookingOptions: [
          {
            type: 'booking',
            label: 'Book Jess',
            value: 'https://square.site/book/jess',
          },
          {
            type: 'text',
            label: 'Text Jess',
            value: '15855559876',
          },
        ],
      },
    ],

    about:
      'Narcissus Hair Design is a Nephrite Group salon offering beauty services along with chair and suite rental opportunities for independent professionals.',
  },
]