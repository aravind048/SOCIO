// login.js

const express = require('express');
const router = express.Router();
const User = require('./models/user');
const cors = require('cors');  // Import the cors package
const app = express();
const jwt = require('jsonwebtoken');


app.use(cors()); // Enable CORS for all routes

router.post('/', async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email, password });

        if (!user) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }

        // Generate a JWT token
        const token = jwt.sign({ email: user.email }, 'your_secret_key', { expiresIn: '1h' }); // Replace with your actual secret key

        res.status(200).json({ token });
    } catch (error) {
        console.error('Error logging in:', error);
        res.status(500).json({ message: 'Error logging in' });
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
