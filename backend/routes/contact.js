const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');

// Submit contact form
router.post('/', async (req, res) => {
  const { name, email, message } = req.body;

  try {
    const newContact = new Contact({
      name,
      email,
      message
    });

    await newContact.save();
    
    // Send email notification
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: `New Contact Form Submission from ${name}`,
      text: `You have a new contact form submission:\n\nName: ${name}\nEmail: ${email}\nMessage: ${message}`
    };

    await transporter.sendMail(mailOptions);
    
    res.status(201).json({ message: 'Message sent successfully!' });
  } catch (err) {
    res.status(500).json({ message: 'Error sending message', error: err.message });
  }
});

module.exports = router;