import React, { useState } from "react";
import { PORTFOLIO_DATA } from "../data";
import { PortfolioItem } from "../types";
import { Eye, ChevronLeft, ChevronRight, X, Sparkles } from "lucide-react";

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const categories = [
    "All",
    "Bridal Makeup",
    "Hair Styling",
    "Nail Art",
    "Skin Care",
    "Salon Interior"
  ];

  // Filter items based on active category
  const filteredItems = activeCategory === "All"
    ? PORTFOLIO_DATA
    : PORTFOLIO_DATA.filter(item => item.category === activeCategory);

  const openLightbox = (itemIndex: number) => {
    setLightboxIndex(itemIndex);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const showNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex + 1) % filteredItems.length);
  };

  const showPrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex - 1 + filteredItems.length) % filteredItems.length);
  };

  return (
    <section id="portfolio" className="py-24 bg-neutral-50 dark:bg-neutral-900/40 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-gold">OUR COUTURE PORTFOLIO</span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold mt-2 text-neutral-900 dark:text-neutral-100">
            Artistry & Transformation
          </h2>
          <p className="text-neutral-500 dark:text-neutral-400 mt-3 font-light text-sm max-w-lg mx-auto">
            Gaze upon our masterpiece lookbook depicting genuine client transformations, hair couture, intricate extensions, and our gorgeous salon lounge.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-brand-pink to-brand-gold mx-auto mt-4 rounded-full" />
        </div>

        {/* Filter Navigation */}
        <div className="flex flex-wrap justify-center gap-2 mb-10" id="portfolio-tabs">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setActiveCategory(cat);
                setLightboxIndex(null); // Clear lightbox state during categories swap
              }}
              className={`px-4.5 py-2 rounded-full text-xs font-bold uppercase tracking-widest border transition-all duration-300 cursor-pointer ${
                activeCategory === cat
                  ? "bg-brand-gold border-brand-gold text-white shadow-md"
                  : "bg-white dark:bg-neutral-950 border-neutral-200 dark:border-neutral-850 text-neutral-600 dark:text-neutral-350 hover:border-brand-pink hover:text-brand-gold"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid (Aspect Masonry Layout Style) */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6" id="portfolio-grid">
          {filteredItems.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => openLightbox(idx)}
              className="relative rounded-3xl overflow-hidden shadow-sm group hover:shadow-xl hover:-translate-y-1 duration-500 cursor-pointer h-80 bg-neutral-200 dark:bg-neutral-900 border border-neutral-150 dark:border-neutral-850"
            >
              {/* Photo */}
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              
              {/* Elegant Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/75 via-neutral-900/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6" />

              {/* Floating icon */}
              <div className="absolute top-4 right-4 p-2 bg-white/20 backdrop-blur-md rounded-full text-white scale-75 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300">
                <Eye className="h-5 w-5" />
              </div>

              {/* Floating Title details */}
              <div className="absolute bottom-6 left-6 right-6 text-white text-left translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                <span className="text-[9px] uppercase tracking-widest text-brand-pink font-extrabold px-2 py-0.5 bg-neutral-900/40 backdrop-blur-xs rounded-full border border-white/10 inline-block mb-1">
                  {item.category}
                </span>
                <h3 className="font-serif text-lg font-bold leading-tight mt-1">{item.title}</h3>
                <p className="text-[10px] text-neutral-305 mt-1 font-light">Tap to enlarge visual details</p>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Preview Carousel Overlay */}
        {lightboxIndex !== null && filteredItems[lightboxIndex] && (
          <div
            onClick={closeLightbox}
            className="fixed inset-0 z-56 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-fade-in"
            id="portfolio-lightbox"
          >
            {/* Upper controls HUD */}
            <div className="absolute top-6 left-6 right-6 flex items-center justify-between text-neutral-300 z-10">
              <div className="flex items-center space-x-2">
                <Sparkles className="h-5 w-5 text-brand-pink" />
                <span className="font-serif text-lg font-bold tracking-wider text-white">
                  Beautician Curated Lookbook
                </span>
              </div>
              <button
                onClick={closeLightbox}
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-opacity focus:outline-none focus:ring-1 focus:ring-brand-gold"
                id="close-lightbox-btn"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            {/* Carousel Previous arrow */}
            <button
              onClick={showPrev}
              className="absolute left-4 p-3 rounded-full bg-white/10 hover:bg-brand-pink/20 text-white hover:text-brand-gold transition-colors focus:outline-none"
              aria-label="Previous portfolio photo"
            >
              <ChevronLeft className="h-8 w-8" />
            </button>

            {/* Enlarge Frame Container */}
            <div
              onClick={(e) => e.stopPropagation()} // Stop clicking image from closing lightbox
              className="max-w-4xl max-h-[75vh] flex flex-col items-center relative text-center"
            >
              <img
                src={filteredItems[lightboxIndex].image}
                alt={filteredItems[lightboxIndex].title}
                className="max-w-full max-h-[65vh] object-contain rounded-2xl border border-white/10 select-none shadow-2xl scale-in-out transition-transform duration-300"
                referrerPolicy="no-referrer"
              />

              {/* Lower HUD text details */}
              <div className="mt-4 bg-black/45 backdrop-blur-md border border-white/5 py-3 px-6 rounded-2xl max-w-lg">
                <span className="text-[10px] uppercase tracking-widest text-brand-pink font-bold">
                  {filteredItems[lightboxIndex].category} Look
                </span>
                <h3 className="font-serif text-lg font-bold text-white leading-tight mt-1">
                  {filteredItems[lightboxIndex].title}
                </h3>
              </div>
            </div>

            {/* Carousel Next arrow */}
            <button
              onClick={showNext}
              className="absolute right-4 p-3 rounded-full bg-white/10 hover:bg-brand-pink/20 text-white hover:text-brand-gold transition-colors focus:outline-none"
              aria-label="Next portfolio photo"
            >
              <ChevronRight className="h-8 w-8" />
            </button>

            {/* Mini HUD Index status */}
            <span className="absolute bottom-6 left-1/2 -translate-x-1/2 text-neutral-450 text-[11px] font-mono select-none bg-white/5 px-3 py-1 rounded-full border border-white/5">
              IMAGE {lightboxIndex + 1} OF {filteredItems.length}
            </span>
          </div>
        )}

      </div>
    </section>
  );
}
