import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import { ShoppingBagIcon } from "@heroicons/react/24/solid";

const LanguageIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3 5h12M9 3v2m0 16v2M3 19h6M16 3.542a4 4 0 010 5.916m0 0a4 4 0 01-5.916 0m5.916 0a4 4 0 01-5.916 0M3 12a9 9 0 1118 0 9 9 0 01-18 0z"
    />
  </svg>
);

const TopNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
  const { t, i18n } = useTranslation();

  const navLinks = [
    { href: "#contact", label: t("nav.contact") },
    { href: "#about", label: t("nav.about") },
    { href: "#products", label: t("nav.services") },
    { href: "#home", label: t("nav.home") },
  ];

  const changeLanguage = (lng) => {
    if (i18n.language === lng) return;
    i18n.changeLanguage(lng);
    document.documentElement.dir = lng === "ku" ? "rtl" : "ltr";
    setIsLangMenuOpen(false);
  };

  const languages = {
    ku: "کوردی",
    en: "English",
  };

  // Effect to handle scroll detection for a subtle background change
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.documentElement.lang = i18n.language;
    document.documentElement.dir = i18n.dir(i18n.language);
  }, [i18n.language]);

  return (
    // Set the overall direction to right-to-left
    // The dir attribute will be managed by the language change
    <div>
      <nav
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-slate-900/80 backdrop-blur-lg border-b border-slate-700/60"
            : "bg-slate-900"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo and Site Name */}
            <div className="flex items-center">
              <Link to={"/"} className="flex items-center gap-2 text-white">
                <ShoppingBagIcon className="h-8 w-8 text-cyan-400" />
                <span className="font-bold text-xl">{t("nav.brand")}</span>
              </Link>
            </div>

            {/* Desktop Navigation Links with Animation */}
            <div className="hidden md:flex md:items-center md:gap-x-1">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="relative text-gray-300 hover:text-cyan-400 px-3 py-2 text-md font-medium transition-colors duration-300 group"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-cyan-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"></span>
                </a>
              ))}
              {/* Language Dropdown */}
              <div className="relative ml-4">
                <button
                  onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                  className="flex items-center gap-2 text-gray-300 hover:text-cyan-400 px-3 py-2 text-md font-medium transition-colors duration-300"
                >
                  <LanguageIcon />
                  <span>{languages[i18n.language]}</span>
                </button>
                <AnimatePresence>
                  {isLangMenuOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="absolute top-full right-0 mt-2 w-32 bg-slate-800 rounded-md shadow-lg ring-1 ring-black ring-opacity-5"
                    >
                      <div
                        className="py-1"
                        role="menu"
                        aria-orientation="vertical"
                        aria-labelledby="options-menu"
                      >
                        <button
                          onClick={() => changeLanguage("ku")}
                          className="w-full text-right block px-4 py-2 text-sm text-gray-300 hover:bg-slate-700 hover:text-white"
                          role="menuitem"
                        >
                          کوردی
                        </button>
                        <button
                          onClick={() => changeLanguage("en")}
                          className="w-full text-left block px-4 py-2 text-sm text-gray-300 hover:bg-slate-700 hover:text-white"
                          role="menuitem"
                        >
                          English
                        </button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* Hamburger Menu Button for Mobile */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cyan-400"
                aria-controls="mobile-menu"
                aria-expanded={isMenuOpen}
              >
                <span className="sr-only">Open main menu</span>
                {/* Animated Hamburger/Close Icon */}
                <div className="w-6 h-6 flex flex-col justify-around">
                  <span
                    className={`block w-full h-0.5 bg-current transform transition duration-300 ease-in-out ${
                      isMenuOpen ? "rotate-45 translate-y-1.5" : ""
                    }`}
                  ></span>
                  <span
                    className={`block w-full h-0.5 bg-current transition duration-300 ease-in-out ${
                      isMenuOpen ? "opacity-0" : ""
                    }`}
                  ></span>
                  <span
                    className={`block w-full h-0.5 bg-current transform transition duration-300 ease-in-out ${
                      isMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
                    }`}
                  ></span>
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu - Animated Slide Down */}
        <div
          className={`transform transition-all duration-500 ease-in-out md:hidden ${
            isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          } overflow-hidden`}
          id="mobile-menu"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-slate-900/95">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-gray-300 hover:bg-slate-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)} // Close menu on click
              >
                {link.label}
              </a>
            ))}
            {/* Mobile Language Switcher */}
            <div className="relative pt-4 border-t border-slate-700">
              <button
                onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                className="w-full flex justify-center items-center gap-2 text-gray-300 hover:bg-slate-700 hover:text-white px-3 py-2 rounded-md text-base font-medium transition-colors"
              >
                <LanguageIcon />
                <span>{t("nav.language", "Language")}</span>
              </button>
              <AnimatePresence>
                {isLangMenuOpen && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="overflow-hidden bg-slate-800 rounded-md mt-1"
                  >
                    <div
                      className="py-1"
                      role="menu"
                      aria-orientation="vertical"
                    >
                      <button
                        onClick={() => changeLanguage("ku")}
                        className="w-full text-center block px-4 py-2 text-sm text-gray-300 hover:bg-slate-700 hover:text-white"
                        role="menuitem"
                      >
                        کوردی
                      </button>
                      <button
                        onClick={() => changeLanguage("en")}
                        className="w-full text-center block px-4 py-2 text-sm text-gray-300 hover:bg-slate-700 hover:text-white"
                        role="menuitem"
                      >
                        English
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default TopNavbar;
