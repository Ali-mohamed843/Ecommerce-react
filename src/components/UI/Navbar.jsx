import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  const { totalQuantity } = useSelector((state) => state.cart);

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
          <Link to="/deals" className={linkClass("/deals")}>
            Deals
          </Link>
          <Link to="/about-us" className={linkClass("/about-us")}>
            About Us
          </Link>
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

          <Link to="/cart" className={linkClass("/cart")}>
            <div className="relative">
              <span className="material-symbols-outlined text-primary">
                shopping_cart
              </span>

              <span className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-[10px] font-bold text-white">
                {totalQuantity}
              </span>
            </div>
          </Link>

          <Link
            to="/login"
            className="hidden sm:inline text-sm font-semibold text-on-surface-variant hover:text-primary transition-colors"
          >
            Sign In
          </Link>
          <Link
            to="/register"
            className="hidden sm:inline bg-primary text-on-primary px-4 py-1.5 rounded-lg text-sm font-semibold hover:opacity-80 transition-opacity"
          >
            Register
          </Link>
          <Link
            to="/login"
            className="flex items-center justify-center p-1 sm:hidden hover:bg-surface-variant rounded-full transition-colors cursor-pointer"
          >
            <span className="material-symbols-outlined text-primary">
              person
            </span>
          </Link>
        </div>
      </div>
    </header>
  );
}
