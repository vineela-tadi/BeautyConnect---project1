import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import WhyChooseUs from "./components/WhyChooseUs";
import Portfolio from "./components/Portfolio";
import Team from "./components/Team";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";
import Appointment from "./components/Appointment";
import Blog from "./components/Blog";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { ArrowUp } from "lucide-react";

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [preSelectedService, setPreSelectedService] = useState<string>("");
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Initialize Dark Mode based on client preferences or local values
  useEffect(() => {
    const savedMode = localStorage.getItem("beautician-theme");
    if (savedMode === "dark") {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      setIsDarkMode(false);
      document.documentElement.classList.remove("dark");
    }

    // Scroll listener for floating Scroll-To-Top button
    const toggleVisibility = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const toggleDarkMode = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("beautician-theme", "light");
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("beautician-theme", "dark");
      setIsDarkMode(true);
    }
  };

  // Safe orchestrator to handle instant anchor scrolls with parameter passing
  const handleScrollToBooking = (serviceName?: string) => {
    if (serviceName) {
      setPreSelectedService(serviceName);
    }
    const target = document.querySelector("#appointment");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleScrollToServices = () => {
    const target = document.querySelector("#services");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <div className="bg-[#FAF9F9] dark:bg-[#0B0B0B] text-neutral-850 dark:text-neutral-100 min-h-screen transition-colors duration-300">
      
      {/* 1. Glass Sticky Navbar */}
      <Navbar
        onBookClick={() => handleScrollToBooking()}
        isDarkMode={isDarkMode}
        toggleDarkMode={toggleDarkMode}
      />

      {/* 2. Luxury Hero Section */}
      <Hero
        onBookClick={() => handleScrollToBooking()}
        onServicesClick={handleScrollToServices}
      />

      {/* 3. About Company Heritage */}
      <About />

      {/* 4. Treatments services collections with quick book */}
      <Services
        onBookClick={(serviceName) => handleScrollToBooking(serviceName)}
      />

      {/* 5. Core why choose us standards */}
      <WhyChooseUs />

      {/* 6. Filterable transformations portfolio lookbook */}
      <Portfolio />

      {/* 7. Elite creative styling guild (Team) */}
      <Team />

      {/* 8. Exclusive value-pack packages */}
      <Pricing
        onBookClick={(packageName) => handleScrollToBooking(packageName)}
      />

      {/* 9. Verified sliding testimonials carousel */}
      <Testimonials />

      {/* 10. Booking form with validation receipts */}
      <Appointment
        preSelectedService={preSelectedService}
        onSuccessReset={() => setPreSelectedService("")}
      />

      {/* 11. Editorial blog postings and reader */}
      <Blog />

      {/* 12. Accordion FAQs */}
      <FAQ />

      {/* 13. Direct inquiry cards and interactive maps */}
      <Contact />

      {/* 14. Professional multi-column Footer */}
      <Footer />

      {/* 15. Intelligent Scroll-to-Top Float button */}
      {showScrollTop && (
        <button
          onClick={handleScrollToTop}
          className="fixed bottom-6 right-6 p-3 bg-gradient-to-r from-brand-gold to-brand-pink text-white rounded-full z-40 shadow-xl overflow-hidden active:scale-90 hover:scale-110 active:translate-y-1 transition-all duration-300 hover:shadow-brand-pink/25 cursor-pointer ring-1 ring-white/10"
          aria-label="Glissade scroll back to top"
          id="scroll-to-top-hud"
        >
          <ArrowUp className="h-5 w-5 animate-bounce" />
        </button>
      )}

    </div>
  );
}
