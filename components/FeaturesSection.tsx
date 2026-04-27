"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'motion/react';
import { Code2, Terminal, Briefcase, Check } from 'lucide-react';

export default function FeaturesSection() {
  return (
    <section className="py-24 px-6 md:px-12 w-full max-w-6xl mx-auto relative z-20">
      <div className="flex flex-col md:flex-row justify-between md:items-start gap-10 mb-20">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 flex-1">
          Hiring Made <span className="font-serif italic font-medium tracking-normal text-gray-800">Easy</span>
        </h2>
        <p className="text-gray-900 font-bold max-w-[420px] text-[17px] leading-relaxed">
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
                 <div className="bg-white border border-gray-100 p-3 rounded-xl shadow-sm flex items-center gap-3 relative overflow-hidden">
                   <div className="w-6 h-6 bg-black text-white rounded-[4px] flex items-center justify-center text-[10px] font-bold z-10">N</div>
                   <div className="flex-1 z-10">
                     <h5 className="text-[13px] font-bold text-gray-800 mb-1">Next.js</h5>
                     <div className="w-full bg-gray-100 h-1.5 rounded-full"><div className="w-[85%] bg-gray-900 h-full rounded-full"></div></div>
                   </div>
                   <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-white to-transparent z-10"></div>
                 </div>
                 <div className="bg-white border border-gray-100 p-3 rounded-xl shadow-sm flex items-center gap-3 relative overflow-hidden">
                   <div className="w-6 h-6 bg-white border border-gray-100 rounded-[4px] flex items-center justify-center text-[12px] font-bold text-[#DD0031] z-10">A</div>
                   <div className="flex-1 z-10">
                     <h5 className="text-[13px] font-bold text-gray-800 mb-1">Angular</h5>
                     <div className="w-full bg-gray-100 h-1.5 rounded-full"><div className="w-[60%] bg-gray-300 h-full rounded-full"></div></div>
                   </div>
                 </div>
                 <div className="bg-white border border-gray-100 p-3 rounded-xl shadow-sm flex items-center gap-3 relative overflow-hidden">
                   <div className="w-6 h-6 bg-[#3776AB] rounded-[4px] flex items-center justify-center text-[12px] font-bold text-white z-10 text-center">P</div>
                   <div className="flex-1 z-10">
                     <h5 className="text-[13px] font-bold text-gray-800 mb-1">Python</h5>
                     <div className="w-full bg-gray-100 h-1.5 rounded-full"><div className="w-[40%] bg-gray-300 h-full rounded-full"></div></div>
                   </div>
                 </div>
               </div>
             </div>
          </div>
          <div className="flex-1 md:pr-12">
            <div className="w-12 h-12 bg-blue-50 text-blue-500 rounded-2xl flex items-center justify-center mb-6 shadow-sm border border-blue-100/50">
               <Code2 size={24} />
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-4 tracking-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-600">Skill</span> assessments
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
               <div className="flex gap-3 items-start">
                  <Image src="https://picsum.photos/seed/ann/100/100" width={28} height={28} alt="User" className="rounded-full mt-1" />
                  <div className="bg-gray-50 border border-gray-100 p-3.5 rounded-2xl rounded-tl-sm text-[12px] text-gray-700 font-medium leading-relaxed relative">
                     My last project took about 3 months. I developed a web application for shoeworld.com using React and Shopify.
                     <div className="text-[9px] text-gray-400 mt-2 flex items-center justify-between">Developer <Check size={10} /></div>
                  </div>
               </div>
               <div className="flex gap-3 items-start flex-row-reverse">
                  <div className="w-7 h-7 bg-blue-500 rounded-full flex items-center justify-center mt-1 text-white shadow-sm shrink-0">
                     <Terminal size={14} />
                  </div>
                  <div className="bg-blue-500 text-white p-3.5 rounded-2xl rounded-tr-sm text-[12px] font-medium leading-relaxed relative shadow-sm">
                     That sounds like a great project! Can you tell me more about your role in the development process?
                     <div className="text-[9px] text-blue-200 mt-2 flex items-center gap-1">AI Assistant <Check size={10} /></div>
                  </div>
               </div>
               <div className="flex gap-3 items-start">
                  <Image src="https://picsum.photos/seed/ann/100/100" width={28} height={28} alt="User" className="rounded-full mt-1" />
                  <div className="bg-gray-50 border border-gray-100 p-3.5 rounded-2xl rounded-tl-sm text-[12px] text-gray-700 font-medium leading-relaxed relative">
                     I made sure that all product data was included and that the data was processed correctly using REST.
                     <div className="text-[9px] text-gray-400 mt-2 flex items-center justify-between">Developer <Check size={10} /></div>
                  </div>
               </div>
             </div>
          </div>
          <div className="flex-1 md:pr-12">
            <div className="w-12 h-12 bg-blue-50 text-blue-500 rounded-2xl flex items-center justify-center mb-6 shadow-sm border border-blue-100/50">
               <Terminal size={24} />
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-4 tracking-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-500">AI</span>-Recruiter
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
                 <div className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-gray-50 transition cursor-pointer">
                    <div className="w-8 h-8 rounded-lg bg-red-50 text-red-500 flex items-center justify-center shrink-0 border border-red-100">
                       <Briefcase size={14} />
                    </div>
                    <div>
                      <h5 className="text-[12px] font-bold text-gray-900 leading-none mb-1">Senior Software Engineer</h5>
                      <span className="text-[10px] text-gray-400">March 11, 2025</span>
                    </div>
                 </div>
                 <div className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-gray-50 transition cursor-pointer">
                    <div className="w-8 h-8 rounded-lg bg-purple-50 text-purple-500 flex items-center justify-center shrink-0 border border-purple-100">
                       <Briefcase size={14} />
                    </div>
                    <div>
                      <h5 className="text-[12px] font-bold text-gray-900 leading-none mb-1">Lead Software Engineer</h5>
                      <span className="text-[10px] text-gray-400">March 11, 2025</span>
                    </div>
                 </div>
                 <div className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-gray-50 transition cursor-pointer">
                    <div className="w-8 h-8 rounded-lg bg-green-50 text-green-500 flex items-center justify-center shrink-0 border border-green-100">
                       <Briefcase size={14} />
                    </div>
                    <div>
                      <h5 className="text-[12px] font-bold text-gray-900 leading-none mb-1">Software Engineer</h5>
                      <span className="text-[10px] text-gray-400">March 11, 2025</span>
                    </div>
                 </div>
                 <div className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-gray-50 transition cursor-pointer">
                    <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-500 flex items-center justify-center shrink-0 border border-blue-100">
                       <Briefcase size={14} />
                    </div>
                    <div>
                       <h5 className="text-[12px] font-bold text-gray-900 leading-none mb-1">Staff Software Engineer</h5>
                       <span className="text-[10px] text-gray-400">March 11, 2025</span>
                    </div>
                 </div>
               </div>
             </div>
          </div>
          <div className="flex-1 md:pr-12">
            <div className="w-12 h-12 bg-indigo-50 text-indigo-500 rounded-2xl flex items-center justify-center mb-6 shadow-sm border border-indigo-100/50">
               <Briefcase size={24} />
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-4 tracking-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-500">Curated</span> job feed
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
