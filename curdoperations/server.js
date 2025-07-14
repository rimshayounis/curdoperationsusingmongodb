// server.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes');

const app = express();
const PORT = 3000;
const MONGO_URI = 'mongodb://127.0.0.1:27017/crudDB'; 

// Middleware
app.use(bodyParser.json());
app.use('/api', userRoutes);


// ✅ Connect to MongoDB (clean version)
mongoose.connect(MONGO_URI)
  .then(() => {
    console.log("Connected to MongoDB");

    // Start the server after DB is connected
    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error("MongoDB connection failed:", err.message);
  });
