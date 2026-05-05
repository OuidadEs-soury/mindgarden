const mongoose = require("mongoose");

const HabitSchema = new mongoose.Schema({
  userId: String,
  name: String,
  streak: {
    type: Number,
    default: 0
  },
  lastCompleted: Date,
  growthStage: {
    type: Number,
    default: 0
  }
});

module.exports = mongoose.model("Habit", HabitSchema);