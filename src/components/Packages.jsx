import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, MessageCircle, Sparkles, Star } from 'lucide-react';
import packagesData from '../data/packages.json';

export default function Packages() {
  return (
    <section id="packages" className="py-20 bg-cream relative overflow-hidden border-b border-mint/60">
      
      {/* Background ambient accents */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-mint/40 rounded-full blur-3xl -translate-y-1/2 pointer-events-none" />
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-blush/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brass/10 border border-brass/30 text-brass text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Curated Styling Collections</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-charcoal mb-4">
            Tailored Event Décor Packages
          </h2>
          <p className="text-base sm:text-lg text-charcoal/70 font-sans">
            Choose from our stop-gap packages or request a completely bespoke theme customized to your venue, floral preferences, and ceremony rituals.
          </p>
        </div>

        {/* 3-Tier Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {packagesData.map((pkg, idx) => {
            const encodedMsg = encodeURIComponent(
              `Hi Mayukha Creations, I'm interested in inquiring about "${pkg.name}" for an upcoming ceremony. Please provide pricing and availability.`
            );

            return (
              <motion.div
                key={pkg.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className={`relative rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 ${
                  pkg.isPopular
                    ? 'bg-white shadow-xl border-2 border-sage scale-100 md:-translate-y-2'
                    : 'bg-white/80 backdrop-blur-md shadow-md border border-mint hover:shadow-lg hover:-translate-y-1'
                }`}
              >
                {/* Popular Tag */}
                {pkg.isPopular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-sage text-white text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full shadow-md flex items-center gap-1.5">
                    <Star className="w-3.5 h-3.5 fill-current text-brass" />
                    <span>Most Popular Collection</span>
                  </div>
                )}

                <div>
                  {/* Package Title & Tagline */}
                  <div className="mb-6">
                    <h3 className="font-serif text-2xl font-bold text-charcoal mb-2">
                      {pkg.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-charcoal/70 font-sans leading-relaxed min-h-[40px]">
                      {pkg.tagline}
                    </p>
                  </div>

                  {/* Pricing Badge */}
                  <div className="mb-8 p-4 rounded-2xl bg-mint-light/80 border border-mint flex items-center justify-between">
                    <span className="text-xs uppercase font-semibold text-charcoal/60">Investment</span>
                    <span className="font-serif text-xl font-bold text-sage-dark">{pkg.startingPrice}</span>
                  </div>

                  {/* Feature Checklist */}
                  <div className="space-y-3.5 mb-8">
                    <h4 className="text-xs uppercase font-bold text-brass tracking-wider mb-4">
                      Deliverable Highlights:
                    </h4>
                    {pkg.features.map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-3 text-xs sm:text-sm text-charcoal/80">
                        <CheckCircle2 className="w-4 h-4 text-sage flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* WhatsApp Inquiry Button */}
                <div className="pt-6 border-t border-mint">
                  <a
                    href={`https://wa.me/919550163099?text=${encodedMsg}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-full text-sm font-medium transition-all shadow-sm ${
                      pkg.isPopular
                        ? 'bg-sage hover:bg-sage-dark text-white shadow-md hover:shadow-lg'
                        : 'bg-mint hover:bg-sage/20 text-charcoal hover:text-sage-dark border border-sage/30'
                    }`}
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>{pkg.ctaText}</span>
                  </a>
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
