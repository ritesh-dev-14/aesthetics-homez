// import { useState } from 'react'
// import { Link, NavLink, Outlet } from 'react-router-dom'
// import { AnimatePresence, motion } from 'framer-motion'
// import { ArrowUpRight, Menu, X, Instagram, Facebook, Youtube, Linkedin, Mail, Phone, MapPin } from 'lucide-react'

// const nav = [
//   ['Home', '/'],
//   ['About Us', '/about'],
//   ['Collections', '/products'],
//   ['Contact', '/contact']
// ]

// export default function Layout() {
//   const [open, setOpen] = useState(false)
//   return (
//     <div className="min-h-screen bg-ivory text-ink">
//       <header className="fixed inset-x-0 top-0 z-50 border-b border-black/5 bg-ivory/90 backdrop-blur-xl">
//         <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 sm:px-8">
//           <Link to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
//             <img src="/logo.jpg" alt="Aesthetic Homez" className="h-14 w-20 object-contain sm:h-16 sm:w-24" />
//             <span className="hidden border-l border-gold/50 pl-3 text-[9px] uppercase tracking-[.22em] text-black/55 sm:block">Brings you close<br/>to luxury</span>
//           </Link>
//           <nav className="hidden items-center gap-9 md:flex">
//             {nav.map(([label, to]) => <NavLink key={to} to={to} end={to === '/'} className={({isActive}) => `nav-link ${isActive ? 'nav-active' : ''}`}>{label}</NavLink>)}
//           </nav>
//           <Link to="/contact" className="hidden items-center gap-2 bg-ink px-5 py-3 text-[10px] font-bold uppercase tracking-[.16em] text-white transition hover:bg-gold md:inline-flex">Enquire now <ArrowUpRight size={14}/></Link>
//           <button onClick={() => setOpen(!open)} className="p-2 md:hidden" aria-label="Toggle navigation">{open ? <X/> : <Menu/>}</button>
//         </div>
//         <AnimatePresence>
//           {open && <motion.nav initial={{height:0,opacity:0}} animate={{height:'auto',opacity:1}} exit={{height:0,opacity:0}} className="overflow-hidden border-t border-black/5 bg-ivory px-6 md:hidden">
//             <div className="flex flex-col py-4">{nav.map(([label,to]) => <Link key={to} to={to} onClick={() => setOpen(false)} className="border-b border-black/5 py-4 font-display text-2xl">{label}</Link>)}</div>
//           </motion.nav>}
//         </AnimatePresence>
//       </header>
//       <main><Outlet/></main>
//       <footer className="bg-[#171713] text-white">
//         <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-8 lg:grid-cols-[1.2fr_.8fr_1fr]">
//           <div>
//             <img src="/logo.jpg" alt="Aesthetic Homez" className="mb-6 h-24 w-44 rounded bg-white object-contain p-2"/>
//             <p className="max-w-sm font-display text-3xl leading-tight">We develop & create modern textiles.</p>
//             <p className="mt-5 max-w-sm text-sm leading-7 text-white/50">Thoughtfully selected curtains, upholstery and blinds for beautiful residential, hospitality and commercial spaces.</p>
//             <div className="mt-6 flex gap-3">{[Facebook,Instagram,Youtube,Linkedin].map((Icon,i)=><a key={i} href={['https://www.facebook.com/','https://www.instagram.com/','https://www.youtube.com/','https://www.linkedin.com/'][i]} target="_blank" rel="noreferrer" className="rounded-full border border-white/15 p-3 transition hover:border-gold hover:text-gold"><Icon size={16}/></a>)}</div>
//           </div>
//           <div>
//             <p className="eyebrow-light mb-6">Explore</p>
//             {nav.map(([label,to])=><Link key={to} to={to} className="mb-4 block text-sm text-white/60 transition hover:text-gold">{label}</Link>)}
//             <a href="/privacy-policy" className="mt-8 block text-sm text-white/50">Privacy Policy</a>
//           </div>
//           <div>
//             <p className="eyebrow-light mb-6">Say hello</p>
//             <a className="footer-contact" href="mailto:info@aesthetichomez.com"><Mail size={16}/> info@aesthetichomez.com</a>
//             <a className="footer-contact" href="tel:+919817802201"><Phone size={16}/> +91 98178 02201</a>
//             <a className="footer-contact" href="tel:+919878721079"><Phone size={16}/> +91 98787 21079</a>
//             <p className="footer-contact items-start"><MapPin size={17} className="mt-1 shrink-0"/> Plot No. 3295/1, Opposite Hotel Hive, Adjacent to S.D. School, G.T. Road, Panipat – 132103, Haryana, India</p>
//           </div>
//         </div>
//         <div className="border-t border-white/10 px-5 py-5 text-center text-[10px] uppercase tracking-[.16em] text-white/35">Aesthetic Homez © 2026. All Rights Reserved.</div>
//       </footer>
//     </div>
//   )
// }



import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F2] text-[#121212] selection:bg-[#C5A038] selection:text-white">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}