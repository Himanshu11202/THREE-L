'use client';

import React from 'react';
import { NAV_ITEMS } from '@/constants/navigation';
import { Facebook, Twitter, Linkedin, Instagram, Youtube, ArrowUp, Send } from 'lucide-react';
import { COMPANY_NAME, BRAND_NAME, LOGO_PATH } from '@/constants/branding';
import { CONTACT_EMAIL, CONTACT_PHONE, CONTACT_ADDRESS, SOCIAL_LINKS } from '@/constants/contact';

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
    <footer className="bg-luxury-black border-t border-black/5 dark:border-white/5 relative overflow-hidden transition-colors duration-500">
      {/* Footer Top Grid */}
      <div className="relative z-10 w-[90%] max-w-6xl mx-auto py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12">
          
          {/* Brand Col */}
          <div className="lg:col-span-4 space-y-6">
            <div className="flex items-center gap-3">
              {/* Logo Area */}
              <div className="relative w-12 h-12 flex items-center justify-center rounded-xl bg-white/5 border border-black/10 dark:border-white/5 p-1.5 shadow-inner">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={LOGO_PATH}
                  alt={`${COMPANY_NAME} Logo`}
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
                <svg 
                  className="absolute inset-0.5 w-[90%] h-[90%] text-luxury-gold" 
                  viewBox="0 0 100 100" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ zIndex: -1 }}
                >
                  <path d="M50 15L15 80H28L50 38L72 80H85L50 15Z" fill="currentColor" fillOpacity="0.1" stroke="currentColor" strokeWidth="2" strokeLinejoin="miter"/>
                  <path d="M50 38L32 72H68L50 38Z" fill="currentColor" fillOpacity="0.2" stroke="currentColor" strokeWidth="1.5"/>
                  <circle cx="50" cy="52" r="3" fill="currentColor"/>
                </svg>
              </div>
              <div className="flex flex-col">
                <h3 className="font-display font-black text-lg md:text-xl tracking-wider text-gradient-gold uppercase leading-none">
                  {COMPANY_NAME}
                </h3>
                <span className="font-sans font-semibold text-[8px] md:text-[9px] tracking-[0.3em] text-luxury-gold uppercase mt-1 leading-none">
                  {BRAND_NAME}
                </span>
              </div>
            </div>
            
            <p className="text-xs sm:text-sm text-luxury-muted leading-relaxed max-w-sm">
              Sculpting landmarks and engineering structural foundations that stand resilient through time. Luxury design-build excellence since 2020.
            </p>

            {/* Social Media Links */}
            {/* To update your Social Media Links, edit SOCIAL_LINKS in src/constants/contact.ts */}
            <div className="flex items-center gap-3">
              <a 
                href={SOCIAL_LINKS.facebook} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-8 h-8 rounded-full border border-black/10 dark:border-white/10 flex items-center justify-center text-luxury-muted hover:text-luxury-accent hover:border-luxury-gold/50 transition-all duration-300"
                aria-label="Facebook"
              >
                <Facebook size={14} />
              </a>
              <a 
                href={SOCIAL_LINKS.twitter} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-8 h-8 rounded-full border border-black/10 dark:border-white/10 flex items-center justify-center text-luxury-muted hover:text-luxury-accent hover:border-luxury-gold/50 transition-all duration-300"
                aria-label="Twitter"
              >
                <Twitter size={14} />
              </a>
              <a 
                href={SOCIAL_LINKS.linkedin} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-8 h-8 rounded-full border border-black/10 dark:border-white/10 flex items-center justify-center text-luxury-muted hover:text-luxury-accent hover:border-luxury-gold/50 transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin size={14} />
              </a>
              <a 
                href={SOCIAL_LINKS.instagram} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-8 h-8 rounded-full border border-black/10 dark:border-white/10 flex items-center justify-center text-luxury-muted hover:text-luxury-accent hover:border-luxury-gold/50 transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram size={14} />
              </a>
              <a 
                href={SOCIAL_LINKS.youtube} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-8 h-8 rounded-full border border-black/10 dark:border-white/10 flex items-center justify-center text-luxury-muted hover:text-luxury-accent hover:border-luxury-gold/50 transition-all duration-300"
                aria-label="YouTube"
              >
                <Youtube size={14} />
              </a>
            </div>
          </div>

          {/* Quick Links Col */}
          <div className="lg:col-span-3 space-y-6">
            <h4 className="text-xs uppercase tracking-widest text-luxury-accent font-bold">
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
          {/* To update your Address, Phone, and Email details, edit src/constants/contact.ts */}
          <div className="lg:col-span-3 space-y-6">
            <h4 className="text-xs uppercase tracking-widest text-luxury-accent font-bold">
              Global HQ
            </h4>
            <div className="space-y-3 text-xs sm:text-sm text-luxury-muted leading-relaxed">
              <p>{CONTACT_ADDRESS}</p>
              <p className="pt-2">
                <span className="font-bold text-luxury-accent uppercase tracking-wider block text-[10px] mb-1">Phone</span>
                <a href={`tel:${CONTACT_PHONE.replace(/[^0-9+]/g, '')}`} className="hover:text-luxury-gold transition-colors">
                  {CONTACT_PHONE}
                </a>
              </p>
              <p className="pt-2">
                <span className="font-bold text-luxury-accent uppercase tracking-wider block text-[10px] mb-1">Email</span>
                <a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-luxury-gold transition-colors">
                  {CONTACT_EMAIL}
                </a>
              </p>
            </div>
          </div>

          {/* Newsletter Col */}
          <div className="lg:col-span-2 space-y-6">
            <h4 className="text-xs uppercase tracking-widest text-luxury-accent font-bold">
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
                className="absolute right-2 text-luxury-gold hover:text-luxury-accent transition-colors cursor-pointer"
                aria-label="Subscribe"
              >
                <Send size={14} />
              </button>
            </form>
          </div>

        </div>
      </div>

      {/* Footer Bottom copyrights */}
      <div className="border-t border-black/5 dark:border-white/5 py-8 relative z-10">
        <div className="w-[90%] max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[10px] text-luxury-muted uppercase tracking-wider text-center md:text-left">
            &copy; {new Date().getFullYear()} {COMPANY_NAME}. All Rights Reserved. Crafted for structural legacy.
          </p>
          <div className="flex items-center gap-6 text-[10px] text-luxury-muted uppercase tracking-wider">
            <a href="#" className="hover:text-luxury-accent transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-luxury-accent transition-colors">Terms of Service</a>
            <button
              onClick={handleScrollToTop}
              className="flex items-center gap-1.5 text-luxury-gold hover:text-luxury-accent transition-colors focus:outline-none cursor-pointer font-bold"
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
