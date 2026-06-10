import React, { useState, useEffect } from "react";
import { Sparkles, Calendar, ArrowRight } from "lucide-react";
import { motion } from "motion/react";

interface HeroProps {
  onBookClick: () => void;
  onServicesClick: () => void;
}

export default function Hero({ onBookClick, onServicesClick }: HeroProps) {
  // Counters states
  const [clients, setClients] = useState(0);
  const [experience, setExperience] = useState(0);
  const [experts, setExperts] = useState(0);
  const [rating, setRating] = useState(0);

  useEffect(() => {
    // Elegant counter timer increments
    const duration = 2000; // 2 seconds
    const intervalTime = 30;
    const steps = duration / intervalTime;

    let step = 0;
    const counterTimer = setInterval(() => {
      step++;
      if (step >= steps) {
        setClients(5000);
        setExperience(10);
        setExperts(25);
        setRating(4.9);
        clearInterval(counterTimer);
      } else {
        const progress = step / steps;
        setClients(Math.floor(progress * 5000));
        setExperience(Math.floor(progress * 10));
        setExperts(Math.floor(progress * 25));
        setRating(parseFloat((progress * 4.9).toFixed(1)));
      }
    }, intervalTime);

    return () => clearInterval(counterTimer);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden bg-neutral-900">
      {/* Premium Unsplash Luxury Salon Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed scale-105 filter brightness-45 dark:brightness-35"
        style={{
          backgroundImage: `url("https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1600&q=80")`,
        }}
      />

      {/* Modern Gradient & Vignette Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-neutral-900/60 via-transparent to-neutral-550/80 z-1" />
      <div className="absolute inset-0 bg-gradient-to-r from-neutral-950/80 via-neutral-900/30 to-transparent z-1" />

      {/* Floating Sparkles & Light Orbs design decoration */}
      <div className="absolute top-1/4 left-1/10 w-72 h-72 bg-brand-pink/10 rounded-full blur-3xl opacity-50 animate-pulse z-1" />
      <div className="absolute bottom-1/4 right-1/10 w-96 h-96 bg-brand-gold/15 rounded-full blur-3xl opacity-40 z-1" />

      {/* Hero Content Area */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 z-10 text-white text-center lg:text-left flex flex-col justify-center min-h-[80vh]">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 flex flex-col space-y-6">
            {/* Tagline Accent Box */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="inline-flex items-center space-x-2 bg-brand-pink/15 backdrop-blur-md px-4 py-2 rounded-full border border-brand-pink/30 self-center lg:self-start mb-2"
            >
              <Sparkles className="h-4 w-4 text-brand-pink animate-spin-slow" />
              <span className="text-xs sm:text-sm font-bold tracking-widest uppercase text-brand-pink-light">
                HIGH-END LUXURY WELLNESS LOUNGE
              </span>
            </motion.div>

            {/* Main Luxury Title */}
            <motion.h1
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight"
            >
              Enhancing <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-pink via-brand-pink-light to-brand-gold">Beauty</span>,<br />
              Empowering <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-gold to-brand-pink">Confidence</span>
            </motion.h1>

            {/* Subtitle description */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-base sm:text-lg md:text-xl text-neutral-300 font-light max-w-xl mx-auto lg:mx-0 leading-relaxed"
            >
              Professional boutique beauty spa and hair services tailored meticulously to ensure you look and feel your absolute radiant, confident self.
            </motion.p>

            {/* Actions Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4"
            >
              <button
                onClick={onBookClick}
                className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-brand-gold to-brand-pink text-white rounded-full font-bold uppercase tracking-widest text-xs shadow-xl shadow-brand-gold/20 hover:shadow-brand-gold/40 hover:-translate-y-1 hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2 cursor-pointer"
                id="hero-book-btn"
              >
                <Calendar className="h-4 w-4" />
                <span>Book Appointment</span>
              </button>

              <button
                onClick={onServicesClick}
                className="w-full sm:w-auto px-8 py-4 bg-white/10 hover:bg-white/15 backdrop-blur-sm border border-white/20 hover:border-white/40 text-white rounded-full font-bold uppercase tracking-widest text-xs hover:-translate-y-1 transition-all duration-300 flex items-center justify-center space-x-2 cursor-pointer"
                id="hero-services-btn"
              >
                <span>View Our Services</span>
                <ArrowRight className="h-4 w-4 text-brand-pink inline group" />
              </button>
            </motion.div>
          </div>

          {/* Luxury Floating Feature Card */}
          <div className="lg:col-span-5 hidden lg:flex justify-center relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="relative p-1 bg-gradient-to-br from-brand-pink/40 to-brand-gold/20 rounded-2xl shadow-2xl overflow-hidden glass-panel max-w-sm"
              id="hero-floating-card"
            >
              <div className="absolute inset-0 bg-neutral-950/80 -z-1" />
              <img 
                src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=500&q=80" 
                alt="Luxury Royal Spa Makeup Styling" 
                className="rounded-xl w-full h-80 object-cover opacity-85 hover:scale-105 transition-transform duration-700" 
              />
              <div className="p-6 text-left">
                <span className="text-[10px] uppercase tracking-widest text-brand-gold font-bold">EXCELLENT EXCELLENCE</span>
                <h3 className="font-serif text-lg font-bold mt-1 text-white">The Royal Pamper Experience</h3>
                <p className="text-xs text-neutral-300 mt-2 font-light">
                  Relax. Unwind. Rejuvenate. Let our certified team of global beauty consultants redefine your beauty standards today.
                </p>
              </div>
            </motion.div>
            
            {/* Aesthetic micro badge element */}
            <div className="absolute -top-4 -right-4 p-4 rounded-full bg-brand-gold/90 text-white shadow-xl flex flex-col justify-center items-center text-center w-16 h-16 animate-bounce z-20">
              <span className="text-xs font-bold uppercase leading-none">Best</span>
              <span className="text-[9px] uppercase tracking-tighter">Salon</span>
            </div>
          </div>
        </div>

        {/* Dynamic Statistics Panel (With custom live animated counters) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.8 }}
          className="mt-16 py-8 px-6 sm:px-12 grid grid-cols-2 md:grid-cols-4 gap-8 bg-neutral-900/60 backdrop-blur-xl border border-white/10 rounded-3xl"
        >
          <div className="text-center flex flex-col space-y-1">
            <span className="text-3xl sm:text-4xl md:text-5xl font-serif font-semibold tracking-tight text-brand-pink">
              {clients}+
            </span>
            <span className="text-xs sm:text-xs uppercase tracking-widest font-semibold text-neutral-400">
              Happy Clients
            </span>
          </div>

          <div className="text-center flex flex-col space-y-1">
            <span className="text-3xl sm:text-4xl md:text-5xl font-serif font-semibold tracking-tight text-brand-pink">
              {experience}+
            </span>
            <span className="text-xs sm:text-xs uppercase tracking-widest font-semibold text-neutral-400">
              Years Experience
            </span>
          </div>

          <div className="text-center flex flex-col space-y-1">
            <span className="text-3xl sm:text-4xl md:text-5xl font-serif font-semibold tracking-tight text-brand-pink">
              {experts}+
            </span>
            <span className="text-xs sm:text-xs uppercase tracking-widest font-semibold text-neutral-400">
              Beauty Experts
            </span>
          </div>

          <div className="text-center flex flex-col space-y-1">
            <span className="text-3xl sm:text-4xl md:text-5xl font-serif font-semibold tracking-tight text-brand-pink animate-pulse">
              {rating}&#9733;
            </span>
            <span className="text-xs sm:text-xs uppercase tracking-widest font-semibold text-neutral-400">
              Customer Rating
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
