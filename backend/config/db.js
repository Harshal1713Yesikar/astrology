const mongoose = require('mongoose');

const connectDB = async () => {
  const uri = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/astronit';

  try {
    const conn = await mongoose.connect(uri, {
      serverSelectionTimeoutMS: 5000,
    });
    console.log(`[Astronit DB] MongoDB Connected: ${conn.connection.host}/${conn.connection.name}`);
    return conn;
  } catch (err) {
    console.error(`[Astronit DB] MongoDB connection error: ${err.message}`);
    console.log('[Astronit DB] Please ensure MongoDB is running or configure MONGODB_URI in server/.env');
    throw err;
  }
};

module.exports = connectDB;
