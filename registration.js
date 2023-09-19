// registration.js

const express = require('express');
const router = express.Router();
const User = require('./models/user');
const cors = require('cors');  // Import the cors package
const app = express();


app.use(cors()); // Enable CORS for all routes

router.post('/', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = new User({ email, password });
    await user.save();
    res.status(201).send('User registered successfully.');
  } catch (error) {
    console.error('Error registering user:', error);
    res.status(500).send('Error registering user.');
  }
});

router.post('/', async (req, res) => {
    const { email, password, firstName, lastName } = req.body;
  
    try {
      const user = new User({ email, password, firstName, lastName });
      await user.save();
      res.status(201).send('User registered successfully.');
    } catch (error) {
      console.error('Error registering user:', error);
      res.status(500).send('Error registering user.');
    }
  });

module.exports = router;
