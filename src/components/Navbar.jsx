import React, { useState, useEffect } from 'react';
import { MessageCircle, Menu, X, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Instagram = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const navLinks = [
  { name: 'Home', href: '#hero' },
  { name: 'Portfolio', href: '#portfolio' },
  { name: 'Packages', href: '#packages' },
  { name: 'Process', href: '#process' },
  { name: 'Testimonials', href: '#testimonials' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${
      scrolled ? 'glass-header shadow-sm border-b border-mint' : 'bg-cream/90 backdrop-blur-md border-b border-mint/50'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Brand Monogram & Title */}
          <a href="#hero" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-full bg-sage/20 border border-sage/40 flex items-center justify-center text-sage-dark font-serif font-bold text-xl group-hover:bg-sage group-hover:text-white transition-all duration-300 shadow-sm">
              M
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-charcoal group-hover:text-sage-dark transition-colors">
                Mayukha Curations
              </span>
              <span className="text-[10px] tracking-widest uppercase font-medium text-brass">
                Bespoke Floral & Event Styling
              </span>
            </div>
          </a>

          {/* Desktop Navigation Anchors */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-charcoal/80 hover:text-sage-dark transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-brass hover:after:w-full after:transition-all after:duration-300"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop Action Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="https://instagram.com/MayukhaCurations"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full text-charcoal hover:text-sage-dark hover:bg-mint transition-all duration-200"
              title="Follow @MayukhaCurations on Instagram"
              aria-label="Instagram Page"
            >
              <Instagram className="w-5 h-5" />
            </a>

            <a
              href="https://wa.me/919550163099?text=Hi%20Mayukha%20Curations%2C%20I'm%20interested%20in%20discussing%20decor%20for%20an%20upcoming%20event."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-sage hover:bg-sage-dark text-white px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-0.5"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp Direct</span>
            </a>
          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="flex md:hidden items-center gap-2">
            <a
              href="https://wa.me/919550163099"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-sage text-white rounded-full text-xs font-medium"
              aria-label="WhatsApp Us"
            >
              <MessageCircle className="w-4 h-4" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-charcoal hover:bg-mint rounded-lg transition-colors focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-cream border-b border-mint overflow-hidden px-4 pt-2 pb-6 shadow-lg"
          >
            <div className="flex flex-col gap-3 py-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 text-base font-medium text-charcoal hover:text-sage-dark hover:bg-mint/50 rounded-lg transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-3 border-t border-mint flex flex-col gap-3">
                <a
                  href="https://instagram.com/MayukhaCurations"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-charcoal hover:bg-mint/50 rounded-lg"
                >
                  <Instagram className="w-5 h-5 text-blush-dark" />
                  <span>@MayukhaCurations on Instagram</span>
                </a>
                <a
                  href="https://wa.me/919550163099?text=Hi%20Mayukha%20Curations%2C%20I'm%20interested%20in%20discussing%20decor%20for%20an%20upcoming%20event."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-sage text-white py-3 rounded-full font-medium text-sm shadow-sm"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Chat on WhatsApp (+91 9550163099)</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
