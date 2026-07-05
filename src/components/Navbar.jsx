import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const linkClass = (path) =>
    path === pathname
      ? "text-primary font-bold border-b-2 border-primary pb-1"
      : "text-on-surface-variant hover:text-primary transition-colors duration-200";

  return (
    <header
      className={`bg-surface-container-lowest w-full top-0 sticky z-50 transition-shadow ${
        scrolled ? "shadow-md" : "border-b border-outline-variant"
      }`}
    >
      <div className="flex justify-between items-center px-6 py-2 max-w-7xl mx-auto">
        <Link
          to="/"
          className="text-2xl font-bold text-primary"
          style={{ fontFamily: "Inter, sans-serif" }}
        >
          LuxeRetail
        </Link>

        <nav className="hidden md:flex items-center space-x-6 text-sm font-semibold tracking-wide">
          <Link to="/" className={linkClass("/")}>
            New Arrivals
          </Link>
          <Link to="/shop" className={linkClass("/shop")}>
            Shop
          </Link>
          <a
            className="text-on-surface-variant hover:text-primary transition-colors duration-200"
            href="#"
          >
            Deals
          </a>
          <a
            className="text-on-surface-variant hover:text-primary transition-colors duration-200"
            href="#"
          >
            About Us
          </a>
        </nav>

        <div className="flex items-center space-x-4">
          <div className="relative hidden lg:block">
            <input
              className="bg-surface-container-low border border-outline-variant rounded-lg px-4 py-1 text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary w-64"
              placeholder="Search products..."
              type="text"
            />
            <span className="material-symbols-outlined absolute right-2 top-1/2 -translate-y-1/2 text-on-surface-variant">
              search
            </span>
          </div>

          <button className="flex items-center justify-center p-1 hover:bg-surface-variant rounded-full transition-colors cursor-pointer">
            <span className="material-symbols-outlined text-primary">
              shopping_cart
            </span>
          </button>

          <button className="flex items-center justify-center p-1 hover:bg-surface-variant rounded-full transition-colors cursor-pointer">
            <span className="material-symbols-outlined text-primary">
              person
            </span>
          </button>
        </div>
      </div>
    </header>
  );
}