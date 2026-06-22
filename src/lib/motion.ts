import type { Variants } from "framer-motion";

// Shared motion language for the whole site so transitions feel cohesive.
export const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];
export const DURATION = 0.5;

// Subtle fade-in-up used by sections and cards when they scroll into view.
export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: DURATION, ease: EASE },
  },
};

// Trigger once, when ~20% of the element is visible (no replay on scroll).
export const viewportOnce = { once: true, amount: 0.2 } as const;

// Page-level transition for route changes (Home <-> Lab, etc.).
export const pageTransition: Variants = {
  initial: { opacity: 0, y: 16 },
  enter: {
    opacity: 1,
    y: 0,
    transition: { duration: DURATION, ease: EASE },
  },
  exit: {
    opacity: 0,
    y: -8,
    transition: { duration: 0.3, ease: EASE },
  },
};
