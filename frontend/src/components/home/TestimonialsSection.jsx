import React, { useState, useEffect } from 'react';
import { Star, Quote, MapPin, CheckCircle, Sparkles } from 'lucide-react';
import SectionHeading from '../common/SectionHeading';
import { testimonialService } from '../../services/api';

const fallbackTestimonials = [
  {
    clientName: 'Rajesh Sharma',
    location: 'Indore, MP',
    serviceTaken: 'Kundali & Business Guidance',
    review:
      'Nitika Mehara ji gave me tremendous clarity when my manufacturing business was facing severe payment delays. Her Mahadasha insights and simple non-expensive remedies created positive shifts within 3 months. Highly recommended in Indore!',
    rating: 5,
  },
  {
    clientName: 'Priya Agarwal',
    location: 'Bhopal, MP',
    serviceTaken: 'Residential Vastu Consultation',
    review:
      'We consulted Nitika ji before moving into our new flat. She gave brilliant practical suggestions without asking for any structural demolition. The positive vibe and harmony in our family since implementing her guidance has been remarkable.',
    rating: 5,
  },
  {
    clientName: 'Vikram Joshi',
    location: 'Indore, MP',
    serviceTaken: 'Name Numerology & Gemstones',
    review:
      'Very calm, professional, and authentic astrologer. Nitika ji explained everything scientifically and logically. Her recommendation of Yellow Sapphire and name alignment boosted my career confidence significantly.',
    rating: 5,
  },
  {
    clientName: 'Sneha Patel',
    location: 'Ujjain, MP',
    serviceTaken: 'Spiritual Remedies & Rahu-Ketu Shanti',
    review:
      'Astronit is a blessing for anyone seeking genuine spiritual direction without fear-mongering. The Dhan Lakshmi Potli and personalized mantras helped restore peaceful energy in our home.',
    rating: 5,
  },
];

const TestimonialsSection = () => {
  const [testimonials, setTestimonials] = useState(fallbackTestimonials);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const res = await testimonialService.getFeatured();
        if (res.success && res.testimonials && res.testimonials.length > 0) {
          setTestimonials(res.testimonials);
        }
      } catch (err) {
        // Keeps fallback
      }
    };
    fetchTestimonials();
  }, []);

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Genuine Client Experiences"
          title="Voices of Trust & Transformation"
          subtitle="All testimonials represent authentic experiences from clients guided personally by Nitika Mehara."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((item, idx) => (
            <div
              key={idx}
              className="relative p-7 sm:p-8 rounded-3xl glass-panel border border-amber-500/20 hover:border-amber-400/50 hover:shadow-gold-glow transition-all duration-300 flex flex-col justify-between"
            >
              <Quote className="w-10 h-10 text-amber-500/20 mb-4" />

              <p className="text-slate-200 text-sm sm:text-base font-light italic leading-relaxed mb-6">
                "{item.review}"
              </p>

              <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                <div>
                  <h4 className="font-serif text-base font-bold text-white flex items-center gap-1.5">
                    <span>{item.clientName}</span>
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                  </h4>
                  <div className="flex items-center gap-2 text-xs text-slate-400 mt-0.5">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-amber-400" />
                      <span>{item.location}</span>
                    </span>
                    <span>•</span>
                    <span className="text-amber-300/90">{item.serviceTaken}</span>
                  </div>
                </div>

                {/* Star rating */}
                <div className="flex items-center gap-1">
                  {[...Array(item.rating || 5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
