import React, { useEffect, useState } from "react";
import HabitForm from "./components/HabitForm";
import HabitList from "./components/HabitList";

export default function App() {
  const [habits, setHabits] = useState([]);
  const API = "http://localhost:5000/habits";

  const fetchHabits = async () => {
    const res = await fetch(API);
    const data = await res.json();
    setHabits(data);
  };

  useEffect(() => {
    fetchHabits();
  }, []);

  const addHabit = async (name) => {
    await fetch(API, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name })
    });
    fetchHabits();
  };

  const completeHabit = async (id) => {
    await fetch(`${API}/${id}`, { method: "PUT" });
    fetchHabits();
  };

  const deleteHabit = async (id) => {
    await fetch(`${API}/${id}`, { method: "DELETE" });
    fetchHabits();
  };

  return (
    <div className="app">
      <h1>🌱 MindGarden</h1>
      <p className="subtitle">Track your growth beautifully</p>

      <HabitForm onAdd={addHabit} />
      <HabitList
        habits={habits}
        onComplete={completeHabit}
        onDelete={deleteHabit}
      />
    </div>
  );
}