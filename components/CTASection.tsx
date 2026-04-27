import React from 'react';

export default function CTASection() {
  return (
    <section className="py-24 px-6 bg-white flex justify-center border-b border-gray-50">
      <div className="max-w-5xl w-full flex flex-col md:flex-row items-center md:items-start justify-between gap-10">
        <div className="flex-1 max-w-lg text-center md:text-left">
          <h2 className="text-4xl md:text-[2.75rem] font-bold tracking-tight text-gray-900 leading-[1.1] mb-5">
            It's time for you try <br /> Devpilot
          </h2>
          <p className="text-gray-500 font-medium text-[15px] leading-relaxed max-w-sm mx-auto md:mx-0">
            Helping developers and companies connect more efficiently without outdated resumes
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 shrink-0 mt-4 md:mt-0">
          <button className="bg-gradient-to-b from-[#2a2a2c] to-[#111113] hover:from-[#111113] hover:to-black text-gray-100 font-semibold px-8 py-3.5 rounded-full shadow-[0_10px_30px_-10px_rgba(0,0,0,0.6)] transition-all hover:scale-[1.03]">Start Hiring</button>
          <button className="bg-white border border-gray-200 hover:bg-gray-50 text-gray-900 font-semibold px-8 py-3.5 rounded-full shadow-sm transition-all hover:scale-[1.03]">Talk to us</button>
        </div>
      </div>
    </section>
  );
}
