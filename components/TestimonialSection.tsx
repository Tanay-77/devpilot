import React from 'react';
import Image from 'next/image';

export default function TestimonialSection() {
  return (
    <section className="py-24 bg-[#FCFDFD] border-t border-gray-100 flex flex-col items-center">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold tracking-tight mb-2 text-gray-900">Loved by teams worldwide</h2>
        <p className="text-gray-500 mb-12 font-medium">See what our clients have to say about their hiring experience.</p>
        
        <div className="relative bg-white rounded-3xl p-10 md:p-14 border border-gray-200/60 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.03)] text-center">
           <p className="text-[22px] md:text-3xl font-serif italic text-gray-800 leading-snug mb-10">
             "Devpilot transformed how we scale our engineering teams. We hired three exceptional developers in a matter of days, and the AI matching was terrifyingly accurate."
           </p>
           <div className="flex items-center justify-center gap-4">
             <Image src="https://picsum.photos/seed/ceo/100/100" width={48} height={48} className="rounded-full shadow-sm" alt="CEO" />
             <div className="text-left">
               <h4 className="font-bold text-gray-900 text-sm">Sarah Jenkins</h4>
               <p className="text-[12px] text-gray-500 font-medium">CTO @ TechFlow</p>
             </div>
           </div>
        </div>
      </div>
    </section>
  );
}
