import React from 'react';
import { Link } from "react-router-dom";

// Import Icons
import areeb from '../../assets/icons/areeb-logo.svg'; 

// Neon Component (نفس اللي عندك)
const NeonEffect = ({ className, variant = "default" }) => {
  const colors = {
    default: "bg-violet-600/30",
    variant2: "bg-cyan-400/30",
    variant3: "bg-indigo-600/30",
    variant4: "bg-fuchsia-400/30"
  };
  return <div className={`absolute blur-[100px] rounded-full pointer-events-none -z-10 ${colors[variant]} ${className}`} />;
};

function Logo({ className }) {
  return <img src={areeb} alt="Areeb Logo" className={className} />;
}

// Custom Arrow Icon for Selects
const ChevronDown = () => (
  <svg width="12" height="8" viewBox="0 0 12 8" fill="none" stroke="currentColor" className="text-gray-400">
    <path d="M1 1.5L6 6.5L11 1.5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export default function Goals() {
  return (
    <div className="min-h-screen w-full flex bg-[#0A0F2B] font-['Plus_Jakarta_Sans'] overflow-hidden">
      
      {/* ================= Left Section (Design & Steps) ================= */}
      <div className="hidden lg:flex w-[55%] relative flex-col justify-between px-16 py-12 xl:px-24 xl:py-16">
        
        {/* --- Background Effects --- */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
            <div className="absolute inset-0 bg-[#0A0F2B] opacity-20 z-10" />
            <NeonEffect className="w-[600px] h-[600px] -right-[200px] -top-[200px] opacity-90" variant="variant4" />
            <NeonEffect className="w-[500px] h-[500px] left-[-100px] top-[30%] opacity-80" variant="default" />
            <NeonEffect className="w-[400px] h-[400px] right-[5%] bottom-[-100px] opacity-60" variant="variant2" />
        </div>

        {/* --- Content Top: Logo --- */}
        <div className="relative z-10 flex flex-col gap-10">
            <Link to="/" className="flex items-center gap-3 w-fit">
                <Logo className="w-8 h-8" />
                <span className="text-2xl font-semibold text-[#EAEDFA] font-['Space_Grotesk'] tracking-wide">
                    AREEB
                </span>
            </Link>

            {/* Text Area (Same positioning as Register) */}
            <div className="flex flex-row items-end justify-between w-full gap-4 mt-100 mb-8">
              <h1 className="text-[56px] font-bold font-['Space_Grotesk'] leading-[1.1] text-[#EAEDFA]">
                  Get Started <br />
                  with us
              </h1>
              <p className="text-xl font-medium text-[#EAEDFA] max-w-[400px] text-left pb-6">
                   Set your goals & preferences to  <br/> personalize your experience
              </p>
          </div>
        </div>

        {/* --- Content Bottom: Steps Cards --- */}
        <div className="relative z-10 w-full mt-auto mb-10 pt-10">
            <div className="flex gap-3 w-full ">
                
                {/* Step 1: Inactive (Was Active) */}
                <div className="flex-1 min-w-[215px] h-[154px] p-8 rounded-[24px] bg-gradient-to-r from-[#7033FF]/40 to-[#B899FF]/40 border border-[#7033FF]/20 flex flex-col items-start gap-4 text-[#EAEDFA]/70 hover:border-[#B899FF]/50 transition-all">
                    <div className="w-8 h-8 rounded-full border border-[#EAEDFA] flex items-center justify-center text-sm font-medium shrink-0">
                        1
                    </div>
                    <p className="text-xl font-medium leading-tight font-['Space_Grotesk']">
                        Sign up your <br/> account
                    </p>
                </div>

                {/* Step 2: ACTIVE NOW (Bright Gradient) */}
                <div className="flex-1 min-w-[215px] h-[154px] p-8 rounded-[24px] bg-gradient-to-r from-[#7033FF] to-[#B899FF] flex flex-col items-start gap-4 shadow-[0_4px_30px_rgba(112,51,255,0.4)] hover:scale-[1.02] transition-transform border border-[#B899FF]/50">
                    <div className="w-8 h-8 rounded-full border border-white flex items-center justify-center text-sm font-bold text-white shrink-0">
                        2
                    </div>
                    <p className="text-xl font-bold leading-tight text-white font-['Space_Grotesk']">
                        Goal & <br/> preferences
                    </p>
                </div>

                {/* Step 3: Inactive */}
                <div className="flex-1 min-w-[215px] h-[154px] p-8 rounded-[24px] bg-gradient-to-r from-[#7033FF]/40 to-[#B899FF]/40 border border-[#7033FF]/20 flex flex-col items-start gap-4 text-[#EAEDFA]/70 hover:border-[#B899FF]/50 hover:bg-gradient-to-r hover:from-[#7033FF]/30 hover:to-[#B899FF] transition-all">
                    <div className="w-8 h-8 rounded-full border border-[#EAEDFA] flex items-center justify-center text-sm font-medium shrink-0">
                        3
                    </div>
                    <p className="text-xl font-medium leading-tight font-['Space_Grotesk']">
                        Choose your <br/> Track
                    </p>
                </div>

                {/* Step 4: Inactive */}
                <div className="flex-1 min-w-[201px] h-[154px] p-8 rounded-[24px] bg-gradient-to-r from-[#7033FF]/40 to-[#B899FF]/40 border border-[#7033FF]/20 flex flex-col items-start gap-4 text-[#EAEDFA]/70 hover:border-[#B899FF]/50 hover:bg-gradient-to-r hover:from-[#7033FF]/30 hover:to-[#B899FF] transition-all">
                    <div className="w-8 h-8 rounded-full border border-[#EAEDFA] flex items-center justify-center text-sm font-medium shrink-0">
                        4
                    </div>
                    <p className="text-xl font-medium leading-tight font-['Space_Grotesk']">
                        Profile Set
                    </p>
                </div>

            </div>
        </div>
      </div>

      {/* ================= Right Section (Form) ================= */}
      <div className="w-full lg:w-[45%] flex items-center justify-center p-6 bg-[#0A0F2B] relative z-20 shadow-[-20px_0_40px_rgba(0,0,0,0.2)]">
        <div className="w-full max-w-[480px] flex flex-col gap-6">
            
            {/* Title */}
            <h2 className="text-[49px] font-bold font-['Space_Grotesk'] text-white mb-4">Goals & Preferences</h2>

            <form className="flex flex-col gap-6">
                
                {/* 1. Current Goal */}
                <div className="flex flex-col gap-2 relative">
                    <label className="text-sm text-gray-400 font-medium">What's your current goal?</label>
                    <div className="relative">
                        <select className="w-full h-[56px] px-4 bg-transparent border border-[#EAEDFA]/20 rounded-xl outline-none focus:border-[#B899FF] focus:bg-white/5 transition-all text-white appearance-none cursor-pointer">
                            <option className="bg-[#0A0F2B]" value="" disabled selected>Select your goal</option>
                            <option className="bg-[#0A0F2B]">Learn a new skill</option>
                            <option className="bg-[#0A0F2B]">Get an internship</option>
                            <option className="bg-[#0A0F2B]">Find a job</option>
                        </select>
                        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                            <ChevronDown />
                        </div>
                    </div>
                </div>

                {/* 2. Study Time */}
                <div className="flex flex-col gap-2 relative">
                    <label className="text-sm text-gray-400 font-medium">How much time can you study per week?</label>
                    <div className="relative">
                         <select className="w-full h-[56px] px-4 bg-transparent border border-[#EAEDFA]/20 rounded-xl outline-none focus:border-[#B899FF] focus:bg-white/5 transition-all text-white appearance-none cursor-pointer">
                            <option className="bg-[#0A0F2B]" value="" disabled selected>Select hours</option>
                            <option className="bg-[#0A0F2B]">5-10 hours</option>
                            <option className="bg-[#0A0F2B]">10-20 hours</option>
                            <option className="bg-[#0A0F2B]">+20 hours</option>
                        </select>
                        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                            <ChevronDown />
                        </div>
                    </div>
                </div>

                {/* 3. Learning Preference */}
                <div className="flex flex-col gap-2 relative">
                    <label className="text-sm text-gray-400 font-medium">How do you prefer to learn?</label>
                    <div className="relative">
                        <select className="w-full h-[56px] px-4 bg-transparent border border-[#EAEDFA]/20 rounded-xl outline-none focus:border-[#B899FF] focus:bg-white/5 transition-all text-white appearance-none cursor-pointer">
                            <option className="bg-[#0A0F2B]" value="" disabled selected>Select preference</option>
                            <option className="bg-[#0A0F2B]">Videos</option>
                            <option className="bg-[#0A0F2B]">Reading / Articles</option>
                            <option className="bg-[#0A0F2B]">Interactive Projects</option>
                        </select>
                        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                            <ChevronDown />
                        </div>
                    </div>
                </div>

                {/* 4. Reminders */}
                <div className="flex flex-col gap-2 relative">
                    <label className="text-sm text-gray-400 font-medium">How would you like to get reminded and updated?</label>
                    <div className="relative">
                        <select className="w-full h-[56px] px-4 bg-transparent border border-[#EAEDFA]/20 rounded-xl outline-none focus:border-[#B899FF] focus:bg-white/5 transition-all text-white appearance-none cursor-pointer">
                            <option className="bg-[#0A0F2B]" value="" disabled selected>Select option</option>
                            <option className="bg-[#0A0F2B]">Daily</option>
                            <option className="bg-[#0A0F2B]">Weekly</option>
                            <option className="bg-[#0A0F2B]">No reminders</option>
                        </select>
                        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                            <ChevronDown />
                        </div>
                    </div>
                </div>

                {/* Submit Btn */}
                {/* Linked to next page, assumed '/track' */}
                <Link to="/track"> 
                    <button className="w-full h-[56px] mt-6 rounded-full bg-gradient-to-r from-[#7033FF] to-[#B899FF] text-[#EAEDFA] text-lg font-bold font-['Space_Grotesk'] hover:opacity-90 transition-opacity shadow-[0_4px_20px_rgba(112,51,255,0.4)]">
                        Save & continue
                    </button>
                </Link>
            </form>
            
            {/* No Footer Links in this step based on screenshot */}

        </div>
      </div>
    </div>
  );
}