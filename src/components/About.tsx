'use client';

import React from 'react';
import { GlassCard } from './ui/GlassCard';
import { FOUNDER_INFO, STORY_INFO } from '@/data/siteData';
import { Compass, Eye } from 'lucide-react';

export const About = () => {
  return (
    <section id="about" className="relative py-24 bg-luxury-black overflow-hidden border-b border-white/5">
      {/* Glow backgrounds */}
      <div className="absolute top-1/3 right-1/10 glow-accent w-[350px] h-[350px]" />
      <div className="absolute bottom-1/10 left-1/10 glow-accent w-[350px] h-[350px]" />

      <div className="relative z-10 w-[90%] max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-left mb-16">
          <span className="text-[10px] md:text-xs uppercase tracking-widest font-semibold text-luxury-gold mb-2 block">
            Establishing Standards
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-gradient">
            About Our Firm
          </h2>
          <div className="w-16 h-[2px] bg-luxury-gold mt-4" />
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Company Story & Mission/Vision (Left Columns) */}
          <div className="lg:col-span-7 space-y-10">
            <div className="space-y-6">
              <h3 className="text-xl md:text-2xl font-bold text-white tracking-wide">
                {STORY_INFO.title}
              </h3>
              {STORY_INFO.paragraphs.map((p, index) => (
                <p key={index} className="text-sm md:text-base text-luxury-muted leading-relaxed">
                  {p}
                </p>
              ))}
            </div>

            {/* Mission & Vision Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Mission */}
              <GlassCard className="p-6 md:p-6" hoverEffect={false}>
                <div className="w-10 h-10 rounded-xl bg-luxury-gold/10 border border-luxury-gold/30 flex items-center justify-center text-luxury-gold mb-4">
                  <Compass size={20} />
                </div>
                <h4 className="text-base font-bold text-white uppercase tracking-wider mb-2">Our Mission</h4>
                <p className="text-xs md:text-sm text-luxury-muted leading-relaxed">
                  {STORY_INFO.mission}
                </p>
              </GlassCard>

              {/* Vision */}
              <GlassCard className="p-6 md:p-6" hoverEffect={false}>
                <div className="w-10 h-10 rounded-xl bg-luxury-gold/10 border border-luxury-gold/30 flex items-center justify-center text-luxury-gold mb-4">
                  <Eye size={20} />
                </div>
                <h4 className="text-base font-bold text-white uppercase tracking-wider mb-2">Our Vision</h4>
                <p className="text-xs md:text-sm text-luxury-muted leading-relaxed">
                  {STORY_INFO.vision}
                </p>
              </GlassCard>
            </div>
          </div>

          {/* Founder Card (Right Columns) */}
          <div className="lg:col-span-5">
            <GlassCard className="p-0 overflow-hidden border border-white/10 shadow-2xl relative group">
              {/* Founder Image */}
              <div className="relative h-72 sm:h-80 w-full overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                  src={FOUNDER_INFO.image} 
                  alt={FOUNDER_INFO.name} 
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-luxury-dark via-transparent to-transparent" />
                
                {/* Float tag */}
                <div className="absolute bottom-4 left-6">
                  <h4 className="text-lg md:text-xl font-bold text-white tracking-wide">
                    {FOUNDER_INFO.name}
                  </h4>
                  <p className="text-xs uppercase tracking-widest text-luxury-gold font-semibold mt-1">
                    {FOUNDER_INFO.role}
                  </p>
                </div>
              </div>

              {/* Founder Details */}
              <div className="p-6 md:p-8 space-y-6 bg-luxury-dark/95">
                <p className="text-xs sm:text-sm text-luxury-muted leading-relaxed">
                  {FOUNDER_INFO.bio}
                </p>
                
                {/* Quote block */}
                <div className="border-l-2 border-luxury-gold pl-4 py-1 italic">
                  <p className="text-xs sm:text-sm text-luxury-accent font-medium leading-relaxed">
                    &ldquo;{FOUNDER_INFO.quote}&rdquo;
                  </p>
                </div>
              </div>
            </GlassCard>
          </div>

        </div>
      </div>
    </section>
  );
};
export default About;
