import React from 'react';
import { Compass } from 'lucide-react';
import ServiceDetailLayout from '../components/services/ServiceDetailLayout';

const VastuPage = () => {
  const offerings = [
    'Residential Vastu Consultation',
    'Commercial and Office Vastu',
    'Home and Plot Vastu Analysis',
    'Kitchen and Bedroom Vastu',
    'Direction and Element Analysis',
    'Vastu Corrections and Remedies',
    'Vastu Guidance for New Construction',
  ];

  const benefits = [
    'Restores positive pranic energy and harmony in residential dwellings.',
    'Enhances financial cash flow, customer footfall, and employee productivity in commercial hubs.',
    'Resolves directional element conflicts (Fire vs Water) without destructive structural changes.',
    'Pre-purchase plot and apartment architectural blueprint evaluation.',
  ];

  const detailedContent = (
    <>
      <p>
        Vastu Shastra is the timeless Vedic science of spatial energy and architecture, aligning human
        dwellings with the five universal elements (Pancha Mahabhuta: Earth, Water, Fire, Air, and Space).
      </p>
      <p>
        Nitika Mehara specializes in non-demolition Vastu remedies. Through elemental balancing,
        direction adjustments, brass energy strips, sacred geometric yantras, and color therapies,
        we transform stagnant spaces into vibrant sanctuaries of abundance, health, and peace.
      </p>
    </>
  );

  return (
    <ServiceDetailLayout
      title="Vastu Consultation"
      slug="vastu-consultation"
      tagline="Harmonize your living and workspaces for prosperity, health, and positive energetic flow."
      icon={Compass}
      image="/images/nitika-mehra-vastu-site.jpg"
      description="Create architectural and energetic harmony in your premises. Nitika Mehara offers comprehensive on-site and blueprint Vastu assessments with practical, non-demolition remedies."
      detailedContent={detailedContent}
      offerings={offerings}
      benefits={benefits}
      consultationMode="Site Visits in Indore & Online Blueprint / Floor Map Review"
    />
  );
};

export default VastuPage;
