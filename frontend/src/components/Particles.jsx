import { useEffect } from "react";

export default function Particles({ raining }) {
  useEffect(() => {
    const canvas = document.getElementById("bg");
    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let drops = [];

    for (let i = 0; i < 150; i++) {
      drops.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        length: Math.random() * 20,
        speed: Math.random() * 4 + 2
      });
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      if (raining) {
        ctx.strokeStyle = "rgba(173,216,230,0.5)";
        ctx.lineWidth = 1;

        drops.forEach(d => {
          ctx.beginPath();
          ctx.moveTo(d.x, d.y);
          ctx.lineTo(d.x, d.y + d.length);
          ctx.stroke();

          d.y += d.speed;
          if (d.y > canvas.height) d.y = 0;
        });
      }

      requestAnimationFrame(animate);
    }

    animate();
  }, [raining]);

  return <canvas id="bg" className="fixed top-0 left-0 -z-10"></canvas>;
}