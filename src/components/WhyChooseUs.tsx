'use client';

import React from 'react';
import { GlassCard } from './ui/GlassCard';
import { WHY_CHOOSE_US_DATA } from '@/data/siteData';
import { ShieldCheck, Activity, Award, Clock, Cpu, Smile, LucideProps } from 'lucide-react';

const iconMap: Record<string, React.ComponentType<LucideProps>> = {
  ShieldCheck,
  Activity,
  Award,
  Clock,
  Cpu,
  Smile,
};

export const WhyChooseUs = () => {
  return (
    <section id="why-us" className="relative py-24 bg-luxury-black overflow-hidden border-b border-white/5">
      {/* Decorative architectural grid lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:3rem_3rem] pointer-events-none" />

      {/* Glow backgrounds */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 glow-accent w-[500px] h-[500px] opacity-70" />

      <div className="relative z-10 w-[90%] max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-[10px] md:text-xs uppercase tracking-widest font-semibold text-luxury-gold mb-2 block">
            The Aura Standard
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-gradient">
            Why Partner With Us
          </h2>
          <div className="w-16 h-[2px] bg-luxury-gold mx-auto mt-4 mb-6" />
          <p className="text-sm md:text-base text-luxury-muted leading-relaxed">
            Discerning corporate clients and private owners select Aura Structures for our unmatched structural safety, rigorous engineering benchmarks, and luxury execution.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {WHY_CHOOSE_US_DATA.map((item, index) => {
            const IconComponent = iconMap[item.iconName] || ShieldCheck;
            return (
              <GlassCard 
                key={item.id} 
                delay={index * 0.08}
                className="flex items-start gap-4 p-6 md:p-8 group"
              >
                {/* Icon Column */}
                <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-luxury-gold group-hover:bg-luxury-gold group-hover:text-luxury-black transition-all duration-500">
                  <IconComponent size={20} className="transition-transform duration-500 group-hover:scale-110" />
                </div>

                {/* Text Content Column */}
                <div className="space-y-2">
                  <h3 className="text-base md:text-lg font-bold text-white tracking-wide group-hover:text-luxury-gold transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-luxury-muted leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </GlassCard>
            );
          })}
        </div>
      </div>
    </section>
  );
};
export default WhyChooseUs;
