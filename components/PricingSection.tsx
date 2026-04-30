"use client";

import React from 'react';
import { motion } from 'motion/react';
import { Check } from 'lucide-react';

export default function PricingSection() {
  return (
    <section id="pricing" className="py-24 px-6 bg-white flex flex-col items-center">
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
             className="bg-white rounded-[2.5rem] p-3 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.05)] border border-gray-100 text-left flex flex-col hover:-translate-y-1 transition-transform duration-300 group min-h-[480px]"
          >
            <div className="bg-gradient-to-b from-gray-50 to-[#e9ecef] rounded-[2rem] p-8 shadow-[0_20px_40px_-10px_rgba(0,0,0,0.12)] border border-white/50 relative z-10 flex flex-col">
              <div className="bg-white text-gray-900 text-[10px] font-bold py-1.5 px-4 rounded-full w-fit mb-5 shadow-sm">Starter</div>
              <div className="mb-1 flex items-baseline gap-1">
                <span className="text-[44px] font-extrabold tracking-tight text-gray-900 leading-none">$0</span>
                <span className="text-gray-800 font-bold text-[13px]">/month</span>
              </div>
              <p className="text-gray-800 font-semibold text-[11px] mb-6">Perfect For Small Teams</p>
              <button className="w-full bg-gradient-to-b from-[#2a2a2c] to-[#111113] hover:from-[#111113] hover:to-black text-gray-100 font-semibold text-[13px] py-3.5 rounded-full shadow-[0_10px_30px_-10px_rgba(0,0,0,0.6)] transition-all">Start Hiring</button>
            </div>
            <ul className="space-y-4 text-[13px] text-gray-600 font-bold px-6 py-10 flex-1">
              <li className="flex items-center gap-3"><Check size={14} className="text-gray-300 stroke-[3]" /> 3 Projects</li>
              <li className="flex items-center gap-3"><Check size={14} className="text-gray-300 stroke-[3]" /> AI Applicant Screening</li>
              <li className="flex items-center gap-3"><Check size={14} className="text-gray-300 stroke-[3]" /> AI Recruiter</li>
            </ul>
          </motion.div>

          {/* Professional (Highlighted) */}
          <motion.div 
             initial={{ y: 20, opacity: 0 }}
             whileInView={{ y: 0, opacity: 1 }}
             viewport={{ once: true }}
             transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
             className="bg-white rounded-[2.5rem] p-3 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.05)] border border-gray-100 text-left flex flex-col hover:-translate-y-1 transition-transform duration-300 z-20 group relative scale-100 md:scale-105 min-h-[480px]"
          >
            <div className="bg-gradient-to-b from-[#e8ecfa] to-[#d4ddf6] rounded-[2rem] p-8 shadow-[0_20px_40px_-10px_rgba(0,0,0,0.15)] border border-white/50 relative z-10 flex flex-col">
              <div className="bg-white/60 backdrop-blur-sm text-gray-900 text-[10px] font-bold tracking-widest uppercase py-1.5 px-4 rounded-full w-fit mb-5 shadow-sm border border-white/30">PROFESSIONAL</div>
              <div className="mb-1 flex items-baseline gap-1">
                <span className="text-[44px] font-extrabold tracking-tight text-gray-900 leading-none">$99</span>
                <span className="text-gray-800 font-bold text-[13px]">/month</span>
              </div>
              <p className="text-gray-800 font-semibold text-[11px] mb-6">Perfect For Growing Teams</p>
              <button className="w-full bg-gradient-to-b from-[#2a2a2c] to-[#111113] hover:from-[#111113] hover:to-black text-gray-100 font-semibold text-[13px] py-3.5 rounded-full shadow-[0_10px_30px_-10px_rgba(0,0,0,0.6)] transition-all">Start Hiring</button>
            </div>
            <ul className="space-y-4 text-[13px] text-gray-600 font-bold px-6 py-10 flex-1">
              <li className="flex items-center gap-3"><Check size={14} className="text-gray-300 stroke-[3]" /> Unlimited Projects</li>
              <li className="flex items-center gap-3"><Check size={14} className="text-gray-300 stroke-[3]" /> AI Applicant Screening</li>
              <li className="flex items-center gap-3"><Check size={14} className="text-gray-300 stroke-[3]" /> AI Recruiter</li>
              <li className="flex items-center gap-3"><Check size={14} className="text-gray-300 stroke-[3]" /> Risk-Free Guarantee</li>
            </ul>
          </motion.div>

          {/* Enterprise */}
          <motion.div 
             initial={{ y: 20, opacity: 0 }}
             whileInView={{ y: 0, opacity: 1 }}
             viewport={{ once: true }}
             transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
             className="bg-white rounded-[2.5rem] p-3 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.05)] border border-gray-100 text-left flex flex-col hover:-translate-y-1 transition-transform duration-300 group min-h-[480px]"
          >
            <div className="bg-gradient-to-b from-gray-50 to-[#e9ecef] rounded-[2rem] p-8 shadow-[0_20px_40px_-10px_rgba(0,0,0,0.12)] border border-white/50 relative z-10 flex flex-col">
              <div className="bg-white text-gray-900 text-[10px] font-bold tracking-widest uppercase py-1.5 px-4 rounded-full w-fit mb-5 shadow-sm border border-white/50">ENTERPRISE</div>
              <div className="mb-1 flex items-baseline gap-1">
                <span className="text-[44px] font-extrabold tracking-tight text-gray-900 leading-none mt-1">Custom</span>
              </div>
              <p className="text-gray-800 font-semibold text-[11px] mb-6">For Large Organizations</p>
              <button className="w-full bg-gradient-to-b from-[#2a2a2c] to-[#111113] hover:from-[#111113] hover:to-black text-gray-100 font-semibold text-[13px] py-3.5 rounded-full shadow-[0_10px_30px_-10px_rgba(0,0,0,0.6)] transition-all">Contact Us</button>
            </div>
            <ul className="space-y-4 text-[13px] text-gray-600 font-bold px-6 py-10 flex-1">
              <li className="flex items-center gap-3"><Check size={14} className="text-gray-300 stroke-[3]" /> Unlimited Projects</li>
              <li className="flex items-center gap-3"><Check size={14} className="text-gray-300 stroke-[3]" /> AI Applicant Screening</li>
              <li className="flex items-center gap-3"><Check size={14} className="text-gray-300 stroke-[3]" /> Custom Skill Assessments</li>
              <li className="flex items-center gap-3"><Check size={14} className="text-gray-300 stroke-[3]" /> Custom AI Recruiter</li>
            </ul>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
