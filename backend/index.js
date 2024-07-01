// index.js

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const authRoutes = require('./routes/auth');
const usersRoutes = require ('./routes/auth')
const enrollRoutes = require('./routes/enroll'); // Import the enroll route
// const studentsRoutes = require ('./routes/students')

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors()); // Enable CORS for all routes


// app.use(express.json());
// app.use('/api/auth', authRoutes);

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/users', usersRoutes);

app.use('/api', enrollRoutes); // Use the enroll route
// app.use('/api/students', studentsRoutes);


// Connect to MongoDB
mongoose.connect('mongodb+srv://subhashreelenka56:y7tJdlBuRF7Bsp8m@cluster0.6su3gsc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connected to MongoDB');
}).catch(err => {
  console.error('Failed to connect to MongoDB', err);
});

// app.get('/api/auth', async (req, res) => {
//   try {
//     const students = await users.find();
//     res.json(students);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

// const Student = mongoose.model('Student', studentSchema);
// GET route to fetch all students
app.get('/api/users', async (req, res) => {
  try {
    const students = await users.find();
    res.json(students);
  } catch (err) {
    res.status(500).send('Failed to fetch students');
  }
});


// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
