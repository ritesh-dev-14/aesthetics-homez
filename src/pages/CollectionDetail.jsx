import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowLeft, ArrowUpRight, CheckCircle2, ChevronRight, Layers, Palette, Shield, Building2 } from 'lucide-react';
import { collections } from '../data'; // Ensure your data file path is correct

// --- Helper Framer Motion Variants ---
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }
  })
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const slideInRight = {
  hidden: { opacity: 0, x: 40 },
  visible: { 
    opacity: 1, 
    x: 0, 
    transition: { duration: 0.6, ease: "easeOut" } 
  }
};

export default function CollectionDetail() {
  const { id } = useParams();
  const item = collections.find((x) => x.id === id);
  
  // Parallax effect for the hero image
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!item) {
    return (
      <section className="min-h-screen bg-[#FAF8F2] flex flex-col items-center justify-center text-center px-6">
        <h1 className="font-serif text-5xl sm:text-7xl text-[#121212]">Collection<br/>Not Found</h1>
        <p className="mt-4 text-black/50">The curated selection you are looking for does not exist.</p>
        <Link 
          to="/products" 
          className="mt-8 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#C5A038] hover:text-[#B8860B] transition"
        >
          <ArrowLeft size={16} /> Return to Collections
        </Link>
      </section>
    );
  }

  return (
    <div className="bg-[#FAF8F2] min-h-screen text-[#121212]">
      
      {/* --- CINEMATIC HERO SECTION --- */}
      <section className="relative h-[80vh] min-h-[600px] overflow-hidden bg-[#121212] flex items-end pb-24 sm:pb-32">
        {/* Parallax Background */}
        <motion.div style={{ y }} className="absolute inset-0 z-0">
          <img 
            src={item.image} 
            alt={item.title} 
            className="w-full h-full object-cover opacity-60 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-[#121212]/50 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#121212]/80 via-[#121212]/30 to-transparent" />
        </motion.div>

        {/* Hero Content */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8">
          <motion.div initial="hidden" animate="visible" variants={fadeUp} custom={0} className="mb-12">
            <Link 
              to="/products" 
              className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-[#C5A038] hover:text-white transition-colors bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/10"
            >
              <ArrowLeft size={14} /> Back to Master Collections
            </Link>
          </motion.div>

          <motion.div initial="hidden" animate="visible" variants={fadeUp} custom={1} className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-[#C5A038]" />
            <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#C5A038]">
              Collection {item.number}
            </span>
          </motion.div>

          <motion.h1 
            initial="hidden" animate="visible" variants={fadeUp} custom={2} 
            className="font-serif text-5xl sm:text-7xl lg:text-8xl text-white tracking-tight leading-[1.05] max-w-4xl"
          >
            {item.title}
          </motion.h1>

          <motion.p 
            initial="hidden" animate="visible" variants={fadeUp} custom={3} 
            className="mt-6 max-w-2xl text-base sm:text-xl text-white/70 font-light leading-relaxed"
          >
            {item.subtitle}
          </motion.p>
        </div>
      </section>

      {/* --- SPECIFICATION & DETAILS SECTION --- */}
      <section className="py-24 sm:py-32 relative">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          
          <div className="grid lg:grid-cols-12 gap-16 lg:gap-24">
            
            {/* Left Column: Vision & Description */}
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp} 
              className="lg:col-span-6 space-y-12"
            >
              <div>
                <span className="text-xs font-bold tracking-[0.25em] uppercase text-[#C5A038] block mb-3">
                  Atmosphere & Finish
                </span>
                <h2 className="font-serif text-3xl sm:text-5xl text-[#121212] leading-tight">
                  Designed around <br/>
                  <em className="italic text-transparent bg-clip-text bg-gradient-to-r from-[#C5A038] to-[#B8860B]">
                    your vision.
                  </em>
                </h2>
                <p className="mt-6 text-base text-black/60 font-light leading-relaxed">
                  {item.description} Our Panipat atelier consultants are available to help you explore the ideal textile weight, finish, and bespoke customization for your architectural project.
                </p>
              </div>

              {/* Action Trigger */}
              <div className="pt-8 border-t border-black/10">
                <Link 
                  to="/contact" 
                  className="inline-flex items-center gap-3 bg-[#121212] hover:bg-[#252525] text-[#C5A038] px-8 py-4 text-xs font-bold uppercase tracking-widest rounded-xl transition-all shadow-xl hover:-translate-y-0.5"
                >
                  Request Master Swatch Binder <ArrowUpRight size={15}/>
                </Link>
              </div>
            </motion.div>

            {/* Right Column: Characteristics & Categories */}
            <div className="lg:col-span-6 space-y-16">
              
              {/* Characteristics Checklist */}
              <motion.div 
                initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
              >
                <h3 className="text-xs font-bold tracking-[0.25em] uppercase text-black/40 mb-6">Signature Characteristics</h3>
                <div className="space-y-4">
                  {item.points.map((point, i) => (
                    <motion.div key={i} variants={slideInRight} className="flex items-start gap-4 p-5 bg-white rounded-2xl border border-black/5 shadow-sm hover:border-[#C5A038]/30 transition-colors">
                      <div className="bg-[#FAF8F2] p-2 rounded-lg border border-[#C5A038]/20 shrink-0">
                        <CheckCircle2 className="w-5 h-5 text-[#C5A038]" />
                      </div>
                      <div>
                        <span className="font-serif text-lg text-[#121212] block">Feature 0{i + 1}</span>
                        <p className="text-sm text-black/60 mt-1">{point}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Material Sub-Categories */}
              <motion.div 
                initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}
              >
                <h3 className="text-xs font-bold tracking-[0.25em] uppercase text-black/40 mb-6">Available Textile Grades</h3>
                <div className="flex flex-wrap gap-3">
                  {item.categories.map((cat, i) => (
                    <span 
                      key={i} 
                      className="inline-flex items-center gap-2 bg-[#F4EFE6] text-[#121212] px-4 py-2 rounded-lg text-sm font-semibold border border-black/5"
                    >
                      <Layers className="w-4 h-4 text-[#C5A038]" />
                      {cat}
                    </span>
                  ))}
                </div>
              </motion.div>

            </div>
          </div>
        </div>
      </section>

      {/* --- B2B PROJECT INQUIRY FOOTER --- */}
      <section className="bg-[#121212] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#C5A038]/10 to-transparent opacity-50" />
        <div className="max-w-7xl mx-auto px-6 sm:px-8 py-24 sm:py-32 relative z-10 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
            <div className="inline-flex items-center justify-center p-3 rounded-2xl bg-white/5 border border-white/10 mb-8">
              <Building2 className="w-8 h-8 text-[#C5A038]" />
            </div>
            
            <p className="text-xs font-bold tracking-[0.25em] uppercase text-[#C5A038] mb-4">
              Trade & Hospitality Partners
            </p>
            <h2 className="font-serif text-4xl sm:text-6xl text-white max-w-2xl mx-auto leading-tight">
              Executing a commercial or luxury residential project?
            </h2>
            
            <p className="mt-6 text-white/60 font-light max-w-xl mx-auto mb-10">
              Access wholesale pricing, NFPA 701 fire-retardant certifications, and bespoke weaving runs directly from our Panipat manufacturing hub.
            </p>

            <Link 
              to="/contact" 
              className="inline-flex items-center gap-3 bg-[#C5A038] hover:bg-[#B8860B] text-[#121212] px-8 py-4 text-xs font-bold uppercase tracking-widest rounded-xl transition-all shadow-xl hover:scale-105"
            >
              Contact Commercial Team <ArrowUpRight size={15}/>
            </Link>
          </motion.div>
        </div>
      </section>

    </div>
  );
}