import { Link } from 'react-router-dom'
import { ArrowUpRight, MapPin, Phone, Mail, Instagram, Facebook, Linkedin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-[#121212] text-white pt-20 pb-10 border-t border-[#C5A038]/20 relative overflow-hidden">
      {/* Background Accent Lines */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[1px] bg-gradient-to-r from-transparent via-[#C5A038]/50 to-transparent" />

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-12 pb-16 border-b border-white/10">
          
          {/* Brand Info */}
          <div className="lg:col-span-5 space-y-6">
            <Link to="/" className="flex items-center gap-3">
              <div className="flex items-center gap-1.5 py-1">
                <span className="font-serif text-3xl font-bold text-white tracking-tighter">A</span>
                <div className="h-7 w-[2px] bg-[#C5A038]" />
                <div className="flex flex-col items-center">
                  <span className="font-serif text-xl font-bold text-white leading-none">H</span>
                  <div className="mt-0.5 grid grid-cols-2 gap-0.5 w-3.5 h-3.5 border border-[#C5A038] p-0.5 bg-[#C5A038]/10">
                    <div className="bg-[#C5A038]" />
                    <div className="bg-[#C5A038]" />
                    <div className="bg-[#C5A038]" />
                    <div className="bg-transparent" />
                  </div>
                </div>
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-xl tracking-[0.18em] font-semibold text-white uppercase">
                  Aesthetic Homez
                </span>
                <span className="text-[10px] tracking-[0.14em] text-[#C5A038] uppercase font-medium">
                  Brings You Close To Luxury
                </span>
                <span className="text-[8.5px] tracking-[0.08em] text-white/50 lowercase italic">
                  by Swastik Home Decor
                </span>
              </div>
            </Link>

            <p className="text-sm text-white/60 leading-relaxed max-w-md">
              Panipat’s premier curtain, drapery, and upholstery atelier. Crafting bespoke luxury textiles, motorized drapes, and high-spec fabrics for residences, boutique hotels, and architectural spaces globally.
            </p>

            <div className="flex items-center gap-4 pt-2">
              {[
                { icon: Instagram, href: '#' },
                { icon: Facebook, href: '#' },
                { icon: Linkedin, href: '#' },
              ].map((item, idx) => (
                <a
                  key={idx}
                  href={item.href}
                  className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/70 hover:text-[#C5A038] hover:border-[#C5A038] transition-colors"
                >
                  <item.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs uppercase tracking-[0.2em] font-bold text-[#C5A038]">
              Navigation
            </h4>
            <ul className="space-y-3 text-sm text-white/70">
              <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/products" className="hover:text-white transition-colors">Curtains & Blinds</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">Our Panipat Story</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">B2B & Trade Program</Link></li>
            </ul>
          </div>

          {/* Product Offerings */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs uppercase tracking-[0.2em] font-bold text-[#C5A038]">
              Collections
            </h4>
            <ul className="space-y-3 text-sm text-white/70">
              <li><Link to="/products" className="hover:text-white transition-colors">Opulent Silk & Velvet</Link></li>
              <li><Link to="/products" className="hover:text-white transition-colors">Sheer Linen & Voiles</Link></li>
              <li><Link to="/products" className="hover:text-white transition-colors">Motorized Drapes</Link></li>
              <li><Link to="/products" className="hover:text-white transition-colors">Eco Blackout Fabrics</Link></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs uppercase tracking-[0.2em] font-bold text-[#C5A038]">
              Textile Hub HQ
            </h4>
            <ul className="space-y-3 text-xs text-white/70">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-[#C5A038] shrink-0 mt-0.5" />
                <span>Sector 25, HUDA Industrial Area, Panipat, Haryana - 132103, India</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-[#C5A038] shrink-0" />
                <span>+91 98120 00000 / +91 180 2600000</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-[#C5A038] shrink-0" />
                <span>concierge@aesthetichomez.com</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-white/40 gap-4">
          <p>© {new Date().getFullYear()} Aesthetic Homez (By Swastik Home Decor). All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Specification</a>
            <a href="#" className="hover:text-white transition-colors">Export Licensing</a>
          </div>
        </div>
      </div>
    </footer>
  )
}