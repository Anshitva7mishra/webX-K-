import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";
import {
  Menu,
  X,
  MapPin,
  Home,
  Info,
  Briefcase,
  Image,
  Mail,
  Store,
} from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const navLinks = [
    { path: "/", label: "Home", icon: <Home size={18} /> },
    { path: "/about", label: "About Us", icon: <Info size={18} /> },
    { path: "/services", label: "Services", icon: <Briefcase size={18} /> },
    { path: "/gallery", label: "Gallery", icon: <Image size={18} /> },
    { path: "/contact", label: "Contact", icon: <Mail size={18} /> },
  ];

  const isActive = (path) => location.pathname === path;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700;800;900&family=DM+Sans:wght@400;500;700&display=swap');
        
        * {
          font-family: 'DM Sans', sans-serif;
        }
        
        .brand-text {
          font-family: 'Outfit', sans-serif;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-8px) rotate(5deg); }
        }

        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 20px rgba(59, 130, 246, 0.3); }
          50% { box-shadow: 0 0 40px rgba(59, 130, 246, 0.6); }
        }

        @keyframes slide-in {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .animate-slide-in {
          animation: slide-in 0.4s ease-out forwards;
        }

        .glass-morph {
          background: rgba(15, 23, 42, 0.7);
          backdrop-filter: blur(20px) saturate(180%);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .logo-container:hover .store-icon {
          animation: float 2s ease-in-out infinite;
        }

        .glow-on-hover {
          position: relative;
          z-index: 1;
        }

        .glow-on-hover::before {
          content: '';
          position: absolute;
          inset: -2px;
          background: linear-gradient(45deg, #3b82f6, #8b5cf6, #ec4899, #3b82f6);
          background-size: 300% 300%;
          border-radius: inherit;
          z-index: -1;
          opacity: 0;
          transition: opacity 0.3s;
          animation: gradient-shift 3s ease infinite;
        }

        .glow-on-hover:hover::before {
          opacity: 1;
        }

        @keyframes gradient-shift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        .nav-link-active {
          position: relative;
        }
       
      `}</style>

      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          scrolled ? "py-3" : "py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`glass-morph rounded-3xl transition-all duration-500 ${
              scrolled
                ? "px-6 py-3 shadow-2xl"
                : "px-8 py-4 shadow-[0_20px_60px_rgba(0,0,0,0.5)]"
            }`}
          >
            <div className="flex items-center justify-between">
              <Link
                to="/"
                className="logo-container flex items-center gap-3 group relative z-10"
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-linear-to-br from-primary via-secondary to-primary blur-xl opacity-50 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />

                  <div className="relative w-12 h-12 sm:w-14 sm:h-14 bg-linear-to-br from-primary to-secondary rounded-2xl flex items-center justify-center shadow-xl transform group-hover:scale-110 transition-all duration-500 overflow-hidden">
                    <div className="absolute inset-0 bg-linear-to-tr from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />

                    <div className="store-icon relative">
                      <Store
                        className="text-white"
                        size={24}
                        strokeWidth={2.5}
                      />
                      <MapPin
                        className="absolute -top-2 -right-2 text-white drop-shadow-lg"
                        size={14}
                        fill="white"
                      />
                    </div>
                  </div>
                </div>

                <div className="flex flex-col -space-y-1">
                  <span className="brand-text text-2xl sm:text-3xl font-black tracking-tight text-white drop-shadow-lg">
                    Near<span className="text-primary">By</span>
                  </span>
                  <span className="text-[10px] font-medium tracking-widest text-gray-400 uppercase">
                    Local Discovery
                  </span>
                </div>
              </Link>

              <div className="hidden lg:flex items-center gap-2">
                {navLinks.map((link, idx) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    style={{ animationDelay: `${idx * 0.1}s` }}
                    className={`group relative flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm transition-all duration-300 ${
                      isActive(link.path)
                        ? "text-white bg-linear-to-r from-primary to-secondary shadow-lg nav-link-active"
                        : "text-gray-300 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    <span
                      className={`transition-all duration-300 ${
                        isActive(link.path)
                          ? "scale-110"
                          : "group-hover:scale-125 group-hover:rotate-12"
                      }`}
                    >
                      {link.icon}
                    </span>
                    <span>{link.label}</span>
                  </Link>
                ))}
              </div>

              <div className="hidden md:flex lg:hidden items-center gap-1 bg-white/5 p-1.5 rounded-2xl border border-white/10">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`group p-3 rounded-xl transition-all duration-300 ${
                      isActive(link.path)
                        ? "bg-linear-to-br from-primary to-secondary text-white shadow-lg"
                        : "text-gray-400 hover:text-white hover:bg-white/10"
                    }`}
                    title={link.label}
                  >
                    {link.icon}
                  </Link>
                ))}
              </div>

              <div className="flex items-center gap-3 sm:gap-4">
                <div className="hidden sm:block w-30">
                  <SignedOut>
                    <SignInButton mode="modal">
                      <button className="glow-on-hover relative px-6 py-2.5 bg-linear-to-r from-primary via-secondary to-primary bg-size-[200%_100%] text-white text-sm font-bold tracking-wide rounded-xl transition-all duration-300 hover:bg-position-[100%_0] shadow-lg shadow-primary/30 active:scale-95 overflow-hidden">
                        <span className="relative z-10">SIGN IN</span>
                      </button>
                    </SignInButton>
                  </SignedOut>

                  <SignedIn>
                    <div className="relative group inline-block">
                      <div className="absolute -inset-1 bg-linear-to-r from-primary to-secondary rounded-full opacity-75 blur group-hover:opacity-100 transition-opacity" />
                      <div className="relative">
                        <UserButton
                          appearance={{
                            elements: {
                              avatarBox: "w-10 h-10 ring-2 ring-white/20",
                            },
                          }}
                        />
                      </div>
                    </div>
                  </SignedIn>
                </div>

                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="md:lg:hidden relative w-11 h-11 flex items-center justify-center rounded-xl bg-white/5 text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-300 active:scale-95 border border-white/10"
                  aria-label="Toggle menu"
                >
                  <Menu
                    size={24}
                    className={`absolute transition-all duration-300 ${
                      isOpen
                        ? "opacity-0 rotate-90 scale-50"
                        : "opacity-100 rotate-0 scale-100"
                    }`}
                  />
                  <X
                    size={24}
                    className={`absolute transition-all duration-300 ${
                      isOpen
                        ? "opacity-100 rotate-0 scale-100"
                        : "opacity-0 -rotate-90 scale-50"
                    }`}
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <div
        className={`fixed inset-0 z-40 md:lg:hidden transition-all duration-500 ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className="absolute inset-0 bg-black/20 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        />

        <div
          className={`absolute right-0 top-0 bottom-0 w-70 sm:w-[320px] glass-morph shadow-2xl transition-transform duration-500 ease-out ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex flex-col h-full p-6 pt-32 overflow-y-auto">
            <div className="relative z-10 space-y-2">
              {navLinks.map((link, idx) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  style={{
                    animationDelay: isOpen ? `${idx * 0.1}s` : "0s",
                    animationFillMode: "both",
                  }}
                  className={`animate-slide-in flex items-center gap-4 px-5 py-3.5 rounded-xl font-bold text-base transition-all duration-300 ${
                    isActive(link.path)
                      ? "bg-linear-to-r from-primary to-secondary text-white shadow-2xl shadow-primary/30 scale-105"
                      : "text-gray-300 hover:text-white hover:bg-white/5 hover:translate-x-2"
                  }`}
                >
                  <span
                    className={`transition-transform duration-300 ${
                      isActive(link.path) ? "scale-125" : ""
                    }`}
                  >
                    {link.icon}
                  </span>
                  <span className="flex-1">{link.label}</span>
                  {isActive(link.path) && (
                    <div className="w-2 h-2 rounded-full bg-white animate-pulse" />
                  )}
                </Link>
              ))}
            </div>

            <div className="mt-auto pt-8 space-y-4">
              <SignedOut>
                <SignInButton mode="modal">
                  <button className="glow-on-hover w-full py-4 bg-linear-to-r from-primary via-secondary to-primary bg-[length:200%_100%] text-white font-bold text-base rounded-xl shadow-2xl shadow-primary/30 active:scale-95 transition-all duration-300">
                    <span className="flex items-center justify-center gap-3">
                      <MapPin size={22} />
                      Sign In to Explore
                    </span>
                  </button>
                </SignInButton>
              </SignedOut>

              <SignedIn>
                <div className="glass-morph p-4 rounded-xl flex items-center gap-3">
                  <UserButton
                    appearance={{
                      elements: {
                        avatarBox: "w-12 h-12 ring-2 ring-primary/50",
                      },
                    }}
                  />
                  <div>
                    <p className="font-semibold text-white">Signed In</p>
                    <p className="text-xs text-gray-400">
                      Discover local businesses
                    </p>
                  </div>
                </div>
              </SignedIn>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
