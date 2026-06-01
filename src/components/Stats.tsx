'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Counter } from './ui/Counter';
import { STATS_DATA } from '@/data/siteData';

export const Stats = () => {
  return (
    <section id="stats" className="relative py-16 bg-luxury-black overflow-hidden border-b border-white/5">
      {/* Grid lines background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:6rem_6rem] pointer-events-none" />

      <div className="relative z-10 w-[90%] max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {STATS_DATA.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: idx * 0.1, ease: 'easeOut' }}
              className="glass-card rounded-2xl p-6 md:p-8 text-center flex flex-col justify-center items-center group relative overflow-hidden"
            >
              {/* Internal subtle glow on hover */}
              <div className="absolute inset-0 bg-gradient-to-tr from-luxury-gold/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Stat Value */}
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-black text-gradient-gold mb-2 flex items-center justify-center">
                <Counter value={stat.value} suffix={stat.suffix} />
              </h3>

              {/* Stat Label */}
              <p className="text-xs sm:text-sm font-semibold tracking-widest text-luxury-muted uppercase group-hover:text-white transition-colors duration-300">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Stats;
