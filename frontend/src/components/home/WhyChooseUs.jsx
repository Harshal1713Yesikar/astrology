import React from 'react';
import {
  UserCheck,
  HeartHandshake,
  BookOpen,
  Compass,
  CalendarCheck,
  Lock,
  Sparkles,
  Shield,
} from 'lucide-react';
import SectionHeading from '../common/SectionHeading';

const features = [
  {
    icon: UserCheck,
    title: 'Personalised Consultations',
    description:
      'No generic computer-generated predictions. Every reading is personally conducted by Nitika Mehra with tailored life recommendations.',
  },
  {
    icon: HeartHandshake,
    title: 'Individual Attention to Every Concern',
    description:
      'We dedicate generous time during consultation hours to listen empathetically to your career, relationship, health, and family concerns.',
  },
  {
    icon: BookOpen,
    title: 'Traditional Knowledge & Practical Guidance',
    description:
      'Deeply rooted in authentic Vedic Shastras, Brihat Parashara, and ancient Vastu tenets, translated into clear, actionable modern advice.',
  },
  {
    icon: Sparkles,
    title: 'Guidance Based on Individual Birth Charts',
    description:
      'Precise calculation of planetary degrees, divisional charts (D9, D10), Mahadasha cycles, and planetary transits.',
  },
  {
    icon: Compass,
    title: 'Residential & Commercial Vastu Solutions',
    description:
      'Holistic spatial solutions that respect architecture and budget, focusing on energy harmonizers, directional balance, and zero unnecessary demolition.',
  },
  {
    icon: CalendarCheck,
    title: 'Easy Appointment Booking',
    description:
      'Streamlined online scheduling, instant WhatsApp connectivity, and flexible options for both in-person visits in Indore and worldwide video calls.',
  },
  {
    icon: Lock,
    title: '100% Confidential Consultation',
    description:
      'Your birth data, personal concerns, business blueprints, and discussions remain strictly private and sacred with complete professional integrity.',
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Trust & Authenticity"
          title="Why Choose Astronit?"
          subtitle="Discover the pillars of integrity, deep astrological study, and personal commitment that make Astronit a trusted sanctuary for guidance in Indore and beyond."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {features.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="relative p-7 rounded-3xl glass-panel border border-amber-500/20 hover:border-amber-400/50 hover:shadow-gold-glow transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  <div className="w-13 h-13 w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-500/20 to-purple-900/30 border border-amber-500/30 flex items-center justify-center text-amber-400 mb-5 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="font-serif text-xl font-bold text-white mb-2.5 group-hover:text-amber-300 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-sm text-slate-300 font-light leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 flex items-center gap-1.5 text-xs text-amber-400/80 font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                  <Shield className="w-3.5 h-3.5 text-amber-400" />
                  <span>Astronit Standard of Care</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
