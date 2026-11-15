const mongoose = require('mongoose');

const FAQSchema = new mongoose.Schema(
  {
    question: {
      type: String,
      required: [true, 'Please provide question'],
      trim: true,
    },
    answer: {
      type: String,
      required: [true, 'Please provide answer'],
      trim: true,
    },
    category: {
      type: String,
      default: 'General',
      enum: ['General', 'Astrology', 'Vastu', 'Booking', 'Remedies'],
    },
    order: {
      type: Number,
      default: 0,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('FAQ', FAQSchema);
