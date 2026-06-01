'use client';

import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import { cn } from '@/lib/utils';

interface ButtonProps extends HTMLMotionProps<'button'> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  className,
  children,
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-medium rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-luxury-gold/50 cursor-pointer';
  
  const variants = {
    primary: 'bg-luxury-gold text-luxury-black hover:bg-white hover:text-black font-semibold shadow-lg shadow-luxury-gold/10 hover:shadow-white/10',
    secondary: 'bg-white/5 border border-white/10 text-white hover:bg-white/10 hover:border-white/20',
    outline: 'border border-luxury-gold/30 text-luxury-gold bg-transparent hover:bg-luxury-gold hover:text-luxury-black hover:border-luxury-gold',
    ghost: 'text-luxury-accent hover:text-white hover:bg-white/5',
  };

  const sizes = {
    sm: 'px-4 py-2 text-xs uppercase tracking-wider',
    md: 'px-6 py-3 text-sm uppercase tracking-wider',
    lg: 'px-8 py-4 text-base uppercase tracking-widest',
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </motion.button>
  );
};
