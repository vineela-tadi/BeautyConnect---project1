import React, { useState } from "react";
import { BLOG_DATA } from "../data";
import { BlogPost } from "../types";
import { Calendar, User, Clock, ArrowRight, X, Heart, Sparkles, Share2 } from "lucide-react";

export default function Blog() {
  const [selectedArticle, setSelectedArticle] = useState<BlogPost | null>(null);
  const [likes, setLikes] = useState<{ [key: string]: number }>({});
  const [hasLiked, setHasLiked] = useState<{ [key: string]: boolean }>({});

  const handleLike = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    if (hasLiked[id]) {
      setLikes(prev => ({ ...prev, [id]: (prev[id] || 0) - 1 }));
      setHasLiked(prev => ({ ...prev, [id]: false }));
    } else {
      setLikes(prev => ({ ...prev, [id]: (prev[id] || 0) + 1 }));
      setHasLiked(prev => ({ ...prev, [id]: true }));
    }
  };

  const getFullArticleBody = (article: BlogPost) => {
    switch (article.title) {
      case "The Ultimate Guide to Long-Lasting Bridal Glow":
        return {
          author: "Zoe Sterling (Senior Makeup Artist)",
          readTime: "7 Min Read",
          sections: [
            {
              subtitle: "1. Cellular Micro-Hydration",
              content: "Applying heavy foundations on dehydrated skin causes peeling. Start 2 weeks in advance with water-soluble serums containing multi-peptide hyaluronic acids."
            },
            {
              subtitle: "2. Symmetrical Contouring preps",
              content: "Our signature technique pairs delicate primers with gold-flecked essences, sealing core tissue so your HD makeup reflects photography lighting naturally."
            }
          ]
        };
      case "Summer Hair Care: Defeating Humidity and UV Rays":
        return {
          author: "Marcus Vane (Master Hair Artisanal Specialist)",
          readTime: "5 Min Read",
          sections: [
            {
              subtitle: "1. Stop Hot-Water Follicle Shocks",
              content: "Warm summer hair naturally expands hair scale structures. Always wash colored strands with cool lukewarm infusions to lock dye pigment lattices."
            },
            {
              subtitle: "2. The Magic of Argan and Keratin Shields",
              content: "Apply organic peptide oils mid-length before plunging in pools or beaches. The botanical film prevents chlorine salts from sucking away keratin proteins."
            }
          ]
        };
      case "Aria's Secret To Nightly Retinol and Peptide Layering":
        return {
          author: "Aria Thorne (Clinical Skin Care Specialist)",
          readTime: "6 Min Read",
          sections: [
            {
              subtitle: "1. Respecting Active pH Scales",
              content: "Retinol requires low acidic environments to convert properly into active retinoic acid. Never mix active vitamin Cs with peptide creams directly."
            },
            {
              subtitle: "2. Sandwich Hydration Technique",
              content: "Apply a light layer of ceramide defense, wait 4 minutes, tap your microscopic Retinol serum, and immediately follow with a thick lavender sleep oil."
            }
          ]
        };
      default:
        return {
          author: "Beautician Editorial Panel",
          readTime: "4 Min Read",
          sections: [
            {
              subtitle: "1. Consistency Over Intense Treatments",
              content: "Grooming results build compound cycles. Practicing gentle daily washes delivers stronger cuticle arrays than hyper-scrubbing."
            },
            {
              subtitle: "2. Listen To Seasonal Transits",
              content: "Ensure your beauty cabinet rotates elements during climatic transitions. Use light emulsions in summer and dense shea oils during dry seasons."
            }
          ]
        };
    }
  };

  return (
    <section id="blog" className="py-24 bg-white dark:bg-neutral-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-gold">BEAUTY INSIGHTS & EDITORIALS</span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold mt-2 text-neutral-900 dark:text-neutral-100">
            Beautician Blog
          </h2>
          <p className="text-neutral-500 dark:text-neutral-400 mt-3 font-light text-sm max-w-lg mx-auto">
            Stay ahead with high-fashion cosmetology forecasts, skin barrier chemistry briefings, and seasonal styling keys curated by our senior consultants.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-brand-pink to-brand-gold mx-auto mt-4 rounded-full" />
        </div>

        {/* Blog Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" id="blog-grid">
          {BLOG_DATA.map((article) => {
            const articleLikes = likes[article.id] || Math.floor(12 + (article.title.length % 5) * 8);
            const isLiked = hasLiked[article.id] || false;
            
            return (
              <div
                key={article.id}
                onClick={() => setSelectedArticle(article)}
                className="bg-neutral-50 dark:bg-neutral-900 border border-neutral-100 dark:border-neutral-850 rounded-3xl overflow-hidden override-shadow shadow-sm hover:shadow-xl hover:border-brand-pink/30 hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between group cursor-pointer"
                id={`blog-card-${article.id}`}
              >
                {/* Photo Header */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-108 duration-700 select-none"
                    referrerPolicy="no-referrer"
                  />
                  
                  {/* Category badging */}
                  <div className="absolute top-4 left-4 px-3 py-1 bg-neutral-900/80 backdrop-blur-md text-[10px] text-brand-pink font-mono uppercase tracking-widest font-semibold rounded-full border border-white/10">
                    Cosmetology News
                  </div>
                </div>

                {/* Body metadata */}
                <div className="p-6 flex-1 flex flex-col justify-between text-left">
                  <div>
                    {/* Timestamp details */}
                    <div className="flex items-center space-x-4 text-[11px] text-neutral-400 dark:text-neutral-450 font-semibold mb-3">
                      <span className="flex items-center space-x-1">
                        <Calendar className="h-3.5 w-3.5 text-brand-gold" />
                        <span>{article.date}</span>
                      </span>
                      <span>•</span>
                      <span>By Beautician Panel</span>
                    </div>

                    <h3 className="font-serif text-base font-bold text-neutral-850 dark:text-neutral-100 group-hover:text-brand-gold duration-300 leading-snug">
                      {article.title}
                    </h3>

                    <p className="text-xs text-neutral-500 dark:text-neutral-404 mt-2.5 font-light leading-relaxed line-clamp-3">
                      {article.summary}
                    </p>
                  </div>

                  {/* Actions line */}
                  <div className="mt-6 pt-4 border-t border-neutral-105 dark:border-neutral-850 flex items-center justify-between">
                    <span className="text-[10px] font-mono uppercase tracking-widest font-bold text-brand-gold flex items-center space-x-1">
                      <span>Read Full Entry</span>
                      <ArrowRight className="h-3.5 w-3.5 text-brand-gold inline" />
                    </span>

                    {/* Social interactions */}
                    <div className="flex items-center space-x-3 text-neutral-400 dark:text-neutral-505">
                      <button
                        onClick={(e) => handleLike(article.id, e)}
                        className={`flex items-center space-x-1 hover:text-brand-pink transition-colors focus:outline-none cursor-pointer ${
                          isLiked ? "text-brand-pink" : ""
                        }`}
                        title="Like article"
                      >
                        <Heart className={`h-4.5 w-4.5 ${isLiked ? "fill-current" : ""}`} />
                        <span className="text-xs font-mono">{articleLikes}</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Full Article Reader Modal overlay */}
        {selectedArticle && (
          <div className="fixed inset-0 z-55 flex items-center justify-center p-4 bg-black/65 backdrop-blur-sm animate-fade-in">
            <div className="bg-white dark:bg-neutral-950 rounded-3xl w-full max-w-2xl max-h-[90vh] overflow-y-auto override-shadow border border-neutral-150 dark:border-neutral-800 p-6 sm:p-8 relative">
              
              {/* Close click */}
              <button
                onClick={() => setSelectedArticle(null)}
                className="absolute top-4 right-4 p-2 rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-900 text-neutral-400 dark:text-neutral-550 transition-colors focus:outline-none"
                id="close-reader-btn"
              >
                <X className="h-5.5 w-5.5" />
              </button>

              {/* Tag header */}
              <span className="text-[9px] uppercase tracking-widest font-bold text-brand-gold px-2.5 py-1 bg-brand-pink/20 rounded-full border border-brand-pink/10 inline-block">
                BEAUTICIAN KNOWLEDGE BASIN
              </span>

              {/* Dynamic Read Time */}
              <div className="flex flex-wrap items-center gap-4 text-[11px] text-neutral-400 dark:text-neutral-450 mt-4">
                <span className="flex items-center space-x-1 font-mono">
                  <Calendar className="h-3.5 w-3.5 text-brand-gold" />
                  <span>{selectedArticle.date}</span>
                </span>
                <span>•</span>
                <span className="flex items-center space-x-1 font-mono">
                  <Clock className="h-3.5 w-3.5 text-brand-gold" />
                  <span>{getFullArticleBody(selectedArticle).readTime}</span>
                </span>
                <span>•</span>
                <span className="font-semibold text-brand-gold">
                  By {getFullArticleBody(selectedArticle).author}
                </span>
              </div>

              {/* Title */}
              <h3 className="font-serif text-2xl sm:text-3xl font-bold mt-3 text-neutral-900 dark:text-neutral-100">
                {selectedArticle.title}
              </h3>

              <img
                src={selectedArticle.image}
                alt={selectedArticle.title}
                className="w-full h-56 sm:h-64 object-cover rounded-2xl mt-4 border border-neutral-100 dark:border-neutral-900"
                referrerPolicy="no-referrer"
              />

              {/* Sub-summary */}
              <p className="text-sm font-serif italic text-neutral-600 dark:text-neutral-350 mt-4 pl-3 border-l-2 border-brand-pink">
                "{selectedArticle.summary}"
              </p>

              {/* Structured Body Articles Sections */}
              <div className="mt-8 space-y-6 text-left">
                {getFullArticleBody(selectedArticle).sections.map((sect, i) => (
                  <div key={i} className="space-y-2">
                    <h4 className="font-serif text-base font-bold text-neutral-850 dark:text-neutral-150 flex items-center space-x-2">
                      <Sparkles className="h-4.5 w-4.5 text-brand-gold" />
                      <span>{sect.subtitle}</span>
                    </h4>
                    <p className="text-xs text-neutral-505 dark:text-neutral-400 font-light leading-relaxed">
                      {sect.content}
                    </p>
                  </div>
                ))}
              </div>

              {/* Safety notice and CTA */}
              <div className="bg-brand-pink-light/35 dark:bg-neutral-910 rounded-2xl border border-brand-pink/15 p-4 mt-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <p className="text-[11px] text-neutral-500 dark:text-neutral-400 leading-snug font-light max-w-sm">
                  Want professional advice tailored exactly to your personal skincare skin oil indexes and face shape? Schedule a luxury physical audit.
                </p>
                <a
                  href="#appointment"
                  onClick={() => setSelectedArticle(null)}
                  className="px-5 py-2.5 bg-brand-gold text-white text-[10px] uppercase font-bold tracking-widest rounded-xl text-center shadow-md shrink-0 block whitespace-nowrap"
                >
                  Book Professional Audit
                </a>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
}
