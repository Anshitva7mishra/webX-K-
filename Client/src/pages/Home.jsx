import React, { useEffect, useState, useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import {
  CheckCircle2,
  Star,
  Users,
  MapPin,
  Wrench,
  ShieldCheck,
  Clock,
  MessageSquare,
  ArrowRight,
  Sparkles,
  TrendingUp,
  Award,
  ChevronRight,
} from "lucide-react";

const Home = () => {
  const [countUp, setCountUp] = useState({
    years: 0,
    customers: 0,
    projects: 0,
    rating: 0,
  });
  const [activeService, setActiveService] = useState(null);
  const statsRef = useRef(null);
  const isStatsInView = useInView(statsRef, { once: true, amount: 0.3 });

  useEffect(() => {
    if (!isStatsInView) return;

    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;
    let step = 0;

    const counter = setInterval(() => {
      step++;
      const progress = step / steps;
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);

      setCountUp({
        years: Math.floor(10 * easeOutQuart),
        customers: Math.floor(500 * easeOutQuart),
        projects: Math.floor(2000 * easeOutQuart),
        rating: (4.9 * easeOutQuart).toFixed(1),
      });

      if (step >= steps) clearInterval(counter);
    }, interval);

    return () => clearInterval(counter);
  }, [isStatsInView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const scaleVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const slideVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const services = [
    {
      name: "Repair",
      icon: <Wrench size={32} />,
      desc: "Expert repairs that restore functionality and extend the life of your equipment with precision.",
      color: "cyan",
      features: ["Quick diagnosis", "Quality parts", "Warranty included"],
    },
    {
      name: "Installation",
      icon: <ShieldCheck size={32} />,
      desc: "Professional installation services ensuring optimal performance and longevity from day one.",
      color: "teal",
      features: ["Expert setup", "Safety first", "Full testing"],
    },
    {
      name: "Maintenance",
      icon: <Clock size={32} />,
      desc: "Preventive maintenance programs that keep your systems running smoothly year-round.",
      color: "sky",
      features: ["Regular checks", "Cost savings", "Extended lifespan"],
    },
    {
      name: "Consultation",
      icon: <MessageSquare size={32} />,
      desc: "Strategic advice and expert planning to optimize your home or business operations.",
      color: "cyan",
      features: ["Free quotes", "Expert advice", "Custom solutions"],
    },
  ];

  const usps = [
    {
      title: "Transparent Pricing",
      desc: "No hidden fees or surprises. You get a detailed, itemized quote before we start any work.",
      icon: <Star className="text-cyan-400" size={24} />,
    },
    {
      title: "Licensed Professionals",
      desc: "Our team consists of certified experts with thorough background checks and ongoing training.",
      icon: <Users className="text-cyan-400" size={24} />,
    },
    {
      title: "24/7 Priority Support",
      desc: "Emergency? We are just a phone call away, anytime, anywhere, with rapid response times.",
      icon: <Clock className="text-cyan-400" size={24} />,
    },
  ];

  const testimonials = [
    {
      name: "Sarah Jenkins",
      text: "The team at NearBy was incredibly professional. They arrived on time and the quality of work was outstanding. I couldn't be happier with the results!",
      rating: 5,
      location: "Downtown District",
      avatar: "SJ",
      role: "Homeowner",
    },
    {
      name: "Michael Chen",
      text: "Finally a service that is transparent about pricing. No surprises, just great work. They've earned a customer for life. Highly recommend!",
      rating: 5,
      location: "Riverside Area",
      avatar: "MC",
      role: "Business Owner",
    },
  ];

  const stats = [
    {
      value: countUp.years,
      suffix: "+",
      label: "Years of Excellence",
      icon: <Award size={24} />,
    },
    {
      value: countUp.customers,
      suffix: "+",
      label: "Happy Customers",
      icon: <Users size={24} />,
    },
    {
      value: countUp.projects,
      suffix: "+",
      label: "Projects Done",
      icon: <TrendingUp size={24} />,
    },
    {
      value: countUp.rating,
      suffix: "/5",
      label: "Customer Rating",
      icon: <Star size={24} />,
    },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=Instrument+Sans:wght@400;500;600;700&display=swap');
        
        .home-container {
          font-family: 'Instrument Sans', -apple-system, sans-serif;
          background: linear-gradient(to bottom, #020617 0%, #0f172a 50%, #1e293b 100%);
          position: relative;
          overflow-x: hidden;
        }
        
        .home-container::before {
          content: '';
          position: fixed;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: radial-gradient(circle at 50% 50%, rgba(6, 182, 212, 0.03) 0%, transparent 50%);
          animation: rotate 30s linear infinite;
          pointer-events: none;
          z-index: 0;
        }
        
        @keyframes rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        .brand-text {
          font-family: 'Syne', sans-serif;
        }

        .glass-card {
          background: rgba(15, 23, 42, 0.6);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.06);
        }

        .gradient-text {
          background: linear-gradient(135deg, #22d3ee 0%, #06b6d4 50%, #0891b2 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-size: 200% 200%;
          animation: gradientShift 3s ease infinite;
        }

        @keyframes gradientShift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        .service-card-hover {
          position: relative;
        }

        .service-card-hover::before {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: 1.5rem;
          padding: 1px;
          background: linear-gradient(135deg, rgba(6, 182, 212, 0.5), rgba(20, 184, 166, 0.5));
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .service-card-hover:hover::before {
          opacity: 1;
        }

        .testimonial-quote::after {
          content: '"';
          position: absolute;
          bottom: -20px;
          right: 20px;
          font-size: 180px;
          font-family: 'Syne', serif;
          color: rgba(6, 182, 212, 0.05);
          line-height: 1;
          pointer-events: none;
        }

        .float-animation {
          animation: float 6s ease-in-out infinite;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }

        html {
          scroll-behavior: smooth;
        }

        ::-webkit-scrollbar {
          width: 10px;
        }

        ::-webkit-scrollbar-track {
          background: #0f172a;
        }

        ::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #06b6d4, #14b8a6);
          border-radius: 5px;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(to bottom, #22d3ee, #2dd4bf);
        }

        .shimmer-effect {
          position: relative;
          overflow: hidden;
        }

        .shimmer-effect::after {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent);
          animation: shimmer 3s infinite;
        }

        @keyframes shimmer {
          to {
            left: 100%;
          }
        }
      `}</style>

      <div className="home-container bg-slate-950  text-white min-h-screen">
        <Navbar />
        <Hero />

        {/* 1. Quick Highlights Section */}
        <motion.section
          ref={statsRef}
          className="relative bg-slate-950 -mt-20 z-10 px-4"
          initial="hidden"
          animate={isStatsInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <div className="max-w-7xl mx-auto">
            <motion.div
              className="glass-card rounded-4xl bg-slate-950 p-8 md:p-12 lg:mt-10 grid grid-cols-2 md:grid-cols-4 gap-8 text-center shadow-2xl"
              variants={scaleVariants}
            >
              {stats.map((stat, idx) => (
                <motion.div
                  key={idx}
                  className="group cursor-default"
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <motion.div
                    className="flex justify-center mb-3 text-cyan-400"
                    initial={{ rotate: 0 }}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    {stat.icon}
                  </motion.div>
                  <motion.h3 className="brand-text text-4xl md:text-5xl font-black gradient-text">
                    {stat.value}
                    {stat.suffix}
                  </motion.h3>
                  <p className="text-gray-400 text-xs font-semibold tracking-[0.2em] uppercase mt-3 group-hover:text-gray-300 transition-colors">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.section>

        {/* 2. Service Categories Preview */}
        <section id="services" className="py-32 px-4 bg-slate-950">
          <div className="max-w-7xl mx-auto">
            <motion.div
              className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={containerVariants}
            >
              <motion.div className="max-w-xl" variants={slideVariants}>
                <div className="flex items-center gap-3 mb-4">
                  <motion.div
                    animate={{ rotate: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                  >
                    <Sparkles className="text-cyan-400" size={20} />
                  </motion.div>
                  <span className="text-sm font-bold text-cyan-400 tracking-[0.2em] uppercase">
                    What We Offer
                  </span>
                </div>
                <h2 className="brand-text text-5xl md:text-6xl font-bold mb-4 leading-tight">
                  Our Expertise
                </h2>
                <p className="text-gray-400 text-lg leading-relaxed">
                  Premium local services delivered with precision, care, and
                  unwavering commitment to excellence.
                </p>
              </motion.div>
              <motion.button
                className="flex items-center gap-2 text-cyan-400 font-bold group"
                variants={itemVariants}
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <span className="group-hover:text-cyan-300 transition-colors">
                  View All Services
                </span>
                <ArrowRight
                  size={20}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </motion.button>
            </motion.div>

            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={containerVariants}
            >
              {services.map((item, idx) => (
                <motion.div
                  key={idx}
                  className="service-card-hover glass-card p-8 rounded-3xl cursor-pointer relative overflow-hidden group"
                  variants={itemVariants}
                  whileHover={{
                    y: -12,
                    scale: 1.02,
                    transition: { type: "spring", stiffness: 300, damping: 20 },
                  }}
                  onHoverStart={() => setActiveService(idx)}
                  onHoverEnd={() => setActiveService(null)}
                >
                  <motion.div
                    className={`w-16 h-16 bg-${item.color}-500/10 rounded-2xl flex items-center justify-center mb-6 text-${item.color}-400 relative z-10`}
                    whileHover={{
                      rotate: [0, -10, 10, -10, 0],
                      scale: 1.1,
                      backgroundColor: "rgba(6, 182, 212, 0.2)",
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    {item.icon}
                  </motion.div>

                  <h4 className="brand-text text-xl font-bold mb-3 relative z-10">
                    {item.name}
                  </h4>
                  <p className="text-gray-400 text-sm leading-relaxed mb-4 relative z-10">
                    {item.desc}
                  </p>

                  <motion.div
                    className="space-y-2 relative z-10"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{
                      opacity: activeService === idx ? 1 : 0,
                      height: activeService === idx ? "auto" : 0,
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {item.features.map((feature, fIdx) => (
                      <motion.div
                        key={fIdx}
                        className="flex items-center gap-2 text-xs text-cyan-400"
                        initial={{ x: -10, opacity: 0 }}
                        animate={{
                          x: activeService === idx ? 0 : -10,
                          opacity: activeService === idx ? 1 : 0,
                        }}
                        transition={{ delay: fIdx * 0.1 }}
                      >
                        <CheckCircle2 size={12} />
                        <span>{feature}</span>
                      </motion.div>
                    ))}
                  </motion.div>

                  <motion.div
                    className="absolute inset-0 bg-linear-to-br from-cyan-500/5 to-teal-500/5 rounded-3xl"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* 3. Why Choose Us */}
        <section id="why-us" className="py-32 relative bg-slate-950 px-4">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-20 relative z-10">
            <motion.div
              className="lg:w-1/2 space-y-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={containerVariants}
            >
              <motion.div variants={slideVariants}>
                <div className="flex items-center gap-3 mb-4">
                  <ShieldCheck className="text-cyan-400" size={20} />
                  <span className="text-sm font-bold text-cyan-400 tracking-[0.2em] uppercase">
                    Why Choose Us
                  </span>
                </div>
                <h2 className="brand-text text-5xl md:text-6xl font-bold mb-6 leading-tight">
                  Why Neighbors Trust <br />
                  <span className="gradient-text">NearBy</span>
                </h2>
                <p className="text-gray-400 text-lg leading-relaxed">
                  We've built our reputation on transparency, expertise, and
                  exceptional service that goes beyond expectations.
                </p>
              </motion.div>

              <div className="space-y-6">
                {usps.map((usp, i) => (
                  <motion.div
                    key={i}
                    className="flex gap-5 p-6 rounded-2xl hover:bg-white/5 transition-all duration-300 cursor-pointer group border border-transparent hover:border-white/10"
                    variants={itemVariants}
                    whileHover={{ x: 10 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <motion.div
                      className="mt-1"
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      {usp.icon}
                    </motion.div>
                    <div>
                      <h4 className="brand-text text-xl font-bold mb-2 flex items-center gap-2">
                        {usp.title}
                        <motion.div
                          initial={{ opacity: 0, x: -10 }}
                          whileHover={{ opacity: 1, x: 0 }}
                        >
                          <ChevronRight size={18} className="text-cyan-400" />
                        </motion.div>
                      </h4>
                      <p className="text-gray-400 leading-relaxed">
                        {usp.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="lg:w-1/2 relative w-full"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={scaleVariants}
            >
              <div className="absolute -inset-4 bg-linear-to-br from-cyan-500/20 via-teal-500/20 to-sky-500/20 blur-3xl rounded-full float-animation opacity-60"></div>
              <motion.div
                className="relative aspect-square rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl group"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <motion.img
                  src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=800&q=80"
                  alt="Professional at work"
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                />
                <motion.div
                  className="absolute inset-0 bg-linear-to-t from-slate-900/80 via-slate-900/40 to-transparent"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="absolute bottom-8 left-8 right-8">
                    <motion.div
                      className="flex items-center gap-3 text-white"
                      initial={{ y: 20, opacity: 0 }}
                      whileHover={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.1 }}
                    >
                      <div className="w-12 h-12 rounded-full bg-cyan-500/20 flex items-center justify-center backdrop-blur-sm">
                        <ShieldCheck size={24} className="text-cyan-400" />
                      </div>
                      <div>
                        <p className="font-bold text-lg">Certified Experts</p>
                        <p className="text-sm text-gray-300">
                          Licensed & Insured
                        </p>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Local Trust Section */}
        <motion.section
          id="local-trust"
          className="py-32 px-4 text-center bg-slate-950 relative"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,var(--tw-gradient-stops))] from-cyan-900/10 via-transparent to-transparent pointer-events-none"></div>

          <div className="max-w-4xl mx-auto relative z-10">
            <motion.div
              className="flex justify-center mb-8"
              variants={itemVariants}
            >
              <motion.div
                className="px-5 py-2.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-bold tracking-[0.2em] uppercase flex items-center gap-2"
                animate={{
                  boxShadow: [
                    "0 0 0 0 rgba(6, 182, 212, 0.4)",
                    "0 0 0 10px rgba(6, 182, 212, 0)",
                  ],
                }}
                transition={{ repeat: Infinity, duration: 2 }}
              >
                <MapPin size={16} /> Local Business
              </motion.div>
            </motion.div>

            <motion.h2
              className="brand-text text-5xl md:text-6xl font-bold mb-8 leading-tight"
              variants={itemVariants}
            >
              Serving <span className="gradient-text">Jhansi</span> <br />
              Since 2014
            </motion.h2>

            <motion.p
              className="text-gray-300 text-xl leading-relaxed max-w-3xl mx-auto"
              variants={itemVariants}
            >
              We are a part of this community. Over the last decade, we've
              helped hundreds of local residents maintain their homes with
              reliable, high-quality service. From Downtown to the Suburbs,
              we've got you covered.
            </motion.p>

            <motion.div
              className="flex flex-wrap justify-center gap-6 mt-12 text-sm text-gray-400"
              variants={containerVariants}
            >
              {["Licensed & Insured", "BBB Accredited", "Family Owned"].map(
                (badge, idx) => (
                  <motion.div
                    key={idx}
                    className="flex items-center gap-2"
                    variants={itemVariants}
                    whileHover={{ scale: 1.1 }}
                  >
                    <CheckCircle2 size={18} className="text-green-400" />
                    <span>{badge}</span>
                  </motion.div>
                ),
              )}
            </motion.div>
          </div>
        </motion.section>

        {/* Testimonials Section */}
        <section id="testimonials" className="py-32 px-4 bg-slate-950">
          <div className="max-w-7xl mx-auto">
            <motion.div
              className="text-center mb-20"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={containerVariants}
            >
              <motion.div
                className="flex items-center justify-center gap-3 mb-4"
                variants={itemVariants}
              >
                <Star className="text-cyan-400" size={20} />
                <span className="text-sm font-bold text-cyan-400 tracking-[0.2em] uppercase">
                  Testimonials
                </span>
              </motion.div>
              <motion.h2
                className="brand-text text-5xl md:text-6xl font-bold mb-6"
                variants={itemVariants}
              >
                Community Feedback
              </motion.h2>
              <motion.p
                className="text-gray-400 text-lg max-w-2xl mx-auto"
                variants={itemVariants}
              >
                Don't just take our word for it—hear from the neighbors we've
                had the privilege to serve.
              </motion.p>
            </motion.div>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={containerVariants}
            >
              {testimonials.map((review, idx) => (
                <motion.div
                  key={idx}
                  className="testimonial-quote glass-card p-10 rounded-4xl border border-white/5 shadow-xl relative overflow-hidden group"
                  variants={scaleVariants}
                  whileHover={{
                    y: -8,
                    boxShadow: "0 25px 50px -12px rgba(6, 182, 212, 0.25)",
                  }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <motion.div className="flex gap-1 mb-8">
                    {[...Array(review.rating)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <Star
                          size={20}
                          fill="#fbbf24"
                          className="text-yellow-400"
                        />
                      </motion.div>
                    ))}
                  </motion.div>
                  <p className="text-xl text-gray-200 mb-8 leading-relaxed relative z-10">
                    "{review.text}"
                  </p>
                  <div className="flex items-center gap-4 relative z-10">
                    <motion.div
                      className="w-14 h-14 rounded-full bg-linear-to-br from-cyan-400 via-teal-400 to-sky-400 flex items-center justify-center text-slate-900 font-bold"
                      whileHover={{ scale: 1.1, rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      {review.avatar}
                    </motion.div>
                    <div>
                      <p className="brand-text font-bold text-lg">
                        {review.name}
                      </p>
                      <p className="text-sm text-gray-400">{review.location}</p>
                      <p className="text-xs text-cyan-400 uppercase tracking-wider mt-1">
                        {review.role}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              className="mt-16 text-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              <p className="text-gray-400">
                Join{" "}
                <span className="text-white font-bold">
                  500+ satisfied customers
                </span>{" "}
                who trust NearBy for their service needs
              </p>
            </motion.div>
          </div>
        </section>

        {/* Call-To-Action Banner */}
        <motion.section
          className="py-32 px-4 bg-slate-950"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          <div className="max-w-6xl mx-auto relative group">
            <motion.div
              className="absolute -inset-2 bg-linear-to-r from-cyan-500/20 to-teal-500/20 blur-xl rounded-[3rem]"
              animate={{
                opacity: [0.2, 0.4, 0.2],
              }}
              transition={{ repeat: Infinity, duration: 3 }}
            />
            <motion.div
              className="relative glass-card rounded-[3rem] p-12 md:p-24 text-center overflow-hidden border border-white/10"
              variants={scaleVariants}
            >
              <div className="absolute top-10 right-10 opacity-5 float-animation">
                <Wrench size={180} />
              </div>
              <div
                className="absolute bottom-10 left-10 opacity-5 float-animation"
                style={{ animationDelay: "3s" }}
              >
                <ShieldCheck size={160} />
              </div>

              <div className="relative z-10">
                <motion.h2
                  className="brand-text text-4xl md:text-7xl font-black mb-6 leading-tight"
                  variants={itemVariants}
                >
                  Ready to get your <br />
                  <span className="gradient-text">Project Started?</span>
                </motion.h2>
                <motion.p
                  className="text-gray-300 text-xl md:text-2xl mb-12 max-w-3xl mx-auto leading-relaxed"
                  variants={itemVariants}
                >
                  Get a free consultation and a{" "}
                  <motion.span
                    className="text-cyan-400 font-bold"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                  >
                    10% discount
                  </motion.span>{" "}
                  on your first booking today.
                </motion.p>

                <motion.div
                  className="flex flex-col sm:flex-row justify-center gap-6 mb-8"
                  variants={containerVariants}
                >
                  <motion.button
                    className="shimmer-effect px-12 py-6 bg-linear-to-r from-cyan-600 to-teal-600 rounded-2xl font-bold text-white text-lg shadow-2xl overflow-hidden relative"
                    variants={itemVariants}
                    whileHover={{
                      scale: 1.05,
                      boxShadow: "0 20px 40px rgba(6, 182, 212, 0.4)",
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="relative z-10">Book Service Now</span>
                  </motion.button>
                  <motion.button
                    className="px-12 py-6 bg-white/5 border border-white/10 rounded-2xl font-bold text-white text-lg flex items-center justify-center gap-3 hover:bg-white/10"
                    variants={itemVariants}
                    whileHover={{
                      scale: 1.05,
                      borderColor: "rgba(6, 182, 212, 0.5)",
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <MessageSquare size={22} /> WhatsApp Us
                  </motion.button>
                </motion.div>

                <motion.p
                  className="text-gray-500 text-sm"
                  variants={itemVariants}
                >
                  <CheckCircle2
                    size={16}
                    className="inline mr-2 text-green-400"
                  />
                  No commitment required · Free quotes · Fast response
                </motion.p>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Quality Promise Row */}
        <motion.section
          className="py-16 bg-slate-950"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={containerVariants}
        >
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-20">
              {[
                { text: "Quality Guaranteed", color: "cyan" },
                { text: "Trusted Professionals", color: "teal" },
                { text: "Transparent Pricing", color: "sky" },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  className="flex items-center gap-3 group cursor-default"
                  variants={itemVariants}
                  whileHover={{ scale: 1.1, y: -5 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <CheckCircle2
                      size={22}
                      className={`text-${item.color}-400 group-hover:text-${item.color}-300 transition-colors`}
                    />
                  </motion.div>
                  <span className="brand-text font-bold uppercase tracking-[0.15em] text-sm text-gray-300 group-hover:text-white transition-colors">
                    {item.text}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        <Footer />
      </div>
    </>
  );
};

export default Home;
