const Appointment = require('../models/Appointment');
const { generateAppointmentId } = require('../utils/generateId');

// @desc    Create new appointment booking
// @route   POST /api/appointments
// @access  Public
exports.createAppointment = async (req, res, next) => {
  try {
    const {
      fullName,
      mobileNumber,
      email,
      service,
      preferredDate,
      preferredTime,
      consultationType,
      message,
      birthDetails,
    } = req.body;

    // Validate phone number format (at least 10 digits)
    const cleanPhone = (mobileNumber || '').replace(/[^0-9]/g, '');
    if (cleanPhone.length < 10) {
      return res.status(400).json({
        success: false,
        message: 'Please provide a valid 10-digit mobile number',
      });
    }

    // Generate unique appointment ID
    let appointmentId = generateAppointmentId();
    let exists = await Appointment.findOne({ appointmentId });
    while (exists) {
      appointmentId = generateAppointmentId();
      exists = await Appointment.findOne({ appointmentId });
    }

    const appointment = await Appointment.create({
      appointmentId,
      fullName,
      mobileNumber: mobileNumber.trim(),
      email: email ? email.trim().toLowerCase() : '',
      service,
      preferredDate,
      preferredTime,
      consultationType: consultationType || 'Online',
      message: message ? message.trim() : '',
      birthDetails: birthDetails || {},
      status: 'Pending',
    });

    res.status(201).json({
      success: true,
      message:
        'Your appointment request has been submitted successfully! Status is Pending approval by Nitika Mehara.',
      appointment: {
        appointmentId: appointment.appointmentId,
        fullName: appointment.fullName,
        service: appointment.service,
        preferredDate: appointment.preferredDate,
        preferredTime: appointment.preferredTime,
        consultationType: appointment.consultationType,
        status: appointment.status,
      },
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Get all appointments (filter by status, search)
// @route   GET /api/appointments
// @access  Private (Admin)
exports.getAppointments = async (req, res, next) => {
  try {
    const { status, search, limit = 50, page = 1 } = req.query;

    const query = {};

    if (status && status !== 'all') {
      query.status = status;
    }

    if (search) {
      query.$or = [
        { appointmentId: { $regex: search, $options: 'i' } },
        { fullName: { $regex: search, $options: 'i' } },
        { mobileNumber: { $regex: search, $options: 'i' } },
        { email: { $regex: search, $options: 'i' } },
        { service: { $regex: search, $options: 'i' } },
      ];
    }

    const skip = (Number(page) - 1) * Number(limit);

    const appointments = await Appointment.find(query)
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(Number(limit));

    const total = await Appointment.countDocuments(query);

    res.status(200).json({
      success: true,
      count: appointments.length,
      total,
      page: Number(page),
      totalPages: Math.ceil(total / Number(limit)),
      appointments,
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Get single appointment
// @route   GET /api/appointments/:id
// @access  Private (Admin)
exports.getAppointmentById = async (req, res, next) => {
  try {
    const appointment = await Appointment.findById(req.params.id);

    if (!appointment) {
      return res.status(404).json({
        success: false,
        message: 'Appointment not found',
      });
    }

    res.status(200).json({
      success: true,
      appointment,
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Update appointment status or details
// @route   PUT /api/appointments/:id
// @access  Private (Admin)
exports.updateAppointment = async (req, res, next) => {
  try {
    const { status, adminNotes, preferredDate, preferredTime, consultationType } =
      req.body;

    let appointment = await Appointment.findById(req.params.id);

    if (!appointment) {
      return res.status(404).json({
        success: false,
        message: 'Appointment not found',
      });
    }

    if (status) appointment.status = status;
    if (adminNotes !== undefined) appointment.adminNotes = adminNotes;
    if (preferredDate) appointment.preferredDate = preferredDate;
    if (preferredTime) appointment.preferredTime = preferredTime;
    if (consultationType) appointment.consultationType = consultationType;

    await appointment.save();

    res.status(200).json({
      success: true,
      message: 'Appointment updated successfully',
      appointment,
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Delete appointment
// @route   DELETE /api/appointments/:id
// @access  Private (Admin)
exports.deleteAppointment = async (req, res, next) => {
  try {
    const appointment = await Appointment.findById(req.params.id);

    if (!appointment) {
      return res.status(404).json({
        success: false,
        message: 'Appointment not found',
      });
    }

    await appointment.deleteOne();

    res.status(200).json({
      success: true,
      message: 'Appointment deleted successfully',
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Get appointment stats for Admin Dashboard
// @route   GET /api/appointments/stats
// @access  Private (Admin)
exports.getAppointmentStats = async (req, res, next) => {
  try {
    const totalAppointments = await Appointment.countDocuments();
    const pendingAppointments = await Appointment.countDocuments({ status: 'Pending' });
    const confirmedAppointments = await Appointment.countDocuments({ status: 'Approved' });
    const completedAppointments = await Appointment.countDocuments({ status: 'Completed' });
    const cancelledAppointments = await Appointment.countDocuments({ status: 'Cancelled' });

    res.status(200).json({
      success: true,
      stats: {
        totalAppointments,
        pendingAppointments,
        confirmedAppointments,
        completedAppointments,
        cancelledAppointments,
      },
    });
  } catch (error) {
    next(error);
  }
};
