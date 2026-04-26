import React, { useState } from "react";

export default function HabitForm({ token }) {
  const [input, setInput] = useState("");

  const add = async () => {
    await fetch("http://localhost:5000/api/habits", {
      method: "POST",
      headers: {
        "Content-Type":"application/json",
        "authorization": token
      },
      body: JSON.stringify({ name: input })
    });
    window.location.reload();
  };

  return (
    <div className="form">
      <input onChange={e=>setInput(e.target.value)} />
      <button onClick={add}>Add</button>
    </div>
  );
}