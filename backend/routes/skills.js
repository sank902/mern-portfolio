const express = require('express');
const router = express.Router();
const skillController = require('../controllers/skillController');

// Get all skills
router.get('/', skillController.getSkills);

// Create new skill
router.post('/', skillController.createSkill);

module.exports = router;