"use client";

import { useEffect, useMemo, useRef } from "react";

type Props = {
  quantity?: number;
  staticity?: number;
  ease?: number;
  size?: number;
  color?: string;
  vx?: number;
  vy?: number;
};

type Circle = {
  x: number;
  y: number;
  translateX: number;
  translateY: number;
  size: number;
  alpha: number;
  targetAlpha: number;
  dx: number;
  dy: number;
  magnetism: number;
};

export default function ParticlesBackground({
  quantity = 100,
  staticity = 50,
  ease = 50,
  size = 0.4,
  color = "#000000",
  vx = 0,
  vy = 0,
}: Props) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const contextRef = useRef<CanvasRenderingContext2D | null>(null);
  const circlesRef = useRef<Circle[]>([]);
  const mouseRef = useRef({ x: 0, y: 0 });
  const sizeRef = useRef({ w: 0, h: 0 });
  const animationRef = useRef<number | null>(null);

  const rgb = useMemo(() => {
    let hex = color.replace("#", "");
    if (hex.length === 3) hex = hex.split("").map((c) => c + c).join("");
    const n = parseInt(hex, 16);
    return [(n >> 16) & 255, (n >> 8) & 255, n & 255] as const;
  }, [color]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;
    contextRef.current = canvas.getContext("2d");

    const dpr = typeof window !== "undefined" ? window.devicePixelRatio || 1 : 1;

    const circleParams = (): Circle => {
      const x = Math.floor(Math.random() * sizeRef.current.w);
      const y = Math.floor(Math.random() * sizeRef.current.h);
      const pSize = Math.floor(Math.random() * 2) + size;
      const targetAlpha = parseFloat((Math.random() * 0.6 + 0.1).toFixed(1));
      const dx = (Math.random() - 0.5) * 0.1;
      const dy = (Math.random() - 0.5) * 0.1;
      const magnetism = 0.1 + Math.random() * 4;
      return { x, y, translateX: 0, translateY: 0, size: pSize, alpha: 0, targetAlpha, dx, dy, magnetism };
    };

    const drawCircle = (circle: Circle, update = false) => {
      const ctx = contextRef.current;
      if (!ctx) return;
      const { x, y, translateX, translateY, size: s, alpha } = circle;
      ctx.translate(translateX, translateY);
      ctx.beginPath();
      ctx.arc(x, y, s, 0, 2 * Math.PI);
      ctx.fillStyle = `rgba(${rgb.join(", ")}, ${alpha})`;
      ctx.fill();
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      if (!update) circlesRef.current.push(circle);
    };

    const clearContext = () => {
      const ctx = contextRef.current;
      if (ctx) ctx.clearRect(0, 0, sizeRef.current.w, sizeRef.current.h);
    };

    const drawParticles = () => {
      clearContext();
      for (let i = 0; i < quantity; i++) drawCircle(circleParams());
    };

    const resizeCanvas = () => {
      const ctx = contextRef.current;
      if (!ctx || !container || !canvas) return;
      circlesRef.current = [];
      sizeRef.current.w = container.offsetWidth;
      sizeRef.current.h = container.offsetHeight;
      canvas.width = sizeRef.current.w * dpr;
      canvas.height = sizeRef.current.h * dpr;
      canvas.style.width = `${sizeRef.current.w}px`;
      canvas.style.height = `${sizeRef.current.h}px`;
      ctx.scale(dpr, dpr);
    };

    const initCanvas = () => {
      resizeCanvas();
      drawParticles();
    };

    const remap = (value: number, start1: number, end1: number, start2: number, end2: number) => {
      const r = ((value - start1) * (end2 - start2)) / (end1 - start1) + start2;
      return r > 0 ? r : 0;
    };

    const animate = () => {
      clearContext();
      circlesRef.current.forEach((circle, i) => {
        const edge = [
          circle.x + circle.translateX - circle.size,
          sizeRef.current.w - circle.x - circle.translateX - circle.size,
          circle.y + circle.translateY - circle.size,
          sizeRef.current.h - circle.y - circle.translateY - circle.size,
        ];
        const closest = edge.reduce((a, b) => Math.min(a, b));
        const remapped = parseFloat(remap(closest, 0, 20, 0, 1).toFixed(2));

        if (remapped > 1) {
          circle.alpha += 0.02;
          if (circle.alpha > circle.targetAlpha) circle.alpha = circle.targetAlpha;
        } else {
          circle.alpha = circle.targetAlpha * remapped;
        }

        circle.x += circle.dx + vx;
        circle.y += circle.dy + vy;
        circle.translateX += (mouseRef.current.x / (staticity / circle.magnetism) - circle.translateX) / ease;
        circle.translateY += (mouseRef.current.y / (staticity / circle.magnetism) - circle.translateY) / ease;

        drawCircle(circle, true);

        if (
          circle.x < -circle.size ||
          circle.x > sizeRef.current.w + circle.size ||
          circle.y < -circle.size ||
          circle.y > sizeRef.current.h + circle.size
        ) {
          circlesRef.current.splice(i, 1);
          drawCircle(circleParams());
        }
      });
      animationRef.current = window.requestAnimationFrame(animate);
    };

    const onMouseMove = (event: MouseEvent) => {
      const c = canvasRef.current;
      if (!c) return;
      const rect = c.getBoundingClientRect();
      const { w, h } = sizeRef.current;
      const x = event.clientX - rect.left - w / 2;
      const y = event.clientY - rect.top - h / 2;
      const inside = x < w / 2 && x > -w / 2 && y < h / 2 && y > -h / 2;
      if (inside) {
        mouseRef.current.x = x;
        mouseRef.current.y = y;
      }
    };

    initCanvas();
    animate();
    window.addEventListener("resize", initCanvas);
    window.addEventListener("mousemove", onMouseMove);

    return () => {
      window.removeEventListener("resize", initCanvas);
      window.removeEventListener("mousemove", onMouseMove);
      if (animationRef.current) window.cancelAnimationFrame(animationRef.current);
    };
  }, [quantity, staticity, ease, size, vx, vy, rgb]);

  return (
    <div ref={containerRef} className="particles-container" aria-hidden="true">
      <canvas ref={canvasRef}></canvas>
    </div>
  );
}
