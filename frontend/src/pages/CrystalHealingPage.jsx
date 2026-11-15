import React from 'react';
import { Sparkles } from 'lucide-react';
import ServiceDetailLayout from '../components/services/ServiceDetailLayout';

const CrystalHealingPage = () => {
  const offerings = [
    'Crystal Selection According to Individual Needs',
    'Positive Energy and Spiritual Wellness',
    'Career and Business Crystals',
    'Protection and Grounding Crystals',
    'Meditation and Focus Crystals',
  ];

  const benefits = [
    'Cleanses stagnant aura and revitalizes subtle energy centers (Chakras).',
    'Attracts commercial abundance with Pyrite, Citrine, and Green Aventurine arrangements.',
    'Provides psychic shielding against negative energy and evil eye using Black Tourmaline and Selenite.',
    'Enhances mental concentration, academic focus, and stress reduction through Amethyst and Clear Quartz.',
  ];

  const detailedContent = (
    <>
      <p>
        Natural crystals are sacred gifts of Mother Earth, formed over millions of years under intense
        subterranean pressure. They vibrate at remarkably stable energetic frequencies.
      </p>
      <p>
        Nitika Mehra helps you select, cleanse, charge, and position natural crystals in your home,
        office desk, cash locker, or personal aura. Whether you seek emotional healing, financial breakthrough,
        or grounded peacefulness, our customized crystal protocols support your daily wellness.
      </p>
    </>
  );

  return (
    <ServiceDetailLayout
      title="Crystal Healing and Guidance"
      slug="crystal-healing"
      tagline="Harness natural mineral vibrations for chakra alignment, protection, and prosperity."
      icon={Sparkles}
      image="https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=1200&q=80"
      description="Elevate your energetic space with sacred crystals. Nitika Mehra guides you in choosing, purifying, and positioning authentic crystals for wealth, mental peace, and protection."
      detailedContent={detailedContent}
      offerings={offerings}
      benefits={benefits}
      consultationMode="In-Person & Online Consultation with Curated Crystal Selection"
    />
  );
};

export default CrystalHealingPage;
