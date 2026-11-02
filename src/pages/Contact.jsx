// import { useState } from 'react'
// import { motion } from 'framer-motion'
// import { ArrowUpRight, Mail, MapPin, Phone, Send } from 'lucide-react'
// import Reveal from '../components/Reveal'

// export default function Contact() {
//   const [form,setForm] = useState({name:'',company:'',email:'',phone:'',interest:'Curtain Fabrics',message:''})
//   const [sent,setSent] = useState(false)
//   const update = e => setForm({...form,[e.target.name]:e.target.value})
//   const submit = e => {
//     e.preventDefault()
//     const body = `Name: ${form.name}%0D%0ACompany: ${form.company}%0D%0AEmail: ${form.email}%0D%0APhone: ${form.phone}%0D%0AInterested in: ${form.interest}%0D%0A%0D%0A${form.message}`
//     window.location.href = `mailto:info@aesthetichomez.com?subject=${encodeURIComponent('Website enquiry - Aesthetic Homez')}&body=${body}`
//     setSent(true)
//   }
//   return <>
//     <section className="inner-hero"><div className="mx-auto max-w-7xl px-5 pb-16 pt-44 sm:px-8 sm:pb-24"><motion.p initial={{opacity:0,y:15}} animate={{opacity:1,y:0}} className="eyebrow mb-5">We’d love to hear from you</motion.p><motion.h1 initial={{opacity:0,y:25}} animate={{opacity:1,y:0}} transition={{delay:.1}} className="font-display text-6xl leading-none sm:text-8xl">Let’s start a<br/><em className="text-gold">conversation.</em></motion.h1><p className="mt-7 max-w-xl text-base leading-8 text-black/55">Tell us about your space, your project or the collection you’re looking for. Our team is here to help.</p></div></section>
//     <section className="section-space pt-8"><div className="mx-auto grid max-w-7xl gap-14 px-5 sm:px-8 lg:grid-cols-[.8fr_1.2fr]">
//       <Reveal><p className="eyebrow mb-5">Contact details</p><h2 className="font-display text-4xl leading-tight">Good things begin<br/>with a simple <em>hello.</em></h2><p className="mt-5 max-w-sm text-sm leading-7 text-black/50">For wholesale enquiries, project requirements, sampling or partnership opportunities, reach out to us directly.</p>
//         <div className="mt-10 space-y-7">
//           <a href="mailto:info@aesthetichomez.com" className="flex gap-4"><span className="contact-icon"><Mail size={18}/></span><span><small className="eyebrow">Email us</small><strong className="mt-1 block text-sm">info@aesthetichomez.com</strong></span></a>
//           <a href="tel:+919817802201" className="flex gap-4"><span className="contact-icon"><Phone size={18}/></span><span><small className="eyebrow">Call us</small><strong className="mt-1 block text-sm">+91 98178 02201</strong><span className="mt-1 block text-sm text-black/50">+91 98787 21079</span></span></a>
//           <div className="flex gap-4"><span className="contact-icon"><MapPin size={18}/></span><span><small className="eyebrow">Visit us</small><strong className="mt-1 block max-w-xs text-sm leading-6">Plot No. 3295/1, Opposite Hotel Hive, Adjacent to S.D. School, G.T. Road, Panipat – 132103, Haryana, India</strong></span></div>
//         </div>
//       </Reveal>
//       <Reveal delay={.12}><form onSubmit={submit} className="border border-black/10 bg-white p-6 shadow-soft sm:p-10"><p className="eyebrow mb-3">Send an enquiry</p><h2 className="font-display text-4xl">How can we help?</h2><div className="mt-8 grid gap-5 sm:grid-cols-2">
//         <Field label="Your name" name="name" value={form.name} onChange={update} required/>
//         <Field label="Company / business" name="company" value={form.company} onChange={update}/>
//         <Field label="Email address" name="email" type="email" value={form.email} onChange={update} required/>
//         <Field label="Phone number" name="phone" value={form.phone} onChange={update} required/>
//         <label className="field-wrap sm:col-span-2"><span>Interested in</span><select name="interest" value={form.interest} onChange={update} className="field"><option>Curtain Fabrics</option><option>Designer Blinds</option><option>Upholstery Fabrics</option><option>Multiple Collections</option><option>B2B / Wholesale Partnership</option></select></label>
//         <label className="field-wrap sm:col-span-2"><span>Tell us about your requirement</span><textarea name="message" value={form.message} onChange={update} rows="5" required placeholder="Share a few details about your project..." className="field resize-y"/></label>
//       </div><button className="mt-7 inline-flex items-center gap-3 bg-ink px-8 py-4 text-[10px] font-bold uppercase tracking-[.17em] text-white transition hover:bg-gold">Send enquiry <Send size={15}/></button>{sent&&<p className="mt-4 text-xs text-gold-dark">Your email app should open with the enquiry details. Please send the email to complete your enquiry.</p>}</form></Reveal>
//     </div></section>
//     <section className="h-[360px] bg-[#eae5d9]"><iframe title="Aesthetic Homez location in Panipat" src="https://www.google.com/maps?q=Plot%20No.%203295%2F1%2C%20G.T.%20Road%2C%20Panipat%2C%20Haryana&output=embed" className="h-full w-full border-0" loading="lazy"/></section>
//   </>
// }
// function Field({label,...props}) { return <label className="field-wrap"><span>{label}</span><input {...props} className="field"/></label> }



import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Mail, MapPin, Phone, Send, Building2, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

// --- Framer Motion Variants ---
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

// --- Custom Premium Input Field ---
function Field({ label, ...props }) { 
  return (
    <label className="flex flex-col space-y-2">
      <span className="text-[11px] font-bold uppercase tracking-widest text-[#121212]/70">{label}</span>
      <input 
        {...props} 
        className="w-full bg-white border border-black/10 rounded-xl px-4 py-3.5 text-sm text-[#121212] focus:border-[#C5A038] focus:ring-1 focus:ring-[#C5A038] outline-none transition-all shadow-sm"
      />
    </label>
  );
}

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    interest: 'Curtain Fabrics',
    message: ''
  });
  const [sent, setSent] = useState(false);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const update = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  
  const submit = (e) => {
    e.preventDefault();
    const body = `Name: ${form.name}%0D%0ACompany: ${form.company}%0D%0AEmail: ${form.email}%0D%0APhone: ${form.phone}%0D%0AInterested in: ${form.interest}%0D%0A%0D%0A${form.message}`;
    window.location.href = `mailto:info@aesthetichomez.com?subject=${encodeURIComponent('Trade Enquiry - Aesthetic Homez')}&body=${body}`;
    setSent(true);
  };

  return (
    <div className="bg-[#FAF8F2] min-h-screen text-[#121212] selection:bg-[#C5A038] selection:text-white">
      
      {/* --- CINEMATIC HERO SECTION --- */}
      <section className="relative h-[65vh] min-h-[500px] overflow-hidden bg-[#121212] flex items-end pb-24">
        {/* Abstract Background Map/Texture */}
        <div className="absolute inset-0 z-0">
          <div 
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: 'radial-gradient(#C5A038 1px, transparent 1px)',
              backgroundSize: '32px 32px'
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-[#121212]/80 to-transparent" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8">
          <motion.div initial="hidden" animate="visible" variants={fadeUp} custom={0}>
            <span className="text-xs font-bold tracking-[0.25em] uppercase text-[#C5A038] block mb-4">
              We’d love to hear from you
            </span>
          </motion.div>

          <motion.h1 
            initial="hidden" animate="visible" variants={fadeUp} custom={1} 
            className="font-serif text-5xl sm:text-7xl lg:text-8xl text-white tracking-tight leading-[1.05] max-w-4xl"
          >
            Let’s start a <br />
            <em className="italic font-light text-transparent bg-clip-text bg-gradient-to-r from-[#C5A038] to-[#B8860B]">conversation.</em>
          </motion.h1>

          <motion.p 
            initial="hidden" animate="visible" variants={fadeUp} custom={2} 
            className="mt-8 max-w-2xl text-base sm:text-xl text-white/70 font-light leading-relaxed"
          >
            Tell us about your space, your architectural project, or the master collection you’re looking to source. Our Panipat atelier team is here to assist.
          </motion.p>
        </div>
      </section>

      {/* --- SPLIT CONTACT & FORM SECTION --- */}
      <section className="py-24 sm:py-32 bg-[#FAF8F2] relative">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          
          <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-16 lg:gap-24">
            
            {/* Left Column: Contact Details */}
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={slideFromLeft}
              className="space-y-12"
            >
              <div>
                <span className="text-xs font-bold tracking-[0.25em] uppercase text-[#C5A038] block mb-3">Direct Connect</span>
                <h2 className="font-serif text-4xl sm:text-5xl text-[#121212] leading-tight">
                  Good things begin <br/>
                  with a simple <em className="italic text-transparent bg-clip-text bg-gradient-to-r from-[#C5A038] to-[#B8860B]">hello.</em>
                </h2>
                <p className="mt-6 text-sm text-black/60 font-light leading-relaxed max-w-sm">
                  For wholesale enquiries, hospitality project requirements, bespoke sampling, or B2B partnership opportunities, reach out to us directly.
                </p>
              </div>

              <div className="space-y-8 pt-4">
                
                {/* Email */}
                <a href="mailto:info@aesthetichomez.com" className="group flex items-start gap-5">
                  <div className="w-12 h-12 bg-white rounded-xl border border-[#C5A038]/30 flex items-center justify-center shrink-0 group-hover:bg-[#C5A038]/10 transition-colors shadow-sm">
                    <Mail className="text-[#C5A038]" size={20} />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-black/40 block mb-1">Email Us</span>
                    <strong className="text-base text-[#121212] group-hover:text-[#C5A038] transition-colors">info@aesthetichomez.com</strong>
                  </div>
                </a>

                {/* Phone */}
                <a href="tel:+919817802201" className="group flex items-start gap-5">
                  <div className="w-12 h-12 bg-white rounded-xl border border-[#C5A038]/30 flex items-center justify-center shrink-0 group-hover:bg-[#C5A038]/10 transition-colors shadow-sm">
                    <Phone className="text-[#C5A038]" size={20} />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-black/40 block mb-1">Call Us</span>
                    <strong className="text-base text-[#121212] block group-hover:text-[#C5A038] transition-colors">+91 98178 02201</strong>
                    <span className="text-sm text-black/60 block mt-0.5">+91 98787 21079</span>
                  </div>
                </a>

                {/* Address */}
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 bg-white rounded-xl border border-[#C5A038]/30 flex items-center justify-center shrink-0 shadow-sm">
                    <MapPin className="text-[#C5A038]" size={20} />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-black/40 block mb-1">Visit the Atelier</span>
                    <strong className="text-sm font-medium text-[#121212] block max-w-[280px] leading-relaxed">
                      Plot No. 3295/1, Opposite Hotel Hive, <br/>
                      Adjacent to S.D. School, G.T. Road, <br/>
                      Panipat – 132103, Haryana, India
                    </strong>
                  </div>
                </div>

              </div>
              
              {/* Badges */}
              <div className="flex gap-4 pt-6 border-t border-black/10">
                <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-wider text-black/50">
                  <Building2 size={14} className="text-[#C5A038]" /> Panipat Mill
                </div>
                <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-wider text-black/50">
                  <Globe size={14} className="text-[#C5A038]" /> Global Export
                </div>
              </div>

            </motion.div>

            {/* Right Column: White-Glove Form */}
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={slideFromRight}
            >
              <form onSubmit={submit} className="bg-white p-8 sm:p-12 rounded-3xl border border-black/5 shadow-2xl relative overflow-hidden">
                {/* Decorative Form Accent */}
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#C5A038] via-[#DAA520] to-[#B8860B]" />
                
                <div className="mb-10">
                  <span className="text-xs font-bold tracking-[0.25em] uppercase text-[#C5A038] block mb-2">Trade Enquiry</span>
                  <h2 className="font-serif text-3xl text-[#121212]">How can we help?</h2>
                </div>

                <div className="grid gap-6 sm:grid-cols-2">
                  <Field label="Your Name" name="name" value={form.name} onChange={update} required placeholder="John Doe" />
                  <Field label="Company / Studio" name="company" value={form.company} onChange={update} placeholder="Design Studio LLC" />
                  <Field label="Email Address" name="email" type="email" value={form.email} onChange={update} required placeholder="john@example.com" />
                  <Field label="Phone Number" name="phone" value={form.phone} onChange={update} required placeholder="+1 (555) 000-0000" />
                  
                  <label className="flex flex-col space-y-2 sm:col-span-2">
                    <span className="text-[11px] font-bold uppercase tracking-widest text-[#121212]/70">Interested in</span>
                    <div className="relative">
                      <select 
                        name="interest" 
                        value={form.interest} 
                        onChange={update} 
                        className="w-full bg-white border border-black/10 rounded-xl px-4 py-3.5 text-sm text-[#121212] focus:border-[#C5A038] focus:ring-1 focus:ring-[#C5A038] outline-none transition-all shadow-sm appearance-none cursor-pointer"
                      >
                        <option>Curtain Fabrics</option>
                        <option>Designer Blinds</option>
                        <option>Upholstery Fabrics</option>
                        <option>Smart Hardware & Motorization</option>
                        <option>B2B / Wholesale Partnership</option>
                      </select>
                      {/* Custom dropdown arrow */}
                      <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-black/40">
                        ▼
                      </div>
                    </div>
                  </label>

                  <label className="flex flex-col space-y-2 sm:col-span-2">
                    <span className="text-[11px] font-bold uppercase tracking-widest text-[#121212]/70">Project Requirements</span>
                    <textarea 
                      name="message" 
                      value={form.message} 
                      onChange={update} 
                      rows="4" 
                      required 
                      placeholder="Share a few details about your project, dimensions, or fabric needs..." 
                      className="w-full bg-white border border-black/10 rounded-xl px-4 py-3.5 text-sm text-[#121212] focus:border-[#C5A038] focus:ring-1 focus:ring-[#C5A038] outline-none transition-all shadow-sm resize-y"
                    />
                  </label>
                </div>

                <button 
                  type="submit"
                  className="mt-8 w-full inline-flex justify-center items-center gap-3 bg-[#121212] hover:bg-[#252525] text-[#C5A038] px-8 py-4 text-xs font-bold uppercase tracking-widest rounded-xl transition-all shadow-lg hover:-translate-y-0.5 border border-[#C5A038]/50"
                >
                  Send Enquiry <Send size={15} />
                </button>

                {sent && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                    className="mt-6 p-4 rounded-xl bg-emerald-50 border border-emerald-100 text-center"
                  >
                    <p className="text-xs text-emerald-800 font-medium">
                      Your email app should open with the enquiry details. Please send the email to complete your request.
                    </p>
                  </motion.div>
                )}
              </form>
            </motion.div>

          </div>
        </div>
      </section>

      {/* --- ARCHITECTURAL MAP EMBED --- */}
      <section className="bg-white py-12 px-6 sm:px-8 border-t border-black/5">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-3xl overflow-hidden border border-[#C5A038]/20 shadow-xl h-[400px] relative">
            {/* Optional Overlay to make the map look slightly muted/branded until hovered */}
            <div className="absolute inset-0 bg-[#C5A038]/5 mix-blend-overlay pointer-events-none z-10" />
            
            <iframe 
              title="Aesthetic Homez location in Panipat" 
              src="https://www.google.com/maps?q=Plot%20No.%203295%2F1%2C%20G.T.%20Road%2C%20Panipat%2C%20Haryana&output=embed" 
              className="h-full w-full border-0 grayscale-[20%] contrast-[1.1] hover:grayscale-0 transition-all duration-700" 
              loading="lazy"
              allowFullScreen=""
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

    </div>
  );
}