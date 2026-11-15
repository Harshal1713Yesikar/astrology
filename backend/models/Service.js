const mongoose = require('mongoose');

const ServiceSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'Please provide service title'],
      trim: true,
      unique: true,
    },
    slug: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    shortDescription: {
      type: String,
      required: [true, 'Please provide short description'],
      trim: true,
    },
    fullDescription: {
      type: String,
      required: [true, 'Please provide full description'],
    },
    iconName: {
      type: String,
      default: 'Sparkles',
    },
    imageUrl: {
      type: String,
      default: '',
    },
    keyOfferings: [
      {
        type: String,
        trim: true,
      },
    ],
    benefits: [
      {
        type: String,
        trim: true,
      },
    ],
    consultationMode: {
      type: String,
      default: 'Online & In-person Consultation Available',
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

module.exports = mongoose.model('Service', ServiceSchema);
