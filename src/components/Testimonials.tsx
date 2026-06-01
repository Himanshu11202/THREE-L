'use client';

import React from 'react';
import { GlassCard } from './ui/GlassCard';
import { TESTIMONIALS_DATA } from '@/data/siteData';
import { Quote, Star } from 'lucide-react';

export const Testimonials = () => {
  return (
    <section id="testimonials" className="relative py-24 bg-black overflow-hidden border-b border-white/5">
      {/* Glow backgrounds */}
      <div className="absolute top-1/3 left-1/10 glow-accent w-[350px] h-[350px]" />
      <div className="absolute bottom-1/10 right-1/10 glow-accent w-[350px] h-[350px]" />

      <div className="relative z-10 w-[90%] max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-[10px] md:text-xs uppercase tracking-widest font-semibold text-luxury-gold mb-2 block">
            Endorsements
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-gradient">
            Client Testimonials
          </h2>
          <div className="w-16 h-[2px] bg-luxury-gold mx-auto mt-4 mb-6" />
          <p className="text-sm md:text-base text-luxury-muted leading-relaxed">
            Read what prominent developers, state agencies, and enterprise leaders say about their design-build collaboration with Aura Structures.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {TESTIMONIALS_DATA.map((item, index) => (
            <GlassCard
              key={item.id}
              delay={index * 0.1}
              className="flex flex-col justify-between h-full relative"
            >
              {/* Quote Mark Decoration */}
              <Quote className="absolute top-6 right-8 text-white/5 w-12 h-12 pointer-events-none" />

              <div className="space-y-6">
                {/* Rating stars */}
                <div className="flex items-center gap-1">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} size={14} className="fill-luxury-gold text-luxury-gold" />
                  ))}
                </div>

                {/* Quote Text */}
                <p className="text-xs sm:text-sm text-luxury-accent italic leading-relaxed">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>

              {/* Client Info Block */}
              <div className="flex items-center gap-4 mt-8 pt-6 border-t border-white/5">
                {/* Avatar */}
                <div className="w-12 h-12 rounded-full overflow-hidden border border-white/10 flex-shrink-0">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Credentials */}
                <div>
                  <h4 className="text-sm font-bold text-white tracking-wide">
                    {item.name}
                  </h4>
                  <p className="text-[10px] text-luxury-muted uppercase tracking-wider mt-0.5">
                    {item.role}, <span className="text-luxury-gold">{item.company}</span>
                  </p>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Testimonials;
