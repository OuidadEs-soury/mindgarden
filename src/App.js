import React, { useEffect, useState } from "react";
import HabitForm from "./components/HabitForm";
import HabitList from "./components/HabitList";

export default function App() {
  const [habits, setHabits] = useState([]);

  useEffect(() => {
    const saved = localStorage.getItem("habits");
    if (saved) setHabits(JSON.parse(saved));
  }, []);

  useEffect(() => {
    localStorage.setItem("habits", JSON.stringify(habits));
  }, [habits]);

  const addHabit = (name) => {
    const newHabit = {
      id: Date.now(),
      name,
      streak: 0,
      lastDone: null
    };
    setHabits([...habits, newHabit]);
  };

  const completeHabit = (id) => {
    const today = new Date().toDateString();

    setHabits(
      habits.map((h) => {
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
      })
    );
  };

  const deleteHabit = (id) => {
    setHabits(habits.filter((h) => h.id !== id));
  };

  return (
    <div className="app">
      <h1>🌱 MindGarden</h1>
      <p className="subtitle">Grow your habits like plants</p>

      <HabitForm onAdd={addHabit} />
      <HabitList
        habits={habits}
        onComplete={completeHabit}
        onDelete={deleteHabit}
      />
    </div>
  );
}