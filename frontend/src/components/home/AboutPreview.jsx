import React from 'react';
import { Link } from 'react-router-dom';
import {
  Sparkles,
  MapPin,
  Clock,
  Phone,
  CheckCircle2,
  ArrowRight,
  Award,
} from 'lucide-react';
import { BRAND_INFO } from '../../utils/constants';

const AboutPreview = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Visual Column */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md">
              {/* Outer Golden Aura Ring */}
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-amber-500/20 via-purple-600/20 to-amber-500/20 blur-xl opacity-75" />

              {/* Main Profile Showcase Card */}
              <div className="relative rounded-3xl glass-panel p-6 border-amber-500/30 overflow-hidden shadow-2xl">
                {/* Spiritual Portrait Art Placeholder */}
                <div className="relative h-96 w-full rounded-2xl overflow-hidden mb-6 bg-gradient-to-b from-purple-900/60 to-slate-900 border border-amber-500/20">
                  <img
                    src="/images/nitika-mehra-astrologer.jpg"
                    alt="Nitika Mehra - Astrologer & Vastu Consultant"
                    className="w-full h-full object-cover object-top filter brightness-95 contrast-105"
                  />
                  <div className=" absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />

                  {/* Consultant Badge Overlay */}
                  <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-slate-900/90 border border-amber-500/30 backdrop-blur-md">
                    <h3 className="font-serif text-lg font-bold text-white flex items-center gap-2">
                      <span>Nitika Mehara</span>
                      <Award className="w-4 h-4 text-amber-400" />
                    </h3>
                    <p className="text-xs text-amber-300 font-medium">Astrologer & Vastu Expert</p>
                    <p className="text-[11px] text-slate-400 mt-1 flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-amber-400 shrink-0" />
                      <span>Musakhedi, Indore, MP</span>
                    </p>
                  </div>
                </div>

                {/* Quick Info Points */}
                <div className="grid grid-cols-2 gap-3 text-xs text-slate-300">
                  <div className="p-3 rounded-xl bg-slate-800/60 border border-amber-500/10 flex items-center gap-2">
                    <Clock className="w-4 h-4 text-amber-400 shrink-0" />
                    <div>
                      <span className="block font-semibold text-white">3 PM – 8 PM</span>
                      <span className="text-[10px] text-slate-400">Mon - Sat</span>
                    </div>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-800/60 border border-amber-500/10 flex items-center gap-2">
                    <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                    <div>
                      <span className="block font-semibold text-white">Direct Access</span>
                      <span className="text-[10px] text-slate-400">Personalized</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content Column */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-300 text-xs font-semibold tracking-wider uppercase">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>Dedicated Spiritual Guide</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
              Meet Your Consultant –{' '}
              <span className="gold-gradient-text">Nitika Mehara</span>
            </h2>

            <div className="space-y-4 text-slate-300 text-base sm:text-lg font-light leading-relaxed">
              <p className="border-l-2 border-amber-500/60 pl-4 italic text-amber-100/90 font-serif text-lg">
                "Nitika Mehara is an Astrology and Vastu Consultant dedicated to providing personalised
                guidance through astrology, numerology, Vastu principles and spiritual practices."
              </p>

              <p>
                At Astronit, our approach focuses on understanding individual concerns and suggesting
                suitable guidance and traditional remedies according to individual requirements.
              </p>

              <p>
                Our aim is to help people find clarity, positivity, balance and direction in different
                aspects of life — whether you are navigating career questions, relationship harmony,
                business milestones, or creating an auspicious sanctuary at home.
              </p>
            </div>

            {/* Core Values / Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-center gap-2.5 text-sm text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Deep Birth Chart (Kundali) Analysis</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Residential & Commercial Vastu Solutions</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Name & Business Numerology</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Traditional, Practical Spiritual Remedies</span>
              </div>
            </div>

            {/* Buttons */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <Link
                to="/about"
                className="btn-gold text-sm font-bold flex items-center gap-2"
              >
                <span>Read Full Profile</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/book-consultation"
                className="btn-outline-gold text-sm font-semibold"
              >
                Book An Appointment
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;
