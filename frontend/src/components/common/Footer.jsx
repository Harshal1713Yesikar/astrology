import React from 'react';
import { Link } from 'react-router-dom';
import {
  Sparkles,
  MapPin,
  Phone,
  Clock,
  Mail,
  MessageCircle,
  ShieldAlert,
  Lock,
  ArrowRight,
} from 'lucide-react';
import { BRAND_INFO, SERVICES_LIST, getWhatsAppLink } from '../../utils/constants';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-slate-950 text-slate-300 border-t border-amber-500/20 pt-16 pb-12 overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-amber-500/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 pb-12 border-b border-slate-800">
          {/* Column 1: Brand Info */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-900 to-slate-900 border border-amber-400/50 flex items-center justify-center shadow-gold-glow">
                <Sparkles className="w-5 h-5 text-amber-400" />
              </div>
              <div>
                <span className="block font-serif text-2xl font-black tracking-wider text-white">
                  ASTRO<span className="gold-gradient-text">NIT</span>
                </span>
                <span className="block text-[10px] uppercase tracking-widest text-amber-300/80 font-medium">
                  Astrology & Spiritual Guidance
                </span>
              </div>
            </Link>

            <p className="text-sm text-slate-400 font-light leading-relaxed">
              Led by <strong>Nitika Mehara</strong>, Astrologer & Vastu Expert. Dedicated to
              bringing authentic Vedic wisdom, spatial harmony, and positive energy alignment to
              individuals and businesses.
            </p>

            <div className="pt-2">
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-emerald-500/40 bg-emerald-500/10 text-emerald-400 hover:bg-emerald-500/20 text-xs font-semibold transition-all hover:scale-105"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Nitika Mehara</span>
              </a>
            </div>
          </div>

          {/* Column 2: Our Services */}
          <div>
            <h3 className="font-serif text-lg font-bold text-white mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-amber-400" />
              <span>Our Services</span>
            </h3>
            <ul className="space-y-2 text-sm">
              {SERVICES_LIST.map((srv) => (
                <li key={srv.id}>
                  <Link
                    to={srv.path}
                    className="text-slate-400 hover:text-amber-300 transition-colors flex items-center gap-1.5 group"
                  >
                    <ArrowRight className="w-3 h-3 text-amber-500/50 group-hover:translate-x-1 transition-transform" />
                    <span>{srv.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Quick Links & Timings */}
          <div>
            <h3 className="font-serif text-lg font-bold text-white mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-amber-400" />
              <span>Quick Links</span>
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="text-slate-400 hover:text-amber-300 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-slate-400 hover:text-amber-300 transition-colors">
                  Meet Nitika Mehara
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-slate-400 hover:text-amber-300 transition-colors">
                  All Services
                </Link>
              </li>
              <li>
                <Link to="/book-consultation" className="text-amber-300 font-semibold hover:text-amber-200 transition-colors">
                  Book Consultation
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-slate-400 hover:text-amber-300 transition-colors">
                  Contact & Map
                </Link>
              </li>
              <li>
                <Link to="/privacy-policy" className="text-slate-400 hover:text-amber-300 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms-and-conditions" className="text-slate-400 hover:text-amber-300 transition-colors">
                  Terms & Conditions
                </Link>
              </li>
            </ul>

            <div className="mt-5 p-3 rounded-xl bg-slate-900/80 border border-amber-500/20">
              <div className="flex items-center gap-2 text-xs font-semibold text-amber-300 mb-1">
                <Clock className="w-3.5 h-3.5 text-amber-400" />
                <span>Consultation Timings</span>
              </div>
              <p className="text-xs text-slate-300 font-light">Monday to Saturday</p>
              <p className="text-xs text-amber-400 font-medium">3:00 PM – 8:00 PM (IST)</p>
            </div>
          </div>

          {/* Column 4: Indore Address & Contact */}
          <div>
            <h3 className="font-serif text-lg font-bold text-white mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-amber-400" />
              <span>Indore Center</span>
            </h3>
            <div className="space-y-3.5 text-sm text-slate-300">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <address className="not-italic text-xs text-slate-300 leading-relaxed">
                  <strong>ASTRONIT</strong>
                  <br />
                  32, New Abhishek Nagar, Musakhedi,
                  <br />
                  Indore, Madhya Pradesh – 452001, India
                </address>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <div className="flex flex-col text-xs">
                  <a href={`tel:${BRAND_INFO.phone1}`} className="hover:text-amber-300">
                    +91 {BRAND_INFO.phone1}
                  </a>
                  <a href={`tel:${BRAND_INFO.phone2}`} className="hover:text-amber-300">
                    +91 {BRAND_INFO.phone2}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <a
                  href="mailto:contact@astronit.com"
                  className="text-xs text-slate-300 hover:text-amber-300"
                >
                  contact@astronit.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Mandatory Disclaimer */}
        <div className="mt-8 p-4 rounded-xl bg-purple-950/20 border border-purple-500/20 text-xs text-slate-400 leading-relaxed text-center">
          <div className="inline-flex items-center gap-1.5 text-amber-400 font-semibold mb-1">
            <ShieldAlert className="w-4 h-4" />
            <span>Important Disclaimer</span>
          </div>
          <p>
            "Astrology, numerology and Vastu consultations are intended for traditional and personal
            guidance. Outcomes are not guaranteed and should not replace professional medical, legal
            or financial advice."
          </p>
        </div>

        {/* Bottom copyright and admin login link */}
        <div className="mt-8 pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <p>
            © {currentYear} <strong>ASTRONIT</strong>. All rights reserved. Consultant Nitika Mehara, Indore.
          </p>
          <div className="flex items-center gap-4">
            <Link to="/privacy-policy" className="hover:text-amber-300 transition-colors">
              Privacy Policy
            </Link>
            <span>•</span>
            <Link to="/terms-and-conditions" className="hover:text-amber-300 transition-colors">
              Terms & Conditions
            </Link>
            <span>•</span>
            <Link
              to="/admin/login"
              className="inline-flex items-center gap-1 text-slate-400 hover:text-amber-400 transition-colors"
            >
              <Lock className="w-3 h-3" />
              <span>Admin Portal</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
