const mongoose = require('mongoose');

const SettingSchema = new mongoose.Schema(
  {
    brandName: {
      type: String,
      default: 'ASTRONIT',
    },
    tagline: {
      type: String,
      default: 'Astrology & Spiritual Guidance',
    },
    consultantName: {
      type: String,
      default: 'Nitika Mehra',
    },
    profession: {
      type: String,
      default: 'Astrologer and Vastu Expert',
    },
    address: {
      type: String,
      default: '32, New Abhishek Nagar, Musakhedi, Indore, Madhya Pradesh – 452001, India',
    },
    city: {
      type: String,
      default: 'Indore',
    },
    primaryPhone: {
      type: String,
      default: '8959235176',
    },
    secondaryPhone: {
      type: String,
      default: '7869608159',
    },
    whatsappNumber: {
      type: String,
      default: '918959235176',
    },
    email: {
      type: String,
      default: 'contact@astronit.com',
    },
    consultationTimings: {
      type: String,
      default: 'Monday to Saturday: 3:00 PM – 8:00 PM (Sunday Closed)',
    },
    whatsappDefaultMessage: {
      type: String,
      default: 'Hello Astronit, I would like to enquire about your astrology and Vastu consultation services. Please share the details.',
    },
    googleMapsEmbedUrl: {
      type: String,
      default: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14722.569305141208!2d75.8953158!3d22.7043834!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962e2e92c2df9df%3A0xe54d3e8e19c3fb46!2sMusakhedi%2C%20Indore%2C%20Madhya%20Pradesh%20452001!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin',
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Setting', SettingSchema);
