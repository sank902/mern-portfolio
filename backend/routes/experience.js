const express = require('express');
const router = express.Router();
const {
  getExperiences,
  createExperience,
  updateExperience,
  deleteExperience
} = require('../controllers/experienceController');

// Temporary bypass for development (remove protect/admin in production)
router.route('/')
  .get(getExperiences)
  .post(createExperience); // Remove for production: .post(protect, admin, createExperience)

router.route('/:id')
  .put(updateExperience) // Remove for production: .put(protect, admin, updateExperience)
  .delete(deleteExperience); // Remove for production: .delete(protect, admin, deleteExperience)

module.exports = router;