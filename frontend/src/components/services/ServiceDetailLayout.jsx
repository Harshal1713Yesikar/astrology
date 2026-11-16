import React from 'react';
import { Link } from 'react-router-dom';
import {
  Calendar,
  MessageCircle,
  Phone,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Clock,
  MapPin,
} from 'lucide-react';
import SectionHeading from '../common/SectionHeading';
import { BRAND_INFO, SERVICES_LIST, getWhatsAppLink } from '../../utils/constants';

const ServiceDetailLayout = ({
  title,
  tagline,
  icon: Icon,
  image,
  description,
  detailedContent,
  offerings = [],
  benefits = [],
  consultationMode = 'Online & In-Person at Indore Office',
  slug,
}) => {
  const whatsappEnquiryMessage = `Hello Nitika Mehra ji, I would like to enquire about your ${title} consultation at Astronit. Please share details.`;

  return (
    <div className="py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs text-slate-400 mb-8">
          <Link to="/" className="hover:text-amber-300">
            Home
          </Link>
          <span>/</span>
          <Link to="/services" className="hover:text-amber-300">
            Services
          </Link>
          <span>/</span>
          <span className="text-amber-400 font-medium">{title}</span>
        </div>

        {/* Hero Banner Header */}
        <div className="relative rounded-3xl glass-panel border border-amber-500/30 overflow-hidden mb-12 shadow-2xl">
          <div className="relative h-64 sm:h-80 md:h-96 w-full">
            <img src={image} alt={title} className="w-full h-full object-cover filter brightness-90" />
            <div className="absolute inset-0 bg-gradient-to-t  from-slate-950 via-slate-950/60 to-transparent" />

            <div className="absolute bottom-6 left-6 right-6 sm:bottom-10 sm:left-10 sm:right-10 max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-amber-400/50 bg-amber-400/20 text-amber-300 text-xs font-semibold uppercase tracking-wider mb-3 backdrop-blur-md">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span>Specialized Guidance</span>
              </div>
              <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight">
                <span className="gold-gradient-text">{title}</span>
              </h1>
              <p className="text-slate-200 text-sm sm:text-base md:text-lg font-light mt-2 max-w-2xl">
                {tagline}
              </p>
            </div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Main Article Column */}
          <div className="lg:col-span-8 space-y-10">
            {/* Overview */}
            <div className="rounded-3xl glass-panel border border-amber-500/20 p-6 sm:p-8 space-y-4">
              <h2 className="font-serif text-2xl font-bold text-white flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
                  <Icon className="w-5 h-5" />
                </div>
                <span>Overview & Consultation Approach</span>
              </h2>

              <p className="text-slate-300 text-base sm:text-lg font-light leading-relaxed">
                {description}
              </p>

              {detailedContent && (
                <div className="text-slate-300 text-sm sm:text-base font-light leading-relaxed pt-2 space-y-3">
                  {detailedContent}
                </div>
              )}
            </div>

            {/* Key Offerings */}
            <div className="rounded-3xl glass-panel border border-amber-500/20 p-6 sm:p-8 space-y-5">
              <h2 className="font-serif text-2xl font-bold text-white flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                <span>What Is Covered in This Consultation</span>
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {offerings.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-amber-500/30 transition-colors flex items-start gap-3"
                  >
                    <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                    <span className="text-sm font-medium text-slate-200">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Benefits */}
            {benefits.length > 0 && (
              <div className="rounded-3xl glass-panel border border-amber-500/20 p-6 sm:p-8 space-y-5">
                <h2 className="font-serif text-2xl font-bold text-white flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                  <span>Key Benefits & Clarity Gained</span>
                </h2>

                <div className="space-y-3">
                  {benefits.map((benefit, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-3 p-3 rounded-xl bg-purple-950/20 border border-purple-500/20"
                    >
                      <Sparkles className="w-4 h-4 text-amber-400 shrink-0 mt-1" />
                      <span className="text-sm text-slate-200 font-light leading-relaxed">
                        {benefit}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sticky Sidebar Booking & Contact Column */}
          <div className="lg:col-span-4 space-y-6">
            {/* Quick Action Card */}
            <div className="rounded-3xl glass-panel border border-amber-500/30 p-6 sm:p-7 space-y-5 sticky top-28 shadow-2xl">
              <div>
                <span className="text-[11px] font-semibold uppercase tracking-widest text-amber-400">
                  Consultation Details
                </span>
                <h3 className="font-serif text-xl font-bold text-white mt-1">
                  Schedule Your Session
                </h3>
                <p className="text-xs text-slate-300 font-light mt-1">
                  Private one-on-one consultation with Nitika Mehra
                </p>
              </div>

              <div className="space-y-3 text-xs text-slate-300 border-y border-slate-800 py-4">
                <div className="flex items-center gap-2.5">
                  <Clock className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Mon – Sat: 3:00 PM – 8:00 PM (IST)</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <span>{consultationMode}</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>100% Confidential & Ethical</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3">
                <Link
                  to={`/book-consultation?service=${encodeURIComponent(title)}`}
                  className="btn-gold w-full py-3.5 text-sm font-bold flex items-center justify-center gap-2 shadow-gold-glow"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book {title}</span>
                </Link>

                <a
                  href={getWhatsAppLink(whatsappEnquiryMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-full border border-emerald-500/50 bg-emerald-500/15 hover:bg-emerald-500/25 text-emerald-300 text-xs sm:text-sm font-semibold transition-all shadow-md"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-400" />
                  <span>Enquire on WhatsApp</span>
                </a>

                <a
                  href={`tel:${BRAND_INFO.phone1}`}
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 rounded-full border border-slate-700 bg-slate-900/60 hover:bg-slate-800 text-slate-300 text-xs font-medium transition-all"
                >
                  <Phone className="w-3.5 h-3.5 text-amber-400" />
                  <span>Direct Call: +91 {BRAND_INFO.phone1}</span>
                </a>
              </div>

              {/* Other Services */}
              <div className="pt-4 border-t border-slate-800">
                <div className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 mb-2">
                  Other Consultations
                </div>
                <div className="space-y-1.5">
                  {SERVICES_LIST.filter((s) => s.path !== `/services/${slug}`).map((s) => (
                    <Link
                      key={s.id}
                      to={s.path}
                      className="block text-xs text-slate-400 hover:text-amber-300 transition-colors py-1 truncate"
                    >
                      → {s.title}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetailLayout;
