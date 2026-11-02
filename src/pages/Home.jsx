// import React, { useState, useMemo } from 'react';
// import { 
//   Sun, Moon, Sunset, Sliders, Check, ChevronRight, Layers, Sparkles, 
//   Ruler, Scissors, Shield, Star, Compass, ShoppingBag, 
//   Phone, Mail, Award, Info, X, Search, Globe, ChevronDown, CheckCircle2,
//   Building2, SlidersHorizontal, ArrowUpRight, Palette, Play, Eye
// } from 'lucide-react';

// // Fabric Collections Data based on Aesthetic Homez Catalog
// const FABRICS = [
//   {
//     id: 'imperial-gold-damask',
//     name: 'Imperial Gold Damask',
//     category: 'Jacquard & Damask',
//     composition: '80% Silk Filigree, 20% Cotton Weave',
//     opacity: 92,
//     acousticRating: 'NRC 0.75 (Medium-High)',
//     weight: '450 gsm',
//     colorHex: '#C5A038',
//     tag: 'Signature Heritage',
//     description: 'Woven on specialized Panipat jacquard looms. Features a raised relief damask pattern with subtle metallic sheen that catches natural sunlight beautifully.',
//     priceInr: 3400,
//     priceUsd: 110,
//     image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=800&q=80'
//   },
//   {
//     id: 'panipat-slub-linen',
//     name: 'Panipat Raw Sheer Linen',
//     category: 'Linen & Silk Sheers',
//     composition: '100% Pure Organic Linen',
//     opacity: 30,
//     acousticRating: 'NRC 0.30 (Soft Ambient)',
//     weight: '170 gsm',
//     colorHex: '#E8DFCA',
//     tag: 'Organic Glow',
//     description: 'Lightweight slub linen that transforms harsh sunlight into an ethereal, soft warm aura while maintaining day privacy for living salons.',
//     priceInr: 2200,
//     priceUsd: 75,
//     image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=80'
//   },
//   {
//     id: 'royal-velvet-emerald',
//     name: 'Royal Emerald Silk Velvet',
//     category: 'Luxury Velvet',
//     composition: '100% High-Density Micro-Velveteen',
//     opacity: 98,
//     acousticRating: 'NRC 0.88 (Acoustic Master)',
//     weight: '510 gsm',
//     colorHex: '#1B4332',
//     tag: 'Bestseller',
//     description: 'Ultra-luxurious weighted drape with rich velvet pile depth. Eliminates echoes in high-ceiling grand rooms and master bed suites.',
//     priceInr: 4200,
//     priceUsd: 135,
//     image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80'
//   },
//   {
//     id: 'onyx-blackout-shield',
//     name: 'Onyx Eco-Thermal Shield',
//     category: 'Thermal Blackout',
//     composition: 'Triple-Weave Insulated Core',
//     opacity: 100,
//     acousticRating: 'NRC 0.95 (Maximum Isolation)',
//     weight: '530 gsm',
//     colorHex: '#121212',
//     tag: '100% Darkening',
//     description: 'Engineered for absolute light elimination in home theaters and luxury bedrooms. Reduces room thermal energy loss by up to 35%.',
//     priceInr: 2900,
//     priceUsd: 95,
//     image: 'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=800&q=80'
//   },
//   {
//     id: 'champagne-silk-sheer',
//     name: 'Champagne Voile Silk',
//     category: 'Linen & Silk Sheers',
//     composition: '60% Mulberry Silk, 40% Fine Voile',
//     opacity: 25,
//     acousticRating: 'NRC 0.20 (Light Ambient)',
//     weight: '140 gsm',
//     colorHex: '#F4EFE6',
//     tag: 'Ultra Elegant',
//     description: 'Delicate sheer with a champagne gold pearl finish. Creates graceful, floaty folds that drift effortlessly with gentle breezes.',
//     priceInr: 2600,
//     priceUsd: 85,
//     image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80'
//   },
//   {
//     id: 'slate-architectural-wave',
//     name: 'Slate Smart Wave Weave',
//     category: 'Motorized Blinds & Waves',
//     composition: 'Anti-Static Flame-Retardant Polyester Blend',
//     opacity: 85,
//     acousticRating: 'NRC 0.65 (Balanced)',
//     weight: '390 gsm',
//     colorHex: '#3A3D40',
//     tag: 'Modern Minimalist',
//     description: 'Designed specifically for continuous ceiling-recessed Ripplefold motorized track systems in penthouse architectural settings.',
//     priceInr: 3100,
//     priceUsd: 100,
//     image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80'
//   }
// ];

// // Drapery Pleat Styles
// const PLEAT_STYLES = [
//   { id: 'french-pinch', name: 'French Pinch Pleat', description: 'Tailored 3-finger hand pleats permanently stitched for classic structured elegance.', fullness: 2.5 },
//   { id: 'ripplefold-wave', name: 'Ripplefold / Wave', description: 'Continuous fluid S-curve folds hanging evenly on slim architectural tracks.', fullness: 2.2 },
//   { id: 'roman-blind', name: 'Custom Roman Blind', description: 'Clean horizontal fabric panels that fold up smoothly in crisp tailored stacks.', fullness: 1.2 },
//   { id: 'grommet-top', name: 'Brushed Gold Grommet', description: 'Contemporary deep folds running directly through hand-finished metal eyelet rings.', fullness: 2.0 },
//   { id: 'french-sheer', name: 'French Tailored Sheer', description: 'Subtle double-pleated sheer header crafted for light-filtering inner curtains.', fullness: 2.5 }
// ];

// // Testimonials
// const TESTIMONIALS = [
//   {
//     quote: "Aesthetic Homez brought our 14,000 sq.ft. Gurgaon penthouse salon to life. The Imperial Gold Damask drapes and Somfy motorized tracks operate silently with incredible precision.",
//     author: "Vikramaditya Singhania",
//     role: "Managing Director, Singhania Estates",
//     location: "Gurgaon & New Delhi",
//     rating: 5
//   },
//   {
//     quote: "The team at Swastik Home Decor understands luxury fabrics like no one else in Panipat. Their weighted hems ensure the silk velvet drapes hang completely straight from 14ft ceilings.",
//     author: "Ananya Roy Chowdhury",
//     role: "Principal Interior Architect, Design Atelier",
//     location: "Mumbai",
//     rating: 5
//   },
//   {
//     quote: "We outfitted 35 luxury suites at our boutique heritage resort with Aesthetic Homez blackout and linen sheers. Superior quality, flame-retardant finish, and prompt delivery.",
//     author: "Karanveer Rathore",
//     role: "Director of Procurement, Heritage Resorts",
//     location: "Jaipur",
//     rating: 5
//   }
// ];

// export default function App() {
//   // Navigation & UI States
//   const [currency, setCurrency] = useState('INR'); // INR or USD
//   const [searchQuery, setSearchQuery] = useState('');
//   const [selectedCategory, setSelectedCategory] = useState('All');
//   const [isSwatchDrawerOpen, setIsSwatchDrawerOpen] = useState(false);
//   const [selectedSwatches, setSelectedSwatches] = useState(['imperial-gold-damask', 'panipat-slub-linen']);
//   const [quickViewFabric, setQuickViewFabric] = useState(null);

//   // Room Simulator States
//   const [roomLighting, setRoomLighting] = useState('golden'); // daylight, golden, evening
//   const [activeFabric, setActiveFabric] = useState(FABRICS[0]);
//   const [activePleat, setActivePleat] = useState(PLEAT_STYLES[0]);
//   const [curtainOpacity, setCurtainOpacity] = useState(85);
//   const [isCurtainClosed, setIsCurtainClosed] = useState(true);

//   // Price Estimator States
//   const [winWidthFeet, setWinWidthFeet] = useState(10); // feet
//   const [winHeightFeet, setWinHeightFeet] = useState(9); // feet
//   const [pleatDensity, setPleatDensity] = useState(2.5); // 1.5, 2.0, 2.5
//   const [liningOption, setLiningOption] = useState('sateen'); // unlined, sateen, blackout, acoustic
//   const [isMotorized, setIsMotorized] = useState(true);

//   // Calculate Price Estimate dynamically
//   const calculatedEstimate = useMemo(() => {
//     const totalAreaSqFt = (winWidthFeet * pleatDensity) * winHeightFeet;
//     const fabricMetersNeeded = totalAreaSqFt / 10; // Approx fabric conversion
    
//     const unitPrice = currency === 'INR' ? activeFabric.priceInr : activeFabric.priceUsd;
//     let baseFabricCost = fabricMetersNeeded * unitPrice;

//     // Lining add-on
//     if (liningOption === 'sateen') baseFabricCost += fabricMetersNeeded * (currency === 'INR' ? 450 : 15);
//     if (liningOption === 'blackout') baseFabricCost += fabricMetersNeeded * (currency === 'INR' ? 850 : 28);
//     if (liningOption === 'acoustic') baseFabricCost += fabricMetersNeeded * (currency === 'INR' ? 1250 : 40);

//     // Motorization add-on
//     if (isMotorized) baseFabricCost += (currency === 'INR' ? 24000 : 320);

//     return Math.round(baseFabricCost);
//   }, [winWidthFeet, winHeightFeet, pleatDensity, activeFabric, liningOption, isMotorized, currency]);

//   // Toggle Swatch Selection
//   const toggleSwatch = (id) => {
//     if (selectedSwatches.includes(id)) {
//       if (selectedSwatches.length > 1) {
//         setSelectedSwatches(selectedSwatches.filter(item => item !== id));
//       }
//     } else {
//       if (selectedSwatches.length < 5) {
//         setSelectedSwatches([...selectedSwatches, id]);
//       } else {
//         alert('You can select up to 5 fabric swatches for your complimentary kit.');
//       }
//     }
//   };

//   // Filter Fabrics for Showcase
//   const categories = ['All', 'Jacquard & Damask', 'Linen & Silk Sheers', 'Luxury Velvet', 'Thermal Blackout', 'Motorized Blinds & Waves'];
  
//   const filteredFabrics = FABRICS.filter(f => {
//     const matchesCategory = selectedCategory === 'All' || f.category === selectedCategory;
//     const matchesSearch = f.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
//                           f.description.toLowerCase().includes(searchQuery.toLowerCase());
//     return matchesCategory && matchesSearch;
//   });

//   return (
//     <div className="min-h-screen bg-[#FAF8F2] text-[#121212] font-sans antialiased selection:bg-[#C5A038] selection:text-white">
      
//       {/* TOP ANNOUNCEMENT BAR */}
//       <div className="bg-[#121212] text-[#E8DFCA] text-[11px] py-2 px-4 border-b border-[#C5A038]/30">
//         <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
//           <div className="flex items-center space-x-2">
//             <Sparkles className="w-3.5 h-3.5 text-[#C5A038]" />
//             <span className="font-medium tracking-wide">Panipat’s Premier Atelier for Bespoke Luxury Curtains & High-End Upholstery</span>
//           </div>
//           <div className="flex items-center space-x-6 text-[10px] font-semibold tracking-wider uppercase">
//             <span className="hidden sm:inline text-[#C5A038]">By Swastik Home Decor</span>
//             <button 
//               onClick={() => setCurrency(currency === 'INR' ? 'USD' : 'INR')}
//               className="hover:text-[#C5A038] transition flex items-center space-x-1 bg-white/10 px-2 py-0.5 rounded"
//             >
//               <Globe className="w-3 h-3 text-[#C5A038]" />
//               <span>Currency: {currency} ({currency === 'INR' ? '₹' : '$'})</span>
//             </button>
//             <a href="tel:+919876543210" className="flex items-center space-x-1 hover:text-[#C5A038]">
//               <Phone className="w-3 h-3 text-[#C5A038]" />
//               <span>+91 98120 00000</span>
//             </a>
//           </div>
//         </div>
//       </div>

//       {/* MAIN NAVIGATION WITH DIRECT LOGO REPRODUCTION */}
//       <nav className="sticky top-0 z-40 bg-[#FAF8F2]/95 backdrop-blur-md border-b border-[#C5A038]/20 transition-all shadow-sm">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex items-center justify-between h-24">
            
//             {/* BRAND LOGO - REPRODUCING LOGO ACCURATELY */}
//             <div 
//               className="flex items-center space-x-4 cursor-pointer group"
//               onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
//             >
//               {/* Logo Emblem (A | H with Window Drapery) */}
//               <div className="flex items-center space-x-2">
//                 <span className="font-serif text-3xl sm:text-4xl font-bold text-[#121212] tracking-tighter">A</span>
                
//                 {/* Vertical Gold Divider Line matching Logo */}
//                 <div className="w-[3px] h-10 bg-gradient-to-b from-[#C5A038] via-[#DAA520] to-[#B8860B] rounded-full mx-0.5" />
                
//                 <div className="flex flex-col items-center">
//                   <span className="font-serif text-2xl sm:text-3xl font-bold text-[#121212] leading-none">H</span>
//                   {/* Window Grid & Drapery Icon matching Logo */}
//                   <div className="w-5 h-5 bg-[#C5A038] rounded-sm mt-0.5 p-0.5 grid grid-cols-2 gap-0.5 shadow-sm">
//                     <div className="bg-[#FAF8F2] rounded-xs" />
//                     <div className="bg-[#FAF8F2] rounded-xs" />
//                     <div className="bg-[#FAF8F2] rounded-xs" />
//                     <div className="bg-[#FAF8F2] rounded-xs" />
//                   </div>
//                 </div>
//               </div>

//               {/* Logo Text Stack */}
//               <div className="flex flex-col border-l border-[#121212]/10 pl-3">
//                 <span className="font-serif text-xl sm:text-2xl font-bold text-[#121212] tracking-[0.18em] uppercase leading-none">
//                   Aesthetic Homez
//                 </span>
//                 <span className="text-[10px] font-sans tracking-[0.2em] text-[#121212]/80 mt-1 italic font-medium">
//                   Brings You Close To Luxury
//                 </span>
//                 <span className="text-[9px] font-sans uppercase tracking-[0.25em] text-[#C5A038] font-bold mt-0.5">
//                   By Swastik Home Decor
//                 </span>
//               </div>
//             </div>

//             {/* NAV LINKS */}
//             <div className="hidden lg:flex items-center space-x-8 text-xs font-bold uppercase tracking-[0.2em] text-[#121212]/80">
//               <a href="#simulator" className="hover:text-[#C5A038] transition py-2 border-b-2 border-transparent hover:border-[#C5A038]">Drapery Studio</a>
//               <a href="#collections" className="hover:text-[#C5A038] transition py-2 border-b-2 border-transparent hover:border-[#C5A038]">Master Collections</a>
//               <a href="#calculator" className="hover:text-[#C5A038] transition py-2 border-b-2 border-transparent hover:border-[#C5A038]">Custom Estimator</a>
//               <a href="#heritage" className="hover:text-[#C5A038] transition py-2 border-b-2 border-transparent hover:border-[#C5A038]">Panipat Heritage</a>
//               <a href="#designer-portal" className="hover:text-[#C5A038] transition py-2 border-b-2 border-transparent hover:border-[#C5A038]">Architect Trade</a>
//             </div>

//             {/* SWATCH DRAWER BUTTON */}
//             <div className="flex items-center space-x-4">
//               <button 
//                 onClick={() => setIsSwatchDrawerOpen(true)}
//                 className="relative inline-flex items-center space-x-2.5 bg-[#121212] hover:bg-[#252525] text-[#FAF8F2] px-5 py-3 rounded-full text-xs font-bold tracking-widest uppercase border border-[#C5A038] shadow-lg transition-all transform hover:-translate-y-0.5 active:translate-y-0"
//               >
//                 <Layers className="w-4 h-4 text-[#C5A038]" />
//                 <span className="hidden sm:inline">Swatch Kit</span>
//                 <span className="bg-[#C5A038] text-[#121212] rounded-full w-5 h-5 flex items-center justify-center text-[10px] font-black">
//                   {selectedSwatches.length}
//                 </span>
//               </button>
//             </div>

//           </div>
//         </div>
//       </nav>

//       {/* HERO SECTION WITH LUXURY DRAPERY ATMOSPHERE */}
//       <section className="relative min-h-[88vh] flex items-center justify-center overflow-hidden bg-[#121212] text-[#FAF8F2]">
        
//         {/* Background Image Overlay */}
//         <div className="absolute inset-0 z-0">
//           <img 
//             src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=2200&q=90" 
//             alt="Aesthetic Homez Luxury Curtains Living Room" 
//             className="w-full h-full object-cover opacity-50 scale-105"
//           />
//           <div className="absolute inset-0 bg-gradient-to-r from-[#121212] via-[#121212]/75 to-transparent" />
//           <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-[#121212]/40" />
//         </div>

//         <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 w-full">
//           <div className="max-w-3xl space-y-8">
            
//             {/* Tagline Crest */}
//             <div className="inline-flex items-center space-x-3 bg-[#121212]/80 backdrop-blur-md px-5 py-2.5 rounded-full border border-[#C5A038]/50 shadow-2xl">
//               <span className="h-2 w-2 rounded-full bg-[#C5A038] animate-pulse" />
//               <span className="text-xs font-bold tracking-[0.25em] uppercase text-[#C5A038]">
//                 Brings You Close To Luxury
//               </span>
//               <span className="text-[10px] text-white/50 border-l border-white/20 pl-2 uppercase tracking-widest">
//                 Panipat · India
//               </span>
//             </div>

//             {/* Hero Heading */}
//             <h1 className="font-serif text-5xl sm:text-7xl lg:text-8xl font-normal leading-[0.95] tracking-tight text-white">
//               Where fabrics <br />
//               speak <em className="italic font-light text-[#C5A038]">pure luxury.</em>
//             </h1>

//             {/* Paragraph */}
//             <p className="text-base sm:text-xl text-white/80 font-light leading-relaxed max-w-2xl">
//               Specialized in high-thread curtains, architectural motorized drapes, damask jacquards, and bespoke upholstery. Thoughtfully woven in Panipat by <strong className="text-white font-medium">Swastik Home Decor</strong> for homes and spaces that demand distinction.
//             </p>

//             {/* Action Buttons */}
//             <div className="flex flex-wrap items-center gap-4 pt-2">
//               <a 
//                 href="#simulator" 
//                 className="bg-[#C5A038] hover:bg-[#B8860B] text-[#121212] font-extrabold px-8 py-4 rounded-full text-xs uppercase tracking-[0.2em] flex items-center space-x-3 transition-all transform hover:scale-105 shadow-xl"
//               >
//                 <span>Launch Drapery Studio</span>
//                 <ArrowUpRight className="w-4 h-4" />
//               </a>

//               <a 
//                 href="#calculator" 
//                 className="bg-white/10 hover:bg-white/20 text-white font-bold px-8 py-4 rounded-full text-xs uppercase tracking-[0.2em] border border-white/30 backdrop-blur-md transition-all"
//               >
//                 Estimate Custom Price
//               </a>
//             </div>

//             {/* Logo Sub-Brand Credit */}
//             <div className="pt-8 border-t border-white/15 flex items-center space-x-6 text-xs text-white/70">
//               <div>
//                 <span className="text-[#C5A038] font-bold uppercase tracking-widest block text-[10px]">Pillar of Quality</span>
//                 <span>Swastik Home Decor Legacy</span>
//               </div>
//               <div className="h-8 w-px bg-white/20" />
//               <div>
//                 <span className="text-[#C5A038] font-bold uppercase tracking-widest block text-[10px]">Worldwide Export</span>
//                 <span>Commercial & Residential Grade</span>
//               </div>
//             </div>

//           </div>
//         </div>

//         {/* Bottom Gold Line */}
//         <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#C5A038] via-[#DAA520] to-[#B8860B] z-10" />
//       </section>

//       {/* FEATURE BAR: BRAND USPs */}
//       <section className="bg-[#F4EFE6] border-b border-[#C5A038]/20 py-8">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            
//             <div className="flex items-center space-x-3">
//               <span className="font-serif text-3xl font-bold text-[#C5A038]">01</span>
//               <div>
//                 <p className="font-serif text-lg font-bold text-[#121212]">Panipat Heritage</p>
//                 <p className="text-[10px] uppercase tracking-wider text-[#121212]/60">India's Renowned Textile Hub</p>
//               </div>
//             </div>

//             <div className="flex items-center space-x-3">
//               <span className="font-serif text-3xl font-bold text-[#C5A038]">02</span>
//               <div>
//                 <p className="font-serif text-lg font-bold text-[#121212]">B2B & Trade First</p>
//                 <p className="text-[10px] uppercase tracking-wider text-[#121212]/60">Architect & Hotel Partners</p>
//               </div>
//             </div>

//             <div className="flex items-center space-x-3">
//               <span className="font-serif text-3xl font-bold text-[#C5A038]">03</span>
//               <div>
//                 <p className="font-serif text-lg font-bold text-[#121212]">Bespoke Tailoring</p>
//                 <p className="text-[10px] uppercase tracking-wider text-[#121212]/60">Weighted Hems & Memory Pleats</p>
//               </div>
//             </div>

//             <div className="flex items-center space-x-3">
//               <span className="font-serif text-3xl font-bold text-[#C5A038]">04</span>
//               <div>
//                 <p className="font-serif text-lg font-bold text-[#121212]">Smart Automation</p>
//                 <p className="text-[10px] uppercase tracking-wider text-[#121212]/60">Somfy Track Integration</p>
//               </div>
//             </div>

//           </div>
//         </div>
//       </section>

//       {/* FEATURE 1: INTERACTIVE DRAPERY ROOM SIMULATOR */}
//       <section id="simulator" className="py-24 bg-[#FAF8F2] relative">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
//           <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
//             <span className="text-xs font-bold tracking-[0.25em] uppercase text-[#C5A038] block">Interactive Living Room Studio</span>
//             <h2 className="font-serif text-4xl sm:text-5xl text-[#121212]">Experience Drapery in Real Light</h2>
//             <p className="text-base text-[#121212]/70 font-light">
//               Toggle natural sun angles, pleat styles, and fabric opacities to observe how Aesthetic Homez drapes modify the ambiance of your sanctuary.
//             </p>
//           </div>

//           <div className="grid lg:grid-cols-12 gap-8 items-start">
            
//             {/* Visualizer Canvas Frame */}
//             <div className="lg:col-span-8 bg-[#121212] rounded-3xl overflow-hidden shadow-2xl relative border border-[#C5A038]/30 min-h-[480px] sm:min-h-[580px] flex flex-col justify-between p-6">
              
//               {/* Room Canvas Layer */}
//               <div className="absolute inset-0 z-0">
//                 {/* Room Image Backdrop */}
//                 <img 
//                   src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80" 
//                   alt="Aesthetic Homez Drapery Salon Preview" 
//                   className="w-full h-full object-cover transition-all duration-700"
//                 />

//                 {/* Lighting Atmosphere Filters */}
//                 <div 
//                   className={`absolute inset-0 transition-all duration-700 ${
//                     roomLighting === 'daylight' ? 'bg-amber-50/10 backdrop-brightness-110' :
//                     roomLighting === 'golden' ? 'bg-gradient-to-r from-amber-600/35 via-orange-500/25 to-amber-900/40 backdrop-brightness-95' :
//                     'bg-slate-950/65 backdrop-brightness-75'
//                   }`}
//                 />

//                 {/* Simulated Curtain Panel */}
//                 <div 
//                   className={`absolute inset-y-0 right-0 transition-all duration-700 flex justify-end overflow-hidden ${
//                     isCurtainClosed ? 'w-full sm:w-4/5' : 'w-1/4'
//                   }`}
//                 >
//                   <div 
//                     className="h-full w-full shadow-2xl transition-all duration-500 relative"
//                     style={{
//                       backgroundColor: activeFabric.colorHex,
//                       opacity: curtainOpacity / 100,
//                       backgroundImage: `repeating-linear-gradient(90deg, rgba(0,0,0,0.18), rgba(0,0,0,0.18) 14px, transparent 14px, transparent 32px)`
//                     }}
//                   >
//                     {/* Pleat Fold Gradient Overlay */}
//                     <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/40" />
                    
//                     {/* Top Pleat Header Graphics */}
//                     <div className="absolute top-0 left-0 right-0 h-12 bg-black/40 border-b border-[#C5A038]/50 flex items-center justify-around px-4">
//                       {Array.from({ length: 14 }).map((_, i) => (
//                         <div key={i} className="w-2.5 h-5 bg-[#C5A038] rounded-t-sm shadow-md" />
//                       ))}
//                     </div>

//                     {/* Weighted Hem Bar at Bottom */}
//                     <div className="absolute bottom-0 left-0 right-0 h-3 bg-black/50 border-t border-[#C5A038]/40" />
//                   </div>
//                 </div>
//               </div>

//               {/* Top Control Overlay HUD */}
//               <div className="relative z-10 flex flex-wrap items-center justify-between gap-4 bg-[#121212]/80 backdrop-blur-md p-4 rounded-2xl border border-white/10">
//                 <div className="flex items-center space-x-2">
//                   <span className="text-xs uppercase tracking-widest text-[#C5A038] font-bold">Atmosphere:</span>
//                   <div className="flex bg-[#121212] p-1 rounded-xl border border-white/10">
//                     <button 
//                       onClick={() => setRoomLighting('daylight')}
//                       className={`px-3 py-1.5 rounded-lg text-xs font-medium flex items-center space-x-1.5 transition-all ${roomLighting === 'daylight' ? 'bg-[#C5A038] text-[#121212] font-bold' : 'text-white/70 hover:text-white'}`}
//                     >
//                       <Sun className="w-3.5 h-3.5" />
//                       <span>Daylight</span>
//                     </button>
//                     <button 
//                       onClick={() => setRoomLighting('golden')}
//                       className={`px-3 py-1.5 rounded-lg text-xs font-medium flex items-center space-x-1.5 transition-all ${roomLighting === 'golden' ? 'bg-[#C5A038] text-[#121212] font-bold' : 'text-white/70 hover:text-white'}`}
//                     >
//                       <Sunset className="w-3.5 h-3.5" />
//                       <span>Golden Hour</span>
//                     </button>
//                     <button 
//                       onClick={() => setRoomLighting('evening')}
//                       className={`px-3 py-1.5 rounded-lg text-xs font-medium flex items-center space-x-1.5 transition-all ${roomLighting === 'evening' ? 'bg-[#C5A038] text-[#121212] font-bold' : 'text-white/70 hover:text-white'}`}
//                     >
//                       <Moon className="w-3.5 h-3.5" />
//                       <span>Evening</span>
//                     </button>
//                   </div>
//                 </div>

//                 <button 
//                   onClick={() => setIsCurtainClosed(!isCurtainClosed)}
//                   className="px-4 py-2 bg-[#C5A038] text-[#121212] text-xs uppercase tracking-wider font-extrabold rounded-xl border border-white/20 hover:bg-[#B8860B] transition"
//                 >
//                   {isCurtainClosed ? 'Draw Open Drapes' : 'Close Drapes Fully'}
//                 </button>
//               </div>

//               {/* Bottom Specs Overlay HUD */}
//               <div className="relative z-10 bg-[#121212]/85 backdrop-blur-md p-4 rounded-2xl border border-white/10 flex flex-wrap items-center justify-between text-xs text-white/80 gap-4">
//                 <div>
//                   <span className="text-white/50 block text-[10px] uppercase tracking-widest">Active Fabric Spec</span>
//                   <span className="font-serif text-base text-[#C5A038] font-bold">{activeFabric.name}</span>
//                   <span className="text-white/60 text-[11px] ml-2">({activeFabric.composition})</span>
//                 </div>

//                 <div className="flex items-center space-x-6">
//                   <div>
//                     <span className="text-white/50 block text-[10px] uppercase">Acoustic Shield</span>
//                     <span className="font-semibold text-white">{activeFabric.acousticRating}</span>
//                   </div>
//                   <div>
//                     <span className="text-white/50 block text-[10px] uppercase">Weight Density</span>
//                     <span className="font-semibold text-white">{activeFabric.weight}</span>
//                   </div>
//                 </div>
//               </div>

//             </div>

//             {/* Customization Control Panel */}
//             <div className="lg:col-span-4 bg-[#F4EFE6] p-6 rounded-3xl border border-[#C5A038]/30 shadow-xl space-y-6">
              
//               <h3 className="font-serif text-2xl text-[#121212] border-b border-[#C5A038]/30 pb-3 flex items-center justify-between">
//                 <span>Drapery Configurator</span>
//                 <Sliders className="w-5 h-5 text-[#C5A038]" />
//               </h3>

//               {/* Fabric Color/Texture Selector */}
//               <div className="space-y-3">
//                 <label className="text-xs font-bold uppercase tracking-wider text-[#121212] block">
//                   Select Fabric Textile:
//                 </label>
//                 <div className="grid grid-cols-2 gap-2">
//                   {FABRICS.map((fab) => (
//                     <button
//                       key={fab.id}
//                       onClick={() => {
//                         setActiveFabric(fab);
//                         setCurtainOpacity(fab.opacity);
//                       }}
//                       className={`p-3 rounded-xl border text-left transition-all ${
//                         activeFabric.id === fab.id 
//                           ? 'border-[#C5A038] bg-[#C5A038]/15 ring-2 ring-[#C5A038]' 
//                           : 'border-black/10 hover:border-black/30 bg-white'
//                       }`}
//                     >
//                       <div className="flex items-center space-x-2">
//                         <span className="w-4 h-4 rounded-full border border-black/20 shrink-0 shadow-sm" style={{ backgroundColor: fab.colorHex }} />
//                         <span className="text-xs font-bold truncate text-[#121212]">{fab.name}</span>
//                       </div>
//                       <span className="text-[10px] text-black/50 block mt-1">{fab.category}</span>
//                     </button>
//                   ))}
//                 </div>
//               </div>

//               {/* Pleat Header Selector */}
//               <div className="space-y-3">
//                 <label className="text-xs font-bold uppercase tracking-wider text-[#121212] block">
//                   Heading Pleat Style:
//                 </label>
//                 <div className="space-y-2">
//                   {PLEAT_STYLES.map((pleat) => (
//                     <div
//                       key={pleat.id}
//                       onClick={() => setActivePleat(pleat)}
//                       className={`p-3 rounded-xl border cursor-pointer transition-all ${
//                         activePleat.id === pleat.id
//                           ? 'border-[#C5A038] bg-[#C5A038]/10 font-bold'
//                           : 'border-black/10 hover:border-black/20 bg-white'
//                       }`}
//                     >
//                       <div className="flex items-center justify-between">
//                         <span className="text-xs font-bold text-[#121212]">{pleat.name}</span>
//                         <span className="text-[10px] bg-[#C5A038]/20 text-[#121212] px-2 py-0.5 rounded-full font-black">
//                           {pleat.fullness}x Fullness
//                         </span>
//                       </div>
//                       <p className="text-[11px] text-black/60 mt-1 leading-snug">{pleat.description}</p>
//                     </div>
//                   ))}
//                 </div>
//               </div>

//               {/* Opacity Slider */}
//               <div className="space-y-2 pt-2">
//                 <div className="flex justify-between items-center text-xs">
//                   <span className="font-bold uppercase tracking-wider text-[#121212]">Light Filtering Opacity</span>
//                   <span className="font-mono text-[#C5A038] font-bold">{curtainOpacity}% Blackout</span>
//                 </div>
//                 <input 
//                   type="range" 
//                   min="20" 
//                   max="100" 
//                   value={curtainOpacity}
//                   onChange={(e) => setCurtainOpacity(Number(e.target.value))}
//                   className="w-full accent-[#C5A038] cursor-pointer"
//                 />
//                 <div className="flex justify-between text-[10px] text-black/40">
//                   <span>Sheer Ambient Light</span>
//                   <span>100% Eco Blackout</span>
//                 </div>
//               </div>

//               {/* Add Swatch Action */}
//               <button
//                 onClick={() => toggleSwatch(activeFabric.id)}
//                 className="w-full py-3.5 rounded-xl bg-[#121212] hover:bg-[#252525] text-[#C5A038] font-bold text-xs uppercase tracking-widest transition flex items-center justify-center space-x-2 border border-[#C5A038]/50 shadow-lg"
//               >
//                 <Layers className="w-4 h-4" />
//                 <span>
//                   {selectedSwatches.includes(activeFabric.id) ? 'In Swatch Kit ✓' : '+ Add Selected Swatch'}
//                 </span>
//               </button>

//             </div>

//           </div>

//         </div>
//       </section>

//       {/* FEATURE 2: MASTER COLLECTIONS SHOWCASE */}
//       <section id="collections" className="py-24 bg-[#FAF8F2]">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
//           <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 border-b border-[#C5A038]/20 pb-8">
//             <div className="space-y-3 max-w-2xl">
//               <span className="text-xs font-bold tracking-[0.25em] uppercase text-[#C5A038] block">Curated Textile Line</span>
//               <h2 className="font-serif text-4xl sm:text-5xl text-[#121212]">Master Drapery Collections</h2>
//               <p className="text-base text-[#121212]/70 font-light">
//                 Hand-selected thread lines woven in Panipat mills for grand villas, penthouses, and luxury hotels.
//               </p>
//             </div>

//             {/* Search Input */}
//             <div className="relative min-w-[280px]">
//               <Search className="w-4 h-4 absolute left-3.5 top-3.5 text-black/40" />
//               <input 
//                 type="text" 
//                 placeholder="Search silk, velvet, sheer..." 
//                 value={searchQuery}
//                 onChange={(e) => setSearchQuery(e.target.value)}
//                 className="w-full pl-10 pr-4 py-2.5 rounded-full bg-white border border-black/15 text-xs text-[#121212] focus:outline-none focus:border-[#C5A038]"
//               />
//             </div>
//           </div>

//           {/* Category Tabs */}
//           <div className="flex flex-wrap gap-2 mb-10">
//             {categories.map((cat) => (
//               <button
//                 key={cat}
//                 onClick={() => setSelectedCategory(cat)}
//                 className={`px-5 py-2 rounded-full text-xs font-bold tracking-wider uppercase transition-all ${
//                   selectedCategory === cat 
//                     ? 'bg-[#121212] text-[#C5A038] shadow-md border border-[#C5A038]' 
//                     : 'bg-white text-black/70 hover:bg-[#F4EFE6] border border-black/10'
//                 }`}
//               >
//                 {cat}
//               </button>
//             ))}
//           </div>

//           {/* Fabric Cards Grid */}
//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {filteredFabrics.map((fabric) => (
//               <div 
//                 key={fabric.id}
//                 className="group bg-white rounded-3xl overflow-hidden border border-[#C5A038]/20 shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col justify-between"
//               >
//                 <div>
//                   {/* Card Image Header */}
//                   <div className="relative h-72 overflow-hidden">
//                     <img 
//                       src={fabric.image} 
//                       alt={fabric.name} 
//                       className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
//                     />
//                     <div className="absolute top-4 left-4 bg-[#121212] text-[#C5A038] text-[10px] uppercase font-bold tracking-widest px-3.5 py-1.5 rounded-full border border-[#C5A038]">
//                       {fabric.tag}
//                     </div>
//                     <button 
//                       onClick={() => setQuickViewFabric(fabric)}
//                       className="absolute bottom-4 right-4 bg-white/90 hover:bg-white text-[#121212] p-2.5 rounded-full shadow-lg transition opacity-0 group-hover:opacity-100 flex items-center space-x-1 text-xs font-bold px-3"
//                     >
//                       <Eye className="w-3.5 h-3.5 text-[#C5A038]" />
//                       <span>Quick View</span>
//                     </button>
//                   </div>

//                   {/* Card Body */}
//                   <div className="p-6 space-y-4">
//                     <div className="flex justify-between items-start">
//                       <div>
//                         <span className="text-[10px] uppercase tracking-widest font-bold text-[#C5A038] block">{fabric.category}</span>
//                         <h3 className="font-serif text-2xl font-bold text-[#121212] mt-0.5">{fabric.name}</h3>
//                       </div>
//                       <div className="text-right">
//                         <span className="font-mono text-base font-bold text-[#121212] block">
//                           {currency === 'INR' ? `₹${fabric.priceInr}` : `$${fabric.priceUsd}`}
//                         </span>
//                         <span className="text-[9px] text-black/50 uppercase">Per Meter</span>
//                       </div>
//                     </div>

//                     <p className="text-xs text-[#121212]/70 leading-relaxed font-light">
//                       {fabric.description}
//                     </p>

//                     <div className="pt-3 border-t border-black/5 space-y-2 text-[11px] text-black/70">
//                       <div className="flex justify-between">
//                         <span className="text-black/50">Composition:</span>
//                         <span className="font-medium">{fabric.composition}</span>
//                       </div>
//                       <div className="flex justify-between">
//                         <span className="text-black/50">Acoustic Shield:</span>
//                         <span className="font-medium">{fabric.acousticRating}</span>
//                       </div>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Card Action Footer */}
//                 <div className="p-6 pt-0 flex gap-3">
//                   <button 
//                     onClick={() => toggleSwatch(fabric.id)}
//                     className="flex-1 py-3 bg-[#F4EFE6] hover:bg-[#121212] hover:text-[#C5A038] text-[#121212] text-xs uppercase tracking-wider font-bold rounded-xl transition duration-300 flex items-center justify-center space-x-2 border border-[#C5A038]/30"
//                   >
//                     <span>{selectedSwatches.includes(fabric.id) ? 'In Swatch Box ✓' : '+ Swatch'}</span>
//                   </button>

//                   <button 
//                     onClick={() => {
//                       setActiveFabric(fabric);
//                       window.location.hash = 'simulator';
//                     }}
//                     className="py-3 px-4 bg-[#C5A038] hover:bg-[#B8860B] text-[#121212] text-xs font-bold rounded-xl transition"
//                     title="Simulate in Room"
//                   >
//                     <Play className="w-4 h-4 fill-current" />
//                   </button>
//                 </div>

//               </div>
//             ))}
//           </div>

//         </div>
//       </section>

//       {/* FEATURE 3: CUSTOM CURTAIN ESTIMATOR */}
//       <section id="calculator" className="py-24 bg-[#F4EFE6]">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
//           <div className="grid lg:grid-cols-12 gap-12 items-center">
            
//             {/* Left Inputs Box */}
//             <div className="lg:col-span-7 bg-[#FAF8F2] p-8 sm:p-10 rounded-3xl border border-[#C5A038]/30 shadow-xl space-y-8">
              
//               <div>
//                 <span className="text-xs font-bold tracking-[0.25em] uppercase text-[#C5A038] block mb-1">Live Valuation Engine</span>
//                 <h2 className="font-serif text-3xl sm:text-4xl text-[#121212]">Custom Drapery Estimator</h2>
//                 <p className="text-xs text-[#121212]/60 mt-1">Configure room measurements for an instant Panipat atelier quote.</p>
//               </div>

//               {/* Window Measurement Sliders */}
//               <div className="grid sm:grid-cols-2 gap-6">
//                 <div className="space-y-2">
//                   <label className="text-xs font-bold uppercase tracking-wider text-[#121212] flex justify-between">
//                     <span>Window Width (Feet)</span>
//                     <span className="text-[#C5A038] font-mono font-bold">{winWidthFeet} ft</span>
//                   </label>
//                   <input 
//                     type="range" 
//                     min="4" 
//                     max="30" 
//                     value={winWidthFeet} 
//                     onChange={(e) => setWinWidthFeet(Number(e.target.value))}
//                     className="w-full accent-[#C5A038]"
//                   />
//                   <span className="text-[10px] text-black/40 block">Covers {Math.round(winWidthFeet * 30.48)} cm wall span</span>
//                 </div>

//                 <div className="space-y-2">
//                   <label className="text-xs font-bold uppercase tracking-wider text-[#121212] flex justify-between">
//                     <span>Drop Height (Feet)</span>
//                     <span className="text-[#C5A038] font-mono font-bold">{winHeightFeet} ft</span>
//                   </label>
//                   <input 
//                     type="range" 
//                     min="5" 
//                     max="20" 
//                     value={winHeightFeet} 
//                     onChange={(e) => setWinHeightFeet(Number(e.target.value))}
//                     className="w-full accent-[#C5A038]"
//                   />
//                   <span className="text-[10px] text-black/40 block">Ceiling to floor drop height</span>
//                 </div>
//               </div>

//               {/* Pleat Density Multiplier */}
//               <div className="space-y-3">
//                 <label className="text-xs font-bold uppercase tracking-wider text-[#121212] block">
//                   Pleat Fullness Ratio:
//                 </label>
//                 <div className="grid grid-cols-3 gap-3">
//                   {[
//                     { ratio: 1.5, label: '1.5x Standard', desc: 'Minimal folds' },
//                     { ratio: 2.0, label: '2.0x Deluxe', desc: 'Rich full volume' },
//                     { ratio: 2.5, label: '2.5x Ultra Luxury', desc: 'Deep French pleats' }
//                   ].map((p) => (
//                     <button
//                       key={p.ratio}
//                       onClick={() => setPleatDensity(p.ratio)}
//                       className={`p-3 rounded-xl border text-left transition-all ${
//                         pleatDensity === p.ratio 
//                           ? 'border-[#C5A038] bg-[#C5A038]/15 ring-1 ring-[#C5A038] font-bold' 
//                           : 'border-black/10 bg-white hover:border-black/30'
//                       }`}
//                     >
//                       <span className="text-xs font-bold text-[#121212] block">{p.label}</span>
//                       <span className="text-[10px] text-black/50 block mt-0.5">{p.desc}</span>
//                     </button>
//                   ))}
//                 </div>
//               </div>

//               {/* Lining Selection */}
//               <div className="space-y-3">
//                 <label className="text-xs font-bold uppercase tracking-wider text-[#121212] block">
//                   Thermal & Light Lining:
//                 </label>
//                 <div className="grid grid-cols-3 gap-3">
//                   {[
//                     { id: 'unlined', label: 'Unlined Sheer' },
//                     { id: 'sateen', label: 'Cotton Sateen' },
//                     { id: 'blackout', label: '100% Blackout' }
//                   ].map((line) => (
//                     <button
//                       key={line.id}
//                       onClick={() => setLiningOption(line.id)}
//                       className={`p-3 rounded-xl border text-left transition-all ${
//                         liningOption === line.id 
//                           ? 'border-[#C5A038] bg-[#C5A038]/15 ring-1 ring-[#C5A038] font-bold' 
//                           : 'border-black/10 bg-white hover:border-black/30'
//                       }`}
//                     >
//                       <span className="text-xs font-bold text-[#121212] block">{line.label}</span>
//                     </button>
//                   ))}
//                 </div>
//               </div>

//               {/* Motorization Switch */}
//               <div className="flex items-center justify-between p-4 bg-white rounded-2xl border border-[#C5A038]/30">
//                 <div>
//                   <span className="text-xs font-bold uppercase tracking-wider text-[#121212] block">Somfy Motorized Track System</span>
//                   <span className="text-[11px] text-black/60 block">Includes quiet electric motor, remote control, and home app pairing.</span>
//                 </div>
//                 <input 
//                   type="checkbox" 
//                   checked={isMotorized}
//                   onChange={(e) => setIsMotorized(e.target.checked)}
//                   className="w-5 h-5 accent-[#C5A038] cursor-pointer"
//                 />
//               </div>

//             </div>

//             {/* Right Summary Output HUD */}
//             <div className="lg:col-span-5 bg-[#121212] text-[#FAF8F2] p-8 sm:p-10 rounded-3xl border border-[#C5A038] shadow-2xl space-y-8">
              
//               <div className="space-y-6">
//                 <div className="flex items-center justify-between border-b border-[#C5A038]/40 pb-4">
//                   <span className="text-xs uppercase tracking-widest text-[#C5A038] font-bold">Atelier Valuation</span>
//                   <span className="text-[10px] bg-[#C5A038] text-[#121212] font-black px-2.5 py-0.5 rounded-full">Panipat Tailored</span>
//                 </div>

//                 <div className="space-y-3 text-xs text-white/80">
//                   <div className="flex justify-between">
//                     <span className="text-white/60">Selected Fabric:</span>
//                     <span className="font-bold text-[#C5A038]">{activeFabric.name}</span>
//                   </div>
//                   <div className="flex justify-between">
//                     <span className="text-white/60">Window Dimensions:</span>
//                     <span>{winWidthFeet} ft Width × {winHeightFeet} ft Drop</span>
//                   </div>
//                   <div className="flex justify-between">
//                     <span className="text-white/60">Pleat Multiplier:</span>
//                     <span>{pleatDensity}x Full Density</span>
//                   </div>
//                   <div className="flex justify-between">
//                     <span className="text-white/60">Lining Spec:</span>
//                     <span className="capitalize">{liningOption}</span>
//                   </div>
//                   <div className="flex justify-between">
//                     <span className="text-white/60">Motorized Control:</span>
//                     <span>{isMotorized ? 'Somfy Smart Track Included' : 'Manual Baton Draw'}</span>
//                   </div>
//                 </div>

//                 <div className="pt-6 border-t border-[#C5A038]/40">
//                   <span className="text-[10px] uppercase tracking-widest text-[#C5A038] block font-bold">Total Estimated Cost</span>
//                   <div className="flex items-baseline space-x-2 mt-1">
//                     <span className="font-serif text-5xl font-bold text-white">
//                       {currency === 'INR' ? `₹${calculatedEstimate.toLocaleString('en-IN')}` : `$${calculatedEstimate}`}
//                     </span>
//                     <span className="text-xs text-white/50">({currency})</span>
//                   </div>
//                   <p className="text-[10px] text-white/50 mt-2 italic">
//                     *Includes hand tailoring, weighted hem zinc chain, and Panipat mill dispatch.
//                   </p>
//                 </div>
//               </div>

//               <div className="space-y-3">
//                 <button 
//                   onClick={() => setIsSwatchDrawerOpen(true)}
//                   className="w-full bg-[#C5A038] hover:bg-[#B8860B] text-[#121212] font-extrabold py-4 rounded-xl text-xs uppercase tracking-[0.2em] shadow-xl transition flex items-center justify-center space-x-2"
//                 >
//                   <ShoppingBag className="w-4 h-4" />
//                   <span>Order Complimentary Swatch Box</span>
//                 </button>
//                 <a 
//                   href="#designer-portal"
//                   className="w-full block text-center py-3 border border-white/20 text-white hover:bg-white/10 rounded-xl text-xs uppercase tracking-wider font-semibold transition"
//                 >
//                   Request On-Site Laser Survey
//                 </a>
//               </div>

//             </div>

//           </div>

//         </div>
//       </section>

//       {/* FEATURE 4: PANIPAT HERITAGE & SWASTIK HOME DECOR */}
//       <section id="heritage" className="py-24 bg-[#121212] text-[#FAF8F2] relative overflow-hidden">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
//           <div className="max-w-3xl mb-16 space-y-4">
//             <span className="text-xs font-bold tracking-[0.25em] uppercase text-[#C5A038] block">Heritage & Master Tailoring</span>
//             <h2 className="font-serif text-4xl sm:text-5xl text-white">Panipat Craftsmanship by Swastik Home Decor</h2>
//             <p className="text-base text-white/70 font-light">
//               Panipat is globally revered as India's textile capital. At Aesthetic Homez, we unite generations of master loom weaving with modern Italian finish lines to deliver world-class window drapes.
//             </p>
//           </div>

//           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            
//             <div className="bg-[#1A1A1A] p-8 rounded-2xl border border-[#C5A038]/30 relative group hover:border-[#C5A038] transition-all">
//               <span className="font-serif text-5xl text-[#C5A038]/30 group-hover:text-[#C5A038] transition font-bold block mb-4">01</span>
//               <div className="w-10 h-10 rounded-xl bg-[#C5A038] flex items-center justify-center text-[#121212] mb-6">
//                 <Ruler className="w-5 h-5" />
//               </div>
//               <h3 className="font-serif text-xl font-bold mb-2 text-white">Laser Window Survey</h3>
//               <p className="text-xs text-white/70 font-light leading-relaxed">
//                 Millimeter-accurate laser measurements account for window drop variations, ceiling recesses, and rod placement.
//               </p>
//             </div>

//             <div className="bg-[#1A1A1A] p-8 rounded-2xl border border-[#C5A038]/30 relative group hover:border-[#C5A038] transition-all">
//               <span className="font-serif text-5xl text-[#C5A038]/30 group-hover:text-[#C5A038] transition font-bold block mb-4">02</span>
//               <div className="w-10 h-10 rounded-xl bg-[#C5A038] flex items-center justify-center text-[#121212] mb-6">
//                 <Compass className="w-5 h-5" />
//               </div>
//               <h3 className="font-serif text-xl font-bold mb-2 text-white">Shuttle Loom Weaving</h3>
//               <p className="text-xs text-white/70 font-light leading-relaxed">
//                 Yarns are spun and woven in our Panipat facilities to achieve optimal drape density, color fastness, and acoustic dampening.
//               </p>
//             </div>

//             <div className="bg-[#1A1A1A] p-8 rounded-2xl border border-[#C5A038]/30 relative group hover:border-[#C5A038] transition-all">
//               <span className="font-serif text-5xl text-[#C5A038]/30 group-hover:text-[#C5A038] transition font-bold block mb-4">03</span>
//               <div className="w-10 h-10 rounded-xl bg-[#C5A038] flex items-center justify-center text-[#121212] mb-6">
//                 <Scissors className="w-5 h-5" />
//               </div>
//               <h3 className="font-serif text-xl font-bold mb-2 text-white">Weighted Hem Tailoring</h3>
//               <p className="text-xs text-white/70 font-light leading-relaxed">
//                 Zinc lead weights inserted in double-turned bottom hems guarantee perfectly straight vertical fall lines without flaring.
//               </p>
//             </div>

//             <div className="bg-[#1A1A1A] p-8 rounded-2xl border border-[#C5A038]/30 relative group hover:border-[#C5A038] transition-all">
//               <span className="font-serif text-5xl text-[#C5A038]/30 group-hover:text-[#C5A038] transition font-bold block mb-4">04</span>
//               <div className="w-10 h-10 rounded-xl bg-[#C5A038] flex items-center justify-center text-[#121212] mb-6">
//                 <Award className="w-5 h-5" />
//               </div>
//               <h3 className="font-serif text-xl font-bold mb-2 text-white">White-Glove Steam Fit</h3>
//               <p className="text-xs text-white/70 font-light leading-relaxed">
//                 Our technicians install tracks, program motorized controls, and hand-steam pleat memory folds on site.
//               </p>
//             </div>

//           </div>

//         </div>
//       </section>

//       {/* FEATURE 5: B2B ARCHITECT & DESIGNER PORTAL */}
//       <section id="designer-portal" className="py-24 bg-[#FAF8F2]">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
//           <div className="grid lg:grid-cols-2 gap-12 items-center">
            
//             <div className="space-y-6">
//               <div className="inline-flex items-center space-x-2 bg-[#121212] text-[#C5A038] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest border border-[#C5A038]">
//                 <Building2 className="w-4 h-4" />
//                 <span>Trade & Hotel Studio Program</span>
//               </div>

//               <h2 className="font-serif text-4xl sm:text-5xl text-[#121212] leading-tight">
//                 Architect & Interior Designer Collaboration
//               </h2>

//               <p className="text-base text-[#121212]/70 font-light leading-relaxed">
//                 Aesthetic Homez (By Swastik Home Decor) offers trade-exclusive pricing, direct Panipat mill sample binders, flame-retardant compliance certificates, and technical CAD track schedules.
//               </p>

//               <div className="grid sm:grid-cols-2 gap-4 pt-2 text-xs">
//                 <div className="flex items-start space-x-3 p-3 bg-white rounded-xl border border-black/10">
//                   <CheckCircle2 className="w-4 h-4 text-[#C5A038] shrink-0 mt-0.5" />
//                   <div>
//                     <span className="font-bold block text-[#121212]">Trade Discount Tiers</span>
//                     <span className="text-[11px] text-black/50">Volume pricing for multi-unit projects.</span>
//                   </div>
//                 </div>

//                 <div className="flex items-start space-x-3 p-3 bg-white rounded-xl border border-black/10">
//                   <CheckCircle2 className="w-4 h-4 text-[#C5A038] shrink-0 mt-0.5" />
//                   <div>
//                     <span className="font-bold block text-[#121212]">Flame Retardant (NFPA 701)</span>
//                     <span className="text-[11px] text-black/50">Commercial hospitality safety certification.</span>
//                   </div>
//                 </div>

//                 <div className="flex items-start space-x-3 p-3 bg-white rounded-xl border border-black/10">
//                   <CheckCircle2 className="w-4 h-4 text-[#C5A038] shrink-0 mt-0.5" />
//                   <div>
//                     <span className="font-bold block text-[#121212]">Custom Pantone Weaving</span>
//                     <span className="text-[11px] text-black/50">Custom yarn dye matching in Panipat.</span>
//                   </div>
//                 </div>

//                 <div className="flex items-start space-x-3 p-3 bg-white rounded-xl border border-black/10">
//                   <CheckCircle2 className="w-4 h-4 text-[#C5A038] shrink-0 mt-0.5" />
//                   <div>
//                     <span className="font-bold block text-[#121212]">Dedicated Project Manager</span>
//                     <span className="text-[11px] text-black/50">Single point contact from survey to fit.</span>
//                   </div>
//                 </div>
//               </div>

//               {/* Inquiry Form */}
//               <div className="pt-4 space-y-3 bg-[#F4EFE6] p-6 rounded-2xl border border-[#C5A038]/30">
//                 <h4 className="font-serif text-lg font-bold text-[#121212]">Request Architect Trade Catalogue</h4>
//                 <div className="grid grid-cols-2 gap-3">
//                   <input type="text" placeholder="Full Name..." className="bg-white p-3 rounded-xl border border-black/15 text-xs text-[#121212] focus:outline-none" />
//                   <input type="text" placeholder="Firm / Studio Name..." className="bg-white p-3 rounded-xl border border-black/15 text-xs text-[#121212] focus:outline-none" />
//                 </div>
//                 <button 
//                   onClick={() => alert('Thank you! Our Panipat trade manager will contact your firm shortly with the master sample binder.')}
//                   className="w-full bg-[#121212] hover:bg-[#252525] text-[#C5A038] font-bold py-3.5 rounded-xl text-xs uppercase tracking-widest transition border border-[#C5A038]"
//                 >
//                   Submit Trade Partner Request
//                 </button>
//               </div>

//             </div>

//             {/* Visual B2B Card */}
//             <div className="relative rounded-3xl overflow-hidden border border-[#C5A038]/40 shadow-2xl h-[520px]">
//               <img 
//                 src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80" 
//                 alt="Aesthetic Homez Hospitality Project" 
//                 className="w-full h-full object-cover"
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-[#121212]/40 to-transparent flex flex-col justify-end p-8">
//                 <div className="bg-[#121212]/90 backdrop-blur-md p-6 rounded-2xl border border-[#C5A038]/40">
//                   <span className="text-[10px] uppercase font-bold tracking-widest text-[#C5A038] block">Project Spotlight</span>
//                   <h4 className="font-serif text-2xl font-bold text-white mt-1">The Royal Pavilion Resort & Spa</h4>
//                   <p className="text-xs text-white/70 mt-1 font-light">
//                     42 Suites outfitted with custom woven gold damask and Somfy motorized double-track drapes by Swastik Home Decor.
//                   </p>
//                 </div>
//               </div>
//             </div>

//           </div>

//         </div>
//       </section>

//       {/* TESTIMONIALS */}
//       <section className="py-24 bg-[#F4EFE6]">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
//           <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
//             <span className="text-xs font-bold tracking-[0.25em] uppercase text-[#C5A038] block">Client Appraisals</span>
//             <h2 className="font-serif text-4xl sm:text-5xl text-[#121212]">Words from Our Patrons</h2>
//           </div>

//           <div className="grid md:grid-cols-3 gap-8">
//             {TESTIMONIALS.map((t, idx) => (
//               <div 
//                 key={idx} 
//                 className="bg-[#FAF8F2] p-8 rounded-3xl border border-[#C5A038]/20 flex flex-col justify-between shadow-sm hover:shadow-md transition"
//               >
//                 <div className="space-y-4">
//                   <div className="flex space-x-1 text-[#C5A038]">
//                     {Array.from({ length: t.rating }).map((_, i) => (
//                       <Star key={i} className="w-4 h-4 fill-current" />
//                     ))}
//                   </div>
//                   <p className="font-serif text-lg italic text-[#121212] leading-relaxed">
//                     "{t.quote}"
//                   </p>
//                 </div>

//                 <div className="pt-6 border-t border-black/10 mt-6">
//                   <p className="font-bold text-sm text-[#121212]">{t.author}</p>
//                   <p className="text-xs text-black/60">{t.role}</p>
//                   <span className="text-[10px] uppercase tracking-widest text-[#C5A038] font-bold block mt-1">{t.location}</span>
//                 </div>
//               </div>
//             ))}
//           </div>

//         </div>
//       </section>

//       {/* FOOTER WITH ACCURATE BRANDING */}
//       <footer className="bg-[#121212] text-[#FAF8F2] border-t border-[#C5A038]/40 pt-16 pb-12">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            
//             {/* Brand Column */}
//             <div className="lg:col-span-2 space-y-4">
//               <div className="flex items-center space-x-3">
//                 <span className="font-serif text-3xl font-bold text-[#C5A038]">A</span>
//                 <div className="w-[2px] h-8 bg-[#C5A038]" />
//                 <span className="font-serif text-3xl font-bold text-white">H</span>
//                 <div className="flex flex-col pl-2 border-l border-white/20">
//                   <span className="font-serif text-lg font-bold tracking-widest text-white uppercase">Aesthetic Homez</span>
//                   <span className="text-[9px] text-[#C5A038] uppercase tracking-widest font-semibold">By Swastik Home Decor</span>
//                 </div>
//               </div>

//               <p className="text-xs text-white/60 font-light max-w-sm leading-relaxed">
//                 Brings You Close To Luxury. Specialized in bespoke luxury curtains, architectural motorized drapes, and rich upholstery crafted in Panipat, India.
//               </p>

//               <div className="pt-2 text-xs text-[#C5A038] font-bold space-x-2">
//                 <span>Panipat Mill Atelier</span> · <span>Pan-India Installation</span>
//               </div>
//             </div>

//             {/* Links Column 1 */}
//             <div className="space-y-3">
//               <p className="text-xs font-bold uppercase tracking-widest text-[#C5A038]">Collections</p>
//               <ul className="space-y-2 text-xs text-white/70 font-light">
//                 <li><a href="#collections" className="hover:text-white transition">Imperial Gold Damask</a></li>
//                 <li><a href="#collections" className="hover:text-white transition">Panipat Raw Linen Sheers</a></li>
//                 <li><a href="#collections" className="hover:text-white transition">Royal Emerald Velvet</a></li>
//                 <li><a href="#collections" className="hover:text-white transition">Onyx Acoustic Blackout</a></li>
//               </ul>
//             </div>

//             {/* Links Column 2 */}
//             <div className="space-y-3">
//               <p className="text-xs font-bold uppercase tracking-widest text-[#C5A038]">Interactive Tools</p>
//               <ul className="space-y-2 text-xs text-white/70 font-light">
//                 <li><a href="#simulator" className="hover:text-white transition">Drapery Room Studio</a></li>
//                 <li><a href="#calculator" className="hover:text-white transition">Custom Price Calculator</a></li>
//                 <li><a href="#designer-portal" className="hover:text-white transition">Architect Trade Portal</a></li>
//                 <li><a href="#heritage" className="hover:text-white transition">Panipat Process Guide</a></li>
//               </ul>
//             </div>

//             {/* Contact Column */}
//             <div className="space-y-3">
//               <p className="text-xs font-bold uppercase tracking-widest text-[#C5A038]">Panipat Office</p>
//               <p className="text-xs text-white/60 font-light leading-relaxed">
//                 Swastik Home Decor Complex, Grand Trunk Road, Panipat, Haryana 132103, India.
//               </p>
//               <p className="text-xs text-white/80 font-bold">Email: luxury@aesthetichomez.com</p>
//             </div>

//           </div>

//           <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-[11px] text-white/50 gap-4">
//             <p>© {new Date().getFullYear()} Aesthetic Homez (By Swastik Home Decor). All rights reserved.</p>
//             <p className="text-[#C5A038] font-semibold">Brings You Close To Luxury</p>
//           </div>

//         </div>
//       </footer>

//       {/* SWATCH DRAWER OVERLAY */}
//       {isSwatchDrawerOpen && (
//         <div className="fixed inset-0 z-50 flex justify-end bg-black/60 backdrop-blur-sm transition-opacity">
//           <div className="w-full max-w-md bg-[#FAF8F2] h-full shadow-2xl flex flex-col justify-between p-6 overflow-y-auto">
            
//             <div className="space-y-6">
//               <div className="flex items-center justify-between border-b border-black/10 pb-4">
//                 <div className="flex items-center space-x-2">
//                   <Layers className="w-5 h-5 text-[#C5A038]" />
//                   <h3 className="font-serif text-xl font-bold text-[#121212]">Fabric Swatch Box</h3>
//                 </div>
//                 <button 
//                   onClick={() => setIsSwatchDrawerOpen(false)}
//                   className="text-black/50 hover:text-black font-bold text-lg"
//                 >
//                   ✕
//                 </button>
//               </div>

//               <p className="text-xs text-black/70 leading-relaxed font-light">
//                 Select up to 5 complimentary fabric swatches. Delivered in an Aesthetic Homez presentation box with thread specifications and track samples.
//               </p>

//               {/* Selected Swatches List */}
//               <div className="space-y-3">
//                 <span className="text-xs font-bold uppercase tracking-wider text-black/80 block">
//                   Selected Swatches ({selectedSwatches.length}/5):
//                 </span>
//                 {selectedSwatches.map((swatchId) => {
//                   const fab = FABRICS.find(f => f.id === swatchId);
//                   if (!fab) return null;
//                   return (
//                     <div key={swatchId} className="flex items-center justify-between p-3 bg-white rounded-xl border border-black/10 shadow-sm">
//                       <div className="flex items-center space-x-3">
//                         <span className="w-6 h-6 rounded-full border border-black/20 shadow-sm" style={{ backgroundColor: fab.colorHex }} />
//                         <div>
//                           <p className="text-xs font-bold text-[#121212]">{fab.name}</p>
//                           <p className="text-[10px] text-black/50">{fab.category}</p>
//                         </div>
//                       </div>
//                       <button 
//                         onClick={() => toggleSwatch(swatchId)}
//                         className="text-xs text-red-700 hover:text-red-900 font-bold"
//                       >
//                         Remove
//                       </button>
//                     </div>
//                   );
//                 })}
//               </div>

//               {/* Add More Checklist */}
//               <div className="space-y-2 pt-2 border-t border-black/10">
//                 <span className="text-xs font-bold uppercase tracking-wider text-black/80 block">Add Other Collections:</span>
//                 {FABRICS.filter(f => !selectedSwatches.includes(f.id)).map((fab) => (
//                   <div key={fab.id} className="flex items-center justify-between p-2 text-xs hover:bg-black/5 rounded-lg transition">
//                     <span>{fab.name}</span>
//                     <button 
//                       onClick={() => toggleSwatch(fab.id)}
//                       className="text-[10px] bg-[#121212] text-[#C5A038] px-2.5 py-1 rounded uppercase font-bold"
//                     >
//                       + Add
//                     </button>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* Order Action */}
//             <div className="pt-6 border-t border-black/10 space-y-3">
//               <input 
//                 type="text" 
//                 placeholder="Shipping Address for Delivery..." 
//                 className="w-full text-xs p-3 rounded-xl border border-black/20 focus:outline-none bg-white text-[#121212]"
//               />
//               <button 
//                 onClick={() => {
//                   alert('Thank you! Your Aesthetic Homez Swatch Presentation Box request has been dispatched.');
//                   setIsSwatchDrawerOpen(false);
//                 }}
//                 className="w-full py-4 bg-[#121212] text-[#C5A038] font-bold text-xs uppercase tracking-[0.2em] rounded-xl shadow-lg border border-[#C5A038] transition"
//               >
//                 Dispatch Swatch Box
//               </button>
//             </div>

//           </div>
//         </div>
//       )}

//       {/* FABRIC QUICK VIEW MODAL */}
//       {quickViewFabric && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md">
//           <div className="bg-[#FAF8F2] rounded-3xl max-w-2xl w-full p-6 sm:p-8 relative border border-[#C5A038] shadow-2xl max-h-[90vh] overflow-y-auto space-y-6">
//             <button 
//               onClick={() => setQuickViewFabric(null)}
//               className="absolute top-4 right-4 text-black/50 hover:text-black font-bold text-xl"
//             >
//               ✕
//             </button>

//             <div className="grid sm:grid-cols-2 gap-6 items-center">
//               <div className="h-64 rounded-2xl overflow-hidden border border-[#C5A038]/30">
//                 <img src={quickViewFabric.image} alt={quickViewFabric.name} className="w-full h-full object-cover" />
//               </div>

//               <div className="space-y-3">
//                 <span className="text-[10px] uppercase font-bold tracking-widest text-[#C5A038] bg-[#121212] px-3 py-1 rounded-full">
//                   {quickViewFabric.tag}
//                 </span>
//                 <h3 className="font-serif text-3xl font-bold text-[#121212]">{quickViewFabric.name}</h3>
//                 <p className="text-xs text-black/70 font-light leading-relaxed">{quickViewFabric.description}</p>
//                 <div className="font-mono text-xl font-bold text-[#121212]">
//                   {currency === 'INR' ? `₹${quickViewFabric.priceInr}` : `$${quickViewFabric.priceUsd}`} / Meter
//                 </div>
//               </div>
//             </div>

//             <div className="bg-white p-4 rounded-2xl border border-black/10 space-y-2 text-xs">
//               <div className="flex justify-between">
//                 <span className="text-black/50">Composition:</span>
//                 <span className="font-bold text-[#121212]">{quickViewFabric.composition}</span>
//               </div>
//               <div className="flex justify-between">
//                 <span className="text-black/50">Light Blockade:</span>
//                 <span className="font-bold text-[#121212]">{quickViewFabric.opacity}% Room Darkening</span>
//               </div>
//               <div className="flex justify-between">
//                 <span className="text-black/50">Weight Density:</span>
//                 <span className="font-bold text-[#121212]">{quickViewFabric.weight}</span>
//               </div>
//               <div className="flex justify-between">
//                 <span className="text-black/50">Acoustic Absorptivity:</span>
//                 <span className="font-bold text-[#121212]">{quickViewFabric.acousticRating}</span>
//               </div>
//             </div>

//             <div className="flex gap-3">
//               <button 
//                 onClick={() => {
//                   toggleSwatch(quickViewFabric.id);
//                   setQuickViewFabric(null);
//                 }}
//                 className="flex-1 py-3 bg-[#121212] text-[#C5A038] font-bold text-xs uppercase tracking-wider rounded-xl border border-[#C5A038]"
//               >
//                 Add Swatch to Box
//               </button>
//             </div>
//           </div>
//         </div>
//       )}

//     </div>
//   );
// }






import React, { useState, useMemo } from 'react';
import { 
  Sun, Moon, Sunset, Sliders, Check, ChevronRight, Layers, Sparkles, 
  Ruler, Scissors, Shield, Star, Compass, ShoppingBag, 
  Phone, Mail, Award, Info, X, Search, Globe, ChevronDown, CheckCircle2,
  Building2, SlidersHorizontal, ArrowUpRight, Palette, Play, Eye
} from 'lucide-react';

// Fabric Collections Data based on Aesthetic Homez Catalog
const FABRICS = [
  {
    id: 'imperial-gold-damask',
    name: 'Imperial Gold Damask',
    category: 'Jacquard & Damask',
    composition: '80% Silk Filigree, 20% Cotton Weave',
    opacity: 92,
    acousticRating: 'NRC 0.75 (Medium-High)',
    weight: '450 gsm',
    colorHex: '#C5A038',
    tag: 'Signature Heritage',
    description: 'Woven on specialized Panipat jacquard looms. Features a raised relief damask pattern with subtle metallic sheen that catches natural sunlight beautifully.',
    priceInr: 3400,
    priceUsd: 110,
    image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'panipat-slub-linen',
    name: 'Panipat Raw Sheer Linen',
    category: 'Linen & Silk Sheers',
    composition: '100% Pure Organic Linen',
    opacity: 30,
    acousticRating: 'NRC 0.30 (Soft Ambient)',
    weight: '170 gsm',
    colorHex: '#E8DFCA',
    tag: 'Organic Glow',
    description: 'Lightweight slub linen that transforms harsh sunlight into an ethereal, soft warm aura while maintaining day privacy for living salons.',
    priceInr: 2200,
    priceUsd: 75,
    image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'royal-velvet-emerald',
    name: 'Royal Emerald Silk Velvet',
    category: 'Luxury Velvet',
    composition: '100% High-Density Micro-Velveteen',
    opacity: 98,
    acousticRating: 'NRC 0.88 (Acoustic Master)',
    weight: '510 gsm',
    colorHex: '#1B4332',
    tag: 'Bestseller',
    description: 'Ultra-luxurious weighted drape with rich velvet pile depth. Eliminates echoes in high-ceiling grand rooms and master bed suites.',
    priceInr: 4200,
    priceUsd: 135,
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'onyx-blackout-shield',
    name: 'Onyx Eco-Thermal Shield',
    category: 'Thermal Blackout',
    composition: 'Triple-Weave Insulated Core',
    opacity: 100,
    acousticRating: 'NRC 0.95 (Maximum Isolation)',
    weight: '530 gsm',
    colorHex: '#121212',
    tag: '100% Darkening',
    description: 'Engineered for absolute light elimination in home theaters and luxury bedrooms. Reduces room thermal energy loss by up to 35%.',
    priceInr: 2900,
    priceUsd: 95,
    image: 'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'champagne-silk-sheer',
    name: 'Champagne Voile Silk',
    category: 'Linen & Silk Sheers',
    composition: '60% Mulberry Silk, 40% Fine Voile',
    opacity: 25,
    acousticRating: 'NRC 0.20 (Light Ambient)',
    weight: '140 gsm',
    colorHex: '#F4EFE6',
    tag: 'Ultra Elegant',
    description: 'Delicate sheer with a champagne gold pearl finish. Creates graceful, floaty folds that drift effortlessly with gentle breezes.',
    priceInr: 2600,
    priceUsd: 85,
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'slate-architectural-wave',
    name: 'Slate Smart Wave Weave',
    category: 'Motorized Blinds & Waves',
    composition: 'Anti-Static Flame-Retardant Polyester Blend',
    opacity: 85,
    acousticRating: 'NRC 0.65 (Balanced)',
    weight: '390 gsm',
    colorHex: '#3A3D40',
    tag: 'Modern Minimalist',
    description: 'Designed specifically for continuous ceiling-recessed Ripplefold motorized track systems in penthouse architectural settings.',
    priceInr: 3100,
    priceUsd: 100,
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80'
  }
];

// Drapery Pleat Styles
const PLEAT_STYLES = [
  { id: 'french-pinch', name: 'French Pinch Pleat', description: 'Tailored 3-finger hand pleats permanently stitched for classic structured elegance.', fullness: 2.5 },
  { id: 'ripplefold-wave', name: 'Ripplefold / Wave', description: 'Continuous fluid S-curve folds hanging evenly on slim architectural tracks.', fullness: 2.2 },
  { id: 'roman-blind', name: 'Custom Roman Blind', description: 'Clean horizontal fabric panels that fold up smoothly in crisp tailored stacks.', fullness: 1.2 },
  { id: 'grommet-top', name: 'Brushed Gold Grommet', description: 'Contemporary deep folds running directly through hand-finished metal eyelet rings.', fullness: 2.0 },
  { id: 'french-sheer', name: 'French Tailored Sheer', description: 'Subtle double-pleated sheer header crafted for light-filtering inner curtains.', fullness: 2.5 }
];

// Testimonials
const TESTIMONIALS = [
  {
    quote: "Aesthetic Homez brought our 14,000 sq.ft. Gurgaon penthouse salon to life. The Imperial Gold Damask drapes and Somfy motorized tracks operate silently with incredible precision.",
    author: "Vikramaditya Singhania",
    role: "Managing Director, Singhania Estates",
    location: "Gurgaon & New Delhi",
    rating: 5
  },
  {
    quote: "The team at Swastik Home Decor understands luxury fabrics like no one else in Panipat. Their weighted hems ensure the silk velvet drapes hang completely straight from 14ft ceilings.",
    author: "Ananya Roy Chowdhury",
    role: "Principal Interior Architect, Design Atelier",
    location: "Mumbai",
    rating: 5
  },
  {
    quote: "We outfitted 35 luxury suites at our boutique heritage resort with Aesthetic Homez blackout and linen sheers. Superior quality, flame-retardant finish, and prompt delivery.",
    author: "Karanveer Rathore",
    role: "Director of Procurement, Heritage Resorts",
    location: "Jaipur",
    rating: 5
  }
];

export default function App() {
  // Navigation & UI States
  const [currency, setCurrency] = useState('INR'); // INR or USD
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [isSwatchDrawerOpen, setIsSwatchDrawerOpen] = useState(false);
  const [selectedSwatches, setSelectedSwatches] = useState(['imperial-gold-damask', 'panipat-slub-linen']);
  const [quickViewFabric, setQuickViewFabric] = useState(null);

  // Room Simulator States
  const [roomLighting, setRoomLighting] = useState('golden'); // daylight, golden, evening
  const [activeFabric, setActiveFabric] = useState(FABRICS[0]);
  const [activePleat, setActivePleat] = useState(PLEAT_STYLES[0]);
  const [curtainOpacity, setCurtainOpacity] = useState(85);
  const [isCurtainClosed, setIsCurtainClosed] = useState(true);

  // Price Estimator States
  const [winWidthFeet, setWinWidthFeet] = useState(10); // feet
  const [winHeightFeet, setWinHeightFeet] = useState(9); // feet
  const [pleatDensity, setPleatDensity] = useState(2.5); // 1.5, 2.0, 2.5
  const [liningOption, setLiningOption] = useState('sateen'); // unlined, sateen, blackout, acoustic
  const [isMotorized, setIsMotorized] = useState(true);

  // Calculate Price Estimate dynamically
  const calculatedEstimate = useMemo(() => {
    const totalAreaSqFt = (winWidthFeet * pleatDensity) * winHeightFeet;
    const fabricMetersNeeded = totalAreaSqFt / 10; // Approx fabric conversion
    
    const unitPrice = currency === 'INR' ? activeFabric.priceInr : activeFabric.priceUsd;
    let baseFabricCost = fabricMetersNeeded * unitPrice;

    // Lining add-on
    if (liningOption === 'sateen') baseFabricCost += fabricMetersNeeded * (currency === 'INR' ? 450 : 15);
    if (liningOption === 'blackout') baseFabricCost += fabricMetersNeeded * (currency === 'INR' ? 850 : 28);
    if (liningOption === 'acoustic') baseFabricCost += fabricMetersNeeded * (currency === 'INR' ? 1250 : 40);

    // Motorization add-on
    if (isMotorized) baseFabricCost += (currency === 'INR' ? 24000 : 320);

    return Math.round(baseFabricCost);
  }, [winWidthFeet, winHeightFeet, pleatDensity, activeFabric, liningOption, isMotorized, currency]);

  // Toggle Swatch Selection
  const toggleSwatch = (id) => {
    if (selectedSwatches.includes(id)) {
      if (selectedSwatches.length > 1) {
        setSelectedSwatches(selectedSwatches.filter(item => item !== id));
      }
    } else {
      if (selectedSwatches.length < 5) {
        setSelectedSwatches([...selectedSwatches, id]);
      } else {
        alert('You can select up to 5 fabric swatches for your complimentary kit.');
      }
    }
  };

  // Filter Fabrics for Showcase
  const categories = ['All', 'Jacquard & Damask', 'Linen & Silk Sheers', 'Luxury Velvet', 'Thermal Blackout', 'Motorized Blinds & Waves'];
  
  const filteredFabrics = FABRICS.filter(f => {
    const matchesCategory = selectedCategory === 'All' || f.category === selectedCategory;
    const matchesSearch = f.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          f.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-[#FAF8F2] text-[#121212] font-sans antialiased selection:bg-[#C5A038] selection:text-white">
      
      {/* TOP ANNOUNCEMENT BAR */}
      <div className="bg-[#121212] text-[#E8DFCA] text-[11px] py-2 px-4 border-b border-[#C5A038]/30">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center space-x-2">
            <Sparkles className="w-3.5 h-3.5 text-[#C5A038]" />
            <span className="font-medium tracking-wide">Panipat’s Premier Atelier for Bespoke Luxury Curtains & High-End Upholstery</span>
          </div>
          <div className="flex items-center space-x-6 text-[10px] font-semibold tracking-wider uppercase">
            <span className="hidden sm:inline text-[#C5A038]">By Swastik Home Decor</span>
            <button 
              onClick={() => setCurrency(currency === 'INR' ? 'USD' : 'INR')}
              className="hover:text-[#C5A038] transition flex items-center space-x-1 bg-white/10 px-2 py-0.5 rounded"
            >
              <Globe className="w-3 h-3 text-[#C5A038]" />
              <span>Currency: {currency} ({currency === 'INR' ? '₹' : '$'})</span>
            </button>
            <a href="tel:+919876543210" className="flex items-center space-x-1 hover:text-[#C5A038]">
              <Phone className="w-3 h-3 text-[#C5A038]" />
              <span>+91 98120 00000</span>
            </a>
          </div>
        </div>
      </div>

      {/* HERO SECTION WITH LUXURY DRAPERY ATMOSPHERE */}
      <section className="relative min-h-[88vh] flex items-center justify-center overflow-hidden bg-[#121212] text-[#FAF8F2]">
        
        {/* Background Image Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=2200&q=90" 
            alt="Aesthetic Homez Luxury Curtains Living Room" 
            className="w-full h-full object-cover opacity-50 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#121212] via-[#121212]/75 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-[#121212]/40" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 w-full">
          <div className="max-w-3xl space-y-8">
            
            {/* Tagline Crest */}
            <div className="inline-flex items-center space-x-3 bg-[#121212]/80 backdrop-blur-md px-5 py-2.5 rounded-full border border-[#C5A038]/50 shadow-2xl">
              <span className="h-2 w-2 rounded-full bg-[#C5A038] animate-pulse" />
              <span className="text-xs font-bold tracking-[0.25em] uppercase text-[#C5A038]">
                Brings You Close To Luxury
              </span>
              <span className="text-[10px] text-white/50 border-l border-white/20 pl-2 uppercase tracking-widest">
                Panipat · India
              </span>
            </div>

            {/* Hero Heading */}
            <h1 className="font-serif text-5xl sm:text-7xl lg:text-8xl font-normal leading-[0.95] tracking-tight text-white">
              Where fabrics <br />
              speak <em className="italic font-light text-[#C5A038]">pure luxury.</em>
            </h1>

            {/* Paragraph */}
            <p className="text-base sm:text-xl text-white/80 font-light leading-relaxed max-w-2xl">
              Specialized in high-thread curtains, architectural motorized drapes, damask jacquards, and bespoke upholstery. Thoughtfully woven in Panipat by <strong className="text-white font-medium">Swastik Home Decor</strong> for homes and spaces that demand distinction.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a 
                href="#simulator" 
                className="bg-[#C5A038] hover:bg-[#B8860B] text-[#121212] font-extrabold px-8 py-4 rounded-full text-xs uppercase tracking-[0.2em] flex items-center space-x-3 transition-all transform hover:scale-105 shadow-xl"
              >
                <span>Launch Drapery Studio</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <a 
                href="#calculator" 
                className="bg-white/10 hover:bg-white/20 text-white font-bold px-8 py-4 rounded-full text-xs uppercase tracking-[0.2em] border border-white/30 backdrop-blur-md transition-all"
              >
                Estimate Custom Price
              </a>
            </div>

            {/* Logo Sub-Brand Credit */}
            <div className="pt-8 border-t border-white/15 flex items-center space-x-6 text-xs text-white/70">
              <div>
                <span className="text-[#C5A038] font-bold uppercase tracking-widest block text-[10px]">Pillar of Quality</span>
                <span>Swastik Home Decor Legacy</span>
              </div>
              <div className="h-8 w-px bg-white/20" />
              <div>
                <span className="text-[#C5A038] font-bold uppercase tracking-widest block text-[10px]">Worldwide Export</span>
                <span>Commercial & Residential Grade</span>
              </div>
            </div>

          </div>
        </div>

        {/* Bottom Gold Line */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#C5A038] via-[#DAA520] to-[#B8860B] z-10" />
      </section>

      {/* FEATURE BAR: BRAND USPs */}
      <section className="bg-[#F4EFE6] border-b border-[#C5A038]/20 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            
            <div className="flex items-center space-x-3">
              <span className="font-serif text-3xl font-bold text-[#C5A038]">01</span>
              <div>
                <p className="font-serif text-lg font-bold text-[#121212]">Panipat Heritage</p>
                <p className="text-[10px] uppercase tracking-wider text-[#121212]/60">India's Renowned Textile Hub</p>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <span className="font-serif text-3xl font-bold text-[#C5A038]">02</span>
              <div>
                <p className="font-serif text-lg font-bold text-[#121212]">B2B & Trade First</p>
                <p className="text-[10px] uppercase tracking-wider text-[#121212]/60">Architect & Hotel Partners</p>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <span className="font-serif text-3xl font-bold text-[#C5A038]">03</span>
              <div>
                <p className="font-serif text-lg font-bold text-[#121212]">Bespoke Tailoring</p>
                <p className="text-[10px] uppercase tracking-wider text-[#121212]/60">Weighted Hems & Memory Pleats</p>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <span className="font-serif text-3xl font-bold text-[#C5A038]">04</span>
              <div>
                <p className="font-serif text-lg font-bold text-[#121212]">Smart Automation</p>
                <p className="text-[10px] uppercase tracking-wider text-[#121212]/60">Somfy Track Integration</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* FEATURE 1: INTERACTIVE DRAPERY ROOM SIMULATOR */}
      <section id="simulator" className="py-24 bg-[#FAF8F2] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold tracking-[0.25em] uppercase text-[#C5A038] block">Interactive Living Room Studio</span>
            <h2 className="font-serif text-4xl sm:text-5xl text-[#121212]">Experience Drapery in Real Light</h2>
            <p className="text-base text-[#121212]/70 font-light">
              Toggle natural sun angles, pleat styles, and fabric opacities to observe how Aesthetic Homez drapes modify the ambiance of your sanctuary.
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 items-start">
            
            {/* Visualizer Canvas Frame */}
            <div className="lg:col-span-8 bg-[#121212] rounded-3xl overflow-hidden shadow-2xl relative border border-[#C5A038]/30 min-h-[480px] sm:min-h-[580px] flex flex-col justify-between p-6">
              
              {/* Room Canvas Layer */}
              <div className="absolute inset-0 z-0">
                {/* Room Image Backdrop */}
                <img 
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80" 
                  alt="Aesthetic Homez Drapery Salon Preview" 
                  className="w-full h-full object-cover transition-all duration-700"
                />

                {/* Lighting Atmosphere Filters */}
                <div 
                  className={`absolute inset-0 transition-all duration-700 ${
                    roomLighting === 'daylight' ? 'bg-amber-50/10 backdrop-brightness-110' :
                    roomLighting === 'golden' ? 'bg-gradient-to-r from-amber-600/35 via-orange-500/25 to-amber-900/40 backdrop-brightness-95' :
                    'bg-slate-950/65 backdrop-brightness-75'
                  }`}
                />

                {/* Simulated Curtain Panel */}
                <div 
                  className={`absolute inset-y-0 right-0 transition-all duration-700 flex justify-end overflow-hidden ${
                    isCurtainClosed ? 'w-full sm:w-4/5' : 'w-1/4'
                  }`}
                >
                  <div 
                    className="h-full w-full shadow-2xl transition-all duration-500 relative"
                    style={{
                      backgroundColor: activeFabric.colorHex,
                      opacity: curtainOpacity / 100,
                      backgroundImage: `repeating-linear-gradient(90deg, rgba(0,0,0,0.18), rgba(0,0,0,0.18) 14px, transparent 14px, transparent 32px)`
                    }}
                  >
                    {/* Pleat Fold Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/40" />
                    
                    {/* Top Pleat Header Graphics */}
                    <div className="absolute top-0 left-0 right-0 h-12 bg-black/40 border-b border-[#C5A038]/50 flex items-center justify-around px-4">
                      {Array.from({ length: 14 }).map((_, i) => (
                        <div key={i} className="w-2.5 h-5 bg-[#C5A038] rounded-t-sm shadow-md" />
                      ))}
                    </div>

                    {/* Weighted Hem Bar at Bottom */}
                    <div className="absolute bottom-0 left-0 right-0 h-3 bg-black/50 border-t border-[#C5A038]/40" />
                  </div>
                </div>
              </div>

              {/* Top Control Overlay HUD */}
              <div className="relative z-10 flex flex-wrap items-center justify-between gap-4 bg-[#121212]/80 backdrop-blur-md p-4 rounded-2xl border border-white/10">
                <div className="flex items-center space-x-2">
                  <span className="text-xs uppercase tracking-widest text-[#C5A038] font-bold">Atmosphere:</span>
                  <div className="flex bg-[#121212] p-1 rounded-xl border border-white/10">
                    <button 
                      onClick={() => setRoomLighting('daylight')}
                      className={`px-3 py-1.5 rounded-lg text-xs font-medium flex items-center space-x-1.5 transition-all ${roomLighting === 'daylight' ? 'bg-[#C5A038] text-[#121212] font-bold' : 'text-white/70 hover:text-white'}`}
                    >
                      <Sun className="w-3.5 h-3.5" />
                      <span>Daylight</span>
                    </button>
                    <button 
                      onClick={() => setRoomLighting('golden')}
                      className={`px-3 py-1.5 rounded-lg text-xs font-medium flex items-center space-x-1.5 transition-all ${roomLighting === 'golden' ? 'bg-[#C5A038] text-[#121212] font-bold' : 'text-white/70 hover:text-white'}`}
                    >
                      <Sunset className="w-3.5 h-3.5" />
                      <span>Golden Hour</span>
                    </button>
                    <button 
                      onClick={() => setRoomLighting('evening')}
                      className={`px-3 py-1.5 rounded-lg text-xs font-medium flex items-center space-x-1.5 transition-all ${roomLighting === 'evening' ? 'bg-[#C5A038] text-[#121212] font-bold' : 'text-white/70 hover:text-white'}`}
                    >
                      <Moon className="w-3.5 h-3.5" />
                      <span>Evening</span>
                    </button>
                  </div>
                </div>

                <button 
                  onClick={() => setIsCurtainClosed(!isCurtainClosed)}
                  className="px-4 py-2 bg-[#C5A038] text-[#121212] text-xs uppercase tracking-wider font-extrabold rounded-xl border border-white/20 hover:bg-[#B8860B] transition"
                >
                  {isCurtainClosed ? 'Draw Open Drapes' : 'Close Drapes Fully'}
                </button>
              </div>

              {/* Bottom Specs Overlay HUD */}
              <div className="relative z-10 bg-[#121212]/85 backdrop-blur-md p-4 rounded-2xl border border-white/10 flex flex-wrap items-center justify-between text-xs text-white/80 gap-4">
                <div>
                  <span className="text-white/50 block text-[10px] uppercase tracking-widest">Active Fabric Spec</span>
                  <span className="font-serif text-base text-[#C5A038] font-bold">{activeFabric.name}</span>
                  <span className="text-white/60 text-[11px] ml-2">({activeFabric.composition})</span>
                </div>

                <div className="flex items-center space-x-6">
                  <div>
                    <span className="text-white/50 block text-[10px] uppercase">Acoustic Shield</span>
                    <span className="font-semibold text-white">{activeFabric.acousticRating}</span>
                  </div>
                  <div>
                    <span className="text-white/50 block text-[10px] uppercase">Weight Density</span>
                    <span className="font-semibold text-white">{activeFabric.weight}</span>
                  </div>
                </div>
              </div>

            </div>

            {/* Customization Control Panel */}
            <div className="lg:col-span-4 bg-[#F4EFE6] p-6 rounded-3xl border border-[#C5A038]/30 shadow-xl space-y-6">
              
              <h3 className="font-serif text-2xl text-[#121212] border-b border-[#C5A038]/30 pb-3 flex items-center justify-between">
                <span>Drapery Configurator</span>
                <Sliders className="w-5 h-5 text-[#C5A038]" />
              </h3>

              {/* Fabric Color/Texture Selector */}
              <div className="space-y-3">
                <label className="text-xs font-bold uppercase tracking-wider text-[#121212] block">
                  Select Fabric Textile:
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {FABRICS.map((fab) => (
                    <button
                      key={fab.id}
                      onClick={() => {
                        setActiveFabric(fab);
                        setCurtainOpacity(fab.opacity);
                      }}
                      className={`p-3 rounded-xl border text-left transition-all ${
                        activeFabric.id === fab.id 
                          ? 'border-[#C5A038] bg-[#C5A038]/15 ring-2 ring-[#C5A038]' 
                          : 'border-black/10 hover:border-black/30 bg-white'
                      }`}
                    >
                      <div className="flex items-center space-x-2">
                        <span className="w-4 h-4 rounded-full border border-black/20 shrink-0 shadow-sm" style={{ backgroundColor: fab.colorHex }} />
                        <span className="text-xs font-bold truncate text-[#121212]">{fab.name}</span>
                      </div>
                      <span className="text-[10px] text-black/50 block mt-1">{fab.category}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Pleat Header Selector */}
              <div className="space-y-3">
                <label className="text-xs font-bold uppercase tracking-wider text-[#121212] block">
                  Heading Pleat Style:
                </label>
                <div className="space-y-2">
                  {PLEAT_STYLES.map((pleat) => (
                    <div
                      key={pleat.id}
                      onClick={() => setActivePleat(pleat)}
                      className={`p-3 rounded-xl border cursor-pointer transition-all ${
                        activePleat.id === pleat.id
                          ? 'border-[#C5A038] bg-[#C5A038]/10 font-bold'
                          : 'border-black/10 hover:border-black/20 bg-white'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-[#121212]">{pleat.name}</span>
                        <span className="text-[10px] bg-[#C5A038]/20 text-[#121212] px-2 py-0.5 rounded-full font-black">
                          {pleat.fullness}x Fullness
                        </span>
                      </div>
                      <p className="text-[11px] text-black/60 mt-1 leading-snug">{pleat.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Opacity Slider */}
              <div className="space-y-2 pt-2">
                <div className="flex justify-between items-center text-xs">
                  <span className="font-bold uppercase tracking-wider text-[#121212]">Light Filtering Opacity</span>
                  <span className="font-mono text-[#C5A038] font-bold">{curtainOpacity}% Blackout</span>
                </div>
                <input 
                  type="range" 
                  min="20" 
                  max="100" 
                  value={curtainOpacity}
                  onChange={(e) => setCurtainOpacity(Number(e.target.value))}
                  className="w-full accent-[#C5A038] cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-black/40">
                  <span>Sheer Ambient Light</span>
                  <span>100% Eco Blackout</span>
                </div>
              </div>

              {/* Add Swatch Action */}
              <button
                onClick={() => toggleSwatch(activeFabric.id)}
                className="w-full py-3.5 rounded-xl bg-[#121212] hover:bg-[#252525] text-[#C5A038] font-bold text-xs uppercase tracking-widest transition flex items-center justify-center space-x-2 border border-[#C5A038]/50 shadow-lg"
              >
                <Layers className="w-4 h-4" />
                <span>
                  {selectedSwatches.includes(activeFabric.id) ? 'In Swatch Kit ✓' : '+ Add Selected Swatch'}
                </span>
              </button>

            </div>

          </div>

        </div>
      </section>

      {/* FEATURE 2: MASTER COLLECTIONS SHOWCASE */}
      <section id="collections" className="py-24 bg-[#FAF8F2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 border-b border-[#C5A038]/20 pb-8">
            <div className="space-y-3 max-w-2xl">
              <span className="text-xs font-bold tracking-[0.25em] uppercase text-[#C5A038] block">Curated Textile Line</span>
              <h2 className="font-serif text-4xl sm:text-5xl text-[#121212]">Master Drapery Collections</h2>
              <p className="text-base text-[#121212]/70 font-light">
                Hand-selected thread lines woven in Panipat mills for grand villas, penthouses, and luxury hotels.
              </p>
            </div>

            {/* Search Input */}
            <div className="relative min-w-[280px]">
              <Search className="w-4 h-4 absolute left-3.5 top-3.5 text-black/40" />
              <input 
                type="text" 
                placeholder="Search silk, velvet, sheer..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-full bg-white border border-black/15 text-xs text-[#121212] focus:outline-none focus:border-[#C5A038]"
              />
            </div>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2 mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-5 py-2 rounded-full text-xs font-bold tracking-wider uppercase transition-all ${
                  selectedCategory === cat 
                    ? 'bg-[#121212] text-[#C5A038] shadow-md border border-[#C5A038]' 
                    : 'bg-white text-black/70 hover:bg-[#F4EFE6] border border-black/10'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Fabric Cards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredFabrics.map((fabric) => (
              <div 
                key={fabric.id}
                className="group bg-white rounded-3xl overflow-hidden border border-[#C5A038]/20 shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Card Image Header */}
                  <div className="relative h-72 overflow-hidden">
                    <img 
                      src={fabric.image} 
                      alt={fabric.name} 
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute top-4 left-4 bg-[#121212] text-[#C5A038] text-[10px] uppercase font-bold tracking-widest px-3.5 py-1.5 rounded-full border border-[#C5A038]">
                      {fabric.tag}
                    </div>
                    <button 
                      onClick={() => setQuickViewFabric(fabric)}
                      className="absolute bottom-4 right-4 bg-white/90 hover:bg-white text-[#121212] p-2.5 rounded-full shadow-lg transition opacity-0 group-hover:opacity-100 flex items-center space-x-1 text-xs font-bold px-3"
                    >
                      <Eye className="w-3.5 h-3.5 text-[#C5A038]" />
                      <span>Quick View</span>
                    </button>
                  </div>

                  {/* Card Body */}
                  <div className="p-6 space-y-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <span className="text-[10px] uppercase tracking-widest font-bold text-[#C5A038] block">{fabric.category}</span>
                        <h3 className="font-serif text-2xl font-bold text-[#121212] mt-0.5">{fabric.name}</h3>
                      </div>
                      <div className="text-right">
                        <span className="font-mono text-base font-bold text-[#121212] block">
                          {currency === 'INR' ? `₹${fabric.priceInr}` : `$${fabric.priceUsd}`}
                        </span>
                        <span className="text-[9px] text-black/50 uppercase">Per Meter</span>
                      </div>
                    </div>

                    <p className="text-xs text-[#121212]/70 leading-relaxed font-light">
                      {fabric.description}
                    </p>

                    <div className="pt-3 border-t border-black/5 space-y-2 text-[11px] text-black/70">
                      <div className="flex justify-between">
                        <span className="text-black/50">Composition:</span>
                        <span className="font-medium">{fabric.composition}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-black/50">Acoustic Shield:</span>
                        <span className="font-medium">{fabric.acousticRating}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card Action Footer */}
                <div className="p-6 pt-0 flex gap-3">
                  <button 
                    onClick={() => toggleSwatch(fabric.id)}
                    className="flex-1 py-3 bg-[#F4EFE6] hover:bg-[#121212] hover:text-[#C5A038] text-[#121212] text-xs uppercase tracking-wider font-bold rounded-xl transition duration-300 flex items-center justify-center space-x-2 border border-[#C5A038]/30"
                  >
                    <span>{selectedSwatches.includes(fabric.id) ? 'In Swatch Box ✓' : '+ Swatch'}</span>
                  </button>

                  <button 
                    onClick={() => {
                      setActiveFabric(fabric);
                      window.location.hash = 'simulator';
                    }}
                    className="py-3 px-4 bg-[#C5A038] hover:bg-[#B8860B] text-[#121212] text-xs font-bold rounded-xl transition"
                    title="Simulate in Room"
                  >
                    <Play className="w-4 h-4 fill-current" />
                  </button>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

      {/* FEATURE 3: CUSTOM CURTAIN ESTIMATOR */}
      <section id="calculator" className="py-24 bg-[#F4EFE6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Inputs Box */}
            <div className="lg:col-span-7 bg-[#FAF8F2] p-8 sm:p-10 rounded-3xl border border-[#C5A038]/30 shadow-xl space-y-8">
              
              <div>
                <span className="text-xs font-bold tracking-[0.25em] uppercase text-[#C5A038] block mb-1">Live Valuation Engine</span>
                <h2 className="font-serif text-3xl sm:text-4xl text-[#121212]">Custom Drapery Estimator</h2>
                <p className="text-xs text-[#121212]/60 mt-1">Configure room measurements for an instant Panipat atelier quote.</p>
              </div>

              {/* Window Measurement Sliders */}
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-[#121212] flex justify-between">
                    <span>Window Width (Feet)</span>
                    <span className="text-[#C5A038] font-mono font-bold">{winWidthFeet} ft</span>
                  </label>
                  <input 
                    type="range" 
                    min="4" 
                    max="30" 
                    value={winWidthFeet} 
                    onChange={(e) => setWinWidthFeet(Number(e.target.value))}
                    className="w-full accent-[#C5A038]"
                  />
                  <span className="text-[10px] text-black/40 block">Covers {Math.round(winWidthFeet * 30.48)} cm wall span</span>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-[#121212] flex justify-between">
                    <span>Drop Height (Feet)</span>
                    <span className="text-[#C5A038] font-mono font-bold">{winHeightFeet} ft</span>
                  </label>
                  <input 
                    type="range" 
                    min="5" 
                    max="20" 
                    value={winHeightFeet} 
                    onChange={(e) => setWinHeightFeet(Number(e.target.value))}
                    className="w-full accent-[#C5A038]"
                  />
                  <span className="text-[10px] text-black/40 block">Ceiling to floor drop height</span>
                </div>
              </div>

              {/* Pleat Density Multiplier */}
              <div className="space-y-3">
                <label className="text-xs font-bold uppercase tracking-wider text-[#121212] block">
                  Pleat Fullness Ratio:
                </label>
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { ratio: 1.5, label: '1.5x Standard', desc: 'Minimal folds' },
                    { ratio: 2.0, label: '2.0x Deluxe', desc: 'Rich full volume' },
                    { ratio: 2.5, label: '2.5x Ultra Luxury', desc: 'Deep French pleats' }
                  ].map((p) => (
                    <button
                      key={p.ratio}
                      onClick={() => setPleatDensity(p.ratio)}
                      className={`p-3 rounded-xl border text-left transition-all ${
                        pleatDensity === p.ratio 
                          ? 'border-[#C5A038] bg-[#C5A038]/15 ring-1 ring-[#C5A038] font-bold' 
                          : 'border-black/10 bg-white hover:border-black/30'
                      }`}
                    >
                      <span className="text-xs font-bold text-[#121212] block">{p.label}</span>
                      <span className="text-[10px] text-black/50 block mt-0.5">{p.desc}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Lining Selection */}
              <div className="space-y-3">
                <label className="text-xs font-bold uppercase tracking-wider text-[#121212] block">
                  Thermal & Light Lining:
                </label>
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { id: 'unlined', label: 'Unlined Sheer' },
                    { id: 'sateen', label: 'Cotton Sateen' },
                    { id: 'blackout', label: '100% Blackout' }
                  ].map((line) => (
                    <button
                      key={line.id}
                      onClick={() => setLiningOption(line.id)}
                      className={`p-3 rounded-xl border text-left transition-all ${
                        liningOption === line.id 
                          ? 'border-[#C5A038] bg-[#C5A038]/15 ring-1 ring-[#C5A038] font-bold' 
                          : 'border-black/10 bg-white hover:border-black/30'
                      }`}
                    >
                      <span className="text-xs font-bold text-[#121212] block">{line.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Motorization Switch */}
              <div className="flex items-center justify-between p-4 bg-white rounded-2xl border border-[#C5A038]/30">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#121212] block">Somfy Motorized Track System</span>
                  <span className="text-[11px] text-black/60 block">Includes quiet electric motor, remote control, and home app pairing.</span>
                </div>
                <input 
                  type="checkbox" 
                  checked={isMotorized}
                  onChange={(e) => setIsMotorized(e.target.checked)}
                  className="w-5 h-5 accent-[#C5A038] cursor-pointer"
                />
              </div>

            </div>

            {/* Right Summary Output HUD */}
            <div className="lg:col-span-5 bg-[#121212] text-[#FAF8F2] p-8 sm:p-10 rounded-3xl border border-[#C5A038] shadow-2xl space-y-8">
              
              <div className="space-y-6">
                <div className="flex items-center justify-between border-b border-[#C5A038]/40 pb-4">
                  <span className="text-xs uppercase tracking-widest text-[#C5A038] font-bold">Atelier Valuation</span>
                  <span className="text-[10px] bg-[#C5A038] text-[#121212] font-black px-2.5 py-0.5 rounded-full">Panipat Tailored</span>
                </div>

                <div className="space-y-3 text-xs text-white/80">
                  <div className="flex justify-between">
                    <span className="text-white/60">Selected Fabric:</span>
                    <span className="font-bold text-[#C5A038]">{activeFabric.name}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/60">Window Dimensions:</span>
                    <span>{winWidthFeet} ft Width × {winHeightFeet} ft Drop</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/60">Pleat Multiplier:</span>
                    <span>{pleatDensity}x Full Density</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/60">Lining Spec:</span>
                    <span className="capitalize">{liningOption}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/60">Motorized Control:</span>
                    <span>{isMotorized ? 'Somfy Smart Track Included' : 'Manual Baton Draw'}</span>
                  </div>
                </div>

                <div className="pt-6 border-t border-[#C5A038]/40">
                  <span className="text-[10px] uppercase tracking-widest text-[#C5A038] block font-bold">Total Estimated Cost</span>
                  <div className="flex items-baseline space-x-2 mt-1">
                    <span className="font-serif text-5xl font-bold text-white">
                      {currency === 'INR' ? `₹${calculatedEstimate.toLocaleString('en-IN')}` : `$${calculatedEstimate}`}
                    </span>
                    <span className="text-xs text-white/50">({currency})</span>
                  </div>
                  <p className="text-[10px] text-white/50 mt-2 italic">
                    *Includes hand tailoring, weighted hem zinc chain, and Panipat mill dispatch.
                  </p>
                </div>
              </div>

              <div className="space-y-3">
                <button 
                  onClick={() => setIsSwatchDrawerOpen(true)}
                  className="w-full bg-[#C5A038] hover:bg-[#B8860B] text-[#121212] font-extrabold py-4 rounded-xl text-xs uppercase tracking-[0.2em] shadow-xl transition flex items-center justify-center space-x-2"
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>Order Complimentary Swatch Box</span>
                </button>
                <a 
                  href="#designer-portal"
                  className="w-full block text-center py-3 border border-white/20 text-white hover:bg-white/10 rounded-xl text-xs uppercase tracking-wider font-semibold transition"
                >
                  Request On-Site Laser Survey
                </a>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* FEATURE 4: PANIPAT HERITAGE & SWASTIK HOME DECOR */}
      <section id="heritage" className="py-24 bg-[#121212] text-[#FAF8F2] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="max-w-3xl mb-16 space-y-4">
            <span className="text-xs font-bold tracking-[0.25em] uppercase text-[#C5A038] block">Heritage & Master Tailoring</span>
            <h2 className="font-serif text-4xl sm:text-5xl text-white">Panipat Craftsmanship by Swastik Home Decor</h2>
            <p className="text-base text-white/70 font-light">
              Panipat is globally revered as India's textile capital. At Aesthetic Homez, we unite generations of master loom weaving with modern Italian finish lines to deliver world-class window drapes.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            <div className="bg-[#1A1A1A] p-8 rounded-2xl border border-[#C5A038]/30 relative group hover:border-[#C5A038] transition-all">
              <span className="font-serif text-5xl text-[#C5A038]/30 group-hover:text-[#C5A038] transition font-bold block mb-4">01</span>
              <div className="w-10 h-10 rounded-xl bg-[#C5A038] flex items-center justify-center text-[#121212] mb-6">
                <Ruler className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-xl font-bold mb-2 text-white">Laser Window Survey</h3>
              <p className="text-xs text-white/70 font-light leading-relaxed">
                Millimeter-accurate laser measurements account for window drop variations, ceiling recesses, and rod placement.
              </p>
            </div>

            <div className="bg-[#1A1A1A] p-8 rounded-2xl border border-[#C5A038]/30 relative group hover:border-[#C5A038] transition-all">
              <span className="font-serif text-5xl text-[#C5A038]/30 group-hover:text-[#C5A038] transition font-bold block mb-4">02</span>
              <div className="w-10 h-10 rounded-xl bg-[#C5A038] flex items-center justify-center text-[#121212] mb-6">
                <Compass className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-xl font-bold mb-2 text-white">Shuttle Loom Weaving</h3>
              <p className="text-xs text-white/70 font-light leading-relaxed">
                Yarns are spun and woven in our Panipat facilities to achieve optimal drape density, color fastness, and acoustic dampening.
              </p>
            </div>

            <div className="bg-[#1A1A1A] p-8 rounded-2xl border border-[#C5A038]/30 relative group hover:border-[#C5A038] transition-all">
              <span className="font-serif text-5xl text-[#C5A038]/30 group-hover:text-[#C5A038] transition font-bold block mb-4">03</span>
              <div className="w-10 h-10 rounded-xl bg-[#C5A038] flex items-center justify-center text-[#121212] mb-6">
                <Scissors className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-xl font-bold mb-2 text-white">Weighted Hem Tailoring</h3>
              <p className="text-xs text-white/70 font-light leading-relaxed">
                Zinc lead weights inserted in double-turned bottom hems guarantee perfectly straight vertical fall lines without flaring.
              </p>
            </div>

            <div className="bg-[#1A1A1A] p-8 rounded-2xl border border-[#C5A038]/30 relative group hover:border-[#C5A038] transition-all">
              <span className="font-serif text-5xl text-[#C5A038]/30 group-hover:text-[#C5A038] transition font-bold block mb-4">04</span>
              <div className="w-10 h-10 rounded-xl bg-[#C5A038] flex items-center justify-center text-[#121212] mb-6">
                <Award className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-xl font-bold mb-2 text-white">White-Glove Steam Fit</h3>
              <p className="text-xs text-white/70 font-light leading-relaxed">
                Our technicians install tracks, program motorized controls, and hand-steam pleat memory folds on site.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* FEATURE 5: B2B ARCHITECT & DESIGNER PORTAL */}
      <section id="designer-portal" className="py-24 bg-[#FAF8F2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            <div className="space-y-6">
              <div className="inline-flex items-center space-x-2 bg-[#121212] text-[#C5A038] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest border border-[#C5A038]">
                <Building2 className="w-4 h-4" />
                <span>Trade & Hotel Studio Program</span>
              </div>

              <h2 className="font-serif text-4xl sm:text-5xl text-[#121212] leading-tight">
                Architect & Interior Designer Collaboration
              </h2>

              <p className="text-base text-[#121212]/70 font-light leading-relaxed">
                Aesthetic Homez (By Swastik Home Decor) offers trade-exclusive pricing, direct Panipat mill sample binders, flame-retardant compliance certificates, and technical CAD track schedules.
              </p>

              <div className="grid sm:grid-cols-2 gap-4 pt-2 text-xs">
                <div className="flex items-start space-x-3 p-3 bg-white rounded-xl border border-black/10">
                  <CheckCircle2 className="w-4 h-4 text-[#C5A038] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold block text-[#121212]">Trade Discount Tiers</span>
                    <span className="text-[11px] text-black/50">Volume pricing for multi-unit projects.</span>
                  </div>
                </div>

                <div className="flex items-start space-x-3 p-3 bg-white rounded-xl border border-black/10">
                  <CheckCircle2 className="w-4 h-4 text-[#C5A038] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold block text-[#121212]">Flame Retardant (NFPA 701)</span>
                    <span className="text-[11px] text-black/50">Commercial hospitality safety certification.</span>
                  </div>
                </div>

                <div className="flex items-start space-x-3 p-3 bg-white rounded-xl border border-black/10">
                  <CheckCircle2 className="w-4 h-4 text-[#C5A038] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold block text-[#121212]">Custom Pantone Weaving</span>
                    <span className="text-[11px] text-black/50">Custom yarn dye matching in Panipat.</span>
                  </div>
                </div>

                <div className="flex items-start space-x-3 p-3 bg-white rounded-xl border border-black/10">
                  <CheckCircle2 className="w-4 h-4 text-[#C5A038] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold block text-[#121212]">Dedicated Project Manager</span>
                    <span className="text-[11px] text-black/50">Single point contact from survey to fit.</span>
                  </div>
                </div>
              </div>

              {/* Inquiry Form */}
              <div className="pt-4 space-y-3 bg-[#F4EFE6] p-6 rounded-2xl border border-[#C5A038]/30">
                <h4 className="font-serif text-lg font-bold text-[#121212]">Request Architect Trade Catalogue</h4>
                <div className="grid grid-cols-2 gap-3">
                  <input type="text" placeholder="Full Name..." className="bg-white p-3 rounded-xl border border-black/15 text-xs text-[#121212] focus:outline-none" />
                  <input type="text" placeholder="Firm / Studio Name..." className="bg-white p-3 rounded-xl border border-black/15 text-xs text-[#121212] focus:outline-none" />
                </div>
                <button 
                  onClick={() => alert('Thank you! Our Panipat trade manager will contact your firm shortly with the master sample binder.')}
                  className="w-full bg-[#121212] hover:bg-[#252525] text-[#C5A038] font-bold py-3.5 rounded-xl text-xs uppercase tracking-widest transition border border-[#C5A038]"
                >
                  Submit Trade Partner Request
                </button>
              </div>

            </div>

            {/* Visual B2B Card */}
            <div className="relative rounded-3xl overflow-hidden border border-[#C5A038]/40 shadow-2xl h-[520px]">
              <img 
                src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80" 
                alt="Aesthetic Homez Hospitality Project" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-[#121212]/40 to-transparent flex flex-col justify-end p-8">
                <div className="bg-[#121212]/90 backdrop-blur-md p-6 rounded-2xl border border-[#C5A038]/40">
                  <span className="text-[10px] uppercase font-bold tracking-widest text-[#C5A038] block">Project Spotlight</span>
                  <h4 className="font-serif text-2xl font-bold text-white mt-1">The Royal Pavilion Resort & Spa</h4>
                  <p className="text-xs text-white/70 mt-1 font-light">
                    42 Suites outfitted with custom woven gold damask and Somfy motorized double-track drapes by Swastik Home Decor.
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 bg-[#F4EFE6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold tracking-[0.25em] uppercase text-[#C5A038] block">Client Appraisals</span>
            <h2 className="font-serif text-4xl sm:text-5xl text-[#121212]">Words from Our Patrons</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t, idx) => (
              <div 
                key={idx} 
                className="bg-[#FAF8F2] p-8 rounded-3xl border border-[#C5A038]/20 flex flex-col justify-between shadow-sm hover:shadow-md transition"
              >
                <div className="space-y-4">
                  <div className="flex space-x-1 text-[#C5A038]">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <p className="font-serif text-lg italic text-[#121212] leading-relaxed">
                    "{t.quote}"
                  </p>
                </div>

                <div className="pt-6 border-t border-black/10 mt-6">
                  <p className="font-bold text-sm text-[#121212]">{t.author}</p>
                  <p className="text-xs text-black/60">{t.role}</p>
                  <span className="text-[10px] uppercase tracking-widest text-[#C5A038] font-bold block mt-1">{t.location}</span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* SWATCH DRAWER OVERLAY */}
      {isSwatchDrawerOpen && (
        <div className="fixed inset-0 z-50 flex justify-end bg-black/60 backdrop-blur-sm transition-opacity">
          <div className="w-full max-w-md bg-[#FAF8F2] h-full shadow-2xl flex flex-col justify-between p-6 overflow-y-auto">
            
            <div className="space-y-6">
              <div className="flex items-center justify-between border-b border-black/10 pb-4">
                <div className="flex items-center space-x-2">
                  <Layers className="w-5 h-5 text-[#C5A038]" />
                  <h3 className="font-serif text-xl font-bold text-[#121212]">Fabric Swatch Box</h3>
                </div>
                <button 
                  onClick={() => setIsSwatchDrawerOpen(false)}
                  className="text-black/50 hover:text-black font-bold text-lg"
                >
                  ✕
                </button>
              </div>

              <p className="text-xs text-black/70 leading-relaxed font-light">
                Select up to 5 complimentary fabric swatches. Delivered in an Aesthetic Homez presentation box with thread specifications and track samples.
              </p>

              {/* Selected Swatches List */}
              <div className="space-y-3">
                <span className="text-xs font-bold uppercase tracking-wider text-black/80 block">
                  Selected Swatches ({selectedSwatches.length}/5):
                </span>
                {selectedSwatches.map((swatchId) => {
                  const fab = FABRICS.find(f => f.id === swatchId);
                  if (!fab) return null;
                  return (
                    <div key={swatchId} className="flex items-center justify-between p-3 bg-white rounded-xl border border-black/10 shadow-sm">
                      <div className="flex items-center space-x-3">
                        <span className="w-6 h-6 rounded-full border border-black/20 shadow-sm" style={{ backgroundColor: fab.colorHex }} />
                        <div>
                          <p className="text-xs font-bold text-[#121212]">{fab.name}</p>
                          <p className="text-[10px] text-black/50">{fab.category}</p>
                        </div>
                      </div>
                      <button 
                        onClick={() => toggleSwatch(swatchId)}
                        className="text-xs text-red-700 hover:text-red-900 font-bold"
                      >
                        Remove
                      </button>
                    </div>
                  );
                })}
              </div>

              {/* Add More Checklist */}
              <div className="space-y-2 pt-2 border-t border-black/10">
                <span className="text-xs font-bold uppercase tracking-wider text-black/80 block">Add Other Collections:</span>
                {FABRICS.filter(f => !selectedSwatches.includes(f.id)).map((fab) => (
                  <div key={fab.id} className="flex items-center justify-between p-2 text-xs hover:bg-black/5 rounded-lg transition">
                    <span>{fab.name}</span>
                    <button 
                      onClick={() => toggleSwatch(fab.id)}
                      className="text-[10px] bg-[#121212] text-[#C5A038] px-2.5 py-1 rounded uppercase font-bold"
                    >
                      + Add
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Order Action */}
            <div className="pt-6 border-t border-black/10 space-y-3">
              <input 
                type="text" 
                placeholder="Shipping Address for Delivery..." 
                className="w-full text-xs p-3 rounded-xl border border-black/20 focus:outline-none bg-white text-[#121212]"
              />
              <button 
                onClick={() => {
                  alert('Thank you! Your Aesthetic Homez Swatch Presentation Box request has been dispatched.');
                  setIsSwatchDrawerOpen(false);
                }}
                className="w-full py-4 bg-[#121212] text-[#C5A038] font-bold text-xs uppercase tracking-[0.2em] rounded-xl shadow-lg border border-[#C5A038] transition"
              >
                Dispatch Swatch Box
              </button>
            </div>

          </div>
        </div>
      )}

      {/* FABRIC QUICK VIEW MODAL */}
      {quickViewFabric && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md">
          <div className="bg-[#FAF8F2] rounded-3xl max-w-2xl w-full p-6 sm:p-8 relative border border-[#C5A038] shadow-2xl max-h-[90vh] overflow-y-auto space-y-6">
            <button 
              onClick={() => setQuickViewFabric(null)}
              className="absolute top-4 right-4 text-black/50 hover:text-black font-bold text-xl"
            >
              ✕
            </button>

            <div className="grid sm:grid-cols-2 gap-6 items-center">
              <div className="h-64 rounded-2xl overflow-hidden border border-[#C5A038]/30">
                <img src={quickViewFabric.image} alt={quickViewFabric.name} className="w-full h-full object-cover" />
              </div>

              <div className="space-y-3">
                <span className="text-[10px] uppercase font-bold tracking-widest text-[#C5A038] bg-[#121212] px-3 py-1 rounded-full">
                  {quickViewFabric.tag}
                </span>
                <h3 className="font-serif text-3xl font-bold text-[#121212]">{quickViewFabric.name}</h3>
                <p className="text-xs text-black/70 font-light leading-relaxed">{quickViewFabric.description}</p>
                <div className="font-mono text-xl font-bold text-[#121212]">
                  {currency === 'INR' ? `₹${quickViewFabric.priceInr}` : `$${quickViewFabric.priceUsd}`} / Meter
                </div>
              </div>
            </div>

            <div className="bg-white p-4 rounded-2xl border border-black/10 space-y-2 text-xs">
              <div className="flex justify-between">
                <span className="text-black/50">Composition:</span>
                <span className="font-bold text-[#121212]">{quickViewFabric.composition}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-black/50">Light Blockade:</span>
                <span className="font-bold text-[#121212]">{quickViewFabric.opacity}% Room Darkening</span>
              </div>
              <div className="flex justify-between">
                <span className="text-black/50">Weight Density:</span>
                <span className="font-bold text-[#121212]">{quickViewFabric.weight}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-black/50">Acoustic Absorptivity:</span>
                <span className="font-bold text-[#121212]">{quickViewFabric.acousticRating}</span>
              </div>
            </div>

            <div className="flex gap-3">
              <button 
                onClick={() => {
                  toggleSwatch(quickViewFabric.id);
                  setQuickViewFabric(null);
                }}
                className="flex-1 py-3 bg-[#121212] text-[#C5A038] font-bold text-xs uppercase tracking-wider rounded-xl border border-[#C5A038]"
              >
                Add Swatch to Box
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}