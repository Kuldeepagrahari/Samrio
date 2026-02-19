import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Zap, Heart, ArrowRight, Globe } from "lucide-react";

interface LandingPageProps {
  onLaunch: () => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ onLaunch }) => {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-[#FF5885]/30">
      {/* 1. Conversion-Optimized Navigation */}
      <nav className="fixed top-0 w-full z-50 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
          <img src="/full_logo.png" alt="Samrio" className="h-9 w-auto" />
          <div className="flex items-center gap-8">
            <span className="hidden md:block text-sm text-slate-400 font-medium">
              <span className="text-[#FF5885]">1.2k</span> souls entangled today
            </span>
            <button
              onClick={onLaunch}
              className="px-6 py-2 bg-white text-black text-sm font-bold rounded-full hover:bg-[#FF5885] hover:text-white transition-all"
            >
              Launch Space
            </button>
          </div>
        </div>
      </nav>

      {/* 2. Split-Screen Hero Section */}
      <header className="pt-32 pb-20 px-6 max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF5885]/10 border border-[#FF5885]/20 text-[#FF5885] text-xs font-bold mb-6">
            <Zap size={14} /> NEW: ZERO-LATENCY RITUALS
          </div>
          <h1 className="text-5xl md:text-7xl font-bold leading-[1.1] mb-6 tracking-tight">
            Distance can't stop <br />
            your <span className="text-[#FF5885]">Special Days.</span>
          </h1>

          <p className="text-slate-400 text-lg md:text-xl leading-relaxed mb-10 max-w-lg">
            Create your own private virtual room to celebrate everything
            together. From Valentine's Day and birthdays to festivals like Karwa
            Chauth, stay connected and celebrate your love from any distance.
          </p>
          <div className="flex flex-wrap gap-4">
            <button
              onClick={onLaunch}
              className="group px-8 py-4 bg-[#FF5885] text-white rounded-full font-bold flex items-center gap-2 shadow-[0_0_40px_rgba(255,88,133,0.3)] hover:scale-105 transition-all"
            >
              Get Started Free{" "}
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </motion.div>

        {/* 3. Immersive Product Preview */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative group"
        >
          <div className="absolute inset-0 bg-[#FF5885]/20 blur-[100px] rounded-full group-hover:bg-[#FF5885]/30 transition-all duration-700" />
          <div className="relative aspect-square md:aspect-video rounded-3xl border border-white/10 bg-slate-900/50 backdrop-blur-2xl overflow-hidden shadow-2xl">
            {/* This is where your animated "Date Room" mockup goes */}
            <div className="absolute inset-0 flex items-center justify-center text-slate-700 font-mono text-sm">
              [ Interactive Space Preview ]
            </div>
            <div className="absolute bottom-4 left-4 right-4 h-1 bg-white/5 rounded-full overflow-hidden">
              <motion.div
                animate={{ x: ["-100%", "100%"] }}
                transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
                className="w-1/3 h-full bg-[#FF5885]"
              />
            </div>
          </div>
        </motion.div>
      </header>

      {/* 4. Trust Block Above the Fold */}
      <section className="border-y border-white/5 py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-center md:justify-between items-center gap-8 opacity-50 grayscale hover:grayscale-0 transition-all">
          <div className="flex items-center gap-2 font-bold">
            <ShieldCheck /> SOC2 COMPLIANT
          </div>
          <div className="flex items-center gap-2 font-bold">
            <Heart /> 1M+ MOMENTS SHARED
          </div>
          <div className="flex items-center gap-2 font-bold">
            <Globe /> 40+ COUNTRIES
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
