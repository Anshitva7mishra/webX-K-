import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Phone,
  MapPin,
  CheckCircle,
  Clock,
  Star,
  MessageSquare,
  Wrench,
  ShieldCheck,
  Zap,
  ChevronDown,
  Truck,
  ArrowRight,
  ExternalLink,
  Users,
  Store,
  Award,
  Settings,
  Plus,
  Minus,
} from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// --- Sub-component: Spotlight Card ---
const SpotlightCard = ({ children, className = "" }) => {
  const divRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e) => {
    if (!divRef.current) return;
    const rect = divRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setOpacity(1)}
      onMouseLeave={() => setOpacity(0)}
      className={`relative overflow-hidden rounded-[2rem] md:rounded-[2.5rem] border border-white/10 bg-slate-900/40 backdrop-blur-md ${className}`}
    >
      <div
        className="pointer-events-none absolute -inset-px transition duration-300"
        style={{
          opacity,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(99, 102, 241, 0.15), transparent 40%)`,
        }}
      />
      {children}
    </div>
  );
};

// --- FAQ Accordion Item Component ---
const FAQItem = ({ question, answer, isOpen, onClick }) => {
  return (
    <div
      className={`border-b border-white/5 last:border-none transition-all duration-500 ${isOpen ? "bg-white/[0.02]" : ""}`}
    >
      <button
        onClick={onClick}
        className="w-full py-6 md:py-8 px-5 md:px-8 flex items-center justify-between text-left group"
      >
        <span
          className={`text-lg md:text-xl font-bold transition-colors duration-300 pr-4 ${isOpen ? "text-white" : "text-slate-400 group-hover:text-slate-200"}`}
        >
          {question}
        </span>
        <div
          className={`p-2 rounded-full flex-shrink-0 transition-all duration-500 ${isOpen ? "bg-indigo-600 rotate-180" : "bg-white/5"}`}
        >
          {isOpen ? (
            <Minus size={18} className="text-white" />
          ) : (
            <Plus size={18} className="text-slate-400" />
          )}
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="px-5 md:px-8 pb-8 text-slate-400 leading-relaxed text-base md:text-lg max-w-4xl">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const ServicesPage = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [openFaqIndex, setOpenFaqIndex] = useState(0);

  const categories = [
    "All",
    "Installation",
    "Repair & Maintenance",
    "Consultation",
    "Emergency",
  ];

  const stats = [
    {
      label: "Active Users",
      value: "12,400+",
      icon: <Users size={20} />,
      color: "from-blue-500 to-indigo-600",
    },
    {
      label: "Partner Shops",
      value: "850+",
      icon: <Store size={20} />,
      color: "from-emerald-500 to-teal-600",
    },
    {
      label: "Expert Techs",
      value: "320+",
      icon: <ShieldCheck size={20} />,
      color: "from-purple-500 to-pink-600",
    },
    {
      label: "Cities covered",
      value: "12+",
      icon: <MapPin size={20} />,
      color: "from-orange-500 to-red-600",
    },
  ];

  const shops = [
    {
      id: 1,
      name: "Pro-Tech Solutions",
      image:
        "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80&w=800",
      location: "South Delhi, DL",
      servicesCount: 14,
      rating: 4.9,
      speciality: "Certified Smart Home Hub",
    },
    {
      id: 2,
      name: "Elite Electric & Co.",
      image:
        "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=800",
      location: "Gurugram, HR",
      servicesCount: 8,
      rating: 4.8,
      speciality: "Industrial Repairs",
    },
    {
      id: 3,
      name: "QuickFix Hub",
      image:
        "https://images.unsplash.com/photo-1513106580091-1d82408b8cd6?auto=format&fit=crop&q=80&w=800",
      location: "Noida, UP",
      servicesCount: 22,
      rating: 4.7,
      speciality: "24/7 Emergency Support",
    },
  ];

  const services = [
    {
      id: 1,
      category: "Installation",
      name: "Smart Home Setup",
      image:
        "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&q=80&w=800",
      icon: <Zap size={24} />,
      color: "from-blue-600 to-indigo-600",
      desc: "Complete integration of smart devices for a seamless home experience.",
      benefits: ["Energy Efficiency", "Voice Control", "Remote Access"],
      price: "$299",
      duration: "4-6 Hours",
      availability: "Daily",
    },
    {
      id: 2,
      category: "Repair & Maintenance",
      name: "System Diagnostics",
      image:
        "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=800",
      icon: <Wrench size={24} />,
      color: "from-emerald-500 to-teal-600",
      desc: "Comprehensive check-up and repair of your existing infrastructure.",
      benefits: ["Preventative Care", "Performance Boost", "Safety Check"],
      price: "$89",
      duration: "1-2 Hours",
      availability: "On-call",
    },
    {
      id: 3,
      category: "Emergency",
      name: "24/7 Rapid Response",
      image:
        "https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&q=80&w=800",
      icon: <ShieldCheck size={24} />,
      color: "from-red-500 to-orange-600",
      desc: "Immediate assistance for critical failures or safety hazards.",
      benefits: ["30-Min Arrival", "Priority Support", "Certified Techs"],
      price: "Quote",
      duration: "Immediate",
      availability: "24/7",
    },
    {
      id: 4,
      category: "Consultation",
      name: "Project Planning",
      image:
        "https://images.unsplash.com/photo-1454165833767-027eeea15c3e?auto=format&fit=crop&q=80&w=800",
      icon: <MessageSquare size={24} />,
      color: "from-purple-500 to-pink-600",
      desc: "Expert advice on technical architecture and material selection.",
      benefits: ["Cost Optimization", "Expert Blueprint", "Timeline Analysis"],
      price: "Free",
      duration: "45 Mins",
      availability: "Appt",
    },
  ];

  const faqs = [
    {
      question: "How do I book a specific shopkeeper?",
      answer:
        "Once you select a service, you will see a list of verified shops in your area. You can view their profiles, ratings, and number of services provided before choosing your preferred partner.",
    },
    {
      question: "Are all the service providers verified?",
      answer:
        "Absolutely. Every shopkeeper and technician on our platform undergoes a multi-stage verification process, including industrial certification checks, background verification, and quality audits.",
    },
    {
      question: "Is there a warranty on the services provided?",
      answer:
        "Yes, we provide a standard 12-month warranty on all parts used and a 30-day labor guarantee.",
    },
    {
      question: "What happens in case of an emergency?",
      answer:
        "Our 24/7 Rapid Response team is designed for critical failures. Typically professionals arrive within 30-45 minutes.",
    },
  ];

  const filteredServices =
    activeCategory === "All"
      ? services
      : services.filter((s) => s.category === activeCategory);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-300 font-sans selection:bg-indigo-500/30 overflow-x-hidden">
      <Navbar />

      {/* Background Glows */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[10%] -left-[10%] w-[70%] md:w-[40%] h-[40%] rounded-full bg-indigo-500/10 blur-[120px]" />
        <div className="absolute top-[20%] -right-[10%] w-[60%] md:w-[30%] h-[30%] rounded-full bg-emerald-500/5 blur-[120px]" />
      </div>

      {/* 1. HERO SECTION */}
      <section className="relative pt-32 md:pt-48 pb-10 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex flex-wrap items-center justify-center gap-3 py-2 px-4 rounded-full bg-white/5 border border-white/10 text-indigo-400 text-[10px] md:text-xs font-bold tracking-widest uppercase mb-6 md:mb-8">
              <div className="flex -space-x-2">
                {[1, 2, 3].map((i) => (
                  <img
                    key={i}
                    className="w-5 h-5 md:w-6 md:h-6 rounded-full border-2 border-[#030712]"
                    src={`https://i.pravatar.cc/100?img=${i + 15}`}
                    alt="user"
                  />
                ))}
              </div>
              <span>Trusted by 12k+ users</span>
              <span className="hidden sm:inline w-1 h-1 rounded-full bg-slate-600" />
              <span className="text-emerald-400">850+ Shops Live</span>
            </div>
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white mb-6 md:mb-8 tracking-tighter leading-[1.1]">
              Services that <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-white to-emerald-400">
                Power your Life.
              </span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* 2. TRUST STATS STRIP */}
      <section className="max-w-7xl mx-auto px-6 mb-20 md:mb-32">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="p-6 md:p-8 rounded-[2rem] bg-white/5 border border-white/5 flex flex-col items-center text-center hover:bg-white/[0.08] transition-all group"
            >
              <div
                className={`w-10 h-10 md:w-12 md:h-12 rounded-2xl bg-gradient-to-br ${stat.color} flex items-center justify-center text-white mb-4 shadow-lg group-hover:scale-110 transition-transform`}
              >
                {stat.icon}
              </div>
              <div className="text-2xl md:text-3xl font-black text-white">
                {stat.value}
              </div>
              <div className="text-[10px] uppercase tracking-[0.2em] font-bold text-slate-500 mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. LISTED SHOPS SECTION */}
      <section className="max-w-7xl mx-auto px-4 md:px-6 py-12 md:py-24 bg-white/5 rounded-[2.5rem] md:rounded-[4rem] border border-white/5 mb-20 md:mb-32">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-16 gap-6 px-4">
          <div>
            <span className="text-emerald-500 font-bold tracking-widest text-[10px] md:text-xs uppercase mb-2 block">
              Our Partners
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-white tracking-tighter leading-tight">
              Verified <br className="hidden md:block" /> Neighborhood Shops
            </h2>
          </div>
          <p className="text-slate-500 font-bold uppercase tracking-widest text-[10px] md:text-sm md:border-l border-white/10 md:pl-6">
            Digitalizing Local Workshops
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {shops.map((shop) => (
            <div key={shop.id} className="group relative">
              <div className="relative h-[400px] md:h-[450px] w-full rounded-[2.5rem] md:rounded-[3rem] overflow-hidden border border-white/10">
                <img
                  src={shop.image}
                  alt={shop.name}
                  className="w-full h-full object-cover grayscale-[0.5] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-[#030712]/40 to-transparent" />
                <div className="absolute top-6 right-6">
                  <div className="bg-black/50 backdrop-blur-md py-2 px-3 rounded-xl flex items-center gap-2 text-white font-bold text-xs">
                    <Star
                      size={14}
                      className="fill-yellow-500 text-yellow-500"
                    />{" "}
                    {shop.rating}
                  </div>
                </div>
                <div className="absolute bottom-6 md:bottom-8 left-6 md:left-8 right-6 md:right-8">
                  <div className="flex items-center gap-2 text-indigo-400 font-bold text-[10px] tracking-widest uppercase mb-2">
                    <Award size={14} /> {shop.speciality}
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-1">
                    {shop.name}
                  </h3>
                  <p className="text-slate-400 text-xs md:text-sm flex items-center gap-2 mb-6">
                    <MapPin size={14} /> {shop.location}
                  </p>
                  <div className="flex items-center justify-between pt-6 border-t border-white/10">
                    <div className="flex flex-col">
                      <span className="text-[10px] text-slate-500 uppercase font-bold tracking-wider">
                        Services
                      </span>
                      <span className="text-sm md:text-base text-white font-black">
                        {shop.servicesCount} Provided
                      </span>
                    </div>
                    <div className="p-3 md:p-4 rounded-xl md:rounded-2xl bg-white text-black group-hover:bg-indigo-500 group-hover:text-white transition-colors cursor-pointer">
                      <ArrowRight size={18} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. STICKY CATEGORY FILTER */}
      <div className="sticky top-4 md:top-6 z-50 px-4 md:px-6 mb-12 md:mb-16">
        <div className="max-w-fit mx-auto p-1.5 md:p-2 bg-slate-900/80 backdrop-blur-xl border border-white/10 rounded-2xl md:rounded-3xl shadow-2xl overflow-x-auto no-scrollbar">
          <div className="flex flex-nowrap justify-start md:justify-center gap-1">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`relative px-4 md:px-6 py-2 md:py-2.5 rounded-xl md:rounded-2xl text-[10px] md:text-sm font-bold transition-all whitespace-nowrap ${
                  activeCategory === cat
                    ? "text-white"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                {activeCategory === cat && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-indigo-600 rounded-xl md:rounded-2xl -z-10 shadow-lg"
                  />
                )}
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* 5. SERVICE CARDS */}
      <section className="max-w-7xl mx-auto px-6 py-6 md:py-12  md:mb-32">
        <motion.div
          layout
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredServices.map((service) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                key={service.id}
              >
                <SpotlightCard className="group h-full">
                  <div className="p-6 md:p-10 flex flex-col xl:flex-row gap-8 md:gap-10">
                    <div className="flex-1">
                      <div
                        className={`w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center text-white mb-6 md:mb-10 shadow-xl shadow-indigo-500/20`}
                      >
                        {service.icon}
                      </div>
                      <h3 className="text-3xl md:text-5xl font-black text-white mb-4 md:mb-6 tracking-tighter leading-none">
                        {service.name}
                      </h3>
                      <p className="text-slate-400 text-base md:text-lg mb-8 md:mb-10 leading-relaxed max-w-xs">
                        {service.desc}
                      </p>
                      <div className="space-y-3 md:space-y-4">
                        {service.benefits.map((benefit, i) => (
                          <div
                            key={i}
                            className="flex items-center gap-3 md:gap-4 text-xs md:text-sm font-bold text-slate-300"
                          >
                            <div className="p-1 rounded-full bg-emerald-500/10 text-emerald-500">
                              <CheckCircle size={14} />
                            </div>
                            {benefit}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="w-full xl:w-72 flex flex-col">
                      <div className="relative flex-1 rounded-[2rem] md:rounded-[3rem] overflow-hidden border border-white/10 bg-slate-900/40 p-6 md:p-8 flex flex-col justify-center min-h-[200px]">
                        <img
                          src={service.image}
                          className="absolute inset-0 w-full h-full object-cover opacity-20 grayscale group-hover:scale-110 transition-transform duration-1000"
                          alt="service"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent" />
                        <div className="relative z-10">
                          <span className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] mb-1 block">
                            Est. Cost
                          </span>
                          <div className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-6 md:mb-8">
                            {service.price}
                            <span className="text-xs md:text-sm font-normal text-slate-500 ml-1 md:ml-2">
                              / service
                            </span>
                          </div>
                          <div className="space-y-3 pt-6 md:pt-8 border-t border-white/10">
                            <div className="flex items-center justify-between text-[10px] font-bold uppercase tracking-wider">
                              <span className="text-slate-500 flex items-center gap-2">
                                <Clock size={12} /> Time:
                              </span>
                              <span className="text-white">
                                {service.duration}
                              </span>
                            </div>
                            <div className="flex items-center justify-between text-[10px] font-bold uppercase tracking-wider">
                              <span className="text-slate-500 flex items-center gap-2">
                                <Settings size={12} /> Availability:
                              </span>
                              <span className="text-white">
                                {service.availability}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <button className="mt-4 md:mt-6 w-full py-4 md:py-6 rounded-2xl md:rounded-3xl bg-white text-black font-black flex items-center justify-center gap-3 hover:bg-indigo-600 hover:text-white transition-all group/btn text-sm md:text-base">
                        Book Now{" "}
                        <ArrowRight
                          size={18}
                          className="group-hover/btn:translate-x-2 transition-transform"
                        />
                      </button>
                    </div>
                  </div>
                </SpotlightCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* 6. FAQ SECTION */}
      <section className="max-w-4xl mx-auto px-6 py-16 md:py-12">
        <div className="text-center mb-12 md:mb-20">
          <span className="text-indigo-400 font-bold tracking-[0.3em] text-[10px] md:text-xs uppercase mb-4 block">
            Common Queries
          </span>
          <h2 className="text-3xl md:text-6xl font-black text-white tracking-tighter">
            Everything you <br /> need to know.
          </h2>
        </div>
        <div className="rounded-[2rem] md:rounded-[3rem] overflow-hidden border border-white/10 bg-white/[0.02]">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openFaqIndex === index}
              onClick={() =>
                setOpenFaqIndex(openFaqIndex === index ? null : index)
              }
            />
          ))}
        </div>
      </section>

      {/* 7. FINAL CTA */}
      <section className="max-w-7xl mx-auto px-4 md:px-6 pb-20 md:pb-32">
        <div className="relative rounded-[2.5rem] md:rounded-[4rem] bg-indigo-600 p-0.5 md:p-1 overflow-hidden">
          <div className="bg-[#030712] rounded-[2.4rem] md:rounded-[3.9rem] p-10 md:p-24 text-center relative overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-indigo-500/20 via-transparent to-transparent" />
            <h2 className="text-4xl md:text-7xl font-black text-white mb-8 md:mb-10 tracking-tighter">
              Ready to start?
            </h2>
            <div className="flex flex-col sm:flex-row justify-center gap-4 md:gap-6 relative z-10">
              <button className="w-full sm:w-auto px-8 md:px-12 py-4 md:py-6 rounded-xl md:rounded-2xl bg-indigo-600 text-white font-black flex items-center justify-center gap-3 hover:bg-indigo-500 hover:-translate-y-1 transition-all shadow-2xl text-sm md:text-base">
                <Phone size={18} /> Schedule Call
              </button>
              <button className="w-full sm:w-auto px-8 md:px-12 py-4 md:py-6 rounded-xl md:rounded-2xl bg-white/5 border border-white/10 text-white font-black flex items-center justify-center gap-3 hover:bg-white/10 transition-all text-sm md:text-base">
                <MessageSquare size={18} /> WhatsApp Expert
              </button>
            </div>
            <p className="mt-8 md:mt-12 text-slate-500 font-bold uppercase tracking-widest text-[10px] md:text-xs relative z-10">
              Join 850+ shopkeepers already providing services.
            </p>
          </div>
        </div>
      </section>

      <Footer />

      {/* Custom Styles for no-scrollbar */}
      <style jsx="true">{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
};

export default ServicesPage;
