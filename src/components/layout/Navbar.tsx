import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const navItems = [
  { label: "About", href: "about" },
  { label: "Skills", href: "skills" },
  { label: "Projects", href: "projects" },
  { label: "Experience", href: "experience" },
  { label: "Education", href: "education" },
  { label: "Contact", href: "contact" },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  const closeMobileMenu = () => {
    setIsClosing(true);

    window.setTimeout(() => {
      setIsOpen(false);
      setIsClosing(false);
    }, 220);
  };

  const prefersReducedMotion = () =>
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const scrollBehavior = (): ScrollBehavior =>
    prefersReducedMotion() ? "auto" : "smooth";

  const scrollToId = (sectionId: string) => {
    const section = document.getElementById(sectionId);

    if (!section) return false;

    const navbarOffset = 110;
    const sectionPosition =
      section.getBoundingClientRect().top + window.scrollY - navbarOffset;

    window.scrollTo({
      top: sectionPosition,
      behavior: scrollBehavior(),
    });

    return true;
  };

  const scrollToSection = (sectionId: string) => {
    if (location.pathname !== "/") {
      // Navigate home first, then let the effect below scroll once the
      // target section has actually mounted (page transition takes time).
      navigate("/", { state: { scrollTo: sectionId } });
    } else {
      scrollToId(sectionId);
    }

    if (isOpen) {
      closeMobileMenu();
    }
  };

  // After a cross-page navigation, wait until the requested section exists in
  // the DOM (route transition + mount) and then scroll to it.
  useEffect(() => {
    const target = (location.state as { scrollTo?: string } | null)?.scrollTo;

    if (location.pathname !== "/" || !target) return;

    let frame = 0;
    let attempts = 0;

    const tryScroll = () => {
      if (scrollToId(target) || attempts > 90) {
        navigate("/", { replace: true, state: null });
        return;
      }

      attempts += 1;
      frame = requestAnimationFrame(tryScroll);
    };

    frame = requestAnimationFrame(tryScroll);

    return () => cancelAnimationFrame(frame);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  const goHome = () => {
    if (location.pathname !== "/") {
      navigate("/");
    } else {
      window.scrollTo({ top: 0, behavior: scrollBehavior() });
    }

    if (isOpen) {
      closeMobileMenu();
    }
  };

  return (
    <header className="navbar">
      <button className="navbar-logo" onClick={goHome} aria-label="Yiğit Avar, go to homepage">
        Yiğit<span>Avar</span>
      </button>

      <nav className="navbar-links">
        {navItems.map((item) => (
          <button key={item.href} onClick={() => scrollToSection(item.href)}>
            {item.label}
          </button>
        ))}

        <Link className="navbar-route-link" to="/lab">
          Lab
        </Link>
      </nav>

      <button className="navbar-cta" onClick={() => scrollToSection("contact")}>
        Let&apos;s Connect
      </button>

      <button
        className="mobile-menu-button"
        onClick={() => {
          if (isOpen) {
            closeMobileMenu();
          } else {
            setIsOpen(true);
          }
        }}
        aria-label="Toggle menu"
      >
        {isOpen ? <X size={22} /> : <Menu size={22} />}
      </button>

      {isOpen && (
        <nav className={`mobile-menu ${isClosing ? "closing" : ""}`}>
          {navItems.map((item) => (
            <button
              className="mobile-menu-item"
              key={item.href}
              onClick={() => scrollToSection(item.href)}
            >
              {item.label}
            </button>
          ))}

          <Link className="mobile-menu-item mobile-menu-link" to="/lab" onClick={closeMobileMenu}>
            Lab
          </Link>
        </nav>
      )}
    </header>
  );
}

export default Navbar;