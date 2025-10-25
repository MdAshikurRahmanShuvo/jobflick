import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isBgOff, setIsBgOff] = useState(false);
  const menuRef = useRef();
  const navItems = ["Home", "Post a Job", "Find CVs", "About Us", "Contact Us"];

  // Close menu on click outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuOpen && menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [menuOpen]);

  // Remove button background on 768-850px
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && window.innerWidth <= 850) {
        setIsBgOff(true);
      } else {
        setIsBgOff(false);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className="w-full bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto max-w-[1400px] px-3 py-1 flex items-center justify-between">
        {/* Logo Section */}
        <div className="flex items-center space-x-2">
          <img
            src="/logo.png"
            alt="JobFlick Logo"
            className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-18 lg:h- object-contain"
          />
        </div>

        {/* Hamburger Button (Mobile Only) */}
        <button
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? (
            <span className="text-xl sm:text-2xl font-bold">&times;</span>
          ) : (
            <span className="text-xl sm:text-2xl font-bold">&#9776;</span>
          )}
        </button>

        {/* Desktop / Tablet Nav */}
        <nav className="hidden md:flex items-center space-x-3 lg:space-x-4 xl:space-x-6 ">
          {navItems.map((item) => {
            // Contact Us route
            const route =
              item === "Home"
                ? "/"
                : item === "Contact Us"
                ? "/contact-us"
                : `/${item.toLowerCase().replace(/\s+/g, "-")}`;

            return (
              <Link
                key={item}
                to={route}
                className="text-gray-700 font-medium hover:text-blue-600 transition text-sm sm:text-base"
              >
                {item}
              </Link>
            );
          })}

          <div className="w-4 sm:w-8 md:w-12" />

          {/* Buttons */}
          <div className="flex items-center space-x-2 sm:space-x-3">
            <Link
              to="/signup"
              className={`px-2 sm:px-3 py-1 sm:py-1.5 rounded-full transition text-sm sm:text-base ${
                isBgOff
                  ? "bg-transparent hover:bg-blue-100 text-blue-600"
                  : "bg-blue-600 text-white hover:bg-blue-700"
              }`}
            >
              Sign Up
            </Link>
            <Link
              to="/login"
              className={`px-2 sm:px-3 py-1 sm:py-1.5 rounded-full transition text-sm sm:text-base ${
                isBgOff
                  ? "bg-transparent hover:bg-green-100 text-green-600"
                  : "bg-green-600 text-white hover:bg-green-700"
              }`}
            >
              Login
            </Link>
          </div>
        </nav>
      </div>

      {/* Mobile Right Side Menu */}
<div
  ref={menuRef}
  className={`fixed top-0 right-0 h-full w-1/2 shadow-lg transform transition-transform duration-300 z-50 ${
    menuOpen ? "translate-x-0 bg-blue-50" : "translate-x-full bg-gray-50"
  }`}
>
  <nav className="flex flex-col mt-14 px-3 sm:px-5 space-y-2 sm:space-y-3">
    {[
      "Home",
      "Post a Job",
      "Find CVs",
      "About Us",
      "Contact Us",
      "Sign Up",
      "Login",
    ].map((item) => {
      const route =
        item === "Home"
          ? "/"
          : item === "Contact Us"
          ? "/contact-us"
          : item === "Sign Up"
          ? "/signup"
          : item === "Login"
          ? "/login"
          : `/${item.toLowerCase().replace(/\s+/g, "-")}`;

      return (
        <Link
          key={item}
          to={route}
          onClick={() => setMenuOpen(false)}
          className="text-gray-800 text-sm sm:text-base font-medium px-3 py-2 rounded hover:bg-blue-100 transition"
        >
          {item}
        </Link>
      );
    })}
  </nav>
</div>


    </header>
  );
};

export default Navbar;
