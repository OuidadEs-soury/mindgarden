import { useEffect } from "react";

export default function Particles() {
  useEffect(() => {
    const canvas = document.getElementById("bg");
    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let particles = [];

    for (let i = 0; i < 80; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2,
        speed: Math.random() * 0.5
      });
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach(p => {
        p.y += p.speed;
        if (p.y > canvas.height) p.y = 0;

        ctx.fillStyle = "white";
        ctx.fillRect(p.x, p.y, p.size, p.size);
      });

      requestAnimationFrame(animate);
    }

    animate();
  }, []);

  return <canvas id="bg" className="fixed top-0 left-0 -z-10"></canvas>;
}