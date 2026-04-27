"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'motion/react';
import { Briefcase, Check, PenTool, Sparkles, User } from 'lucide-react';

export default function FeaturesSection() {
  return (
    <section className="py-24 px-6 md:px-12 w-full max-w-6xl mx-auto relative z-20">
      <div className="flex flex-col md:flex-row justify-between md:items-start gap-10 mb-20">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 flex-1">
          Hiring Made <span className="font-serif italic font-medium tracking-normal text-gray-800">Easy</span>
        </h2>
        <p className="text-gray-500 font-bold max-w-[420px] text-[17px] leading-relaxed">
          Connect with pre-vetted talent through our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4ad7f0] to-[#5a6cf3]">AI-driven platform</span> and start building your team in just 24 hours.
        </p>
      </div>

      <div className="flex flex-col gap-12">
        {/* Feature 1: Skill assessments */}
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="group flex flex-col md:flex-row items-center gap-12 lg:gap-24"
        >
          <div className="flex-1 w-full bg-gradient-to-br from-[#e8eeff] to-[#f2f0ff] p-8 md:p-12 rounded-[2.5rem] flex items-center justify-center min-h-[360px] transition-transform duration-500 hover:-rotate-1 hover:scale-[1.01]">
            {/* UI Mock Card */}
            <div className="bg-white rounded-2xl shadow-[0_20px_50px_-10px_rgba(0,0,0,0.05)] p-5 border border-white/50 w-full max-w-[320px]">
              <div className="flex items-center gap-4 mb-6 bg-gray-50 p-2.5 rounded-xl border border-gray-100">
                <Image src="https://picsum.photos/seed/ann/100/100" width={36} height={36} alt="Ann Hall" className="rounded-full shadow-sm" />
                <div>
                  <h4 className="font-bold text-sm text-gray-900">Ann Hall</h4>
                  <p className="text-[11px] text-gray-500 font-medium">Product and Visual Designer</p>
                </div>
              </div>
              <div className="space-y-3">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="bg-white border border-gray-100 p-3 rounded-xl shadow-sm flex items-center gap-3 relative overflow-hidden"
                >
                  <div className="w-6 h-6 bg-[#f8f9fb] border border-gray-100/80 rounded-[4px] flex items-center justify-center z-10 p-1">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" className="w-full h-full object-contain" />
                  </div>
                  <div className="flex-1 z-10">
                    <h5 className="text-[13px] font-bold text-gray-800 mb-1">Next.js</h5>
                    <div className="w-full bg-gray-100 h-1.5 rounded-full"><div className="w-[85%] bg-gray-900 h-full rounded-full"></div></div>
                  </div>
                  <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-white to-transparent z-10"></div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.6 }}
                  viewport={{ once: true }}
                  className="bg-white border border-gray-100 p-3 rounded-xl shadow-sm flex items-center gap-3 relative overflow-hidden"
                >
                  <div className="w-6 h-6 bg-[#f8f9fb] border border-gray-100/80 rounded-[4px] flex items-center justify-center z-10 p-1">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angular/angular-original.svg" className="w-full h-full object-contain" />
                  </div>
                  <div className="flex-1 z-10">
                    <h5 className="text-[13px] font-bold text-gray-800 mb-1">Angular</h5>
                    <div className="w-full bg-gray-100 h-1.5 rounded-full"><div className="w-[60%] bg-[#DD0031] h-full rounded-full"></div></div>
                  </div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.8 }}
                  viewport={{ once: true }}
                  className="bg-white border border-gray-100 p-3 rounded-xl shadow-sm flex items-center gap-3 relative overflow-hidden"
                >
                  <div className="w-6 h-6 bg-[#f8f9fb] border border-gray-100/80 rounded-[4px] flex items-center justify-center z-10 p-1">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" className="w-full h-full object-contain" />
                  </div>
                  <div className="flex-1 z-10">
                    <h5 className="text-[13px] font-bold text-gray-800 mb-1">Python</h5>
                    <div className="w-full bg-gray-100 h-1.5 rounded-full"><div className="w-[40%] bg-[#3776AB] h-full rounded-full"></div></div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
          <div className="flex-1 md:pr-12">
            <div className="w-12 h-12 bg-[#f0f4ff] text-[#7b89f4] rounded-2xl flex items-center justify-center mb-6 shadow-sm">
              <PenTool size={22} strokeWidth={2.5} />
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-4 tracking-tight">
              <span className="text-[#7b89f4]">Skill</span> assessments
            </h3>
            <p className="text-gray-500 text-[17px] leading-relaxed font-medium">
              Use standardized skill assessments to objectively measure candidates' technical abilities and find the perfect match for your team.
            </p>
          </div>
        </motion.div>

        {/* Feature 2: AI Recruiter */}
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="group flex flex-col md:flex-row items-center gap-12 lg:gap-24"
        >
          <div className="flex-1 w-full bg-gradient-to-br from-[#ebebff] to-[#e8f4ff] p-8 md:p-12 rounded-[2.5rem] flex items-center justify-center min-h-[360px] transition-transform duration-500 hover:rotate-1 hover:scale-[1.01]">
            {/* UI Mock Card */}
            <div className="bg-white rounded-2xl shadow-[0_20px_50px_-10px_rgba(0,0,0,0.05)] p-5 border border-white/50 w-full max-w-[320px] flex flex-col gap-4">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.4 }}
                viewport={{ once: true }}
                className="flex gap-3 items-start"
              >
                <Image src="https://picsum.photos/seed/ann/100/100" width={28} height={28} alt="User" className="rounded-full mt-1" />
                <div className="bg-gray-50 border border-gray-100 p-3.5 rounded-2xl rounded-tl-sm text-[12px] text-gray-700 font-medium leading-relaxed relative">
                  My last project took about 3 months. I developed a web application for shoeworld.com using React and Shopify.
                  <div className="text-[9px] text-gray-400 mt-2 flex items-center justify-between">Developer <Check size={10} /></div>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 5 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 1.6 }}
                viewport={{ once: true }}
                className="flex gap-3 items-start flex-row-reverse"
              >
                <div className="w-7 h-7 bg-[#7b89f4] rounded-full flex items-center justify-center mt-1 text-white shadow-sm shrink-0">
                  <User size={14} />
                </div>
                <div className="bg-white border border-gray-100 text-gray-700 p-3.5 rounded-2xl rounded-tr-sm text-[12px] font-medium leading-relaxed relative shadow-sm">
                  That sounds like a great project! Can you tell me more about your role in the development process?
                  <div className="text-[9px] text-gray-400 mt-2 flex items-center gap-1">AI Assistant <Check size={10} /></div>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 2.8 }}
                viewport={{ once: true }}
                className="flex gap-3 items-start"
              >
                <Image src="https://picsum.photos/seed/ann/100/100" width={28} height={28} alt="User" className="rounded-full mt-1" />
                <div className="bg-gray-50 border border-gray-100 p-3.5 rounded-2xl rounded-tl-sm text-[12px] text-gray-700 font-medium leading-relaxed relative">
                  I made sure that all product data was included and that the data was processed correctly using REST.
                  <div className="text-[9px] text-gray-400 mt-2 flex items-center justify-between">Developer <Check size={10} /></div>
                </div>
              </motion.div>
            </div>
          </div>
          <div className="flex-1 md:pr-12">
            <div className="w-12 h-12 bg-[#f0f4ff] text-[#7b89f4] rounded-2xl flex items-center justify-center mb-6 shadow-sm">
              <Sparkles size={22} strokeWidth={2.5} />
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-4 tracking-tight">
              <span className="text-[#7b89f4]">AI</span>-Recruiter
            </h3>
            <p className="text-gray-500 text-[17px] leading-relaxed font-medium">
              Effortlessly coordinate technical interviews with all participants. Save time on scheduling and focus on what truly matters.
            </p>
          </div>
        </motion.div>

        {/* Feature 3: Curated job feed */}
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="group flex flex-col md:flex-row items-center gap-12 lg:gap-24"
        >
          <div className="flex-1 w-full bg-gradient-to-br from-[#f0efff] to-[#eef7ff] p-8 md:p-12 rounded-[2.5rem] flex items-center justify-center min-h-[360px] transition-transform duration-500 hover:-rotate-1 hover:scale-[1.01]">
            {/* UI Mock Card */}
            <div className="bg-white rounded-2xl shadow-[0_20px_50px_-10px_rgba(0,0,0,0.05)] p-5 border border-white/50 w-full max-w-[320px]">
              <div className="flex items-center gap-3 mb-5 border-b border-gray-50 pb-4">
                <Image src="https://picsum.photos/seed/ann/100/100" width={32} height={32} alt="Ann Hall" className="rounded-full shadow-sm" />
                <div>
                  <h4 className="font-bold text-[13px] text-gray-900">Ann Hall</h4>
                  <p className="text-[10px] text-gray-500 font-medium">Product and Visual Designer</p>
                </div>
              </div>
              <div className="space-y-2">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-gray-50 transition cursor-pointer"
                >
                  <div className="w-8 h-8 rounded-lg bg-[#f8f9fb] border border-gray-100 flex items-center justify-center shrink-0 p-1.5">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg" className="w-full h-full object-contain" />
                  </div>
                  <div>
                    <h5 className="text-[12px] font-bold text-gray-900 leading-none mb-1">Senior Software Engineer</h5>
                    <span className="text-[10px] text-gray-400">March 11, 2025</span>
                  </div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.6 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-gray-50 transition cursor-pointer"
                >
                  <div className="w-8 h-8 rounded-lg bg-[#f8f9fb] border border-gray-100 flex items-center justify-center shrink-0 p-1.5">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg" className="w-full h-full object-contain" />
                  </div>
                  <div>
                    <h5 className="text-[12px] font-bold text-gray-900 leading-none mb-1">Lead Software Engineer</h5>
                    <span className="text-[10px] text-gray-400">March 11, 2025</span>
                  </div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.8 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-gray-50 transition cursor-pointer"
                >
                  <div className="w-8 h-8 rounded-lg bg-[#f8f9fb] border border-gray-100 flex items-center justify-center shrink-0 p-1.5">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg" className="w-full h-full object-contain" />
                  </div>
                  <div>
                    <h5 className="text-[12px] font-bold text-gray-900 leading-none mb-1">Software Engineer</h5>
                    <span className="text-[10px] text-gray-400">March 11, 2025</span>
                  </div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 1.0 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-gray-50 transition cursor-pointer"
                >
                  <div className="w-8 h-8 rounded-lg bg-[#f8f9fb] border border-gray-100 flex items-center justify-center shrink-0 p-1.5">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg" className="w-full h-full object-contain" />
                  </div>
                  <div>
                    <h5 className="text-[12px] font-bold text-gray-900 leading-none mb-1">Staff Software Engineer</h5>
                    <span className="text-[10px] text-gray-400">March 11, 2025</span>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
          <div className="flex-1 md:pr-12">
            <div className="w-12 h-12 bg-[#f0f4ff] text-[#7b89f4] rounded-2xl flex items-center justify-center mb-6 shadow-sm">
              <Briefcase size={22} strokeWidth={2.5} />
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-4 tracking-tight">
              <span className="text-[#7b89f4]">Curated</span> job feed
            </h3>
            <p className="text-gray-500 text-[17px] leading-relaxed font-medium">
              Browse through carefully selected positions at top tech companies. Apply only to jobs that match your expertise and interests.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
