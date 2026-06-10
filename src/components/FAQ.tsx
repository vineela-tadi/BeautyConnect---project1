import React, { useState } from "react";
import { FAQ_DATA } from "../data";
import { ChevronDown, Sparkles } from "lucide-react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<string | null>("f1"); // Keeping first item open by default

  const toggleFAQ = (id: string) => {
    setOpenIndex(openIndex === id ? null : id);
  };

  return (
    <section id="faq" className="py-24 bg-neutral-50 dark:bg-neutral-900/60 transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-gold">HAVE A QUESTION?</span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold mt-2 text-neutral-900 dark:text-neutral-100">
            Frequently Asked Questions
          </h2>
          <p className="text-neutral-500 dark:text-neutral-400 mt-3 font-light text-sm max-w-lg mx-auto">
            Find immediate clarifications regarding our booking, organic standards, travel styling options, and rescheduling rules.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-brand-pink to-brand-gold mx-auto mt-4 rounded-full" />
        </div>

        {/* FAQs Accordion Grid */}
        <div className="space-y-4" id="faq-accordion-list">
          {FAQ_DATA.map((item) => {
            const isOpen = openIndex === item.id;
            
            return (
              <div
                key={item.id}
                className="bg-white dark:bg-neutral-950 border border-neutral-200/50 dark:border-neutral-850 rounded-2xl shadow-xs overflow-hidden transition-all duration-300"
                id={`faq-item-${item.id}`}
              >
                {/* Accordion Trigger Header Bar */}
                <button
                  onClick={() => toggleFAQ(item.id)}
                  className="w-full px-6 py-5 sm:py-6 flex items-center justify-between text-left focus:outline-none focus:ring-1 focus:ring-brand-gold/30 hover:bg-neutral-50/50 dark:hover:bg-neutral-901 cursor-pointer"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${item.id}`}
                >
                  <div className="flex items-center space-x-3.5 pr-4">
                    <div className="p-1.5 rounded-lg bg-brand-pink/20 text-brand-gold flex-shrink-0">
                      <Sparkles className="h-4.5 w-4.5" />
                    </div>
                    <span className="font-serif text-sm sm:text-base font-bold text-neutral-800 dark:text-neutral-100 group-hover:text-brand-gold transition-colors duration-300">
                      {item.question}
                    </span>
                  </div>

                  {/* Rotating Arrow Indicator */}
                  <div
                    className={`p-1 text-neutral-400 dark:text-neutral-550 hover:text-brand-gold transition-transform duration-300 ${
                      isOpen ? "transform rotate-180 text-brand-gold" : ""
                    }`}
                  >
                    <ChevronDown className="h-5 w-5" />
                  </div>
                </button>

                {/* Smooth Slide Content Accordion Wrapper */}
                <div
                  id={`faq-answer-${item.id}`}
                  className={`transition-all duration-301 ease-in-out ${
                    isOpen ? "max-h-[500px] border-t border-neutral-105 dark:border-neutral-900" : "max-h-0"
                  } overflow-hidden`}
                >
                  <div className="p-6 bg-neutral-50/30 dark:bg-neutral-950/60 text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 font-light leading-relaxed">
                    {item.answer}
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* Dynamic Support Help prompt */}
        <div className="mt-12 text-center p-6 bg-white dark:bg-neutral-950 border border-neutral-200/50 dark:border-neutral-850 rounded-2xl shadow-sm">
          <p className="text-xs text-neutral-500 dark:text-neutral-400 font-light">
            Still have an unanswered question about our treatments or event booking timelines? {" "}
            <a href="#contact" className="text-brand-gold font-bold hover:underline transition-colors">
              Chat with our Lounge Concierge Support
            </a>
          </p>
        </div>

      </div>
    </section>
  );
}
