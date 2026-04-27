import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import FloatingCards from '@/components/FloatingCards';
import DataDrivenSection from '@/components/DataDrivenSection';
import FeaturesSection from '@/components/FeaturesSection';
import TestimonialSection from '@/components/TestimonialSection';
import PricingSection from '@/components/PricingSection';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-slate-900 overflow-x-hidden selection:bg-blue-500/20">
      
      {/* Hero Wrapper (Restricted to just Hero + Cards) */}
      <div className="bg-white p-3 md:p-5">
        <div className="bg-[#F0F2F5] rounded-[2.5rem] md:rounded-[3rem] relative overflow-hidden pb-10">
          
          {/* Background Radial Glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[1000px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white via-white/40 to-transparent pointer-events-none z-0" />

          <Navbar />
          <HeroSection />
          <FloatingCards />
          
        </div>
      </div>

      <main>
        <DataDrivenSection />
        <FeaturesSection />
        <TestimonialSection />
        <PricingSection />
        <CTASection />
      </main>

      <Footer />
    </div>
  );
}
