const mongoose = require("mongoose");

const URL =
  "mongodb+srv://dbUser:ORnWssNbTQRqLr9J@cluster0.pkfpm.mongodb.net/<users>?retryWrites=true&w=majority";

const connectDB = async () => {
  await mongoose.connect(URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log("DB connected");
};

module.exports = connectDB;
