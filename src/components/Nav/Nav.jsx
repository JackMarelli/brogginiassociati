// Nav.jsx
import { useState, useEffect } from "react";
import Button from "../../components/Button/Button";
import NavOption from "../../components/NavOption/NavOption";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const location = useLocation();

  // Handle screen resize
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    // Check on mount
    checkIfMobile();

    // Add event listener
    window.addEventListener("resize", checkIfMobile);

    // Cleanup
    return () => window.removeEventListener("resize", checkIfMobile);
  }, []);

  // Close menu when transitioning from mobile to desktop
  useEffect(() => {
    if (!isMobile) {
      setIsMenuOpen(false);
    }
  }, [isMobile]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  return (
    <header className="fixed top-0 left-0 right-0 w-full bg-white z-40 flex flex-row justify-between items-center px-6 lg:px-16 py-4 shadow-md">
      <Link to="/">
        <img
          className="w-12 lg:w-16 aspect-square"
          src="/assets/logo/black.png"
          alt="Logo di Broggini Associati"
        />
      </Link>

      {/* Desktop Navigation */}
      <div className="hidden lg:flex gap-8">
        <NavOption
          text="Lo Studio"
          to="studio"
          currentPath={location.pathname}
        />
        <NavOption
          text="I Professionisti"
          to="professionisti"
          currentPath={location.pathname}
        />
        <NavOption
          text="Servizi"
          to="servizi"
          currentPath={location.pathname}
        />
        <NavOption
          text="Compliance"
          to="compliance"
          currentPath={location.pathname}
        />
        <NavOption text="Blog" to="blog" currentPath={location.pathname} />
      </div>

      <div className="hidden lg:block">
        <Button
          text="Contattaci"
          onClick={() => {
            window.scrollTo(0, 9999);
          }}
        />
      </div>

      {/* Mobile Menu Button */}
      <button
        className="lg:hidden flex flex-col justify-center items-center w-10 h-10 focus:outline-none"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
      >
        <span
          className={`block w-6 h-0.5 bg-black transition-transform duration-300 ease-in-out ${
            isMenuOpen ? "rotate-45 translate-y-1" : ""
          }`}
        ></span>
        <span
          className={`block w-6 h-0.5 bg-black mt-1.5 transition-opacity duration-300 ease-in-out ${
            isMenuOpen ? "opacity-0" : ""
          }`}
        ></span>
        <span
          className={`block w-6 h-0.5 bg-black mt-1.5 transition-transform duration-300 ease-in-out ${
            isMenuOpen ? "-rotate-45 -translate-y-1" : ""
          }`}
        ></span>
      </button>

      {/* Mobile Overlay Menu */}
      <div
        className={`fixed top-0 left-0 right-0 bottom-0 bg-white z-50 pt-24 px-6 transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-y-0" : "-translate-y-full"
        } lg:hidden`}
      >
        {/* Close Button */}
        <button
          className="absolute top-4 right-6 w-10 h-10 flex items-center justify-center focus:outline-none"
          a
          onClick={() => setIsMenuOpen(false)}
          aria-label="Close menu"
        >
          <span className="block w-6 h-0.5 bg-black rotate-45 absolute"></span>
          <span className="block w-6 h-0.5 bg-black -rotate-45 absolute"></span>
        </button>

        <div className="flex flex-col items-center gap-8 text-xl">
          <NavOption
            text="Lo Studio"
            to="studio"
            onClick={() => setIsMenuOpen(false)}
          />
          <NavOption
            text="I Professionisti"
            to="professionisti"
            onClick={() => setIsMenuOpen(false)}
          />
          <NavOption
            text="Servizi"
            to="servizi"
            onClick={() => setIsMenuOpen(false)}
          />
          <NavOption
            text="Compliance"
            to="compliance"
            onClick={() => setIsMenuOpen(false)}
          />
          <NavOption
            text="Blog"
            to="blog"
            onClick={() => setIsMenuOpen(false)}
          />
          <div className="mt-4">
            <Button text="Contattaci" onClick={() => setIsMenuOpen(false)} />
          </div>
        </div>
      </div>
    </header>
  );
}
