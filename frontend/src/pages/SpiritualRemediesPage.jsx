import React from 'react';
import { Flame } from 'lucide-react';
import ServiceDetailLayout from '../components/services/ServiceDetailLayout';

const SpiritualRemediesPage = () => {
  const offerings = [
    'Traditional Planetary Remedies',
    'Rahu and Ketu Remedies',
    'Rudraksha Guidance',
    'Camphor and Spiritual Products',
    'Dhan Lakshmi and Business Growth Potlis',
    'Personalised Spiritual Guidance',
  ];

  const benefits = [
    'Pacifies intense Rahu and Ketu karmic transitions with compassionate traditional practices.',
    'Provides authentic Rudraksha recommendations matched to your astrological ascendant and health needs.',
    'Customized Dhan Lakshmi Potlis infused with sacred herbs, gomti chakras, and cowries for financial growth.',
    'Space purification using pure Bhimseni camphor and sacred dhoop rituals to dispel negative vibrations.',
  ];

  const detailedContent = (
    <>
      <p>
        Vedic spiritual remedies are designed not to alter destiny arbitrarily, but to elevate your
        spiritual resilience and neutralize karmic friction through conscious devotional action.
      </p>
      <p>
        Nitika Mehra prescribes time-tested traditional practices: planetary mantra japa, grain donations,
        sacred Rudraksha combinations, pure camphor space purifications, and the energization of Dhan Lakshmi
        prosperity potlis for shops, factories, and homes.
      </p>
    </>
  );

  return (
    <ServiceDetailLayout
      title="Spiritual Remedies and Guidance"
      slug="spiritual-remedies"
      tagline="Traditional Vedic remedies, sacred Rudraksha, pure camphor, and prosperity potlis."
      icon={Flame}
      image="https://images.unsplash.com/photo-1606293926075-69a00dbfde81?auto=format&fit=crop&w=1200&q=80"
      description="Cleanse obstacles and welcome abundance. Nitika Mehra provides authentic Vedic planetary remedies, energized Rudraksha guidance, and Dhan Lakshmi business growth potlis."
      detailedContent={detailedContent}
      offerings={offerings}
      benefits={benefits}
      consultationMode="Consultation & Curated Remedial Product Guidance"
    />
  );
};

export default SpiritualRemediesPage;
