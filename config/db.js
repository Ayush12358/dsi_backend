const mongoose = require('mongoose');
const { MongoClient, ServerApiVersion } = require('mongodb');

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
    });
    console.log('MongoDB connected successfully');
  } catch (err) {
    console.error(`Error: ${err.message}`);
    process.exit(1);
  }
};

module.exports = connectDB;
