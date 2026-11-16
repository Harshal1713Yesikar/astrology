import React from 'react';
import { Sun } from 'lucide-react';
import ServiceDetailLayout from '../components/services/ServiceDetailLayout';

const AstrologyPage = () => {
  const offerings = [
    'Birth Chart (Kundali) Analysis',
    'Planetary Positions and Their Effects',
    'Career and Professional Guidance',
    'Marriage and Relationship Guidance',
    'Financial and Business Guidance',
    'Mahadasha and Antardasha Analysis',
    'Yogas and Dosha Analysis',
    'Personalised Astrological Remedies',
  ];

  const benefits = [
    'Clarity regarding favorable career transitions, investments, and business launches.',
    'Insight into relationship compatibility, auspicious marriage timings, and domestic harmony.',
    'Identification of active planetary periods (Mahadasha/Antardasha) and practical remedies.',
    'Vedic assessment of Mangal Dosha, Kaal Sarp Dosha, and Pitra Dosha with ethical shanti remedies.',
  ];

  const detailedContent = (
    <>
      <p>
        In Vedic Astrology (Jyotish Shastra), your birth chart is a sacred cosmic blueprint capturing
        the planetary coordinates at the precise second of your arrival into this world.
      </p>
      <p>
        Nitika Mehara conducts an exhaustive multi-layered analysis of your lagna (ascendant),
        moon sign, Navamsha (D9) chart, and planetary strengths (Shadbala). Instead of generating
        fear, our consultations provide rational, compassionate clarity, illuminating both opportunities
        and timing considerations.
      </p>
    </>
  );

  return (
    <ServiceDetailLayout
      title="Astrology Consultation"
      slug="astrology-consultation"
      tagline="Vedic Kundali analysis, planetary transit influences, and personalized astrological roadmap."
      icon={Sun}
      image="https://images.unsplash.com/photo-1532968961962-8a0cb3a2d4f5?auto=format&fit=crop&w=1200&q=80"
      description="Understand the celestial forces governing your timeline. Nitika Mehara provides deep birth chart analysis, planetary dasha evaluations, and practical remedial guidance for career, relationships, and life progression."
      detailedContent={detailedContent}
      offerings={offerings}
      benefits={benefits}
      consultationMode="In-Person at Indore Office & Worldwide Video/Audio Call"
    />
  );
};

export default AstrologyPage;
