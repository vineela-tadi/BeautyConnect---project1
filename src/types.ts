export interface Service {
  id: string;
  name: string;
  description: string;
  price: string;
  image: string;
  category: "makeup" | "hair" | "skin" | "nail" | "spa";
}

export interface TeamMember {
  id: string;
  name: string;
  designation: string;
  experience: string;
  specialization: string;
  image: string;
  socials: {
    instagram?: string;
    facebook?: string;
    twitter?: string;
  };
}

export interface Testimonial {
  id: string;
  name: string;
  rating: number;
  review: string;
  image: string;
  role: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: "Bridal Makeup" | "Hair Styling" | "Nail Art" | "Skin Care" | "Salon Interior";
  image: string;
}

export interface BlogPost {
  id: string;
  title: string;
  date: string;
  summary: string;
  image: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}
