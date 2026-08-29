import React from 'react';
import { MessageCircle, Heart } from 'lucide-react';

const Instagram = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

export default function Footer() {
  return (
    <footer className="bg-charcoal text-cream-light pt-16 pb-12 border-t border-charcoal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-12">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-sage text-white font-serif font-bold text-xl flex items-center justify-center">
                M
              </div>
              <span className="font-serif text-2xl font-bold tracking-tight text-cream">
                Mayukha Creations
              </span>
            </div>
            <p className="text-xs sm:text-sm text-cream/70 font-sans leading-relaxed max-w-sm">
              Crafting bespoke floral architectures, traditional mandap installations, and contemporary ceremony decor across Hyderabad, Telangana, and Andhra Pradesh.
            </p>
            <div className="pt-2 flex items-center gap-3">
              <a
                href="https://instagram.com/MayukhaCurations"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-white/10 text-cream hover:bg-sage transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://wa.me/919550163099"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-white/10 text-cream hover:bg-sage transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-serif text-lg font-semibold text-brass">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-cream/80">
              <li><a href="#hero" className="hover:text-brass transition-colors">Home</a></li>
              <li><a href="#portfolio" className="hover:text-brass transition-colors">Curated Portfolio</a></li>
              <li><a href="#packages" className="hover:text-brass transition-colors">Decor Packages</a></li>
              <li><a href="#process" className="hover:text-brass transition-colors">4-Step Workflow</a></li>
              <li><a href="#testimonials" className="hover:text-brass transition-colors">Client Reviews</a></li>
              <li><a href="#contact" className="hover:text-brass transition-colors">WhatsApp Hotline</a></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="font-serif text-lg font-semibold text-brass">
              Contact & Coverage
            </h4>
            <div className="text-xs sm:text-sm text-cream/80 space-y-2">
              <p><strong className="text-cream">Hotline:</strong> +91 9550163099</p>
              <p><strong className="text-cream">Instagram:</strong> @MayukhaCurations</p>
              <p><strong className="text-cream">Primary Regions:</strong> Hyderabad (Jubilee Hills, Banjara Hills, Gachibowli, Madhapur), Telangana & Andhra Pradesh.</p>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-cream/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-cream/60">
          <p>© {new Date().getFullYear()} Mayukha Creations. All rights reserved.</p>
          <p className="flex items-center gap-1">
            <span>Handcrafted with</span>
            <Heart className="w-3.5 h-3.5 text-blush inline fill-current" />
            <span>for timeless celebrations</span>
          </p>
        </div>

      </div>
    </footer>
  );
}
