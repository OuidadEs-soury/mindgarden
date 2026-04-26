import React, { useState } from "react";
import Login from "./components/Login";
import Register from "./components/Register";
import HabitList from "./components/HabitList";
import HabitForm from "./components/HabitForm";

export default function App() {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [showRegister, setShowRegister] = useState(false);

  if (!token) {
    return showRegister ? (
      <Register onSwitch={() => setShowRegister(false)} />
    ) : (
      <Login
        setToken={setToken}
        onSwitch={() => setShowRegister(true)}
      />
    );
  }

  return (
    <div className="app">
      <h1>🌱 MindGarden</h1>
      <button onClick={() => {
        localStorage.removeItem("token");
        setToken(null);
      }}>Logout</button>

      <HabitForm token={token} />
      <HabitList token={token} />
    </div>
  );
}