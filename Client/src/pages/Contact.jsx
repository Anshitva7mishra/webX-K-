import React, { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { motion, AnimatePresence } from "framer-motion";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";
import {
  Phone,
  Mail,
  Loader2,
  ArrowUpRight,
  Terminal,
  Instagram,
  Twitter,
  Linkedin,
  Plus,
  Minus,
  Zap,
  Target,
  Rocket,
} from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const center = { lat: 28.6139, lng: 77.209 };
const SERVICES = [
  "Web Design",
  "Development",
  "Branding",
  "SEO",
  "AI Solutions",
];

const FAQS = [
  {
    q: "How fast can we start?",
    a: "Once the transmission is received, our team reviews the brief within 24 hours. Kick-off usually happens within 7 business days.",
  },
  {
    q: "Do you offer post-launch support?",
    a: "Affirmative. We provide 24/7 technical monitoring and scheduled maintenance protocols to ensure 99.9% uptime for all deployments.",
  },
  {
    q: "What is the average investment?",
    a: "Project cycles typically range from $5k to $50k depending on the complexity of the tech stack and required integrations.",
  },
];

const PROTOCOL_STEPS = [
  {
    icon: Target,
    title: "Extraction",
    desc: "We deep-dive into your requirements to extract the core objectives.",
  },
  {
    icon: Zap,
    title: "Architecture",
    desc: "Building the high-fidelity blueprint and technical infrastructure.",
  },
  {
    icon: Rocket,
    title: "Deployment",
    desc: "Rigorous testing followed by a seamless global launch.",
  },
];

export default function Contact() {
  const formRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [selectedService, setSelectedService] = useState("Web Design");
  const [currentTime, setCurrentTime] = useState(new Date());
  const [openFaq, setOpenFaq] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
  });

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      )
      .then(
        () => {
          setLoading(false);
          formRef.current.reset();
        },
        () => {
          setLoading(false);
        },
      );
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-300 selection:bg-indigo-500/30 overflow-x-hidden">
      <Navbar />

      <main className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-32 pb-20">
        {/* --- HERO SECTION --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-end mb-16 sm:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="px-3 py-1 rounded-full border border-indigo-500/30 text-indigo-400 text-[10px] font-bold tracking-[0.3em] uppercase bg-indigo-500/5">
                Status: Open for work
              </span>
            </div>
            <h1 className="text-5xl sm:text-8xl lg:text-[10rem] font-bold text-white leading-[0.8] tracking-tighter">
              SAY <br /> <span>HELLO.</span>
            </h1>
          </motion.div>

          <div className="flex flex-col items-start lg:items-end w-full">
            <div className="bg-white/5 border border-white/10 p-6 sm:p-8 rounded-2xl backdrop-blur-xl relative group overflow-hidden w-full lg:max-w-sm">
              <div className="absolute top-0 right-0 p-2 opacity-10 group-hover:rotate-12 transition-transform">
                <Terminal size={32} />
              </div>
              <div className="flex items-center gap-3 mb-2 text-xs font-mono text-slate-500 tracking-widest">
                <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                GLOBAL OPS / NEW DELHI
              </div>
              <div className="text-3xl sm:text-4xl font-mono text-white mb-2 tracking-tighter">
                {currentTime.toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                  second: "2-digit",
                  hour12: false,
                })}
              </div>
              <p className="text-[10px] text-indigo-400 font-bold uppercase tracking-widest">
                Timezone: GMT +5:30
              </p>
            </div>
          </div>
        </div>

        {/* --- MAIN FORM & SIDEBAR --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 mb-32">
          <div className="lg:col-span-7 order-2 lg:order-1">
            <form ref={formRef} onSubmit={sendEmail} className="space-y-16">
              <div className="space-y-6">
                <h3 className="text-xs font-black uppercase tracking-[0.4em] text-slate-500 flex items-center gap-4">
                  <span className="w-12 h-[1px] bg-slate-800"></span> 01. Select
                  Type
                </h3>
                <div className="flex flex-wrap gap-3">
                  {SERVICES.map((s) => (
                    <ServiceChip
                      key={s}
                      label={s}
                      active={selectedService === s}
                      onClick={() => setSelectedService(s)}
                    />
                  ))}
                </div>
              </div>

              <div className="space-y-12">
                <h3 className="text-xs font-black uppercase tracking-[0.4em] text-slate-500 flex items-center gap-4">
                  <span className="w-12 h-[1px] bg-slate-800"></span> 02.
                  Details
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
                  <FloatingInput
                    label="Full Name"
                    name="user_name"
                    placeholder="John Doe"
                    required
                  />
                  <FloatingInput
                    label="Email Address"
                    name="user_email"
                    type="email"
                    placeholder="john@example.com"
                    required
                  />
                  <div className="md:col-span-2">
                    <FloatingInput
                      label="The Brief"
                      name="message"
                      textarea
                      placeholder="Tell us about your vision..."
                    />
                  </div>
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full sm:w-auto relative px-12 py-6 bg-indigo-600 text-white font-bold rounded-full overflow-hidden group"
              >
                <span className="relative z-10 flex items-center justify-center gap-4 text-lg">
                  {loading ? (
                    <Loader2 className="animate-spin" />
                  ) : (
                    "SEND TRANSMISSION"
                  )}
                  <ArrowUpRight size={20} />
                </span>
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity" />
              </motion.button>
            </form>
          </div>

          <div className="lg:col-span-5 space-y-12 order-1 lg:order-2">
            <div className="space-y-8 bg-white/5 border border-white/10 p-10 rounded-[2.5rem]">
              <ContactLink
                icon={Mail}
                title="Direct Mail"
                detail="hello@agency.studio"
                href="mailto:hello@agency.studio"
              />
              <ContactLink
                icon={Phone}
                title="Headquarters"
                detail="+91 98765 43210"
                href="tel:+919876543210"
              />
              <div className="pt-6 flex gap-4">
                <SocialIcon icon={Twitter} href="#" />
                <SocialIcon icon={Instagram} href="#" />
                <SocialIcon icon={Linkedin} href="#" />
              </div>
            </div>

            <div className="relative group aspect-square rounded-[2.5rem] overflow-hidden border border-white/10">
              {isLoaded ? (
                <GoogleMap
                  mapContainerStyle={{
                    width: "100%",
                    height: "100%",
                    filter: "grayscale(1) invert(0.9) contrast(1.2)",
                  }}
                  center={center}
                  zoom={14}
                  options={{ disableDefaultUI: true }}
                >
                  <Marker position={center} />
                </GoogleMap>
              ) : (
                <div className="h-full bg-slate-900 animate-pulse" />
              )}
              <div className="absolute inset-0 pointer-events-none">
                <div className="w-full h-[2px] bg-indigo-500/30 absolute top-0 animate-[scan_4s_linear_infinite]" />
              </div>
            </div>
          </div>
        </div>

        {/* --- SECTION: THE PROTOCOL (Process) --- */}
        <div className="mb-32">
          <div className="mb-16">
            <h2 className="text-indigo-500 font-mono text-sm tracking-[0.5em] uppercase mb-4">
              The Protocol
            </h2>
            <h3 className="text-4xl sm:text-6xl font-bold text-white tracking-tighter">
              OUR PIPELINE.
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {PROTOCOL_STEPS.map((step, i) => (
              <div
                key={i}
                className="p-8 bg-white/5 border border-white/10 rounded-3xl group hover:border-indigo-500/50 transition-all duration-500"
              >
                <div className="w-12 h-12 bg-indigo-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <step.icon className="text-indigo-400" size={24} />
                </div>
                <h4 className="text-white font-bold text-xl mb-3 tracking-tight">
                  {step.title}
                </h4>
                <p className="text-slate-500 text-sm leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* --- SECTION: FAQ (Accordion) --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
          <div className="lg:col-span-5">
            <h2 className="text-indigo-500 font-mono text-sm tracking-[0.5em] uppercase mb-4">
              Transmission Intel
            </h2>
            <h3 className="text-4xl sm:text-6xl font-bold text-white tracking-tighter mb-6">
              FAQ.
            </h3>
            <p className="text-slate-500 max-w-sm">
              Common inquiries regarding our deployment cycles and partnership
              structure.
            </p>
          </div>
          <div className="lg:col-span-7 space-y-4">
            {FAQS.map((faq, i) => (
              <div
                key={i}
                className={`border rounded-2xl transition-all duration-500 cursor-pointer ${openFaq === i ? "bg-white/5 border-indigo-500/50" : "border-white/10 hover:border-white/20"}`}
                onClick={() => setOpenFaq(openFaq === i ? -1 : i)}
              >
                <div className="p-6 flex items-center justify-between">
                  <span className="text-white font-medium tracking-tight">
                    {faq.q}
                  </span>
                  {openFaq === i ? (
                    <Minus size={18} className="text-indigo-400" />
                  ) : (
                    <Plus size={18} />
                  )}
                </div>
                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 text-slate-400 text-sm leading-relaxed border-t border-white/5 pt-4">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />

      <style>{`
        @keyframes scan {
          from {
            top: 0%;
          }
          to {
            top: 100%;
          }
        }
      `}</style>
    </div>
  );
}

const ServiceChip = ({ label, active, onClick }) => (
  <button
    type="button"
    onClick={onClick}
    className={`px-6 py-3 rounded-xl border text-[10px] font-black uppercase tracking-widest transition-all duration-500 ${
      active
        ? "bg-indigo-600 border-indigo-500 text-white shadow-lg shadow-indigo-500/30"
        : "bg-white/5 border-white/10 text-slate-500 hover:text-slate-300"
    }`}
  >
    {label}
  </button>
);

const FloatingInput = ({ label, textarea, ...props }) => {
  const [focused, setFocused] = useState(false);
  const InputTag = textarea ? "textarea" : "input";
  return (
    <div className="relative">
      <InputTag
        {...props}
        onFocus={() => setFocused(true)}
        onBlur={(e) => setFocused(e.target.value !== "")}
        className={`w-full bg-transparent border-b border-slate-800 py-4 text-white outline-none transition-all duration-700 ${focused ? "border-indigo-500" : ""} ${textarea ? "h-32 resize-none" : ""}`}
      />
      <label
        className={`absolute left-0 -top-6 text-[10px] font-black uppercase tracking-[0.3em] transition-all duration-500 ${focused ? "text-indigo-500" : "text-slate-600"}`}
      >
        {label}
      </label>
    </div>
  );
};

const ContactLink = ({ icon: Icon, title, detail, href }) => (
  <a href={href} className="group flex items-center gap-6">
    <div className="w-14 h-14 rounded-2xl bg-indigo-500/10 flex items-center justify-center border border-indigo-500/20 group-hover:bg-indigo-600 transition-all duration-500">
      <Icon className="text-indigo-400 group-hover:text-white" size={22} />
    </div>
    <div>
      <h4 className="text-[10px] font-black text-slate-600 uppercase tracking-widest mb-1">
        {title}
      </h4>
      <p className="text-lg font-medium text-white group-hover:text-indigo-400 transition-colors tracking-tight">
        {detail}
      </p>
    </div>
  </a>
);

const SocialIcon = ({ icon: Icon, href }) => (
  <a
    href={href}
    className="w-12 h-12 rounded-xl border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all duration-500"
  >
    <Icon size={18} />
  </a>
);
