import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Calendar, Palette, Scissors, Sparkle } from 'lucide-react';

const steps = [
  {
    number: '01',
    title: 'Discovery & Consultation',
    description: 'Share your event vision, venue, dates, preferred ritual aesthetics, and color preferences with our styling leads.',
    icon: Calendar,
  },
  {
    number: '02',
    title: 'Moodboard & Custom Quote',
    description: 'We curate tailored design moodboards, 3D spatial previews, and transparent itemized estimates for your approval.',
    icon: Palette,
  },
  {
    number: '03',
    title: 'Sourcing & Handcrafted Prep',
    description: 'Fresh exotic floral procurement, custom backdrop fabrication, and prop preparation in our dedicated workshop.',
    icon: Scissors,
  },
  {
    number: '04',
    title: 'On-Site Setup & Execution',
    description: 'Punctual, flawless venue transformation on your event day, accompanied by end-to-end post-event teardown.',
    icon: Sparkle,
  },
];

export default function Process() {
  return (
    <section id="process" className="py-20 bg-cream-light border-b border-mint/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brass/10 border border-brass/30 text-brass text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>How We Work</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-charcoal mb-4">
            The 4-Step Bespoke Process
          </h2>
          <p className="text-base sm:text-lg text-charcoal/70 font-sans">
            From initial consultation to final venue teardown, we handle every detail with artistic precision and stress-free care.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.12 }}
                className="relative bg-white rounded-3xl p-8 border border-mint shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  {/* Step Header */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-serif text-3xl font-bold text-sage-dark group-hover:text-brass transition-colors">
                      {step.number}
                    </span>
                    <div className="w-12 h-12 rounded-2xl bg-mint flex items-center justify-center text-sage-dark group-hover:bg-sage group-hover:text-white transition-colors duration-300">
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>

                  {/* Step Title & Description */}
                  <h3 className="font-serif text-xl font-bold text-charcoal mb-3">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-charcoal/70 font-sans leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-mint/60 flex items-center gap-1 text-[11px] font-semibold text-brass uppercase tracking-wider">
                  <span>Step {step.number} of 04</span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
