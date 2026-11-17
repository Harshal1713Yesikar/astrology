import React from 'react';
import { Link } from 'react-router-dom';
import {
  Sparkles,
  MapPin,
  Clock,
  Phone,
  Calendar,
  MessageCircle,
  Award,
  CheckCircle2,
  Compass,
  Sun,
  Shield,
  HeartHandshake,
} from 'lucide-react';
import SectionHeading from '../components/common/SectionHeading';
import CtaBanner from '../components/home/CtaBanner';
import { BRAND_INFO, getWhatsAppLink } from '../utils/constants';

const AboutPage = () => {
  return (
    <div className="py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Page Hero */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-300 text-xs font-semibold tracking-widest uppercase shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Sacred Wisdom & Ethical Guidance</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight">
            Meet Your Consultant –{' '}
            <span className="gold-gradient-text">Nitika Mehara</span>
          </h1>
          <p className="text-slate-300 text-base sm:text-lg font-light leading-relaxed">
            Astrologer and Vastu Expert bringing clarity, spatial harmony, and grounded spiritual solutions from Indore, Madhya Pradesh.
          </p>
        </div>

        {/* Consultant Profile Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Portrait and credentials card */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md">
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-amber-500/20 via-purple-600/20 to-amber-500/20 blur-xl opacity-75" />

              <div className="relative rounded-3xl glass-panel p-6 border-amber-500/30 shadow-2xl">
                <div className="relative h-96 w-full rounded-2xl overflow-hidden mb-6 bg-slate-900 border border-amber-500/20">
                  <img
                    src="/images/nitika-mehra-astrologer.jpg"
                    alt="Nitika Mehara - Astrology & Vastu Consultant"
                    className="w-full h-full object-cover object-top filter brightness-95"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />

                  <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-slate-900/90 border border-amber-500/30 backdrop-blur-md">
                    <h3 className="font-serif text-lg font-bold text-white flex items-center gap-2">
                      <span>Nitika Mehara</span>
                      <Award className="w-4 h-4 text-amber-400" />
                    </h3>
                    <p className="text-xs text-amber-300 font-medium">Astrologer & Vastu Expert</p>
                    <p className="text-[11px] text-slate-400 mt-1 flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-amber-400" />
                      <span>Musakhedi, Indore (M.P.)</span>
                    </p>
                  </div>
                </div>

                <div className="space-y-3 text-xs text-slate-300 border-t border-slate-800 pt-4">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400">Consultation Timings:</span>
                    <span className="font-semibold text-amber-300">Mon – Sat (3 PM – 8 PM)</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400">Direct Contact:</span>
                    <span className="font-semibold text-white">+91 8959235176</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400">Consultation Mode:</span>
                    <span className="font-semibold text-amber-300">Online & In-Person Indore</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Detailed Biography */}
          <div className="lg:col-span-7 space-y-6">
            <div className="p-6 rounded-3xl glass-panel border border-amber-500/20 space-y-4">
              <h2 className="font-serif text-2xl font-bold text-white flex items-center gap-2.5">
                <Sun className="w-6 h-6 text-amber-400" />
                <span>Professional Introduction & Background</span>
              </h2>

              <p className="text-slate-200 text-base sm:text-lg font-light leading-relaxed italic border-l-2 border-amber-400 pl-4 bg-amber-500/5 py-2 rounded-r-xl">
                "Nitika Mehara is an Astrology and Vastu Consultant dedicated to providing personalised
                guidance through astrology, numerology, Vastu principles and spiritual practices."
              </p>

              <p className="text-slate-300 text-sm sm:text-base font-light leading-relaxed">
                "At Astronit, our approach focuses on understanding individual concerns and suggesting
                suitable guidance and traditional remedies according to individual requirements.
                Our aim is to help people find clarity, positivity, balance and direction in different aspects of life."
              </p>

              <p className="text-slate-300 text-sm sm:text-base font-light leading-relaxed">
                With years of intensive study in Vedic Jyotish, Prashna Kundali, Chaldean Numerology,
                and architectural Vastu Shastra, Nitika Mehara has assisted countless families, entrepreneurs,
                working professionals, and students across Indore, Madhya Pradesh, and globally.
              </p>
            </div>

            {/* Astrology & Vastu Expertise */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 rounded-2xl glass-panel border border-amber-500/20 space-y-2">
                <div className="flex items-center gap-2 text-amber-400 font-serif font-bold text-base">
                  <Sun className="w-5 h-5" />
                  <span>Astrology Expertise</span>
                </div>
                <p className="text-xs text-slate-300 font-light leading-relaxed">
                  Deep birth chart (Kundali) calculations, planetary periods (Dasha), transit effects,
                  career choices, relationship compatibility, and authentic traditional remedies.
                </p>
              </div>

              <div className="p-5 rounded-2xl glass-panel border border-amber-500/20 space-y-2">
                <div className="flex items-center gap-2 text-amber-400 font-serif font-bold text-base">
                  <Compass className="w-5 h-5" />
                  <span>Vastu Expertise</span>
                </div>
                <p className="text-xs text-slate-300 font-light leading-relaxed">
                  Residential and commercial layout analysis, direction balancing, Pancha Mahabhuta
                  alignment, and non-demolition energy correction strategies.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Mission and Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-8 rounded-3xl glass-panel border border-amber-500/20 space-y-4 relative overflow-hidden">
            <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 mb-2">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-2xl font-bold text-white">Our Sacred Mission</h3>
            <p className="text-slate-300 text-sm sm:text-base font-light leading-relaxed">
              To deliver ethical, authentic, and scientific astrological and Vastu guidance that dispels
              confusion and fear. We empower individuals to make confident choices in career, relationships,
              and wellness by harmonizing internal planetary energies with external environments.
            </p>
          </div>

          <div className="p-8 rounded-3xl glass-panel border border-amber-500/20 space-y-4 relative overflow-hidden">
            <div className="w-12 h-12 rounded-2xl bg-purple-950/40 border border-purple-500/30 flex items-center justify-center text-amber-400 mb-2">
              <Shield className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-2xl font-bold text-white">Our Vision</h3>
            <p className="text-slate-300 text-sm sm:text-base font-light leading-relaxed">
              To be the most trusted and respected astrology and spiritual wellness sanctuary in Indore
              and India, known for transparency, practical non-destructive remedies, genuine empathy,
              and lasting transformation in people's lives.
            </p>
          </div>
        </div>

        {/* Personal Consultation Approach */}
        <div className="rounded-3xl glass-panel border border-amber-500/30 p-8 sm:p-12 space-y-6">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-semibold uppercase tracking-widest text-amber-400">
              The Astronit Philosophy
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white">
              Our Personal Consultation Approach
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4">
            <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-2">
              <div className="w-8 h-8 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold text-sm">
                1
              </div>
              <h4 className="font-serif text-base font-bold text-white">Empathetic Listening</h4>
              <p className="text-xs text-slate-300 font-light leading-relaxed">
                We believe astrology begins with deep listening. Every life challenge is honored with
                compassion, zero judgment, and complete confidentiality.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-2">
              <div className="w-8 h-8 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold text-sm">
                2
              </div>
              <h4 className="font-serif text-base font-bold text-white">No Fear-Mongering</h4>
              <p className="text-xs text-slate-300 font-light leading-relaxed">
                We strictly reject superstition and catastrophic predictions. Planets symbolize opportunities
                for self-mastery, spiritual growth, and conscious alignment.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-2">
              <div className="w-8 h-8 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold text-sm">
                3
              </div>
              <h4 className="font-serif text-base font-bold text-white">Practical Remedies</h4>
              <p className="text-xs text-slate-300 font-light leading-relaxed">
                Remedies are simple, cost-effective, and actionable: daily mantras, spiritual routines,
                energy cleansings, and crystal/gemstone advice only when truly required.
              </p>
            </div>
          </div>

          <div className="pt-6 text-center">
            <Link
              to="/book-consultation"
              className="btn-gold px-8 py-3.5 text-sm font-bold inline-flex items-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              <span>Schedule a Personal Session with Nitika Mehara</span>
            </Link>
          </div>
        </div>

        {/* ── Credentials & Certifications ── */}
        <div className="space-y-8">
          <SectionHeading
            badge="Verified Credentials"
            title="Academic Qualifications & Certifications"
            subtitle="Nitika Mehara holds nationally accredited post-graduation diplomas awarded with Grade A++ – a testament to her dedication and mastery across Vedic disciplines."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Certificate 1 – Vastu */}
            <div className="group relative rounded-3xl overflow-hidden glass-panel border border-amber-500/30 shadow-xl hover:border-amber-400/60 transition-all duration-300">
              <div className="relative h-72 overflow-hidden bg-white">
                <img
                  src="/images/cert-vastu-diploma.jpg"
                  alt="Post Graduation Diploma in Vastu – Life Designing Academy"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5 space-y-1.5 bg-gradient-to-b from-slate-900/90 to-slate-950">
                <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-amber-400">
                  <Award className="w-3.5 h-3.5" />
                  <span>Grade A++</span>
                </div>
                <h4 className="font-serif text-base font-bold text-white">Post Graduation Diploma in Vastu</h4>
                <p className="text-xs text-slate-300">Life Designing Academy, Indore &nbsp;·&nbsp; 2021</p>
                <p className="text-[11px] text-slate-400">ISO 9001:2015 Certified &nbsp;·&nbsp; Cert No. LDA 2022328</p>
              </div>
            </div>

            {/* Certificate 2 – Astrology */}
            <div className="group relative rounded-3xl overflow-hidden glass-panel border border-amber-500/30 shadow-xl hover:border-amber-400/60 transition-all duration-300">
              <div className="relative h-72 overflow-hidden bg-white">
                <img
                  src="/images/cert-astrology-diploma.jpg"
                  alt="Post Graduation Diploma in Astrology – Life Designing Academy"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5 space-y-1.5 bg-gradient-to-b from-slate-900/90 to-slate-950">
                <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-amber-400">
                  <Award className="w-3.5 h-3.5" />
                  <span>Grade A++</span>
                </div>
                <h4 className="font-serif text-base font-bold text-white">Post Graduation Diploma in Astrology</h4>
                <p className="text-xs text-slate-300">Life Designing Academy, Indore &nbsp;·&nbsp; 2022</p>
                <p className="text-[11px] text-slate-400">ISO 9001:2015 Certified &nbsp;·&nbsp; Cert No. LDA 2022327</p>
              </div>
            </div>

            {/* Certificate 3 – Numerology */}
            <div className="group relative rounded-3xl overflow-hidden glass-panel border border-amber-500/30 shadow-xl hover:border-amber-400/60 transition-all duration-300">
              <div className="relative h-72 overflow-hidden bg-white">
                <img
                  src="/images/cert-numerology-advanced.jpg"
                  alt="Vedic Numerology Advanced Course – NumeraJyotish"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5 space-y-1.5 bg-gradient-to-b from-slate-900/90 to-slate-950">
                <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-amber-400">
                  <Award className="w-3.5 h-3.5" />
                  <span>ISO 9001:2015</span>
                </div>
                <h4 className="font-serif text-base font-bold text-white">Vedic Numerology Advanced Course</h4>
                <p className="text-xs text-slate-300">NumeraJyotish &nbsp;·&nbsp; Sept 2025</p>
                <p className="text-[11px] text-slate-400">By Vivek Vats &amp; Jyoti Sharma, Founders</p>
              </div>
            </div>
          </div>

          {/* Trust badges row */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-2">
            {[
              { label: 'Vastu', detail: 'Grade A++ · 2021', icon: '🏠' },
              { label: 'Astrology', detail: 'Grade A++ · 2022', icon: '⭐' },
              { label: 'Numerology', detail: 'Advanced · Sept 2025', icon: '🔢' },
              { label: 'ISO Certified', detail: 'ISO 9001:2015', icon: '🏅' },
            ].map(({ label, detail, icon }) => (
              <div
                key={label}
                className="flex flex-col items-center gap-1.5 p-4 rounded-2xl glass-panel border border-amber-500/20 text-center"
              >
                <span className="text-2xl">{icon}</span>
                <span className="font-serif font-bold text-sm text-white">{label}</span>
                <span className="text-[11px] text-slate-400">{detail}</span>
              </div>
            ))}
          </div>
        </div>

        <CtaBanner />
      </div>
    </div>
  );
};

export default AboutPage;
