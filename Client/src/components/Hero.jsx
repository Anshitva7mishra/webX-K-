import React from "react";
import { motion } from "framer-motion";
import {
  MessageCircle,
  Search,
  Star,
  ArrowRight,
  ShieldCheck,
  Zap,
} from "lucide-react";

const Hero = () => {
  // GPU-friendly entrance animation
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: "easeOut" } 
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const categories = ["Food", "Health", "Retail", "Services", "Travel", "Tech"];

  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#020617] pt-32 pb-16 px-4 sm:px-6 md:px-10">
      
      {/* 1. OPTIMIZED BACKGROUND (Low CPU usage) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute -top-[10%] -left-[10%] w-[100%] md:w-[70%] h-[70%] opacity-30"
          style={{ background: 'radial-gradient(circle, rgba(37,99,235,0.3) 0%, transparent 70%)' }}
        />
        <div 
          className="absolute -bottom-[10%] -right-[10%] w-[100%] md:w-[70%] h-[70%] opacity-20"
          style={{ background: 'radial-gradient(circle, rgba(147,51,234,0.3) 0%, transparent 70%)' }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* 2. TEXT CONTENT COLUMN */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="text-center lg:text-left order-2 lg:order-1 will-change-transform"
          >
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
              <Zap size={12} className="text-yellow-400 fill-yellow-400" />
              <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-blue-300">
                The Future of Local Discovery
              </span>
            </motion.div>

            <motion.h1 variants={fadeInUp} className="text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-black text-white leading-[1.1] tracking-tight mb-6 md:mb-8">
              Explore Your <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                City's Heart.
              </span>
            </motion.h1>

            <motion.p variants={fadeInUp} className="text-sm sm:text-base md:text-lg text-slate-400 max-w-xl mx-auto lg:mx-0 leading-relaxed mb-8 md:mb-10">
              Skip the guesswork. Connect with 
              <span className="text-white font-semibold"> 850+ verified businesses</span>. 
              The most trusted local network in your pocket.
            </motion.p>

            {/* CTA Group: Stacked on mobile, row on desktop */}
            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-10 md:mb-12">
              <button className="w-full sm:w-auto px-8 py-4 bg-white text-black rounded-xl font-bold flex items-center justify-center gap-3 transition-transform hover:scale-[1.02] active:scale-95 shadow-xl text-sm md:text-base">
                <Search size={18} />
                Find Near Me
                <ArrowRight size={18} />
              </button>
              
              <button className="w-full sm:w-auto px-8 py-4 bg-slate-900 text-white border border-white/10 rounded-xl font-bold flex items-center justify-center gap-3 hover:bg-slate-800 transition-colors text-sm md:text-base">
                <MessageCircle size={18} className="text-green-400" />
                Live Support
              </button>
            </motion.div>

            {/* Optimized Marquee */}
            <motion.div variants={fadeInUp} className="relative flex items-center gap-4 overflow-hidden py-2">
              {/* Fade gradients */}
              <div className="absolute left-0 top-0 bottom-0 w-8 md:w-16 bg-gradient-to-r from-[#020617] to-transparent z-10" />
              <div className="absolute right-0 top-0 bottom-0 w-8 md:w-16 bg-gradient-to-l from-[#020617] to-transparent z-10" />
              
              <span className="hidden sm:inline-block text-[10px] font-bold text-slate-500 uppercase tracking-widest whitespace-nowrap z-20">Popular:</span>
              
              <div className="flex gap-2 animate-marquee-fast whitespace-nowrap">
                {[...categories, ...categories].map((cat, i) => (
                  <span key={i} className="px-3 py-1.5 md:px-4 md:py-2 rounded-lg bg-slate-900 border border-slate-800 text-[10px] md:text-xs font-medium text-slate-300">
                    {cat}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* 3. VISUAL COLUMN */}
          <div className="relative flex items-center justify-center lg:justify-end order-1 lg:order-2 will-change-transform px-4 md:px-0">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative w-full max-w-[300px] sm:max-w-[380px] md:max-w-[420px]"
            >
              {/* Card Container */}
              <div className="relative bg-slate-900 border border-white/5 rounded-[2rem] md:rounded-[2.5rem] p-2 md:p-3 shadow-2xl">
                <div className="relative aspect-[4/5] rounded-[1.6rem] md:rounded-[2rem] overflow-hidden bg-slate-800">
                  <img 
                    src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80" 
                    alt="Modern Business" 
                    className="w-full h-full object-cover opacity-80"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-70" />
                  
                  <div className="absolute bottom-4 left-4 md:bottom-6 md:left-6">
                    <h3 className="text-lg md:text-xl font-bold text-white mb-1">Urban Collective</h3>
                    <div className="flex gap-0.5">
                       {[1,2,3,4,5].map(s => <Star key={s} size={10} className="text-yellow-400 fill-yellow-400" />)}
                    </div>
                  </div>
                </div>
              </div>

              {/* Badges: Scaled for mobile */}
              <motion.div 
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -left-4 md:-top-6 md:-left-6 p-3 md:p-4 bg-white rounded-xl md:rounded-2xl shadow-2xl z-20 will-change-transform"
              >
                <div className="text-black font-black text-xl md:text-2xl tracking-tighter">4.9</div>
                <div className="text-[8px] md:text-[10px] text-slate-500 font-bold uppercase">Rating</div>
              </motion.div>

              <motion.div 
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute -bottom-2 -right-2 md:-bottom-4 md:-right-4 p-3 md:p-4 bg-indigo-600 rounded-xl md:rounded-2xl shadow-2xl z-20 border border-white/10 will-change-transform"
              >
                <div className="flex items-center gap-2 md:gap-3 text-white">
                  <ShieldCheck size={16} className="md:w-5 md:h-5" />
                  <span className="text-[8px] md:text-xs font-bold uppercase tracking-wider">Verified</span>
                </div>
              </motion.div>
            </motion.div>
          </div>

        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee-fast {
          animation: marquee 20s linear infinite;
          will-change: transform;
        }
      `}</style>
    </section>
  );
};

export default Hero;