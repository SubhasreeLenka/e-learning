// const express = require('express');
// const router = express.Router();
// const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken');
// const User = require('../models/User'); // Ensure the User model is correct

// // Registration endpoint
// router.post('/register', async (req, res) => {
//   const { name, email, password, dob, gender, mobileNumber } = req.body;

//   try {
//     // Check if user already exists
//     const existingUser = await User.findOne({ email });
//     if (existingUser) {
//       return res.status(400).json({ success: false, message: 'User already exists' });
//     }

//     // Hash the password before saving
//     const hashedPassword = await bcrypt.hash(password, 10);

//     const user = new User({
//       name,
//       email,
//       password: hashedPassword,
//       dob,
//       gender,
//       mobileNumber
//     });

//     await user.save();
//     res.status(201).json({ success: true, message: 'User registered successfully' });
//   } catch (error) {
//     res.status(500).json({ success: false, message: 'Registration failed', error });
//   }
// });

// // Login endpoint
// router.post('/login', async (req, res) => {
//   const { email, password } = req.body;

//   try {
//     // Find user by email
//     const user = await User.findOne({ email });

//     // Check if user exists
//     if (!user) {
//       return res.status(400).json({ success: false, message: 'Invalid credentials' });
//     }

//     // Check if password matches
//     const isMatch = await bcrypt.compare(password, user.password);
//     if (!isMatch) {
//       return res.status(400).json({ success: false, message: 'Invalid credentials' });
//     }

//     // Generate JWT token
//     const token = jwt.sign({ userId: user._id }, process.env.TOKEN_SECRET, { expiresIn: '1h' });

//     // Send token and user data in response
//     res.json({ token, userId: user._id, name: user.name });
//   } catch (error) {
//     // Handle server error
//     console.error(error);
//     res.status(500).json({ success: false, message: 'Server error', error });
//   }
// });

// // Fetch users endpoint
// router.get('/users', async (req, res) => {
//   try {
//     const users = await User.find();
//     res.json(users);
//     console.log(users);
//   } catch (error) {
//     res.status(500).json({ success: false, message: 'Server error', error });
//   }
// });

// module.exports = router;
const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User'); // Assuming User model is correctly defined
require('dotenv').config(); // Load environment variables

// Registration endpoint
router.post('/register', async (req, res) => {
  const { name, email, password, dob, gender, mobileNumber } = req.body;

  try {
    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ success: false, message: 'User already exists' });
    }

    // Hash the password before saving
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user object
    const newUser = new User({
      name,
      email,
      password: hashedPassword,
      dob,
      gender,
      mobileNumber
    });

    // Save new user to database
    await newUser.save();

    // Respond with success message
    res.status(201).json({ success: true, message: 'User registered successfully' });
  } catch (error) {
    // Handle registration failure
    console.error('Registration failed:', error);
    res.status(500).json({ success: false, message: 'Registration failed', error });
  }
});

// Login endpoint
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    // Find user by email
    const user = await User.findOne({ email });

    // Check if user exists
    if (!user) {
      return res.status(400).json({ success: false, message: 'Invalid credentials' });
    }

    // Check if password matches
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ success: false, message: 'Invalid credentials' });
    }

    // Generate JWT token
    const token = jwt.sign({ userId: user._id }, process.env.TOKEN_SECRET, { expiresIn: '1h' });

    // Respond with token and user data
    res.json({ token, userId: user._id, name: user.name });
  } catch (error) {
    // Handle login failure
    console.error('Error logging in:', error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
});

// Fetch users endpoint (example)
router.get('/users', async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    // Handle error fetching users
    console.error('Error fetching users:', error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
});

module.exports = router;
