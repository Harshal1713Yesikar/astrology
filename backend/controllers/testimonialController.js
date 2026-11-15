const Testimonial = require('../models/Testimonial');

// @desc    Get all testimonials
// @route   GET /api/testimonials
// @access  Public
exports.getTestimonials = async (req, res, next) => {
  try {
    const testimonials = await Testimonial.find({ isFeatured: true }).sort({
      order: 1,
      createdAt: -1,
    });
    res.status(200).json({
      success: true,
      count: testimonials.length,
      testimonials,
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Get all testimonials for Admin
// @route   GET /api/testimonials/admin
// @access  Private (Admin)
exports.getAdminTestimonials = async (req, res, next) => {
  try {
    const testimonials = await Testimonial.find().sort({ order: 1, createdAt: -1 });
    res.status(200).json({
      success: true,
      count: testimonials.length,
      testimonials,
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Create testimonial (Only Admin can add genuine testimonials)
// @route   POST /api/testimonials
// @access  Private (Admin)
exports.createTestimonial = async (req, res, next) => {
  try {
    const { clientName, location, serviceTaken, review, rating, isFeatured, order } =
      req.body;

    if (!clientName || !review) {
      return res.status(400).json({
        success: false,
        message: 'Please provide client name and review content',
      });
    }

    const testimonial = await Testimonial.create({
      clientName: clientName.trim(),
      location: location ? location.trim() : 'Indore, MP',
      serviceTaken: serviceTaken || 'Astrology Consultation',
      review: review.trim(),
      rating: rating || 5,
      isFeatured: isFeatured !== undefined ? isFeatured : true,
      order: order || 0,
    });

    res.status(201).json({
      success: true,
      message: 'Genuine client testimonial added successfully',
      testimonial,
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Update testimonial
// @route   PUT /api/testimonials/:id
// @access  Private (Admin)
exports.updateTestimonial = async (req, res, next) => {
  try {
    let testimonial = await Testimonial.findById(req.params.id);

    if (!testimonial) {
      return res.status(404).json({
        success: false,
        message: 'Testimonial not found',
      });
    }

    testimonial = await Testimonial.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    res.status(200).json({
      success: true,
      message: 'Testimonial updated successfully',
      testimonial,
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Delete testimonial
// @route   DELETE /api/testimonials/:id
// @access  Private (Admin)
exports.deleteTestimonial = async (req, res, next) => {
  try {
    const testimonial = await Testimonial.findById(req.params.id);

    if (!testimonial) {
      return res.status(404).json({
        success: false,
        message: 'Testimonial not found',
      });
    }

    await testimonial.deleteOne();

    res.status(200).json({
      success: true,
      message: 'Testimonial deleted successfully',
    });
  } catch (error) {
    next(error);
  }
};
