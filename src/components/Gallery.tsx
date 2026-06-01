'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GALLERY_DATA } from '@/data/siteData';
import { X, ChevronLeft, ChevronRight, Eye } from 'lucide-react';

export const Gallery = () => {
  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setActiveImageIndex(index);
  };

  const closeLightbox = () => {
    setActiveImageIndex(null);
  };

  const showNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeImageIndex === null) return;
    setActiveImageIndex((activeImageIndex + 1) % GALLERY_DATA.length);
  };

  const showPrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeImageIndex === null) return;
    setActiveImageIndex(
      (activeImageIndex - 1 + GALLERY_DATA.length) % GALLERY_DATA.length
    );
  };

  // Map card sizes to tailwind class setups
  const sizeClasses = {
    tall: 'row-span-2 h-[520px] md:h-auto',
    wide: 'col-span-1 md:col-span-2 h-[250px]',
    standard: 'col-span-1 h-[250px]',
  };

  return (
    <section id="gallery" className="relative py-24 bg-luxury-black overflow-hidden border-b border-white/5">
      {/* Glow backgrounds */}
      <div className="absolute top-1/4 right-1/10 glow-accent w-[350px] h-[350px]" />
      <div className="absolute bottom-1/4 left-1/10 glow-accent w-[350px] h-[350px]" />

      <div className="relative z-10 w-[90%] max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-left mb-16">
          <span className="text-[10px] md:text-xs uppercase tracking-widest font-semibold text-luxury-gold mb-2 block">
            Visual Journal
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-gradient">
            Construction Gallery
          </h2>
          <div className="w-16 h-[2px] bg-luxury-gold mt-4" />
        </div>

        {/* Masonry-Style Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[250px]">
          {GALLERY_DATA.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              onClick={() => openLightbox(index)}
              className={`relative overflow-hidden rounded-2xl group cursor-pointer border border-white/5 hover:border-white/20 transition-all duration-300 shadow-lg ${sizeClasses[item.size]}`}
            >
              {/* Image */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-750 group-hover:scale-105"
              />

              {/* Hover overlay with text */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <span className="text-[9px] uppercase tracking-widest text-luxury-gold font-bold mb-1">
                  {item.category}
                </span>
                <h3 className="text-sm sm:text-base font-bold text-white tracking-wide">
                  {item.title}
                </h3>
                <div className="flex items-center gap-1.5 text-xs text-luxury-muted mt-2 font-medium">
                  <Eye size={12} /> View Fullscreen
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {activeImageIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 select-none"
            onClick={closeLightbox}
          >
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-white/80 hover:text-white cursor-pointer"
            >
              <X size={20} />
            </button>

            {/* Prev Button */}
            <button
              onClick={showPrev}
              className="absolute left-6 w-12 h-12 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-white/80 hover:text-white cursor-pointer z-10"
            >
              <ChevronLeft size={24} />
            </button>

            {/* Next Button */}
            <button
              onClick={showNext}
              className="absolute right-6 w-12 h-12 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-white/80 hover:text-white cursor-pointer z-10"
            >
              <ChevronRight size={24} />
            </button>

            {/* Main Lightbox Frame */}
            <motion.div
              key={activeImageIndex}
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="max-w-4xl max-h-[80vh] w-full flex flex-col items-center justify-center relative"
              onClick={(e) => e.stopPropagation()}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={GALLERY_DATA[activeImageIndex].image}
                alt={GALLERY_DATA[activeImageIndex].title}
                className="max-w-full max-h-[70vh] object-contain rounded-lg border border-white/10"
              />
              
              {/* Image Description Footer */}
              <div className="text-center mt-4 space-y-1">
                <span className="text-[10px] uppercase tracking-widest text-luxury-gold font-bold">
                  {GALLERY_DATA[activeImageIndex].category}
                </span>
                <h3 className="text-base sm:text-lg font-bold text-white tracking-wide">
                  {GALLERY_DATA[activeImageIndex].title}
                </h3>
                <p className="text-xs text-luxury-muted">
                  Image {activeImageIndex + 1} of {GALLERY_DATA.length}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
export default Gallery;
