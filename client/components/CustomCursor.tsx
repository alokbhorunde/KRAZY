import { useEffect, useRef, useState, useCallback } from "react";

/**
 * Custom arrow-pointer cursor with the site's brand gradient.
 * Replaces the default OS cursor with the triangular arrow shape
 * from the reference image, filled with a blue→purple→orange gradient.
 */
export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const posRef = useRef({ x: -100, y: -100 });
  const targetRef = useRef({ x: -100, y: -100 });
  const rafRef = useRef<number | null>(null);
  const [visible, setVisible] = useState(false);
  const [clicking, setClicking] = useState(false);

  // Detect touch device — skip custom cursor entirely
  const isTouch =
    typeof window !== "undefined" &&
    ("ontouchstart" in window || navigator.maxTouchPoints > 0);

  const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

  const animate = useCallback(() => {
    posRef.current.x = lerp(posRef.current.x, targetRef.current.x, 0.18);
    posRef.current.y = lerp(posRef.current.y, targetRef.current.y, 0.18);

    if (cursorRef.current) {
      cursorRef.current.style.transform = `translate3d(${posRef.current.x}px, ${posRef.current.y}px, 0) ${clicking ? "scale(0.85)" : "scale(1)"}`;
    }
    rafRef.current = requestAnimationFrame(animate);
  }, [clicking]);

  useEffect(() => {
    if (isTouch) return;

    const onMove = (e: MouseEvent) => {
      targetRef.current.x = e.clientX;
      targetRef.current.y = e.clientY;
      if (!visible) setVisible(true);
    };

    const onEnter = () => setVisible(true);
    const onLeave = () => setVisible(false);
    const onDown = () => setClicking(true);
    const onUp = () => setClicking(false);

    document.addEventListener("mousemove", onMove, { passive: true });
    document.addEventListener("mouseenter", onEnter);
    document.addEventListener("mouseleave", onLeave);
    document.addEventListener("mousedown", onDown);
    document.addEventListener("mouseup", onUp);

    rafRef.current = requestAnimationFrame(animate);

    return () => {
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseenter", onEnter);
      document.removeEventListener("mouseleave", onLeave);
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("mouseup", onUp);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [isTouch, visible, animate]);

  if (isTouch) return null;

  return (
    <div
      ref={cursorRef}
      className="custom-cursor-root"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: 32,
        height: 32,
        pointerEvents: "none",
        zIndex: 99999,
        opacity: visible ? 1 : 0,
        transition: "opacity 0.15s ease",
        willChange: "transform",
      }}
    >
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ display: "block", filter: "drop-shadow(0 2px 6px rgba(0,0,0,0.18))" }}
      >
        <defs>
          <linearGradient id="cursor-grad" x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#00B2FF" />
            <stop offset="45%" stopColor="#A600FF" />
            <stop offset="100%" stopColor="#FF6200" />
          </linearGradient>
        </defs>
        {/* Arrow pointer shape — matches the reference image silhouette */}
        <path
          d="M5 2 L27 15 L15 17 L11 29 Z"
          fill="url(#cursor-grad)"
          stroke="black"
          strokeWidth="1.2"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}
