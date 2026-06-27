"use client";
import { useEffect, useRef } from "react";

/**
 * Lightweight IntersectionObserver hook.
 * Adds class `visible` to elements with class `reveal`, `reveal-left`, or `reveal-right`
 * when they scroll into view.
 *
 * Usage: call `useScrollAnimation()` inside any component that needs scroll-triggered reveals.
 */
export function useScrollAnimation(threshold = 0.15) {
  const containerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const targets = document.querySelectorAll(
      ".reveal, .reveal-left, .reveal-right"
    );

    if (!targets.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target); // fire once
          }
        });
      },
      { threshold }
    );

    targets.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [threshold]);

  return containerRef;
}
