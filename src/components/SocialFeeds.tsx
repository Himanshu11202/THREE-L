'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Instagram, Facebook, Youtube, Heart, MessageCircle, Share2, Play, ExternalLink, Calendar, X } from 'lucide-react';
import { GlassCard } from './ui/GlassCard';

import { COMPANY_NAME, BRAND_NAME } from '@/constants/branding';

// TypeScript Interfaces for extensibility (API integration ready)
export interface InstagramPost {
  id: string;
  image: string;
  caption: string;
  likes: number;
  comments: number;
  date: string;
  link: string;
}

export interface FacebookPost {
  id: string;
  author: string;
  authorAvatar: string;
  date: string;
  content: string;
  image?: string;
  likes: number;
  shares: number;
  link: string;
}

export interface YoutubeVideo {
  id: string;
  title: string;
  thumbnail: string;
  duration: string;
  views: string;
  date: string;
  videoUrl: string; // Embed code or external link
}

// Mock Data representing live API payloads
const INSTAGRAM_DATA: InstagramPost[] = [
  {
    id: 'ig-1',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=600',
    caption: 'Sunset reflects on the cantilevered glass walls of the Solaria Cliffside Mansion in Malibu. Precision structural engineering makes pure architectural art possible. #THREE_L #LuxuryRealEstate',
    likes: 1240,
    comments: 42,
    date: '2 hours ago',
    link: 'https://instagram.com'
  },
  {
    id: 'ig-2',
    image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=600',
    caption: 'Advanced concrete pouring detailing at the Helix High-Speed Viaduct. Precision cast-in-place segments are engineered to handle high dynamic transit loads. #CivilEngineering #Infrastructure',
    likes: 852,
    comments: 19,
    date: '1 day ago',
    link: 'https://instagram.com'
  },
  {
    id: 'ig-3',
    image: 'https://images.unsplash.com/photo-1581094288338-2314dddb7ecc?auto=format&fit=crop&q=80&w=600',
    caption: 'Fine facade adjustments at the Lumière Tower in Hudson Yards. Fusing energy-efficient double-skin insulation panels with clean architectural steel. #SustainableDesign #NextGenSkyscrapers',
    likes: 1403,
    comments: 55,
    date: '3 days ago',
    link: 'https://instagram.com'
  },
  {
    id: 'ig-4',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=600',
    caption: 'Inspection of dense foundation reinforcement. Heavy duty cast piles are structural bedrock Anchors. Safety starts below ground level. #ConstructionTech #SafetyFirst',
    likes: 673,
    comments: 11,
    date: '5 days ago',
    link: 'https://instagram.com'
  },
  {
    id: 'ig-5',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=600',
    caption: 'Natural lighting layout check inside the atrium lobby of the Nexus Innovation Hub in Austin. Sustainable cross-laminated timber elements enhance organic comfort. #GreenBuilding #Architecture',
    likes: 1928,
    comments: 83,
    date: '1 week ago',
    link: 'https://instagram.com'
  },
  {
    id: 'ig-6',
    image: 'https://images.unsplash.com/photo-1449034446853-66c86144b0ad?auto=format&fit=crop&q=80&w=600',
    caption: 'Pylon wind deflection tests for the Zephyr Cable Bridge. Advanced mathematical modeling creates stable structures that handle extreme natural elements. #BridgeEngineering #FluidDynamics',
    likes: 1045,
    comments: 29,
    date: '2 weeks ago',
    link: 'https://instagram.com'
  }
];

const FACEBOOK_DATA: FacebookPost[] = [
  {
    id: 'fb-1',
    author: 'THREE L',
    authorAvatar: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=150',
    date: 'May 28 at 2:30 PM',
    content: 'We are incredibly honored to announce that THREE L has been awarded the 2026 Golden Gate Safety Award for the Helix High-Speed Viaduct development in San Francisco. Reaching 1.5 Million safe field hours is a testament to our onsite safety managers, engineers, and craft workers who implement our zero-harm policies daily. Thank you to the California Transit Board for this recognition!',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800',
    likes: 421,
    shares: 48,
    link: 'https://facebook.com'
  },
  {
    id: 'fb-2',
    author: 'THREE L',
    authorAvatar: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=150',
    date: 'May 15 at 10:15 AM',
    content: 'Sustainability is not just a secondary feature; it is the structural core of modern corporate planning. Our Founder, Er. Manohar Patidar, sat down with Architectural Digest to discuss the rise of Cross-Laminated Timber (CLT) structures and how carbon-sequestering building techniques are reshaping corporate design. Read the full interview to learn more about the engineering behind the Nexus Innovation Hub.',
    likes: 218,
    shares: 15,
    link: 'https://facebook.com'
  }
];

const YOUTUBE_DATA: YoutubeVideo[] = [
  {
    id: 'yt-1',
    title: 'Inside the Engineering of the Lumière Tower | Sky-High Wind Controls',
    thumbnail: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800',
    duration: '14:22',
    views: '124K views',
    date: '1 month ago',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ' // Using placeholders for iframe
  },
  {
    id: 'yt-2',
    title: 'How We Built an 18,500 Sq Ft Luxury Estate Cantilevered Over bedrocks',
    thumbnail: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800',
    duration: '22:15',
    views: '345K views',
    date: '3 months ago',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
  },
  {
    id: 'yt-3',
    title: 'Pylons & Wind Tunnels: Cable-Stayed Bridge Structuring Documented',
    thumbnail: 'https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&q=80&w=800',
    duration: '18:04',
    views: '89K views',
    date: '6 months ago',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
  }
];

export const SocialFeeds = () => {
  const [activeTab, setActiveTab] = useState<'instagram' | 'facebook' | 'youtube'>('instagram');
  const [activeVideo, setActiveVideo] = useState<YoutubeVideo | null>(null);

  return (
    <section id="social-hub" className="relative py-24 bg-luxury-black overflow-hidden border-b border-white/5">
      {/* Decorative glows */}
      <div className="absolute top-1/4 left-1/10 glow-accent w-[350px] h-[350px]" />
      <div className="absolute bottom-1/4 right-1/10 glow-accent w-[350px] h-[350px]" />

      <div className="relative z-10 w-[90%] max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[10px] md:text-xs uppercase tracking-widest font-semibold text-luxury-gold mb-2 block">
            Media Hub
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-gradient">
            Social Connectivity
          </h2>
          <div className="w-16 h-[2px] bg-luxury-gold mx-auto mt-4 mb-6" />
          <p className="text-sm md:text-base text-luxury-muted leading-relaxed">
            Follow our progress, media coverage, and live structural updates across our digital social networks.
          </p>
        </div>

        {/* Tab Selectors */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1.5 rounded-full bg-white/5 border border-black/10 dark:border-white/5 backdrop-blur-md">
            
            {/* Instagram Tab Button */}
            <button
              onClick={() => setActiveTab('instagram')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                activeTab === 'instagram'
                  ? 'bg-luxury-gold text-luxury-black dark:text-black shadow-md'
                  : 'text-luxury-muted hover:text-luxury-accent'
              }`}
            >
              <Instagram size={14} /> Instagram
            </button>

            {/* Facebook Tab Button */}
            <button
              onClick={() => setActiveTab('facebook')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                activeTab === 'facebook'
                  ? 'bg-luxury-gold text-luxury-black dark:text-black shadow-md'
                  : 'text-luxury-muted hover:text-luxury-accent'
              }`}
            >
              <Facebook size={14} /> Facebook
            </button>

            {/* YouTube Tab Button */}
            <button
              onClick={() => setActiveTab('youtube')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                activeTab === 'youtube'
                  ? 'bg-luxury-gold text-luxury-black dark:text-black shadow-md'
                  : 'text-luxury-muted hover:text-luxury-accent'
              }`}
            >
              <Youtube size={14} /> YouTube
            </button>
          </div>
        </div>

        {/* Tab Contents */}
        <div className="min-h-[400px]">
          <AnimatePresence mode="wait">
            
            {/* INSTAGRAM CONTENT */}
            {activeTab === 'instagram' && (
              <motion.div
                key="instagram-panel"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4 }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {INSTAGRAM_DATA.map((post) => (
                  <motion.a
                    href={post.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    key={post.id}
                    className="relative overflow-hidden rounded-2xl group cursor-pointer border border-black/5 dark:border-white/5 hover:border-luxury-gold/50 transition-all duration-300 shadow-md h-72"
                    whileHover={{ y: -4 }}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={post.image}
                      alt="Instagram structural post"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    
                    {/* Hover Cover details */}
                    <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-6">
                      <div className="flex items-center justify-between text-white/60 text-xs">
                        <span className="flex items-center gap-1.5"><Instagram size={14} className="text-luxury-gold" /> @{BRAND_NAME}</span>
                        <span>{post.date}</span>
                      </div>
                      
                      <p className="text-xs text-white/90 line-clamp-4 leading-relaxed font-medium my-4">
                        {post.caption}
                      </p>

                      <div className="flex items-center justify-between pt-4 border-t border-white/10 text-xs text-luxury-gold font-semibold uppercase tracking-wider">
                        <div className="flex items-center gap-4 text-white/80">
                          <span className="flex items-center gap-1"><Heart size={14} className="fill-luxury-gold text-luxury-gold" /> {post.likes}</span>
                          <span className="flex items-center gap-1"><MessageCircle size={14} /> {post.comments}</span>
                        </div>
                        <span className="flex items-center gap-1 text-[10px]">Open <ExternalLink size={10} /></span>
                      </div>
                    </div>
                  </motion.a>
                ))}
              </motion.div>
            )}

            {/* FACEBOOK CONTENT */}
            {activeTab === 'facebook' && (
              <motion.div
                key="facebook-panel"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4 }}
                className="max-w-3xl mx-auto space-y-8"
              >
                {FACEBOOK_DATA.map((post) => (
                  <GlassCard key={post.id} className="p-6 md:p-8" hoverEffect={false}>
                    {/* Header */}
                    <div className="flex items-center justify-between pb-4 border-b border-black/5 dark:border-white/5">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full overflow-hidden border border-black/10 dark:border-white/10">
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img src={post.authorAvatar} alt={`${COMPANY_NAME} Logo Avatar`} className="w-full h-full object-cover" />
                        </div>
                        <div>
                          <h4 className="text-sm font-bold text-luxury-accent flex items-center gap-1.5">
                            {post.author}
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-500" title="Verified Account" />
                          </h4>
                          <span className="text-[10px] text-luxury-muted font-semibold uppercase tracking-wider flex items-center gap-1 mt-0.5">
                            <Calendar size={10} /> {post.date}
                          </span>
                        </div>
                      </div>
                      <a href={post.link} target="_blank" rel="noopener noreferrer" className="text-luxury-muted hover:text-luxury-gold transition-colors">
                        <Facebook size={18} />
                      </a>
                    </div>

                    {/* Content text */}
                    <p className="text-xs sm:text-sm text-luxury-accent/90 leading-relaxed font-normal py-4">
                      {post.content}
                    </p>

                    {/* Optional Post Image */}
                    {post.image && (
                      <div className="relative h-64 sm:h-80 w-full overflow-hidden rounded-xl border border-black/10 dark:border-white/10 mb-4">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={post.image} alt="Facebook structural update" className="w-full h-full object-cover" />
                      </div>
                    )}

                    {/* Footer Actions */}
                    <div className="flex items-center justify-between pt-4 border-t border-black/5 dark:border-white/5 text-xs text-luxury-muted">
                      <div className="flex items-center gap-6">
                        <button className="flex items-center gap-1.5 hover:text-luxury-gold transition-colors font-semibold cursor-pointer">
                          <Heart size={14} className="fill-current text-red-500" /> {post.likes} Likes
                        </button>
                        <button className="flex items-center gap-1.5 hover:text-luxury-gold transition-colors font-semibold cursor-pointer">
                          <Share2 size={14} /> {post.shares} Shares
                        </button>
                      </div>
                      <a href={post.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-luxury-gold transition-colors font-bold uppercase text-[10px] tracking-widest">
                        View post <ExternalLink size={10} />
                      </a>
                    </div>
                  </GlassCard>
                ))}
              </motion.div>
            )}

            {/* YOUTUBE CONTENT */}
            {activeTab === 'youtube' && (
              <motion.div
                key="youtube-panel"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4 }}
                className="grid grid-cols-1 md:grid-cols-3 gap-6"
              >
                {YOUTUBE_DATA.map((video) => (
                  <div
                    key={video.id}
                    onClick={() => setActiveVideo(video)}
                    className="cursor-pointer h-full"
                  >
                    <GlassCard
                      className="p-0 overflow-hidden border border-black/5 dark:border-white/5 flex flex-col h-full group"
                      hoverEffect={true}
                    >
                      {/* Thumbnail */}
                      <div className="relative h-48 w-full overflow-hidden">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={video.thumbnail}
                          alt={video.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-103"
                        />
                        <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors flex items-center justify-center" />
                        
                        {/* Floating play circle */}
                        <div className="absolute w-12 h-12 rounded-full bg-luxury-gold/90 text-luxury-black dark:text-black flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                          <Play size={18} className="fill-current ml-0.5" />
                        </div>

                        {/* Video Duration Badge */}
                        <span className="absolute bottom-3 right-3 px-2 py-0.5 rounded bg-black/80 text-[10px] text-white/90 font-semibold tracking-wider">
                          {video.duration}
                        </span>
                      </div>

                      {/* Metadata summary */}
                      <div className="p-5 flex-grow flex flex-col justify-between space-y-4">
                        <h4 className="text-xs sm:text-sm font-bold text-luxury-accent group-hover:text-luxury-gold transition-colors leading-snug line-clamp-2">
                          {video.title}
                        </h4>
                        <div className="flex items-center justify-between text-[10px] text-luxury-muted font-semibold uppercase tracking-wider pt-2 border-t border-black/5 dark:border-white/5">
                          <span>{video.views}</span>
                          <span>{video.date}</span>
                        </div>
                      </div>
                    </GlassCard>
                  </div>
                ))}
              </motion.div>
            )}
            
          </AnimatePresence>
        </div>
      </div>

      {/* YouTube Lightbox Modal */}
      <AnimatePresence>
        {activeVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
            onClick={() => setActiveVideo(null)}
          >
            {/* Close trigger */}
            <button
              onClick={() => setActiveVideo(null)}
              className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-white/80 hover:text-white cursor-pointer"
            >
              <X size={20} />
            </button>

            {/* Video Card Container */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="max-w-4xl w-full aspect-video rounded-2xl overflow-hidden border border-white/10 shadow-2xl relative bg-black"
              onClick={(e) => e.stopPropagation()}
            >
              <iframe
                src={activeVideo.videoUrl}
                title={activeVideo.title}
                className="w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default SocialFeeds;
