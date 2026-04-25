const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

let habits = [];

app.get("/habits", (req, res) => {
  res.json(habits);
});

app.post("/habits", (req, res) => {
  const newHabit = {
    id: Date.now(),
    name: req.body.name,
    streak: 0,
    lastDone: null
  };

  habits.push(newHabit);
  res.json(newHabit);
});

app.put("/habits/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const today = new Date().toDateString();

  habits = habits.map((h) => {
    if (h.id !== id) return h;

    if (h.lastDone === today) return h;

    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);

    const isStreak = h.lastDone === yesterday.toDateString();

    return {
      ...h,
      streak: isStreak ? h.streak + 1 : 1,
      lastDone: today
    };
  });

  res.json({ success: true });
});

app.delete("/habits/:id", (req, res) => {
  const id = parseInt(req.params.id);
  habits = habits.filter((h) => h.id !== id);
  res.json({ success: true });
});

app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});