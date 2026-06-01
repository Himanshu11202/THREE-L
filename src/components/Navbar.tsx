'use client';

import React, { useState, useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { NAV_ITEMS } from '@/constants/navigation';
import { Button } from './ui/Button';
import { ThemeToggle } from './ThemeToggle';
import { BRAND } from '@/constants/branding';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const isHome = pathname === '/' || pathname === '';

  // Monitor scroll for bg transparency changes & active section highlighting (scroll spy)
  useEffect(() => {
    if (!isHome) {
      setActiveSection('');
      setScrolled(true);
      return;
    }

    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Simple scroll spy logic
      const sections = NAV_ITEMS.map((item) => item.href.substring(1));
      let currentSection = 'home';

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          // If the top of the section is near the top of the viewport
          if (rect.top <= 120 && rect.bottom >= 120) {
            currentSection = sectionId;
            break;
          }
        }
      }
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    // Run once initially
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHome]);

  const handleNavClick = (e: React.MouseEvent<HTMLElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);

    if (href.startsWith('/#') || href.startsWith('#')) {
      const targetId = href.replace(/^\/?#/, '');

      if (!isHome) {
        // Redirect to home with hash
        router.push(`/#${targetId}`);
        return;
      }

      const element = document.getElementById(targetId);
      if (element) {
        const offset = 90; // Navbar height offset
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = element.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth',
        });
      }
    } else {
      router.push(href);
    }
  };

  return (
    <>
      <header
        className={`fixed left-1/2 -translate-x-1/2 z-50 transition-all duration-500 w-[92%] max-w-6xl rounded-full ${scrolled
            ? 'top-4 glass-nav py-2.5 px-6'
            : 'top-6 bg-transparent border-transparent py-4 px-6 md:px-8'
          }`}
      >
        <div className="flex items-center justify-between">
          {/* Logo & Brand Name */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center gap-4 group cursor-pointer"
          >
            {/* Logo Image */}
            <div className="relative h-[48px] md:h-[65px] flex items-center justify-center transition-all duration-300">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={BRAND.logo}
                alt={`${BRAND.companyName} Logo`}
                className="h-full w-auto object-contain transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            
            <div className="flex flex-col">
              <span className="font-display font-black text-lg md:text-xl tracking-wider text-luxury-accent uppercase leading-none group-hover:text-luxury-gold transition-colors duration-300">
                {BRAND.companyName}
              </span>
              <span className="font-sans font-semibold text-[8px] md:text-[9px] tracking-[0.35em] text-luxury-gold uppercase mt-1 leading-none">
                {BRAND.tagline}
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1">
            {NAV_ITEMS.map((item) => {
              const sectionId = item.href.replace(/^\/?#/, '');
              const isActive = isHome && activeSection === sectionId;
              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`px-4 py-2 text-[10px] uppercase tracking-widest font-semibold rounded-full relative transition-colors duration-300 ${isActive ? 'text-luxury-gold dark:text-white' : 'text-luxury-muted hover:text-luxury-accent'
                    }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="activeNavBackground"
                      className="absolute inset-0 bg-luxury-gold/10 dark:bg-white/5 border border-luxury-gold/25 dark:border-white/10 rounded-full -z-10"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  {item.label}
                </a>
              );
            })}
          </nav>

          {/* Desktop CTA & Theme Toggle */}
          <div className="hidden lg:flex items-center gap-4">
            <ThemeToggle />
            <Button
              variant="outline"
              size="sm"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="text-[10px] font-semibold py-2.5 px-5 tracking-widest"
            >
              Get Quote
            </Button>
          </div>

          {/* Mobile Theme Toggle & Menu Triggers */}
          <div className="flex items-center gap-3 lg:hidden">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-luxury-accent hover:text-luxury-gold p-2 focus:outline-none cursor-pointer"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed top-20 left-1/2 -translate-x-1/2 w-[92%] z-45 glass-nav rounded-3xl p-6 lg:hidden max-h-[80vh] overflow-y-auto"
          >
            <div className="flex flex-col gap-4">
              {NAV_ITEMS.map((item) => {
                const sectionId = item.href.replace(/^\/?#/, '');
                const isActive = isHome && activeSection === sectionId;
                return (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={`py-2 px-4 rounded-xl text-xs font-semibold tracking-widest uppercase transition-all ${isActive
                        ? 'bg-luxury-gold/10 border border-luxury-gold/25 text-luxury-gold'
                        : 'text-luxury-muted hover:text-luxury-accent hover:bg-black/5 dark:hover:bg-white/5'
                      }`}
                  >
                    {item.label}
                  </a>
                );
              })}
              <Button
                variant="primary"
                size="md"
                onClick={(e) => handleNavClick(e, '#contact')}
                className="mt-2 w-full font-bold py-3 text-xs tracking-widest"
              >
                Get Quote
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
