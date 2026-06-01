'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, MessageCircle, ArrowUp } from 'lucide-react';
import { SITE_INFO } from '@/data/siteData';

export const FloatingActions = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  // Convert phone string into simple numeric format for link
  const cleanPhone = SITE_INFO.phone.replace(/[^0-9+]/g, '');

  return (
    <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-40 items-end select-none">
      
      {/* WhatsApp Button */}
      <motion.a
        href={`https://wa.me/${cleanPhone}`}
        target="_blank"
        rel="noopener noreferrer"
        className="w-12 h-12 rounded-full bg-emerald-500/10 dark:bg-emerald-500/15 border border-emerald-500/35 flex items-center justify-center text-emerald-500 hover:text-white hover:bg-emerald-500 transition-colors shadow-lg cursor-pointer backdrop-blur-md relative group"
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        title="Chat on WhatsApp"
      >
        <span className="absolute inset-0 rounded-full bg-emerald-500/20 animate-ping opacity-75 group-hover:hidden" />
        <MessageCircle size={20} className="fill-current" />
      </motion.a>

      {/* Call Button */}
      <motion.a
        href={`tel:${cleanPhone}`}
        className="w-12 h-12 rounded-full bg-luxury-gold/10 dark:bg-luxury-gold/15 border border-luxury-gold/30 flex items-center justify-center text-luxury-gold hover:text-luxury-black dark:hover:text-black hover:bg-luxury-gold transition-colors shadow-lg cursor-pointer backdrop-blur-md"
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        title="Call Our Office"
      >
        <Phone size={18} className="fill-current" />
      </motion.a>

      {/* Back to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            onClick={scrollToTop}
            initial={{ opacity: 0, scale: 0.5, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: 15 }}
            className="w-12 h-12 rounded-full bg-white/5 border border-black/10 dark:border-white/10 flex items-center justify-center text-luxury-accent hover:text-luxury-gold transition-colors shadow-lg cursor-pointer backdrop-blur-md focus:outline-none"
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            title="Scroll to Top"
          >
            <ArrowUp size={18} />
          </motion.button>
        )}
      </AnimatePresence>
      
    </div>
  );
};

export default FloatingActions;
