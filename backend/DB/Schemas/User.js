const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true],
  },
  secondName: {
    type: String,
    required: [true],
  },
  email: {
    type: String,
    required: [true],
  },
  gamesPlayed: {
    type: Number,
    required: [true],
  },
  score: {
    type: Number,
    required: [true],
  },
  password: {
    type: String,
    required: [true],
  },
});

const User = mongoose.model("user", userSchema);
module.exports = User;
