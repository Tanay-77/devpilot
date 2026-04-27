"use client";

import React from 'react';
import { motion } from 'motion/react';
import ProfileCard from './ProfileCard';

export default function FloatingCards() {
  return (
    <section className="relative w-full max-w-5xl mx-auto h-[550px] mt-10 flex justify-center perspective-1000 z-10 px-4 pointer-events-none">
      {/* Abstract Floating Icons */}
      <motion.div
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
        className="hidden lg:flex absolute left-[-4%] top-[40%] bg-[#eef0f3] border-[4px] border-white rounded-[2rem] w-[88px] h-[88px] shadow-[0_15px_35px_-5px_rgba(0,0,0,0.06)] items-center justify-center -rotate-12 z-0"
      >
        <span className="text-[#8e95a3] font-mono font-bold text-2xl tracking-tighter opacity-80">&lt;/&gt;</span>
      </motion.div>

      <motion.div
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        className="hidden lg:flex absolute right-[-4%] top-[60%] bg-[#eef0f3] border-[4px] border-white rounded-[2rem] w-[88px] h-[88px] shadow-[0_15px_35px_-5px_rgba(0,0,0,0.06)] items-center justify-center rotate-[15deg] z-0"
      >
        <span className="text-[#8e95a3] font-bold text-[17px] tracking-wider opacity-80">DEV</span>
      </motion.div>

      {/* Cards Container */}
      <div className="relative w-[340px] h-full pointer-events-auto">
        {/* Left Card - Arieton */}
        <ProfileCard
          name="Arieton Omerek"
          role="Fullstack-Developer from Parana"
          location="Brazil"
          flag={<img src="https://flagcdn.com/br.svg" alt="Brazil" className="w-full h-auto object-cover" />}
          rate="Hourly rate on request"
          match={85}
          skills={[
            { name: 'React', icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" alt="React" className="w-4 h-4 object-contain" /> },
            { name: 'Next.js', icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" alt="Next.js" className="w-4 h-4 object-contain" /> },
            { name: 'TailwindCSS', icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" alt="TailwindCSS" className="w-4 h-4 object-contain" /> }
          ]}
          avatarUrl="https://randomuser.me/api/portraits/men/32.jpg"
          delay={0.1}
          className="scale-[0.88] origin-bottom-right -rotate-[12deg] -left-[250px] top-[60px] z-0 hover:z-30 hover:scale-[1] hover:rotate-0 transition-all duration-500 hover:!shadow-[0_40px_80px_-20px_rgba(0,0,0,0.15)] cursor-pointer"
        />

        {/* Right Card - Hannah */}
        <ProfileCard
          name="Hannah Smith"
          role="Frontend-Developer from New York"
          location="United States"
          flag={<img src="https://flagcdn.com/us.svg" alt="USA" className="w-full h-auto object-cover" />}
          rate="Hourly rate on request"
          match={82}
          skills={[
            { name: 'Angular', icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angular/angular-original.svg" alt="Angular" className="w-4 h-4 object-contain" /> },
            { name: 'NestJS', icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nestjs/nestjs-original.svg" alt="NestJS" className="w-4 h-4 object-contain" /> },
            { name: 'TypeScript', icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" alt="TypeScript" className="w-4 h-4 object-contain" /> }
          ]}
          avatarUrl="https://randomuser.me/api/portraits/women/44.jpg"
          delay={0.3}
          className="scale-[0.88] origin-bottom-left rotate-[12deg] -right-[250px] top-[60px] z-0 hover:z-30 hover:scale-[1] hover:rotate-0 transition-all duration-500 hover:!shadow-[0_40px_80px_-20px_rgba(0,0,0,0.15)] cursor-pointer"
        />

        {/* Center Card - Chad */}
        <ProfileCard
          name="Chad Manker"
          role="Fullstack-Developer from Johannesburg"
          location="South Africa"
          flag={<img src="https://flagcdn.com/za.svg" alt="South Africa" className="w-full h-auto object-cover" />}
          rate="Hourly rate on request"
          match={100}
          skills={[
            { name: 'Vue.js', icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg" alt="Vue.js" className="w-4 h-4 object-contain" /> },
            { name: 'Nuxt.js', icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nuxtjs/nuxtjs-original.svg" alt="Nuxt.js" className="w-4 h-4 object-contain" /> },
            { name: 'JavaScript', icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" alt="JavaScript" className="w-4 h-4 object-contain" /> }
          ]}
          avatarUrl="https://randomuser.me/api/portraits/men/46.jpg"
          delay={0.2}
          initialY={60}
          className="z-20 top-0 left-0 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.15)] hover:scale-[1.05] transition-all duration-500 cursor-pointer"
        />
      </div>
    </section>
  );
}
