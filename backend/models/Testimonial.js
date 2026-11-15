const mongoose = require('mongoose');

const TestimonialSchema = new mongoose.Schema(
  {
    clientName: {
      type: String,
      required: [true, 'Please provide client name'],
      trim: true,
    },
    location: {
      type: String,
      default: 'Indore, MP',
      trim: true,
    },
    serviceTaken: {
      type: String,
      default: 'Astrology Consultation',
      trim: true,
    },
    review: {
      type: String,
      required: [true, 'Please provide client feedback'],
      trim: true,
    },
    rating: {
      type: Number,
      min: 1,
      max: 5,
      default: 5,
    },
    isFeatured: {
      type: Boolean,
      default: true,
    },
    order: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Testimonial', TestimonialSchema);
