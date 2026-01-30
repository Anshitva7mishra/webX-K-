import React, { useState, useEffect, useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValue,
  useSpring,
  AnimatePresence,
} from "framer-motion";
import {
  FiArrowUpRight,
  FiMaximize2,
  FiX,
  FiStar,
  FiTrendingUp,
  FiUsers,
  FiActivity,
} from "react-icons/fi";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer"; 


const categories = ["All", "Food & Cafe", "Services", "Retail", "Health"];

const galleryItems = [
  {
    id: 1,
    category: "Food & Cafe",
    title: "The Urban Grind",
    desc: "From hidden alley cafe to the #1 most searched coffee spot in the city.",
    span: "md:col-span-2 md:row-span-2",
    src: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: 2,
    category: "Services",
    title: "City Cuts Barbershop",
    desc: "Integrated booking system reduced phone calls by 80%.",
    span: "col-span-1 row-span-1",
    src: "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 3,
    category: "Retail",
    title: "Bloom & Wild Florist",
    desc: "Online catalog allowing 24/7 bouquet ordering.",
    span: "col-span-1 row-span-1",
    src: "https://images.unsplash.com/photo-1562690868-60bbe7293e94?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 4,
    category: "Health",
    title: "Iron Temple Gym",
    desc: "Membership portal and class scheduling for a local gym.",
    span: "md:col-span-2 row-span-1",
    src: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 5,
    category: "Food & Cafe",
    title: "Mama's Bakery",
    desc: "Visual menu that attracts customers before they walk in.",
    span: "col-span-1 row-span-1",
    src: "https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 6,
    category: "Retail",
    title: "Modern Thread Boutique",
    desc: "E-commerce expansion for a brick-and-mortar clothing store.",
    span: "col-span-1 row-span-1",
    src: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=800&auto=format&fit=crop",
  },
];

const testimonials = [
  {
    name: "Sarah J.",
    business: "Urban Grind",
    quote:
      "Since launching the site, our weekend foot traffic has doubled. People find us on Maps and come ready to order.",
  },
  {
    name: "Mike T.",
    business: "City Cuts",
    quote:
      "The booking feature is a lifesaver. I used to spend hours on the phone; now the site does it for me.",
  },
  {
    name: "Elena R.",
    business: "Bloom & Wild",
    quote:
      "Our designs finally look as good online as they do in the shop. It's built so much trust.",
  },
];

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedItem, setSelectedItem] = useState(null);

 
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springConfig = { damping: 25, stiffness: 150 };
  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const filteredItems =
    activeCategory === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  return (
    <div className="bg-[var(--color-base-100)] min-h-screen text-slate-300 font-sans selection:bg-cyan-500/30 overflow-x-hidden relative">
      <Navbar />

     
      <motion.div
        className="pointer-events-none fixed inset-0 z-0 opacity-15 mix-blend-screen"
        style={{
          background: useTransform(
            [springX, springY],
            ([x, y]) =>
              `radial-gradient(600px at ${x}px ${y}px, rgba(6,182,212,0.3), transparent 80%)`,
          ),
        }}
      />

     
      <section className="relative pt-40 px-6 z-10 mb-20">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-500/20 bg-cyan-900/10 mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <span className="text-cyan-400 text-xs font-mono uppercase tracking-widest">
              Digital Portfolio
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="text-6xl md:text-8xl font-black text-white tracking-tighter mb-8"
          >
            Proof of{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">
              Impact.
            </span>
          </motion.h1>

          <p className="max-w-2xl mx-auto text-xl text-slate-400 mb-12">
            We don't just build websites. We take local shops and give them a
            global-standard digital identity.
          </p>

         
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`relative px-6 py-3 rounded-full text-sm font-bold uppercase tracking-wider transition-all duration-300 border overflow-hidden group ${
                  activeCategory === cat
                    ? "text-black border-cyan-500 bg-cyan-500 shadow-[0_0_20px_rgba(6,182,212,0.4)]"
                    : "text-slate-400 border-white/10 hover:border-cyan-500/50 hover:text-white bg-white/5"
                }`}
              >
                <span className="relative z-10">{cat}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

    
      <section className="px-6 pb-20 z-10 relative">
        <div className="max-w-7xl mx-auto">
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[350px]"
          >
            <AnimatePresence mode="popLayout">
              {filteredItems.map((item) => (
                <motion.div
                  layoutId={`card-${item.id}`}
                  key={item.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  onClick={() => setSelectedItem(item)}
                  className={`group relative rounded-3xl overflow-hidden cursor-pointer border border-white/5 bg-slate-900 ${item.span}`}
                >
                  <motion.img
                    src={item.src}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-base-100)] via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />

                  <div className="absolute top-4 right-4 w-10 h-10 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-[-10px] group-hover:translate-y-0">
                    <FiMaximize2 />
                  </div>

                  <div className="absolute bottom-0 left-0 p-8 w-full translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <span className="text-cyan-400 text-xs font-bold uppercase tracking-widest mb-2 block">
                      {item.category}
                    </span>
                    <h3 className="text-white text-3xl font-bold mb-2 leading-none">
                      {item.title}
                    </h3>
                    <p className="text-slate-400 text-sm line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity delay-100">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

     
      <section className="py-20 bg-white/[0.02] border-y border-white/5 z-10 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {[
              {
                icon: <FiTrendingUp />,
                val: "150%",
                label: "Avg. Traffic Increase",
              },
              { icon: <FiUsers />, val: "40+", label: "Local Clients Happy" },
              {
                icon: <FiActivity />,
                val: "24/7",
                label: "Digital Availability",
              },
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="p-6"
              >
                <div className="text-cyan-500 text-3xl mb-4 flex justify-center">
                  {stat.icon}
                </div>
                <h3 className="text-5xl font-black text-white mb-2">
                  {stat.val}
                </h3>
                <p className="text-slate-400 uppercase tracking-widest text-sm">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- NEW SECTION: CLIENT STORIES --- */}
      <section className="py-24 px-6 z-10 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Local Voices</h2>
            <p className="text-slate-400">
              What shop owners are saying about their new digital identities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
                className="p-8 rounded-3xl bg-[var(--color-base-100)] border border-white/10 hover:border-cyan-500/30 transition-colors relative"
              >
                <div className="flex gap-1 text-yellow-400 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <FiStar key={i} fill="currentColor" />
                  ))}
                </div>
                <p className="text-slate-300 text-lg mb-6 italic">
                  "{t.quote}"
                </p>
                <div>
                  <h4 className="text-white font-bold">{t.name}</h4>
                  <p className="text-cyan-400 text-sm">{t.business}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- CTA SECTION --- */}
      <section className="py-32 text-center relative z-10">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Ready to tell your story?
          </h2>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full font-bold text-lg shadow-[0_0_30px_-5px_rgba(6,182,212,0.5)] transition-all"
          >
            Start Your Transformation
          </motion.button>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <Footer />

      {/* --- LIGHTBOX MODAL --- */}
      <AnimatePresence>
        {selectedItem && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedItem(null)}
              className="absolute inset-0 bg-[var(--color-base-100)]/95 backdrop-blur-xl cursor-pointer"
            />
            <motion.div
              layoutId={`card-${selectedItem.id}`}
              className="relative w-full max-w-6xl h-[85vh] bg-slate-900 rounded-3xl overflow-hidden border border-white/10 shadow-2xl flex flex-col md:flex-row pointer-events-auto"
            >
              <div className="w-full md:w-2/3 h-1/2 md:h-full relative overflow-hidden group">
                <img
                  src={selectedItem.src}
                  alt={selectedItem.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent md:bg-gradient-to-r" />
              </div>
              <div className="w-full md:w-1/3 p-8 md:p-12 flex flex-col justify-between bg-slate-900 relative z-20">
                <div>
                  <div className="flex justify-between items-start mb-8">
                    <span className="text-cyan-500 font-mono text-xs uppercase tracking-widest border border-cyan-500/20 px-2 py-1 rounded bg-cyan-500/10">
                      {selectedItem.category}
                    </span>
                    <button
                      onClick={() => setSelectedItem(null)}
                      className="p-2 hover:bg-white/10 rounded-full text-white transition"
                    >
                      <FiX size={24} />
                    </button>
                  </div>
                  <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                    {selectedItem.title}
                  </h2>
                  <p className="text-slate-300 text-lg leading-relaxed">
                    {selectedItem.desc}
                  </p>
                  <div className="mt-8 pt-8 border-t border-white/10">
                    <h4 className="text-sm font-bold text-white mb-2 uppercase">
                      Project Stack
                    </h4>
                    <div className="flex gap-2">
                      {["React", "Tailwind", "Static"].map((tag) => (
                        <span
                          key={tag}
                          className="text-xs text-slate-400 bg-white/5 px-3 py-1 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <button className="flex items-center justify-center gap-3 w-full py-4 bg-white text-black font-bold text-lg rounded-xl hover:bg-cyan-400 transition-colors mt-6">
                  View Live Site <FiArrowUpRight />
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Gallery;
