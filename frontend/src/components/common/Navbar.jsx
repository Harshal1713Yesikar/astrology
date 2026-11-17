import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import {
  Sparkles,
  Phone,
  MessageCircle,
  Menu,
  X,
  ChevronDown,
  Sun,
  Compass,
  Binary,
  Gem,
  Flame,
  ShieldCheck,
  Calendar,
} from 'lucide-react';
import { BRAND_INFO, SERVICES_LIST, getWhatsAppLink } from '../../utils/constants';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesDropdown(false);
  }, [location.pathname]);

  const navLinkClass = ({ isActive }) =>
    `text-sm font-medium transition-colors duration-200 py-1 relative ${
      isActive
        ? 'text-amber-400 font-semibold after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-amber-400 after:rounded'
        : 'text-slate-300 hover:text-amber-300'
    }`;

  const getServiceIcon = (name) => {
    switch (name) {
      case 'Sun':
        return <Sun className="w-4 h-4 text-amber-400" />;
      case 'Compass':
        return <Compass className="w-4 h-4 text-amber-400" />;
      case 'Binary':
        return <Binary className="w-4 h-4 text-amber-400" />;
      case 'Gem':
        return <Gem className="w-4 h-4 text-amber-400" />;
      case 'Flame':
        return <Flame className="w-4 h-4 text-amber-400" />;
      default:
        return <Sparkles className="w-4 h-4 text-amber-400" />;
    }
  };

  return (
    <>
      {/* Top Announcement & Quick Contact Bar */}
      <div className="bg-gradient-to-r from-cosmic-darkest via-purple-950/70 to-cosmic-darkest border-b border-amber-500/20 text-xs text-slate-300 py-1.5 px-4 hidden md:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-amber-300/90">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>Consultant: <strong>Nitika Mehara</strong> – Astrologer & Vastu Expert</span>
            </span>
            <span className="text-slate-400">|</span>
            <span className="text-slate-400">Musakhedi, Indore, MP</span>
          </div>

          <div className="flex items-center gap-5">
            <span className="text-slate-400">Timings: Mon - Sat: 3:00 PM – 8:00 PM</span>
            <a
              href={`tel:${BRAND_INFO.phone1}`}
              className="flex items-center gap-1 text-slate-300 hover:text-amber-300 transition-colors"
            >
              <Phone className="w-3 h-3 text-amber-400" />
              <span>+91 {BRAND_INFO.phone1}</span>
            </a>
            <a
              href={`tel:${BRAND_INFO.phone2}`}
              className="flex items-center gap-1 text-slate-300 hover:text-amber-300 transition-colors"
            >
              <Phone className="w-3 h-3 text-amber-400" />
              <span>+91 {BRAND_INFO.phone2}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Glass Navbar */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-cosmic-darkest/95 backdrop-blur-md shadow-2xl border-b border-amber-500/20 py-3'
            : 'bg-cosmic-darkest/75 backdrop-blur-sm border-b border-white/5 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-gradient-to-br from-purple-900 to-slate-900 border border-amber-400/50 flex items-center justify-center shadow-gold-glow group-hover:scale-105 transition-transform duration-300">
              <Sparkles className="w-5 h-5 text-amber-400 group-hover:rotate-12 transition-transform duration-300" />
              <div className="absolute inset-0 rounded-full border border-amber-300/30 animate-pulse-subtle" />
            </div>
            <div>
              <span className="block font-serif text-xl sm:text-2xl font-black tracking-wider text-white">
                ASTRO<span className="gold-gradient-text">NIT</span>
              </span>
              <span className="block text-[10px] sm:text-[11px] uppercase tracking-widest text-amber-300/80 font-medium -mt-1">
                Astrology & Spiritual Guidance
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8">
            <NavLink to="/" className={navLinkClass}>
              Home
            </NavLink>
            <NavLink to="/about" className={navLinkClass}>
              About Us
            </NavLink>

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setServicesDropdown(true)}
              onMouseLeave={() => setServicesDropdown(false)}
            >
              <button
                type="button"
                className={`flex items-center gap-1.5 text-sm font-medium py-1 transition-colors ${
                  location.pathname.startsWith('/services')
                    ? 'text-amber-400 font-semibold'
                    : 'text-slate-300 hover:text-amber-300'
                }`}
              >
                <span>Services</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    servicesDropdown ? 'rotate-180 text-amber-400' : ''
                  }`}
                />
              </button>

              {/* Dropdown Menu */}
              {servicesDropdown && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 w-80 pt-3 bg-slate-600 z-50 ">
                  <div className="bg-slate-900/98 backdrop-blur-xl border border-amber-500/30 rounded-2xl shadow-2xl p-2.5 space-y-1">
                    <div className="px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-amber-400/80 border-b border-amber-500/10">
                      Our Specialized Consultations
                    </div>
                    {SERVICES_LIST.map((srv) => (
                      <Link
                        key={srv.id}
                        to={srv.path}
                        className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-amber-500/10 text-slate-200 hover:text-amber-300 transition-colors group"
                      >
                        <div className="p-1.5 rounded-lg bg-slate-800/80 border border-amber-500/20 group-hover:border-amber-400/50">
                          {getServiceIcon(srv.iconName)}
                        </div>
                        <div className="flex-1">
                          <div className="text-sm font-medium leading-none">{srv.title}</div>
                          <div className="text-[11px] text-slate-400 line-clamp-1 mt-1">
                            {srv.shortDescription}
                          </div>
                        </div>
                      </Link>
                    ))}
                    <div className="pt-2 border-t border-amber-500/10">
                      <Link
                        to="/services"
                        className="block text-center text-xs font-semibold text-amber-400 hover:text-amber-300 py-1.5 rounded-lg hover:bg-amber-500/10 transition-colors"
                      >
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <NavLink to="/contact" className={navLinkClass}>
              Contact Us
            </NavLink>
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp Enquiry"
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-full border border-emerald-500/40 bg-emerald-500/10 text-emerald-400 hover:bg-emerald-500/20 text-xs font-semibold transition-all hover:scale-105"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </a>

            <Link
              to="/book-consultation"
              className="btn-gold !py-2.5 !px-5 text-xs sm:text-sm font-bold flex items-center gap-2 shadow-gold-glow"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Consultation</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <Link
              to="/book-consultation"
              className="btn-gold !py-2 !px-3 text-xs font-semibold flex items-center gap-1"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Book</span>
            </Link>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl border border-amber-500/30 text-amber-400 hover:bg-amber-500/10 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-slate-950/98 border-b border-amber-500/30 px-5 pt-4 pb-6 space-y-3 backdrop-blur-xl animate-in slide-in-from-top-4 duration-200">
            <div className="text-xs text-amber-300 font-semibold uppercase tracking-wider pb-1 border-b border-amber-500/10">
              Navigation Menu
            </div>
            <Link
              to="/"
              className="block py-2 text-base font-medium text-slate-200 hover:text-amber-400"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="block py-2 text-base font-medium text-slate-200 hover:text-amber-400"
            >
              About Nitika Mehara
            </Link>

            <div className="pt-2 pb-1 border-t border-amber-500/10">
              <div className="text-xs font-semibold uppercase text-amber-400 mb-2">Our Services</div>
              <div className="grid grid-cols-1 gap-1.5 pl-2">
                {SERVICES_LIST.map((srv) => (
                  <Link
                    key={srv.id}
                    to={srv.path}
                    className="flex items-center gap-2.5 py-1.5 text-sm text-slate-300 hover:text-amber-300"
                  >
                    {getServiceIcon(srv.iconName)}
                    <span>{srv.title}</span>
                  </Link>
                ))}
              </div>
            </div>

            <Link
              to="/contact"
              className="block py-2 text-base font-medium text-slate-200 hover:text-amber-400 border-t border-amber-500/10"
            >
              Contact Us & Location
            </Link>

            <div className="pt-4 flex flex-col gap-2.5">
              <Link
                to="/book-consultation"
                className="btn-gold w-full text-center py-3 text-sm font-bold flex items-center justify-center gap-2"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Your Consultation</span>
              </Link>
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 text-center rounded-full border border-emerald-500/40 bg-emerald-500/10 text-emerald-400 text-sm font-semibold flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat on WhatsApp (+91 {BRAND_INFO.phone1})</span>
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Navbar;
