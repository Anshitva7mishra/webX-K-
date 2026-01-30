import React from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import {
  MessageCircle,
  Search,
  Store,
  Star,
  ArrowRight,
  Sparkles,
  Zap,
  ShieldCheck,
} from "lucide-react";

const Hero = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 20 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const categories = [
    { emoji: "🍕", name: "Food", color: "from-orange-500/20 to-red-500/20" },
    { emoji: "🏥", name: "Health", color: "from-red-500/20 to-pink-500/20" },
    {
      emoji: "🛍️",
      name: "Retail",
      color: "from-purple-500/20 to-indigo-500/20",
    },
    { emoji: "🔧", name: "Services", color: "from-blue-500/20 to-cyan-500/20" },
  ];

  return (
    <section
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#020617] selection:bg-blue-500/30"
    >
      {/* 1. ANIMATED BACKGROUND LAYER */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          style={{
            x: useTransform(mouseXSpring, [-0.5, 0.5], [50, -50]),
            y: useTransform(mouseYSpring, [-0.5, 0.5], [50, -50]),
          }}
          className="absolute -top-[10%] -left-[10%] w-[50%] h-[50%] bg-slate-950 rounded-full blur-[120px]"
        />
        <motion.div
          style={{
            x: useTransform(mouseXSpring, [-0.5, 0.5], [-50, 50]),
            y: useTransform(mouseYSpring, [-0.5, 0.5], [-50, 50]),
          }}
          className="absolute -bottom-[10%] -right-[10%] w-[50%] h-[50%] bg-purple-600/10 rounded-full blur-[120px]"
        />

        <div
          className="absolute inset-0 opacity-[0.2]"
          style={{
            backgroundImage: "radial-gradient(#334155 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl bg-slate-950 mx-auto px-6 lg:px-8 py-20 w-full">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* 2. LEFT COLUMN: TEXT CONTENT */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col space-y-8"
          >
            <motion.div variants={itemVariants} className="flex">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 backdrop-blur-md">
                <Sparkles size={14} className="text-blue-400" />
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-blue-400">
                  Discover Your City
                </span>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-4">
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-black text-white leading-[0.9] tracking-tighter">
                Locate the <br />
                <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 via-indigo-400 to-purple-400">
                  Best Spots
                </span>
              </h1>
              <p className="text-lg md:text-xl text-slate-400 max-w-xl leading-relaxed">
                Skip the guesswork. Connect with over{" "}
                <span className="text-white font-semibold">
                  500+ verified local businesses
                </span>{" "}
                with instant WhatsApp chat and real customer feedback.
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-4"
            >
              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 30px rgba(37,99,235,0.4)",
                }}
                whileTap={{ scale: 0.95 }}
                className="group relative px-8 py-4 bg-blue-600 text-white rounded-2xl font-bold flex items-center gap-3 transition-colors hover:bg-blue-500"
              >
                <Search size={20} />
                Start Exploring
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </motion.button>

              <motion.button
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "rgba(30, 41, 59, 1)",
                }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-slate-900/50 text-white border border-slate-800 rounded-2xl font-bold flex items-center gap-3 backdrop-blur-sm transition-all"
              >
                <MessageCircle size={20} className="text-green-500" />
                Chat Support
              </motion.button>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex flex-wrap items-center gap-8 pt-4 border-t border-slate-800/50"
            >
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-white">10k+</span>
                <span className="text-xs uppercase tracking-widest text-slate-500 font-bold">
                  Active Users
                </span>
              </div>
              <div className="w-[1px] h-10 bg-slate-800" />
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-white">4.9/5</span>
                <span className="text-xs uppercase tracking-widest text-slate-500 font-bold">
                  Avg Rating
                </span>
              </div>
              <div className="w-[1px] h-10 bg-slate-800" />
              <div className="flex items-center gap-2">
                <div className="flex -space-x-3">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="w-8 h-8 rounded-full border-2 border-[#020617] bg-slate-900 flex items-center justify-center text-[10px] text-white font-bold overflow-hidden"
                    >
                      <img
                        src={`https://i.pravatar.cc/100?img=${i + 10}`}
                        alt="user"
                      />
                    </div>
                  ))}
                </div>
                <span className="text-xs text-slate-400 font-medium">
                  Joined this week
                </span>
              </div>
            </motion.div>
          </motion.div>

          {/* 3. RIGHT COLUMN: 3D VISUAL COMPONENT */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
            className="relative"
            style={{ perspective: 1000 }}
          >
            <motion.div
              style={{ rotateX, rotateY }}
              className="relative rounded-[2.5rem] p-3 lg:mt-20 bg-linear-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 shadow-2xl backdrop-blur-sm"
            >
              <div className="relative overflow-hidden rounded-[2rem] aspect-[4/5] bg-slate-800">
                <img
                  src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80"
                  alt="Store front"
                  className="w-full h-full object-cover"
                />

                <div className="absolute inset-0 bg-linear-to-t from-[#020617] via-transparent to-transparent opacity-80" />

                <div className="absolute bottom-6 left-6 right-6 grid grid-cols-2 gap-3">
                  {categories.map((cat, i) => (
                    <motion.div
                      key={i}
                      whileHover={{
                        scale: 1.05,
                        backgroundColor: "rgba(255,255,255,0.15)",
                      }}
                      className="flex items-center gap-2 p-2.5 rounded-xl bg-white/10 backdrop-blur-md border border-white/10 cursor-pointer transition-colors"
                    >
                      <span className="text-lg">{cat.emoji}</span>
                      <span className="text-white font-bold text-xs">
                        {cat.name}
                      </span>
                    </motion.div>
                  ))}
                </div>

                <div className="absolute top-6 left-6 bg-black/40 backdrop-blur-md border border-white/10 px-3 py-1.5 rounded-full flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-[10px] text-white font-bold uppercase tracking-wider">
                    542 shops online
                  </span>
                </div>
              </div>

              <motion.div
                style={{ translateZ: 50 }}
                className="absolute -top-6 -right-6 bg-white p-4 rounded-2xl shadow-2xl flex flex-col items-center gap-1"
              >
                <div className="flex items-center gap-1">
                  <Star size={16} className="text-yellow-500 fill-yellow-500" />
                  <span className="font-bold text-slate-900">4.9</span>
                </div>
                <span className="text-[10px] text-slate-500 font-bold uppercase tracking-tighter">
                  Trust Score
                </span>
              </motion.div>

              <motion.div
                style={{ translateZ: 80 }}
                className="absolute top-1/2 -left-12 bg-indigo-600 p-3 rounded-2xl shadow-xl flex items-center gap-3"
              >
                <div className="p-2 bg-white/20 rounded-lg">
                  <ShieldCheck className="text-white" size={20} />
                </div>
                <div className="pr-2">
                  <div className="text-white font-bold text-xs uppercase">
                    Verified
                  </div>
                  <div className="text-indigo-200 text-[10px]">
                    Business Network
                  </div>
                </div>
              </motion.div>
            </motion.div>

            <div className="absolute -top-12 -left-12 w-24 h-24 bg-blue-500/10 rounded-full blur-2xl" />
            <div className="absolute -bottom-12 -right-12 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl" />
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-32 bg-linear-to-t from-[#020617] to-transparent pointer-events-none" />
    </section>
  );
};

export default Hero;
