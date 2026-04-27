"use client";

import React from 'react';
import { motion } from 'motion/react';
import { Check } from 'lucide-react';

export default function PricingSection() {
  return (
    <section className="py-24 px-6 bg-white flex flex-col items-center">
      <div className="max-w-5xl mx-auto w-full text-center">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-2 text-gray-900">Pricing plans</h2>
        <p className="text-gray-500 mb-16 font-medium">Choose the right plan for your needs.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto px-4 md:px-0 pt-4 md:pt-0">
          {/* Starter */}
          <motion.div 
             initial={{ y: 20, opacity: 0 }}
             whileInView={{ y: 0, opacity: 1 }}
             viewport={{ once: true }}
             transition={{ duration: 0.5, ease: "easeOut" }}
             className="bg-[#f8f9fb] rounded-[2rem] p-8 border border-white shadow-[0_10px_40px_-10px_rgba(0,0,0,0.03)] text-left flex flex-col hover:-translate-y-1 transition-transform duration-300 group"
          >
            <div className="bg-white text-gray-900 text-xs font-bold py-1 px-3 inline-block rounded-full shadow-sm w-fit mb-6 border border-gray-100">Starter</div>
            <div className="mb-2"><span className="text-4xl font-bold text-gray-900">$0</span><span className="text-gray-500 font-medium">/month</span></div>
            <p className="text-gray-900 font-semibold text-[13px] mb-8 pb-8 border-b border-gray-200">Perfect For Small Teams</p>
            <button className="w-full bg-[#111113] hover:bg-black text-white font-semibold py-3.5 rounded-2xl mb-8 shadow-[0_10px_20px_-5px_rgba(0,0,0,0.15)] transition-all group-hover:scale-[1.02]">Start Hiring</button>
            <ul className="space-y-4 text-[13px] text-gray-600 font-medium">
              <li className="flex gap-3"><Check size={16} className="text-gray-300" /> 3 Projects</li>
              <li className="flex gap-3"><Check size={16} className="text-gray-300" /> AI Applicant Screening</li>
              <li className="flex gap-3"><Check size={16} className="text-gray-300" /> AI Recruiter</li>
            </ul>
          </motion.div>

          {/* Professional (Highlighted) */}
          <motion.div 
             initial={{ y: 20, opacity: 0 }}
             whileInView={{ y: 0, opacity: 1 }}
             viewport={{ once: true }}
             transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
             className="bg-gradient-to-b from-[#e8eeff] to-[#f8f9fb] rounded-[2rem] p-8 border border-white shadow-[0_20px_60px_-15px_rgba(0,0,0,0.08)] text-left flex flex-col hover:-translate-y-1 transition-transform duration-300 md:scale-105 z-10 group"
          >
            <div className="bg-white/60 backdrop-blur-sm text-gray-900 text-[10px] font-bold tracking-widest uppercase py-1 px-3 inline-block rounded-full shadow-sm w-fit mb-6 border border-white/50">Professional</div>
            <div className="mb-2"><span className="text-4xl font-bold text-gray-900">$99</span><span className="text-gray-600 font-medium">/month</span></div>
            <p className="text-gray-900 font-semibold text-[13px] mb-8 pb-8 border-b border-gray-200/60">Perfect For Growing Teams</p>
            <button className="w-full bg-[#111113] hover:bg-black text-white font-semibold py-3.5 rounded-2xl mb-8 shadow-[0_10px_30px_-5px_rgba(0,0,0,0.25)] transition-all group-hover:scale-[1.02] relative overflow-hidden">
              <span className="relative z-10">Start Hiring</span>
              <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </button>
            <ul className="space-y-4 text-[13px] text-gray-700 font-medium">
              <li className="flex gap-3"><Check size={16} className="text-gray-400" /> Unlimited Projects</li>
              <li className="flex gap-3"><Check size={16} className="text-gray-400" /> AI Applicant Screening</li>
              <li className="flex gap-3"><Check size={16} className="text-gray-400" /> AI Recruiter</li>
              <li className="flex gap-3"><Check size={16} className="text-gray-400" /> Risk-Free Guarantee</li>
            </ul>
          </motion.div>

          {/* Enterprise */}
          <motion.div 
             initial={{ y: 20, opacity: 0 }}
             whileInView={{ y: 0, opacity: 1 }}
             viewport={{ once: true }}
             transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
             className="bg-[#f8f9fb] rounded-[2rem] p-8 border border-white shadow-[0_10px_40px_-10px_rgba(0,0,0,0.03)] text-left flex flex-col hover:-translate-y-1 transition-transform duration-300 group"
          >
            <div className="bg-white text-gray-900 text-[10px] font-bold py-1 px-3 inline-block rounded-full shadow-sm w-fit mb-6 border border-gray-100 uppercase tracking-widest">Enterprise</div>
            <div className="mb-2"><span className="text-4xl font-bold text-gray-900">Custom</span></div>
            <p className="text-gray-900 font-semibold text-[13px] mb-8 pb-8 mt-[14px] border-b border-gray-200">For Large Organizations</p>
            <button className="w-full bg-[#111113] hover:bg-black text-white font-semibold py-3.5 rounded-2xl mb-8 shadow-[0_10px_20px_-5px_rgba(0,0,0,0.15)] transition-all group-hover:scale-[1.02]">Contact Us</button>
            <ul className="space-y-4 text-[13px] text-gray-600 font-medium">
              <li className="flex gap-3"><Check size={16} className="text-gray-300" /> Unlimited Projects</li>
              <li className="flex gap-3"><Check size={16} className="text-gray-300" /> AI Applicant Screening</li>
              <li className="flex gap-3"><Check size={16} className="text-gray-300" /> Custom Skill Assessments</li>
              <li className="flex gap-3"><Check size={16} className="text-gray-300" /> Custom AI Recruiter</li>
            </ul>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
