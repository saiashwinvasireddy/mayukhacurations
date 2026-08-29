import React, { useEffect } from 'react';
import { X, MapPin, MessageCircle, Tag } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function LightboxModal({ item, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (item) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [item, onClose]);

  if (!item) return null;

  const whatsappMessage = encodeURIComponent(
    `Hi Mayukha Curations, I'm interested in getting details and a custom quote for decor similar to "${item.title}" (${item.category}).`
  );

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
        
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-charcoal/80 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ duration: 0.3 }}
          className="relative bg-cream rounded-3xl overflow-hidden shadow-2xl max-w-4xl w-full max-h-[90vh] flex flex-col md:flex-row z-10 border border-mint"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-charcoal/60 hover:bg-charcoal text-white transition-colors focus:outline-none"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Image Container */}
          <div className="md:w-3/5 bg-black flex items-center justify-center min-h-[300px] max-h-[500px] md:max-h-[600px] relative">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Details Sidebar */}
          <div className="md:w-2/5 p-6 sm:p-8 flex flex-col justify-between overflow-y-auto">
            <div>
              {/* Category badge */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sage/15 text-sage-dark text-xs font-semibold uppercase tracking-wider mb-4">
                <Tag className="w-3.5 h-3.5" />
                <span>{item.category}</span>
              </div>

              {/* Title */}
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-charcoal mb-3">
                {item.title}
              </h3>

              {/* Location */}
              {item.location && (
                <div className="flex items-center gap-1.5 text-xs font-medium text-brass mb-4">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>{item.location}</span>
                </div>
              )}

              {/* Description */}
              <p className="text-sm text-charcoal/80 font-sans leading-relaxed mb-6">
                {item.description}
              </p>
            </div>

            {/* Action */}
            <div className="pt-6 border-t border-mint">
              <a
                href={`https://wa.me/919550163099?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 bg-sage hover:bg-sage-dark text-white px-6 py-3.5 rounded-full text-sm font-medium transition-all shadow-md hover:shadow-lg"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Inquire Decor Like This</span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
