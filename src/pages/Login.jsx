import React from 'react';
import { Link } from "react-router-dom";

// Import Icons
import areeb from '../assets/icons/areeb-logo.svg'; 
import GithubIcon from '../assets/icons/GithubIcon.svg';
// Google Icon Import here...
import GoogleIcon from '../assets/icons/google.svg';
// Neon Component (نفس اللي استخدمناه)
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

export default function Login() {
  return (
    <div className="min-h-screen w-full flex bg-[#0A0F2B] font-['Plus_Jakarta_Sans'] overflow-hidden">
      
      {/* ================= Left Section (Marketing & Design) ================= */}
      <div className="hidden lg:flex w-[55%] relative flex-col px-16 py-12 xl:px-24 xl:py-16">
        
        {/* --- Background Effects --- */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
             {/* Gradient Overlay  */}
            <div className="absolute inset-0 bg-[#0A0F2B] opacity-20 z-10" />
            {/* Neon Blobs */}
            <NeonEffect className="w-[600px] h-[600px] -right-[200px] -top-[200px] opacity-90" variant="variant4" />
            <NeonEffect className="w-[500px] h-[500px] left-[-100px] top-[30%] opacity-80" variant="default" />
            <NeonEffect className="w-[400px] h-[400px] right-[5%] bottom-[-100px] opacity-60" variant="variant2" />
        </div>

        {/* --- Content --- */}
        <div className="relative z-10 h-full flex flex-col">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 w-fit mb-auto">
                <Logo className="w-8 h-8" />
                <span className="text-2xl font-semibold text-[#EAEDFA] font-['Space_Grotesk'] tracking-wide">
                    AREEB
                </span>
            </Link>

            {/* Big Welcome Text (Centering it vertically like the design feel) */}
            <div className="mb-20">
                <h1 className="text-[56px] font-bold font-['Space_Grotesk'] leading-[1.2] text-[#EAEDFA]">
                    Welcome back to take<br />
                    your track to the next<br />
                    level? Join {" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7033FF] to-[#B899FF]"> AREEB </span> <br />
                    today.
                </h1>
            </div>
        </div>
      </div>

      {/* ================= Right Section (Login Form) ================= */}
      <div className="w-full lg:w-[45%] flex items-center justify-center p-6 bg-[#0A0F2B] relative z-20 shadow-[-20px_0_40px_rgba(0,0,0,0.2)]">
        
        {/* Mobile Background Effect (يظهر بس في الموبايل) */}
        <NeonEffect className="lg:hidden w-[300px] h-[300px] top-0 right-0 opacity-50" variant="variant2" />

        <div className="w-full max-w-[480px] flex flex-col gap-8">
            
            <div className="flex flex-col gap-2">
                <h2 className="text-[49px] font-bold font-['Space_Grotesk'] text-white">Sign in</h2>
                {/* ممكن تضيف سطر هنا لو حابب زي "Don't have an account?" */}
            </div>

            <form className="flex flex-col gap-6">
                {/* Email Input */}
                <div className="flex flex-col gap-2">
                    <label className="text-sm text-gray-400 font-medium">Email</label>
                    <input 
                        type="email" 
                        placeholder="Enter your email" 
                        className="w-full h-[56px] px-4 bg-transparent border border-[#EAEDFA]/20 rounded-xl outline-none focus:border-[#B899FF] focus:bg-white/5 transition-all text-white placeholder-gray-600"
                    />
                </div>

                {/* Password Input */}
                <div className="flex flex-col gap-2">
                    <label className="text-sm text-gray-400 font-medium">Password</label>
                    <input 
                        type="password" 
                        placeholder="Enter your password"
                        className="w-full h-[56px] px-4 bg-transparent border border-[#EAEDFA]/20 rounded-xl outline-none focus:border-[#B899FF] focus:bg-white/5 transition-all text-white placeholder-gray-600"
                    />
                </div>

                {/* Sign in Button */}
                {/* <button className="w-full h-[56px] mt-2 rounded-full bg-gradient-to-r from-[#7033FF] to-[#B899FF] text-[#EAEDFA] text-lg font-bold font-['Space_Grotesk'] hover:opacity-90 transition-opacity shadow-[0_4px_20px_rgba(112,51,255,0.4)]">
                  Sign in
                </button> */}
                {/* Sign in Button with Link */}
                <Link to="/dashboard">
                    <button className="w-full h-[56px] mt-2 rounded-full bg-gradient-to-r from-[#7033FF] to-[#B899FF] text-[#EAEDFA] text-lg font-bold font-['Space_Grotesk'] hover:opacity-90 transition-opacity shadow-[0_4px_20px_rgba(112,51,255,0.4)]">
                        Sign in
                    </button>
                </Link>
            </form>

            {/* Divider */}
            <div className="relative flex items-center justify-center">
                <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-gray-700/50"></div></div>
                <div className="relative bg-[#0A0F2B] px-4 text-sm text-gray-500 text-center">Or <br/> Continue with</div>
            </div>

            {/* Social Buttons */}
            <div className="flex gap-4">
                <button className="flex-1 h-[50px] rounded-full border border-gray-700 flex items-center justify-center gap-3 hover:border-[#B899FF] hover:bg-white/5 transition-all group">
                   <span className="text-gray-300 font-medium group-hover:text-white">Github</span>
                   <img src={GithubIcon} alt="Github" className="w-5 h-5 opacity-80 group-hover:opacity-100" />
                </button>
                
                <button className="flex-1 h-[50px] rounded-full border border-gray-700 flex items-center justify-center gap-3 hover:border-[#B899FF] hover:bg-white/5 transition-all group">
                   <span className="text-gray-300 font-medium group-hover:text-white">Google</span>
                   {/* Replace with actual Google SVG */}
                   <img src={GoogleIcon} alt="Google" className="w-5 h-5 opacity-80 group-hover:opacity-100" />
                </button>
            </div>

            {/* Sign up Link */}
            <p className="text-sm text-gray-400 font-medium text-center">
                Don't have an account? <Link to="/register" className="text-[#B899FF] hover:underline">Sign up</Link>
            </p>

        </div>
      </div>
    </div>
  );
}