import React from 'react';
import { Shield, Lock, FileText, CheckCircle } from 'lucide-react';
import SectionHeading from '../components/common/SectionHeading';
import { BRAND_INFO } from '../utils/constants';

const PrivacyPolicyPage = () => {
  return (
    <div className="py-12 sm:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-300 text-xs font-semibold uppercase tracking-wider">
            <Lock className="w-3.5 h-3.5 text-amber-400" />
            <span>Confidential & Protected</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white">
            Privacy <span className="gold-gradient-text">Policy</span>
          </h1>
          <p className="text-xs sm:text-sm text-slate-400">
            Last Updated: November 2026 • Astronit – Astrology & Spiritual Guidance
          </p>
        </div>

        <div className="rounded-3xl glass-panel border border-amber-500/20 p-6 sm:p-10 space-y-8 text-slate-300 text-sm leading-relaxed">
          <section className="space-y-3">
            <h2 className="font-serif text-xl font-bold text-white flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-amber-400" />
              <span>1. Commitment to Privacy</span>
            </h2>
            <p>
              At <strong>ASTRONIT</strong>, led by Nitika Mehara (Musakhedi, Indore), we hold the sacred
              privacy of our clients in the highest regard. We understand that your birth chart (Kundali),
              personal life challenges, family questions, and residential floor plans are deeply personal.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-xl font-bold text-white flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-amber-400" />
              <span>2. Information We Collect</span>
            </h2>
            <p>When booking a consultation or submitting an enquiry, we collect:</p>
            <ul className="list-disc list-inside space-y-1.5 pl-2 text-slate-300">
              <li>Full Name, Mobile Number, and Email Address</li>
              <li>Date of Birth, Time of Birth, and Place of Birth (for Kundali calculations)</li>
              <li>Floor plans, property directions, or photos (for Vastu evaluations)</li>
              <li>Specific life or business queries shared voluntarily</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-xl font-bold text-white flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-amber-400" />
              <span>3. How We Use Your Data</span>
            </h2>
            <p>
              Your birth and contact details are used strictly for astrological chart generation,
              Vastu analysis, appointment scheduling, and communication directly from Nitika Mehara.
              We <strong>never sell, lease, or distribute</strong> your personal information to third-party
              marketing companies.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-xl font-bold text-white flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-amber-400" />
              <span>4. Data Security & Confidentiality</span>
            </h2>
            <p>
              All digital communications and appointment submissions are stored securely. Discussions
              during private sessions remain 100% confidential between you and Nitika Mehara.
            </p>
          </section>

          <section className="space-y-3 border-t border-slate-800 pt-6">
            <h2 className="font-serif text-xl font-bold text-white">5. Contact Regarding Privacy</h2>
            <p>
              If you have any questions about this Privacy Policy or wish to request data updates, please
              contact us at:
            </p>
            <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 text-xs space-y-1 text-slate-300">
              <p><strong>ASTRONIT – Astrology & Spiritual Guidance</strong></p>
              <p>Consultant: Nitika Mehara</p>
              <p>Address: 32, New Abhishek Nagar, Musakhedi, Indore, MP – 452001</p>
              <p>Contact: +91 8959235176 / +91 7869608159</p>
              <p>Email: contact@astronit.com</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;
