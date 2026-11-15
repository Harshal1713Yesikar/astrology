const Contact = require('../models/Contact');

// @desc    Submit contact enquiry
// @route   POST /api/contact
// @access  Public
exports.submitContact = async (req, res, next) => {
  try {
    const { name, email, mobileNumber, subject, message } = req.body;

    if (!name || !email || !mobileNumber || !subject || !message) {
      return res.status(400).json({
        success: false,
        message: 'Please fill in all required contact form fields',
      });
    }

    const contact = await Contact.create({
      name: name.trim(),
      email: email.trim().toLowerCase(),
      mobileNumber: mobileNumber.trim(),
      subject: subject.trim(),
      message: message.trim(),
    });

    res.status(201).json({
      success: true,
      message:
        'Thank you for reaching out to Astronit. Nitika Mehra will review your enquiry and get back to you shortly.',
      contact,
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Get all contact messages/enquiries
// @route   GET /api/contact
// @access  Private (Admin)
exports.getContacts = async (req, res, next) => {
  try {
    const { status, search, limit = 50, page = 1 } = req.query;
    const query = {};

    if (status && status !== 'all') {
      query.status = status;
    }

    if (search) {
      query.$or = [
        { name: { $regex: search, $options: 'i' } },
        { email: { $regex: search, $options: 'i' } },
        { mobileNumber: { $regex: search, $options: 'i' } },
        { subject: { $regex: search, $options: 'i' } },
      ];
    }

    const skip = (Number(page) - 1) * Number(limit);

    const contacts = await Contact.find(query)
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(Number(limit));

    const total = await Contact.countDocuments(query);

    res.status(200).json({
      success: true,
      count: contacts.length,
      total,
      contacts,
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Update contact status
// @route   PUT /api/contact/:id
// @access  Private (Admin)
exports.updateContactStatus = async (req, res, next) => {
  try {
    const { status } = req.body;
    const contact = await Contact.findById(req.params.id);

    if (!contact) {
      return res.status(404).json({
        success: false,
        message: 'Contact enquiry not found',
      });
    }

    contact.status = status || contact.status;
    await contact.save();

    res.status(200).json({
      success: true,
      message: 'Status updated successfully',
      contact,
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Delete contact enquiry
// @route   DELETE /api/contact/:id
// @access  Private (Admin)
exports.deleteContact = async (req, res, next) => {
  try {
    const contact = await Contact.findById(req.params.id);

    if (!contact) {
      return res.status(404).json({
        success: false,
        message: 'Contact enquiry not found',
      });
    }

    await contact.deleteOne();

    res.status(200).json({
      success: true,
      message: 'Enquiry deleted successfully',
    });
  } catch (error) {
    next(error);
  }
};
