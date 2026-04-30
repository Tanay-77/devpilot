"use client";

import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';

const navLinks = [
  { name: 'Features', href: '#features' },
  { name: 'Smart recruitment', href: '#smart-recruitment' },
  { name: 'Pricing', href: '#pricing' },
  { name: 'Tstm', href: '#testimonials' },
];

export default function Navbar() {
  return (
    <div className="w-full flex justify-center absolute top-8 z-50 px-4">
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="bg-white/80 backdrop-blur-xl px-4 py-2.5 rounded-full border border-gray-200/60 shadow-[0_4px_20px_rgba(0,0,0,0.03)] flex items-center justify-between w-full max-w-4xl"
      >
        <div className="flex items-center pl-2">
          <Image src="/logo.png" alt="Devpilot Logo" width={110} height={32} className="h-7 w-auto object-contain" />
        </div>
        <div className="hidden md:flex items-center gap-8 text-[13px] font-semibold tracking-wide text-gray-500">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="hover:text-gray-900 transition-colors">
              {link.name}
            </a>
          ))}
        </div>
        <button className="bg-gradient-to-b from-[#2d2d30] to-[#0f0f11] ring-1 ring-[#0f0f11] hover:from-[#36363a] hover:to-[#161618] text-[#f8f9fa] px-5 py-2.5 rounded-xl text-[13px] font-semibold flex items-center gap-1.5 transition-all shadow-[0_6px_15px_rgba(0,0,0,0.15),inset_0_1px_0_rgba(255,255,255,0.12)] hover:shadow-[0_8px_20px_rgba(0,0,0,0.2),inset_0_1px_0_rgba(255,255,255,0.15)] hover:scale-[1.02]">
          Hire developers <ArrowUpRight size={14} className="opacity-80" />
        </button>
      </motion.nav>
    </div>
  );
}
