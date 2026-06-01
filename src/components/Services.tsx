'use client';

import React from 'react';
import { GlassCard } from './ui/GlassCard';
import { SERVICES_DATA } from '@/data/siteData';
import { Compass, Activity, Home, Building2, Milestone, Leaf, ArrowUpRight } from 'lucide-react';

const iconMap: Record<
  string,
  React.ComponentType<{ size?: number; className?: string }>
> = {
  Compass,
  Activity,
  Home,
  Building2,
  Milestone,
  Leaf,
};

export const Services = () => {
  return (
    <section id="services" className="relative py-24 bg-black overflow-hidden border-b border-white/5">
      {/* Glow backgrounds */}
      <div className="absolute top-1/4 left-1/10 glow-accent w-[400px] h-[400px]" />
      <div className="absolute bottom-1/4 right-1/10 glow-accent w-[400px] h-[400px]" />

      <div className="relative z-10 w-[90%] max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-left mb-16 md:flex md:items-end md:justify-between">
          <div>
            <span className="text-[10px] md:text-xs uppercase tracking-widest font-semibold text-luxury-gold mb-2 block">
              Architectural Expertise
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-gradient">
              Our Premium Services
            </h2>
            <div className="w-16 h-[2px] bg-luxury-gold mt-4" />
          </div>
          <p className="text-sm md:text-base text-luxury-muted max-w-md mt-4 md:mt-0 leading-relaxed">
            Delivering bespoke design-build solutions engineered to last lifetimes and finished with uncompromising precision.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {SERVICES_DATA.map((service, index) => {
            const IconComponent = iconMap[service.iconName] || Compass;
            return (
              <GlassCard 
                key={service.id} 
                delay={index * 0.08}
                className="flex flex-col h-full group"
              >
                {/* Icon & Arrow Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-luxury-gold group-hover:bg-luxury-gold group-hover:text-luxury-black transition-all duration-500">
                    <IconComponent size={24} className="transition-transform duration-500 group-hover:rotate-12" />
                  </div>
                  <div className="text-luxury-muted group-hover:text-white transition-colors duration-300">
                    <ArrowUpRight size={18} className="translate-x-1 -translate-y-1 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>

                {/* Service Title */}
                <h3 className="text-lg md:text-xl font-bold text-white tracking-wide mb-3 group-hover:text-luxury-gold transition-colors duration-300">
                  {service.title}
                </h3>

                {/* Service Description */}
                <p className="text-xs sm:text-sm text-luxury-muted leading-relaxed mb-6 flex-grow">
                  {service.description}
                </p>

                {/* Feature Bullets */}
                <ul className="space-y-2 border-t border-white/5 pt-4">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-xs text-luxury-accent">
                      <span className="w-1 h-1 rounded-full bg-luxury-gold" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </GlassCard>
            );
          })}
        </div>
      </div>
    </section>
  );
};
export default Services;
