import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, MessageCircle, Sparkles, Phone } from 'lucide-react';
import { BRAND_INFO, getWhatsAppLink } from '../../utils/constants';

const CtaBanner = () => {
  return (
    <section className="py-16 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl p-8 sm:p-12 md:p-16 overflow-hidden border border-amber-500/40 bg-gradient-to-r from-purple-950/80 via-slate-900 to-amber-950/40 shadow-2xl shadow-purple-950/50">
          {/* Subtle cosmic background rings */}
          <div className="absolute -top-24 -right-24 w-80 h-80 rounded-full border border-amber-500/20 pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-80 h-80 rounded-full border border-purple-500/20 pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-amber-400/40 bg-amber-400/10 text-amber-300 text-xs font-semibold uppercase tracking-widest">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>Transformative Guidance</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight">
              Ready to Align Your Life with the{' '}
              <span className="gold-gradient-text">Cosmic Order?</span>
            </h2>

            <p className="text-slate-300 text-sm sm:text-base md:text-lg font-light leading-relaxed">
              Step into clarity today. Schedule a private consultation with{' '}
              <strong>Nitika Mehra</strong> and discover traditional Vedic solutions tailored for
              your personal and professional success.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/book-consultation"
                className="btn-gold w-full sm:w-auto px-8 py-4 text-base font-bold flex items-center justify-center gap-2 shadow-gold-glow"
              >
                <Calendar className="w-5 h-5" />
                <span>Book Your Consultation</span>
              </Link>

              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full border border-emerald-500/50 bg-emerald-500/15 hover:bg-emerald-500/25 text-emerald-300 hover:text-emerald-200 text-base font-semibold transition-all shadow-md active:scale-95"
              >
                <MessageCircle className="w-5 h-5 text-emerald-400" />
                <span>WhatsApp Directly</span>
              </a>

              <a
                href={`tel:${BRAND_INFO.phone1}`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full border border-amber-500/40 bg-amber-500/10 hover:bg-amber-500/20 text-amber-300 text-base font-semibold transition-all"
              >
                <Phone className="w-4 h-4" />
                <span>Call +91 {BRAND_INFO.phone1}</span>
              </a>
            </div>

            <p className="text-xs text-slate-400 pt-2">
              Indore Office: Musakhedi • Consultations Monday to Saturday (3:00 PM – 8:00 PM)
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaBanner;
