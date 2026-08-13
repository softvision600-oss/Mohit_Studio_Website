import {
  PortfolioItem,
  ServicePackage,
  BeforeAfterSample,
  GearItem,
  Testimonial,
  FAQItem,
  PortfolioCategory
} from '../types';

/**
 * Mohit Studio Centralized Data Store
 * All images are loaded directly from the public section (/images/...)
 */

export const HERO_SLIDES = [
  {
    id: 'slide-1',
    image: '/images/hero.jpg',
    title: 'Capturing Emotions. Framing Eternity.',
    subtitle: 'Welcome to Mohit Studio — Where Every Frame Tells a Timeless Story',
    tag: 'Luxury Wedding & Editorial Photography',
    ctaPrimary: 'Explore Portfolio',
    ctaSecondary: 'Book Your Session'
  },
  {
    id: 'slide-2',
    image: '/images/wedding.jpg',
    title: 'Royal Wedding Stories',
    subtitle: 'From intimate vows to grand heritage celebrations captured with fine-art precision',
    tag: 'Cinematic Wedding & Pre-Wedding',
    ctaPrimary: 'View Weddings',
    ctaSecondary: 'Calculate Estimate'
  },
  {
    id: 'slide-3',
    image: '/images/portrait.jpg',
    title: 'High-Fashion & Celebrity Portraits',
    subtitle: 'Masterclass lighting, haute couture styling, and magazine-worthy portraiture',
    tag: 'Fine-Art Portrait Studio',
    ctaPrimary: 'View Portraits',
    ctaSecondary: 'Meet Mohit'
  }
];

export const GALLERY_CATEGORIES: { id: PortfolioCategory; label: string; count: number }[] = [
  { id: 'all', label: 'All Works', count: 18 },
  { id: 'wedding', label: 'Weddings', count: 5 },
  { id: 'portrait', label: 'Portraits', count: 4 },
  { id: 'prewedding', label: 'Pre-Wedding', count: 3 },
  { id: 'fashion', label: 'High Fashion', count: 3 },
  { id: 'commercial', label: 'Commercial & Brand', count: 3 }
];

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: 'port-1',
    title: 'The Royal Vows at Lake Palace',
    category: 'wedding',
    categoryLabel: 'Wedding',
    image: '/images/wedding.jpg',
    location: 'Udaipur, Rajasthan',
    date: 'Autumn 2025',
    likes: 342,
    featured: true,
    aspectRatio: 'wide',
    exif: {
      camera: 'Sony Alpha A1',
      lens: 'FE 85mm f/1.4 GM II',
      aperture: 'f/1.8',
      shutterSpeed: '1/1600s',
      iso: 'ISO 100'
    },
    clientName: 'Aarav & Meera',
    description: 'A breathtaking golden-hour ceremony captured on the banks of Lake Pichola. Delicate silk embroidery, sunlit laughter, and emotional rituals.',
    tags: ['Royal Wedding', 'Udaipur', 'Fine Art', 'Golden Hour']
  },
  {
    id: 'port-2',
    title: 'Ethereal Velvet Editorial',
    category: 'portrait',
    categoryLabel: 'Portrait',
    image: '/images/portrait.jpg',
    location: 'Mohit Studio Stage A',
    date: 'Winter 2025',
    likes: 289,
    featured: true,
    aspectRatio: 'tall',
    exif: {
      camera: 'Hasselblad X2D 100C',
      lens: 'XCD 90mm f/2.5 V',
      aperture: 'f/2.8',
      shutterSpeed: '1/250s',
      iso: 'ISO 64'
    },
    clientName: 'Sanya Kapoor',
    description: 'Dramatic chiaroscuro studio lighting designed with dual parabolic softboxes and gold rim reflectives for Vogue-inspired editorial.',
    tags: ['Fashion', 'Editorial', 'Studio Light', 'Chiaroscuro']
  },
  {
    id: 'port-3',
    title: 'Twilight Whispers in the Garden',
    category: 'prewedding',
    categoryLabel: 'Pre-Wedding',
    image: '/images/prewedding.jpg',
    location: 'Jaipur Heritage Resort',
    date: 'Spring 2026',
    likes: 412,
    featured: true,
    aspectRatio: 'wide',
    exif: {
      camera: 'Canon EOS R3',
      lens: 'RF 50mm f/1.2L USM',
      aperture: 'f/1.2',
      shutterSpeed: '1/400s',
      iso: 'ISO 200'
    },
    clientName: 'Karan & Riya',
    description: 'Enchanting twilight pre-wedding stroll amidst thousands of glowing fairy lights, showcasing candid laughter and quiet intimate bonds.',
    tags: ['Pre-Wedding', 'Candid', 'Twilight', 'Fairy Lights']
  },
  {
    id: 'port-4',
    title: 'Luxury Chrono Craftsmanship',
    category: 'commercial',
    categoryLabel: 'Commercial',
    image: '/images/commercial.jpg',
    location: 'Mohit Studio Product Macro Bay',
    date: 'Spring 2026',
    likes: 195,
    featured: true,
    aspectRatio: 'square',
    exif: {
      camera: 'Sony A7R V',
      lens: 'FE 90mm f/2.8 Macro G',
      aperture: 'f/8.0',
      shutterSpeed: '1/160s',
      iso: 'ISO 50'
    },
    clientName: 'Aura Luxury Timepieces',
    description: 'Precision macro commercial shoot capturing liquid droplets reflecting off hand-polished stainless steel bevels and sapphire crystal.',
    tags: ['Product', 'Macro', 'Luxury', 'Commercial']
  },
  {
    id: 'port-5',
    title: 'Behind the Lens at Mohit Studio',
    category: 'portrait',
    categoryLabel: 'Studio Spotlight',
    image: '/images/mohit.jpg',
    location: 'Mohit Studio Master Suite',
    date: '2026',
    likes: 520,
    featured: true,
    aspectRatio: 'tall',
    exif: {
      camera: 'Canon EOS R5 Mark II',
      lens: 'RF 85mm f/1.2L USM DS',
      aperture: 'f/1.4',
      shutterSpeed: '1/500s',
      iso: 'ISO 100'
    },
    clientName: 'Lead Photographer Mohit',
    description: 'Master photographer Mohit in his element — perfecting shadow detail and warmth for custom portrait clients.',
    tags: ['Mohit Studio', 'Behind The Scenes', 'Master Photographer']
  },
  {
    id: 'port-6',
    title: 'The Grand Cinematic Entrance',
    category: 'wedding',
    categoryLabel: 'Wedding',
    image: '/images/hero.jpg',
    location: 'New Delhi Palace Grounds',
    date: 'Winter 2025',
    likes: 310,
    featured: false,
    aspectRatio: 'wide',
    exif: {
      camera: 'Sony Alpha A1',
      lens: 'FE 24-70mm f/2.8 GM II',
      aperture: 'f/2.8',
      shutterSpeed: '1/1000s',
      iso: 'ISO 160'
    },
    clientName: 'Vikram & Ananya',
    description: 'Cold pyros illuminating a midnight grand bridal procession, framed with rich architectural symmetry.',
    tags: ['Bridal Entrance', 'Grand Wedding', 'Pyro Glow']
  },
  {
    id: 'port-7',
    title: 'Monochrome Soul Portrait',
    category: 'portrait',
    categoryLabel: 'Portrait',
    image: '/images/portrait.jpg',
    location: 'Mohit Studio',
    date: 'Winter 2025',
    likes: 230,
    featured: false,
    aspectRatio: 'tall',
    exif: {
      camera: 'Leica SL2',
      lens: 'APO-Summicron-SL 75mm f/2',
      aperture: 'f/2.0',
      shutterSpeed: '1/250s',
      iso: 'ISO 100'
    },
    description: 'High-contrast black and white expressive portrait study highlighting raw emotion and subtle shadow contours.',
    tags: ['Black & White', 'Monochrome', 'Fine Art']
  },
  {
    id: 'port-8',
    title: 'Sunset Beach Romance',
    category: 'prewedding',
    categoryLabel: 'Pre-Wedding',
    image: '/images/prewedding.jpg',
    location: 'Goa Coastline',
    date: 'Autumn 2025',
    likes: 378,
    featured: false,
    aspectRatio: 'wide',
    exif: {
      camera: 'Sony A7S III',
      lens: 'FE 35mm f/1.4 GM',
      aperture: 'f/1.4',
      shutterSpeed: '1/2000s',
      iso: 'ISO 100'
    },
    clientName: 'Rohan & Simran',
    description: 'Dynamic splash action and sunset silhouette reflecting golden waves on the Arabian sea shore.',
    tags: ['Goa', 'Beach Shoot', 'Sunset Silhouette']
  },
  {
    id: 'port-9',
    title: 'Haute Couture Silk Editorial',
    category: 'fashion',
    categoryLabel: 'Fashion',
    image: '/images/portrait.jpg',
    location: 'Mumbai Fashion Week Lounge',
    date: 'Spring 2026',
    likes: 295,
    featured: false,
    aspectRatio: 'tall',
    exif: {
      camera: 'Canon EOS R3',
      lens: 'RF 135mm f/1.8L IS USM',
      aperture: 'f/1.8',
      shutterSpeed: '1/800s',
      iso: 'ISO 100'
    },
    description: 'Vibrant emerald dress movement frozen mid-air with high speed strobe sync and pristine color fidelity.',
    tags: ['Fashion Week', 'Haute Couture', 'Action Freeze']
  },
  {
    id: 'port-10',
    title: 'Royal Heritage Jewelry Campaign',
    category: 'commercial',
    categoryLabel: 'Commercial',
    image: '/images/commercial.jpg',
    location: 'Mohit Studio Commercial Floor',
    date: 'Winter 2025',
    likes: 180,
    featured: false,
    aspectRatio: 'square',
    exif: {
      camera: 'Hasselblad X2D 100C',
      lens: 'XCD 120mm f/3.5 Macro',
      aperture: 'f/11',
      shutterSpeed: '1/125s',
      iso: 'ISO 64'
    },
    description: 'Detailed gemstone refraction photography highlighting uncut diamonds and antique gold filigree.',
    tags: ['Jewelry', 'Commercial', 'Hasselblad', 'Macro']
  }
];

export const SERVICE_PACKAGES: ServicePackage[] = [
  {
    id: 'serv-wedding',
    title: 'Royal Heritage Wedding Photography',
    tagline: 'Comprehensive multi-day cinematic coverage for your once-in-a-lifetime wedding',
    category: 'wedding',
    startingPrice: 125000,
    duration: '2-3 Days Coverage',
    deliverablesCount: '800+ Retouched Master Photos + Cinematic Teaser',
    image: '/images/wedding.jpg',
    popular: true,
    features: [
      'Lead Master Photographer Mohit + Senior Team of 4',
      'Drone aerial cinematography & venue ambient shots',
      'Handcrafted Italian leather printed wedding album (100 pages)',
      'Same-day wedding highlight photo slideshow',
      'High-resolution online password-protected digital gallery',
      'Full RAW images backup drive provided'
    ],
    description: 'Designed for couples seeking unforgettable storytelling, artistic lighting, and regal aesthetics across Haldi, Sangeet, Pheras, and Reception.'
  },
  {
    id: 'serv-prewedding',
    title: 'Cinematic Pre-Wedding Experience',
    tagline: 'Artistic location shoots designed around your personal love story',
    category: 'prewedding',
    startingPrice: 45000,
    duration: '1 Full Day (10-12 Hours)',
    deliverablesCount: '150 Retouched Photos + 2 Min Reels Video',
    image: '/images/prewedding.jpg',
    popular: false,
    features: [
      '3 Outfit concept changes & location scouting',
      'Professional hair & makeup artist available on site',
      '4K Cinematic aerial drone footage',
      'Custom color grading matching your theme',
      'Save-the-Date video reel included'
    ],
    description: 'Whether it is a royal palace in Jaipur, a misty hill station, or our climate-controlled studio, we make your pre-wedding shoot relaxed and magical.'
  },
  {
    id: 'serv-portrait',
    title: 'Fine-Art & Editorial Portraiture',
    tagline: 'Personal branding, actor portfolios, and high-impact headshots',
    category: 'portrait',
    startingPrice: 18000,
    duration: '3 Hours Studio Session',
    deliverablesCount: '25 Magazine-Grade Retouched Master Prints',
    image: '/images/portrait.jpg',
    popular: false,
    features: [
      'Mohit Studio Stage A studio rental included',
      '4 Costume variations & custom backdrop options',
      'Live tethered monitor preview on 32-inch 4K screen',
      'Skin micro-texture retention advanced retouching',
      'Commercial usage licensing rights'
    ],
    description: 'Elevate your personal image with world-class studio lighting and guided posing directions that bring out your authentic confidence.'
  },
  {
    id: 'serv-commercial',
    title: 'Brand & Product Commercial Shoot',
    tagline: 'High-converting luxury product, lookbook, and campaign imagery',
    category: 'commercial',
    startingPrice: 35000,
    duration: 'Half Day / Full Day',
    deliverablesCount: 'Custom Asset Suite for E-commerce & Billboard',
    image: '/images/commercial.jpg',
    popular: false,
    features: [
      'Macro lens precision lighting & shadow control',
      'Focus-stacking for razor sharp depth-of-field',
      'Transparent PNG cuts & lifestyle placement options',
      'Fast 48-hour turn-around time option'
    ],
    description: 'Ideal for luxury fashion labels, jewelry houses, tech accessories, and beverage brands needing crisp, high-end commercial imagery.'
  }
];

export const BEFORE_AFTER_SAMPLES: BeforeAfterSample[] = [
  {
    id: 'ba-1',
    title: 'Royal Bridal Tone & Warmth Master',
    category: 'Wedding Retouching',
    beforeImage: '/images/hero.jpg',
    afterImage: '/images/wedding.jpg',
    description: 'Notice the enhancement of skin tone richness, recovery of highlight detail in gold embroidery, and signature warm cinematic glow.',
    technique: 'Frequency Separation + Color Grade'
  },
  {
    id: 'ba-2',
    title: 'Editorial Shadow & Texture Precision',
    category: 'Portrait Retouching',
    beforeImage: '/images/mohit.jpg',
    afterImage: '/images/portrait.jpg',
    description: 'Preserving natural skin pores while softening harsh specular highlights and bringing out luminous gold contrast in shadows.',
    technique: 'Dodge & Burn + Micro-contrast'
  }
];

export const STUDIO_GEAR: GearItem[] = [
  {
    id: 'gear-1',
    name: 'Sony Alpha A1 & Canon EOS R3',
    category: 'Camera Body',
    specs: '50.1 MP / 30fps Continuous / 8K RAW Video / Dual DIGIC X',
    description: 'Flagship full-frame camera systems ensuring lightning fast autofocus tracking during high-speed wedding dance and candid moments.',
    iconName: 'Camera'
  },
  {
    id: 'gear-2',
    name: 'Hasselblad X2D 100C Medium Format',
    category: 'Camera Body',
    specs: '100 MP Medium Format Sensor / 16-Bit Color Depth / 15 Stops Dynamic Range',
    description: 'The ultimate tool for high-fashion editorial and commercial billboard campaigns with unsurpassed color realism.',
    iconName: 'Aperture'
  },
  {
    id: 'gear-3',
    name: 'Prime Lenses Suite (G-Master & L-Series)',
    category: 'Lens',
    specs: 'f/1.2 & f/1.4 Apertures (24mm, 35mm, 50mm, 85mm, 135mm)',
    description: 'Creamy bokeh background separation and tack-sharp detail even in candlelight wedding venues.',
    iconName: 'Focus'
  },
  {
    id: 'gear-4',
    name: 'Profoto Pro-11 & B10X OCF Lighting Rigs',
    category: 'Lighting',
    specs: '2400Ws Strobe Power / Freeze Sync / Parabolic Modifiers',
    description: 'Industry standard Swiss lighting equipment for ultra-consistent, buttery soft studio light control.',
    iconName: 'Zap'
  },
  {
    id: 'gear-5',
    name: 'DJI Inspire 3 & Mavic 3 Pro Cine Drones',
    category: 'Audio & Drone',
    specs: '8K CinemaDNG / Apple ProRes 422 HQ / Tri-Camera System',
    description: 'Capturing sweeping aerial views of destination wedding palaces and dramatic outdoor scenery.',
    iconName: 'Video'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    clientName: 'Priya & Siddharth Sharma',
    eventType: 'Destination Wedding in Udaipur',
    rating: 5,
    avatar: '/images/wedding.jpg',
    quote: 'Mohit and his team did not just take photos; they bottled up pure magic. Looking at our album brings back every tear and laugh. Mohit’s eye for lighting and calm demeanor made us feel like royalty!',
    date: 'December 2025',
    shootLocation: 'Jagmandir Island Palace'
  },
  {
    id: 'test-2',
    clientName: 'Vikramaditya Roy',
    eventType: 'Fashion Lookbook Shoot',
    rating: 5,
    avatar: '/images/portrait.jpg',
    quote: 'As a brand designer, I am extremely demanding regarding color accuracy and mood. Mohit Studio delivered cover-grade imagery on a tight 3-day turnaround. Absolutely the finest studio in the region!',
    date: 'January 2026',
    shootLocation: 'Mohit Studio Stage A'
  },
  {
    id: 'test-3',
    clientName: 'Ananya & Kabir Malhotra',
    eventType: 'Pre-Wedding in Jaipur',
    rating: 5,
    avatar: '/images/prewedding.jpg',
    quote: 'We were camera shy, but Mohit made the entire experience feel like a fun outing with a close friend! The sunset shots with fairy lights look straight out of a classic romantic movie.',
    date: 'February 2026',
    shootLocation: 'Amer Palace Gardens'
  }
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    question: 'How far in advance should we book Mohit Studio for our wedding?',
    answer: 'We recommend booking 6 to 9 months in advance for peak wedding season (October through March) to ensure date availability for lead photographer Mohit.',
    category: 'Booking & Deposit'
  },
  {
    question: 'Do you travel across India and internationally for destination shoots?',
    answer: 'Yes! Mohit Studio shoots across major destination cities in India (Udaipur, Jaipur, Goa, Kerala, Delhi, Mumbai) as well as international destinations (Dubai, Thailand, Bali). Travel and stay are added transparently.',
    category: 'General'
  },
  {
    question: 'What is your turnaround time for edited photos and album delivery?',
    answer: 'You will receive a curated 50-photo "First Look" preview within 72 hours of the event. Complete color-graded digital gallery delivery takes 3-4 weeks, and custom printed photobooks are delivered within 6 weeks.',
    category: 'Deliverables'
  },
  {
    question: 'Can we customize our photography package?',
    answer: 'Absolutely! You can choose custom combinations of pre-wedding shoot days, drone aerial coverage, photobook album upgrades, live printing booths, and same-day video highlights using our interactive Package Estimator.',
    category: 'Booking & Deposit'
  },
  {
    question: 'What happens if the weather is bad during an outdoor shoot?',
    answer: 'For pre-wedding or outdoor shoots, we track weather forecasts closely. If heavy rain occurs, we can seamlessly shift to our indoor climate-controlled 3,500 sq.ft. Mohit Studio set or reschedule without extra penalty.',
    category: 'General'
  }
];

export const STUDIO_INFO = {
  name: 'Mohit Studio',
  tagline: 'Luxury Fine-Art & Cinematic Photography',
  leadPhotographer: 'Mohit Sharma',
  experienceYears: 12,
  completedShoots: 2500,
  satisfactionRate: '99.4%',
  awardsWon: 18,
  address: 'Plot 42, Studio Boulevard, Creative Enclave, New Delhi - 110048',
  phone: '+91 98765 43210 / +91 98111 22334',
  email: 'contact@mohitstudio.com',
  workingHours: 'Mon - Sat: 10:00 AM - 8:00 PM (Sunday by Appointment Only)',
  instagram: '@mohitstudiophotography',
  youtube: 'MohitStudioOfficial'
};
