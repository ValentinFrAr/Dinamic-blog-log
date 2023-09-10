const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    mongoose.set("strictQuery", false);
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Mongo connecté");
  } catch (err) {
    console.error(err);
    process.exit(1); // Exit the process with an error code
  }
};

module.exports = connectDB;
