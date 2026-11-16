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
} from 'lucide-react';
import SectionHeading from '../common/SectionHeading';
import { getWhatsAppLink } from '../../utils/constants';

export const servicesData = [
  {
    id: 'astrology-consultation',
    title: 'Astrology Consultation',
    slug: 'astrology-consultation',
    icon: Sun,
    image: 'https://images.unsplash.com/photo-1532968961962-8a0cb3a2d4f5?auto=format&fit=crop&w=800&q=80',
    description:
      'Detailed birth chart (Kundali) analysis, planetary positions, career, marriage, business guidance and personalised astrological remedies.',
    highlights: [
      'Birth Chart (Kundali) Analysis',
      'Career & Financial Guidance',
      'Marriage & Relationship Match',
      'Personalised Traditional Remedies',
    ],
  },
  {
    id: 'vastu-consultation',
    title: 'Vastu Consultation',
    slug: 'vastu-consultation',
    icon: Compass,
    image: '/images/nitika-mehra-vastu-site.jpg',
    description:
      'Harmonize your living and workspaces with residential and commercial Vastu, direction analysis, and practical non-demolition remedies.',
    highlights: [
      'Residential & Flat Vastu',
      'Commercial & Office Spaces',
      'Kitchen & Bedroom Alignments',
      'Non-Demolition Corrections',
    ],
  },
  {
    id: 'numerology',
    title: 'Numerology Consultation',
    slug: 'numerology',
    icon: Binary,
    image: 'https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=800&q=80',
    description:
      'Align names, mobile numbers, business brands, and lucky vibrations for maximum prosperity and personal momentum.',
    highlights: [
      'Name Numerology Correction',
      'Mobile Number Numerology',
      'Business Brand Harmonization',
      'Lucky Numbers & Auspicious Colors',
    ],
  },
  {
    id: 'navratna-gemstones',
    title: 'Nine Gemstones (Navratna)',
    slug: 'navratna-gemstones',
    icon: Gem,
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=800&q=80',
    description:
      'Rigorous planetary gemstone guidance based on individual birth charts, auspicious wearing muhurat, and consecration protocols.',
    highlights: [
      'Personalised Gemstone Selection',
      'Planetary Radiation Alignment',
      'Vedic Wearing Muhurat & Metals',
      'Untreated Natural Gem Guidance',
    ],
  },
  {
    id: 'crystal-healing',
    title: 'Crystal Healing & Guidance',
    slug: 'crystal-healing',
    icon: Sparkles,
    image: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=800&q=80',
    description:
      'Natural Earth crystals to dissolve stagnant energy, shield against negativity, and attract wealth, serenity, and mental focus.',
    highlights: [
      'Customized Crystal Grids',
      'Prosperity (Pyrite, Citrine)',
      'Protection (Black Tourmaline)',
      'Meditation & Emotional Balance',
    ],
  },
  {
    id: 'spiritual-remedies',
    title: 'Spiritual Remedies & Guidance',
    slug: 'spiritual-remedies',
    icon: Flame,
    image: 'https://images.unsplash.com/photo-1606293926075-69a00dbfde81?auto=format&fit=crop&w=800&q=80',
    description:
      'Authentic Vedic planetary remedies, Rahu-Ketu relief, sacred Rudraksha recommendations, and Dhan Lakshmi prosperity potlis.',
    highlights: [
      'Traditional Planetary Shanti',
      'Authentic Rudraksha Selection',
      'Dhan Lakshmi Prosperity Potlis',
      'Space Cleansing Camphor Remedies',
    ],
  },
];

const ServicesOverview = () => {
  return (
    <section className="py-20 relative bg-slate-950/60 border-y border-amber-500/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Sacred Knowledge & Practical Solutions"
          title="Our Consultation Services"
          subtitle="Explore our comprehensive range of Vedic astrology, Vastu Shastra, numerology, and spiritual wellness consultations tailored to your unique birth energy."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service) => {
            const Icon = service.icon;
            const whatsappMsg = `Hello Nitika Mehra ji, I would like to enquire about your ${service.title} service. Please share details.`;

            return (
              <div
                key={service.id}
                className="group relative flex flex-col rounded-3xl glass-panel overflow-hidden border border-amber-500/20 hover:border-amber-400/50 hover:shadow-gold-glow transition-all duration-300 hover:-translate-y-1.5"
              >
                {/* Image Banner */}
                <div className="relative h-96 w-full overflow-hidden bg-slate-900">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

                  {/* Icon Badge */}
                  <div className="absolute top-4 right-4 w-11 h-11 rounded-2xl bg-slate-900/90 border border-amber-500/40 backdrop-blur-md flex items-center justify-center text-amber-400 shadow-md">
                    <Icon className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="font-serif text-xl font-bold text-white group-hover:text-amber-300 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-sm text-slate-300 font-light mt-2 line-clamp-3 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Offerings list */}
                    <div className="mt-4 pt-4 border-t border-slate-800/80 space-y-1.5">
                      {service.highlights.map((h, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs text-slate-300">
                          <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Card Actions */}
                  <div className="pt-4 border-t border-slate-800/80 space-y-2.5">
                    <div className="grid grid-cols-2 gap-2">
                      <Link
                        to={`/services/${service.slug}`}
                        className="w-full inline-flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl border border-amber-500/40 bg-amber-500/10 hover:bg-amber-500/20 text-amber-300 text-xs font-semibold transition-all hover:scale-[1.02]"
                      >
                        <span>Learn More</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>

                      <Link
                        to={`/book-consultation?service=${encodeURIComponent(service.title)}`}
                        className="btn-gold !py-2.5 !px-3 text-xs font-bold flex items-center justify-center gap-1.5 w-full"
                      >
                        <Calendar className="w-3.5 h-3.5" />
                        <span>Book Now</span>
                      </Link>
                    </div>

                    {/* WhatsApp enquiry on service card */}
                    <a
                      href={getWhatsAppLink(whatsappMsg)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 py-2 px-3 rounded-xl border border-emerald-500/30 bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 text-xs font-medium transition-all"
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      <span>Enquire on WhatsApp</span>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-14 text-center">
          <Link
            to="/services"
            className="btn-outline-gold px-8 py-3.5 text-sm font-semibold inline-flex items-center gap-2"
          >
            <span>View All Detailed Service Pages</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
