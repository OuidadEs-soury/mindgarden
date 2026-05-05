import { useState } from "react";

export default function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async () => {
    await fetch("http://localhost:5000/api/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ username, email, password })
    });

    window.location.href = "/login";
  };

  return (
    <div className="flex items-center justify-center min-h-screen text-white">
      <div className="glass p-10 w-96">
        <h1 className="text-3xl mb-6 text-center">Create Account</h1>

        <input
          className="w-full p-3 mb-4 bg-transparent border border-white/20 rounded"
          placeholder="Username"
          onChange={e => setUsername(e.target.value)}
        />

        <input
          className="w-full p-3 mb-4 bg-transparent border border-white/20 rounded"
          placeholder="Email"
          onChange={e => setEmail(e.target.value)}
        />

        <input
          type="password"
          className="w-full p-3 mb-6 bg-transparent border border-white/20 rounded"
          placeholder="Password"
          onChange={e => setPassword(e.target.value)}
        />

        <button
          onClick={handleRegister}
          className="w-full bg-blue-500 py-3 rounded hover:bg-blue-600 transition"
        >
          Register
        </button>
      </div>
    </div>
  );
}