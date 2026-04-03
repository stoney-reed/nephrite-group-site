import narcissusHero from '../assets/narcissus-hero.jpg'
import narcissusInterior from '../assets/narcissus-interior.jpg'
import narcissusChair from '../assets/narcissus-chair.jpg'

import wosasHero from '../assets/wosas-hero.jpg'
import wosasInterior from '../assets/wosas-interior.jpg'
import wosasChair from '../assets/wosas-chair.jpg'

export const salons = [
  {
    id: 'narcissus-hair-design',
    name: 'Narcissus Hair Design',
    city: 'Rochester',
    state: 'NY',
    address: '155 Park Ave, Rochester, NY 14607',
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

  {
    id: 'wosas-loc-salon',
    name: "Wosa's Loc Salon",
    city: 'Rochester',
    state: 'NY',
    address: 'Village Gate Square, 274 N Goodman St B134, Rochester, NY 14607',

    chairsAvailable: 4,
    suitesAvailable: 2,

    // 👇 updated pricing
    chairPrice: '$150/week',
    suitePrice: '$200-$250/week',

    website: 'https://www.wosabraid.com',

    heroImage: wosasHero,
    cardImage: wosasInterior,
    gallery: [wosasHero, wosasInterior, wosasChair],

    renterHighlights: [
      'Located in Village Gate Square with strong foot traffic',
      'Established Rochester salon presence since 1992',
      'A strong fit for natural hair, locs, braiding, and beauty professionals',
    ],

    rentalOpportunities: [
      {
        title: 'Chair Rental',
        price: '$150/week',
        availability: '4 chairs currently available',
        description:
          'Great for stylists, braiders, and beauty professionals looking to grow in a high-traffic, established salon environment.',
      },
      {
        title: 'Medium Suite',
        price: '$200/week',
        availability: '1 medium suite available',
        description:
          'A balanced option offering more privacy while still staying connected to the main salon environment.',
      },
      {
        title: 'Large Suite',
        price: '$250/week',
        availability: '1 large suite available',
        description:
          'Ideal for professionals who want a larger, more independent setup with room to build their own brand.',
      },
    ],

    includedFeatures: [
      'Village Gate Square location with consistent traffic',
      'Established salon brand with long-standing presence',
      'Professional and culturally aligned environment',
      'Flexible weekly rental structure',
      'Strong opportunity to build and retain clients',
    ],

    idealFor: [
      'Locticians, braiders, and natural hair specialists',
      'Stylists looking to plug into an established environment',
      'Independent beauty professionals ready to scale',
      'Providers who benefit from walk-in and location-based traffic',
    ],

    workers: [
      {
        name: "Wosa's Team",
        specialty: 'Natural hair, locs, and braiding services',
        bookingOptions: [
          {
            type: 'booking',
            label: 'Book Services',
            value: 'https://wosasofnewyork.as.me/schedule/7ed05a26',
          },
          {
            type: 'website',
            label: 'Visit Website',
            value: 'https://www.wosabraid.com',
          },
          {
            type: 'text',
            label: 'Text Salon',
            value: '15854908305',
          },
        ],
      },
    ],

    about:
      "Wosa's Loc Salon is a Nephrite Group-managed salon located in Village Gate Square. With decades of presence in Rochester, it offers a strong environment for natural hair professionals, loc specialists, and beauty providers looking to grow in a high-traffic, culturally aligned space.",
  },
]