import React from 'react';
import { Binary } from 'lucide-react';
import ServiceDetailLayout from '../components/services/ServiceDetailLayout';

const NumerologyPage = () => {
  const offerings = [
    'Name Numerology',
    'Mobile Number Numerology',
    'Business Name Numerology',
    'Lucky Number Analysis',
    'Career and Personal Numerology',
    'Name Correction Guidance',
  ];

  const benefits = [
    'Align personal and professional names with favorable planetary vibrations.',
    'Select high-resonance mobile numbers and vehicle plates for effortless communication.',
    'Strategically name corporate brands, products, and firms to attract market expansion.',
    'Discover auspicious dates, months, and lucky colors that synchronize with your life path.',
  ];

  const detailedContent = (
    <>
      <p>
        Everything in the universe vibrates at a specific frequency, and numbers are the mathematical
        expression of cosmic energy.
      </p>
      <p>
        Nitika Mehra integrates Chaldean and Pythagorean numerological systems to examine the alignment
        between your Psychic Number (Mulank), Destiny Number (Bhagyank), and Name Number (Namank).
        Minor strategic spelling enhancements can dissolve resistance and invite momentum into your endeavors.
      </p>
    </>
  );

  return (
    <ServiceDetailLayout
      title="Numerology Consultation"
      slug="numerology"
      tagline="Harmonize your name, mobile, and business brand with powerful numerological frequencies."
      icon={Binary}
      image="https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=1200&q=80"
      description="Unlock the cosmic code of numbers. Nitika Mehra helps you analyze and calibrate names, phone numbers, and brand identities with your birth vibrations for maximum growth."
      detailedContent={detailedContent}
      offerings={offerings}
      benefits={benefits}
      consultationMode="Online Detailed Numerology Reports & One-on-One Consultations"
    />
  );
};

export default NumerologyPage;
