import React from "react";
import { Award, ShieldCheck, Heart, Sparkles, Calendar, Droplets, Tag, PhoneCall } from "lucide-react";

export default function WhyChooseUs() {
  const pillars = [
    {
      icon: <Award className="h-6 w-6 text-brand-gold" />,
      title: "Certified Professionals",
      description: "Our technicians and artists are globally credentialed specialists continuous learning modern Parisian styles."
    },
    {
      icon: <Sparkles className="h-6 w-6 text-brand-gold" />,
      title: "Modern Equipment",
      description: "Equipped with state-of-the-art diagnostic cameras and advanced dermal light wave technology."
    },
    {
      icon: <Droplets className="h-6 w-6 text-brand-gold" />,
      title: "Premium Products",
      description: "We source formulation ingredients that are toxic-free, paraben-free, plant-derived, and hypoallergenic."
    },
    {
      icon: <Heart className="h-6 w-6 text-brand-gold" />,
      title: "Personalized Services",
      description: "No cookie-cutter routines. We customize formulations to match your specific scalp, nail matrix, and pH needs."
    },
    {
      icon: <Tag className="h-6 w-6 text-brand-gold" />,
      title: "Affordable Luxury Pricing",
      description: "We offer elite experiences and premium materials with fair, upfront, highly transparent pricing tiers."
    },
    {
      icon: <Calendar className="h-6 w-6 text-brand-gold" />,
      title: "Flexible Appointments",
      description: "Tap and schedule slots seamlessly with our dynamic booking portal, rescheduling with just an active click."
    },
    {
      icon: <ShieldCheck className="h-6 w-6 text-brand-gold" />,
      title: "Hygienic Environment",
      description: "Double autoclave medical tools sterilization, single-use fabrics, and automated air sanitizers active 24/7."
    },
    {
      icon: <PhoneCall className="h-6 w-6 text-brand-gold" />,
      title: "Outstanding Customer Support",
      description: "Our dedicated booking concierge monitors requests instantly to assist with personalized events support."
    }
  ];

  return (
    <section id="why-us" className="py-24 bg-white dark:bg-neutral-950 transition-colors duration-300 relative overflow-hidden">
      {/* Decorative blurry orbs */}
      <div className="absolute top-1/2 left-0 -translate-x-1/2 w-80 h-80 bg-brand-pink/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 translate-x-1/3 w-96 h-96 bg-brand-gold/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-gold">UNMATCHED INDUSTRY BENCHMARKS</span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold mt-2 text-neutral-900 dark:text-neutral-100">
            Why Choose Us
          </h2>
          <p className="text-neutral-500 dark:text-neutral-400 mt-3 font-light text-sm max-w-lg mx-auto">
            Experience the combination of science, artistry, and uncompromising safety protocols that sets the Beautician standard.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-brand-pink to-brand-gold mx-auto mt-4 rounded-full" />
        </div>

        {/* Bento Grid layout */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6" id="why-us-grid">
          {pillars.map((p, i) => (
            <div
              key={i}
              className="group p-8 bg-neutral-50 dark:bg-neutral-900 border border-neutral-100 dark:border-white/5 hover:border-brand-pink/35 rounded-3xl hover:-translate-y-2 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              id={`why-us-card-${i}`}
            >
              <div>
                {/* Icon wrapper */}
                <div className="inline-flex p-3 rounded-2xl bg-white dark:bg-neutral-800 shadow-sm border border-neutral-100 dark:border-neutral-850 text-brand-gold group-hover:scale-110 group-hover:bg-brand-pink-light group-hover:text-brand-gold-dark transition-all duration-300">
                  {p.icon}
                </div>
                
                <h3 className="font-serif text-base font-bold text-neutral-850 dark:text-neutral-100 mt-6 mb-3 group-hover:text-brand-gold transition-colors duration-300">
                  {p.title}
                </h3>
                
                <p className="text-xs text-neutral-500 dark:text-neutral-400 font-light leading-relaxed">
                  {p.description}
                </p>
              </div>

              {/* Little bottom border hover indicator */}
              <div className="w-0 group-hover:w-full h-0.5 bg-gradient-to-r from-brand-pink to-brand-gold transition-all duration-500 mt-6 rounded-full" />
            </div>
          ))}
        </div>

        {/* Mini Quote panel */}
        <div className="mt-16 text-center max-w-2xl mx-auto p-6 bg-brand-pink-light/35 dark:bg-neutral-900/40 rounded-3xl border border-brand-pink/15">
          <p className="font-serif italic text-sm text-neutral-700 dark:text-neutral-350">
            "Your body is a precious ecosystem. We treat grooming and cosmetics not as mere fashion, but as a deliberate ceremony of self-appreciation."
          </p>
          <span className="text-[10px] uppercase font-bold tracking-widest text-brand-gold mt-2 block">— ELENA ROSTOVA, FOUNDER</span>
        </div>

      </div>
    </section>
  );
}
