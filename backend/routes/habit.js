const router = require("express").Router();
const Habit = require("../models/Habit");


router.get("/:userId", async (req, res) => {
  const habits = await Habit.find({ userId: req.params.userId });
  res.json(habits);
});


router.post("/", async (req, res) => {
  const habit = new Habit(req.body);
  await habit.save();
  res.json(habit);
});


router.put("/complete/:id", async (req, res) => {
  const habit = await Habit.findById(req.params.id);

  habit.streak += 1;
  habit.growthStage = Math.min(Math.floor(habit.streak / 3), 4);
  habit.lastCompleted = new Date();

  await habit.save();
  res.json(habit);
});

module.exports = router;