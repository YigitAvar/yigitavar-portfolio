import { Menu, X } from "lucide-react";
import { useState } from "react";

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

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);

    if (!section) return;

    const navbarOffset = 110;
    const sectionPosition =
      section.getBoundingClientRect().top + window.scrollY - navbarOffset;

    window.scrollTo({
      top: sectionPosition,
      behavior: "smooth",
    });

    setIsClosing(true);

    window.setTimeout(() => {
      setIsOpen(false);
      setIsClosing(false);
    }, 220);
  };

  return (
    <header className="navbar">
      <button
        className="navbar-logo"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Go to top"
      >
        Yiğit<span>Avar</span>
      </button>

      <nav className="navbar-links">
        {navItems.map((item) => (
          <button key={item.href} onClick={() => scrollToSection(item.href)}>
            {item.label}
          </button>
        ))}
      </nav>

      <button className="navbar-cta" onClick={() => scrollToSection("contact")}>
        Let&apos;s Connect
      </button>

      <button
        className="mobile-menu-button"
        onClick={() => {
          if (isOpen) {
            setIsClosing(true);
            window.setTimeout(() => {
              setIsOpen(false);
              setIsClosing(false);
            }, 220);
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
            <button key={item.href} onClick={() => scrollToSection(item.href)}>
              {item.label}
            </button>
          ))}
        </nav>
      )}
    </header>
  );
}

export default Navbar;