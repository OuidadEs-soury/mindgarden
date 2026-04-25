import React, { useEffect, useState } from "react";
import HabitForm from "./components/HabitForm";
import HabitList from "./components/HabitList";

export default function App() {
  const [habits, setHabits] = useState([]);

  const API = "http://localhost:5000/habits";

  useEffect(() => {
    fetch(API)
      .then((res) => res.json())
      .then((data) => setHabits(data));
  }, []);

  const addHabit = async (name) => {
    const res = await fetch(API, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name })
    });

    const newHabit = await res.json();
    setHabits([...habits, newHabit]);
  };

  const completeHabit = async (id) => {
    await fetch(`${API}/${id}`, { method: "PUT" });

    const updated = await fetch(API).then((res) => res.json());
    setHabits(updated);
  };

  const deleteHabit = async (id) => {
    await fetch(`${API}/${id}`, { method: "DELETE" });

    setHabits(habits.filter((h) => h.id !== id));
  };

  return (
    <div className="app">
      <h1>🌱 MindGarden PRO</h1>
      <p className="subtitle">Now powered by a real backend</p>

      <HabitForm onAdd={addHabit} />
      <HabitList
        habits={habits}
        onComplete={completeHabit}
        onDelete={deleteHabit}
      />
    </div>
  );
}