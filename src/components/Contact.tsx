import React, { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, Instagram, Facebook, Twitter, Chrome } from "lucide-react";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errorMSG, setErrorMSG] = useState("");

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMSG("");

    if (!name.trim() || !email.trim() || !subject.trim() || !message.trim()) {
      setErrorMSG("All fields are mandatory. Please fill complete info.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      setErrorMSG("Provide a legitimate email address.");
      return;
    }

    setIsSubmitting(true);

    // Simulate luxury SMTP transmision lag
    setTimeout(() => {
      setIsSubmitting(false);
      setSuccess(true);
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
    }, 1200);
  };

  return (
    <section id="contact" className="py-24 bg-white dark:bg-neutral-950 transition-colors duration-300 relative overflow-hidden">
      {/* Visual background decoratories */}
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-brand-pink/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-gold/5 rounded-full blur-3xl opacity-60" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-gold">HAVE AN INQUIRY?</span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold mt-2 text-neutral-900 dark:text-neutral-100">
            Contact Us
          </h2>
          <p className="text-neutral-500 dark:text-neutral-401 mt-3 font-light text-sm max-w-lg mx-auto">
            Get in touch immediately! Whether you want to enquire about event services, bespoke wedding coordination, or general styling help.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-brand-pink to-brand-gold mx-auto mt-4 rounded-full" />
        </div>

        {/* Contact Layout Dual block */}
        <div className="grid lg:grid-cols-12 gap-12 items-stretch" id="contact-stage">
          
          {/* Left Column: Info Grid */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
            <div className="space-y-6">
              <h3 className="font-serif text-2xl font-bold text-neutral-850 dark:text-neutral-100">
                Beautician Flagship Lounge
              </h3>
              <p className="text-xs sm:text-sm text-neutral-500 dark:text-neutral-400 font-light leading-relaxed">
                Step inside our serene universe of holistic luxury. Our flagship boutique sits nestled within the heart of the aesthetic lounge quarter, fitted with organic ambient treatment stalls and complimentary herbal beverages.
              </p>

              {/* Grid of details */}
              <div className="space-y-4 pt-4">
                
                {/* Address block */}
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-brand-pink/20 text-brand-gold rounded-xl flex-shrink-0">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-neutral-400 uppercase tracking-widest">Our Salon Location</h4>
                    <p className="text-xs sm:text-sm text-neutral-700 dark:text-neutral-300 font-light leading-snug mt-1">
                      Beautician Mansion, Plot #45-A, Royal Galleria Square, Lavelle Road, Bangalore, KA - 560001, India.
                    </p>
                  </div>
                </div>

                {/* Phone details */}
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-brand-pink/20 text-brand-gold rounded-xl flex-shrink-0">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-neutral-400 uppercase tracking-widest">Phone Reservations</h4>
                    <p className="text-xs sm:text-sm text-neutral-700 dark:text-neutral-300 font-light leading-snug mt-1">
                      Concierge Desk: <strong className="text-brand-gold font-semibold">+91 98765 43210</strong> <br />
                      Office Line: <strong className="text-brand-gold font-light">+91 80 4321 0987</strong>
                    </p>
                  </div>
                </div>

                {/* Email details */}
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-brand-pink/20 text-brand-gold rounded-xl flex-shrink-0">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-neutral-400 uppercase tracking-widest">Electronic Correspondences</h4>
                    <p className="text-xs sm:text-sm text-neutral-700 dark:text-neutral-300 font-light leading-snug mt-1">
                      General Booking: <span className="text-brand-gold hover:underline">concierge@beautician.salon</span> <br />
                      Bridal Contracts: <span className="text-brand-gold hover:underline">bridal@beautician.salon</span>
                    </p>
                  </div>
                </div>

                {/* Timings */}
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-brand-pink/20 text-brand-gold rounded-xl flex-shrink-0">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-neutral-400 uppercase tracking-widest">Boutique Operating Hours</h4>
                    <p className="text-xs sm:text-sm text-neutral-700 dark:text-neutral-300 font-light leading-snug mt-1">
                      Monday to Sunday: <span className="font-semibold text-neutral-800 dark:text-neutral-100">09:00 AM - 09:00 PM</span> <br />
                      <span className="text-[10px] text-brand-gold font-mono">*Open on all major public & holiday transits.</span>
                    </p>
                  </div>
                </div>

              </div>
            </div>

            {/* Social channels links */}
            <div className="pt-6 border-t border-neutral-100 dark:border-neutral-900">
              <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest block mb-3">Join our visual community</span>
              <div className="flex space-x-3">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-neutral-105 hover:bg-brand-pink-light text-neutral-600 hover:text-brand-gold dark:bg-neutral-900 dark:hover:bg-neutral-850 dark:text-neutral-300 shadow-xs active:scale-95 duration-300 transition-all cursor-pointer"
                  title="Instagram"
                >
                  <Instagram className="h-4.5 w-4.5" />
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-neutral-105 hover:bg-brand-pink-light text-neutral-600 hover:text-brand-gold dark:bg-neutral-900 dark:hover:bg-neutral-850 dark:text-neutral-300 shadow-xs active:scale-95 duration-300 transition-all cursor-pointer"
                  title="Facebook"
                >
                  <Facebook className="h-4.5 w-4.5" />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-neutral-105 hover:bg-brand-pink-light text-neutral-600 hover:text-brand-gold dark:bg-neutral-900 dark:hover:bg-neutral-850 dark:text-neutral-300 shadow-xs active:scale-95 duration-300 transition-all cursor-pointer"
                  title="Twitter"
                >
                  <Twitter className="h-4.5 w-4.5" />
                </a>
                <a
                  href="https://pinterest.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-neutral-105 hover:bg-brand-pink-light text-neutral-600 hover:text-brand-gold dark:bg-neutral-900 dark:hover:bg-neutral-850 dark:text-neutral-300 shadow-xs active:scale-95 duration-300 transition-all cursor-pointer"
                  title="Pinterest"
                >
                  <Chrome className="h-4.5 w-4.5" />
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Contact Message box Form or styled map */}
          <div className="lg:col-span-7 flex flex-col space-y-6">
            
            <div className="bg-neutral-50 dark:bg-neutral-900 p-8 rounded-3xl border border-neutral-150 dark:border-neutral-853 override-shadow shadow-md flex-1">
              
              {success ? (
                /* Simulated success message confirmation animations */
                <div className="h-full flex flex-col justify-center items-center text-center p-6 space-y-4 animate-fade-in">
                  <div className="p-4 bg-green-50 dark:bg-green-950/20 text-green-500 rounded-full inline-flex animate-bounce">
                    <CheckCircle2 className="h-10 w-10" />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-neutral-850 dark:text-neutral-150">
                    Message Dispatched Perfectly!
                  </h3>
                  <p className="text-xs text-neutral-500 dark:text-neutral-450 font-light max-w-sm">
                    Thank you! Your message code has been received immediately. Our customer delight executive will respond directly to your email location within 4 hours.
                  </p>
                  <button
                    onClick={() => setSuccess(false)}
                    className="px-6 py-2.5 bg-brand-gold hover:opacity-90 text-white rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer"
                  >
                    Send Another message
                  </button>
                </div>
              ) : (
                /* Write Form message */
                <form onSubmit={handleFormSubmit} className="space-y-5 text-left" noValidate>
                  <div className="text-left mb-2">
                    <h3 className="font-serif text-lg font-bold text-neutral-800 dark:text-neutral-100">
                      Transmit Direct Message
                    </h3>
                    <p className="text-[11px] text-neutral-400 dark:text-neutral-500 mt-1 font-light">
                      All communications are encrypted and private.
                    </p>
                  </div>

                  {errorMSG && (
                    <div className="p-3 bg-red-50 border border-red-200 rounded-xl text-xs text-red-500 font-semibold mb-2">
                      {errorMSG}
                    </div>
                  )}

                  <div className="grid md:grid-cols-2 gap-5">
                    
                    {/* Name item */}
                    <div className="flex flex-col space-y-1">
                      <label htmlFor="contactName" className="text-xs font-semibold text-neutral-700 dark:text-neutral-300">Name</label>
                      <input
                        type="text"
                        id="contactName"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="e.g. Malika Sen"
                        className="w-full px-4 py-3 rounded-xl bg-white dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-850 text-sm text-neutral-800 dark:text-neutral-100 focus:outline-none focus:ring-1 focus:ring-brand-gold transition-colors"
                      />
                    </div>

                    {/* Email item */}
                    <div className="flex flex-col space-y-1">
                      <label htmlFor="contactEmail" className="text-xs font-semibold text-neutral-700 dark:text-neutral-300">Email Address</label>
                      <input
                        type="email"
                        id="contactEmail"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="yourname@gmail.com"
                        className="w-full px-4 py-3 rounded-xl bg-white dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-850 text-sm text-neutral-800 dark:text-neutral-100 focus:outline-none focus:ring-1 focus:ring-brand-gold transition-colors"
                      />
                    </div>

                  </div>

                  {/* Subject item */}
                  <div className="flex flex-col space-y-1">
                    <label htmlFor="contactSubject" className="text-xs font-semibold text-neutral-700 dark:text-neutral-300">Subject</label>
                    <input
                      type="text"
                      id="contactSubject"
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      placeholder="e.g. Bridal makeup services quote details"
                      className="w-full px-4 py-3 rounded-xl bg-white dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-850 text-sm text-neutral-800 dark:text-neutral-100 focus:outline-none focus:ring-1 focus:ring-brand-gold transition-colors"
                    />
                  </div>

                  {/* Full Comment */}
                  <div className="flex flex-col space-y-1">
                    <label htmlFor="contactMsg" className="text-xs font-semibold text-neutral-700 dark:text-neutral-300">Message Content</label>
                    <textarea
                      id="contactMsg"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      rows={4}
                      placeholder="Draft your query details here..."
                      className="w-full px-4 py-3 rounded-xl bg-white dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-850 text-sm text-neutral-800 dark:text-neutral-100 focus:outline-none focus:ring-1 focus:ring-brand-gold transition-colors resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full py-3 bg-neutral-900 border border-neutral-800 hover:bg-brand-gold hover:border-brand-gold dark:bg-brand-gold dark:border-brand-gold dark:hover:bg-neutral-800 hover:scale-[1.01] active:scale-95 duration-300 text-white rounded-xl text-xs font-bold uppercase tracking-widest transition-all cursor-pointer flex items-center justify-center space-x-2"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                        <span>Transmitting Message...</span>
                      </>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send className="h-3.5 w-3.5" />
                      </>
                    )}
                  </button>

                </form>
              )}

            </div>

            {/* Interactive Embedded Google Map (with styling filter) */}
            <div className="w-full h-80 rounded-3xl overflow-hidden border border-neutral-200 dark:border-neutral-850 shadow-md">
              <iframe
                title="Beautician Luxury Location Maps"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m12!1m3!1d3887.9715729111385!2d77.5960411!3d12.9733056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae167909062af3%3A0xe54bcaab8ed5b849!2sLavelle%20Road%20Bangalore!5e0!3m2!1sen!2sin!4v1700000000000"
                width="100%"
                height="100%"
                className="border-0 dark:brightness-90 dark:contrast-105"
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
