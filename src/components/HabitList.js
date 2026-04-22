import React from "react";
import HabitItem from "./HabitItem";

export default function HabitList({ habits, onComplete, onDelete }) {
  if (habits.length === 0) {
    return <p className="empty">No habits yet 🌿</p>;
  }

  return (
    <div className="list">
      {habits.map((habit) => (
        <HabitItem
          key={habit.id}
          habit={habit}
          onComplete={onComplete}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}