require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

// Initialize Express app
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Debugging
console.log('Environment Variables:', {
  MONGODB_URI: process.env.MONGODB_URI ? '***loaded***' : 'MISSING',
  PORT: process.env.PORT || 'using default 5001'
});

// MongoDB Connection
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(
      process.env.MONGODB_URI || 'mongodb://localhost:27017/portfolio', 
      {
        useNewUrlParser: true,
        useUnifiedTopology: true
      }
    );
    console.log(`✅ MongoDB Connected: ${conn.connection.host}`);
  } catch (err) {
    console.error('❌ MongoDB connection error:', err.message);
    process.exit(1);
  }
};

// Routes
app.get('/', (req, res) => {
  res.send('API Running');
});

// Test Route (AFTER app initialization)
app.get('/test', async (req, res) => {
  try {
    const collections = await mongoose.connection.db.listCollections().toArray();
    res.json({ 
      status: 'Success',
      collections: collections.map(col => col.name) 
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Start Server
const startServer = async () => {
  await connectDB();
  const PORT = process.env.PORT || 5001;
  app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
    console.log(`🔗 Test endpoint: http://localhost:${PORT}/test`);
  });
};

startServer();