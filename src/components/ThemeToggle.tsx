'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';

export const ThemeToggle = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');

  useEffect(() => {
    // Check initial theme from HTML class list
    const isDark = document.documentElement.classList.contains('dark');
    setTheme(isDark ? 'dark' : 'light');
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);

    if (newTheme === 'dark') {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  return (
    <motion.button
      onClick={toggleTheme}
      className="relative w-10 h-10 rounded-full bg-white/5 dark:bg-white/5 border border-black/10 dark:border-white/10 flex items-center justify-center text-luxury-accent hover:text-luxury-gold transition-colors focus:outline-none cursor-pointer overflow-hidden shadow-sm"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      title={theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
    >
      <motion.div
        className="absolute"
        initial={false}
        animate={{
          y: theme === 'dark' ? 0 : 40,
          opacity: theme === 'dark' ? 1 : 0,
        }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      >
        <Moon size={16} className="fill-luxury-gold text-luxury-gold" />
      </motion.div>
      <motion.div
        className="absolute"
        initial={false}
        animate={{
          y: theme === 'light' ? 0 : -40,
          opacity: theme === 'light' ? 1 : 0,
        }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      >
        <Sun size={16} className="fill-luxury-gold text-luxury-gold" />
      </motion.div>
    </motion.button>
  );
};

export default ThemeToggle;
