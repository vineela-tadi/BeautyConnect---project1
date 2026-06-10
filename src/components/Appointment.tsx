import React, { useState, useEffect } from "react";
import { SERVICES_DATA } from "../data";
import { Sparkles, Calendar, Clock, CheckCircle2, User, Phone, Mail, FileText, ArrowRight } from "lucide-react";

interface AppointmentProps {
  preSelectedService?: string;
  onSuccessReset?: () => void;
}

export default function Appointment({ preSelectedService, onSuccessReset }: AppointmentProps) {
  // Form input states
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [selectedService, setSelectedService] = useState("");
  const [prefDate, setPrefDate] = useState("");
  const [prefTime, setPrefTime] = useState("");
  const [notes, setNotes] = useState("");

  // Error validations state
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isLoading, setIsLoading] = useState(false);
  const [bookingReceipt, setBookingReceipt] = useState<{
    id: string;
    name: string;
    service: string;
    date: string;
    time: string;
  } | null>(null);

  // Pre-fill if a service was passed down from parent quick book buttons
  useEffect(() => {
    if (preSelectedService) {
      // Find matches in services data or pricing packages and auto-set
      const found = SERVICES_DATA.find(s => s.name === preSelectedService) || 
                    preSelectedService.includes("Package") || 
                    preSelectedService.includes("Bridal");
      
      if (found) {
        setSelectedService(preSelectedService);
      }
    }
  }, [preSelectedService]);

  const handleValidation = () => {
    const tempErrors: { [key: string]: string } = {};
    
    if (fullName.trim().length < 3) {
      tempErrors.name = "Full name must be at least 3 letters.";
    }

    const phoneRegex = /^[0-9+() \-]{10,15}$/;
    if (!phoneRegex.test(phone.trim())) {
      tempErrors.phone = "Provide a valid phone number (min 10 digits).";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      tempErrors.email = "Please enter a valid email address.";
    }

    if (!selectedService) {
      tempErrors.service = "Select a beauty treatment from our menu.";
    }

    if (!prefDate) {
      tempErrors.date = "Please choose a preferred reservation date.";
    } else {
      // Prevent past dates
      const selected = new Date(prefDate);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      if (selected < today) {
        tempErrors.date = "Reservation date cannot be set in the past.";
      }
    }

    if (!prefTime) {
      tempErrors.time = "Select a preferred slot timing.";
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!handleValidation()) {
      return;
    }

    setIsLoading(true);

    // Simulate luxury API booking lag
    setTimeout(() => {
      const generatedId = "BTC-" + Math.floor(100000 + Math.random() * 900000);
      setBookingReceipt({
        id: generatedId,
        name: fullName,
        service: selectedService,
        date: prefDate,
        time: prefTime
      });
      setIsLoading(false);
    }, 1500);
  };

  const handleResetForm = () => {
    setFullName("");
    setPhone("");
    setEmail("");
    setSelectedService("");
    setPrefDate("");
    setPrefTime("");
    setNotes("");
    setErrors({});
    setBookingReceipt(null);
    if (onSuccessReset) onSuccessReset();
  };

  return (
    <section id="appointment" className="py-24 bg-white dark:bg-neutral-950 transition-colors duration-300 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-brand-pink/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-1/10 w-96 h-96 bg-brand-gold/5 rounded-full blur-3xl opacity-60" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-gold">SECURE MY PAMPER WINDOW</span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold mt-2 text-neutral-900 dark:text-neutral-100">
            Book Appointment
          </h2>
          <p className="text-neutral-500 dark:text-neutral-400 mt-3 font-light text-sm max-w-lg mx-auto">
            Reserve your premium beauty care session seamlessly. Fill in the requested details, and our boutique concierge will verify your slot immediately.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-brand-pink to-brand-gold mx-auto mt-4 rounded-full" />
        </div>

        {/* Dynamic Dual view: Successful booking receipt vs Interactive reservation Form */}
        <div className="max-w-3xl mx-auto" id="booking-stage">
          {bookingReceipt ? (
            /* Luxury Successful confirmation ticket block */
            <div className="bg-neutral-50 dark:bg-neutral-900 rounded-3xl p-8 border border-brand-pink/35 shadow-2xl text-center relative overflow-hidden animate-fade-in">
              <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-brand-pink via-brand-gold to-brand-pink" />
              
              <div className="p-4 bg-green-50 dark:bg-green-950/30 text-green-500 rounded-full inline-flex mb-6 animate-pulse">
                <CheckCircle2 className="h-12 w-12" />
              </div>

              <h3 className="font-serif text-2xl font-bold text-neutral-850 dark:text-neutral-150">
                Reservation Confirmed!
              </h3>
              
              <p className="text-xs font-light text-neutral-500 dark:text-neutral-400 mt-2 max-w-md mx-auto">
                Congratulations! Your VIP booking request has been securely registered. A customized priority receipt has been transmitted to your provided email address.
              </p>

              {/* Receipt metadata board */}
              <div className="my-8 max-w-md mx-auto bg-white dark:bg-neutral-955 p-6 rounded-2xl border border-neutral-150 dark:border-neutral-850 text-left space-y-4">
                <div className="flex justify-between items-center text-xs">
                  <span className="text-neutral-400 uppercase tracking-wider font-mono">Reservation ID</span>
                  <span className="font-mono font-bold text-brand-gold">{bookingReceipt.id}</span>
                </div>

                <div className="flex justify-between items-center text-xs border-t border-neutral-105 dark:border-neutral-900 pt-3">
                  <span className="text-neutral-400 uppercase tracking-wider font-mono">Client Fullname</span>
                  <span className="font-semibold text-neutral-800 dark:text-neutral-200">{bookingReceipt.name}</span>
                </div>

                <div className="flex justify-between items-center text-xs border-t border-neutral-105 dark:border-neutral-900 pt-3">
                  <span className="text-neutral-400 uppercase tracking-wider font-mono">Beauty Treatment</span>
                  <span className="font-semibold text-brand-gold">{bookingReceipt.service}</span>
                </div>

                <div className="flex justify-between items-center text-xs border-t border-neutral-105 dark:border-neutral-900 pt-3">
                  <span className="text-neutral-400 uppercase tracking-wider font-mono">Assigned Date</span>
                  <span className="font-semibold text-neutral-800 dark:text-neutral-200">
                    {new Date(bookingReceipt.date).toLocaleDateString("en-US", {
                      weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
                    })}
                  </span>
                </div>

                <div className="flex justify-between items-center text-xs border-t border-neutral-105 dark:border-neutral-900 pt-3">
                  <span className="text-neutral-400 uppercase tracking-wider font-mono">Assigned Time</span>
                  <span className="font-semibold text-neutral-800 dark:text-neutral-200">{bookingReceipt.time}</span>
                </div>
              </div>

              {/* Notice text */}
              <div className="p-4 bg-brand-pink-light/35 dark:bg-neutral-905 rounded-xl border border-brand-pink/10 inline-block font-mono text-[10px] text-brand-gold max-w-sm mb-6">
                *OUR PERSONAL PAMPER ASSIGN CONSULTANT WILL CALL THE REGISTERED DEVICE WITHIN 15 MINUTES FOR SESSION CONFIRMATION.
              </div>

              {/* Action reset */}
              <div>
                <button
                  onClick={handleResetForm}
                  className="px-8 py-3.5 bg-neutral-900 dark:bg-brand-gold text-white dark:text-white rounded-full text-xs font-bold uppercase tracking-widest hover:scale-105 active:scale-95 duration-300 transition-all cursor-pointer"
                  id="book-another-btn"
                >
                  Book Another Session
                </button>
              </div>

            </div>
          ) : (
            /* Standard booking form */
            <form
              onSubmit={handleFormSubmit}
              className="glass-panel p-8 sm:p-12 rounded-3xl border border-neutral-200/50 dark:border-white/5 override-shadow shadow-2xl flex flex-col space-y-6"
              id="appointment-form"
              noValidate
            >
              <div className="grid md:grid-cols-2 gap-6">
                
                {/* Full Name field */}
                <div className="flex flex-col text-left space-y-1.5 relative">
                  <label htmlFor="fullName" className="text-xs font-semibold text-neutral-700 dark:text-neutral-300 flex items-center space-x-1.5">
                    <User className="h-4.5 w-4.5 text-brand-gold" />
                    <span>Full Name <strong className="text-red-500">*</strong></span>
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="Enter your first & last name"
                    className={`w-full px-4 py-3 rounded-xl bg-neutral-50 dark:bg-neutral-900 border text-sm text-neutral-800 dark:text-neutral-100 placeholder-neutral-400 dark:placeholder-neutral-550 focus:outline-none focus:ring-1 focus:ring-brand-gold transition-colors ${
                      errors.name ? "border-red-500 focus:ring-red-500" : "border-neutral-200 dark:border-neutral-850"
                    }`}
                  />
                  {errors.name && <span className="text-[10px] text-red-500 mt-1 font-semibold">{errors.name}</span>}
                </div>

                {/* Phone Number Field */}
                <div className="flex flex-col text-left space-y-1.5 relative">
                  <label htmlFor="phone" className="text-xs font-semibold text-neutral-700 dark:text-neutral-300 flex items-center space-x-1.5">
                    <Phone className="h-4.5 w-4.5 text-brand-gold" />
                    <span>Phone Number <strong className="text-red-500">*</strong></span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="e.g., 9876543210"
                    className={`w-full px-4 py-3 rounded-xl bg-neutral-50 dark:bg-neutral-900 border text-sm text-neutral-800 dark:text-neutral-100 placeholder-neutral-400 dark:placeholder-neutral-550 focus:outline-none focus:ring-1 focus:ring-brand-gold transition-colors ${
                      errors.phone ? "border-red-500 focus:ring-red-500" : "border-neutral-200 dark:border-neutral-850"
                    }`}
                  />
                  {errors.phone && <span className="text-[10px] text-red-500 mt-1 font-semibold">{errors.phone}</span>}
                </div>

              </div>

              <div className="grid md:grid-cols-2 gap-6">

                {/* Email Address */}
                <div className="flex flex-col text-left space-y-1.5 relative">
                  <label htmlFor="email" className="text-xs font-semibold text-neutral-700 dark:text-neutral-300 flex items-center space-x-1.5">
                    <Mail className="h-4.5 w-4.5 text-brand-gold" />
                    <span>Email Address <strong className="text-red-500">*</strong></span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="yourname@gmail.com"
                    className={`w-full px-4 py-3 rounded-xl bg-neutral-50 dark:bg-neutral-900 border text-sm text-neutral-800 dark:text-neutral-100 placeholder-neutral-400 dark:placeholder-neutral-550 focus:outline-none focus:ring-1 focus:ring-brand-gold transition-colors ${
                      errors.email ? "border-red-500 focus:ring-red-500" : "border-neutral-200 dark:border-neutral-850"
                    }`}
                  />
                  {errors.email && <span className="text-[10px] text-red-500 mt-1 font-semibold">{errors.email}</span>}
                </div>

                {/* Service Selection dropdown */}
                <div className="flex flex-col text-left space-y-1.5 relative">
                  <label htmlFor="service" className="text-xs font-semibold text-neutral-700 dark:text-neutral-300 flex items-center space-x-1.5">
                    <Sparkles className="h-4.5 w-4.5 text-brand-gold" />
                    <span>Select Beauty Treatment <strong className="text-red-500">*</strong></span>
                  </label>
                  <select
                    id="service"
                    value={selectedService}
                    onChange={(e) => setSelectedService(e.target.value)}
                    className={`w-full px-4 py-3 rounded-xl bg-neutral-50 dark:bg-neutral-900 border text-sm text-neutral-800 dark:text-neutral-100 focus:outline-none focus:ring-1 focus:ring-brand-gold transition-colors ${
                      errors.service ? "border-red-500 focus:ring-red-500" : "border-neutral-200 dark:border-neutral-850"
                    }`}
                  >
                    <option value="">-- Choose Treatment --</option>
                    <optgroup label="TREATMENT SPECIALS">
                      {SERVICES_DATA.map(s => (
                        <option key={s.id} value={s.name}>{s.name} ({s.price})</option>
                      ))}
                    </optgroup>
                    <optgroup label="VALUE PACKS SPECIALS">
                      <option value="Basic Beauty Package">Basic Beauty Package (₹999)</option>
                      <option value="Premium Beauty Package">Premium Beauty Package (₹2,499)</option>
                      <option value="Bridal Package Masterclass">Bridal Package Masterclass (₹9,999)</option>
                    </optgroup>
                  </select>
                  {errors.service && <span className="text-[10px] text-red-500 mt-1 font-semibold">{errors.service}</span>}
                </div>

              </div>

              <div className="grid md:grid-cols-2 gap-6">

                {/* Date Picker */}
                <div className="flex flex-col text-left space-y-1.5 relative">
                  <label htmlFor="prefDate" className="text-xs font-semibold text-neutral-700 dark:text-neutral-300 flex items-center space-x-1.5">
                    <Calendar className="h-4.5 w-4.5 text-brand-gold" />
                    <span>Preferred Date <strong className="text-red-500">*</strong></span>
                  </label>
                  <input
                    type="date"
                    id="prefDate"
                    value={prefDate}
                    onChange={(e) => setPrefDate(e.target.value)}
                    className={`w-full px-4 py-3 rounded-xl bg-neutral-50 dark:bg-neutral-900 border text-sm text-neutral-800 dark:text-neutral-100 focus:outline-none focus:ring-1 focus:ring-brand-gold transition-colors ${
                      errors.date ? "border-red-500" : "border-neutral-200 dark:border-neutral-850"
                    }`}
                  />
                  {errors.date && <span className="text-[10px] text-red-500 mt-1 font-semibold">{errors.date}</span>}
                </div>

                {/* Preferred time selector */}
                <div className="flex flex-col text-left space-y-1.5 relative">
                  <label htmlFor="prefTime" className="text-xs font-semibold text-neutral-700 dark:text-neutral-300 flex items-center space-x-1.5">
                    <Clock className="h-4.5 w-4.5 text-brand-gold" />
                    <span>Preferred Timing Slot <strong className="text-red-500">*</strong></span>
                  </label>
                  <select
                    id="prefTime"
                    value={prefTime}
                    onChange={(e) => setPrefTime(e.target.value)}
                    className={`w-full px-4 py-3 rounded-xl bg-neutral-50 dark:bg-neutral-900 border text-sm text-neutral-800 dark:text-neutral-100 focus:outline-none focus:ring-1 focus:ring-brand-gold transition-colors ${
                      errors.time ? "border-red-500 focus:ring-red-500" : "border-neutral-200 dark:border-neutral-850"
                    }`}
                  >
                    <option value="">-- Choose Timing --</option>
                    <option value="09:00 AM - 11:00 AM">09:00 AM - 11:00 AM (Morning Radiance)</option>
                    <option value="11:00 AM - 01:00 PM">11:00 AM - 01:00 PM (Brunch Glow)</option>
                    <option value="01:00 PM - 03:00 PM">01:00 PM - 03:00 PM (Afternoon Rejuvenate)</option>
                    <option value="03:00 PM - 05:00 PM">03:00 PM - 05:00 PM (Sunset Pamper)</option>
                    <option value="05:00 PM - 07:00 PM">05:00 PM - 07:00 PM (Evening Twilight)</option>
                    <option value="07:00 PM - 09:00 PM">07:00 PM - 09:00 PM (Night Relaxer)</option>
                  </select>
                  {errors.time && <span className="text-[10px] text-red-500 mt-1 font-semibold">{errors.time}</span>}
                </div>

              </div>

              {/* Additional Notes */}
              <div className="flex flex-col text-left space-y-1.5 relative">
                <label htmlFor="notes" className="text-xs font-semibold text-neutral-700 dark:text-neutral-300 flex items-center space-x-1.5">
                  <FileText className="h-4.5 w-4.5 text-brand-gold" />
                  <span>Stylist Special Request & Allergy Concerns</span>
                </label>
                <textarea
                  id="notes"
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  rows={3}
                  placeholder="Tell us about special skin allergies, scalp sensitivity, hair length, Saree-draping extras, or coffee preferences..."
                  className="w-full px-4 py-3 rounded-xl bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-850 text-sm text-neutral-800 dark:text-neutral-100 placeholder-neutral-400 dark:placeholder-neutral-550 focus:outline-none focus:ring-1 focus:ring-brand-gold transition-colors resize-none"
                />
              </div>

              {/* Action Button trigger */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full py-4 bg-gradient-to-r from-brand-gold to-brand-pink text-white rounded-xl text-xs font-extrabold uppercase tracking-widest shadow-xl shadow-brand-gold/10 hover:shadow-brand-gold/30 hover:scale-[1.01] active:scale-95 disabled:opacity-50 transition-all duration-300 cursor-pointer flex items-center justify-center space-x-2"
                  id="submit-booking-btn"
                >
                  {isLoading ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/35 border-t-white rounded-full animate-spin" />
                      <span>Transmitting secure session data...</span>
                    </>
                  ) : (
                    <>
                      <span>Securely Book Appointment</span>
                      <ArrowRight className="h-4 w-4" />
                    </>
                  )}
                </button>
              </div>

            </form>
          )}
        </div>

      </div>
    </section>
  );
}
