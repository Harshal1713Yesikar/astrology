import React from 'react';
import { Gem } from 'lucide-react';
import ServiceDetailLayout from '../components/services/ServiceDetailLayout';

const GemstonesPage = () => {
  const offerings = [
    'Personalised Gemstone Recommendations',
    'Planetary Gemstone Guidance',
    'Gemstone Selection According to Kundali',
    'Traditional Guidance on Gemstone Wearing',
  ];

  const benefits = [
    'Protect yourself from wearing conflicting or harmful gemstones that aggravate malefic houses.',
    'Strengthen Yogakaraka and functional benefic planets to elevate intellect, vitality, and wealth.',
    'Clear guidelines on appropriate metal (Gold, Silver, Panchdhatu), wearing finger, and auspicious day/muhurat.',
    'Authentic Vedic consecration (Pran Pratishtha mantra rituals) instructions.',
  ];

  const detailedContent = (
    <>
      <p>
        The Navratnas—Ruby (Sun), Natural Pearl (Moon), Red Coral (Mars), Emerald (Mercury),
        Yellow Sapphire (Jupiter), Diamond/White Sapphire (Venus), Blue Sapphire (Saturn),
        Hessonite Garnet (Rahu), and Cat’s Eye (Ketu)—possess unique atomic crystal structures
        that resonate with planetary electro-magnetic waves.
      </p>
      <p>
        Wearing the wrong stone can cause energetic friction. Nitika Mehra strictly analyzes the
        ascendant lord, 5th lord, 9th lord, and current Dasha before recommending authentic, natural,
        and unheated gemstones without commercial bias.
      </p>
    </>
  );

  return (
    <ServiceDetailLayout
      title="Nine Gemstones (Navratna) Guidance"
      slug="navratna-gemstones"
      tagline="Strict Kundali-based astrological gemstone recommendations and traditional wearing rituals."
      icon={Gem}
      image="https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=1200&q=80"
      description="Harness planetary rays safely. Nitika Mehra evaluates your horoscope to prescribe authentic gemstones, auspicious metals, wearing fingers, and Vedic consecration practices."
      detailedContent={detailedContent}
      offerings={offerings}
      benefits={benefits}
      consultationMode="Astrological Gemstone Analysis & Personalized Report"
    />
  );
};

export default GemstonesPage;
