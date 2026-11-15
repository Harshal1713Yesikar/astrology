import React, { useState, useEffect } from 'react';
import { ChevronDown, HelpCircle, Phone, MessageCircle } from 'lucide-react';
import SectionHeading from '../common/SectionHeading';
import { faqService } from '../../services/api';
import { BRAND_INFO, getWhatsAppLink } from '../../utils/constants';

const defaultFaqs = [
  {
    question: 'Do I need my birth details for an astrology consultation?',
    answer:
      'Yes, date of birth, exact birth time and place of birth are generally required for detailed Kundali analysis. If exact time is unknown, Prashna Kundali (Horary Astrology) or Palmistry/Numerology analysis can also provide valuable guidance.',
  },
  {
    question: 'Do you provide online consultations?',
    answer:
      'Yes, Astronit offers comprehensive online consultations via WhatsApp video or audio call, as well as Zoom. Clients across India and internationally can consult Nitika Mehra from the comfort of their home. Contact us to enquire about online consultation availability.',
  },
  {
    question: 'Can I get Vastu guidance for my existing home?',
    answer:
      'Yes, you can enquire about residential and commercial Vastu consultation. Nitika Mehra evaluates floor plans and on-site energy flows, recommending effective non-demolition remedies, color harmonizers, and elemental corrections without breaking walls.',
  },
  {
    question: 'How can I book an appointment?',
    answer:
      'You can call or WhatsApp us directly at +91 8959235176 or +91 7869608159. You can also submit the online Book Consultation form on this website. Our team will promptly confirm your slot.',
  },
  {
    question: 'What are the consultation timings?',
    answer:
      'Consultations are conducted Monday to Saturday from 3:00 PM to 8:00 PM (IST). Sunday is closed. Prior appointment is mandatory.',
  },
  {
    question: 'Are astrological remedies expensive or complex to follow?',
    answer:
      'No. At Astronit, we believe remedies should be practical, positive, and aligned with your comfort. We emphasize daily mantras, lifestyle alignments, charitable acts, natural crystals, and authentic gemstones strictly when beneficial.',
  },
];

const FaqSection = () => {
  const [faqs, setFaqs] = useState(defaultFaqs);
  const [openIndex, setOpenIndex] = useState(0);

  useEffect(() => {
    const fetchFaqs = async () => {
      try {
        const res = await faqService.getAll();
        if (res.success && res.faqs && res.faqs.length > 0) {
          setFaqs(res.faqs);
        }
      } catch (err) {
        // Keeps default FAQs
      }
    };
    fetchFaqs();
  }, []);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="py-20 relative bg-slate-950/70 border-t border-amber-500/10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Clear Answers"
          title="Frequently Asked Questions"
          subtitle="Everything you need to know about our astrological consultations, Vastu evaluations, and booking process."
        />

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`rounded-2xl transition-all duration-300 border ${
                  isOpen
                    ? 'bg-slate-900/90 border-amber-500/40 shadow-gold-glow'
                    : 'bg-slate-900/40 border-slate-800 hover:border-amber-500/30'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggle(index)}
                  className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="font-serif text-base sm:text-lg font-semibold text-white">
                    {faq.question}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 border border-amber-500/30 text-amber-400 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 bg-amber-500/20' : 'bg-slate-800'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-5 pt-1 text-slate-300 text-sm sm:text-base font-light leading-relaxed border-t border-slate-800/80 animate-in fade-in duration-200">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Quick Help Footer */}
        <div className="mt-12 p-6 rounded-3xl glass-panel border border-amber-500/20 text-center flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <h4 className="font-serif text-base font-bold text-white">Have a specific question not listed here?</h4>
            <p className="text-xs text-slate-400 mt-1">Talk directly with Nitika Mehra or our support team.</p>
          </div>
          <div className="flex items-center gap-3">
            <a
              href={`tel:${BRAND_INFO.phone1}`}
              className="btn-outline-gold !py-2 !px-4 text-xs font-semibold flex items-center gap-1.5"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Call Us</span>
            </a>
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-emerald-500/40 bg-emerald-500/10 text-emerald-400 text-xs font-semibold hover:bg-emerald-500/20 transition-all"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
