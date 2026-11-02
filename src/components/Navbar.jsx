import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ArrowUpRight, Phone, Sparkles } from 'lucide-react'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false)
  }, [location])

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Collections', path: '/products' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#121212]/95 backdrop-blur-md py-3 shadow-xl border-b border-[#C5A038]/20'
          : 'bg-gradient-to-b from-[#121212]/90 via-[#121212]/50 to-transparent py-5'
      }`}
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 flex items-center justify-between">
        {/* Brand Logo Component */}
        <Link to="/" className="group flex items-center gap-3">
          {/* Custom SVG Logo Mark matching image */}
          <div className="flex items-center gap-1.5 py-1">
            <span className="font-serif text-3xl font-bold text-white tracking-tighter group-hover:text-[#C5A038] transition-colors">
              A
            </span>
            <div className="h-7 w-[2px] bg-[#C5A038]" />
            <div className="flex flex-col items-center">
              <span className="font-serif text-xl font-bold text-white leading-none group-hover:text-[#C5A038] transition-colors">
                H
              </span>
              <div className="mt-0.5 grid grid-cols-2 gap-0.5 w-3.5 h-3.5 border border-[#C5A038] p-0.5 bg-[#C5A038]/10">
                <div className="bg-[#C5A038]" />
                <div className="bg-[#C5A038]" />
                <div className="bg-[#C5A038]" />
                <div className="bg-transparent" />
              </div>
            </div>
          </div>

          <div className="flex flex-col">
            <span className="font-serif text-lg tracking-[0.18em] font-semibold text-white uppercase leading-tight group-hover:text-[#C5A038] transition-colors">
              Aesthetic Homez
            </span>
            <span className="text-[9px] tracking-[0.12em] text-[#C5A038] uppercase font-medium">
              Brings You Close To Luxury
            </span>
            <span className="text-[7.5px] tracking-[0.08em] text-white/50 lowercase italic">
              by Swastik Home Decor
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path
            return (
              <Link
                key={link.name}
                to={link.path}
                className={`relative text-xs uppercase tracking-[0.2em] font-medium transition-colors py-1 ${
                  isActive ? 'text-[#C5A038]' : 'text-white/80 hover:text-white'
                }`}
              >
                {link.name}
                {isActive && (
                  <motion.div
                    layoutId="navIndicator"
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#C5A038]"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            )
          })}
        </nav>

        {/* Action Button & B2B Badge */}
        <div className="hidden lg:flex items-center gap-4">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-[#C5A038] text-[#121212] px-5 py-2.5 text-[11px] font-bold uppercase tracking-[0.18em] hover:bg-white transition-all shadow-md hover:shadow-[#C5A038]/20"
          >
            <span>B2B / Custom Consult</span>
            <ArrowUpRight size={14} />
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-white p-2 hover:text-[#C5A038] transition-colors"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#121212] border-b border-[#C5A038]/30 px-6 py-6"
          >
            <div className="flex flex-col gap-5">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`text-sm uppercase tracking-[0.2em] font-medium transition-colors ${
                    location.pathname === link.path ? 'text-[#C5A038]' : 'text-white/80'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
                <Link
                  to="/contact"
                  className="w-full text-center bg-[#C5A038] text-[#121212] py-3 text-xs font-bold uppercase tracking-wider"
                >
                  Partner With Us
                </Link>
                <a
                  href="tel:+919812000000"
                  className="flex items-center justify-center gap-2 text-xs text-white/70 py-2"
                >
                  <Phone size={14} className="text-[#C5A038]" />
                  <span>Panipat Experience Center</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}