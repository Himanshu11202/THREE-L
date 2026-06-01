'use client';

import React, { use, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Calendar, ArrowLeft, Star, Quote, Eye, X, ChevronLeft, ChevronRight } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { GlassCard } from '@/components/ui/GlassCard';
import { PROJECTS_DATA } from '@/data/projects';

export default function ProjectDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params);
  const router = useRouter();
  const project = PROJECTS_DATA.find((p) => p.id === resolvedParams.id);
  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null);

  // Fallback if project is not found
  if (!project) {
    return (
      <div className="min-h-screen bg-luxury-black text-foreground flex flex-col items-center justify-center p-6 text-center">
        <h2 className="text-3xl font-black text-gradient mb-4">Project Not Found</h2>
        <p className="text-luxury-muted mb-8 max-w-sm">The project you are looking for does not exist or has been archived.</p>
        <Link href="/" className="px-6 py-3 rounded-full bg-luxury-gold text-luxury-black font-bold uppercase tracking-wider text-xs">
          Back to Homepage
        </Link>
      </div>
    );
  }

  // Get related project entities
  const relatedProjects = PROJECTS_DATA.filter((p) => project.relatedIds.includes(p.id));

  const openLightbox = (index: number) => {
    setActiveImageIndex(index);
  };

  const closeLightbox = () => {
    setActiveImageIndex(null);
  };

  const showNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeImageIndex === null) return;
    setActiveImageIndex((activeImageIndex + 1) % project.images.length);
  };

  const showPrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeImageIndex === null) return;
    setActiveImageIndex(
      (activeImageIndex - 1 + project.images.length) % project.images.length
    );
  };

  return (
    <div className="relative min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-luxury-gold selection:text-luxury-black">
      {/* Floating Navbar */}
      <Navbar />

      <main className="pt-24 pb-20">
        {/* Dynamic Project Hero Header */}
        <section className="relative w-full h-[65vh] flex items-end overflow-hidden bg-black py-16">
          <div className="absolute inset-0 w-full h-full">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
            <div className="absolute inset-0 bg-black/30" />
          </div>

          <div className="relative z-10 w-[90%] max-w-6xl mx-auto flex flex-col items-start gap-4">
            <button
              onClick={() => router.push('/#projects')}
              className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-bold text-luxury-gold hover:text-white transition-colors focus:outline-none mb-4 cursor-pointer"
            >
              <ArrowLeft size={14} /> Back to Showcase
            </button>
            <span className="px-3.5 py-1 rounded-full bg-luxury-gold text-luxury-black text-[10px] uppercase tracking-widest font-bold">
              {project.category}
            </span>
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-gradient-gold tracking-tight mt-2">
              {project.title}
            </h1>
            <div className="flex items-center gap-4 text-xs text-luxury-muted uppercase tracking-widest font-bold mt-2">
              <span className="flex items-center gap-1.5">
                <MapPin size={12} className="text-luxury-gold" /> {project.location}
              </span>
              <span className="flex items-center gap-1.5">
                <Calendar size={12} className="text-luxury-gold" /> Completed {project.year}
              </span>
            </div>
          </div>
        </section>

        {/* Technical Specs & Details Layout */}
        <section className="relative py-16 w-[90%] max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Overview & Engineering Highlights (Left Columns) */}
            <div className="lg:col-span-8 space-y-10">
              <div className="space-y-4">
                <h3 className="text-xs uppercase tracking-widest text-luxury-gold font-bold">
                  Project Overview
                </h3>
                <h2 className="text-2xl sm:text-3xl font-black text-luxury-accent">
                  Sculpting Form, Mastering Strength
                </h2>
                <p className="text-sm sm:text-base text-luxury-muted leading-relaxed font-normal pt-2">
                  {project.description}
                </p>
              </div>

              {/* Engineering Highlights */}
              <div className="space-y-6">
                <h3 className="text-xs uppercase tracking-widest text-luxury-gold font-bold">
                  Engineering Highlights
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {project.highlights.map((highlight, idx) => (
                    <GlassCard key={idx} className="p-5 flex items-start gap-4 border border-black/5 dark:border-white/5" hoverEffect={false}>
                      <div className="w-6 h-6 rounded-full bg-luxury-gold/10 border border-luxury-gold/30 flex items-center justify-center text-luxury-gold text-xs font-black flex-shrink-0">
                        {idx + 1}
                      </div>
                      <p className="text-xs sm:text-sm text-luxury-accent font-medium leading-relaxed">
                        {highlight}
                      </p>
                    </GlassCard>
                  ))}
                </div>
              </div>
            </div>

            {/* Key Specs Card (Right Columns) */}
            <div className="lg:col-span-4 lg:sticky lg:top-28">
              <GlassCard className="p-6 md:p-8 border border-black/5 dark:border-white/10 shadow-xl bg-luxury-dark/50" hoverEffect={false}>
                <h3 className="text-xs uppercase tracking-widest text-luxury-gold font-bold mb-6 pb-3 border-b border-black/5 dark:border-white/5">
                  Technical Specifications
                </h3>
                
                <div className="space-y-5">
                  <div>
                    <span className="text-[9px] uppercase tracking-widest text-luxury-muted font-bold block">Location</span>
                    <span className="text-xs sm:text-sm text-luxury-accent font-semibold">{project.location}</span>
                  </div>
                  <div>
                    <span className="text-[9px] uppercase tracking-widest text-luxury-muted font-bold block">Completed Year</span>
                    <span className="text-xs sm:text-sm text-luxury-accent font-semibold">{project.year}</span>
                  </div>
                  <div>
                    <span className="text-[9px] uppercase tracking-widest text-luxury-muted font-bold block">Gross Footprint</span>
                    <span className="text-xs sm:text-sm text-luxury-accent font-semibold">{project.area}</span>
                  </div>
                  {project.details.map((detail, idx) => (
                    <div key={idx}>
                      <span className="text-[9px] uppercase tracking-widest text-luxury-muted font-bold block">{detail.label}</span>
                      <span className="text-xs sm:text-sm text-luxury-accent font-semibold">{detail.value}</span>
                    </div>
                  ))}
                </div>
              </GlassCard>
            </div>

          </div>
        </section>

        {/* Project Photos Gallery Grid */}
        <section className="relative py-16 w-[90%] max-w-6xl mx-auto border-t border-black/5 dark:border-white/5">
          <div className="text-left mb-12">
            <span className="text-[10px] md:text-xs uppercase tracking-widest font-bold text-luxury-gold mb-2 block">
              Visual Index
            </span>
            <h2 className="text-2xl md:text-4xl font-black text-gradient">
              Project Photo Gallery
            </h2>
            <div className="w-12 h-[2px] bg-luxury-gold mt-4" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {project.images.map((img, idx) => {
              // Create dynamic spans for masonry aesthetic
              const isWide = idx === 1 || idx === 4;
              return (
                <div
                  key={idx}
                  onClick={() => openLightbox(idx)}
                  className={`relative overflow-hidden rounded-xl group cursor-pointer border border-black/5 dark:border-white/10 h-60 md:h-72 transition-all duration-300 shadow-sm ${
                    isWide ? 'col-span-2 md:col-span-1' : 'col-span-1'
                  }`}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={img}
                    alt={`${project.title} detailed photo ${idx + 1}`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-103"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="w-10 h-10 rounded-full bg-luxury-gold/90 text-luxury-black dark:text-black flex items-center justify-center shadow-lg">
                      <Eye size={18} />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Client Endorsement and Rating Section */}
        <section className="relative py-16 bg-luxury-dark/30 dark:bg-luxury-dark/20 border-y border-black/5 dark:border-white/5 overflow-hidden">
          {/* Subtle backgrounds */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 glow-accent w-[350px] h-[350px]" />
          
          <div className="relative z-10 w-[90%] max-w-4xl mx-auto text-center space-y-8">
            <Quote className="text-luxury-gold/15 w-16 h-16 mx-auto" />
            
            {/* Rating */}
            <div className="flex items-center justify-center gap-1.5">
              {[...Array(project.clientReview.rating)].map((_, i) => (
                <Star key={i} size={18} className="fill-luxury-gold text-luxury-gold" />
              ))}
            </div>

            {/* Testimonial Quote */}
            <blockquote className="text-base sm:text-xl md:text-2xl text-luxury-accent italic font-medium leading-relaxed max-w-3xl mx-auto">
              &ldquo;{project.clientReview.quote}&rdquo;
            </blockquote>

            {/* Reviewer Meta */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <div className="w-14 h-14 rounded-full overflow-hidden border border-black/10 dark:border-white/10">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={project.clientReview.image}
                  alt={project.clientReview.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-center sm:text-left">
                <h4 className="text-base font-bold text-luxury-accent tracking-wide">
                  {project.clientReview.name}
                </h4>
                <p className="text-xs text-luxury-muted uppercase tracking-widest font-bold mt-0.5">
                  {project.clientReview.role}, <span className="text-luxury-gold">{project.clientReview.company}</span>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Related Projects Showcase */}
        <section className="relative py-16 w-[90%] max-w-6xl mx-auto">
          <div className="text-left mb-12">
            <span className="text-[10px] md:text-xs uppercase tracking-widest font-bold text-luxury-gold mb-2 block">
              Related Projects
            </span>
            <h2 className="text-2xl md:text-4xl font-black text-gradient">
              Other Architectural Masterworks
            </h2>
            <div className="w-12 h-[2px] bg-luxury-gold mt-4" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {relatedProjects.map((item) => (
              <Link href={`/projects/${item.id}`} key={item.id} className="group cursor-pointer">
                <GlassCard className="p-0 overflow-hidden border border-black/5 dark:border-white/5 hover:border-luxury-gold/50 transition-all duration-300">
                  <div className="relative h-48 w-full overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-103"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                    
                    <span className="absolute top-4 left-4 px-2.5 py-0.5 rounded-full bg-luxury-black/95 text-[8px] uppercase tracking-widest font-bold text-luxury-gold">
                      {item.category}
                    </span>
                  </div>
                  <div className="p-5 space-y-1">
                    <span className="text-[9px] text-luxury-muted uppercase tracking-widest font-bold">{item.location}</span>
                    <h4 className="text-sm sm:text-base font-bold text-luxury-accent group-hover:text-luxury-gold transition-colors leading-tight">
                      {item.title}
                    </h4>
                  </div>
                </GlassCard>
              </Link>
            ))}
          </div>
        </section>
      </main>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {activeImageIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[110] bg-black/95 flex items-center justify-center p-4 select-none"
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
                src={project.images[activeImageIndex]}
                alt={`${project.title} zoom photo ${activeImageIndex + 1}`}
                className="max-w-full max-h-[70vh] object-contain rounded-lg border border-white/10"
              />
              
              <div className="text-center mt-4">
                <p className="text-xs text-luxury-muted">
                  Image {activeImageIndex + 1} of {project.images.length}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Premium Footer */}
      <Footer />
    </div>
  );
}
