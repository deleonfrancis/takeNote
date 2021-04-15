const mongoose = require("mongoose");
const config = require("config");

// brings in the mongoURI from config.json
const db = config.get("mongoURI");

// connect to the database
const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useFindAndModify: false,
    });
    console.log("MongoDB Connected!");
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
