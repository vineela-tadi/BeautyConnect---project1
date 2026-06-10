import React, { useState, useEffect, useRef } from "react";
import { TESTIMONIALS_DATA } from "../data";
import { Star, ChevronLeft, ChevronRight, Quote, Sparkles } from "lucide-react";

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const autoPlayTimer = useRef<NodeJS.Timeout | null>(null);

  const testimonials = TESTIMONIALS_DATA;

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    if (!isPaused) {
      autoPlayTimer.current = setInterval(() => {
        nextSlide();
      }, 4000); // Speed: Auto slide every 4 seconds
    } else {
      if (autoPlayTimer.current) clearInterval(autoPlayTimer.current);
    }

    return () => {
      if (autoPlayTimer.current) clearInterval(autoPlayTimer.current);
    };
  }, [isPaused]);

  return (
    <section
      id="testimonials"
      className="py-24 bg-white dark:bg-neutral-950 transition-colors duration-300 relative overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Visual glowing orbs background */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-brand-pink/5 rounded-full blur-3xl" />
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-brand-gold/5 rounded-full blur-3xl-slow" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-gold">RATED 4.9 STARS GLOBALLY</span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold mt-2 text-neutral-900 dark:text-neutral-100">
            Client Testimonials
          </h2>
          <p className="text-neutral-500 dark:text-neutral-400 mt-3 font-light text-sm max-w-lg mx-auto">
            Read authentic reviews from brides, beauty bloggers, and corporate professionals who trust us with their aesthetic identity.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-brand-pink to-brand-gold mx-auto mt-4 rounded-full" />
        </div>

        {/* Carousel Outer Stage */}
        <div className="relative max-w-4xl mx-auto px-4 sm:px-12 mt-12" id="testimonial-carousel">
          
          {/* Glass Card Container showing ACTIVE testimonial */}
          <div className="glass-panel p-8 sm:p-12 rounded-3xl border border-neutral-200/50 dark:border-white/5 override-shadow shadow-xl flex flex-col md:flex-row items-center md:items-start gap-8 min-h-[320px] transition-all duration-500 relative">
            
            {/* Visual Quote Icon Background badge */}
            <div className="absolute top-8 right-8 text-brand-pink/20 selection:bg-none">
              <Quote className="h-20 w-20 transform rotate-180" />
            </div>

            {/* Profile Large Photo */}
            <div className="relative flex-shrink-0">
              <div className="absolute inset-0 border-2 border-brand-pink rounded-2xl rotate-3 scale-[1.03] z-1" />
              <img
                src={testimonials[activeIndex].image}
                alt={testimonials[activeIndex].name}
                className="w-24 h-24 sm:w-32 sm:h-32 object-cover rounded-2xl relative z-10 shadow-lg"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-2 left-2 p-1 bg-brand-gold text-white rounded-full z-20 shadow-md">
                <Sparkles className="h-3.5 w-3.5 animate-spin-slow" />
              </div>
            </div>

            {/* Content Review Area */}
            <div className="text-center md:text-left flex-1 flex flex-col justify-between">
              <div>
                {/* Stars Indicator */}
                <div className="flex justify-center md:justify-start items-center space-x-1 text-amber-400 mb-4">
                  {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current" />
                  ))}
                </div>

                {/* Core review paragraph */}
                <p className="text-neutral-700 dark:text-neutral-300 font-light italic text-sm sm:text-base leading-relaxed">
                  "{testimonials[activeIndex].review}"
                </p>
              </div>

              {/* Author Metadata */}
              <div className="mt-6 pt-6 border-t border-neutral-100 dark:border-neutral-900">
                <h4 className="font-serif text-lg font-bold text-neutral-850 dark:text-neutral-100">
                  {testimonials[activeIndex].name}
                </h4>
                <p className="text-xs uppercase tracking-widest font-mono font-semibold text-brand-gold mt-1">
                  {testimonials[activeIndex].role}
                </p>
              </div>
            </div>
            
          </div>

          {/* Controls: Left Arrow */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-3 sm:-translate-x-6 p-2 rounded-full border border-neutral-200 bg-white dark:bg-neutral-950 dark:border-neutral-800 text-neutral-600 dark:text-neutral-300 hover:text-brand-gold hover:border-brand-pink shadow-md z-20 hover:scale-110 active:scale-95 transition-all cursor-pointer"
            aria-label="Previous slide feedback"
            id="testimonial-prev-arrow"
          >
            <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6" />
          </button>

          {/* Controls: Right Arrow */}
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-3 sm:translate-x-6 p-2 rounded-full border border-neutral-200 bg-white dark:bg-neutral-950 dark:border-neutral-800 text-neutral-600 dark:text-neutral-300 hover:text-brand-gold hover:border-brand-pink shadow-md z-20 hover:scale-110 active:scale-95 transition-all cursor-pointer"
            aria-label="Next slide feedback"
            id="testimonial-next-arrow"
          >
            <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6" />
          </button>
        </div>

        {/* Dynamic navigation dots indicators underneath */}
        <div className="flex justify-center items-center space-x-2.5 mt-8">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                activeIndex === i
                  ? "w-8 bg-brand-gold"
                  : "w-2.5 bg-neutral-300 dark:bg-neutral-800 hover:bg-brand-pink"
              }`}
              aria-label={`Jump to slide page indicator ${i + 1}`}
            />
          ))}
        </div>

        {/* Client feedback prompt */}
        <div className="mt-12 text-center text-[11px] text-neutral-400 dark:text-neutral-500 font-mono">
          *ALL REVIEWS ARE VERIFIED THROUGH EXTERNAL CUSTOMER FEEDBACK SURVEYS. HOVER SLIDES TO PAUSE SPEED INTERLOCKS.
        </div>

      </div>
    </section>
  );
}
