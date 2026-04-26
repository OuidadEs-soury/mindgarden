import React, { useState } from "react";

export default function Register({ onSwitch }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const register = async () => {
    await fetch("http://localhost:5000/api/auth/register", {
      method: "POST",
      headers: {"Content-Type":"application/json"},
      body: JSON.stringify({ email, password })
    });

    onSwitch();
  };

  return (
    <div className="app">
      <h2>Register</h2>
      <input placeholder="Email" onChange={e=>setEmail(e.target.value)} />
      <input type="password" placeholder="Password" onChange={e=>setPassword(e.target.value)} />
      <button onClick={register}>Register</button>
    </div>
  );
}