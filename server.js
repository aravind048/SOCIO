// const express = require('express');
// const bodyParser = require('body-parser');
// const mongoose = require('mongoose');
// const bcrypt = require('bcrypt');
// const app = express();
// const cors = require('cors');  // Import the cors package


// const PORT = process.env.PORT || 5000;
// app.use(cors()); // Enable CORS for all routes


// app.use(bodyParser.json());

// // Connect to MongoDB (replace 'your_db_url' with your MongoDB connection URL)
// mongoose.connect('mongodb://127.0.0.1:27017/socio', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// const UserSchema = new mongoose.Schema({
//   email: String,
//   password: String,
// });

// const User = mongoose.model('User', UserSchema);

// app.post('/register', async (req, res) => {
//   const { email, password } = req.body;

//   try {
//     const hashedPassword = await bcrypt.hash(password, 10);
//     const user = new User({ email, password: hashedPassword });
//     await user.save();
//     res.status(201).send('User registered successfully');
//   } catch (error) {
//     res.status(500).send('Error registering user');
//   }
// });



// app.post('/login', async (req, res) => {
//   const { email, password } = req.body;

//   try {
//     const user = await User.findOne({ email });

//     if (!user) {
//       return res.status(400).json({ message: 'Invalid credentials' });
//     }

//     const isPasswordValid = bcrypt.compare(password, user.password);

//     if (!isPasswordValid) {
//       return res.status(400).json({ message: 'Invalid credentials' });
//     }

//     res.status(200).json({ message: 'Login successful' });
//   } catch (error) {
//     res.status(500).json({ message: 'Error logging in' });
//   }
// });




// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });


// app.js

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');  // Import the cors package
const db = require('./db');
const registrationRoute = require('./registration');
const loginRoute = require('./login');
const profileRoute = require('./profile');

const app = express();
app.use(bodyParser.json());

// Use cors middleware
app.use(cors());

app.use('/register', registrationRoute);
app.use('/login', loginRoute);
app.use('/profile', profileRoute); 

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
