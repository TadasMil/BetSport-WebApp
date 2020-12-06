const mongoose = require("mongoose");

const gameSchema = new mongoose.Schema({
  id: {
    type: String,
    required: [true],
  },
  name: {
    type: String,
    required: [true],
  },
  highestWin: {
    type: Number,
    required: [true],
  },
});

const Game1 = mongoose.model("game1", gameSchema);
module.exports = Game1;
