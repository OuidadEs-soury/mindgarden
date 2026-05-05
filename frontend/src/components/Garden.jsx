import { useEffect, useState } from "react";
import PlantCard from "./PlantCard";

export default function Garden() {
  const [habits, setHabits] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/habits/YOUR_USER_ID")
      .then(res => res.json())
      .then(data => setHabits(data));
  }, []);

  return (
    <div className="grid grid-cols-3 gap-6 p-6">
      {habits.map(habit => (
        <PlantCard key={habit._id} habit={habit} />
      ))}
    </div>
  );
}