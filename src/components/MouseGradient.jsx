import { useEffect, useRef } from 'react';

export default function MouseGradient() {
  const gradientRef = useRef(null);

  useEffect(() => {
    const el = gradientRef.current;
    if (!el) return;

    let ticking = false;
    const onMove = (e) => {
      if (!ticking) {
        requestAnimationFrame(() => {
          el.style.background = `radial-gradient(600px circle at ${e.clientX}px ${e.clientY}px, rgba(0,245,255,0.04), transparent 50%)`;
          ticking = false;
        });
        ticking = true;
      }
    };

    document.addEventListener('mousemove', onMove);
    return () => document.removeEventListener('mousemove', onMove);
  }, []);

  return (
    <div
      ref={gradientRef}
      className="pointer-events-none fixed inset-0 z-30 transition-all duration-300 hidden md:block"
      style={{ mixBlendMode: 'normal' }}
    />
  );
}
