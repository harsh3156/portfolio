import { useEffect, useRef } from 'react';

export default function Cursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const mouse = useRef({ x: 0, y: 0 });
  const ring = useRef({ x: 0, y: 0 });
  const raf = useRef(null);

  useEffect(() => {
    const dot = dotRef.current;
    const ringEl = ringRef.current;
    if (!dot || !ringEl) return;

    const onMove = (e) => {
      mouse.current = { x: e.clientX, y: e.clientY };
      dot.style.transform = `translate(${e.clientX - 4}px, ${e.clientY - 4}px)`;
    };

    const animate = () => {
      ring.current.x += (mouse.current.x - ring.current.x) * 0.1;
      ring.current.y += (mouse.current.y - ring.current.y) * 0.1;
      ringEl.style.transform = `translate(${ring.current.x - 20}px, ${ring.current.y - 20}px)`;
      raf.current = requestAnimationFrame(animate);
    };

    const onEnter = () => ringEl.classList.add('hovering');
    const onLeave = () => ringEl.classList.remove('hovering');

    document.addEventListener('mousemove', onMove);
    raf.current = requestAnimationFrame(animate);

    const refreshHovers = () => {
      document.querySelectorAll('a, button, [data-hover]').forEach(el => {
        el.addEventListener('mouseenter', onEnter);
        el.addEventListener('mouseleave', onLeave);
      });
    };

    refreshHovers();
    const observer = new MutationObserver(refreshHovers);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      document.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(raf.current);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className="cursor-dot hidden md:block" style={{ position: 'fixed', top: 0, left: 0, pointerEvents: 'none', zIndex: 99999 }} />
      <div ref={ringRef} className="cursor-ring hidden md:block" style={{ position: 'fixed', top: 0, left: 0, pointerEvents: 'none', zIndex: 99998 }} />
    </>
  );
}
