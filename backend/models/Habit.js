const mongoose = require("mongoose");

const HabitSchema = new mongoose.Schema({
  name: String,
  streak: { type: Number, default: 0 },
  lastDone: { type: String, default: null }
});

module.exports = mongoose.model("Habit", HabitSchema);