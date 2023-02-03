const mongoose = require("mongoose");

const dbConnect = async () => {
  try {
    const connect = await mongoose.connect(process.env.MONGOOSE_URL);
    console.log("Database connection successful");
  } catch (error) {
    console.log("Database connection failed");
  }
};

module.exports = dbConnect;
