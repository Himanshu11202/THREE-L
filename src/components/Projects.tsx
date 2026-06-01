'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { GlassCard } from './ui/GlassCard';
import { PROJECTS_DATA } from '@/data/projects';
import { MapPin, Calendar } from 'lucide-react';

export const Projects = () => {
  const [filter, setFilter] = useState<'All' | 'Residential' | 'Commercial' | 'Infrastructure'>('All');

  const filteredProjects = PROJECTS_DATA.filter((project) => {
    if (filter === 'All') return true;
    return project.category === filter;
  });

  const categories: ('All' | 'Residential' | 'Commercial' | 'Infrastructure')[] = [
    'All',
    'Residential',
    'Commercial',
    'Infrastructure',
  ];

  return (
    <section id="projects" className="relative py-24 bg-luxury-black overflow-hidden border-b border-black/5 dark:border-white/5">
      {/* Decorative gradients */}
      <div className="absolute top-1/10 left-1/10 glow-accent w-[350px] h-[350px]" />
      <div className="absolute bottom-1/10 right-1/10 glow-accent w-[350px] h-[350px]" />

      <div className="relative z-10 w-[90%] max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-left mb-12">
          <span className="text-[10px] md:text-xs uppercase tracking-widest font-bold text-luxury-gold mb-2 block">
            Featured Portfolio
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-gradient">
            Projects Showcase
          </h2>
          <div className="w-16 h-[2px] bg-luxury-gold mt-4" />
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-3 mb-12">
          {categories.map((cat) => {
            const isActive = filter === cat;
            return (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 border cursor-pointer ${
                  isActive
                    ? 'bg-luxury-gold text-luxury-black dark:text-black border-luxury-gold shadow-md'
                    : 'bg-white/5 border-black/10 dark:border-white/10 text-luxury-muted hover:text-luxury-accent hover:bg-white/10'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group cursor-pointer h-full"
              >
                <Link href={`/projects/${project.id}`} className="block h-full">
                  <GlassCard className="p-0 overflow-hidden h-full flex flex-col border border-black/5 dark:border-white/5 hover:border-luxury-gold/50 transition-all duration-300">
                    {/* Project Image Container */}
                    <div className="relative h-60 w-full overflow-hidden">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-103"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent" />
                      
                      {/* Category badge */}
                      <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-luxury-black/80 dark:bg-black/60 backdrop-blur-md border border-black/10 dark:border-white/10 text-[9px] uppercase tracking-widest font-bold text-luxury-gold">
                        {project.category}
                      </span>
                    </div>

                    {/* Project Summary Details */}
                    <div className="p-6 md:p-8 flex-grow flex flex-col justify-between space-y-4">
                      <div className="space-y-2.5">
                        <div className="flex items-center gap-4 text-[9px] text-luxury-muted uppercase tracking-widest font-bold">
                          <span className="flex items-center gap-1">
                            <MapPin size={11} className="text-luxury-gold" /> {project.location}
                          </span>
                          <span className="flex items-center gap-1">
                            <Calendar size={11} className="text-luxury-gold" /> {project.year}
                          </span>
                        </div>
                        <h3 className="text-lg md:text-xl font-bold text-luxury-accent group-hover:text-luxury-gold transition-colors duration-300">
                          {project.title}
                        </h3>
                        <p className="text-xs text-luxury-muted line-clamp-2 leading-relaxed font-normal">
                          {project.description}
                        </p>
                      </div>

                      <div className="pt-3 border-t border-black/5 dark:border-white/5 text-[10px] text-luxury-gold font-bold tracking-widest uppercase group-hover:text-luxury-accent transition-colors duration-300 flex items-center gap-1">
                        Explore Details &rarr;
                      </div>
                    </div>
                  </GlassCard>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
