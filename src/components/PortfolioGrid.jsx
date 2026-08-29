import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ZoomIn, MapPin, Sparkles } from 'lucide-react';
import portfolioData from '../data/portfolio.json';
import LightboxModal from './LightboxModal';

const categories = [
  'All',
  'Weddings & Mandaps',
  'Haldi & Mehendi',
  'Birthdays & Half-Saree',
  'Baby Shower / Cradle',
  'Floral & Backdrops',
];

export default function PortfolioGrid() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedItem, setSelectedItem] = useState(null);

  const filteredItems = activeCategory === 'All'
    ? portfolioData
    : portfolioData.filter((item) => item.category === activeCategory);

  return (
    <section id="portfolio" className="py-20 bg-cream-light border-b border-mint/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brass/10 border border-brass/30 text-brass text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Curated Portfolio</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-charcoal mb-4">
            Floral Architecture & Ceremony Styling
          </h2>
          <p className="text-base sm:text-lg text-charcoal/70 font-sans">
            Explore our handcrafted setups across traditional rituals, grand mandaps, vibrant haldi patang stages, and milestone birthday celebrations.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          {categories.map((category) => {
            const isActive = activeCategory === category;
            return (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 ${
                  isActive
                    ? 'bg-sage text-white shadow-md'
                    : 'bg-white text-charcoal/80 hover:bg-mint hover:text-sage-dark border border-mint/80'
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Gallery Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          <AnimatePresence>
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group relative rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-xl transition-all duration-500 cursor-pointer border border-mint/60"
                onClick={() => setSelectedItem(item)}
              >
                {/* Image Container with aspect-ratio */}
                <div className="relative aspect-[4/5] overflow-hidden bg-mint/30">
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  />
                  
                  {/* Category Tag pill */}
                  <div className="absolute top-4 left-4 z-10">
                    <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-charcoal text-[11px] font-semibold tracking-wide shadow-sm">
                      {item.category}
                    </span>
                  </div>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 text-white">
                    <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs text-brass font-medium flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5" />
                          {item.location}
                        </span>
                        <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white">
                          <ZoomIn className="w-4 h-4" />
                        </div>
                      </div>
                      <h3 className="font-serif text-xl font-bold text-white mb-1">
                        {item.title}
                      </h3>
                      <p className="text-xs text-white/80 line-clamp-2">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Card Bottom Label for non-hover accessibility */}
                <div className="p-4 bg-white flex items-center justify-between sm:hidden">
                  <div>
                    <h4 className="font-serif text-base font-semibold text-charcoal">{item.title}</h4>
                    <p className="text-xs text-charcoal/60">{item.location}</p>
                  </div>
                  <ZoomIn className="w-4 h-4 text-sage" />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Lightbox Popover */}
        <LightboxModal
          item={selectedItem}
          onClose={() => setSelectedItem(null)}
        />

      </div>
    </section>
  );
}
