import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// Jump back to the top on every route change. The scroll is instant (never
// smooth), so it also respects users who prefer reduced motion.
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" as ScrollBehavior });
  }, [pathname]);

  return null;
}

export default ScrollToTop;
