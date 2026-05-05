import { useState, useEffect } from "react";

export default function Timer({ onFocusChange }) {
  const [time, setTime] = useState(1500);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    Notification.requestPermission();
  }, []);

  useEffect(() => {
    onFocusChange(running);

    if (!running) return;

    const interval = setInterval(() => {
      setTime(prev => {
        if (prev <= 0) {
          new Notification("Session complete 🌿");
          clearInterval(interval);
          setRunning(false);
          return 1500;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [running]);

  const format = (t) => {
    const min = Math.floor(t / 60);
    const sec = t % 60;
    return `${min}:${sec < 10 ? "0" : ""}${sec}`;
  };

  return (
    <div className="glass p-6 text-center">
      <h2>Focus Mode</h2>
      <div className="text-4xl">{format(time)}</div>

      <button onClick={() => setRunning(!running)}
        className="bg-purple-500 px-4 py-2 rounded mt-4">
        {running ? "Pause" : "Start"}
      </button>
    </div>
  );
}