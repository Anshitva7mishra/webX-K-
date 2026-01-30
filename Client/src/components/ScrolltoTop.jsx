import React, { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

const ScrolltoTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-8 right-8 z-50 p-4 rounded-2xl bg-slate-900/60 backdrop-blur-xl border border-white/10 text-white shadow-2xl transition-all duration-500 hover:scale-110 active:scale-95 group ${
        isVisible
          ? "translate-y-0 opacity-100 visible"
          : "translate-y-10 opacity-0 invisible"
      }`}
    >
      <div className="absolute inset-0 bg-blue-500/20 rounded-2xl blur-lg group-hover:bg-blue-500/40 transition-colors" />

      <ArrowUp
        size={24}
        className="relative z-10 group-hover:-translate-y-1 transition-transform"
      />
    </button>
  );
};

export default ScrolltoTop;
