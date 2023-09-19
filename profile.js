// profile.js

const express = require('express');
const router = express.Router();
const User = require('./models/user');
const authMiddleware = require('./middleware/auth'); // Import the authentication middleware

router.put('/', authMiddleware, async (req, res) => {
  // Now you can access the user's email through req.user.email
  const { firstName, lastName, profilePicture } = req.body;

  try {
    // Update the user's profile in the database based on their email
    await User.findOneAndUpdate(
      { email: req.user.email },
      { firstName, lastName, profilePicture },
      { new: true }
    );

    res.status(200).send('Profile updated successfully.');
  } catch (error) {
    console.error('Error updating profile:', error);
    res.status(500).send('Error updating profile.');
  }
});

module.exports = router;
