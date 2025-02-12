require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');
const logger = require('./utils/logger');
const errorHandler = require('./utils/errorHandler');

connectDB();

const app = express();

// Middleware
app.use(express.json());
app.use(logger);

// Routes

// Error Handler Middleware
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
