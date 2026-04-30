"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const testimonials = [
  {
    quote: "Finally, a way to find devs that can actually, you know, code. Résumés are so old-school. Show me the skills!",
    author: "Huzaifa Shoukat",
    role: "CEO at Accento AI",
    image: "https://randomuser.me/api/portraits/men/22.jpg"
  },
  {
    quote: "Devpilot is a fantastic innovation in the hiring space. It gives us the flexibility to find the right talent quickly and easily.",
    author: "Anna Ho",
    role: "CEO at Eolink",
    image: "https://randomuser.me/api/portraits/women/24.jpg"
  },
  {
    quote: "Devpilot transformed how we scale our engineering teams.It gives us the flexibility to find the right talent",
    author: "Sarah Jenkins",
    role: "CTO @ TechFlow",
    image: "https://randomuser.me/api/portraits/women/12.jpg"
  },
  {
    quote: "It's surely a killing tool for developers to save time and focus on doing their actual dev work instead of endless interviews.",
    author: "David Smith",
    role: "Lead Engineer @ Alipay",
    image: "https://randomuser.me/api/portraits/men/15.jpg"
  }
];

export default function TestimonialSection() {
  return (
    <section id="testimonials" className="py-24 bg-[#FCFDFD] border-t border-gray-100 flex flex-col items-center overflow-hidden">
      <div className="max-w-3xl mx-auto px-6 text-center mb-16">
        <h2 className="text-4xl font-bold tracking-tight mb-3 text-gray-900">Loved by teams <span className="font-serif italic font-medium tracking-normal text-gray-800">Worldwide</span></h2>
        <p className="text-gray-500 font-medium text-lg">See what our clients have to say about their hiring experience.</p>
      </div>

      <div className="relative w-full overflow-hidden flex pb-10">
        {/* Gradient fade on left and right for smooth entry/exit */}
        <div className="absolute left-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-r from-[#FCFDFD] to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-l from-[#FCFDFD] to-transparent z-10 pointer-events-none"></div>

        <motion.div
          className="flex gap-6 w-max px-3"
          animate={{ x: [0, "-50%"] }}
          transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
        >
          {[...testimonials, ...testimonials].map((t, i) => {
            const bgGradients = [
              "bg-gradient-to-br from-[#e8eeff] to-[#f2f0ff]",
              "bg-gradient-to-br from-[#ebebff] to-[#e8f4ff]",
              "bg-gradient-to-br from-[#f0efff] to-[#eef7ff]",
              "bg-gradient-to-br from-[#e8eeff] to-[#f2f0ff]"
            ];
            const currentBg = bgGradients[i % bgGradients.length];

            return (
              <div key={i} className="w-[340px] md:w-[420px] h-full shrink-0 flex flex-col whitespace-normal bg-white rounded-[2.5rem] p-3 md:p-4 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.05)] border border-gray-100/50">
                {/* Inner Text Bubble */}
                <div className={`${currentBg} rounded-[2rem] p-6 md:p-8 shadow-[0_15px_30px_-10px_rgba(0,0,0,0.08)] relative z-10 border border-white/50 flex-1 flex flex-col justify-center`}>
                  <p className="text-[16px] md:text-[18px] text-[#1e293b] leading-[1.6] font-medium">
                    {t.quote}
                  </p>
                </div>
                {/* Bottom Author Section */}
                <div className="px-5 md:px-6 pb-3 pt-6 flex items-center gap-4">
                  <Image src={t.image} width={46} height={46} className="rounded-full shadow-sm" alt={t.author} />
                  <div>
                    <h4 className="font-bold text-gray-900 text-[15px]">{t.author}</h4>
                    <p className="text-[13px] text-gray-500 font-medium">{t.role}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </motion.div>
      </div>
    </section>
  );
}
