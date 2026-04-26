import React from "react";

export default function HabitItem({ habit, token }) {

  const complete = async () => {
    await fetch(`http://localhost:5000/api/habits/${habit._id}`, {
      method: "PUT",
      headers: { authorization: token }
    });
    window.location.reload();
  };

  const remove = async () => {
    await fetch(`http://localhost:5000/api/habits/${habit._id}`, {
      method: "DELETE",
      headers: { authorization: token }
    });
    window.location.reload();
  };

  return (
    <div className="card">
      <div>
        <h3>{habit.name}</h3>
        <p>🔥 {habit.streak}</p>
      </div>

      <div>
        <button onClick={complete}>Done</button>
        <button onClick={remove}>Delete</button>
      </div>
    </div>
  );
}