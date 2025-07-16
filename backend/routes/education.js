const express = require('express');
const router = express.Router();
const educationController = require('../controllers/educationController');

// Get all education entries
router.get('/', educationController.getEducations);

// Create new education entry
router.post('/', educationController.createEducation);

module.exports = router;