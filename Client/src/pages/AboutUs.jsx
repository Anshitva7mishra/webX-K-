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
  FiCode,
  FiUsers,
  FiMonitor,
  FiActivity,
  FiGlobe,
} from "react-icons/fi";
import { HiSparkles, HiBuildingStorefront } from "react-icons/hi2";

// --- ANIMATION VARIANTS ---
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

const staggerContainer = {
  visible: { transition: { staggerChildren: 0.1 } },
};

const AboutUs = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  return (
    <div className="bg-[var(--color-base-100)] min-h-screen text-slate-300 font-sans selection:bg-cyan-500/30 overflow-x-hidden">
      {/* GLOBAL BACKGROUND ACCENTS */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-indigo-600/5 rounded-full blur-[120px]" />
      </div>

      {/* 1. HERO SECTION */}
      <section className="relative min-h-screen flex items-center px-6 pt-10 z-10">
        <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.div
              variants={fadeInUp}
              className="flex items-center gap-2 mb-6"
            >
              <span className="p-1 px-3 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono uppercase tracking-widest">
                Digital Transformation Agency
              </span>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="text-5xl md:text-7xl font-bold text-white leading-[1.1] tracking-tight mb-8"
            >
              From Local Hero <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">
                To Global Brand.
              </span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-lg md:text-xl text-slate-400 max-w-lg leading-relaxed mb-10 border-l-2 border-slate-700 pl-6"
            >
              Your physical shop has limits. Your digital identity doesn't. We
              turn "walk-in" businesses into "always-open" brands with
              professional, high-performance websites.
            </motion.p>

            <motion.div variants={fadeInUp} className="flex flex-wrap gap-4">
              <button className="px-8 py-4 bg-white text-[var(--color-base-100)] font-bold rounded-full shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:scale-105 transition-transform flex items-center gap-2">
                View Our Portfolio <FiArrowRight />
              </button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative hidden lg:block h-[600px]"
          >
            <div className="absolute inset-0 bg-slate-900 rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop"
                alt="Modern Office"
                className="w-full h-full object-cover opacity-50 hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-base-100)] via-transparent to-transparent" />
            </div>

            {/* Floating Stats Card */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="absolute bottom-10 right-10 bg-slate-800/80 backdrop-blur-md p-6 rounded-2xl border border-white/10 shadow-xl"
            >
              <div className="flex items-center gap-4">
                <div className="p-3 bg-green-500/20 rounded-lg text-green-400">
                  <FiTrendingUp size={24} />
                </div>
                <div>
                  <h4 className="text-white font-bold text-2xl">300%</h4>
                  <p className="text-xs text-slate-400">Increase in Reach</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 2. THE TRANSFORMATION (SHOPS WE CHANGED) - NEW SECTION */}
      <section className="py-24 px-6 z-10 relative bg-white/[0.02]">
        <div className="max-w-7xl mx-auto">
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
              <p className="text-slate-400 mt-2">
                See how we turned physical locations into digital destinations.
              </p>
            </div>
            <div className="hidden md:block text-right">
              <h3 className="text-5xl font-bold text-white">50+</h3>
              <p className="text-cyan-400 text-sm uppercase tracking-wide">
                Local Businesses Live
              </p>
            </div>
          </motion.div>

          {/* Case Study Grid */}
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Case Study 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="relative h-80 rounded-2xl overflow-hidden mb-6 border border-white/10">
                {/* Before Image (Left Half) */}
                <div className="absolute left-0 top-0 bottom-0 w-1/2 overflow-hidden border-r border-white/20">
                  <img
                    src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=800&auto=format&fit=crop"
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                    alt="Cafe Interior"
                  />
                  <div className="absolute top-4 left-4 bg-black/70 px-3 py-1 rounded text-xs text-white font-bold">
                    BEFORE
                  </div>
                </div>
                {/* After Image (Right Half) */}
                <div className="absolute right-0 top-0 bottom-0 w-1/2 overflow-hidden bg-slate-900">
                  <img
                    src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=800&auto=format&fit=crop"
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-all duration-500"
                    alt="Website Mockup"
                  />
                  <div className="absolute top-4 right-4 bg-cyan-600 px-3 py-1 rounded text-xs text-white font-bold">
                    AFTER
                  </div>
                  {/* Fake UI Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <FiMonitor className="text-5xl text-white drop-shadow-lg opacity-80" />
                  </div>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">
                The Daily Grind Cafe
              </h3>
              <p className="text-slate-400">
                Problem: Hidden in a backstreet. No menu online.
                <br />
                Result:{" "}
                <span className="text-green-400">
                  Online orders increased by 40%.
                </span>
              </p>
            </motion.div>

            {/* Case Study 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="group"
            >
              <div className="relative h-80 rounded-2xl overflow-hidden mb-6 border border-white/10">
                <div className="absolute left-0 top-0 bottom-0 w-1/2 overflow-hidden border-r border-white/20">
                  <img
                    src="https://images.unsplash.com/photo-1585747860715-2ba37e788b70?q=80&w=800&auto=format&fit=crop"
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                    alt="Barber Shop"
                  />
                  <div className="absolute top-4 left-4 bg-black/70 px-3 py-1 rounded text-xs text-white font-bold">
                    BEFORE
                  </div>
                </div>
                <div className="absolute right-0 top-0 bottom-0 w-1/2 overflow-hidden bg-slate-900">
                  <img
                    src="https://images.unsplash.com/photo-1512690459411-b9245aed8ad1?q=80&w=800&auto=format&fit=crop"
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-all duration-500"
                    alt="Website Mockup"
                  />
                  <div className="absolute top-4 right-4 bg-cyan-600 px-3 py-1 rounded text-xs text-white font-bold">
                    AFTER
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <FiSmartphone className="text-5xl text-white drop-shadow-lg opacity-80" />
                  </div>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">
                City Cuts Barbershop
              </h3>
              <p className="text-slate-400">
                Problem: Phone ringing constantly for appointments.
                <br />
                Result:{" "}
                <span className="text-green-400">
                  Automated booking via website.
                </span>
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. LIVE STATS STRIP - NEW SECTION */}
      <section className="py-12 border-y border-white/5 bg-[var(--color-base-100)]">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { label: "Active Sites", val: "52" },
            { label: "Client Calls Generated", val: "10k+" },
            { label: "Uptime", val: "99.9%" },
            { label: "Maintenance Cost", val: "$0" },
          ].map((stat, i) => (
            <div key={i}>
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
            <motion.div className="p-8 rounded-3xl border border-white/5 bg-white/[0.02] relative overflow-hidden">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <span className="p-2 bg-red-500/10 rounded-lg text-red-500">
                  <FiActivity />
                </span>
                Without A Website
              </h3>
              <ul className="space-y-4 text-slate-400">
                <li>• Invisible to Google Maps searchers.</li>
                <li>• Competitors with websites steal your customers.</li>
                <li>• No way to showcase updated prices or menus.</li>
                <li>• Business "dies" the moment you close the shop door.</li>
              </ul>
            </motion.div>

            <motion.div className="p-8 rounded-3xl border border-cyan-500/30 bg-cyan-900/5 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl" />
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <span className="p-2 bg-cyan-500/20 rounded-lg text-cyan-400">
                  <FiGlobe />
                </span>
                With Digital Identity
              </h3>
              <ul className="space-y-4 text-white">
                <li>• Found instantly on local search.</li>
                <li>• Professional credibility established instantly.</li>
                <li>• 24/7 Information Hub (Location, Hours, Services).</li>
                <li>• Zero maintenance static tech stack.</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 5. PROCESS TIMELINE - NEW SECTION */}
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
                className="relative z-10 bg-[var(--color-base-100)] border border-white/10 p-8 rounded-2xl text-center hover:border-cyan-500/50 transition-colors"
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
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">
            Stop Being Invisible.
          </h2>
          <p className="text-lg text-slate-400 mb-10">
            Join 50+ local businesses who have upgraded their identity.
          </p>
          <button className="px-12 py-5 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold text-lg rounded-full hover:shadow-[0_0_40px_-10px_rgba(6,182,212,0.5)] transition-all">
            Get Your Website Now
          </button>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
