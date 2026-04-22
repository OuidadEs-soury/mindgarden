import React from "react";

export default function HabitItem({ habit, onComplete, onDelete }) {
  return (
    <div className="card">
      <div className="info">
        <h3>{habit.name}</h3>
        <p>🔥 Streak: {habit.streak}</p>
      </div>

      <div className="actions">
        <button onClick={() => onComplete(habit.id)}>Done</button>
        <button className="delete" onClick={() => onDelete(habit.id)}>
          ✕
        </button>
      </div>
    </div>
  );
}