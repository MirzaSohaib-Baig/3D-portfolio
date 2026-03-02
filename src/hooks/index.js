import { useState, useEffect, useRef } from "react";

/**
 * Fires `visible = true` once the element enters the viewport.
 * Disconnects the observer afterward so it only triggers once.
 */
export function useIntersect(options = {}) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.12, ...options }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return [ref, visible];
}

/**
 * Tracks which nav section is currently in view while scrolling.
 */
export function useActiveSection(navLinks) {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handler = () => {
      const sections = navLinks
        .map((n) => document.getElementById(n.id))
        .filter(Boolean);
      const scrollY = window.scrollY + 120;
      for (let i = sections.length - 1; i >= 0; i--) {
        if (sections[i].offsetTop <= scrollY) {
          setActiveSection(navLinks[i].id);
          break;
        }
      }
    };
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, [navLinks]);

  return activeSection;
}

/**
 * Animates a custom cursor dot + lagging ring.
 * Returns refs to attach to the cursor elements.
 */
export function useCursor() {
  const cursorRef = useRef(null);
  const ringRef   = useRef(null);
  const rxRef = useRef(0), ryRef = useRef(0);
  const mxRef = useRef(0), myRef = useRef(0);

  useEffect(() => {
    const move = (e) => {
      mxRef.current = e.clientX;
      myRef.current = e.clientY;
      if (cursorRef.current) {
        cursorRef.current.style.left = e.clientX + "px";
        cursorRef.current.style.top  = e.clientY + "px";
      }
    };
    window.addEventListener("mousemove", move);

    let raf;
    const animate = () => {
      rxRef.current += (mxRef.current - rxRef.current) * 0.11;
      ryRef.current += (myRef.current - ryRef.current) * 0.11;
      if (ringRef.current) {
        ringRef.current.style.left = rxRef.current + "px";
        ringRef.current.style.top  = ryRef.current + "px";
      }
      raf = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener("mousemove", move);
      cancelAnimationFrame(raf);
    };
  }, []);

  return { cursorRef, ringRef };
}
