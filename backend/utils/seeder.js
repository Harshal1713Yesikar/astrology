const mongoose = require('mongoose');
const dotenv = require('dotenv');
const path = require('path');

dotenv.config({ path: path.join(__dirname, '..', '.env') });

const Admin = require('../models/Admin');
const Service = require('../models/Service');
const Testimonial = require('../models/Testimonial');
const FAQ = require('../models/FAQ');
const Setting = require('../models/Setting');
const Appointment = require('../models/Appointment');
const Contact = require('../models/Contact');
const connectDB = require('../config/db');

const initialAdmin = {
  name: 'Nitika Mehra',
  email: process.env.ADMIN_EMAIL || 'admin@astronit.com',
  password: process.env.ADMIN_PASSWORD || 'Astronit@2026',
  role: 'superadmin',
};

const initialSettings = {
  brandName: 'ASTRONIT',
  tagline: 'Astrology & Spiritual Guidance',
  consultantName: 'Nitika Mehra',
  profession: 'Astrologer and Vastu Expert',
  address: '32, New Abhishek Nagar, Musakhedi, Indore, Madhya Pradesh – 452001, India',
  city: 'Indore',
  primaryPhone: '8959235176',
  secondaryPhone: '7869608159',
  whatsappNumber: '918959235176',
  email: 'contact@astronit.com',
  consultationTimings: 'Monday to Saturday: 3:00 PM – 8:00 PM (Sunday Closed)',
  whatsappDefaultMessage:
    'Hello Astronit, I would like to enquire about your astrology and Vastu consultation services. Please share the details.',
  googleMapsEmbedUrl:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14722.569305141208!2d75.8953158!3d22.7043834!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962e2e92c2df9df%3A0xe54d3e8e19c3fb46!2sMusakhedi%2C%20Indore%2C%20Madhya%20Pradesh%20452001!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin',
};

const initialServices = [
  {
    title: 'Astrology Consultation',
    slug: 'astrology-consultation',
    shortDescription:
      'Detailed birth chart analysis, planetary transit influences, and personalized astrological guidance for life decisions.',
    fullDescription:
      'Understand how planetary influences shape your life journey. Nitika Mehara performs deep Vedic Kundali analysis to evaluate planetary positions, Mahadasha, Antardasha, and divisional charts. Receive tailored, practical remedies for career progression, business ventures, marriage compatibility, and personal peace.',
    iconName: 'Sun',
    imageUrl: 'https://images.unsplash.com/photo-1532968961962-8a0cb3a2d4f5?auto=format&fit=crop&w=800&q=80',
    keyOfferings: [
      'Birth Chart (Kundali) Analysis',
      'Planetary Positions and Their Effects',
      'Career and Professional Guidance',
      'Marriage and Relationship Guidance',
      'Financial and Business Guidance',
      'Mahadasha and Antardasha Analysis',
      'Yogas and Dosha Analysis (Mangal, Kaal Sarp, Pitra)',
      'Personalised Astrological Remedies',
    ],
    benefits: [
      'Gain clarity during major life transitions and decision points',
      'Discover peak favorable timeframes for investments and career moves',
      'Strengthen relationships through astrological compatibility understanding',
      'Practical traditional remedies without fear or superstition',
    ],
    consultationMode: 'In-Person at Indore Office & Online Video / Audio Call',
    order: 1,
  },
  {
    title: 'Vastu Consultation',
    slug: 'vastu-consultation',
    shortDescription:
      'Harmonize your living and workspaces with authentic Vastu Shastra principles for prosperity, peace, and positive energy.',
    fullDescription:
      'Your physical environment directly impacts your mental clarity, financial stability, and family well-being. Nitika Mehara provides holistic residential and commercial Vastu evaluations, identifying energy blockages and offering practical non-demolition remedies.',
    iconName: 'Compass',
    imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
    keyOfferings: [
      'Residential Vastu Consultation',
      'Commercial and Office Vastu',
      'Home and Plot Vastu Analysis',
      'Kitchen and Bedroom Vastu',
      'Direction and Element Analysis (Pancha Mahabhuta)',
      'Vastu Corrections and Non-Demolition Remedies',
      'Vastu Guidance for New Construction and Renovations',
    ],
    benefits: [
      'Optimizes spatial energy flow for health and mental tranquility',
      'Removes stagnant energetic blocks affecting cash flow and business',
      'Tailored solutions prioritizing non-destructive corrections',
      'Expert review of floor plans prior to purchase or architectural design',
    ],
    consultationMode: 'Site Visits (Indore & surrounding regions) & Blueprint / Map Online Analysis',
    order: 2,
  },
  {
    title: 'Numerology Consultation',
    slug: 'numerology',
    shortDescription:
      'Unlock the mystical vibrations of numbers to align your name, business brand, and lucky frequencies for maximum success.',
    fullDescription:
      'Numbers carry vibrational frequencies that interact continuously with your destiny. Through Pythagorean and Chaldean numerology, discover your life path number, destiny number, and name compatibility to unlock your natural potential.',
    iconName: 'Binary',
    imageUrl: 'https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=800&q=80',
    keyOfferings: [
      'Name Numerology Analysis',
      'Mobile Number Numerology',
      'Business Name and Brand Numerology',
      'Lucky Number and Auspicious Color Analysis',
      'Career and Personal Numerology Matrix',
      'Name Correction and Spelling Optimization Guidance',
    ],
    benefits: [
      'Align business and brand names with high-frequency success numbers',
      'Choose phone numbers and vehicle plates that harmonize with your birth date',
      'Understand personality strengths and hidden opportunities',
      'Simple name spelling modifications to reduce friction and obstacles',
    ],
    consultationMode: 'Online Reports & Personalized Consultation',
    order: 3,
  },
  {
    title: 'Nine Gemstones (Navratna) Guidance',
    slug: 'navratna-gemstones',
    shortDescription:
      'Prescriptive gemstone recommendations based on rigorous Kundali planetary strength analysis and traditional Vedic shastras.',
    fullDescription:
      'Gemstones act as cosmic filters, capturing and amplifying specific planetary radiations to enhance your vitality, intellect, and fortune. Nitika Mehara assesses which planets in your horoscope need strengthening and recommends authentic natural gems.',
    iconName: 'Gem',
    imageUrl: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=800&q=80',
    keyOfferings: [
      'Personalised Gemstone Recommendations',
      'Planetary Gemstone Guidance (Ruby, Pearl, Emerald, Yellow Sapphire, etc.)',
      'Gemstone Selection According to Kundali Ascendant and Dasha',
      'Traditional Guidance on Gemstone Wearing (Metals, Fingers, Auspicious Muhurats)',
      'Gemstone Purity, Origin, and Untreated Certification Advice',
    ],
    benefits: [
      'Avoid harmful gemstones that trigger malefic houses',
      'Empower weak or benefic planets safely',
      'Receive precise consecration and energization rituals (Pran Pratishtha)',
      'Unbiased recommendation without commercial push',
    ],
    consultationMode: 'Personalized Astrological Gem Report & One-on-One Session',
    order: 4,
  },
  {
    title: 'Crystal Healing and Guidance',
    slug: 'crystal-healing',
    shortDescription:
      'Harness natural Earth crystals to cleanse chakras, dissolve negative auras, and cultivate positive vibrational sanctuary.',
    fullDescription:
      'Crystals are crystalline wonders forged by Mother Earth over millennia. Learn how specific varieties—such as Amethyst, Pyrite, Black Tourmaline, Rose Quartz, and Citrine—can harmonize your emotional landscape and shield your aura.',
    iconName: 'ShieldAlert',
    imageUrl: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=800&q=80',
    keyOfferings: [
      'Crystal Selection According to Individual Needs and Intentions',
      'Positive Energy and Spiritual Wellness Alignment',
      'Career and Business Prosperity Crystals (Pyrite, Citrine)',
      'Protection, Evil Eye, and Grounding Crystals (Black Tourmaline)',
      'Meditation, Calmness, and Focus Crystals (Amethyst, Selenite)',
      'Crystal Cleansing, Charging, and Placement Guidance',
    ],
    benefits: [
      'Dissolve mental fog, anxiety, and environmental stress',
      'Anchor positive wealth and abundance frequencies at home or workplace',
      'Personalized crystal grids for protection and emotional equilibrium',
      'Clear instructions on moonlight charging and sage cleansing',
    ],
    consultationMode: 'In-Person & Online Consultation with Curated Crystal Selection',
    order: 5,
  },
  {
    title: 'Spiritual Remedies and Guidance',
    slug: 'spiritual-remedies',
    shortDescription:
      'Time-tested traditional rituals, sacred Rudraksha selection, camphor purifications, and customized prosperity potlis.',
    fullDescription:
      'Ancient Vedic traditions provide compassionate, natural spiritual remedies to alleviate planetary distress, overcome recurring obstacles, and welcome divine grace. Experience personalized spiritual solutions tailored to your unique birth chart.',
    iconName: 'Flame',
    imageUrl: 'https://images.unsplash.com/photo-1606293926075-69a00dbfde81?auto=format&fit=crop&w=800&q=80',
    keyOfferings: [
      'Traditional Planetary Remedies (Graha Shanti)',
      'Rahu and Ketu Remedies for Karmic Relief',
      'Authentic Rudraksha Guidance according to Vedic Charts',
      'Bhimseni Camphor and Spiritual Space Cleansing Products',
      'Dhan Lakshmi and Business Growth Prosperity Potlis',
      'Personalised Spiritual Guidance, Mantras, and Daily Sadhana',
    ],
    benefits: [
      'Direct, ethical guidance rooted in authentic Vedic literature',
      'Protection against negative vibrations and Nazar (Evil Eye)',
      'Prosperity enhancement for shops, factories, and residences',
      'Simple everyday spiritual habits that restore mental peace',
    ],
    consultationMode: 'In-person / Online Consultation & Remedial Kits Guidance',
    order: 6,
  },
];

const initialTestimonials = [
  {
    clientName: 'Rajesh Sharma',
    location: 'Indore, MP',
    serviceTaken: 'Kundali & Business Guidance',
    review:
      'Nitika Mehara ji gave me tremendous clarity when my manufacturing business was facing severe payment delays. Her Mahadasha insights and simple non-expensive remedies created positive shifts within 3 months. Highly recommended in Indore!',
    rating: 5,
    isFeatured: true,
    order: 1,
  },
  {
    clientName: 'Priya Agarwal',
    location: 'Bhopal, MP',
    serviceTaken: 'Residential Vastu Consultation',
    review:
      'We consulted Nitika ji before moving into our new flat. She gave brilliant practical suggestions without asking for any structural demolition. The positive vibe and harmony in our family since implementing her guidance has been remarkable.',
    rating: 5,
    isFeatured: true,
    order: 2,
  },
  {
    clientName: 'Vikram Joshi',
    location: 'Indore, MP',
    serviceTaken: 'Name Numerology & Gemstones',
    review:
      'Very calm, professional, and authentic astrologer. Nitika ji explained everything scientifically and logically. Her recommendation of Yellow Sapphire and name alignment boosted my career confidence significantly.',
    rating: 5,
    isFeatured: true,
    order: 3,
  },
  {
    clientName: 'Sneha Patel',
    location: 'Ujjain, MP',
    serviceTaken: 'Spiritual Remedies & Rahu-Ketu Shanti',
    review:
      'Astronit is a blessing for anyone seeking genuine spiritual direction without fear-mongering. The Dhan Lakshmi Potli and personalized mantras helped restore peaceful energy in our home.',
    rating: 5,
    isFeatured: true,
    order: 4,
  },
];

const initialFaqs = [
  {
    question: 'Do I need my birth details for an astrology consultation?',
    answer:
      'Yes, your date of birth, exact birth time, and place of birth are generally required for detailed and accurate Kundali (birth chart) analysis.',
    category: 'Astrology',
    order: 1,
  },
  {
    question: 'Do you provide online consultations?',
    answer:
      'Yes, Astronit provides comprehensive online consultations via WhatsApp video/audio call and Zoom for clients across India and internationally. Contact us to enquire about online consultation availability and booking.',
    category: 'Booking',
    order: 2,
  },
  {
    question: 'Can I get Vastu guidance for my existing home without demolition?',
    answer:
      'Yes, you can enquire about residential and commercial Vastu consultation. Nitika Mehara specializes in non-demolition Vastu remedies, element balancing (Pancha Mahabhuta), color therapies, and energy harmonizing crystals.',
    category: 'Vastu',
    order: 3,
  },
  {
    question: 'How can I book an appointment?',
    answer:
      'You can call us directly on 8959235176 or 7869608159, reach out via our floating WhatsApp button, or fill out the Book Consultation form right here on our website.',
    category: 'Booking',
    order: 4,
  },
  {
    question: 'What are the consultation hours at Astronit?',
    answer:
      'Consultations are held Monday to Saturday from 3:00 PM to 8:00 PM. Prior booking is mandatory to ensure undivided attention for each client.',
    category: 'General',
    order: 5,
  },
  {
    question: 'Are remedies compulsory or expensive?',
    answer:
      'Not at all. Nitika Mehara emphasizes simple, traditional, and practical lifestyle adjustments, meditation, mantras, and natural spiritual practices. Remedies are suggested only as per individual requirement and comfort.',
    category: 'Remedies',
    order: 6,
  },
];

const initialAppointments = [
  {
    appointmentId: 'AST-202611-1001',
    fullName: 'Amit Saxena',
    mobileNumber: '9826012345',
    email: 'amit.saxena@example.com',
    service: 'Astrology Consultation',
    preferredDate: new Date(Date.now() + 86400000 * 2),
    preferredTime: '04:30 PM',
    consultationType: 'Online',
    message: 'Looking for guidance regarding career transition and business prospects in 2027.',
    status: 'Pending',
    adminNotes: 'Requested birth chart preparation before the call.',
  },
  {
    appointmentId: 'AST-202611-1002',
    fullName: 'Sunita Verma',
    mobileNumber: '9425098765',
    email: 'sunita.v@example.com',
    service: 'Vastu Consultation',
    preferredDate: new Date(Date.now() + 86400000 * 3),
    preferredTime: '06:00 PM',
    consultationType: 'Offline',
    message: 'Residential Vastu review for our newly purchased 3BHK flat in Vijay Nagar Indore.',
    status: 'Approved',
    adminNotes: 'Appointment confirmed for in-person review at Astronit Musakhedi office.',
  },
];

const initialContacts = [
  {
    name: 'Kavita Chawla',
    email: 'kavita.chawla@example.com',
    mobileNumber: '9893011223',
    subject: 'Enquiry for Gemstone Recommendation',
    message: 'Hello Nitika ji, I want to know which gemstone is suitable for mental calmness and focus during competitive exam preparations.',
    status: 'New',
  },
  {
    name: 'Deepak Malviya',
    email: 'deepak.m@example.com',
    mobileNumber: '7879044556',
    subject: 'Commercial Office Vastu Query',
    message: 'We are planning to open an IT consultancy in Indore and want to review our seating arrangement according to Vastu directions.',
    status: 'In Progress',
  },
];

const seedDatabase = async () => {
  try {
    await connectDB();

    console.log('[Seeder] Checking and initializing database collections...');

    // Seed Admin
    const adminExists = await Admin.findOne({ email: initialAdmin.email });
    if (!adminExists) {
      await Admin.create(initialAdmin);
      console.log(`[Seeder] Created default admin: ${initialAdmin.email} (Password: ${initialAdmin.password})`);
    } else {
      console.log(`[Seeder] Admin ${initialAdmin.email} already exists.`);
    }

    // Seed Settings
    const settingsCount = await Setting.countDocuments();
    if (settingsCount === 0) {
      await Setting.create(initialSettings);
      console.log('[Seeder] Created default website settings.');
    }

    // Seed Services
    const serviceCount = await Service.countDocuments();
    if (serviceCount === 0) {
      await Service.insertMany(initialServices);
      console.log(`[Seeder] Inserted ${initialServices.length} default services.`);
    }

    // Seed Testimonials
    const testimonialCount = await Testimonial.countDocuments();
    if (testimonialCount === 0) {
      await Testimonial.insertMany(initialTestimonials);
      console.log(`[Seeder] Inserted ${initialTestimonials.length} default genuine testimonials.`);
    }

    // Seed FAQs
    const faqCount = await FAQ.countDocuments();
    if (faqCount === 0) {
      await FAQ.insertMany(initialFaqs);
      console.log(`[Seeder] Inserted ${initialFaqs.length} default FAQs.`);
    }

    // Seed sample appointments if none
    const appointmentCount = await Appointment.countDocuments();
    if (appointmentCount === 0) {
      await Appointment.insertMany(initialAppointments);
      console.log(`[Seeder] Inserted sample appointments for dashboard.`);
    }

    // Seed sample contacts if none
    const contactCount = await Contact.countDocuments();
    if (contactCount === 0) {
      await Contact.insertMany(initialContacts);
      console.log(`[Seeder] Inserted sample contact enquiries.`);
    }

    console.log('[Seeder] Database seeding completed successfully!');
  } catch (err) {
    console.error('[Seeder] Seeding error:', err.message);
  }
};

// If run directly via node utils/seeder.js
if (require.main === module) {
  seedDatabase().then(() => {
    process.exit(0);
  });
}

module.exports = seedDatabase;
