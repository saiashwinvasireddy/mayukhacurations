import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Sparkles, CheckCircle2, Flower2 } from 'lucide-react';

const Instagram = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const badges = [
  '100% Customized Themes',
  'Traditional & Contemporary Styles',
  'End-to-End On-Site Execution',
];

export default function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden pt-12 pb-20 md:py-24 bg-gradient-to-br from-mint-light via-cream to-cream-light border-b border-mint/60">
      
      {/* Decorative ambient blurred glow accents */}
      <div className="absolute top-10 left-1/4 w-72 h-72 bg-blush/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-sage/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Hero Copy Column */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 text-center lg:text-left"
          >
            {/* Eyebrow Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brass/10 border border-brass/30 text-brass text-xs font-semibold tracking-widest uppercase mb-6">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Bespoke Event Styling & Floral Décor</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-charcoal leading-[1.15] mb-6">
              Crafting Timeless Moments & <br className="hidden sm:inline" />
              <span className="italic text-sage-dark font-normal">Unforgettable Atmospheres.</span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg sm:text-xl text-charcoal/80 max-w-2xl font-sans font-normal leading-relaxed mb-8 mx-auto lg:mx-0">
              Elevating weddings, intimate ceremonies, half-saree functions, birthdays, and celebrations across Hyderabad, Telangana, and Andhra Pradesh with handcrafted floral architecture and custom themes.
            </p>

            {/* Dual CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-10">
              <a
                href="https://wa.me/919550163099?text=Hi%20Mayukha%20Creations%2C%20I'm%20interested%20in%20discussing%20decor%20for%20an%20upcoming%20event."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-sage hover:bg-sage-dark text-white px-8 py-4 rounded-full font-medium text-base shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Chat on WhatsApp</span>
              </a>

              <a
                href="https://instagram.com/MayukhaCurations"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-white/80 hover:bg-white text-charcoal border border-sage/30 hover:border-sage px-7 py-4 rounded-full font-medium text-base transition-all duration-300 shadow-sm hover:shadow-md"
              >
                <Instagram className="w-5 h-5 text-blush-dark" />
                <span>View Instagram Feed</span>
              </a>
            </div>

            {/* Highlight Badges */}
            <div className="pt-6 border-t border-sage/15 flex flex-wrap items-center justify-center lg:justify-start gap-y-3 gap-x-6">
              {badges.map((badge, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs sm:text-sm font-medium text-charcoal/80">
                  <CheckCircle2 className="w-4 h-4 text-sage" />
                  <span>{badge}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Visual Showcase Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Image Frame with Soft Shadow & Border */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-white">
                <img
                  src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1000&q=80"
                  alt="Mayukha Creations Floral Décor Mandap"
                  className="w-full h-[420px] sm:h-[480px] object-cover object-center transform hover:scale-105 transition-transform duration-700"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent flex flex-col justify-end p-6 text-white">
                  <div className="flex items-center gap-2 text-brass text-xs font-semibold uppercase tracking-wider mb-1">
                    <Flower2 className="w-4 h-4" />
                    <span>Signature Mandap Styling</span>
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-white">Traditional & Modern Fusion</h3>
                  <p className="text-xs text-white/80 mt-1">Jubilee Hills, Hyderabad</p>
                </div>
              </div>

              {/* Floating Highlight Badge */}
              <div className="absolute -bottom-6 -left-4 sm:-left-6 bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-mint flex items-center gap-3 max-w-[220px]">
                <div className="w-10 h-10 rounded-full bg-blush/30 text-blush-dark flex items-center justify-center font-bold text-lg">
                  ★
                </div>
                <div>
                  <div className="text-xs font-bold text-charcoal">Hyderabad & AP</div>
                  <div className="text-[11px] text-charcoal/70">On-Site Decor Team</div>
                </div>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
