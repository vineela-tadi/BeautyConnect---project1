import React from "react";
import { TEAM_DATA } from "../data";
import { Instagram, Facebook, Twitter, Award, Sparkles } from "lucide-react";

export default function Team() {
  return (
    <section id="team" className="py-24 bg-white dark:bg-neutral-950 transition-colors duration-300 relative overflow-hidden">
      
      {/* Aesthetic design background circles */}
      <div className="absolute right-0 top-1/4 w-72 h-72 bg-brand-pink/5 rounded-full blur-3xl" />
      <div className="absolute left-0 bottom-1/4 w-80 h-80 bg-brand-gold/5 rounded-full blur-3xl animate-pulse" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-gold">OUR COUTURE CREATIVE GUILD</span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold mt-2 text-neutral-900 dark:text-neutral-100">
            Meet Our Experts
          </h2>
          <p className="text-neutral-500 dark:text-neutral-400 mt-3 font-light text-sm max-w-lg mx-auto">
            Our elite master stylists of worldwide acclaim dedicate themselves daily towards custom facial geometries, clean skin health, and hair fashion.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-brand-pink to-brand-gold mx-auto mt-4 rounded-full" />
        </div>

        {/* Team Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6" id="team-grid">
          {TEAM_DATA.map((member) => (
            <div
              key={member.id}
              className="bg-neutral-50 dark:bg-neutral-900 border border-neutral-100 dark:border-neutral-850 rounded-3xl overflow-hidden override-shadow shadow-sm hover:shadow-xl hover:border-brand-pink/30 hover:-translate-y-2 transition-all duration-300 group flex flex-col justify-between"
              id={`team-card-${member.id}`}
            >
              {/* Photo Area Container */}
              <div className="relative h-72 overflow-hidden bg-neutral-200 dark:bg-neutral-800">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover grayscale-35 group-hover:grayscale-0 group-hover:scale-108 duration-700 select-none"
                  referrerPolicy="no-referrer"
                />

                {/* Micro gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Floating Social Handles (Revealed on Hover) */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center space-x-2 bg-neutral-900/90 backdrop-blur-md px-4 py-2 border border-white/10 rounded-full translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 duration-500 z-10 transition-all">
                  {member.socials.instagram && (
                    <a
                      href={`https://instagram.com/${member.socials.instagram}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1 text-white hover:text-brand-pink transition-colors"
                      title="Follow on Instagram"
                    >
                      <Instagram className="h-4 w-4" />
                    </a>
                  )}
                  {member.socials.facebook && (
                    <a
                      href={`https://facebook.com/${member.socials.facebook}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1 text-white hover:text-brand-pink transition-colors"
                      title="Connect on Facebook"
                    >
                      <Facebook className="h-4 w-4" />
                    </a>
                  )}
                  {member.socials.twitter && (
                    <a
                      href={`https://twitter.com/${member.socials.twitter}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1 text-white hover:text-brand-pink transition-colors"
                      title="Follow on Twitter"
                    >
                      <Twitter className="h-4 w-4" />
                    </a>
                  )}
                </div>
              </div>

              {/* Text Information block */}
              <div className="p-6 flex-1 flex flex-col justify-between text-left">
                <div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-brand-gold">
                    {member.experience}
                  </span>
                  
                  <h3 className="font-serif text-base font-bold text-neutral-850 dark:text-neutral-100 mt-1 leading-tight group-hover:text-brand-gold duration-300">
                    {member.name}
                  </h3>

                  <p className="text-xs text-neutral-500 dark:text-neutral-450 mt-1.5 font-medium">
                    {member.designation}
                  </p>
                </div>

                {/* Core Specialization Details Accord-box */}
                <div className="mt-4 pt-3 border-t border-neutral-100 dark:border-neutral-850 text-left">
                  <div className="flex items-center space-x-1 text-[9px] uppercase tracking-wider font-bold text-neutral-400 mb-1">
                    <Sparkles className="h-3 w-3 text-brand-pink" />
                    <span>Specialization:</span>
                  </div>
                  <p className="text-[11px] text-neutral-600 dark:text-neutral-350 font-light leading-snug">
                    {member.specialization}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom invitation layout */}
        <div className="mt-16 text-center">
          <p className="text-xs text-neutral-505 dark:text-neutral-450 font-light">
            Interested in joining our elite creative styling guild? We are always scouted for world-class artists. {" "}
            <a href="#contact" className="text-brand-gold hover:text-brand-pink underline font-bold transition-colors">
              Submit your lookbook portfolio.
            </a>
          </p>
        </div>

      </div>
    </section>
  );
}
