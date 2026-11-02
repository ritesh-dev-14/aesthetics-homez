// export const collections = [
//   {
//     id: 'curtains',
//     number: '01',
//     title: 'Curtain Fabrics',
//     subtitle: 'Frame the light. Define the room.',
//     description: 'From airy sheers to rich blackout drapes, discover fabrics that bring softness, privacy and personality to every window.',
//     image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1400&q=85',
//     categories: ['Jacquard', 'Linen', 'Dobby', 'Print'],
//     points: ['Sheer, dim-out and blackout options', 'Custom designs and sizes', 'Premium textures and timeless palettes']
//   },
//   {
//     id: 'blinds',
//     number: '02',
//     title: 'Designer Blinds',
//     subtitle: 'A beautiful balance of light and privacy.',
//     description: 'Explore roller, Roman, zebra and custom-fit blinds created for contemporary homes, offices and hospitality spaces.',
//     image: 'https://images.unsplash.com/photo-1615874694520-474822394e73?auto=format&fit=crop&w=1400&q=85',
//     categories: ['Zebra Blinds', 'Roman Blinds', 'Roller Blinds'],
//     points: ['Blackout, sunscreen and light-filtering fabrics', 'Custom-made window solutions', 'Easy-to-operate, practical designs']
//   },
//   {
//     id: 'upholstery',
//     number: '03',
//     title: 'Upholstery Fabrics',
//     subtitle: 'Comfort you can see. Quality you can feel.',
//     description: 'Premium sofa and furniture fabrics in beautiful colours, tactile textures and durable finishes for everyday living.',
//     image: 'https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?auto=format&fit=crop&w=1400&q=85',
//     categories: ['Sofa Fabric', 'Bouclé', 'Oil-Free Fabric', 'Velvet Fabric'],
//     points: ['Soft-touch premium materials', 'Durable and easy-care options', 'Styles for modern and classic interiors']
//   }
// ]

// export const testimonials = [
//   {
//     quote: 'Aesthetic Homez has transformed the way we source fabrics. Their upholstery collections are premium-grade, and their B2B support is fantastic. A must-try for wholesalers!',
//     name: 'Rakesh Tandon',
//     company: 'Tandon Furnishing Mart, Rajasthan'
//   },
//   {
//     quote: 'We recently ordered a bulk quantity of blinds for a hotel project. The quality was superior, and the customization options made our job so much easier. Excellent service!',
//     name: 'Meena Chauhan',
//     company: 'Chauhan Interior Hub, Uttarakhand'
//   },
//   {
//     quote: 'As a wholesaler, I always look for top-quality materials at competitive prices. Aesthetic Homez has been our go-to supplier for premium blinds and curtain fabrics. Highly recommended!',
//     name: 'Rajesh Gupta',
//     company: 'Gupta Textiles & Drapes, Delhi'
//   }
// ]

// export const benefits = [
//   '100% customization across design, size and fabric',
//   'Sourcing from quality Indian mills',
//   'Quick sampling and prototyping',
//   'Dedicated B2B account support',
//   'Transparent pricing and MOQ-based planning',
//   'PAN India shipping and international exports',
//   'WhatsApp and phone support',
//   'A focus on long-term relationships'
// ]




// --- MASTER COLLECTIONS DATA ---
export const collections = [
  {
    id: 'curtains',
    number: '01',
    title: 'Curtain Fabrics',
    subtitle: 'Frame the light. Define the room.',
    description: 'From airy sheers to rich blackout drapes, discover fabrics that bring softness, privacy and personality to every window. Woven with precision in our Panipat ateliers, these textiles are engineered for absolute vertical fall and light manipulation.',
    image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1400&q=85',
    categories: ['Jacquard Damask', 'Pure Linen', 'Silk Voile', 'Thermal Blackout'],
    points: [
      'Sheer, dim-out (70%), and total thermal blackout (100%) options',
      'Custom floor-to-ceiling drops with seamless ultra-wide weaves',
      'Premium textures tailored to timeless European color palettes',
      'Zinc-weighted bottom hems for perfect architectural drape memory'
    ],
    technicalSpecs: 'Available in 140cm to 320cm widths. NFPA 701 Fire Retardant finish available upon request for hospitality.'
  },
  {
    id: 'blinds',
    number: '02',
    title: 'Designer Blinds',
    subtitle: 'A beautiful balance of light and privacy.',
    description: 'Explore roller, Roman, zebra and custom-fit wooden blinds created for contemporary homes, offices and hospitality spaces. Designed to offer sleek, minimalist light control without compromising on warmth.',
    image: 'https://images.unsplash.com/photo-1615874694520-474822394e73?auto=format&fit=crop&w=1400&q=85',
    categories: ['Zebra Day/Night', 'Roman Fold', 'Motorized Roller', 'Wooden Venetian'],
    points: [
      'Acoustic-rated blackout and UV-blocking sunscreen fabrics',
      'Custom-made window solutions with concealed headrails',
      'Easy-to-operate, practical designs with child-safe cordless options',
      'Seamless integration with Somfy smart home automation'
    ],
    technicalSpecs: 'UV Blockage up to 99%. Anti-static and dust-repellent fiber treatments standard on all roller fabrics.'
  },
  {
    id: 'upholstery',
    number: '03',
    title: 'Upholstery Fabrics',
    subtitle: 'Comfort you can see. Quality you can feel.',
    description: 'Premium sofa and furniture fabrics in beautiful colours, tactile textures and durable finishes for everyday living. Engineered to withstand high traffic while maintaining an ultra-soft, luxurious hand-feel.',
    image: 'https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?auto=format&fit=crop&w=1400&q=85',
    categories: ['Micro-Velvet', 'Heavy Bouclé', 'Oil-Resistant', 'Performance Suede'],
    points: [
      'Soft-touch premium materials with high Martindale abrasion ratings (40,000+ rubs)',
      'Durable, liquid-repellent, and easy-care pet-friendly options',
      'Styles meticulously curated for both modern minimalist and classic interiors',
      'Breathable weave structures to ensure year-round seating comfort'
    ],
    technicalSpecs: 'Martindale Rub Test: 40,000 - 100,000. OEKO-TEX Standard 100 certified (free of harmful chemicals).'
  },
  {
    id: 'smart-hardware',
    number: '04',
    title: 'Architectural Hardware',
    subtitle: 'Silent movement. Invisible design.',
    description: 'The backbone of luxury drapery. We offer whisper-quiet motorized tracks, recessed ceiling channels, and hand-finished decorative finials designed to operate flawlessly for decades.',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=85',
    categories: ['Somfy Motorized Tracks', 'Ripplefold Sliders', 'Brass Finials', 'Recessed Channels'],
    points: [
      'Ultra-quiet electric motors with smartphone and voice control integration',
      'Perfectly spaced Ripplefold carriers for continuous architectural waves',
      'Heavy-duty aluminum extrusions capable of holding 50kg+ velvet drops',
      'Custom curved track bending for bay windows and 90-degree corners'
    ],
    technicalSpecs: 'Compatible with Zigbee, Z-Wave, KNX, and Control4 smart home ecosystems. 5-Year Motor Warranty.'
  }
];


// --- CLIENT TESTIMONIALS ---
export const testimonials = [
  {
    id: 't1',
    quote: 'Aesthetic Homez has completely transformed the way we source fabrics. Their upholstery collections are premium-grade, and their dedicated B2B support is fantastic. A must-try for interior architects!',
    name: 'Rakesh Tandon',
    role: 'Principal Architect',
    company: 'Tandon Furnishing Mart',
    location: 'Rajasthan, India',
    rating: 5
  },
  {
    id: 't2',
    quote: 'We recently ordered a bulk quantity of motorized Roman blinds for a luxury boutique hotel project. The fabric quality was superior, and the custom sizing made our installation seamless.',
    name: 'Meena Chauhan',
    role: 'Director of Design',
    company: 'Chauhan Interior Hub',
    location: 'Dehradun, Uttarakhand',
    rating: 5
  },
  {
    id: 't3',
    quote: 'As a luxury wholesaler, I demand top-quality materials at competitive margins. Aesthetic Homez has been our most reliable Panipat supplier for premium silk drapes and hardware.',
    name: 'Rajesh Gupta',
    role: 'Managing Partner',
    company: 'Gupta Textiles & Drapes',
    location: 'New Delhi, India',
    rating: 5
  }
];


// --- B2B & BRAND BENEFITS ---
export const benefits = [
  {
    id: 'b1',
    title: 'Absolute Customization',
    description: '100% customization across design, size, heading style, and fabric composition to meet exact project blueprints.'
  },
  {
    id: 'b2',
    title: 'Panipat Heritage Sourcing',
    description: 'Direct manufacturing and sourcing from the highest quality Indian looms in Panipat, eliminating middleman markups.'
  },
  {
    id: 'b3',
    title: 'Rapid Prototyping',
    description: 'Quick sampling, strike-offs, and custom swatch binders delivered to your studio within 72 hours.'
  },
  {
    id: 'b4',
    title: 'Dedicated Trade Support',
    description: 'Exclusive B2B account managers assisting with CAD hardware planning, fabric yields, and logistics.'
  },
  {
    id: 'b5',
    title: 'Scalable Production',
    description: 'Transparent volume pricing and low MOQ-based planning suitable for both single villas and 500-room hotels.'
  },
  {
    id: 'b6',
    title: 'Global Logistics',
    description: 'Secure PAN India shipping and streamlined international freight exports for overseas hospitality projects.'
  },
  {
    id: 'b7',
    title: 'Compliance & Safety',
    description: 'Commercial-grade treatments available, including NFPA 701 Fire Retardant and OEKO-TEX eco-certifications.'
  },
  {
    id: 'b8',
    title: 'Partnership Focus',
    description: 'We don’t just supply fabric; we build long-term advisory relationships with design firms and developers.'
  }
];