'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GlassCard } from './ui/GlassCard';
import { Button } from './ui/Button';
import { COMPANY_NAME } from '@/constants/branding';
import { CONTACT_EMAIL, CONTACT_PHONE, CONTACT_ADDRESS } from '@/constants/contact';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2 } from 'lucide-react';

export const Contact = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Commercial Development',
    message: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    
    // Simulate premium backend submission
    setFormSubmitted(true);
    setTimeout(() => {
      // Auto reset success message after 5 seconds
      setFormSubmitted(false);
      setFormData({
        name: '',
        email: '',
        subject: 'Commercial Development',
        message: '',
      });
    }, 5000);
  };

  return (
    <section id="contact" className="relative py-24 bg-luxury-black overflow-hidden">
      {/* Glow backgrounds */}
      <div className="absolute top-1/4 right-1/10 glow-accent w-[400px] h-[400px]" />
      <div className="absolute bottom-1/4 left-1/10 glow-accent w-[400px] h-[400px]" />

      <div className="relative z-10 w-[90%] max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-left mb-16">
          <span className="text-[10px] md:text-xs uppercase tracking-widest font-semibold text-luxury-gold mb-2 block">
            Initiate Consultation
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-gradient">
            Connect With Us
          </h2>
          <div className="w-16 h-[2px] bg-luxury-gold mt-4" />
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch">
          
          {/* Left Column: Details */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-12">
            
            {/* Introductory text */}
            <div className="space-y-4">
              <h3 className="text-xl md:text-2xl font-bold text-white tracking-wide">
                Build the Future, Today
              </h3>
              <p className="text-xs sm:text-sm text-luxury-muted leading-relaxed">
                Connect with our senior engineering counsel to review feasibility, structural scheduling, or request a complete project cost quotation.
              </p>
            </div>

            {/* Info cards */}
            <div className="space-y-6">
              
              {/* Phone */}
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-luxury-gold">
                  <Phone size={18} />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-luxury-muted font-bold">Call Counsel</p>
                  <a href={`tel:${CONTACT_PHONE}`} className="text-xs sm:text-sm text-white hover:text-luxury-gold font-medium transition-colors">
                    {CONTACT_PHONE}
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-luxury-gold">
                  <Mail size={18} />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-luxury-muted font-bold">Email Proposal</p>
                  <a href={`mailto:${CONTACT_EMAIL}`} className="text-xs sm:text-sm text-white hover:text-luxury-gold font-medium transition-colors">
                    {CONTACT_EMAIL}
                  </a>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-luxury-gold">
                  <MapPin size={18} />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-luxury-muted font-bold">Global Headquarters</p>
                  <p className="text-xs sm:text-sm text-white font-medium">
                    {CONTACT_ADDRESS}
                  </p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-luxury-gold">
                  <Clock size={18} />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-luxury-muted font-bold">Working Hours</p>
                  <p className="text-xs sm:text-sm text-white font-medium">
                    Monday &ndash; Friday, 9:00 AM &ndash; 6:00 PM EST
                  </p>
                </div>
              </div>

            </div>

            {/* Subtle Map Drawing placeholder */}
            <div className="hidden lg:block h-32 rounded-2xl border border-white/5 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.03)_0%,transparent_70%)] relative overflow-hidden">
              <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:1.5rem_1.5rem]" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-[10px] uppercase tracking-widest text-luxury-muted/70 font-semibold font-display">{COMPANY_NAME} Drafting Grid</span>
              </div>
            </div>

          </div>

          {/* Right Column: Form */}
          <div className="lg:col-span-7">
            <GlassCard className="h-full relative flex flex-col justify-center">
              <AnimatePresence mode="wait">
                {!formSubmitted ? (
                  <motion.form
                    key="contact-form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="space-y-6"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {/* Name input */}
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-[10px] uppercase tracking-widest text-luxury-muted font-bold">
                          Full Name
                        </label>
                        <input
                          id="name"
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          placeholder="e.g. John Doe"
                          className="w-full px-4 py-3 rounded-xl glass-input text-xs sm:text-sm"
                        />
                      </div>

                      {/* Email input */}
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-[10px] uppercase tracking-widest text-luxury-muted font-bold">
                          Corporate Email
                        </label>
                        <input
                          id="email"
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          placeholder="e.g. j.doe@company.com"
                          className="w-full px-4 py-3 rounded-xl glass-input text-xs sm:text-sm"
                        />
                      </div>
                    </div>

                    {/* Subject dropdown */}
                    <div className="space-y-2">
                      <label htmlFor="subject" className="text-[10px] uppercase tracking-widest text-luxury-muted font-bold">
                        Project Scope
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-xl glass-input text-xs sm:text-sm bg-luxury-dark border-white/6 cursor-pointer"
                      >
                        <option value="Commercial Development">Commercial Development</option>
                        <option value="Luxury Residential Estate">Luxury Residential Estate</option>
                        <option value="Heavy Infrastructure">Heavy Infrastructure</option>
                        <option value="Architectural Master Planning">Architectural Master Planning</option>
                        <option value="Structural Integrity Consult">Structural Integrity Consult</option>
                      </select>
                    </div>

                    {/* Message textarea */}
                    <div className="space-y-2">
                      <label htmlFor="message" className="text-[10px] uppercase tracking-widest text-luxury-muted font-bold">
                        Message & Details
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={5}
                        placeholder="Please describe your site scope, timing constraints, and required services..."
                        className="w-full px-4 py-3 rounded-xl glass-input text-xs sm:text-sm resize-none"
                      />
                    </div>

                    {/* Submit Button */}
                    <Button
                      variant="primary"
                      size="lg"
                      type="submit"
                      className="w-full flex items-center justify-center gap-2 font-bold py-4 text-xs"
                    >
                      <Send size={14} /> Request Consultation
                    </Button>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success-form"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-center py-12 px-6 flex flex-col items-center justify-center space-y-6"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: 'spring', damping: 10, delay: 0.2 }}
                      className="w-16 h-16 rounded-full bg-luxury-gold/10 border border-luxury-gold/30 flex items-center justify-center text-luxury-gold"
                    >
                      <CheckCircle2 size={32} />
                    </motion.div>
                    <div className="space-y-2">
                      <h3 className="text-xl font-bold text-white tracking-wide">
                        Proposal Received Successfully
                      </h3>
                      <p className="text-xs sm:text-sm text-luxury-muted max-w-sm mx-auto leading-relaxed">
                        Thank you, <span className="text-white font-medium">{formData.name}</span>. A {COMPANY_NAME} senior structural engineer will reach out to you at <span className="text-white font-medium">{formData.email}</span> within 24 business hours.
                      </p>
                    </div>
                    <p className="text-[10px] text-luxury-gold uppercase tracking-widest font-bold animate-pulse">
                      Consultation Code: {COMPANY_NAME.replace(/\s+/g, '').toUpperCase()}-{Math.floor(1000 + Math.random() * 9000)}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </GlassCard>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
