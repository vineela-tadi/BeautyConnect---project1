import React, { useState } from "react";
import { SERVICES_DATA } from "../data";
import { Service } from "../types";
import { Sparkles, Calendar, Clock, Heart, Shield, Check, X } from "lucide-react";

interface ServicesProps {
  onBookClick: (serviceName?: string) => void;
}

export default function Services({ onBookClick }: ServicesProps) {
  const [filter, setFilter] = useState<"all" | "makeup" | "hair" | "skin" | "nail" | "spa">("all");
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  const categories = [
    { value: "all", label: "All Treatments" },
    { value: "makeup", label: "Makeup & Brows" },
    { value: "hair", label: "Hair Couture" },
    { value: "skin", label: "Advanced Skin" },
    { value: "nail", label: "Nails Art" },
    { value: "spa", label: "Spa Luxury" }
  ];

  const filteredServices = filter === "all"
    ? SERVICES_DATA
    : SERVICES_DATA.filter(s => s.category === filter);

  // Map service names to typical session durations and styling details (for details modal)
  const getServiceDetails = (service: Service) => {
    switch (service.category) {
      case "makeup":
        return {
          duration: "90 - 150 Mins",
          includes: ["Custom skin priming oil massage", "HD Camera-Ready Foundation Layer", "Couture lash styling", "24hr locking sealant finish"],
          aftercare: "Avoid direct contact with water for first 2 hours. Keep blotting sheets handy."
        };
      case "hair":
        return {
          duration: "60 - 180 Mins",
          includes: ["Clarifying pre-treatment wash", "Premium salon keratin hydration masking", "Blow dry styling & custom texturizing", "Heat shield protection seals"],
          aftercare: "Do not secure with tight elastic bands or expose to sea salt for 48 hours."
        };
      case "skin":
        return {
          duration: "45 - 90 Mins",
          includes: ["Exfoliation peel matching skin pH", "Deep cell oxygenation session", "Therapeutic iced botanical roller facial massage", "Broad-spectrum hydration sunscreen block"],
          aftercare: "Apply physical SPF 50+ sunscreen religiously and avoid direct tanning products for 3 days."
        };
      case "nail":
        return {
          duration: "60 - 90 Mins",
          includes: ["Dead cuticle softening wash", "Hand massage with heated jojoba oil", "Designer base application & LED-bake sealant", "Moisturizing skin hydration mist"],
          aftercare: "Apply daily cuticle oils. Wear gloves for intensive kitchen cleaning."
        };
      case "spa":
        return {
          duration: "60 - 120 Mins",
          includes: ["Therapeutic signature warm oil massage", "Basalt stone placement & pressure point releases", "Heated herbal towels wipe-down", "Post-session cup of ceremonial tea"],
          aftercare: "Drink plenty of water immediately to support muscle waste detox cycles."
        };
      default:
        return {
          duration: "60 Mins",
          includes: ["Consultation audit", "Signature treatment and wash", "Custom moisture seal"],
          aftercare: "Keep hydrated and relax."
        };
    }
  };

  return (
    <section id="services" className="py-24 bg-neutral-50 dark:bg-neutral-900/60 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Title */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-gold">OUR LUXURIOUS MENUS</span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold mt-2 text-neutral-900 dark:text-neutral-100">
            Exclusive Beauty Services
          </h2>
          <p className="text-neutral-500 dark:text-neutral-400 mt-3 font-light text-sm max-w-lg mx-auto">
            Explore our curated menu of medical-grade facials, bespoke hairstyling solutions, and breathtaking physical beauty treatments.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-brand-pink to-brand-gold mx-auto mt-4 rounded-full" />
        </div>

        {/* Filter Navigation Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12" id="services-tabs">
          {categories.map((c) => (
            <button
              key={c.value}
              onClick={() => setFilter(c.value as any)}
              className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest border transition-all duration-300 cursor-pointer ${
                filter === c.value
                  ? "bg-brand-gold border-brand-gold text-white shadow-md shadow-brand-gold/15"
                  : "bg-white dark:bg-neutral-950 border-neutral-200 dark:border-neutral-850 text-neutral-600 dark:text-neutral-350 hover:border-brand-pink hover:text-brand-gold"
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>

        {/* Services Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" id="services-grid">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="bg-white dark:bg-neutral-950 rounded-3xl border border-neutral-200/50 dark:border-neutral-850/50 override-shadow shadow-sm hover:shadow-xl hover:border-brand-pink/30 hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between overflow-hidden group"
            >
              {/* Image with overlay badge */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                
                {/* Micro gradient shine */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 to-transparent opacity-80" />

                {/* Pricing Tag Overlay */}
                <span className="absolute bottom-4 right-4 px-4 py-1.5 bg-neutral-900/80 backdrop-blur-md text-white text-xs font-bold font-mono rounded-full border border-white/10">
                  Starting {service.price}
                </span>

                <span className="absolute top-4 left-4 px-3 py-1 bg-brand-pink text-neutral-800 text-[9px] uppercase tracking-widest font-extrabold rounded-full shadow-md">
                  {service.category}
                </span>
              </div>

              {/* Body details */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-lg font-bold text-neutral-800 dark:text-neutral-100 group-hover:text-brand-gold transition-colors duration-300">
                    {service.name}
                  </h3>
                  <p className="text-xs text-neutral-500 dark:text-neutral-450 mt-2 leading-relaxed font-light line-clamp-3">
                    {service.description}
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-3 mt-6 border-t border-neutral-100 dark:border-neutral-900 pt-4">
                  <button
                    onClick={() => setSelectedService(service)}
                    className="py-2.5 border border-brand-pink/30 hover:border-brand-pink hover:bg-brand-pink-light dark:hover:bg-neutral-905 text-neutral-700 dark:text-neutral-350 hover:text-brand-gold text-[10px] font-bold uppercase tracking-widest rounded-xl transition-all duration-300 cursor-pointer text-center"
                  >
                    Learn More
                  </button>

                  <button
                    onClick={() => onBookClick(service.name)}
                    className="py-2.5 bg-gradient-to-r from-brand-gold to-brand-gold-dark hover:from-brand-pink hover:to-brand-gold text-white text-[10px] font-bold uppercase tracking-widest rounded-xl shadow-md transition-all duration-300 cursor-pointer text-center"
                  >
                    Quick Book
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Learn More Details Modal Drawer */}
        {selectedService && (
          <div className="fixed inset-0 z-55 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
            <div className="bg-white dark:bg-neutral-950 rounded-3xl w-full max-w-lg max-h-[90vh] overflow-y-auto override-shadow border border-neutral-100 dark:border-neutral-800 p-6 sm:p-8 relative">
              
              {/* Close Button */}
              <button
                onClick={() => setSelectedService(null)}
                className="absolute top-4 right-4 p-2 rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-900 text-neutral-400 dark:text-neutral-500 transition-colors focus:outline-none"
              >
                <X className="h-5 w-5" />
              </button>

              {/* Service details inside modal */}
              <span className="text-[9px] uppercase tracking-widest font-extrabold text-brand-gold px-2.5 py-1 bg-brand-pink/20 rounded-full border border-brand-pink/10">
                {selectedService.category} COUTURE
              </span>

              <h3 className="font-serif text-2xl font-bold mt-3 text-neutral-900 dark:text-neutral-100">
                {selectedService.name}
              </h3>

              <img
                src={selectedService.image}
                alt={selectedService.name}
                className="w-full h-48 sm:h-56 object-cover rounded-2xl mt-4 border border-neutral-100 dark:border-neutral-900"
                referrerPolicy="no-referrer"
              />

              <p className="text-xs text-neutral-600 dark:text-neutral-400 font-light mt-4 leading-relaxed">
                {selectedService.description}
              </p>

              {/* Structured Metadata Box */}
              <div className="mt-6 space-y-4 pt-4 border-t border-neutral-100 dark:border-neutral-900">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2 text-neutral-700 dark:text-neutral-355 text-xs font-semibold">
                    <Clock className="h-4 w-4 text-brand-gold" />
                    <span>Average Session Duration</span>
                  </div>
                  <span className="text-xs font-mono font-bold text-neutral-900 dark:text-neutral-100">
                    {getServiceDetails(selectedService).duration}
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2 text-neutral-700 dark:text-neutral-355 text-xs font-semibold">
                    <Sparkles className="h-4 w-4 text-brand-gold" />
                    <span>Estimated Starting Cost</span>
                  </div>
                  <span className="text-xs font-mono font-bold text-brand-gold text-base">
                    {selectedService.price}
                  </span>
                </div>

                {/* Includes Items */}
                <div className="space-y-1">
                  <span className="text-[10px] uppercase tracking-widest font-bold text-neutral-400 block mb-2">
                    What's Included in standard package:
                  </span>
                  <div className="grid grid-cols-1 gap-2 text-xs">
                    {getServiceDetails(selectedService).includes.map((inc, i) => (
                      <div key={i} className="flex items-start space-x-2 text-neutral-600 dark:text-neutral-400 font-light">
                        <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>{inc}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Aftercare advice */}
                <div className="p-3 bg-neutral-50 dark:bg-neutral-900/60 rounded-xl border border-neutral-150 dark:border-neutral-850 mt-4">
                  <div className="flex items-center space-x-2 text-neutral-750 dark:text-neutral-350 text-[10px] font-bold uppercase tracking-wider mb-1">
                    <Shield className="h-3.5 w-3.5 text-brand-gold" />
                    <span>Expert Stylist Aftercare Advice</span>
                  </div>
                  <p className="text-[11px] text-neutral-500 dark:text-neutral-400 font-light leading-relaxed">
                    {getServiceDetails(selectedService).aftercare}
                  </p>
                </div>
              </div>

              {/* Modal Book trigger */}
              <div className="mt-6 flex space-x-3">
                <button
                  onClick={() => setSelectedService(null)}
                  className="flex-1 py-3 border border-neutral-200 dark:border-neutral-800 text-neutral-600 dark:text-neutral-400 text-xs font-semibold tracking-wider hover:bg-neutral-50 dark:hover:bg-neutral-900 rounded-xl transition-colors cursor-pointer"
                >
                  Close Window
                </button>
                <button
                  onClick={() => {
                    const name = selectedService.name;
                    setSelectedService(null);
                    onBookClick(name);
                  }}
                  className="flex-1 py-3 bg-gradient-to-r from-brand-gold to-brand-pink text-white text-xs font-semibold tracking-wider rounded-xl shadow-lg transition-transform hover:scale-[1.02] cursor-pointer"
                >
                  Reserve Session
                </button>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
}
