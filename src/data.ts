import { Service, TeamMember, Testimonial, PortfolioItem, BlogPost, FAQItem } from "./types";

export const SERVICES_DATA: Service[] = [
  {
    id: "s1",
    name: "Bridal Makeup Masterclass & Styling",
    description: "Flawless HD/Airbrush bridal makeup tailored to illuminate your natural elegance on your special day.",
    price: "₹9,999",
    image: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=800&q=80",
    category: "makeup"
  },
  {
    id: "s2",
    name: "Signature Party Makeup",
    description: "Glamorous, high-fashion, or elegant daytime/evening event looks custom-tailored to turning heads.",
    price: "₹2,499",
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80",
    category: "makeup"
  },
  {
    id: "s3",
    name: "Advanced Hair Styling",
    description: "From intricate bridal updos and sleek ponytails to elegant red-carpet Hollywood waves.",
    price: "₹1,499",
    image: "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=800&q=80",
    category: "hair"
  },
  {
    id: "s4",
    name: "Couture Hair Coloring & Balayage",
    description: "Luxurious premium, non-damaging organic dyes, dimensional highlights, custom balayage, and glazes.",
    price: "₹4,499",
    image: "https://images.unsplash.com/photo-1605497746444-ac9db13454c6?auto=format&fit=crop&w=800&q=80",
    category: "hair"
  },
  {
    id: "s5",
    name: "Keratin Fusion & Hair Spa",
    description: "Deep nourishing treatment designed to repair follicles, restore moisture, and deliver glass-like shine.",
    price: "₹1,999",
    image: "https://images.unsplash.com/photo-1595425970377-c9703cf48b6d?auto=format&fit=crop&w=800&q=80",
    category: "hair"
  },
  {
    id: "s6",
    name: "Clinical Skin Care Therapy",
    description: "Advanced non-invasive derma-care, hyperpigmentation correction, state-of-the-art pore tightening.",
    price: "₹3,499",
    image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=800&q=80",
    category: "skin"
  },
  {
    id: "s7",
    name: "Luxurious Facials (Collagen Boost)",
    description: "Infused with gold flakes, plant stem-cells, and cooling hydration masks for an instantly youthful radiance.",
    price: "₹1,899",
    image: "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=800&q=80",
    category: "skin"
  },
  {
    id: "s8",
    name: "Signature Manicure & Deluxe Pedicure",
    description: "Exfoliation with mineral salts, botanical oil massages, cuticle care, and designer gel polishes.",
    price: "₹1,299",
    image: "https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=800&q=80",
    category: "nail"
  },
  {
    id: "s9",
    name: "Designer Nail Art",
    description: "Unique high-fashion geometric extensions, hand-painted details, chrome overlays, and crystal styling.",
    price: "₹1,499",
    image: "https://images.unsplash.com/photo-1607779097040-26e80aa78e66?auto=format&fit=crop&w=800&q=80",
    category: "nail"
  },
  {
    id: "s10",
    name: "Micro-Precision Eyebrow Shaping",
    description: "Masterful symmetrical matching utilizing organic wax or high-precision threading to frame your look.",
    price: "₹399",
    image: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=800&q=80",
    category: "makeup"
  },
  {
    id: "s11",
    name: "Gentle Organic Waxing",
    description: "Soothing aloe-vera and honey infused wax formulas that exfoliate while keeping sensitive skin smooth.",
    price: "₹899",
    image: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=800&q=80",
    category: "skin"
  },
  {
    id: "s12",
    name: "Luxury Massage & Spa Rituals",
    description: "Therapeutic hot basalt stones, custom-blended lavender oils, and full body tension release rituals.",
    price: "₹2,999",
    image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=800&q=80",
    category: "spa"
  }
];

export const TEAM_DATA: TeamMember[] = [
  {
    id: "t1",
    name: "Elena Rostova",
    designation: "Founder & Creative Director",
    experience: "14+ Years Experience",
    specialization: "Editorial & Advanced Aesthetics",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80",
    socials: { instagram: "elena_beautician", facebook: "elena.creative" }
  },
  {
    id: "t2",
    name: "Zoe Sterling",
    designation: "Senior Makeup Artist",
    experience: "8+ Years Experience",
    specialization: "High-Definition Bridal & Airbrush Glamour",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=600&q=80",
    socials: { instagram: "zoesterling_makeup", twitter: "zoe_glam" }
  },
  {
    id: "t3",
    name: "Marcus Vane",
    designation: "Master Hair Artisanal Specialist",
    experience: "10+ Years Experience",
    specialization: "Balayage, Sculpted Crops & Color Chemistry",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80",
    socials: { instagram: "marcus_vane_hair", facebook: "marcus.vane" }
  },
  {
    id: "t4",
    name: "Aria Thorne",
    designation: "Clinical Skin Care Practitioner",
    experience: "11+ Years Experience",
    specialization: "Dermal Peels, Anti-Aging & Laser Therapy",
    image: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&w=600&q=80",
    socials: { instagram: "aria_skin_beautician" }
  },
  {
    id: "t5",
    name: "Nicolette Finch",
    designation: "Senior Nail Artist & Extension Guru",
    experience: "6+ Years Experience",
    specialization: "Swarovski Embeds, 3D Sculpting & Shellac Art",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=600&q=80",
    socials: { instagram: "nicole_nails_beautician" }
  }
];

export const PORTFOLIO_DATA: PortfolioItem[] = [
  {
    id: "p1",
    title: "Celestial Glow Bridal Look",
    category: "Bridal Makeup",
    image: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "p2",
    title: "Crimson Velvet Holiday Updo",
    category: "Hair Styling",
    image: "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "p3",
    title: "Onyx Chrome Designer Stilettos",
    category: "Nail Art",
    image: "https://images.unsplash.com/photo-1607779097040-26e80aa78e66?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "p4",
    title: "Radiant Skin Dermal Glow Session",
    category: "Skin Care",
    image: "https://images.unsplash.com/photo-1512290923902-8a9f81da236c?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "p5",
    title: "Sophisticated Royal Lounge Interior",
    category: "Salon Interior",
    image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "p6",
    title: "Shimmering Amber Glam Look",
    category: "Bridal Makeup",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "p7",
    title: "Golden Honey Dimensional Highlights",
    category: "Hair Styling",
    image: "https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "p8",
    title: "Chic Minimalist Champagne Shellac",
    category: "Nail Art",
    image: "https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "p9",
    title: "Mid-Century Modern Styling Stations",
    category: "Salon Interior",
    image: "https://images.unsplash.com/photo-1633681926035-ec1ac984418a?auto=format&fit=crop&w=800&q=80"
  }
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: "cl1",
    name: "Malika Sen",
    rating: 5,
    role: "Happy Bride",
    review: "Elena and Zoe made my special day absolute magic! The airbrush bridal makeup was weightless and lasted flawlessly for over 14 hours. I never felt so confident and beautiful. Beautician deserves 10 stars!",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=250&q=80"
  },
  {
    id: "cl2",
    name: "Rohan Mehra",
    rating: 5,
    role: "Regular Brand Client",
    review: "Marcus is a wizard with hair coloring! The dimensional organic balayage looks natural, leaves my hair remarkably soft, and I constantly receive compliments on it. Extremely clean and professional protocols.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=250&q=80"
  },
  {
    id: "cl3",
    name: "Samantha Hastings",
    rating: 5,
    role: "Executive Wellness Client",
    review: "The clinical skincare treatments here completely transformed my skin's texture. I used to struggle with dry spots, but Aria custom-blended a serum that worked wonders. The spa atmosphere is true luxury.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=250&q=80"
  },
  {
    id: "cl4",
    name: "Tanya Kapoor",
    rating: 5,
    role: "Beauty Blogger",
    review: "Best nail salon in town by absolute miles. Nicolette is a master craftsman; her geometric hand-painted nail designs are literally works of art. Highly recommend the glass luxury tea during your session!",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=250&q=80"
  },
  {
    id: "cl5",
    name: "Dr. Rachel Croft",
    rating: 5,
    role: "Physician & Client",
    review: "As a doctor, my top priorities are hygiene, sanitation, and certified medical-grade safety. Beautician standards are stellar. Their disinfection cycles and immaculate tools set a gold standard in aesthetics. Absolutely pristine.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=250&q=80"
  },
  {
    id: "cl6",
    name: "Diya Sharma",
    rating: 5,
    role: "Corporate Lead",
    review: "The luxury basalt stones massage is the ultimate post-work week escape. Deep muscle release, incredibly serene ambient tracks, and outstanding service. Booking is seamless and they are always punctual.",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=250&q=80"
  }
];

export const BLOG_DATA: BlogPost[] = [
  {
    id: "b1",
    title: "The Ultimate Guide to Long-Lasting Bridal Glow",
    date: "June 2, 2026",
    summary: "Professional skin prepping steps, cellular hydration secrets, and dietary choices that guarantee you glow naturally for your bridal walks.",
    image: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "b2",
    title: "Summer Hair Care: Defeating Humidity and UV Rays",
    date: "May 28, 2026",
    summary: "Discover five essential routine adjustments, hydration masks, and thermal protectants to prevent coloring oxidation and frizz in tropical heat.",
    image: "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "b3",
    title: "Aria's Secret To Nightly Retinol and Peptide Layering",
    date: "May 15, 2026",
    summary: "Our clinical skin practitioner shares the safe order of active ingredients application to enhance cellular turnover and plump tired skin overnight.",
    image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "b4",
    title: "10 High-Fashion Makeup Trends Shaking Up the Red Carpet",
    date: "April 29, 2026",
    summary: "A breakdown of glowing glazed lips, micro-eyebrow precision sculpting, and graphic copper eyeshadow trends currently dominating the catwalk.",
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "b5",
    title: "Choosing the Right Balayage for your Underlying Skin Undertone",
    date: "April 11, 2026",
    summary: "Avoid brassiness! Learn how warm golden honeys or cool-toned ice blondes pair across fair, olive, and deeper skin canvases.",
    image: "https://images.unsplash.com/photo-1605497746444-ac9db13454c6?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "b6",
    title: "The Therapeutic Art of Self-Massage & Crystal Rollers",
    date: "March 20, 2026",
    summary: "A step-by-step master tutorial to promote lymphatic drainage and sculpt your cheekbones in under 10 minutes at home.",
    image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=800&q=80"
  }
];

export const FAQ_DATA: FAQItem[] = [
  {
    id: "f1",
    question: "How do I book an appointment?",
    answer: "You can book directly by filling out the 'Book Appointment' section on this website, calling our service concierge desk (91-98765-43210), or visiting our boutique lounge. We recommend booking bridal and large event packages at least 4 to 6 weeks in advance."
  },
  {
    id: "f2",
    question: "Which beauty products do you use?",
    answer: "We strictly utilize ultra-premium, dermatologically approved, hypoallergenic, and cruelty-free luxury brands such as Chanel, Oribe, Charlotte Tilbury, Estée Lauder, and our own proprietary plant-derived, fragrance-free wellness elixirs."
  },
  {
    id: "f3",
    question: "Do you offer premium bridal packages?",
    answer: "Yes, our luxury Bridal Package is a comprehensive signature offering. It includes custom pre-wedding skin preparation, personalized wedding day HD/Airbrush makeup, couture hairstyling, premium accessories draping, and a dedicated, on-site beauty consultant supporting you throughout."
  },
  {
    id: "f4",
    question: "What are your luxury lounge hours?",
    answer: "Our flagship lounge is open Monday through Sunday, from 9:00 AM to 9:00 PM (including public holidays). Late-night emergency event styling can be pre-arranged with our concierge team."
  },
  {
    id: "f5",
    question: "Can I easily reschedule my appointment?",
    answer: "Of course. We understand schedules shift. Appointments can be rescheduled or cancelled up to 24 hours prior to your slot free of charge by calling our lounge or tapping our support link."
  },
  {
    id: "f6",
    question: "Do you provide home or destination event services?",
    answer: "Yes, we have an elite mobile styling team that travels both domestically and internationally for VIP events, high-fashion editorials, wedding destinations, and exclusive home bookings."
  }
];
