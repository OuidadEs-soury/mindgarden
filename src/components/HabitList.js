import React, { useEffect, useState } from "react";
import HabitItem from "./HabitItem";

export default function HabitList({ token }) {
  const [habits, setHabits] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/habits", {
      headers: { authorization: token }
    })
      .then(res => res.json())
      .then(setHabits);
  }, []);

  return (
    <div>
      {habits.map(h => (
        <HabitItem key={h._id} habit={h} token={token} />
      ))}
    </div>
  );
}