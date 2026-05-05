import { useState, useEffect } from "react";

export default function Timer() {
  const [time, setTime] = useState(1500); // 25 min
  const [running, setRunning] = useState(false);

  useEffect(() => {
    if (!running) return;

    const interval = setInterval(() => {
      setTime(prev => {
        if (prev <= 0) {
          clearInterval(interval);
          setRunning(false);
          return 0;
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
      <h2 className="text-xl mb-4">Focus Mode</h2>
      <div className="text-4xl mb-4">{format(time)}</div>

      <button
        onClick={() => setRunning(!running)}
        className="bg-purple-500 px-4 py-2 rounded"
      >
        {running ? "Pause" : "Start"}
      </button>
    </div>
  );
}