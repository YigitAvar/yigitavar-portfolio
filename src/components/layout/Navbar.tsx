import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const navItems = [
  { label: "About", href: "about" },
  { label: "Skills", href: "skills" },
  { label: "Projects", href: "projects" },
  { label: "Experience", href: "experience" },
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

  const scrollToSection = (sectionId: string) => {
    const goToSection = () => {
      const section = document.getElementById(sectionId);

      if (!section) return;

      const navbarOffset = 110;
      const sectionPosition =
        section.getBoundingClientRect().top + window.scrollY - navbarOffset;

      window.scrollTo({
        top: sectionPosition,
        behavior: "smooth",
      });
    };

    if (location.pathname !== "/") {
      navigate("/");

      window.setTimeout(() => {
        goToSection();
      }, 120);
    } else {
      goToSection();
    }

    if (isOpen) {
      closeMobileMenu();
    }
  };

  const goHome = () => {
    if (location.pathname !== "/") {
      navigate("/");
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }

    if (isOpen) {
      closeMobileMenu();
    }
  };

  return (
    <header className="navbar">
      <button className="navbar-logo" onClick={goHome} aria-label="Go to homepage">
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