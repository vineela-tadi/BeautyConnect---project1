import React from "react";
import { Check, Sparkles, Star } from "lucide-react";

interface PricingProps {
  onBookClick: (packageName?: string) => void;
}

export default function Pricing({ onBookClick }: PricingProps) {
  const packages = [
    {
      id: "p1",
      name: "Basic Beauty Package",
      price: "₹999",
      duration: "Approx. 60 Mins",
      features: [
        { label: "Radiance Fresh Facial", desc: "Dead skin exfoliating wash" },
        { label: "Cleansing Hair Wash", desc: "Organic shampoo & premium blow dry" },
        { label: "Eyebrow Threading/Shaping", desc: "High-precision eyebrow symmetrical design" }
      ],
      tag: "ESSENTIAL INDULGENCE",
      popular: false,
      color: "border-neutral-200 dark:border-neutral-850"
    },
    {
      id: "p2",
      name: "Premium Beauty Package",
      price: "₹2,499",
      duration: "Approx. 150 Mins",
      features: [
        { label: "Premium Radiance Facial", desc: "Fruit enzymes wash & collagen boost" },
        { label: "Luxurious Hair Spa Session", desc: "Deep follicle hair hydration & steam wash" },
        { label: "Signature Manicure", desc: "Cuticle care & relaxing salt scrubs" },
        { label: "Signature Deluxe Pedicure", desc: "Exfoliation, dead skin scraping, massage" }
      ],
      tag: "MOST POPULAR CHOICE",
      popular: true,
      color: "border-brand-pink/50 scale-100 lg:scale-[1.03] shadow-lg shadow-brand-pink/10 relative"
    },
    {
      id: "p3",
      name: "Bridal Package Masterclass",
      price: "₹9,999",
      duration: "Approx. 240 Mins",
      features: [
        { label: "Complete HD/Airbrush Bridal Makeup", desc: "Flawless camera-ready glow" },
        { label: "Advanced Professional Hair Styling", desc: "Couture braids, extensions work" },
        { label: "Pre-Wedding Intended Skin Preparation", desc: "Aesthetic scrubing, masking" },
        { label: "Saree/Dupatta & Accessories Support", desc: "Complete elegant dress draping assistance" }
      ],
      tag: "SUPREME REGAL MASTERCLASS",
      popular: false,
      color: "border-neutral-200 dark:border-neutral-850"
    }
  ];

  return (
    <section id="pricing" className="py-24 bg-neutral-50 dark:bg-neutral-900/60 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-gold">OUR LUXE PACKAGES</span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold mt-2 text-neutral-900 dark:text-neutral-100">
            Exclusive Packages
          </h2>
          <p className="text-neutral-500 dark:text-neutral-400 mt-3 font-light text-sm max-w-lg mx-auto">
            Indulge in our value-added luxury cosmetic suites curated to save costs while delivering complete clinical-grade transformations.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-brand-pink to-brand-gold mx-auto mt-4 rounded-full" />
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid lg:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto" id="pricing-grid">
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              className={`bg-white dark:bg-neutral-950 rounded-3xl p-8 border hover:border-brand-pink/40 hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between ${pkg.color}`}
              id={`pricing-card-${pkg.id}`}
            >
              {/* Highlight badge for popular package */}
              {pkg.popular && (
                <div className="absolute top-0 right-1/2 translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-brand-gold to-brand-pink text-white text-[10px] uppercase tracking-widest font-extrabold px-5 py-1.5 rounded-full shadow-lg flex items-center space-x-1 select-none whitespace-nowrap">
                  <Star className="h-3 w-3 fill-current" />
                  <span>{pkg.tag}</span>
                </div>
              )}

              {/* Standard Tag */}
              {!pkg.popular && (
                <span className="text-[9px] uppercase tracking-widest font-extrabold text-neutral-400 block mb-2">
                  {pkg.tag}
                </span>
              )}

              {/* Package Header */}
              <div className="mt-2 text-left">
                <h3 className="font-serif text-xl font-bold text-neutral-800 dark:text-neutral-100">
                  {pkg.name}
                </h3>
                <p className="text-xs text-neutral-400 dark:text-neutral-500 mt-1 font-light">
                  {pkg.duration}
                </p>

                {/* Price Display */}
                <div className="mt-4 flex items-baseline select-none">
                  <span className="font-serif text-3xl sm:text-4xl font-bold text-brand-gold">
                    {pkg.price}
                  </span>
                  <span className="text-xs font-light text-neutral-500 dark:text-neutral-450 ml-1">
                    / package suite
                  </span>
                </div>
              </div>

              {/* Feature Checklist */}
              <div className="my-8 pt-6 border-t border-neutral-100 dark:border-neutral-900 flex-1 space-y-4 text-left">
                {pkg.features.map((feat, idx) => (
                  <div key={idx} className="flex items-start space-x-3">
                    <div className="p-0.5 bg-brand-pink-light dark:bg-neutral-900 rounded-full text-brand-gold flex-shrink-0 mt-0.5">
                      <Check className="h-4 w-4" />
                    </div>
                    <div>
                      <h4 className="text-xs font-semibold text-neutral-800 dark:text-neutral-200">
                        {feat.label}
                      </h4>
                      <p className="text-[10px] text-neutral-400 dark:text-neutral-500 font-light mt-0.5">
                        {feat.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Button Book trigger */}
              <button
                onClick={() => onBookClick(pkg.name)}
                className={`w-full py-4 rounded-full text-xs font-bold uppercase tracking-widest text-center shadow-md hover:scale-105 transition-all duration-300 cursor-pointer ${
                  pkg.popular
                    ? "bg-gradient-to-r from-brand-gold to-brand-pink text-white hover:opacity-90"
                    : "bg-neutral-105 hover:bg-brand-pink-light text-neutral-800 dark:bg-neutral-900 dark:hover:bg-neutral-850 dark:text-neutral-200 border border-neutral-200 dark:border-neutral-800 hover:border-brand-pink/30"
                }`}
              >
                Book Package Now
              </button>
            </div>
          ))}
        </div>

        {/* Customized Booking Notes */}
        <div className="mt-12 text-center max-w-2xl mx-auto">
          <p className="text-xs text-neutral-500 dark:text-neutral-400 font-light">
            Need a bespoke custom styling bundle? Contact our beauty concierges to tailor treatments exactly to your party sizes and budgets. {" "}
            <a href="#contact" className="text-brand-gold font-bold hover:underline transition-all">Setup Custom Packages</a>
          </p>
        </div>

      </div>
    </section>
  );
}
