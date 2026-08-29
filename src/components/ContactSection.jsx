import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, MessageCircle, MapPin, Calendar, Sparkles, Send } from 'lucide-react';

const Instagram = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const eventTypes = [
  'Wedding / Mandap Styling',
  'Pellikuthuru / Pellikoduku',
  'Haldi & Mehendi Night',
  'Half-Saree / Dhoti Function',
  'Baby Shower / Cradle Ceremony',
  'Birthday Styling',
  'Sangeet & Reception',
  'Corporate / Other Event',
];

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    eventDate: '',
    eventType: 'Wedding / Mandap Styling',
    location: '',
    notes: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = `Hi Mayukha Creations! I would like to inquire about decor services:
- Name: ${formData.name}
- Phone: ${formData.phone}
- Event Type: ${formData.eventType}
- Date: ${formData.eventDate || 'TBD'}
- Venue / Location: ${formData.location || 'Hyderabad / AP'}
- Additional Notes: ${formData.notes || 'N/A'}`;

    const encoded = encodeURIComponent(text);
    window.open(`https://wa.me/919550163099?text=${encoded}`, '_blank');
  };

  return (
    <section id="contact" className="py-20 bg-cream relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brass/10 border border-brass/30 text-brass text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Get In Touch</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-charcoal mb-4">
            Let's Design Your Dream Event
          </h2>
          <p className="text-base sm:text-lg text-charcoal/70 font-sans">
            Reach out directly on WhatsApp or submit the form below to receive a personalized consultation and tailored moodboard quote.
          </p>
        </div>

        {/* Two-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Contact & Social Cards */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 space-y-6"
          >
            {/* Primary Phone / WhatsApp Card */}
            <div className="bg-white rounded-3xl p-8 border border-mint shadow-md hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-2xl bg-sage/20 text-sage-dark flex items-center justify-center mb-4">
                <Phone className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl font-bold text-charcoal mb-1">
                Direct WhatsApp & Call
              </h3>
              <p className="text-xs text-charcoal/70 mb-4">
                Instant inquiry dispatcher & phone consultation
              </p>
              <a
                href="https://wa.me/919550163099"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-lg font-bold text-sage-dark hover:text-brass transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
                <span>+91 9550163099</span>
              </a>
            </div>

            {/* Instagram Card */}
            <div className="bg-white rounded-3xl p-8 border border-mint shadow-md hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-2xl bg-blush/20 text-blush-dark flex items-center justify-center mb-4">
                <Instagram className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl font-bold text-charcoal mb-1">
                Instagram Portfolio Feed
              </h3>
              <p className="text-xs text-charcoal/70 mb-4">
                Follow us for live setup videos & stories
              </p>
              <a
                href="https://instagram.com/MayukhaCurations"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-base font-bold text-charcoal hover:text-sage-dark transition-colors"
              >
                <span>@MayukhaCurations</span>
              </a>
            </div>

            {/* Service Areas Card */}
            <div className="bg-mint-light/80 rounded-3xl p-8 border border-mint">
              <div className="flex items-center gap-3 text-sage-dark mb-2">
                <MapPin className="w-5 h-5" />
                <h4 className="font-serif text-lg font-bold text-charcoal">Service Coverage</h4>
              </div>
              <p className="text-xs sm:text-sm text-charcoal/80 font-sans leading-relaxed">
                Hyderabad, Jubilee Hills, Banjara Hills, Gachibowli, Secunderabad, and destination venues across Telangana & Andhra Pradesh.
              </p>
            </div>

          </motion.div>

          {/* Right Column: WhatsApp Dispatcher Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-7 bg-white rounded-3xl p-8 sm:p-10 border border-mint shadow-xl"
          >
            <h3 className="font-serif text-2xl font-bold text-charcoal mb-2">
              Send an Event Inquiry
            </h3>
            <p className="text-xs sm:text-sm text-charcoal/70 mb-6 font-sans">
              Fill in your event details below to dispatch a pre-formatted message directly to our WhatsApp hotline.
            </p>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-bold text-charcoal/80 uppercase tracking-wider mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Ananya Rao"
                    className="w-full px-4 py-3 rounded-2xl bg-cream-light border border-mint/80 focus:border-sage focus:outline-none text-sm transition-colors text-charcoal"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-charcoal/80 uppercase tracking-wider mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="e.g. +91 9876543210"
                    className="w-full px-4 py-3 rounded-2xl bg-cream-light border border-mint/80 focus:border-sage focus:outline-none text-sm transition-colors text-charcoal"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-bold text-charcoal/80 uppercase tracking-wider mb-2">
                    Event Type
                  </label>
                  <select
                    name="eventType"
                    value={formData.eventType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-2xl bg-cream-light border border-mint/80 focus:border-sage focus:outline-none text-sm transition-colors text-charcoal"
                  >
                    {eventTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-charcoal/80 uppercase tracking-wider mb-2">
                    Event Date
                  </label>
                  <input
                    type="date"
                    name="eventDate"
                    value={formData.eventDate}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-2xl bg-cream-light border border-mint/80 focus:border-sage focus:outline-none text-sm transition-colors text-charcoal"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-charcoal/80 uppercase tracking-wider mb-2">
                  Venue / Location
                </label>
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  placeholder="e.g. Jubilee Hills, Hyderabad or Function Hall Name"
                  className="w-full px-4 py-3 rounded-2xl bg-cream-light border border-mint/80 focus:border-sage focus:outline-none text-sm transition-colors text-charcoal"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-charcoal/80 uppercase tracking-wider mb-2">
                  Special Decor Requests & Notes
                </label>
                <textarea
                  name="notes"
                  rows="3"
                  value={formData.notes}
                  onChange={handleChange}
                  placeholder="Describe your theme, floral preferences (marigold, roses, lotus), seating count..."
                  className="w-full px-4 py-3 rounded-2xl bg-cream-light border border-mint/80 focus:border-sage focus:outline-none text-sm transition-colors text-charcoal resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 bg-sage hover:bg-sage-dark text-white py-4 rounded-2xl font-medium text-base shadow-md hover:shadow-lg transition-all"
              >
                <Send className="w-4 h-4" />
                <span>Send WhatsApp Inquiry Now</span>
              </button>

            </form>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
