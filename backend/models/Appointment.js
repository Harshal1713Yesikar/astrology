const mongoose = require('mongoose');

const AppointmentSchema = new mongoose.Schema(
  {
    appointmentId: {
      type: String,
      unique: true,
      required: true,
      index: true,
    },
    fullName: {
      type: String,
      required: [true, 'Please provide your full name'],
      trim: true,
    },
    mobileNumber: {
      type: String,
      required: [true, 'Please provide your mobile number'],
      trim: true,
      match: [
        /^[0-9+ -]{10,15}$/,
        'Please provide a valid contact number (10-15 digits)',
      ],
    },
    email: {
      type: String,
      required: [true, 'Please provide your email address'],
      trim: true,
      lowercase: true,
      match: [
        /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
        'Please provide a valid email',
      ],
    },
    service: {
      type: String,
      required: [true, 'Please select a service'],
    },
    preferredDate: {
      type: Date,
      required: [true, 'Please select a preferred consultation date'],
    },
    preferredTime: {
      type: String,
      required: [true, 'Please select preferred consultation time'],
    },
    consultationType: {
      type: String,
      enum: ['Online', 'Offline'],
      default: 'Online',
      required: true,
    },
    message: {
      type: String,
      trim: true,
      maxlength: [1000, 'Message cannot exceed 1000 characters'],
    },
    birthDetails: {
      birthDate: { type: String, default: '' },
      birthTime: { type: String, default: '' },
      birthPlace: { type: String, default: '' },
    },
    status: {
      type: String,
      enum: ['Pending', 'Approved', 'Rescheduled', 'Completed', 'Cancelled'],
      default: 'Pending',
      index: true,
    },
    adminNotes: {
      type: String,
      default: '',
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Appointment', AppointmentSchema);
