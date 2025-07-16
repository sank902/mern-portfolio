const Skill = require('../models/Skill');

// Get all skills
exports.getSkills = async (req, res) => {
  try {
    const skills = await Skill.find().sort({ level: -1 });
    res.status(200).json(skills);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Create new skill
exports.createSkill = async (req, res) => {
  const skill = new Skill({
    name: req.body.name,
    level: req.body.level,
    iconUrl: req.body.iconUrl
  });

  try {
    const newSkill = await skill.save();
    res.status(201).json(newSkill);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};