import React from 'react';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="footer bg-white pt-20 pb-8 px-6 flex flex-col items-center">
      <div className="max-w-5xl w-full flex flex-col md:flex-row gap-16 justify-between mb-20 border-b border-gray-100 pb-16">
        <div className="max-w-[280px]">
          <div className="mb-6">
            <Image src="/logo.png" alt="Devpilot Logo" width={120} height={36} className="h-8 w-auto object-contain" />
          </div>
          <h4 className="font-bold text-gray-900 mb-2">Start your 7-day free trial</h4>
          <p className="text-xs text-gray-500 leading-relaxed font-medium">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vehicula condimentum.
          </p>
        </div>
        
        <div className="grid grid-cols-2 gap-12 md:gap-24">
          <div className="flex flex-col gap-4">
            <h5 className="font-bold text-xs text-gray-900 uppercase tracking-wider mb-2">Sections</h5>
            <a href="#" className="text-xs text-gray-500 hover:text-gray-900 font-semibold transition-colors">Process</a>
            <a href="#" className="text-xs text-gray-500 hover:text-gray-900 font-semibold transition-colors">Smart Recruiting</a>
            <a href="#" className="text-xs text-gray-500 hover:text-gray-900 font-semibold transition-colors">Benefits</a>
            <a href="#" className="text-xs text-gray-500 hover:text-gray-900 font-semibold transition-colors">Pricing</a>
            <a href="#" className="text-xs text-gray-500 hover:text-gray-900 font-semibold transition-colors">Contact</a>
          </div>
          <div className="flex flex-col gap-4">
            <h5 className="font-bold text-xs text-gray-900 uppercase tracking-wider mb-2">Solutions</h5>
            <a href="#" className="text-xs text-gray-500 hover:text-gray-900 font-semibold transition-colors">Login</a>
            <a href="#" className="text-xs text-gray-500 hover:text-gray-900 font-semibold transition-colors">Signup as a developer</a>
            <a href="#" className="text-xs text-gray-500 hover:text-gray-900 font-semibold transition-colors">Signup as a company</a>
          </div>
        </div>
      </div>
      
      <div className="max-w-5xl w-full flex flex-col md:flex-row justify-between items-center gap-6">
        <span className="text-[11px] font-semibold tracking-wide text-gray-500">©{new Date().getFullYear()} Devpilot All Rights Reserved.</span>
        <div className="flex gap-6">
          <a href="#" className="text-[11px] font-semibold tracking-wide text-gray-500 hover:text-gray-900 transition-colors">Privacy Policy</a>
          <a href="#" className="text-[11px] font-semibold tracking-wide text-gray-500 hover:text-gray-900 transition-colors">Terms of Service</a>
          <a href="#" className="text-[11px] font-semibold tracking-wide text-gray-500 hover:text-gray-900 transition-colors">Cookies Settings</a>
        </div>
      </div>
    </footer>
  );
}
