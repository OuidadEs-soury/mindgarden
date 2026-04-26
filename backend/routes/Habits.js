const express = require("express");
const router = express.Router();
const Habit = require("../models/Habit");
const auth = require("../middleware/auth");

// GET
router.get("/", auth, async (req, res) => {
  const habits = await Habit.find({ userId: req.user.id });
  res.json(habits);
});

// ADD
router.post("/", auth, async (req, res) => {
  const habit = new Habit({
    name: req.body.name,
    userId: req.user.id
  });

  await habit.save();
  res.json(habit);
});

// COMPLETE
router.put("/:id", auth, async (req, res) => {
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
router.delete("/:id", auth, async (req, res) => {
  await Habit.findByIdAndDelete(req.params.id);
  res.json({ success: true });
});

module.exports = router;