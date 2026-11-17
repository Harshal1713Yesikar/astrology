import React from 'react';
import { Calendar, FileText, PhoneCall, Sparkles } from 'lucide-react';
import SectionHeading from '../common/SectionHeading';

const steps = [
  {
    step: '01',
    icon: Calendar,
    title: 'Book Your Session',
    description:
      'Choose your preferred service, date, and consultation mode (In-person in Indore or Online Call) via our booking form or WhatsApp.',
  },
  {
    step: '02',
    icon: FileText,
    title: 'Birth Chart Preparation',
    description:
      'Nitika Mehara thoroughly analyzes your Vedic planetary degrees, Dasha sequences, or Vastu architectural floor plan prior to your session.',
  },
  {
    step: '03',
    icon: PhoneCall,
    title: 'One-on-One Consultation',
    description:
      'Engage in an empathetic, confidential discussion addressing your specific queries with deep astrological clarity and practical advice.',
  },
  {
    step: '04',
    icon: Sparkles,
    title: 'Remedies & Ongoing Guidance',
    description:
      'Receive a tailored remedial roadmap featuring traditional Vedic rituals, gemstone recommendations, or non-demolition Vastu enhancements.',
  },
];

const ConsultationProcess = () => {
  return (
    <section className="py-20 relative bg-slate-950/70 border-t border-amber-500/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Seamless Experience"
          title="How Consultation Works"
          subtitle="A clear, structured, and respectful four-step approach to guiding you from uncertainty to empowerment."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {steps.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="relative p-6 rounded-3xl glass-panel border border-amber-500/20 hover:border-amber-400/50 transition-all duration-300 hover:-translate-y-1 group"
              >
                {/* Step Number Watermark */}
                <span className="absolute top-4 right-5 font-serif text-4xl font-black text-amber-500/10 group-hover:text-amber-500/20 transition-colors">
                  {item.step}
                </span>

                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-500/20 to-purple-900/30 border border-amber-500/30 flex items-center justify-center text-amber-400 mb-5 group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6" />
                </div>

                <h3 className="font-serif text-lg font-bold text-white mb-2 group-hover:text-amber-300 transition-colors">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ConsultationProcess;
