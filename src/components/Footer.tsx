import React, { useState } from "react";
import { Sparkles, Mail, Send, CheckCircle2, Heart, Instagram, Facebook, Twitter, Chrome } from "lucide-react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubscribed(true);
      setEmail("");
    }, 1000);
  };

  const handleLinkClick = (href: string) => {
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-neutral-900 text-white relative border-t border-white/5">
      
      {/* Upper Newsletter Glass section banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <div className="grid lg:grid-cols-12 gap-8 items-center bg-neutral-950/65 border border-white/10 p-8 sm:p-12 rounded-3xl mb-16 relative overflow-hidden">
          
          {/* Subtle starry background decor */}
          <div className="absolute top-1/2 left-0 -translate-y-1/2 w-72 h-72 bg-brand-pink/10 rounded-full blur-3xl opacity-20 -z-1" />

          <div className="lg:col-span-6 space-y-2 text-left">
            <span className="text-[10px] uppercase tracking-widest font-bold text-brand-pink flex items-center space-x-1.5">
              <Sparkles className="h-4 w-4 text-brand-pink" />
              <span>THE BEAUTICIAN CLUB ELITE</span>
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold leading-tight">
              Join Our VIP Newsletter
            </h3>
            <p className="text-xs text-neutral-400 font-light max-w-sm leading-relaxed">
              Unlock a VIP 20% discount coupon code immediately, stay updated on our guest stylists arrivals, and enjoy exclusive event notifications.
            </p>
          </div>

          <div className="lg:col-span-6 w-full">
            {subscribed ? (
              <div className="flex items-center space-x-2.5 p-4 bg-white/5 border border-brand-pink/20 rounded-2xl text-left animate-fade-in">
                <CheckCircle2 className="h-6 w-6 text-brand-pink flex-shrink-0" />
                <div>
                  <span className="text-xs font-bold text-brand-pink block">Sucessfully Enrolled!</span>
                  <p className="text-[11px] text-neutral-400 font-light mt-0.5">
                    Your 20% voucher code <strong>LAVISHLIFE</strong> has been dispatched. Check your inbox!
                  </p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="relative flex flex-col sm:flex-row gap-3">
                <div className="relative flex-1">
                  <div className="absolute inset-y-0 left-4 flex items-center text-neutral-450 pointer-events-none">
                    <Mail className="h-4.5 w-4.5" />
                  </div>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Provide your email address"
                    className="w-full bg-neutral-900 border border-white/10 text-white rounded-full pl-11 pr-5 py-4 text-xs focus:outline-none focus:ring-1 focus:ring-brand-gold focus:border-brand-gold transition-colors"
                  />
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="px-8 py-4 bg-gradient-to-r from-brand-gold to-brand-pink rounded-full text-white font-bold text-xs uppercase tracking-widest hover:scale-105 active:scale-95 disabled:opacity-50 duration-300 transition-all cursor-pointer inline-flex items-center justify-center space-x-2 shrink-0 shadow-lg shadow-brand-gold/15"
                >
                  {loading ? (
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    <>
                      <span>Secure Enrollment</span>
                      <Send className="h-3.5 w-3.5" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Mid grid links columns */}
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-12 pb-16 border-b border-white/5 text-left" id="footer-links-grid">
          
          {/* Logo & Intro */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Sparkles className="h-6 w-6 text-brand-gold" />
              <span className="font-serif text-2xl font-bold tracking-wider">Beautician</span>
            </div>
            <p className="text-xs text-neutral-400 leading-relaxed font-light">
              Premium award-winning luxury beauty salon and aesthetic spa lounge. We believe natural facial, skin, and hair couture is an act of self-love and confidence.
            </p>
            
            {/* Direct address snippet */}
            <span className="text-[10px] text-brand-gold font-mono uppercase tracking-widest block pt-2">
              Lavelle Road, Bangalore, IND
            </span>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-brand-gold">Quick Navigation</h4>
            <ul className="space-y-2 text-xs">
              {[
                { name: "Lounge Home", href: "#home" },
                { name: "About Story", href: "#about" },
                { name: "Couture Menus", href: "#services" },
                { name: "Why Us Standards", href: "#why-us" },
                { name: "Art Portfolio", href: "#portfolio" }
              ].map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleLinkClick(link.href);
                    }}
                    className="text-neutral-400 hover:text-brand-pink transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-brand-gold">Couture Menus</h4>
            <ul className="space-y-2 text-xs">
              {[
                { name: "Bridal Makeup", href: "#services" },
                { name: "Hair Styling & Coloring", href: "#services" },
                { name: "Clinical Skin Facials", href: "#services" },
                { name: "Designer Nail Art", href: "#services" },
                { name: "Therapeutic Hot Stone Spa", href: "#services" }
              ].map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleLinkClick(link.href);
                    }}
                    className="text-neutral-400 hover:text-brand-pink transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact help line info */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-brand-gold">Reach Concierge</h4>
            <ul className="space-y-2.5 text-xs text-neutral-401">
              <li>
                <span className="text-[10px] text-neutral-500 uppercase tracking-widest block font-bold">Booking Hotlines:</span>
                <span className="text-brand-pink font-semibold">+91 98765 43210</span>
              </li>
              <li>
                <span className="text-[10px] text-neutral-500 uppercase tracking-widest block font-bold">Write support:</span>
                <span className="text-brand-pink">concierge@beautician.salon</span>
              </li>
              <li>
                <span className="text-[10px] text-neutral-500 uppercase tracking-widest block font-bold">Location Suite:</span>
                <span className="text-neutral-300 font-light">Lavelle Road, Bangalore</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Lower copyright bar row */}
        <div className="py-8 flex flex-col md:flex-row items-center justify-between text-neutral-500 text-[11px] font-mono">
          <p>© 2026 Beautician Luxury Lounge. All Rights Reserved.</p>
          
          <div className="flex items-center space-x-1.5 mt-4 md:mt-0">
            <span>Delivered with meticulous care and</span>
            <Heart className="h-3 w-3 fill-brand-pink text-brand-pink animate-pulse" />
            <span>artistry.</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
