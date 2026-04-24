import { useEffect, useRef, useState, useCallback } from "react";

/**
 * Custom round cursor with the site's brand gradient.
 * Optimized for performance on lower-end devices.
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

  const animate = useCallback(() => {
    // High interpolation factor (0.8) makes it track almost instantly
    // This removes the "laggy" visual feeling while keeping it slightly smooth
    posRef.current.x += (targetRef.current.x - posRef.current.x) * 0.8;
    posRef.current.y += (targetRef.current.y - posRef.current.y) * 0.8;

    if (cursorRef.current) {
      // Offset by -12px to center the 24x24 pixel circle exactly on the pointer
      cursorRef.current.style.transform = `translate3d(${posRef.current.x - 12}px, ${posRef.current.y - 12}px, 0) ${clicking ? "scale(0.85)" : "scale(1)"}`;
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
        width: 24,
        height: 24,
        borderRadius: "50%",
        background: "linear-gradient(135deg, #00B2FF 0%, #A600FF 45%, #FF6200 100%)",
        border: "1.2px solid black",
        pointerEvents: "none",
        zIndex: 99999,
        opacity: visible ? 1 : 0,
        transition: "opacity 0.1s ease",
        willChange: "transform",
        // Using a basic CSS box-shadow instead of an expensive SVG filter for maximum performance
        boxShadow: "0 2px 6px rgba(0,0,0,0.15)"
      }}
    />
  );
}
