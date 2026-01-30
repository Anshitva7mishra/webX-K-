import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  FiMapPin,
  FiLayout,
  FiSmartphone,
  FiTrendingUp,
  FiCheckCircle,
  FiClock,
  FiArrowRight,
  FiActivity,
  FiGlobe,
  FiMonitor,
  FiStar,
  FiUsers,
  FiZap,
} from "react-icons/fi";
import { HiSparkles, HiBuildingStorefront } from "react-icons/hi2";
import Navbar from "../components/Navbar";

// --- ANIMATION VARIANTS ---
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

const staggerContainer = {
  visible: { transition: { staggerChildren: 0.1 } },
};

const badgeVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4, ease: "backOut" },
  },
  hover: {
    scale: 1.1,
    transition: { duration: 0.2 },
  },
};

const floatAnimation = {
  animate: {
    y: [0, -15, 0],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const AboutUs = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  return (
    <div className="bg-[var(--color-base-100)] min-h-screen text-slate-300 font-sans selection:bg-cyan-500/30 overflow-x-hidden">
      <Navbar />

      {/* GLOBAL BACKGROUND ATMOSPHERE */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-indigo-600/5 rounded-full blur-[120px]" />
      </div>

      {/* 1. UPGRADED HERO SECTION (Added pt-32 for Navbar gap) */}
      <section className="relative min-h-screen flex items-center px-6 pt-32 pb-20 z-10 overflow-hidden">
        <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="relative z-20"
          >
            <motion.div
              variants={fadeInUp}
              className="flex items-center gap-3 mb-8"
            >
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-cyan-500"></span>
              </span>
              <span className="text-cyan-400 text-xs font-mono uppercase tracking-[0.2em] border border-cyan-500/20 px-3 py-1 rounded-full bg-cyan-500/5">
                Digital Transformation Agency
              </span>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-[0.95] tracking-tight mb-8"
            >
              From Local <br />
              <span className="text-white">Hero To</span> <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">
                Global Brand.
              </span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-lg md:text-xl text-slate-400 max-w-lg leading-relaxed mb-10 border-l-2 border-cyan-500/30 pl-8"
            >
              Your physical shop has limits. Your digital identity doesn't. We
              turn "walk-in" businesses into "always-open" brands with
              professional, high-performance websites.
            </motion.p>

            <motion.div variants={fadeInUp} className="flex flex-wrap gap-4">
              <button className="group relative px-8 py-4 bg-white text-slate-900 font-bold rounded-full overflow-hidden shadow-[0_0_20px_rgba(255,255,255,0.3)] transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(6,182,212,0.4)]">
                <span className="relative z-10 flex items-center gap-2">
                  View Our Portfolio{" "}
                  <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-200 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>
            </motion.div>
          </motion.div>

          {/* Right Visual: FIXED Layout & Images */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative hidden lg:block h-[600px]"
          >
            {/* Background Glow Pulse */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-cyan-500/10 via-purple-500/10 to-transparent rounded-full blur-[80px] animate-pulse" />

            {/* Main Glass Dashboard Card */}
            <motion.div
              className="absolute inset-0 bg-slate-900/60 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl overflow-hidden"
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.5 }}
            >
              {/* Fake Browser Header */}
              <div className="h-12 border-b border-white/5 bg-white/[0.03] flex items-center px-6 gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
                <div className="ml-6 h-6 w-1/3 bg-white/5 rounded-md" />
              </div>

              {/* Main Image (Replacing broken image) */}
              <div className="relative h-full w-full group">
                <img
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2340&auto=format&fit=crop"
                  alt="Analytics Dashboard"
                  className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-base-100)] via-slate-900/50 to-transparent" />

                {/* Overlay UI Elements */}
                <div className="absolute bottom-10 left-10 right-10">
                  <div className="flex items-end justify-between">
                    <div>
                      <p className="text-cyan-400 font-mono text-xs mb-1">
                        LIVE STATUS
                      </p>
                      <h3 className="text-3xl font-bold text-white">
                        System Online
                      </h3>
                    </div>
                    <div className="text-right">
                      <p className="text-slate-400 text-sm">Monthly Visits</p>
                      <p className="text-4xl font-bold text-white">12.4k</p>
                    </div>
                  </div>
                  {/* Progress Bar */}
                  <div className="w-full h-1 bg-white/10 rounded-full mt-6 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: "85%" }}
                      transition={{ duration: 1.5, delay: 0.5 }}
                      className="h-full bg-gradient-to-r from-cyan-400 to-blue-500"
                    />
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Orbiting Floating Cards */}
            <motion.div
              variants={floatAnimation}
              animate="animate"
              className="absolute -top-6 -right-6 p-5 bg-slate-800/90 backdrop-blur-md border border-white/10 rounded-2xl shadow-xl flex items-center gap-4 z-30 ring-1 ring-white/5"
            >
              <div className="p-3 bg-green-500/20 rounded-xl text-green-400">
                <FiGlobe size={24} />
              </div>
              <div>
                <p className="text-xs text-slate-400 uppercase tracking-wider">
                  Reach
                </p>
                <p className="text-xl font-bold text-white">Global</p>
              </div>
            </motion.div>

            <motion.div
              variants={floatAnimation}
              animate="animate"
              transition={{ delay: 1 }}
              className="absolute bottom-32 -left-12 p-5 bg-slate-800/90 backdrop-blur-md border border-white/10 rounded-2xl shadow-xl flex items-center gap-4 z-30 ring-1 ring-white/5"
            >
              <div className="p-3 bg-cyan-500/20 rounded-xl text-cyan-400">
                <FiZap size={24} />
              </div>
              <div>
                <p className="text-xs text-slate-400 uppercase tracking-wider">
                  Speed
                </p>
                <p className="text-xl font-bold text-white">99/100</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 2. SHOPS WE TRANSFORMED (FIXED IMAGES) */}
      <section className="py-24 px-6 z-10 relative bg-white/[0.02]">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 md:flex justify-between items-end"
          >
            <div>
              <span className="text-cyan-500 font-mono text-xs uppercase tracking-widest">
                Our Impact
              </span>
              <h2 className="text-4xl font-bold text-white mt-2">
                Shops We Transformed
              </h2>
              <p className="text-slate-400 mt-2 text-lg">
                See how we turn physical locations into digital destinations.
              </p>
            </div>
            <div className="hidden md:block text-right">
              <h3 className="text-5xl font-bold text-white">50+</h3>
              <p className="text-cyan-400 text-sm uppercase tracking-wide">
                Local Businesses Live
              </p>
            </div>
          </motion.div>

          {/* Case Studies Grid */}
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Card 1: The Cafe */}
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="group"
            >
              <div className="relative h-80 rounded-2xl overflow-hidden mb-6 border border-white/10 shadow-2xl bg-slate-900">
                {/* Left Half: Physical Shop */}
                <div className="absolute left-0 top-0 bottom-0 w-1/2 overflow-hidden border-r border-white/20">
                  <img
                    src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=1000&auto=format&fit=crop"
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                    alt="Cafe Interior"
                  />
                  <motion.div
                    variants={badgeVariants}
                    className="absolute top-4 left-4 bg-black/70 backdrop-blur-sm px-3 py-1 rounded text-xs text-white font-bold border border-white/10"
                  >
                    BEFORE
                  </motion.div>
                </div>

                {/* Right Half: Digital Transformation */}
                <div className="absolute right-0 top-0 bottom-0 w-1/2 overflow-hidden bg-slate-900">
                  <img
                    src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=1000&auto=format&fit=crop"
                    className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-all duration-700"
                    alt="Cafe Website on Laptop"
                  />
                  <div className="absolute inset-0 bg-cyan-900/20 mix-blend-overlay" />
                  <motion.div
                    variants={badgeVariants}
                    className="absolute top-4 right-4 bg-cyan-500 text-black px-3 py-1 rounded text-xs font-bold shadow-lg shadow-cyan-500/50"
                  >
                    AFTER
                  </motion.div>

                  {/* Animated Icon Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                      initial={{ scale: 0.8, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      transition={{ delay: 0.5 }}
                      className="p-4 bg-black/40 backdrop-blur-md rounded-xl border border-white/20"
                    >
                      <FiMonitor className="text-3xl text-white" />
                    </motion.div>
                  </div>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">
                The Daily Grind Cafe
              </h3>
              <p className="text-slate-400">
                Problem: Hidden location. No menu online.
                <br />
                Result:{" "}
                <span className="text-green-400 font-semibold">
                  Online orders increased by 40%.
                </span>
              </p>
            </motion.div>

            {/* Card 2: The Barbershop */}
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="group"
            >
              <div className="relative h-80 rounded-2xl overflow-hidden mb-6 border border-white/10 shadow-2xl bg-slate-900">
                {/* Left Half */}
                <div className="absolute left-0 top-0 bottom-0 w-1/2 overflow-hidden border-r border-white/20">
                  <img
                    src="https://images.unsplash.com/photo-1503951914875-befbb711d383?q=80&w=1000&auto=format&fit=crop"
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                    alt="Barber Shop Interior"
                  />
                  <motion.div
                    variants={badgeVariants}
                    className="absolute top-4 left-4 bg-black/70 backdrop-blur-sm px-3 py-1 rounded text-xs text-white font-bold border border-white/10"
                  >
                    BEFORE
                  </motion.div>
                </div>

                {/* Right Half */}
                <div className="absolute right-0 top-0 bottom-0 w-1/2 overflow-hidden bg-slate-900">
                  <img
                    src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=1000&auto=format&fit=crop"
                    className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-all duration-700"
                    alt="Booking App on Phone"
                  />
                  <div className="absolute inset-0 bg-cyan-900/20 mix-blend-overlay" />
                  <motion.div
                    variants={badgeVariants}
                    className="absolute top-4 right-4 bg-cyan-500 text-black px-3 py-1 rounded text-xs font-bold shadow-lg shadow-cyan-500/50"
                  >
                    AFTER
                  </motion.div>

                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                      initial={{ scale: 0.8, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      transition={{ delay: 0.7 }}
                      className="p-4 bg-black/40 backdrop-blur-md rounded-xl border border-white/20"
                    >
                      <FiSmartphone className="text-3xl text-white" />
                    </motion.div>
                  </div>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">
                City Cuts Barbershop
              </h3>
              <p className="text-slate-400">
                Problem: Phone ringing constantly.
                <br />
                Result:{" "}
                <span className="text-green-400 font-semibold">
                  Automated 24/7 booking system.
                </span>
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. LIVE STATS STRIP */}
      <section className="py-12 border-y border-white/5 bg-[var(--color-base-100)] relative z-20">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { label: "Active Sites", val: "52" },
            { label: "Client Calls Generated", val: "10k+" },
            { label: "Uptime Guarantee", val: "99.9%" },
            { label: "Maintenance Fees", val: "$0" },
          ].map((stat, i) => (
            <div
              key={i}
              className="hover:scale-105 transition-transform duration-300"
            >
              <h4 className="text-3xl md:text-4xl font-bold text-white mb-1">
                {stat.val}
              </h4>
              <p className="text-xs text-slate-500 uppercase tracking-widest">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. THE GAP (PROBLEM/SOLUTION) */}
      <section className="py-24 px-6 z-10 relative">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Why Walk-Ins Aren't Enough
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              The world has changed. If your business isn't on their phone, it
              doesn't exist to them.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              className="p-8 rounded-3xl border border-white/5 bg-white/[0.02] relative overflow-hidden group"
              whileHover={{ y: -5 }}
            >
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <span className="p-2 bg-red-500/10 rounded-lg text-red-500">
                  <FiActivity />
                </span>
                Without A Website
              </h3>
              <ul className="space-y-4 text-slate-400">
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-red-500 rounded-full" />{" "}
                  Invisible to Google Maps searchers.
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-red-500 rounded-full" />{" "}
                  Competitors with websites steal customers.
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-red-500 rounded-full" /> No
                  way to showcase updated prices.
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-red-500 rounded-full" />{" "}
                  Business "dies" when you close.
                </li>
              </ul>
            </motion.div>

            <motion.div
              className="p-8 rounded-3xl border border-cyan-500/30 bg-cyan-900/5 relative overflow-hidden"
              whileHover={{ y: -5 }}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl" />
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <span className="p-2 bg-cyan-500/20 rounded-lg text-cyan-400">
                  <FiGlobe />
                </span>
                With Digital Identity
              </h3>
              <ul className="space-y-4 text-white">
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-cyan-500 rounded-full" />{" "}
                  Found instantly on local search.
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-cyan-500 rounded-full" />{" "}
                  Professional credibility established.
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-cyan-500 rounded-full" /> 24/7
                  Information Hub.
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-cyan-500 rounded-full" /> Zero
                  maintenance static stack.
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 5. PROCESS TIMELINE */}
      <section className="py-24 px-6 z-10 relative bg-white/[0.02]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white">
              From Offline to Online
            </h2>
            <p className="text-slate-400 mt-2">
              A simple 3-step process to launch your digital identity.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 relative">
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-cyan-500/0 via-cyan-500/50 to-cyan-500/0 -translate-y-1/2 z-0" />

            {[
              {
                step: "01",
                title: "We Map",
                desc: "We visit your shop, take photos, and understand your services.",
              },
              {
                step: "02",
                title: "We Build",
                desc: "Our team codes a high-speed static site customized for you.",
              },
              {
                step: "03",
                title: "You Grow",
                desc: "We launch it to the world. You start getting more calls.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="relative z-10 bg-[var(--color-base-100)] border border-white/10 p-8 rounded-2xl text-center hover:border-cyan-500/50 transition-colors shadow-xl"
              >
                <div className="w-12 h-12 bg-cyan-500 text-black font-bold text-xl rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-cyan-500/50">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-slate-400 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. FEATURES GRID */}
      <section className="py-24 px-6 z-10 relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: <FiLayout size={28} />,
                title: "Visual Showcase",
                desc: "Showcase your work/menu beautifully.",
              },
              {
                icon: <FiMapPin size={28} />,
                title: "Smart Location",
                desc: "Integrated Maps for easy navigation.",
              },
              {
                icon: <FiSmartphone size={28} />,
                title: "Mobile Ready",
                desc: "Flawless on every phone screen.",
              },
              {
                icon: <FiCheckCircle size={28} />,
                title: "Zero Maintenance",
                desc: "No updates needed. Ever.",
              },
              {
                icon: <FiClock size={28} />,
                title: "Always Open",
                desc: "Information available 24/7.",
              },
              {
                icon: <HiBuildingStorefront size={28} />,
                title: "Brand Authority",
                desc: "Own your professional domain.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="group p-8 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.05] hover:border-cyan-500/30 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-[var(--color-base-100)] flex items-center justify-center text-cyan-400 mb-6 border border-white/10 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-slate-400 leading-relaxed text-sm">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. CTA FOOTER */}
      <section className="py-32 px-6 text-center z-10 relative">
        <div className="max-w-3xl mx-auto">
          <HiSparkles className="text-4xl text-yellow-400 mx-auto mb-6 animate-pulse" />
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">
            Stop Being Invisible.
          </h2>
          <p className="text-lg text-slate-400 mb-10">
            Join 50+ local businesses who have upgraded their identity.
          </p>
          <button className="px-12 py-5 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold text-lg rounded-full hover:shadow-[0_0_40px_-10px_rgba(6,182,212,0.5)] transition-all transform hover:scale-105">
            Get Your Website Now
          </button>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
