import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion, AnimatePresence } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Send,
  Globe,
  Github,
  Twitter,
  CheckCircle2,
  AlertCircle,
  Loader2,
} from "lucide-react";
import Navbar from "../components/Navbar";

export default function Contact() {
  const formRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null); // 'success' | 'error' | null

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

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
          setStatus("success");
          formRef.current.reset(); // Clear form
          setTimeout(() => setStatus(null), 5000);
        },
        (error) => {
          setLoading(false);
          setStatus("error");
          console.error("EmailJS Error:", error);
          setTimeout(() => setStatus(null), 5000);
        },
      );
  };

  return (
    <div className="min-h-screen bg-[#030712] text-slate-300 selection:bg-indigo-500/30">
      <Navbar />

      <div className="relative max-w-7xl mx-auto px-6 pt-32 md:pt-48 pb-20">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <h1 className="text-5xl md:text-8xl font-black text-white mb-6">
            Let’s craft your <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-emerald-400">
              digital future.
            </span>
          </h1>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* FORM AREA */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-7"
          >
            <div className="bg-slate-900/50 backdrop-blur-xl border border-white/10 rounded-[2rem] p-8 shadow-2xl">
              <form ref={formRef} onSubmit={sendEmail} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Note: the 'name' attributes must match your EmailJS template keys */}
                  <FormInput
                    label="Full Name"
                    name="user_name"
                    placeholder="John Doe"
                    required
                  />
                  <FormInput
                    label="Email Address"
                    name="user_email"
                    type="email"
                    placeholder="john@example.com"
                    required
                  />
                  <FormInput
                    label="Phone Number"
                    name="user_phone"
                    type="tel"
                    placeholder="+1 (555) 000-0000"
                  />
                  <FormInput
                    label="Subject"
                    name="subject"
                    placeholder="Project Inquiry"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-500 ml-1">
                    Message
                  </label>
                  <textarea
                    name="message"
                    rows="5"
                    required
                    placeholder="Tell us about your project..."
                    className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 text-white focus:ring-2 focus:ring-indigo-500/50 transition-all resize-none"
                  />
                </div>

                <div className="flex items-center gap-4">
                  <button
                    type="submit"
                    disabled={loading}
                    className="bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-4 px-10 rounded-2xl flex items-center gap-3 transition-all disabled:opacity-50"
                  >
                    {loading ? (
                      <Loader2 className="animate-spin" />
                    ) : (
                      <Send size={18} />
                    )}
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
                        <CheckCircle2 size={20} /> Sent!
                      </motion.div>
                    )}
                    {status === "error" && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="flex items-center gap-2 text-rose-400 font-medium"
                      >
                        <AlertCircle size={20} /> Error
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </form>
            </div>
          </motion.div>

          {/* SIDEBAR INFO */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-slate-900/50 backdrop-blur-xl p-8 rounded-[2rem] border border-white/10">
              <h3 className="text-xl font-bold text-white mb-8">
                Contact Information
              </h3>
              <div className="space-y-6">
                <Info icon={Phone} label="Phone" value="+91 98765 43210" />
                <Info icon={Mail} label="Email" value="hello@agency.com" />
                <Info icon={MapPin} label="Location" value="New Delhi, India" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const FormInput = ({ label, name, ...props }) => (
  <div className="space-y-2">
    <label className="text-xs font-bold uppercase tracking-wider text-slate-500 ml-1">
      {label}
    </label>
    <input
      name={name}
      {...props}
      className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 text-white focus:ring-2 focus:ring-indigo-500/50 transition-all"
    />
  </div>
);

const Info = ({ icon: Icon, label, value }) => (
  <div className="flex items-center gap-4 group">
    <div className="w-12 h-12 rounded-xl bg-indigo-500/10 flex items-center justify-center text-indigo-400 group-hover:bg-indigo-500 group-hover:text-white transition-all">
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
