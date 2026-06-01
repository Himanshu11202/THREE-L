'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from './ui/Button';
import { COMPANY_NAME } from '@/constants/branding';
import { SITE_INFO } from '@/data/siteData';

export const Hero = () => {
  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 90;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section 
      id="home" 
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-black py-20"
    >
      {/* Background Video Support with Image Fallback */}
      <div className="absolute inset-0 w-full h-full object-cover pointer-events-none z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          poster="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1920"
        >
          <source 
            src="https://assets.mixkit.co/videos/preview/mixkit-modern-apartment-building-architectural-design-44283-large.mp4" 
            type="video/mp4" 
          />
        </video>
      </div>

      {/* Multi-layered dark overlay to create ultimate luxury mood */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-luxury-black z-1" />
      
      {/* Glassmorphism subtle grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] z-1" />

      {/* Luxury Glowing accents */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 glow-accent w-[400px] h-[400px] z-1" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 glow-accent w-[400px] h-[400px] z-1" />

      {/* Hero Content */}
      <div className="relative z-10 w-[90%] max-w-5xl text-center flex flex-col items-center">
        {/* Subtle upper tag */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-luxury-gold/30 bg-luxury-gold/10 backdrop-blur-md mb-6"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-luxury-gold animate-pulse" />
          <span className="text-[10px] md:text-xs uppercase tracking-widest font-semibold text-luxury-gold">
            {SITE_INFO.tagline}
          </span>
        </motion.div>

        {/* Large Premium Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: 'easeOut' }}
          className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black text-gradient tracking-tight leading-[1.05] mb-6"
        >
          Engineering <br className="hidden md:block" />
          <span className="text-gradient-gold">Luxury Concrete</span> structures
        </motion.h1>

        {/* Premium Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: 'easeOut' }}
          className="text-sm sm:text-base md:text-lg lg:text-xl text-luxury-muted font-normal max-w-3xl leading-relaxed mb-10"
        >
          {COMPANY_NAME} delivers bespoke civil engineering, corporate complexes, and elite residential developments. We fuse advanced structural safety with avant-garde architectural beauty.
        </motion.p>

        {/* Call to Actions */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6, ease: 'easeOut' }}
          className="flex flex-col sm:flex-row gap-4 items-center justify-center w-full sm:w-auto"
        >
          <Button
            variant="primary"
            size="lg"
            onClick={() => handleScrollTo('projects')}
            className="w-full sm:w-auto text-xs md:text-sm font-semibold tracking-wider px-8 py-4"
          >
            View Projects
          </Button>
          
          <Button
            variant="secondary"
            size="lg"
            onClick={() => handleScrollTo('contact')}
            className="w-full sm:w-auto text-xs md:text-sm font-semibold tracking-wider px-8 py-4 backdrop-blur-md"
          >
            Get Quote
          </Button>
        </motion.div>
      </div>

      {/* Animated scroll down indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 hidden md:flex flex-col items-center gap-2 cursor-pointer opacity-70 hover:opacity-100 transition-opacity"
        onClick={() => handleScrollTo('about')}
      >
        <span className="text-[10px] uppercase tracking-widest text-luxury-muted">Scroll</span>
        <div className="w-5 h-9 rounded-full border-2 border-white/20 p-1 flex justify-center">
          <motion.div
            animate={{ 
              y: [0, 12, 0],
            }}
            transition={{ 
              duration: 1.5, 
              repeat: Infinity, 
              ease: 'easeInOut' 
            }}
            className="w-1.5 h-2.5 rounded-full bg-luxury-gold"
          />
        </div>
      </motion.div>
    </section>
  );
};
export default Hero;
