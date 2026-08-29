import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PortfolioGrid from './components/PortfolioGrid';
import Packages from './components/Packages';
import Process from './components/Process';
import Testimonials from './components/Testimonials';
import ContactSection from './components/ContactSection';
import FloatingActions from './components/FloatingActions';
import Footer from './components/Footer';

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Mayukha Creations",
  "image": "https://images.unsplash.com/photo-1519741497674-611481863552",
  "telephone": "+919550163099",
  "url": "https://saiashwinvasireddy.github.io/mayukhacurations/",
  "sameAs": [
    "https://instagram.com/MayukhaCurations"
  ],
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Hyderabad",
    "addressRegion": "Telangana",
    "addressCountry": "IN"
  },
  "priceRange": "$$$",
  "description": "Bespoke event design, floral architecture, traditional Indian and contemporary ceremony styling across Hyderabad, Telangana, and Andhra Pradesh."
};

export default function App() {
  return (
    <HelmetProvider>
      <div className="min-h-screen bg-cream text-charcoal flex flex-col font-sans">
        <Helmet>
          <title>Mayukha Creations | Bespoke Floral & Event Styling</title>
          <meta name="description" content="Elevating weddings, intimate ceremonies, half-saree functions, birthdays, and celebrations across Hyderabad, Telangana, and Andhra Pradesh." />
          <script type="application/ld+json">
            {JSON.stringify(jsonLd)}
          </script>
        </Helmet>

        {/* Glassmorphic Sticky Navbar */}
        <Navbar />

        {/* Main Content Sections */}
        <main className="flex-grow">
          <Hero />
          <PortfolioGrid />
          <Packages />
          <Process />
          <Testimonials />
          <ContactSection />
        </main>

        {/* Persistent Floating WhatsApp & IG Widgets */}
        <FloatingActions />

        {/* Footer */}
        <Footer />
      </div>
    </HelmetProvider>
  );
}
