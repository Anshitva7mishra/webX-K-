import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion, AnimatePresence } from "framer-motion";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

import {
  Phone,
  Mail,
  MapPin,
  Send,
  CheckCircle2,
  AlertCircle,
  Loader2,
} from "lucide-react";

/* ---------------- MAP CONFIG ---------------- */
const center = {
  lat: 28.6139,
  lng: 77.209,
};

/* ---------------- PAGE ---------------- */
export default function Contact() {
  const formRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
  });

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          setStatus("success");
          formRef.current.reset();
          setTimeout(() => setStatus(null), 5000);
        },
        () => {
          setLoading(false);
          setStatus("error");
          setTimeout(() => setStatus(null), 5000);
        }
      );
  };

  return (
    <div className="min-h-screen bg-[#030712] text-slate-300">
      <Navbar />

      {/* HERO */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 pt-32 md:pt-48 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h1 className="text-4xl sm:text-6xl md:text-8xl font-black text-white leading-tight">
            Let’s craft your <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-emerald-400">
              digital future.
            </span>
          </h1>
        </motion.div>

        {/* CONTENT GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* FORM */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <div className="bg-slate-900/50 backdrop-blur-xl border border-white/10 rounded-[2rem] p-6 sm:p-8 shadow-2xl">
              <form ref={formRef} onSubmit={sendEmail} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <FormInput label="Full Name" name="user_name" required />
                  <FormInput label="Email Address" name="user_email" type="email" required />
                  <FormInput label="Phone Number" name="user_phone" type="tel" />
                  <FormInput label="Subject" name="subject" required />
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="space-y-2"
                >
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-500 ml-1">
                    Message
                  </label>
                  <textarea
                    name="message"
                    rows="5"
                    required
                    placeholder="Tell us about your project..."
                    className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 text-white focus:ring-2 focus:ring-indigo-500/50 resize-none"
                  />
                </motion.div>

                {/* BUTTON */}
                <div className="flex flex-wrap items-center gap-4">
                  <button
                    type="submit"
                    disabled={loading}
                    className="bg-indigo-600 hover:bg-indigo-500 text-white font-bold
                    py-3 sm:py-4 px-6 sm:px-10 rounded-2xl
                    flex items-center gap-3 transition-all disabled:opacity-50"
                  >
                    {loading ? <Loader2 className="animate-spin" /> : <Send size={18} />}
                    {loading ? "Sending..." : "Send Message"}
                  </button>

                  <AnimatePresence>
                    {status === "success" && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="flex items-center gap-2 text-emerald-400 font-medium"
                      >
                        <CheckCircle2 size={20} /> Sent successfully!
                      </motion.div>
                    )}
                    {status === "error" && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="flex items-center gap-2 text-rose-400 font-medium"
                      >
                        <AlertCircle size={20} /> Something went wrong
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </form>
            </div>
          </motion.div>

          {/* SIDEBAR */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-8"
          >
            <div className="bg-slate-900/50 backdrop-blur-xl p-6 sm:p-8 rounded-[2rem] border border-white/10">
              <h3 className="text-xl font-bold text-white mb-8">
                Contact Information
              </h3>

              <div className="space-y-6">
                <Info icon={Phone} label="Phone" value="+91 98765 43210" />
                <Info icon={Mail} label="Email" value="hello@agency.com" />
                <Info icon={MapPin} label="Location" value="New Delhi, India" />
              </div>

              {/* MAP */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 }}
                className="mt-10 h-[220px] sm:h-[260px] md:h-[300px] rounded-xl overflow-hidden border border-white/10"
              >
                {isLoaded ? (
                  <GoogleMap
                    mapContainerStyle={{ width: "100%", height: "100%" }}
                    center={center}
                    zoom={13}
                  >
                    <Marker position={center} />
                  </GoogleMap>
                ) : (
                  <div className="h-full flex items-center justify-center bg-slate-800 text-slate-500">
                    Loading Map...
                  </div>
                )}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* FOOTER */}
      <div className="mt-24">
        <Footer />
      </div>
    </div>
  );
}

/* ---------------- COMPONENTS ---------------- */

const FormInput = ({ label, name, ...props }) => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.4 }}
    className="space-y-2"
  >
    <label className="text-xs font-bold uppercase tracking-wider text-slate-500 ml-1">
      {label}
    </label>
    <input
      name={name}
      {...props}
      className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 text-white focus:ring-2 focus:ring-indigo-500/50"
    />
  </motion.div>
);

const Info = ({ icon: Icon, label, value }) => (
  <div className="flex items-center gap-4">
    <div className="w-12 h-12 rounded-xl bg-indigo-500/10 flex items-center justify-center text-indigo-400">
      <Icon size={20} />
    </div>
    <div>
      <p className="text-[10px] uppercase text-slate-500 font-black tracking-widest">
        {label}
      </p>
      <p className="text-white font-medium">{value}</p>
    </div>
  </div>
);