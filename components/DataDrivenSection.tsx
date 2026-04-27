"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'motion/react';
import { Sparkles, Wand2, ClipboardCheck, FileText, User, MessageSquare, LayoutList, Briefcase, Settings, HelpCircle, Check, ArrowRight, Search } from 'lucide-react';

export default function DataDrivenSection() {
  return (
    <section className="py-24 px-6 md:px-12 w-full max-w-6xl mx-auto relative z-20">
      <div className="flex flex-col items-start mb-8">
        <div className="border border-gray-200 rounded-full px-4 py-1.5 text-[12px] font-bold text-gray-600 bg-white shadow-sm inline-block mb-6">
          Smart hiring
        </div>
        <div className="w-full flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
          <h2 className="text-4xl md:text-5xl tracking-tight text-gray-900 flex items-center gap-3">
            <span className="font-serif italic font-medium text-gray-800 text-5xl md:text-6xl">Data-driven</span>
            <span className="font-extrabold text-5xl md:text-6xl">hiring</span>
          </h2>
          <p className="max-w-md text-[15px] text-gray-600 font-medium leading-relaxed pb-2">
            Smart recruiting leverages data and <span className="font-bold text-gray-900">AI-powered</span> technology to <span className="font-bold text-gray-900">optimize</span> and enhance your talent acquisition process.
          </p>
        </div>
      </div>

      <div className="flex justify-center mt-12 mb-10 relative z-10">
        <div className="bg-white/80 backdrop-blur-md border border-gray-200/60 p-2 rounded-2xl shadow-sm flex items-center gap-2">
          <button className="bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.1)] border border-gray-100 rounded-xl px-5 py-2.5 flex items-center gap-2.5">
             <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-[#5a6cf3] to-[#4ad7f0] flex items-center justify-center text-white shadow-sm">
               <Sparkles size={13} strokeWidth={3} />
             </div>
             <span className="text-[13px] font-bold text-gray-900 tracking-wide">Precision matching</span>
          </button>
          <button className="p-3 text-gray-400 hover:text-gray-600 hover:bg-gray-50 rounded-xl transition">
            <Wand2 size={20} strokeWidth={2.5} />
          </button>
          <button className="p-3 text-gray-400 hover:text-gray-600 hover:bg-gray-50 rounded-xl transition">
            <ClipboardCheck size={20} strokeWidth={2.5} />
          </button>
          <button className="p-3 text-gray-400 hover:text-gray-600 hover:bg-gray-50 rounded-xl transition">
            <FileText size={20} strokeWidth={2.5} />
          </button>
        </div>
      </div>

      <motion.div 
        initial={{ y: 40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="mt-8 bg-white rounded-[2.5rem] border border-gray-100 p-6 md:p-10 shadow-[0_20px_80px_-20px_rgba(0,0,0,0.05)] relative overflow-hidden"
      >
        {/* Colorful blurred background blobs */}
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-purple-200/30 blur-[120px] rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-cyan-200/30 blur-[120px] rounded-full translate-x-1/2 translate-y-1/2 pointer-events-none"></div>

        {/* Title inside container */}
        <h3 className="text-center font-serif italic text-2xl md:text-[28px] text-gray-700 mb-8 mt-2 relative z-10 tracking-tight">
          AI-powered matching of skills, experience & insights.
        </h3>

        {/* Dashboard Wrapper */}
        <div className="bg-[#fcfdfd] border border-gray-200 rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row h-auto md:h-[620px] relative z-10">
          {/* Sidebar */}
          <div className="w-full md:w-[220px] bg-white border-r border-gray-100 flex flex-col shrink-0">
             <div className="p-6 pb-4">
               {/* Logo */}
               <div className="flex items-center gap-2 font-bold text-lg text-gray-900 tracking-tight">
                 <div className="w-6 h-6 border-[2.5px] border-gray-900 rounded-[6px] flex items-center justify-center text-[10px] font-black">dp</div>
                 devpilot
               </div>
             </div>
             <div className="flex-1 py-2 px-3 flex flex-col gap-1 overflow-y-auto no-scrollbar">
               <div className="px-3 py-2.5 bg-gray-50 text-gray-900 rounded-xl text-[13px] font-bold flex items-center gap-3">
                 <User size={16} className="text-gray-900" strokeWidth={2.5} /> Profile
               </div>
               <div className="px-3 py-2.5 text-gray-500 hover:bg-gray-50 rounded-xl text-[13px] font-semibold flex items-center gap-3 transition">
                 <MessageSquare size={16} strokeWidth={2.5} /> Messages
               </div>
               <div className="px-3 py-2.5 text-gray-500 hover:bg-gray-50 rounded-xl text-[13px] font-semibold flex items-center justify-between transition">
                 <div className="flex items-center gap-3"><FileText size={16} strokeWidth={2.5} /> Tests</div>
                 <span className="text-[10px] font-bold text-gray-400">3</span>
               </div>
               <div className="px-3 py-2.5 text-gray-500 hover:bg-gray-50 rounded-xl text-[13px] font-semibold flex items-center gap-3 transition">
                 <LayoutList size={16} strokeWidth={2.5} /> Your projects
               </div>
               <div className="px-3 py-2.5 text-gray-500 hover:bg-gray-50 rounded-xl text-[13px] font-semibold flex items-center gap-3 transition">
                 <Briefcase size={16} strokeWidth={2.5} /> Your applications
               </div>
               <div className="px-3 py-2.5 text-gray-500 hover:bg-gray-50 rounded-xl text-[13px] font-semibold flex items-center gap-3 transition">
                 <User size={16} strokeWidth={2.5} /> Full-time roles
               </div>
             </div>
             <div className="p-3 border-t border-gray-100 flex flex-col gap-1">
               <div className="px-3 py-2.5 text-gray-500 hover:bg-gray-50 rounded-xl text-[13px] font-semibold flex items-center gap-3 transition">
                 <HelpCircle size={16} strokeWidth={2.5} /> Support
               </div>
               <div className="px-3 py-2.5 text-gray-500 hover:bg-gray-50 rounded-xl text-[13px] font-semibold flex items-center gap-3 transition">
                 <Settings size={16} strokeWidth={2.5} /> Settings
               </div>
               <div className="mt-4 px-3 pb-3 flex items-center gap-3">
                 <Image src="https://picsum.photos/seed/maria/100/100" width={32} height={32} alt="Maria Simao" className="rounded-full shadow-sm" />
                 <span className="text-[13px] font-bold text-gray-900">Maria Simao</span>
               </div>
             </div>
          </div>

          {/* Main Content */}
          <div className="flex-1 bg-gradient-to-br from-[#f2f6fa] to-[#e8f1f8] p-6 md:p-8 overflow-y-auto no-scrollbar">
            <div className="flex flex-col xl:flex-row gap-6 mb-6 bg-gradient-to-r from-[#fae8ff]/70 via-[#f3e8ff]/50 to-[#e0f2fe]/70 p-6 md:p-8 rounded-[2rem]">
              {/* Left Profile Card (Maria Simao) */}
              <div className="bg-white/95 backdrop-blur-md p-6 rounded-[1.5rem] border border-white shadow-[0_10px_30px_-10px_rgba(0,0,0,0.06)] flex-[0.45] min-w-[320px]">
                 <div className="flex justify-between items-center text-xs text-gray-500 font-semibold mb-6">
                   <div className="flex items-center gap-2">
                      <img src="https://flagcdn.com/us.svg" alt="USA" className="w-5 h-auto rounded-[2px]" /> United States
                   </div>
                   <div className="flex items-center gap-1.5 bg-[#f8f9fb] border border-gray-100 px-3 py-1.5 rounded-lg text-[11px] font-bold text-gray-700">
                      $65/hour
                   </div>
                 </div>
                 <div className="flex justify-between items-start mb-6">
                   <div>
                     <h4 className="font-bold text-[22px] text-gray-900 leading-tight mb-1 tracking-tight">Maria Simao</h4>
                     <p className="text-[12px] text-gray-500 font-medium">Frontend-Developer from New York</p>
                   </div>
                   <Image src="https://picsum.photos/seed/maria/100/100" width={48} height={48} alt="Maria Simao" className="rounded-full border-[2px] border-white shadow-sm" />
                 </div>
                 <div className="mb-6">
                   <div className="flex justify-between text-[11px] font-bold mb-2.5">
                     <span className="text-gray-400 uppercase tracking-widest">Matches</span>
                     <span className="text-blue-500">100%</span>
                   </div>
                   <div className="h-[6px] bg-[#f0f2f5] rounded-full overflow-hidden">
                     <div className="h-full w-full bg-gradient-to-r from-[#4ad7f0] to-[#5a6cf3] rounded-full"></div>
                   </div>
                 </div>
                 <div className="mb-6">
                   <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block mb-3">Programming Skills</span>
                   <div className="flex flex-col gap-2.5">
                     <div className="flex items-center gap-3 bg-[#f8f9fb] border border-gray-100/80 px-3.5 py-2.5 rounded-xl text-[13px] font-bold text-gray-700">
                       <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" className="w-4 h-4 object-contain" /> Next.js
                     </div>
                     <div className="flex items-center gap-3 bg-[#f8f9fb] border border-gray-100/80 px-3.5 py-2.5 rounded-xl text-[13px] font-bold text-gray-700">
                       <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" className="w-4 h-4 object-contain" /> TailwindCSS
                     </div>
                     <div className="flex items-center gap-3 bg-[#f8f9fb] border border-gray-100/80 px-3.5 py-2.5 rounded-xl text-[13px] font-bold text-gray-700">
                       <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" className="w-4 h-4 object-contain" /> MongoDB
                     </div>
                   </div>
                 </div>
                 <div className="flex gap-3">
                   <button className="flex-[0.4] border border-gray-200 text-gray-700 font-bold py-3 rounded-xl text-[12px] flex items-center justify-center gap-1.5 hover:bg-gray-50 transition bg-white shadow-sm">
                     + Add to project
                   </button>
                   <button className="flex-[0.6] bg-[#111113] text-white font-bold py-3 rounded-xl text-[12px] flex items-center justify-center gap-1.5 hover:bg-black transition shadow-md">
                     <FileText size={14} strokeWidth={2.5} /> Open Profile
                   </button>
                 </div>
              </div>

              {/* Right Dark Card (Your profile is hidden) */}
              <div className="bg-[#18181b] text-white p-7 md:p-8 rounded-[1.5rem] flex-[0.55] border border-[#2a2a2c] shadow-[0_20px_50px_-15px_rgba(0,0,0,0.4)] flex flex-col justify-center min-w-[320px]">
                 
                 <div className="flex justify-between items-start border-b border-[#2a2a2c] pb-5 mb-7">
                    <div className="flex items-center gap-3">
                       <div className="w-2.5 h-2.5 rounded-full bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.5)]"></div>
                       <h4 className="font-bold text-[15px] tracking-wide text-gray-100">Your profile is hidden!</h4>
                    </div>
                    <span className="text-[11px] text-gray-400 font-medium hidden sm:block">Complete setup to become visible</span>
                 </div>
                 
                 <div className="space-y-6">
                   <div className="flex items-start gap-4">
                     <div className="w-8 h-8 rounded-lg bg-[#20b875] text-white flex items-center justify-center shrink-0">
                       <Check size={16} strokeWidth={3} />
                     </div>
                     <div className="pt-0.5">
                       <h5 className="text-[13px] font-bold text-gray-200">Sign-Up</h5>
                       <p className="text-[11px] text-gray-500 mt-1 font-medium">You passed the initial test.</p>
                     </div>
                   </div>
                   
                   <div className="flex items-start gap-4">
                     <div className="w-8 h-8 rounded-lg bg-[#20b875] text-white flex items-center justify-center shrink-0">
                       <Check size={16} strokeWidth={3} />
                     </div>
                     <div className="pt-0.5">
                       <h5 className="text-[13px] font-bold text-gray-200">All required fields are completed.</h5>
                       <p className="text-[11px] text-gray-500 mt-1 font-medium">Name, Profile picture (should clearly show you).</p>
                     </div>
                   </div>
                   
                   <div className="flex items-start gap-4">
                     <div className="w-8 h-8 rounded-lg bg-[#2a2a2c] text-white flex items-center justify-center shrink-0">
                       <ClipboardCheck size={14} strokeWidth={2.5} />
                     </div>
                     <div className="flex-1 pt-0.5">
                       <h5 className="text-[13px] font-bold text-white tracking-wide">Take your skills tests.</h5>
                       <p className="text-[11px] text-gray-400 mt-1 font-medium">Show what you're truly capable of!</p>
                     </div>
                     <button className="bg-white/10 hover:bg-white/20 text-gray-100 text-[11px] font-bold px-4 py-2 rounded-xl flex items-center gap-1.5 transition whitespace-nowrap shrink-0 mt-0.5 border border-white/5">
                       Take a test <ArrowRight size={10} strokeWidth={3} />
                     </button>
                   </div>
                   
                   <div className="flex items-start gap-4 pt-1">
                     <div className="w-8 h-8 rounded-full border-[3px] border-[#374151] border-l-[#7b89f4] flex items-center justify-center shrink-0 mt-0.5"></div>
                     <div className="pt-0.5">
                       <h5 className="text-[13px] font-bold text-[#7b89f4]">Access to all available jobs and projects!</h5>
                       <p className="text-[11px] text-gray-500 mt-1 font-medium">Get matched and discover new jobs and projects.</p>
                     </div>
                   </div>
                 </div>
              </div>
            </div>

            {/* Bottom Forms Area */}
            <div className="flex flex-col lg:flex-row gap-6">
              {/* Basic Details */}
              <div className="bg-white p-6 md:p-7 rounded-[1.5rem] border border-white shadow-[0_10px_30px_-10px_rgba(0,0,0,0.05)] flex-[0.4] min-w-[300px]">
                 <h4 className="font-bold text-[15px] text-gray-900 mb-5">Basic details</h4>
                 <div className="space-y-5">
                   <div>
                     <label className="text-[12px] font-bold text-gray-500 block mb-2">Name</label>
                     <input type="text" value="Maria Simao" readOnly className="w-full bg-[#f8f9fb] border border-gray-200/80 rounded-xl px-4 py-3 text-[13px] font-bold text-gray-900 outline-none" />
                   </div>
                   <div className="flex flex-col sm:flex-row gap-4">
                     <div className="flex-1">
                       <label className="text-[12px] font-bold text-gray-500 block mb-2">City</label>
                       <input type="text" value="New York" readOnly className="w-full bg-[#f8f9fb] border border-gray-200/80 rounded-xl px-4 py-3 text-[13px] font-bold text-gray-900 outline-none" />
                     </div>
                     <div className="flex-1">
                       <label className="text-[12px] font-bold text-gray-500 block mb-2">Country</label>
                       <div className="w-full bg-[#f8f9fb] border border-gray-200/80 rounded-xl px-4 py-3 text-[13px] font-bold text-gray-900 flex items-center gap-2.5">
                         <img src="https://flagcdn.com/us.svg" alt="USA" className="w-4 rounded-sm" /> United States
                       </div>
                     </div>
                   </div>
                 </div>
              </div>

              {/* Skills */}
              <div className="bg-white p-6 md:p-7 rounded-[1.5rem] border border-white shadow-[0_10px_30px_-10px_rgba(0,0,0,0.05)] flex-[0.6] min-w-[300px]">
                 <h4 className="font-bold text-[15px] text-gray-900 mb-5">Skills</h4>
                 <div className="flex flex-wrap gap-2.5 mb-6">
                   <div className="flex items-center gap-2 bg-[#f8f9fb] border border-gray-200/80 rounded-xl px-3 py-2 text-[12px] font-bold text-gray-700 transition hover:bg-white hover:border-gray-200">
                     <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" className="w-3.5 h-3.5" /> Next.js <span className="text-gray-400 ml-1.5 hover:text-red-500 cursor-pointer text-sm font-black">×</span>
                   </div>
                   <div className="flex items-center gap-2 bg-[#f8f9fb] border border-gray-200/80 rounded-xl px-3 py-2 text-[12px] font-bold text-gray-700 transition hover:bg-white hover:border-gray-200">
                     <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" className="w-3.5 h-3.5" /> TailwindCSS <span className="text-gray-400 ml-1.5 hover:text-red-500 cursor-pointer text-sm font-black">×</span>
                   </div>
                   <div className="flex items-center gap-2 bg-[#f8f9fb] border border-gray-200/80 rounded-xl px-3 py-2 text-[12px] font-bold text-gray-700 transition hover:bg-white hover:border-gray-200">
                     <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" className="w-3.5 h-3.5" /> MongoDB <span className="text-gray-400 ml-1.5 hover:text-red-500 cursor-pointer text-sm font-black">×</span>
                   </div>
                   <div className="flex items-center gap-2 bg-[#f8f9fb] border border-gray-200/80 rounded-xl px-3 py-2 text-[12px] font-bold text-gray-700 transition hover:bg-white hover:border-gray-200">
                     <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angular/angular-original.svg" className="w-3.5 h-3.5" /> Angular <span className="text-gray-400 ml-1.5 hover:text-red-500 cursor-pointer text-sm font-black">×</span>
                   </div>
                   <div className="flex items-center gap-2 bg-[#f8f9fb] border border-gray-200/80 rounded-xl px-3 py-2 text-[12px] font-bold text-gray-700 transition hover:bg-white hover:border-gray-200">
                     <div className="w-3.5 h-3.5 bg-[#8E7CE6] rounded-[3px] text-[7px] text-white flex items-center justify-center font-black">S</div> Strapi <span className="text-gray-400 ml-1.5 hover:text-red-500 cursor-pointer text-sm font-black">×</span>
                   </div>
                 </div>
                 <div>
                   <label className="text-[12px] font-bold text-gray-500 block mb-2">Search skills:</label>
                   <div className="relative">
                     <Search size={14} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" strokeWidth={2.5} />
                     <input type="text" placeholder="e.g. React, Python" className="w-full bg-white border border-gray-200 rounded-xl pl-11 pr-4 py-3 text-[13px] font-bold text-gray-900 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition placeholder:font-medium placeholder:text-gray-400 shadow-sm" />
                   </div>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
