import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Stats from '@/components/Stats';
import About from '@/components/About';
import Services from '@/components/Services';
import WhyChooseUs from '@/components/WhyChooseUs';
import Projects from '@/components/Projects';
import Gallery from '@/components/Gallery';
import SocialFeeds from '@/components/SocialFeeds';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="relative min-h-screen bg-luxury-black text-foreground overflow-x-hidden selection:bg-luxury-gold selection:text-luxury-black transition-colors duration-500">
      {/* Floating Navbar */}
      <Navbar />

      <main>
        {/* Full-screen Hero Section */}
        <Hero />

        {/* Dynamic Counters Stats Section */}
        <Stats />

        {/* Company Story & Founder Card Section */}
        <About />

        {/* 6 Premium Service Cards Section */}
        <Services />

        {/* Why Choose Us Values Section */}
        <WhyChooseUs />

        {/* Filterable Projects Showcase Section */}
        <Projects />

        {/* Masonry Layout Construction Gallery Section */}
        <Gallery />

        {/* Social Media Integration */}
        <SocialFeeds />

        {/* Clients Endorsements & Ratings Section */}
        <Testimonials />

        {/* Lead Consultation Interactive Form Section */}
        <Contact />
      </main>

      {/* Premium Footer */}
      <Footer />
    </div>
  );
}
