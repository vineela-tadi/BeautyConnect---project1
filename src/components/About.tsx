import React from "react";
import { Award, ShieldCheck, Heart, Sparkles, UserCheck } from "lucide-react";

export default function About() {
  const highlights = [
    {
      icon: <Award className="h-6 w-6 text-brand-gold" />,
      title: "Certified Beauty Experts",
      description: "Our professional consultants hold elite international accolades and pursue continuing training under Parisian master stylers."
    },
    {
      icon: <Sparkles className="h-6 w-6 text-brand-gold" />,
      title: "Premium Beauty Products",
      description: "We work exclusively with high-end, toxin-free, organic, and hypoallergenic luxury botanical beauty products."
    },
    {
      icon: <Heart className="h-6 w-6 text-brand-gold" />,
      title: "Personalized Care",
      description: "Individually formulated skin treatments and customized session plans that honor your unique cosmetic traits."
    },
    {
      icon: <ShieldCheck className="h-6 w-6 text-brand-gold" />,
      title: "Hygiene & Safety Standards",
      description: "Surgical-grade sanitation, hospital autoclave sterilizers, and clinical air filtration for a pristine sanctuary experience."
    },
    {
      icon: <UserCheck className="h-6 w-6 text-brand-gold" />,
      title: "Customer Satisfaction Focus",
      description: "We are obsessed with your joy. From our custom gourmet herbal tea menu to premium silk robes, your peace is our victory."
    }
  ];

  return (
    <section id="about" className="py-24 bg-white dark:bg-neutral-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-gold">OUR STORY & HERITAGE</span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold mt-2 text-neutral-900 dark:text-neutral-100">
            About Beautician
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-brand-pink to-brand-gold mx-auto mt-4 rounded-full" />
        </div>

        {/* Top Story Frame (Lounge Photo & Intro Text) */}
        <div className="grid lg:grid-cols-12 gap-12 items-center mb-20">
          <div className="lg:col-span-6 relative">
            {/* Double image offset border design layout */}
            <div className="absolute inset-0 border-2 border-brand-pink/30 rounded-2xl translate-x-4 translate-y-4 -z-1" />
            <img
              src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=800&q=80"
              alt="Beautician Luxury Styling stations"
              className="rounded-2xl shadow-xl w-full h-[500px] object-cover hover:scale-[1.02] transition-transform duration-500"
              id="about-salon-image"
            />
            
            {/* Elegant Floating Experience badge */}
            <div className="absolute bottom-6 right-6 p-6 bg-white dark:bg-neutral-900 rounded-xl shadow-2xl border border-brand-pink/10 max-w-xs text-center flex flex-col justify-center items-center">
              <span className="font-serif text-4xl font-bold text-brand-gold">10+</span>
              <span className="text-[10px] uppercase font-bold tracking-widest text-neutral-500 dark:text-neutral-400 mt-1">
                Years of Supreme Styling
              </span>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-6">
            <h3 className="font-serif text-2xl sm:text-3xl font-medium text-neutral-800 dark:text-neutral-200">
              The Epitome of Premium Salon Artistry
            </h3>
            <p className="text-neutral-600 dark:text-neutral-350 leading-relaxed font-light">
              Founded in 2016, <strong>Beautician</strong> was chartered with a pioneering vision: to rescue luxury beauty from assembly-line formats and restore customized care. We operate a gorgeous, sensory-friendly boutique space designed to cocoon our patrons in tranquility while our elite skin and hair surgeons work their aesthetic craft.
            </p>
            <p className="text-neutral-600 dark:text-neutral-350 leading-relaxed font-light">
              Every haircut, bridal brushstroke, dermal wash, and hot stone massage is approached as a customized fine-art composition. We believe true confidence blooms when your treatment precisely aligns with your anatomical structure.
            </p>

            <div className="grid md:grid-cols-2 gap-6 pt-4 border-t border-neutral-100 dark:border-neutral-900">
              {/* Mission */}
              <div className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-widest text-brand-gold">Our Mission</span>
                <p className="text-xs text-neutral-500 dark:text-neutral-400 font-light leading-relaxed">
                  To empower individual grace, bolster holistic confidence, and engineer supreme aesthetic results using scientifically validated methods and organic elixirs.
                </p>
              </div>

              {/* Vision */}
              <div className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-widest text-brand-gold">Our Vision</span>
                <p className="text-xs text-neutral-500 dark:text-neutral-400 font-light leading-relaxed">
                  To lead the premium styling sector globally by creating a safe sanctuary that couples state-of-the-art dermatology with artistic couture cosmetology.
                </p>
              </div>
            </div>

            {/* Core Values */}
            <div className="pt-4">
              <span className="text-xs font-bold uppercase tracking-widest text-brand-gold block mb-2">Our Core Values</span>
              <div className="flex flex-wrap gap-2">
                {["Artistic Ingenuity", "Hygiene Autonomy", "Empathy-First Care", "Pristine Luxury", "Efficacy Driven"].map(value => (
                  <span key={value} className="px-3 py-1 bg-brand-pink-light dark:bg-neutral-900 border border-brand-pink/20 rounded-full text-[11px] font-bold text-brand-gold">
                    {value}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Feature Highlights Grid */}
        <div className="mt-20">
          <div className="text-center mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-gold">WHY CLIENTS ACCLAIM US</span>
            <h3 className="font-serif text-2xl font-bold mt-1 text-neutral-800 dark:text-neutral-200">Our Pillar of Care Standards</h3>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {highlights.map((card, idx) => (
              <div
                key={idx}
                className="p-6 bg-neutral-50 dark:bg-neutral-900 border border-neutral-100 dark:border-white/5 hover:border-brand-pink/40 hover:-translate-y-2 transition-all duration-300 rounded-2xl flex flex-col items-center text-center group"
                id={`about-card-${idx}`}
              >
                <div className="p-4 bg-white dark:bg-neutral-800 rounded-2xl shadow-sm mb-4 group-hover:scale-110 group-hover:bg-brand-pink-light transition-all duration-300">
                  {card.icon}
                </div>
                <h4 className="font-serif text-sm font-semibold text-neutral-800 dark:text-neutral-100 mb-2">
                  {card.title}
                </h4>
                <p className="text-[11px] text-neutral-500 dark:text-neutral-400 font-light leading-relaxed">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
