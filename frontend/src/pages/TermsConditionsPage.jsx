import React from 'react';
import { ShieldAlert, FileText, CheckCircle2 } from 'lucide-react';
import { BRAND_INFO } from '../utils/constants';

const TermsConditionsPage = () => {
  return (
    <div className="py-12 sm:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-300 text-xs font-semibold uppercase tracking-wider">
            <FileText className="w-3.5 h-3.5 text-amber-400" />
            <span>Consultation Terms</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white">
            Terms & <span className="gold-gradient-text">Conditions</span>
          </h1>
          <p className="text-xs sm:text-sm text-slate-400">
            Last Updated: November 2026 • Astronit – Astrology & Spiritual Guidance
          </p>
        </div>

        <div className="rounded-3xl glass-panel border border-amber-500/20 p-6 sm:p-10 space-y-8 text-slate-300 text-sm leading-relaxed">
          {/* Mandatory Disclaimer Highlight */}
          <div className="p-5 rounded-2xl bg-purple-950/40 border border-purple-500/30 text-amber-200 space-y-2">
            <div className="flex items-center gap-2 font-serif font-bold text-base text-amber-300">
              <ShieldAlert className="w-5 h-5 text-amber-400" />
              <span>Mandatory Legal & Spiritual Disclaimer</span>
            </div>
            <p className="italic text-xs sm:text-sm text-slate-300 leading-relaxed">
              "Astrology, numerology and Vastu consultations are intended for traditional and personal
              guidance. Outcomes are not guaranteed and should not replace professional medical, legal
              or financial advice."
            </p>
          </div>

          <section className="space-y-3">
            <h2 className="font-serif text-xl font-bold text-white flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-amber-400" />
              <span>1. Nature of Services</span>
            </h2>
            <p>
              Astronit provides spiritual advisory consultations based on classical Vedic Jyotish,
              Vastu Shastra, Chaldean/Pythagorean Numerology, Gemstone wisdom, and traditional remedies.
              Readings reflect planetary interpretations and are designed to provide spiritual clarity
              and directional perspective.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-xl font-bold text-white flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-amber-400" />
              <span>2. Appointments & Scheduling</span>
            </h2>
            <p>
              Consultations are conducted Monday to Saturday between 3:00 PM and 8:00 PM (IST). Online
              appointment requests through this website are placed in <strong>Pending</strong> status
              until confirmed by Nitika Mehara or our office. We reserve the right to reschedule in the
              event of unforeseen emergencies.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-xl font-bold text-white flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-amber-400" />
              <span>3. Remedies & Personal Discretion</span>
            </h2>
            <p>
              All remedies suggested—including Vedic mantras, spiritual lifestyle routines, gemstone
              wearings, crystal placements, or Vastu modifications—are completely voluntary. Nitika Mehara
              does not compel or guarantee supernatural outcomes.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-xl font-bold text-white flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-amber-400" />
              <span>4. Jurisdiction</span>
            </h2>
            <p>
              Any disputes or legal inquiries shall be subject to the exclusive jurisdiction of the
              courts located in <strong>Indore, Madhya Pradesh, India</strong>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsConditionsPage;
