import React from 'react';
import { Link } from 'react-router-dom';
import {
  Sparkles,
  Calendar,
  Compass,
  MessageCircle,
  ShieldCheck,
  Star,
  CheckCircle,
} from 'lucide-react';
import { BRAND_INFO, getWhatsAppLink } from '../../utils/constants';

const HeroSection = () => {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-8 pb-16 overflow-hidden">
      {/* Background Zodiac Orbit Decoration */}
      <div className="absolute w-[600px] h-[600px] md:w-[850px] md:h-[850px] rounded-full border border-amber-500/10 -top-40 -right-40 md:-right-20 pointer-events-none animate-spin-slow opacity-60" />
      <div className="absolute w-[450px] h-[450px] md:w-[650px] md:h-[650px] rounded-full border border-purple-500/15 -top-20 -right-20 md:-right-10 pointer-events-none animate-spin-reverse-slow opacity-50" />
      <div className="absolute w-[300px] h-[300px] rounded-full border border-amber-300/10 top-1/4 -right-10 pointer-events-none opacity-40" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Brand Tagline Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-amber-500/40 bg-gradient-to-r from-amber-500/15 via-purple-900/20 to-amber-500/15 backdrop-blur-md text-amber-300 text-xs sm:text-sm font-semibold tracking-widest uppercase mb-6 shadow-gold-glow animate-fade-in">
          <Sparkles className="w-4 h-4 text-amber-400 animate-pulse" />
          <span>ASTRONIT • ASTROLOGY & SPIRITUAL GUIDANCE</span>
        </div>

        {/* Main Heading */}
        <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-tight sm:leading-none max-w-5xl mx-auto mb-6">
          Discover Your Path.{' '}
          <span className="block mt-2 gold-gradient-text">
            Align Your Energy.
          </span>{' '}
          <span className="block mt-2 text-slate-100">
            Create a Better Tomorrow.
          </span>
        </h1>

        {/* Description */}
        <div className="max-w-3xl mx-auto space-y-3 text-slate-300 text-base sm:text-lg md:text-xl font-light leading-relaxed mb-10">
          <p>
            Welcome to <strong>Astronit</strong>, your destination for astrology, Vastu and
            spiritual guidance led by <strong>Nitika Mehra</strong> in Indore.
          </p>
          <p className="text-slate-400 text-sm sm:text-base">
            We believe that understanding planetary influences, creating harmony in your surroundings
            and making informed life choices can help you move forward with greater clarity and confidence.
          </p>
          <p className="text-amber-200/90 text-sm sm:text-base font-normal">
            Get personalised guidance for your career, business, relationships, finances, home and personal growth.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-xl mx-auto mb-14">
          <Link
            to="/book-consultation"
            className="btn-gold w-full sm:w-auto px-8 py-4 text-base font-bold flex items-center justify-center gap-2 shadow-gold-glow-lg group"
          >
            <Calendar className="w-5 h-5 group-hover:scale-110 transition-transform" />
            <span>Book Your Consultation</span>
          </Link>

          <Link
            to="/services"
            className="btn-outline-gold w-full sm:w-auto px-7 py-4 text-base font-semibold flex items-center justify-center gap-2"
          >
            <Compass className="w-5 h-5" />
            <span>Explore Our Services</span>
          </Link>

          <a
            href={getWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full border border-emerald-500/50 bg-emerald-500/15 hover:bg-emerald-500/25 text-emerald-300 hover:text-emerald-200 text-base font-semibold transition-all shadow-lg hover:shadow-[0_0_20px_rgba(34,197,94,0.3)] active:scale-95"
          >
            <MessageCircle className="w-5 h-5 text-emerald-400" />
            <span>Chat on WhatsApp</span>
          </a>
        </div>

        {/* Trust Badges Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl mx-auto pt-8 border-t border-slate-800/80">
          <div className="flex items-center justify-center gap-2.5 text-slate-300 text-xs sm:text-sm">
            <CheckCircle className="w-4 h-4 text-amber-400 shrink-0" />
            <span>100% Confidential</span>
          </div>
          <div className="flex items-center justify-center gap-2.5 text-slate-300 text-xs sm:text-sm">
            <Star className="w-4 h-4 text-amber-400 shrink-0 fill-amber-400" />
            <span>Vedic & Scientific Approach</span>
          </div>
          <div className="flex items-center justify-center gap-2.5 text-slate-300 text-xs sm:text-sm">
            <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0" />
            <span>Non-Demolition Vastu</span>
          </div>
          <div className="flex items-center justify-center gap-2.5 text-slate-300 text-xs sm:text-sm">
            <Sparkles className="w-4 h-4 text-amber-400 shrink-0" />
            <span>Indore & Worldwide Online</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
