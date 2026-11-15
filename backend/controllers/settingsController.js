const Setting = require('../models/Setting');

// @desc    Get website settings (Contact info, timings, address, WhatsApp)
// @route   GET /api/settings
// @access  Public
exports.getSettings = async (req, res, next) => {
  try {
    let settings = await Setting.findOne();

    if (!settings) {
      settings = await Setting.create({
        brandName: 'ASTRONIT',
        tagline: 'Astrology & Spiritual Guidance',
        consultantName: 'Nitika Mehra',
        profession: 'Astrologer and Vastu Expert',
        address: '32, New Abhishek Nagar, Musakhedi, Indore, Madhya Pradesh – 452001, India',
        city: 'Indore',
        primaryPhone: '8959235176',
        secondaryPhone: '7869608159',
        whatsappNumber: '918959231576',
        email: 'contact@astronit.com',
        consultationTimings: 'Monday to Saturday: 3:00 PM – 8:00 PM',
        whatsappDefaultMessage:
          'Hello Astronit, I would like to enquire about your astrology and Vastu consultation services. Please share the details.',
      });
    }

    res.status(200).json({
      success: true,
      settings,
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Update website settings
// @route   PUT /api/settings
// @access  Private (Admin)
exports.updateSettings = async (req, res, next) => {
  try {
    let settings = await Setting.findOne();

    if (!settings) {
      settings = await Setting.create(req.body);
    } else {
      settings = await Setting.findByIdAndUpdate(settings._id, req.body, {
        new: true,
        runValidators: true,
      });
    }

    res.status(200).json({
      success: true,
      message: 'Website settings updated successfully',
      settings,
    });
  } catch (error) {
    next(error);
  }
};
