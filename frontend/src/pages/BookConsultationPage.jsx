import React from 'react';
import {
  Calendar,
  Clock,
  MapPin,
  Phone,
  MessageCircle,
  Sparkles,
  ShieldCheck,
  CheckCircle,
} from 'lucide-react';
import SectionHeading from '../components/common/SectionHeading';
import BookingForm from '../components/booking/BookingForm';
import { BRAND_INFO, getWhatsAppLink } from '../utils/constants';

const BookConsultationPage = () => {
  return (
    <div className="py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-300 text-xs font-semibold tracking-widest uppercase">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Personalized Vedic Consultation</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight">
            Book Your <span className="gold-gradient-text">Consultation</span>
          </h1>
          <p className="text-slate-300 text-base sm:text-lg font-light leading-relaxed">
            Reserve your private session with <strong>Nitika Mehara</strong>. Whether you need
            Kundali analysis, residential Vastu, numerology, or spiritual remedies, we ensure
            thorough, confidential guidance.
          </p>
        </div>

        {/* Two-Column Grid: Form on Left/Center, Guidelines on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Main Booking Form Column */}
          <div className="lg:col-span-8">
            <BookingForm />
          </div>

          {/* Consultation Guidelines Sidebar Column */}
          <div className="lg:col-span-4 space-y-6">
            <div className="rounded-3xl glass-panel border border-amber-500/30 p-6 sm:p-7 space-y-5 shadow-2xl">
              <div>
                <span className="text-[11px] font-semibold uppercase tracking-wider text-amber-400">
                  Preparation Tips
                </span>
                <h3 className="font-serif text-xl font-bold text-white mt-1">
                  Before Your Session
                </h3>
              </div>

              <div className="space-y-3.5 text-xs text-slate-300">
                <div className="flex items-start gap-2.5">
                  <CheckCircle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block">For Astrology:</strong>
                    Keep exact birth date, birth time, and birth city ready for accurate Kundali calculation.
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <CheckCircle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block">For Vastu:</strong>
                    Have a rough or architectural blueprint and compass directions of your home/office ready.
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <CheckCircle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block">For Numerology:</strong>
                    Provide your current legal spelling, everyday name, and registered mobile numbers.
                  </div>
                </div>
              </div>

              <div className="p-3.5 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-2 text-xs">
                <div className="flex items-center gap-2 font-semibold text-amber-300">
                  <Clock className="w-4 h-4 text-amber-400" />
                  <span>Consultation Hours</span>
                </div>
                <p className="text-slate-300">Monday to Saturday: 3:00 PM – 8:00 PM (IST)</p>
                <p className="text-slate-400 text-[11px]">Sunday Closed</p>
              </div>

              <div className="space-y-2 pt-2">
                <a
                  href={getWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-full border border-emerald-500/50 bg-emerald-500/15 hover:bg-emerald-500/25 text-emerald-300 text-xs font-semibold transition-all shadow-md"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-400" />
                  <span>Instant WhatsApp Booking</span>
                </a>

                <a
                  href={`tel:${BRAND_INFO.phone1}`}
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 rounded-full border border-slate-700 bg-slate-900/60 hover:bg-slate-800 text-slate-300 text-xs font-medium transition-all"
                >
                  <Phone className="w-3.5 h-3.5 text-amber-400" />
                  <span>Call Us: +91 {BRAND_INFO.phone1}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookConsultationPage;
