const Experience = require('../models/Experience');
const asyncHandler = require('express-async-handler');
const { formatDate } = require('../utils/dateUtils');

// @desc    Get all experiences
// @route   GET /api/experience
// @access  Public
exports.getExperiences = asyncHandler(async (req, res) => {
  const experiences = await Experience.find().sort('-startDate');
  
  // Format dates for display
  const formattedExperiences = experiences.map(exp => ({
    ...exp._doc,
    startDate: formatDate(exp.startDate),
    endDate: exp.endDate ? formatDate(exp.endDate) : 'Present'
  }));

  res.status(200).json({
    success: true,
    count: experiences.length,
    data: formattedExperiences
  });
});

// @desc    Create experience
// @route   POST /api/experience
// @access  Private/Admin
exports.createExperience = asyncHandler(async (req, res) => {
  const experience = await Experience.create(req.body);
  
  res.status(201).json({
    success: true,
    data: experience
  });
});

// @desc    Update experience
// @route   PUT /api/experience/:id
// @access  Private/Admin
exports.updateExperience = asyncHandler(async (req, res) => {
  const experience = await Experience.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true
  });

  if (!experience) {
    res.status(404);
    throw new Error('Experience not found');
  }

  res.status(200).json({
    success: true,
    data: experience
  });
});

// @desc    Delete experience
// @route   DELETE /api/experience/:id
// @access  Private/Admin
exports.deleteExperience = asyncHandler(async (req, res) => {
  const experience = await Experience.findByIdAndDelete(req.params.id);

  if (!experience) {
    res.status(404);
    throw new Error('Experience not found');
  }

  res.status(200).json({
    success: true,
    data: {}
  });
});