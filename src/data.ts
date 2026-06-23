import { Product, Testimonial, ShowcaseItem, GalleryItem } from './types';

// Let's import the actual file paths mapped by the generator.
// This ensures perfect visual precision with zero broken image placeholders.
export const HERO_IMAGE = '/src/assets/images/hero_living_room_1782199141409.jpg';
export const BEDROOM_IMAGE = '/src/assets/images/bedroom_furniture_1782199157696.jpg';
export const DINING_IMAGE = '/src/assets/images/dining_furniture_1782199174611.jpg';
export const OFFICE_IMAGE = '/src/assets/images/office_furniture_1782199188165.jpg';
export const OUTDOOR_IMAGE = '/src/assets/images/outdoor_furniture_1782199205054.jpg';

export const PRODUCTS_DATA: Product[] = [
  {
    id: 'l1',
    name: 'Sovereign Belgrave Sectional',
    category: 'living-room',
    description: 'A masterpiece of comfort, upholstered in premium cream bouclé textile, matched with a sub-frame of solid certified European walnut.',
    price: 'Inquire for Price',
    imageUrl: HERO_IMAGE,
    details: [
      'Engineered multi-density foam core for lifelong lumbar comfort.',
      'Double-stitched seams and stain-resistant fabric protective coating.',
      'Includes three matching silk-blend throw pillows.',
      'Custom modular elements configured easily for any modern layout.'
    ],
    specs: [
      { label: 'Dimensions', value: '320cm W x 180cm D x 72cm H' },
      { label: 'Material', value: 'Textured Bouclé, Solid Walnut Subframe' },
      { label: 'Origin', value: 'Bespoke Handcrafted' },
      { label: 'Lead Time', value: '4 - 6 Weeks' }
    ]
  },
  {
    id: 'l2',
    name: 'Bespoke Walnut Credenza',
    category: 'living-room',
    description: 'Minimalist statement credenza featuring continuous flowing wood grain and precision push-to-open flush cabinets.',
    price: 'Inquire for Price',
    imageUrl: HERO_IMAGE,
    details: [
      'Signature book-matched solid walnut facade pattern panels.',
      'Adjustable soft-close inner wooden shelves with pre-drilled cable channels.',
      'Architectural brushed gold feet adjustments for perfect levelling.',
      'Treated with premium hard-wax oil for a natural, tactile wood feel.'
    ],
    specs: [
      { label: 'Dimensions', value: '220cm W x 48cm D x 65cm H' },
      { label: 'Material', value: 'Solid North American Walnut, Brushed Brass' },
      { label: 'Origin', value: 'Artisan Workshop' },
      { label: 'Lead Time', value: '3 - 5 Weeks' }
    ]
  },
  {
    id: 'b1',
    name: 'Monolith Solid Walnut Bed',
    category: 'bedroom',
    description: 'A dramatic, floating low-profile bedframe with a massive singular piece headboard crafted of solid Zimbabwean teak/walnut timber.',
    price: 'Inquire for Price',
    imageUrl: BEDROOM_IMAGE,
    details: [
      'Floating pedestal platform base creates an airy bedroom atmosphere.',
      'Hidden integrated soft-glow ambient LED strip with headboard touch switch.',
      'Integrated walnut cantilevered side shelves acting as minimal nightstands.',
      'Slatted plywood ventilation mattress platform ensures ultimate support.'
    ],
    specs: [
      { label: 'Dimensions', value: '260cm W x 225cm D x 110cm H' },
      { label: 'Material', value: 'Selected Premium Solid Walnut, Led Accents' },
      { label: 'Origin', value: 'Master Joiner Studio' },
      { label: 'Lead Time', value: '5 - 7 Weeks' }
    ]
  },
  {
    id: 'b2',
    name: 'Aurelia Gold Framed Dresser',
    category: 'bedroom',
    description: 'Six wide structural drawers finished in soft-textured cream leatherette casing, accented with real gold-plated handles and trim.',
    price: 'Inquire for Price',
    imageUrl: BEDROOM_IMAGE,
    details: [
      'Under-mount structural heavy-duty Blum self-closing drawer runners.',
      'Drawers fully lined in authentic rich velvet lining protecting sensitive items.',
      'Thick, natural Calacatta gold marble countertop slab with soft bullnose edges.',
      'Anti-tip heavy wall anchoring system included.'
    ],
    specs: [
      { label: 'Dimensions', value: '160cm W x 50cm D x 85cm H' },
      { label: 'Material', value: 'Suede, Calacatta Marble, Brushed Brass' },
      { label: 'Origin', value: 'Bespoke Handcrafted' },
      { label: 'Lead Time', value: '4 - 6 Weeks' }
    ]
  },
  {
    id: 'd1',
    name: 'Atelier Ten-Seater Dining Table',
    category: 'dining-room',
    description: 'An architectural marvel dining table featuring a sculptural monolithic pedestal base carved from matching grain timber block.',
    price: 'Inquire for Price',
    imageUrl: DINING_IMAGE,
    details: [
      'Expansive table top with exquisite bevelled edge detailing.',
      'Eco-friendly protective water-resistant topcoat shield against spills.',
      'Comfortably seats up to 10-12 guests with extensive clearance.',
      'Base weighted securely with heavy steel plates for maximum stability.'
    ],
    specs: [
      { label: 'Dimensions', value: '300cm W x 110cm D x 76cm H' },
      { label: 'Material', value: 'Solid Walnut Timber Block' },
      { label: 'Origin', value: 'Bespoke Handcrafted' },
      { label: 'Lead Time', value: '6 - 8 Weeks' }
    ]
  },
  {
    id: 'd2',
    name: 'Sculpted Charcoal Dining Chairs',
    category: 'dining-room',
    description: 'An ergonomic dining chair with elegant wrap-around backrest upholstered in high-durability dark charcoal weave fabric.',
    price: 'Inquire for Price',
    imageUrl: DINING_IMAGE,
    details: [
      'Mortise and tenon joint construction ensuring multi-decade integrity.',
      'Lightly textured dense seat filling avoids sagging or deflation over time.',
      'Elegant tapered legs matching standard Topstar walnut dining tones.',
      'Felt-padded heavy nylon glides protect delicate hardwood floor panels.'
    ],
    specs: [
      { label: 'Dimensions', value: '58cm W x 56cm D x 78cm H' },
      { label: 'Material', value: 'Charcoal Linen Blend, Solid Walnut Frame' },
      { label: 'Origin', value: 'Artisan Workshop' },
      { label: 'Lead Time', value: '3 - 4 Weeks' }
    ]
  },
  {
    id: 'o1',
    name: 'Zephyr Executive Walnut Desk',
    category: 'office',
    description: 'Create an inspiring, authoritative workspace with this sleek floating organic-shaped desk featuring integrated cable docks.',
    price: 'Inquire for Price',
    imageUrl: OFFICE_IMAGE,
    details: [
      'Inlaid desktop writing surface made of hand-dyed bespoke dark brown leather.',
      'Two concealed shallow drawers lined in microfiber with soft mechanical lock.',
      'Integrated fast wireless charging hub hidden flush beneath wood veneers.',
      'Sleek under-desk channel keeping multi-computer arrays completely invisible.'
    ],
    specs: [
      { label: 'Dimensions', value: '180cm W x 85cm D x 75cm H' },
      { label: 'Material', value: 'Solid Walnut, Italian Leather Inlay' },
      { label: 'Origin', value: 'Master Joiner Studio' },
      { label: 'Lead Time', value: '4 - 6 Weeks' }
    ]
  },
  {
    id: 'o2',
    name: 'Ascent Ergonomic Office Chair',
    category: 'office',
    description: 'A beautiful executive task chair marrying luxury leather padding with full-scale orthopaedic ergonomics support.',
    price: 'Inquire for Price',
    imageUrl: OFFICE_IMAGE,
    details: [
      'Pneumatic seat height adjustments. Tilt lock with adjustable resistance.',
      'Premium top-grain soft aniline leather in rich dark espresso chocolate shade.',
      'Polished heavy cast-aluminum star base with heavy duty silent rolling casters.',
      'Perfect adjustable lumbar tension support knob.'
    ],
    specs: [
      { label: 'Dimensions', value: '68cm W x 68cm D x 115-125cm H' },
      { label: 'Material', value: 'Aniline Leather, Polished Aluminum' },
      { label: 'Origin', value: 'Premium Imports' },
      { label: 'Lead Time', value: '2 - 3 Weeks' }
    ]
  },
  {
    id: 'ou1',
    name: 'Solstice Premium Teak Lounger',
    category: 'outdoor',
    description: 'Weather-defying, exquisite sun lounger set designed with multiple reclination settings and premium quick-dry weather cushions.',
    price: 'Inquire for Price',
    imageUrl: OUTDOOR_IMAGE,
    details: [
      'Constructed with Grade-A teak timber containing high natural protective oils.',
      'Cushions upholstered in luxury Sunbrella mildew-resistant white weave fabric.',
      'Marine-grade solid brass hardware protects joints in coastal environments.',
      'Integrated pull-out table tray for keeping cold drinks at arm length.'
    ],
    specs: [
      { label: 'Dimensions', value: '200cm L x 75cm W x 35-90cm H' },
      { label: 'Material', value: 'Premium Grade-A Teak, Sunbrella Fabric' },
      { label: 'Origin', value: 'High-End Workshop' },
      { label: 'Lead Time', value: '3 - 5 Weeks' }
    ]
  },
  {
    id: 'ou2',
    name: 'Veranda Teak Dining Table',
    category: 'outdoor',
    description: 'An elegant slatted outdoor luxury table that naturally weathers over time to a gorgeous, classic silvery-gray patina.',
    price: 'Inquire for Price',
    imageUrl: OUTDOOR_IMAGE,
    details: [
      'Centre pre-drilled adapter ring supporting outdoor luxury shading umbrellas.',
      'Wide slatted top layout prevents rainwater retention or standing moisture.',
      'Extraordinary heavy construction resists strong high-wind weather shifts.',
      'Completely flat pack shipping design with foolproof robust joinery.'
    ],
    specs: [
      { label: 'Dimensions', value: '240cm W x 100cm D x 75cm H' },
      { label: 'Material', value: 'Grade-A Natural Solid Teak Wood' },
      { label: 'Origin', value: 'High-End Workshop' },
      { label: 'Lead Time', value: '4 - 5 Weeks' }
    ]
  }
];

export const SHOWCASE_DATA: ShowcaseItem[] = [
  {
    id: 'sc1',
    title: 'Luxury Living Room Collection',
    subtitle: 'THE ANCHOR OF THE HOME',
    description: 'Our flagship Living Room collections combine plush comfort with solid architectural structures. Handcrafted couches and custom coffee books tables are scaled perfectly to create inviting, gorgeous conversational layouts.',
    imageUrl: HERO_IMAGE,
    side: 'left',
    specs: [
      { label: 'Upholstery Options', value: 'Italian Bouclé, Pure Linen, Top-Grain Leather' },
      { label: 'Frame Warranty', value: 'Lifetime Structual Guarantee' },
      { label: 'Inner Support', value: 'Eight-way Hand-tied Coil Springs' }
    ]
  },
  {
    id: 'sc2',
    title: 'Elegant Bedroom Sets',
    subtitle: 'YOUR SANCTUARY OF SERENITY',
    description: 'Crafted as a complete system of tranquility, our bedroom suites bring matching warm wooden tones across solid beds, nightstands, and detailed drawers, transforming sleep spaces into beautiful minimalist high-end retreats.',
    imageUrl: BEDROOM_IMAGE,
    side: 'right',
    specs: [
      { label: 'Wood Selection', value: 'European Walnut, African Teak, White Oak' },
      { label: 'Hardware', value: 'Concealed Soft-Close Blum Systems' },
      { label: 'Customization', value: 'Headboard Heights & Fabric Padding Custom Tailored' }
    ]
  },
  {
    id: 'sc3',
    title: 'Modern Office Solutions',
    subtitle: 'INSPIRING CREATIVE PRODUCTIVITY',
    description: 'Ditch the sterile, industrial cubicle. Topstar executive office setups offer organic timber writing desks and premium leather workspace chairs that harmonize with residential warm design, making work an executive pleasure.',
    imageUrl: OFFICE_IMAGE,
    side: 'left',
    specs: [
      { label: 'Smart Integration', value: 'Concealed Fast Wireless Chargers' },
      { label: 'Wire Management', value: 'Bespoke Hidden Magnetic Channels' },
      { label: 'Leather Accents', value: 'Full-Grain Tuscan Cowhide Desk Liners' }
    ]
  },
  {
    id: 'sc4',
    title: 'Contemporary Dining Collections',
    subtitle: 'THE ART OF ENTERTAINNING',
    description: 'A table for celebrations, deep dinners, and generational stories. Crafted from dramatic planks of premium wood, our dining furniture pieces serve as the functional centerpiece of any architectural dining room.',
    imageUrl: DINING_IMAGE,
    side: 'right',
    specs: [
      { label: 'Table Seating', value: 'Configurable from 6 to 14 Seats' },
      { label: 'Stain Resistance', value: 'Nanoparticle Food-Grade Matte Coating' },
      { label: 'Seating Comfort', value: 'Form-Molded Cold-Cure Foam Core' }
    ]
  }
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: 't1',
    name: 'Eleanor Vance',
    role: 'Interior Designer, Vance & Co.',
    review: "As an interior designer, I demand total timber precision and premium finish from my fabricators. Topstar is my absolute go-to secret. Their custom walnut joinery is flawless, and my clients are always deeply satisfied with the comfort level.",
    rating: 5,
    avatarUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80'
  },
  {
    id: 't2',
    name: 'Marcus Katsande',
    role: 'Estate Manager, Avondale Residences',
    review: "We ordered complete dining sets and bedroom furniture suites for our premium guest home properties in Harare. The quality and heft of the timber is magnificent. Topstar handled the delivery with extreme care and professional setting up.",
    rating: 5,
    avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80'
  },
  {
    id: 't3',
    name: 'Seraphina Sterling',
    role: 'Premium Home Owner, Sandton',
    review: "After browsing custom sofas for months, we commissioned a bespoke Sovereign Sectional. It has completely transformed our living room space. It looks straight out of Architectural Digest, yet feels unbelievably plush and cozy for relaxing movie nights.",
    rating: 5,
    avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80'
  }
];

export const GALLERY_DATA: GalleryItem[] = [
  { id: 'g1', category: 'living-room', title: 'Luxury Velvet Sofa Detail', imageUrl: HERO_IMAGE },
  { id: 'g2', category: 'bedroom', title: 'Cantilever Bed Setup', imageUrl: BEDROOM_IMAGE },
  { id: 'g3', category: 'dining-room', title: 'Artisan Table Pedestal', imageUrl: DINING_IMAGE },
  { id: 'g4', category: 'office', title: 'Bespoke Boardroom Setup', imageUrl: OFFICE_IMAGE },
  { id: 'g5', category: 'outdoor', title: 'Teak Sun Lounger Close-up', imageUrl: OUTDOOR_IMAGE },
  { id: 'g6', category: 'living-room', title: 'Walnut Credenza Details', imageUrl: HERO_IMAGE },
  { id: 'g7', category: 'bedroom', title: 'Leatherette Six-Drawer Dresser', imageUrl: BEDROOM_IMAGE },
  { id: 'g8', category: 'dining-room', title: 'Sleek Dining Nook Setting', imageUrl: DINING_IMAGE }
];
