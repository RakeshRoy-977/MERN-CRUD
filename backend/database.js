const mongoose = require("mongoose");

const connectToDB = async () => {
  await mongoose.connect(process.env.DB_URI);
  console.log("connect to mongoDB");
};

module.exports = connectToDB;
