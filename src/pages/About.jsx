// import { motion } from 'framer-motion'
// import { ArrowUpRight, Check, Gem, HeartHandshake, Layers3, Truck } from 'lucide-react'
// import { Link } from 'react-router-dom'
// import Reveal from '../components/Reveal'
// import { benefits } from '../data'

// const values = [
//   [Gem,'Thoughtful quality','Careful attention to fabric selection, finishing and consistency.'],
//   [HeartHandshake,'Partnership mindset','A B2B-first approach built around trust and long-term relationships.'],
//   [Layers3,'Creative variety','Collections that bring together textures, patterns and practical performance.'],
//   [Truck,'Dependable delivery','Responsive coordination and support for projects across markets.']
// ]
// export default function About() {
//   return <>
//     <section className="inner-hero">
//       <div className="mx-auto max-w-7xl px-5 pb-20 pt-44 sm:px-8 sm:pb-28">
//         <motion.p initial={{opacity:0,y:15}} animate={{opacity:1,y:0}} className="eyebrow mb-6">About Aesthetic Homez</motion.p>
//         <motion.h1 initial={{opacity:0,y:25}} animate={{opacity:1,y:0}} transition={{delay:.1}} className="max-w-5xl font-display text-6xl leading-[.95] sm:text-8xl">Where fabrics<br/>speak <em className="text-gold">luxury.</em></motion.h1>
//         <p className="mt-8 max-w-2xl text-base leading-8 text-black/55">Rooted in Panipat, India’s textile hub. Inspired by beautiful spaces. Driven by quality, creativity and lasting partnerships.</p>
//       </div>
//     </section>
//     <section className="section-space bg-white"><div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:items-center">
//       <Reveal><img src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1400&q=85" alt="Elegant residential interior" className="aspect-[5/4] w-full object-cover"/></Reveal>
//       <Reveal delay={.12}><p className="eyebrow mb-5">Our story</p><h2 className="section-title">Textiles that bring<br/>spaces to <em>life.</em></h2><p className="mt-6 text-sm leading-8 text-black/60">Aesthetic Homez, based in Panipat — India’s textile hub — specializes in premium curtains, upholstery and blinds for luxury homes, hotels and commercial spaces. With a B2B-first approach, we deliver customized fabric solutions known for quality, reliability and innovation.</p><p className="mt-4 text-sm leading-8 text-black/60">Our collections blend creativity with craftsmanship, from elegant curtains to durable upholstery and designer blinds. We serve residential, hospitality and commercial projects, helping every fabric add comfort, style and lasting value.</p><Link to="/contact" className="text-link mt-7">Start a conversation <ArrowUpRight size={16}/></Link></Reveal>
//     </div></section>
//     <section className="section-space"><div className="mx-auto max-w-7xl px-5 sm:px-8"><Reveal><p className="eyebrow mb-4">What guides us</p><h2 className="section-title">A standard woven<br/>into <em>everything.</em></h2></Reveal><div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{values.map(([Icon,title,desc],i)=><Reveal key={title} delay={i*.08}><div className="border-t border-gold/60 pt-6"><Icon className="mb-7 text-gold" size={25}/><h3 className="font-display text-2xl">{title}</h3><p className="mt-3 text-sm leading-7 text-black/50">{desc}</p></div></Reveal>)}</div></div></section>
//     <section className="section-space bg-[#eae5d9]"><div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[.8fr_1.2fr]"><Reveal><p className="eyebrow mb-4">Why choose us</p><h2 className="section-title">Good fabrics.<br/><em>Better partnerships.</em></h2><p className="mt-6 max-w-md text-sm leading-7 text-black/55">From first sampling to final delivery, we aim to make every step clear, considered and dependable.</p></Reveal><div className="grid gap-x-8 sm:grid-cols-2">{benefits.map((b,i)=><Reveal key={b} delay={i*.04}><div className="flex gap-3 border-b border-black/10 py-5 text-sm"><Check className="shrink-0 text-gold" size={17}/>{b}</div></Reveal>)}</div></div></section>
//   </>
// }



import React, { useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowUpRight, CheckCircle2, Gem, HeartHandshake, Layers3, Truck } from 'lucide-react';
import { Link } from 'react-router-dom';
import { benefits } from '../data';

// --- Helper Framer Motion Variants ---
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }
  })
};

const slideFromLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: { 
    opacity: 1, 
    x: 0, 
    transition: { duration: 0.8, ease: "easeOut" } 
  }
};

const slideFromRight = {
  hidden: { opacity: 0, x: 40 },
  visible: { 
    opacity: 1, 
    x: 0, 
    transition: { duration: 0.8, ease: "easeOut", delay: 0.1 } 
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

// --- Core Values Data ---
const values = [
  [Gem, 'Thoughtful Quality', 'Careful attention to fabric selection, finishing, and architectural consistency.'],
  [HeartHandshake, 'Partnership Mindset', 'A B2B-first approach built around absolute trust and long-term relationships.'],
  [Layers3, 'Creative Variety', 'Collections that bring together rich textures, bespoke patterns, and practical performance.'],
  [Truck, 'Dependable Delivery', 'Responsive global coordination and logistical support for projects across all markets.']
];

export default function About() {
  // Optional Parallax for Hero
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#FAF8F2] min-h-screen text-[#121212] selection:bg-[#C5A038] selection:text-white">
      
      {/* --- CINEMATIC HERO SECTION --- */}
      <section className="relative h-[70vh] min-h-[500px] overflow-hidden bg-[#121212] flex items-end pb-24">
        {/* Parallax Background */}
        <motion.div style={{ y }} className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=2000&q=80" 
            alt="Aesthetic Homez Luxury Drapes" 
            className="w-full h-full object-cover opacity-30 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-[#121212]/60 to-transparent" />
        </motion.div>

        {/* Hero Content */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8">
          <motion.div initial="hidden" animate="visible" variants={fadeUp} custom={0}>
            <span className="text-xs font-bold tracking-[0.25em] uppercase text-[#C5A038] block mb-4">
              About Aesthetic Homez
            </span>
          </motion.div>

          <motion.h1 
            initial="hidden" animate="visible" variants={fadeUp} custom={1} 
            className="font-serif text-5xl sm:text-7xl lg:text-8xl text-white tracking-tight leading-[1.05] max-w-4xl"
          >
            Where fabrics <br />
            speak <em className="italic font-light text-transparent bg-clip-text bg-gradient-to-r from-[#C5A038] to-[#B8860B]">pure luxury.</em>
          </motion.h1>

          <motion.p 
            initial="hidden" animate="visible" variants={fadeUp} custom={2} 
            className="mt-8 max-w-2xl text-base sm:text-xl text-white/70 font-light leading-relaxed"
          >
            Rooted in Panipat, India’s textile hub. Inspired by beautiful spaces. Driven by uncompromised quality, creativity, and lasting architectural partnerships.
          </motion.p>
        </div>
      </section>

      {/* --- OUR STORY (SPLIT LAYOUT) --- */}
      <section className="py-24 sm:py-32 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Left Image */}
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={slideFromLeft}
              className="relative"
            >
              <div className="rounded-3xl overflow-hidden shadow-2xl border border-black/5">
                <img 
                  src="https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80" 
                  alt="Elegant residential interior" 
                  className="w-full aspect-[4/5] object-cover hover:scale-105 transition-transform duration-1000"
                />
              </div>
              {/* Decorative Accent */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#F4EFE6] rounded-full border border-[#C5A038]/20 -z-10" />
            </motion.div>

            {/* Right Copy */}
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={slideFromRight}
              className="space-y-8"
            >
              <div>
                <span className="text-xs font-bold tracking-[0.25em] uppercase text-[#C5A038] block mb-3">Our Story</span>
                <h2 className="font-serif text-4xl sm:text-5xl text-[#121212] leading-tight">
                  Textiles that bring <br />
                  spaces to <em className="italic text-transparent bg-clip-text bg-gradient-to-r from-[#C5A038] to-[#B8860B]">life.</em>
                </h2>
              </div>

              <div className="space-y-6 text-sm sm:text-base text-black/60 font-light leading-relaxed">
                <p>
                  Aesthetic Homez, based in Panipat — India’s textile hub — specializes in premium curtains, upholstery and blinds for luxury homes, hotels and commercial spaces. With a B2B-first approach, we deliver customized fabric solutions known for quality, reliability and innovation.
                </p>
                <p>
                  Our collections blend creativity with craftsmanship, from elegant curtains to durable upholstery and designer blinds. We serve residential, hospitality and commercial projects, helping every fabric add comfort, style and lasting value.
                </p>
              </div>

              <div className="pt-4">
                <Link 
                  to="/contact" 
                  className="inline-flex items-center gap-3 bg-[#121212] hover:bg-[#252525] text-[#C5A038] px-7 py-3.5 text-xs font-bold uppercase tracking-widest rounded-xl transition-all shadow-lg hover:-translate-y-0.5"
                >
                  Start a conversation <ArrowUpRight size={15}/>
                </Link>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* --- CORE VALUES GRID --- */}
      <section className="py-24 sm:py-32 bg-[#FAF8F2]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp} className="mb-16">
            <span className="text-xs font-bold tracking-[0.25em] uppercase text-[#C5A038] block mb-3">What guides us</span>
            <h2 className="font-serif text-4xl sm:text-5xl text-[#121212] leading-tight">
              A standard woven <br/>
              into <em className="italic text-transparent bg-clip-text bg-gradient-to-r from-[#C5A038] to-[#B8860B]">everything.</em>
            </h2>
          </motion.div>

          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10"
          >
            {values.map(([Icon, title, desc], i) => (
              <motion.div key={title} variants={fadeUp} className="border-t border-[#C5A038]/30 pt-8 group">
                <div className="w-12 h-12 bg-white rounded-xl border border-[#C5A038]/20 flex items-center justify-center mb-6 shadow-sm group-hover:bg-[#C5A038]/10 transition-colors">
                  <Icon className="text-[#C5A038]" size={22} />
                </div>
                <h3 className="font-serif text-2xl font-bold text-[#121212] mb-3">{title}</h3>
                <p className="text-sm text-black/60 font-light leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </section>

      {/* --- B2B BENEFITS (UTILIZING NEW DETAILED DATA.JS STRUCTURE) --- */}
      <section className="py-24 sm:py-32 bg-[#121212] text-white overflow-hidden relative">
        <div className="absolute inset-0 bg-gradient-to-br from-[#C5A038]/10 to-transparent opacity-30" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8">
          
          <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-16 lg:gap-20 items-start">
            
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp} className="sticky top-32">
              <span className="text-xs font-bold tracking-[0.25em] uppercase text-[#C5A038] block mb-3">Why choose us</span>
              <h2 className="font-serif text-4xl sm:text-5xl text-white leading-tight">
                Good fabrics. <br/>
                <em className="italic font-light text-transparent bg-clip-text bg-gradient-to-r from-[#C5A038] to-[#B8860B]">Better partnerships.</em>
              </h2>
              <p className="mt-6 text-base text-white/60 font-light leading-relaxed max-w-md">
                From initial pan-India sampling to final localized delivery, we aim to make every step for architects and wholesalers clear, considered, and absolutely dependable.
              </p>
            </motion.div>

            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
              className="grid sm:grid-cols-2 gap-6"
            >
              {benefits.map((b) => (
                <motion.div 
                  key={b.id} 
                  variants={fadeUp}
                  className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10 hover:border-[#C5A038]/40 transition-colors"
                >
                  <div className="flex items-start gap-4">
                    <CheckCircle2 className="shrink-0 text-[#C5A038] mt-0.5" size={20} />
                    <div>
                      <h4 className="font-bold text-white text-base tracking-wide">{b.title}</h4>
                      <p className="text-sm text-white/50 font-light mt-2 leading-relaxed">
                        {b.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

          </div>
        </div>
      </section>

    </div>
  );
}