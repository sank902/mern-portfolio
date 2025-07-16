const Education = require('../models/Education');

// Get all education entries
exports.getEducations = async (req, res) => {
  try {
    const educations = await Education.find().sort({ startDate: -1 });
    res.status(200).json(educations);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Create new education entry
exports.createEducation = async (req, res) => {
  const education = new Education({
    institution: req.body.institution,
    degree: req.body.degree,
    fieldOfStudy: req.body.fieldOfStudy,
    startDate: req.body.startDate,
    endDate: req.body.endDate,
    current: req.body.current,
    description: req.body.description
  });

  try {
    const newEducation = await education.save();
    res.status(201).json(newEducation);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};