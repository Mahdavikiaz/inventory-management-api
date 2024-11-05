const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB_URI);
    console.log('MongoDB connected successfully.');
  } catch (error) {
    console.log('MongoDB connection failed.', error.message);
    process.exit(1);
  }
};

module.exports = connectDB;