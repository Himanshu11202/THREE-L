'use client';

import React from 'react';
import { GlassCard } from './ui/GlassCard';
import { STORY_INFO } from '@/data/siteData';
import { Compass, Eye } from 'lucide-react';

// Centralized Founders data structure
const FOUNDERS_DATA = [
  {
    name: 'Er. Manohar Patidar',
    role: 'Founder & CEO',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=600',
    bio: 'Er. Manohar Patidar is the visionary Founder & CEO of THREE L. With an extensive background in heavy civil engineering and high-end construction management, he has directed complex infrastructural transformations and luxury architectural builds. Under his leadership, THREE L has pioneered structural precision, safety integrity, and sustainable execution.',
    quote: 'We build structure not just as physical space, but as legacy monuments of precision, strength, and luxury craftsmanship.'
  },
  {
    name: 'Er. Rajesh Kumar',
    role: 'Co-Founder & Chief Architect',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=600',
    bio: 'Er. Rajesh Kumar co-founded THREE L, bringing more than a decade of creative architectural and structural designing experience. He specializes in luxury residential masterworks, green building certification integrations, and high-wind structural damping calculations.',
    quote: 'Blending architectural beauty with structural physics is our signature. We transform structural designs into premium works of living art.'
  }
];

export const About = () => {
  return (
    <section id="about" className="relative py-24 bg-luxury-black overflow-hidden border-b border-black/5 dark:border-white/5 transition-colors duration-500">
      {/* Glow backgrounds */}
      <div className="absolute top-1/3 right-1/10 glow-accent w-[350px] h-[350px]" />
      <div className="absolute bottom-1/10 left-1/10 glow-accent w-[350px] h-[350px]" />

      <div className="relative z-10 w-[90%] max-w-6xl mx-auto space-y-20">
        
        {/* Row 1: Company Profile Header & Narrative */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Company Story & Mission/Vision (Left Columns) */}
          <div className="lg:col-span-7 space-y-10">
            <div className="space-y-6">
              <span className="text-[10px] md:text-xs uppercase tracking-widest font-bold text-luxury-gold mb-2 block">
                Establishing Standards
              </span>
              <h2 className="text-3xl md:text-5xl font-black text-gradient">
                About Our Firm
              </h2>
              <div className="w-16 h-[2px] bg-luxury-gold mt-4 mb-8" />
              <h3 className="text-xl md:text-2xl font-bold text-luxury-accent tracking-wide">
                {STORY_INFO.title}
              </h3>
              {STORY_INFO.paragraphs.map((p, index) => (
                <p key={index} className="text-sm md:text-base text-luxury-muted leading-relaxed">
                  {p}
                </p>
              ))}
            </div>
          </div>

          {/* Mission & Vision (Right Columns) */}
          <div className="lg:col-span-5 space-y-6 lg:mt-16">
            {/* Mission */}
            <GlassCard className="p-6 md:p-8" hoverEffect={false}>
              <div className="w-10 h-10 rounded-xl bg-luxury-gold/10 border border-luxury-gold/30 flex items-center justify-center text-luxury-gold mb-4">
                <Compass size={20} />
              </div>
              <h4 className="text-base font-bold text-luxury-accent uppercase tracking-wider mb-2">Our Mission</h4>
              <p className="text-xs md:text-sm text-luxury-muted leading-relaxed">
                {STORY_INFO.mission}
              </p>
            </GlassCard>

            {/* Vision */}
            <GlassCard className="p-6 md:p-8" hoverEffect={false}>
              <div className="w-10 h-10 rounded-xl bg-luxury-gold/10 border border-luxury-gold/30 flex items-center justify-center text-luxury-gold mb-4">
                <Eye size={20} />
              </div>
              <h4 className="text-base font-bold text-luxury-accent uppercase tracking-wider mb-2">Our Vision</h4>
              <p className="text-xs md:text-sm text-luxury-muted leading-relaxed">
                {STORY_INFO.vision}
              </p>
            </GlassCard>
          </div>
        </div>

        {/* Row 2: Leadership / Founders (Side-by-side Dual Cards) */}
        <div className="space-y-12">
          <div className="text-center">
            <span className="text-[10px] md:text-xs uppercase tracking-widest font-bold text-luxury-gold mb-2 block">
              Core Leadership
            </span>
            <h3 className="text-2xl md:text-4xl font-black text-gradient">
              Visionary Founders
            </h3>
            <div className="w-12 h-[2px] bg-luxury-gold mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {FOUNDERS_DATA.map((founder, idx) => (
              <GlassCard key={idx} className="p-0 overflow-hidden border border-black/5 dark:border-white/10 shadow-2xl relative group flex flex-col h-full bg-luxury-dark/30" hoverEffect={true}>
                {/* Founder Image */}
                <div className="relative h-72 sm:h-80 w-full overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img 
                    src={founder.image} 
                    alt={founder.name} 
                    className="w-full h-full object-cover object-top transition-transform duration-750 group-hover:scale-103"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-90" />
                  
                  {/* Floating credentials */}
                  <div className="absolute bottom-4 left-6">
                    <h4 className="text-lg md:text-xl font-bold text-white tracking-wide">
                      {founder.name}
                    </h4>
                    <p className="text-xs uppercase tracking-widest text-luxury-gold font-semibold mt-1">
                      {founder.role}
                    </p>
                  </div>
                </div>

                {/* Founder Details */}
                <div className="p-6 md:p-8 space-y-6 flex-grow flex flex-col justify-between">
                  <p className="text-xs sm:text-sm text-luxury-muted leading-relaxed font-normal">
                    {founder.bio}
                  </p>
                  
                  {/* Quote block */}
                  <div className="border-l-2 border-luxury-gold pl-4 py-1 italic mt-4">
                    <p className="text-xs sm:text-sm text-luxury-accent font-medium leading-relaxed">
                      &ldquo;{founder.quote}&rdquo;
                    </p>
                  </div>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
