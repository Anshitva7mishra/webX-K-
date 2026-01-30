import React from "react";
import { Link } from "react-router-dom";
import {
  MapPin,
  Store,
  Mail,
  Phone,
  Clock,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  Heart,
  ArrowUp,
} from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Gallery", path: "/gallery" },
  ];

  const services = [
    { name: "Local Business Listings", path: "/services" },
    { name: "Digital Marketing", path: "/services" },
    { name: "Website Development", path: "/services" },
    { name: "SEO Optimization", path: "/services" },
  ];

  const socialLinks = [
    { icon: <Facebook size={20} />, url: "#", name: "Facebook" },
    { icon: <Twitter size={20} />, url: "#", name: "Twitter" },
    { icon: <Instagram size={20} />, url: "#", name: "Instagram" },
    { icon: <Linkedin size={20} />, url: "#", name: "LinkedIn" },
    { icon: <Youtube size={20} />, url: "#", name: "YouTube" },
  ];

  return (
    <footer className="relative bg-slate-950 text-slate-300 border-t border-white/5">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600/5 rounded-full blur-[120px]" />
      </div>

      {/* Main Footer Content */}
      <div className="relative max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-3 group">
              <div className="relative">
                <div className="absolute inset-0 bg-linear-to-br from-cyan-500 to-blue-600 blur-xl opacity-50 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
                <div className="relative w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-xl transform group-hover:scale-110 transition-all duration-500">
                  <Store className="text-white" size={24} strokeWidth={2.5} />
                  <MapPin
                    className="absolute -top-2 -right-2 text-white drop-shadow-lg"
                    size={14}
                    fill="white"
                  />
                </div>
              </div>
              <div className="flex flex-col -space-y-1">
                <span className="text-2xl font-black tracking-tight text-white">
                  Near<span className="text-cyan-400">By</span>
                </span>
                <span className="text-[10px] font-medium tracking-widest text-slate-400 uppercase">
                  Local Discovery
                </span>
              </div>
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed">
              Connecting local businesses with their community. Discover the
              best shops, services, and experiences near you.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:bg-cyan-500/20 hover:border-cyan-500/50 transition-all duration-300 hover:scale-110"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6 flex items-center gap-2">
              <span className="w-1 h-6 bg-gradient-to-b from-cyan-400 to-blue-600 rounded-full"></span>
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="text-slate-400 hover:text-cyan-400 transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-0 h-0.5 bg-cyan-400 group-hover:w-4 transition-all duration-300"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold text-lg mb-6 flex items-center gap-2">
              <span className="w-1 h-6 bg-linear-to-b from-cyan-400 to-blue-600 rounded-full"></span>
              Our Services
            </h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <Link
                    to={service.path}
                    className="text-slate-400 hover:text-cyan-400 transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-0 h-0.5 bg-cyan-400 group-hover:w-4 transition-all duration-300"></span>
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold text-lg mb-6 flex items-center gap-2">
              <span className="w-1 h-6 bg-linear-to-b from-cyan-400 to-blue-600 rounded-full"></span>
              Get In Touch
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm">
                <MapPin
                  size={18}
                  className="text-cyan-400 mt-0.5 shrink-0"
                />
                <span className="text-slate-400">
                  123 Business Street, Mathura, Uttar Pradesh, India
                </span>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Phone size={18} className="text-cyan-400 shrink-0" />
                <a
                  href="tel:+911234567890"
                  className="text-slate-400 hover:text-cyan-400 transition-colors"
                >
                  +91 123 456 7890
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Mail size={18} className="text-cyan-400 shrink-0" />
                <a
                  href="mailto:info@nearby.com"
                  className="text-slate-400 hover:text-cyan-400 transition-colors"
                >
                  info@nearby.com
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm">
                <Clock
                  size={18}
                  className="text-cyan-400 mt-0.5 shrink-0"
                />
                <span className="text-slate-400">
                  Mon - Fri: 9:00 AM - 6:00 PM
                  <br />
                  Sat - Sun: 10:00 AM - 4:00 PM
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-12 border-t border-white/5">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-white mb-3">Stay Updated</h3>
            <p className="text-slate-400 mb-6">
              Subscribe to our newsletter for the latest local business updates
              and exclusive offers.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 transition-all"
              />
              <button className="px-6 py-3 bg-linear-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-cyan-500/30 transition-all duration-300 hover:scale-105 whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="relative border-t border-white/5 bg-black/20">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-slate-400 text-center md:text-left">
              © {new Date().getFullYear()} NearBy. All rights reserved. Made
              with{" "}
              <Heart
                size={14}
                className="inline text-red-500 fill-red-500 animate-pulse"
              />{" "}
              for local businesses.
            </p>
            <div className="flex items-center gap-6 text-sm">
              <Link
                to="/privacy"
                className="text-slate-400 hover:text-cyan-400 transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms"
                className="text-slate-400 hover:text-cyan-400 transition-colors"
              >
                Terms of Service
              </Link>
              <Link
                to="/cookies"
                className="text-slate-400 hover:text-cyan-400 transition-colors"
              >
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
