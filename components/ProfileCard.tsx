"use client";

import React from 'react';
import { motion } from 'motion/react';
import Image from 'next/image';
import { Plus, Send } from 'lucide-react';

export interface Skill {
  name: string;
  icon: React.ReactNode;
}

export interface ProfileCardProps {
  name: string;
  role: string;
  location: string;
  flag: React.ReactNode;
  rate: string;
  match: number;
  skills: Skill[];
  avatarUrl: string;
  className?: string;
  delay?: number;
  initialY?: number;
}

export default function ProfileCard({ name, role, location, flag, rate, match, skills, avatarUrl, className = '', delay = 0, initialY = 40 }: ProfileCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: initialY }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`absolute bg-white/95 backdrop-blur-xl rounded-[1.3rem] border border-white p-5 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.08)] flex flex-col gap-4 w-[330px] z-10 ${className}`}
    >
      <div className="flex justify-between items-center text-xs text-gray-500 font-medium">
        <div className="flex items-center gap-1.5">
          <span className="flex items-center justify-center w-5 h-5 rounded-sm overflow-hidden">{flag}</span> {location}
        </div>
        <div className="flex items-center gap-1.5 bg-gray-50 border border-gray-100 px-3 py-1.5 rounded-md text-[10px] tracking-wide text-gray-600">
           {rate}
        </div>
      </div>

      <div className="flex justify-between items-start">
        <div className="mt-1">
          <h3 className="font-semibold text-lg text-gray-900 tracking-tight leading-tight">{name}</h3>
          <p className="text-[11px] text-gray-500 font-medium mt-0.5">{role}</p>
        </div>
        <div className="w-11 h-11 relative rounded-full overflow-hidden border border-gray-100 shadow-sm">
          <Image src={avatarUrl} alt={name} fill className="object-cover" />
        </div>
      </div>

      <div className="mt-1">
         <div className="flex justify-between text-[11px] font-semibold mb-2 tracking-wide">
           <span className="text-gray-400 uppercase">Matches</span>
           <span className="text-blue-500">{match}%</span>
         </div>
         <div className="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
           <motion.div 
              initial={{ width: 0 }} 
              animate={{ width: `${match}%` }} 
              transition={{ delay: delay + 0.5, duration: 1, ease: 'easeOut' }} 
              className="h-full bg-gradient-to-r from-[#4ad7f0] to-[#5a6cf3] rounded-full" 
            />
         </div>
      </div>

      <div className="mt-2">
        <span className="text-[10px] font-semibold text-gray-400 uppercase tracking-widest block mb-3">Programming Skills</span>
        <div className="flex flex-col gap-2 relative">
          {skills.map((skill, i) => (
            <div key={i} className="flex items-center gap-3 bg-[#f8f9fb] border border-gray-100/80 px-3 py-2.5 rounded-[10px] text-[13px] font-semibold text-gray-700">
              <span className="text-gray-500">{skill.icon}</span> {skill.name}
            </div>
          ))}
        </div>
      </div>

      <div className="flex gap-2 mt-2">
        <button className="flex-[0.4] border border-gray-200 text-gray-700 font-semibold py-2.5 rounded-xl flex items-center justify-center gap-1.5 hover:bg-gray-50 transition text-xs">
          <Plus size={14} /> Add to project
        </button>
        <button className="flex-[0.6] bg-[#111113] text-white font-semibold py-2.5 rounded-xl flex items-center justify-center gap-1.5 hover:bg-black transition shadow-lg shadow-gray-900/10 text-xs">
          <Send size={13} className="mr-0.5" /> Get in touch
        </button>
      </div>
    </motion.div>
  );
}
