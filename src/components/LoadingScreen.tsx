'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import { BRAND } from '@/constants/branding';

export const LoadingScreen = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Ensure loading screen is visible for a short aesthetic duration
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 1800);

    return () => clearTimeout(timer);
  }, []);

  const textContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 1.0,
      }
    }
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring' as const, stiffness: 200 } }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            y: '-100%',
            transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } 
          }}
          className="fixed inset-0 z-[100] bg-[#050505] flex flex-col items-center justify-center select-none"
        >
          <div className="flex flex-col items-center gap-6">
            {/* Logo Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, ease: 'easeOut' }}
              className="w-24 h-24 md:w-28 md:h-28 flex items-center justify-center mb-2"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={BRAND.logo}
                alt={`${BRAND.companyName} Logo`}
                className="w-full h-full object-contain"
              />
            </motion.div>

            {/* Brand text drawing letter by letter */}
            <motion.div
              className="flex flex-col items-center gap-1.5"
              variants={textContainerVariants}
              initial="hidden"
              animate="visible"
            >
              <div className="flex gap-[0.2em]">
                {Array.from(BRAND.companyName).map((char, index) => (
                  <motion.span
                    key={index}
                    className="font-display font-black text-xl md:text-2xl tracking-[0.15em] text-white"
                    variants={letterVariants}
                  >
                    {char === ' ' ? '\u00A0' : char}
                  </motion.span>
                ))}
              </div>
              <div className="flex gap-[0.1em] text-center max-w-[90vw] justify-center flex-wrap">
                {Array.from(BRAND.tagline.toUpperCase()).map((char, index) => (
                  <motion.span
                    key={index}
                    className="font-sans font-semibold text-[8px] md:text-[9px] tracking-[0.3em] text-luxury-gold"
                    variants={letterVariants}
                  >
                    {char === ' ' ? '\u00A0' : char}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Aesthetic fine lines loading tracker */}
          <div className="absolute bottom-16 w-32 h-[1px] bg-white/10 overflow-hidden">
            <motion.div
              className="h-full bg-luxury-gold"
              initial={{ left: '-100%', width: '0%' }}
              animate={{ left: '100%', width: '100%' }}
              transition={{ duration: 1.6, ease: 'easeInOut' }}
              style={{ position: 'relative' }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
