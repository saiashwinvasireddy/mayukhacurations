import React from 'react';
import { MessageCircle } from 'lucide-react';

const Instagram = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

export default function FloatingActions() {
  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3 pointer-events-auto">
      
      {/* Instagram Floating Widget */}
      <a
        href="https://instagram.com/MayukhaCurations"
        target="_blank"
        rel="noopener noreferrer"
        className="w-12 h-12 rounded-full bg-white text-charcoal shadow-lg border border-mint flex items-center justify-center hover:scale-110 hover:text-blush-dark transition-all duration-300 group"
        title="Follow @MayukhaCurations on Instagram"
        aria-label="Instagram Feed"
      >
        <Instagram className="w-5 h-5 group-hover:rotate-12 transition-transform" />
      </a>

      {/* WhatsApp Pulse Floating Button */}
      <a
        href="https://wa.me/919550163099?text=Hi%20Mayukha%20Curations%2C%20I'm%20interested%20in%20discussing%20decor%20for%20an%20upcoming%20event."
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 rounded-full bg-sage text-white shadow-xl flex items-center justify-center hover:bg-sage-dark hover:scale-105 transition-all duration-300 animate-pulse-subtle group"
        title="Chat on WhatsApp (+91 9550163099)"
        aria-label="WhatsApp Hotline"
      >
        <MessageCircle className="w-7 h-7 group-hover:scale-110 transition-transform" />
      </a>

    </div>
  );
}
