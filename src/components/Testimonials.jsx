import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, Sparkles } from 'lucide-react';
import reviewsData from '../data/reviews.json';

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-cream relative overflow-hidden border-b border-mint/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brass/10 border border-brass/30 text-brass text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Client Words</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-charcoal mb-4">
            Loved by Hosts Across Telangana & AP
          </h2>
          <p className="text-base sm:text-lg text-charcoal/70 font-sans">
            Hear what our clients say about our meticulous floral design, punctual setup, and serene event atmospheres.
          </p>
        </div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviewsData.map((rev, idx) => (
            <motion.div
              key={rev.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="bg-white rounded-3xl p-8 border border-mint shadow-md flex flex-col justify-between relative hover:shadow-xl transition-all duration-300"
            >
              <div>
                {/* Quote Icon */}
                <Quote className="w-8 h-8 text-blush-dark/40 mb-4" />
                
                {/* Star Rating */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current text-brass" />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-sm text-charcoal/80 font-sans italic leading-relaxed mb-6">
                  "{rev.review}"
                </p>
              </div>

              {/* Author Footer */}
              <div className="pt-4 border-t border-mint flex flex-col">
                <span className="font-serif text-base font-bold text-charcoal">
                  {rev.clientName}
                </span>
                <span className="text-xs font-medium text-sage-dark">
                  {rev.eventType} • {rev.location}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
