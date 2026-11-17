export const BRAND_INFO = {
  name: 'ASTRONIT',
  tagline: 'Astrology & Spiritual Guidance',
  consultant: 'Nitika Mehara',
  profession: 'Astrologer and Vastu Expert',
  address: '32, New Abhishek Nagar, Musakhedi, Indore, Madhya Pradesh – 452001, India',
  city: 'Indore',
  state: 'Madhya Pradesh',
  pincode: '452001',
  phone1: '8959235176',
  phone2: '7869608159',
  whatsappNumber: '918959235176',
  timings: 'Monday to Saturday: 3:00 PM – 8:00 PM (Sunday Closed)',
  whatsappMessage: 'Hello Astronit, I would like to enquire about your astrology and Vastu consultation services. Please share the details.',
  googleMapsUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14722.569305141208!2d75.8953158!3d22.7043834!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962e2e92c2df9df%3A0xe54d3e8e19c3fb46!2sMusakhedi%2C%20Indore%2C%20Madhya%20Pradesh%20452001!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin',
};

export const getWhatsAppLink = (customText) => {
  const text = encodeURIComponent(customText || BRAND_INFO.whatsappMessage);
  return `https://wa.me/${BRAND_INFO.whatsappNumber}?text=${text}`;
};

export const SERVICES_LIST = [
  {
    id: 'astrology-consultation',
    title: 'Astrology Consultation',
    path: '/services/astrology-consultation',
    shortDescription: 'Birth Chart (Kundali) Analysis, Mahadasha, Career, Marriage & Personalised Astrological Remedies.',
    iconName: 'Sun',
    tag: 'Popular',
  },
  {
    id: 'vastu-consultation',
    title: 'Vastu Consultation',
    path: '/services/vastu-consultation',
    shortDescription: 'Residential, Commercial, Office, Kitchen & Direction Analysis with Non-Demolition Remedies.',
    iconName: 'Compass',
    tag: 'Holistic',
  },
  {
    id: 'numerology',
    title: 'Numerology Consultation',
    path: '/services/numerology',
    shortDescription: 'Name Numerology, Mobile & Business Brand Numerology, Lucky Numbers & Name Correction Guidance.',
    iconName: 'Binary',
    tag: 'Precision',
  },
  {
    id: 'navratna-gemstones',
    title: 'Nine Gemstones (Navratna)',
    path: '/services/navratna-gemstones',
    shortDescription: 'Personalised planetary gemstone recommendations based strictly on Kundali ascendant and planetary strength.',
    iconName: 'Gem',
    tag: 'Traditional',
  },
  {
    id: 'crystal-healing',
    title: 'Crystal Healing & Guidance',
    path: '/services/crystal-healing',
    shortDescription: 'Natural authentic crystals for career prosperity, protection, meditation, chakra balance and positive energy.',
    iconName: 'Sparkles',
    tag: 'Energy',
  },
  {
    id: 'spiritual-remedies',
    title: 'Spiritual Remedies & Guidance',
    path: '/services/spiritual-remedies',
    shortDescription: 'Traditional planetary remedies, Rahu-Ketu relief, sacred Rudraksha, pure camphor & Dhan Lakshmi potlis.',
    iconName: 'Flame',
    tag: 'Sacred',
  },
];
