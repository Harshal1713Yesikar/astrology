import React from 'react';
import { Link } from 'react-router-dom';
import {
  Sun,
  Compass,
  Binary,
  Gem,
  Sparkles,
  Flame,
  ArrowRight,
  Calendar,
  MessageCircle,
  CheckCircle2,
} from 'lucide-react';
import SectionHeading from '../components/common/SectionHeading';
import CtaBanner from '../components/home/CtaBanner';
import { servicesData } from '../components/home/ServicesOverview';
import { getWhatsAppLink } from '../utils/constants';

const ServicesPage = () => {
  return (
    <div className="py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-300 text-xs font-semibold tracking-widest uppercase">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Holistic Spiritual Solutions</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight">
            Consultation <span className="gold-gradient-text">Services</span>
          </h1>
          <p className="text-slate-300 text-base sm:text-lg font-light leading-relaxed">
            Personalised astrology, Vastu Shastra, numerology, gemstone analysis, and spiritual remedies
            tailored to guide your life, career, finances, and home towards harmony and fulfillment.
          </p>
        </div>

        {/* Services Full List */}
        <div className="space-y-12">
          {servicesData.map((service, index) => {
            const Icon = service.icon;
            const isEven = index % 2 === 1;
            const whatsappMsg = `Hello Nitika Mehara ji, I would like to enquire about your ${service.title} service at Astronit.`;

            return (
              <div
                key={service.id}
                className={`rounded-3xl glass-panel border border-amber-500/20 hover:border-amber-400/50 transition-all duration-300 overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-6 sm:p-8 lg:p-10 ${
                  isEven ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Visual Image */}
                <div
                  className={`lg:col-span-5 relative rounded-2xl overflow-hidden h-72 sm:h-80 w-full group ${
                    isEven ? 'lg:order-2' : ''
                  }`}
                >
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-95"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t  from-slate-950 via-slate-950/30 to-transparent" />

                  <div className="absolute top-4 left-4 w-12 h-12 rounded-2xl bg-slate-900/90 border border-amber-500/40 backdrop-blur-md flex items-center justify-center text-amber-400 shadow-lg">
                    <Icon className="w-6 h-6" />
                  </div>
                </div>

                {/* Content */}
                <div className={`lg:col-span-7 space-y-5 ${isEven ? 'lg:order-1' : ''}`}>
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-amber-400">
                      SERVICE 0{index + 1}
                    </span>
                    <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white mt-1">
                      {service.title}
                    </h2>
                    <p className="text-slate-300 text-sm sm:text-base font-light mt-2 leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  {/* Highlights Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 py-2">
                    {service.highlights.map((h, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs sm:text-sm text-slate-200">
                        <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-wrap items-center gap-3 pt-3 border-t border-slate-800">
                    <Link
                      to={`/services/${service.slug}`}
                      className="btn-outline-gold !py-2.5 !px-5 text-xs font-bold inline-flex items-center gap-2"
                    >
                      <span>Explore Full Details</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>

                    <Link
                      to={`/book-consultation?service=${encodeURIComponent(service.title)}`}
                      className="btn-gold !py-2.5 !px-5 text-xs font-bold inline-flex items-center gap-2"
                    >
                      <Calendar className="w-4 h-4" />
                      <span>Book Consultation</span>
                    </Link>

                    <a
                      href={getWhatsAppLink(whatsappMsg)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full border border-emerald-500/40 bg-emerald-500/10 text-emerald-400 hover:bg-emerald-500/20 text-xs font-semibold transition-all"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>WhatsApp Enquiry</span>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <CtaBanner />
      </div>
    </div>
  );
};

export default ServicesPage;
