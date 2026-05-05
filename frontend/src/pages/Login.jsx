import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    const res = await fetch("http://localhost:5000/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ email, password })
    });

    const data = await res.json();
    localStorage.setItem("token", data.token);
    window.location.href = "/";
  };

  return (
    <div className="flex items-center justify-center min-h-screen text-white">
      <div className="glass p-10 w-96">
        <h1 className="text-3xl mb-6 text-center">🌿 MindGarden</h1>

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
          onClick={handleLogin}
          className="w-full bg-green-500 py-3 rounded hover:bg-green-600 transition"
        >
          Login
        </button>
      </div>
    </div>
  );
}