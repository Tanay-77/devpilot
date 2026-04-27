"use client";

import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="pt-48 pb-10 px-6 flex flex-col items-center text-center relative z-10 max-w-7xl mx-auto">
      {/* Decorative Lines Background */}
      <div className="hidden lg:block absolute top-[260px] left-1/2 -translate-x-1/2 w-[1440px] pointer-events-none z-0 opacity-60">
        <svg width="1440" height="200" viewBox="0 0 1440 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Left Side Bracket */}
          <path d="M0 100 L 150 100" stroke="#CBD5E1" strokeWidth="1.5" />
          <path d="M150 100 C 170 100, 170 55, 190 55 L 330 55" stroke="#CBD5E1" strokeWidth="1.5" />
          <path d="M150 100 C 170 100, 170 145, 190 145 L 260 145" stroke="#CBD5E1" strokeWidth="1.5" />

          {/* Right Side Bracket */}
          <path d="M1440 100 L 1290 100" stroke="#CBD5E1" strokeWidth="1.5" />
          <path d="M1290 100 C 1270 100, 1270 55, 1250 55 L 1110 55" stroke="#CBD5E1" strokeWidth="1.5" />
          <path d="M1290 100 C 1270 100, 1270 145, 1250 145 L 1180 145" stroke="#CBD5E1" strokeWidth="1.5" />
        </svg>
      </div>

      {/* Badge */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-full border border-gray-200/60 shadow-sm mb-8 relative z-10"
      >
        <div className="bg-[#ff6154] text-white text-[9px] font-black w-4 h-4 flex items-center justify-center rounded-full">P</div>
        <span className="text-[11px] font-semibold text-gray-600 tracking-wide">#3 Product of the Day | 280+ Upvotes</span>
      </motion.div>

      {/* Main heading */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.6, ease: 'easeOut' }}
        className="text-5xl md:text-[5.5rem] font-bold text-[#111113] tracking-tight leading-[1.05] max-w-4xl mx-auto relative z-10"
      >
        Hire <span className="font-serif italic font-medium tracking-normal text-gray-800">Exceptional</span><br />
        Developers, <span className="bg-gradient-to-r from-[#4ad7f0] to-[#5a6cf3] text-transparent bg-clip-text">Faster</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6, ease: 'easeOut' }}
        className="text-gray-500 mt-6 max-w-[540px] text-[17px] leading-relaxed mx-auto font-medium relative z-10"
      >
        <span className="text-gray-900 font-bold">Connect</span> with pre-vetted talent through our <span className="text-gray-900 font-bold">AI-driven platform</span> and start building your <span className="text-gray-900 font-bold">team in just 24 hours.</span>
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6, ease: 'easeOut' }}
        className="mt-8 relative z-10"
      >
        <button className="bg-gradient-to-b from-[#2d2d30] to-[#0f0f11] ring-1 ring-[#0f0f11] hover:from-[#36363a] hover:to-[#161618] text-[#f8f9fa] px-7 py-3.5 rounded-xl text-sm font-semibold flex items-center gap-2 transition-all shadow-[0_8px_20px_rgba(0,0,0,0.15),inset_0_1px_0_rgba(255,255,255,0.12)] hover:shadow-[0_12px_25px_rgba(0,0,0,0.2),inset_0_1px_0_rgba(255,255,255,0.15)] hover:-translate-y-0.5 origin-center">
          Hire developers <ArrowUpRight size={16} className="opacity-80" />
        </button>
      </motion.div>
    </section>
  );
}
