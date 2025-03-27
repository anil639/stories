const mongoose = require("mongoose");

const connectDB = () => {
  mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
      console.log("DB connection established");
    })
    .catch((error) => {
      console.error("DB connection failed:", error);
      process.exit(1);
    });
};
module.exports = connectDB;
