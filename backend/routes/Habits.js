const express = require("express");
const router = express.Router();
const Habit = require("../models/Habit");

// GET
router.get("/", async (req, res) => {
  const habits = await Habit.find();
  res.json(habits);
});

// POST
router.post("/", async (req, res) => {
  const habit = new Habit({ name: req.body.name });
  await habit.save();
  res.json(habit);
});

// COMPLETE
router.put("/:id", async (req, res) => {
  const habit = await Habit.findById(req.params.id);
  const today = new Date().toDateString();

  if (habit.lastDone !== today) {
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);

    const isStreak = habit.lastDone === yesterday.toDateString();
    habit.streak = isStreak ? habit.streak + 1 : 1;
    habit.lastDone = today;

    await habit.save();
  }

  res.json(habit);
});

// DELETE
router.delete("/:id", async (req, res) => {
  await Habit.findByIdAndDelete(req.params.id);
  res.json({ success: true });
});

module.exports = router;