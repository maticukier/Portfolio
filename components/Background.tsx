"use client";
import { useEffect, useRef } from "react";

interface Node {
  x: number; y: number;
  vx: number; vy: number;
  radius: number;
}

export default function Background() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let lastFrame = 0;
    const TARGET_FPS = 28;
    const INTERVAL = 1000 / TARGET_FPS;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    // Nodes
    const COUNT = 38;
    const nodes: Node[] = Array.from({ length: COUNT }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      radius: Math.random() * 1.5 + 0.5,
    }));

    const CONNECT_DIST = 160;

    // Color palette — blue/cyan/amber
    const NODE_COLORS = ["rgba(96,165,250,", "rgba(34,211,238,", "rgba(147,197,253,"];
    const LINE_COLOR_NEAR = "rgba(59,130,246,";
    const LINE_COLOR_FAR = "rgba(6,182,212,";

    const draw = (ts: number) => {
      animId = requestAnimationFrame(draw);
      if (ts - lastFrame < INTERVAL) return;
      lastFrame = ts;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Move nodes
      for (const n of nodes) {
        n.x += n.vx;
        n.y += n.vy;
        if (n.x < 0 || n.x > canvas.width) n.vx *= -1;
        if (n.y < 0 || n.y > canvas.height) n.vy *= -1;
      }

      // Draw connections
      for (let i = 0; i < COUNT; i++) {
        for (let j = i + 1; j < COUNT; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < CONNECT_DIST) {
            const alpha = (1 - dist / CONNECT_DIST) * 0.35;
            const color = dist < CONNECT_DIST / 2 ? LINE_COLOR_NEAR : LINE_COLOR_FAR;
            ctx.beginPath();
            ctx.strokeStyle = `${color}${alpha})`;
            ctx.lineWidth = 0.6;
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.stroke();
          }
        }
      }

      // Draw nodes
      for (let i = 0; i < COUNT; i++) {
        const n = nodes[i];
        const col = NODE_COLORS[i % NODE_COLORS.length];
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.radius, 0, Math.PI * 2);
        ctx.fillStyle = `${col}0.7)`;
        ctx.fill();
      }
    };

    animId = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <>
      {/* CSS gradient orbs — no blur filter, pure radial-gradient */}
      <div aria-hidden="true" className="fixed inset-0 -z-20 bg-[#02060f]" />
      <div aria-hidden="true" className="fixed -z-10 pointer-events-none"
        style={{
          top: "-10%", left: "-5%", width: "55vw", height: "55vw",
          background: "radial-gradient(circle, rgba(29,78,216,0.12) 0%, transparent 65%)",
          animation: "orb1 18s ease-in-out infinite alternate",
        }} />
      <div aria-hidden="true" className="fixed -z-10 pointer-events-none"
        style={{
          bottom: "0%", right: "-5%", width: "45vw", height: "45vw",
          background: "radial-gradient(circle, rgba(8,145,178,0.10) 0%, transparent 65%)",
          animation: "orb2 22s ease-in-out infinite alternate",
        }} />
      <div aria-hidden="true" className="fixed -z-10 pointer-events-none"
        style={{
          top: "40%", left: "40%", width: "35vw", height: "35vw",
          background: "radial-gradient(circle, rgba(180,120,20,0.06) 0%, transparent 65%)",
          animation: "orb3 26s ease-in-out infinite alternate",
        }} />

      {/* Canvas network */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 -z-10 pointer-events-none"
        style={{ opacity: 0.6 }}
      />
    </>
  );
}
