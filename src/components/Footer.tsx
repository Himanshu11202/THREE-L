'use client';

import React from 'react';
import { SITE_INFO } from '@/data/siteData';
import { NAV_ITEMS } from '@/constants/navigation';
import { Facebook, Twitter, Linkedin, Instagram, ArrowUp, Send } from 'lucide-react';

export const Footer = () => {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.substring(1);
    const element = document.getElementById(targetId);
    if (element) {
      const offset = 90;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <footer className="bg-luxury-black border-t border-white/5 relative overflow-hidden">
      {/* Footer Top Grid */}
      <div className="relative z-10 w-[90%] max-w-6xl mx-auto py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12">
          
          {/* Brand Col */}
          <div className="lg:col-span-4 space-y-6">
            <h3 className="font-display font-black text-xl tracking-wider text-gradient-gold">
              {SITE_INFO.name}
            </h3>
            <p className="text-xs sm:text-sm text-luxury-muted leading-relaxed max-w-sm">
              Sculpting landmarks and engineering structural foundations that stand resilient through time. Luxury design-build excellence since 1998.
            </p>
            {/* Social Links */}
            <div className="flex items-center gap-3">
              <a href="#" className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-luxury-muted hover:text-white hover:border-white/20 transition-all duration-300">
                <Facebook size={14} />
              </a>
              <a href="#" className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-luxury-muted hover:text-white hover:border-white/20 transition-all duration-300">
                <Twitter size={14} />
              </a>
              <a href="#" className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-luxury-muted hover:text-white hover:border-white/20 transition-all duration-300">
                <Linkedin size={14} />
              </a>
              <a href="#" className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-luxury-muted hover:text-white hover:border-white/20 transition-all duration-300">
                <Instagram size={14} />
              </a>
            </div>
          </div>

          {/* Quick Links Col */}
          <div className="lg:col-span-3 space-y-6">
            <h4 className="text-xs uppercase tracking-widest text-white font-bold">
              Quick Navigation
            </h4>
            <ul className="space-y-3">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className="text-xs sm:text-sm text-luxury-muted hover:text-luxury-gold transition-colors duration-300"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Col */}
          <div className="lg:col-span-3 space-y-6">
            <h4 className="text-xs uppercase tracking-widest text-white font-bold">
              Global HQ
            </h4>
            <div className="space-y-3 text-xs sm:text-sm text-luxury-muted leading-relaxed">
              <p>{SITE_INFO.address}</p>
              <p className="pt-2">
                <span className="font-bold text-white uppercase tracking-wider block text-[10px] mb-1">Phone</span>
                <a href={`tel:${SITE_INFO.phone}`} className="hover:text-luxury-gold transition-colors">
                  {SITE_INFO.phone}
                </a>
              </p>
              <p className="pt-2">
                <span className="font-bold text-white uppercase tracking-wider block text-[10px] mb-1">Email</span>
                <a href={`mailto:${SITE_INFO.email}`} className="hover:text-luxury-gold transition-colors">
                  {SITE_INFO.email}
                </a>
              </p>
            </div>
          </div>

          {/* Newsletter Col */}
          <div className="lg:col-span-2 space-y-6">
            <h4 className="text-xs uppercase tracking-widest text-white font-bold">
              Newsletter
            </h4>
            <p className="text-xs text-luxury-muted leading-relaxed">
              Subscribe to our quarterly architectural journals.
            </p>
            <form onSubmit={(e) => e.preventDefault()} className="relative flex items-center">
              <input
                type="email"
                placeholder="Email Address"
                className="w-full px-3 py-2.5 rounded-lg glass-input text-xs pr-10 focus:outline-none"
              />
              <button
                type="submit"
                className="absolute right-2 text-luxury-gold hover:text-white transition-colors cursor-pointer"
                aria-label="Subscribe"
              >
                <Send size={14} />
              </button>
            </form>
          </div>

        </div>
      </div>

      {/* Footer Bottom copyrights */}
      <div className="border-t border-white/5 py-8 relative z-10">
        <div className="w-[90%] max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[10px] text-luxury-muted uppercase tracking-wider text-center md:text-left">
            &copy; {new Date().getFullYear()} {SITE_INFO.name}. All Rights Reserved. Crafted for structural legacy.
          </p>
          <div className="flex items-center gap-6 text-[10px] text-luxury-muted uppercase tracking-wider">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <button
              onClick={handleScrollToTop}
              className="flex items-center gap-1.5 text-luxury-gold hover:text-white transition-colors focus:outline-none cursor-pointer font-bold"
            >
              Back to Top <ArrowUp size={12} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
