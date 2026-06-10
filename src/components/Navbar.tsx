import React, { useState, useEffect } from "react";
import { Sparkles, Menu, X, Sun, Moon } from "lucide-react";

interface NavbarProps {
  onBookClick: () => void;
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

export default function Navbar({ onBookClick, isDarkMode, toggleDarkMode }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Why Us", href: "#why-us" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Team", href: "#team" },
    { name: "Pricing", href: "#pricing" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Blog", href: "#blog" },
    { name: "FAQ", href: "#faq" },
    { name: "Contact", href: "#contact" }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Simple active link highlight on scroll
      for (const link of navLinks) {
        const id = link.href.slice(1);
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (href: string) => {
    setIsOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "glass-navbar shadow-md py-3"
          : "bg-transparent py-5 border-b border-white/5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            className="flex items-center space-x-2 group focus:outline-none"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick("#home");
            }}
          >
            <div className="p-2 rounded-full bg-brand-pink/20 text-brand-gold group-hover:scale-110 transition-transform duration-300">
              <Sparkles className="h-6 w-6" />
            </div>
            <span className="font-serif text-2xl font-bold tracking-wider text-neutral-800 dark:text-neutral-100 group-hover:text-brand-gold transition-colors duration-300">
              Beautician
            </span>
          </a>

          {/* Large Screen Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`px-3 py-2 rounded-md text-xs font-semibold tracking-wider uppercase transition-all duration-300 ${
                  activeSection === link.href.slice(1)
                    ? "text-brand-gold border-b-2 border-brand-gold"
                    : "text-neutral-600 dark:text-neutral-300 hover:text-brand-gold"
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(link.href);
                }}
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="hidden lg:flex items-center space-x-4">
            {/* Dark Mode Switch */}
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-800 text-neutral-600 dark:text-neutral-300 transition-colors"
              aria-label="Toggle dark mode"
              id="theme-toggler"
            >
              {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>

            {/* CTA Button */}
            <button
              onClick={onBookClick}
              className="relative px-5 py-2.5 bg-gradient-to-r from-brand-gold to-brand-pink text-white rounded-full text-xs font-bold uppercase tracking-widest shadow-lg hover:shadow-brand-gold/30 hover:scale-105 transition-all duration-300 cursor-pointer"
              id="nav-book-btn"
            >
              Book Appointment
            </button>
          </div>

          {/* Mobile Right Nav (Hamburger + Theme Toggle) */}
          <div className="lg:hidden flex items-center space-x-3">
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-800 text-neutral-600 dark:text-neutral-400"
              aria-label="Toggle dark mode"
              id="mobile-theme-toggler"
            >
              {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-neutral-700 dark:text-neutral-300 hover:text-brand-gold transition-colors focus:outline-none"
              aria-label="Open primary menu"
              id="hamburger-menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`fixed inset-y-0 left-0 z-40 w-72 glass-panel shadow-2xl p-6 flex flex-col justify-between transform transition-transform duration-300 ease-in-out lg:hidden ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div>
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center space-x-2">
              <Sparkles className="h-5 w-5 text-brand-gold" />
              <span className="font-serif text-xl font-bold tracking-wider text-neutral-800 dark:text-neutral-100">
                Beautician
              </span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1.5 rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-800 text-neutral-500"
              id="close-mobile-menu"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`py-1 text-sm font-semibold uppercase tracking-wider transition-colors ${
                  activeSection === link.href.slice(1)
                    ? "text-brand-gold"
                    : "text-neutral-600 dark:text-neutral-300 hover:text-brand-gold"
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(link.href);
                }}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>

        <div className="pt-6 border-t border-neutral-200 dark:border-neutral-800 flex flex-col space-y-4">
          <button
            onClick={() => {
              setIsOpen(false);
              onBookClick();
            }}
            className="w-full py-3 bg-gradient-to-r from-brand-gold to-brand-pink text-white rounded-full font-bold uppercase text-xs tracking-widest text-center shadow-md active:scale-95"
            id="mobile-nav-book-btn"
          >
            Book Appointment
          </button>
        </div>
      </div>

      {/* Mobile Drawer Overlay */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 z-35 bg-black/35 backdrop-blur-xs lg:hidden"
        />
      )}
    </nav>
  );
}
