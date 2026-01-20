import { Link } from "react-router-dom";

// Import Icons
import areeb from '../assets/icons/areeb-logo.svg'; 
import GithubIcon from '../assets/icons/GithubIcon.svg';
// Google Icon Import here...
import googleIcon from '../assets/icons/google.svg';

// Neon Component (نفس اللي في Landing بالظبط)
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

export default function Register() {
  return (
    <div className="min-h-screen w-full flex bg-[#0A0F2B] font-['Plus_Jakarta_Sans'] overflow-hidden">
      
      {/* ================= Left Section (Design & Steps) ================= */}
      <div className="hidden lg:flex w-[55%] relative flex-col justify-between px-16 py-12 xl:px-24 xl:py-16">
        
        {/* --- Background Effects (زي الـ Landing بالظبط) --- */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
             {/* Gradient Overlay خفيف عشان يوحد اللون */}
            <div className="absolute inset-0 bg-[#0A0F2B] opacity-20 z-10" />
            {/* Neon Blobs */}
            <NeonEffect className="w-[600px] h-[600px] -right-[200px] -top-[200px] opacity-90" variant="variant4" />
            <NeonEffect className="w-[500px] h-[500px] left-[-100px] top-[30%] opacity-80" variant="default" />
            <NeonEffect className="w-[400px] h-[400px] right-[5%] bottom-[-100px] opacity-60" variant="variant2" />
        </div>

        {/* --- Content Top: Logo & Headings --- */}
        <div className="relative z-10 flex flex-col gap-10">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 w-fit">
                <Logo className="w-8 h-8" />
                <span className="text-2xl font-semibold text-[#EAEDFA] font-['Space_Grotesk'] tracking-wide">
                    AREEB
                </span>
            </Link>

            {/* Text Area */}
          <div className="flex flex-row items-end justify-between w-full gap-4 mt-100 mb-8">
              <h1 className="text-[56px] font-bold font-['Space_Grotesk'] leading-[1.1] text-[#EAEDFA]">
                  Get Started <br />
                  with us
              </h1>
              <p className="text-xl font-medium text-[#EAEDFA] max-w-[400px] text-left pb-6">
                      Complete These easy steps to <br/> register your account
              </p>
          </div>
        </div>

        {/* --- Content Bottom: Steps Cards --- */}
        <div className="relative z-10 w-full mt-auto mb-10 pt-10">
            <div className="flex gap-3 w-full ">
                
                {/* Step 1: Active */}
                <div className="flex-1 min-w-[215px] h-[154px] p-8 rounded-[24px] bg-gradient-to-r from-[#7033FF] to-[#B899FF] flex flex-col items-start gap-4 shadow-[0_4px_30px_rgba(112,51,255,0.4)] hover:scale-[1.02] transition-transform border border-[#B899FF]/50">
                    <div className="w-8 h-8 rounded-full border border-white flex items-center justify-center text-sm font-bold text-white shrink-0">
                        1
                    </div>
                    <p className="text-xl font-bold leading-tight text-white font-['Space_Grotesk']">
                        Sign up your <br/> account
                    </p>
                </div>

                {/* Step 2: Inactive (Updated Style & Dimensions) */}
                <div className="flex-1 min-w-[215px] h-[154px] p-8 rounded-[24px] bg-gradient-to-r from-[#7033FF]/40 to-[#B899FF]/40 border border-[#7033FF]/20 flex flex-col items-start gap-4 text-[#EAEDFA]/70 hover:border-[#B899FF]/50 hover:bg-gradient-to-r hover:from-[#7033FF]/30 hover:to-[#B899FF] transition-all">
                    <div className="w-8 h-8 rounded-full border border-[#EAEDFA] flex items-center justify-center text-sm font-medium shrink-0">
                        2
                    </div>
                    <p className="text-xl font-medium leading-tight font-['Space_Grotesk']">
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
            
            <h2 className="text-[49px] font-bold font-['Space_Grotesk'] text-white mb-2">Sign up Account</h2>

            <form className="flex flex-col gap-5">
                {/* Email */}
                <div className="flex flex-col gap-2">
                    <label className="text-sm text-gray-400 font-medium">Email</label>
                    <input type="email" placeholder="Enter your email " className="w-full h-[56px] px-4 bg-transparent border border-[#EAEDFA]/20 rounded-xl outline-none focus:border-[#B899FF] focus:bg-white/5 transition-all text-white placeholder-gray-600" />
                </div>

                {/* Password */}
                <div className="flex flex-col gap-2">
                    <label className="text-sm text-gray-400 font-medium">Password</label>
                    <input type="password" placeholder="Enter your password " className="w-full h-[56px] px-4 bg-transparent border border-[#EAEDFA]/20 rounded-xl outline-none focus:border-[#B899FF] focus:bg-white/5 transition-all text-white placeholder-gray-600" />
                </div>

                {/* Confirm Password */}
                <div className="flex flex-col gap-2">
                    <label className="text-sm text-gray-400 font-medium">Confirm Password</label>
                    <input type="password" placeholder="Confirm your password " className="w-full h-[56px] px-4 bg-transparent border border-[#EAEDFA]/20 rounded-xl outline-none focus:border-[#B899FF] focus:bg-white/5 transition-all text-white placeholder-gray-600" />
                </div>

                {/* Faculty & Major Row */}
                <div className="flex gap-4">
                    <div className="flex-1 flex flex-col gap-2 relative">
                        <label className="text-sm text-gray-400 font-medium">Faculty</label>
                        <div className="relative">
                            <select className="w-full h-[56px] px-4 bg-transparent border border-[#EAEDFA]/20 rounded-xl outline-none focus:border-[#B899FF] focus:bg-white/5 transition-all text-white appearance-none cursor-pointer">
                                <option className="bg-[#0A0F2B]" value="" disabled selected>Select option</option>
                                <option className="bg-[#0A0F2B]">Engineering</option>
                                <option className="bg-[#0A0F2B]">Computers and Information</option>
                                <option className="bg-[#0A0F2B]">Other</option>
                            </select>
                            <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                                <svg width="12" height="8" viewBox="0 0 12 8" fill="none" stroke="currentColor"><path d="M1 1.5L6 6.5L11 1.5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                            </div>
                        </div>
                    </div>

                    <div className="flex-1 flex flex-col gap-2 relative">
                        <label className="text-sm text-gray-400 font-medium">Major</label>
                        <div className="relative">
                            <select className="w-full h-[56px] px-4 bg-transparent border border-[#EAEDFA]/20 rounded-xl outline-none focus:border-[#B899FF] focus:bg-white/5 transition-all text-white appearance-none cursor-pointer">
                                <option className="bg-[#0A0F2B]" value="" disabled selected>Select option</option>
                                <option className="bg-[#0A0F2B]">CE</option>
                                <option className="bg-[#0A0F2B]">CS</option>
                                <option className="bg-[#0A0F2B]">IS</option>
                                <option className="bg-[#0A0F2B]">IT</option>
                                <option className="bg-[#0A0F2B]">Other</option>
                            </select>
                            <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                                <svg width="12" height="8" viewBox="0 0 12 8" fill="none" stroke="currentColor"><path d="M1 1.5L6 6.5L11 1.5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Submit Btn */}
                {/* <button className="w-full h-[56px] mt-6 rounded-full bg-gradient-to-r from-[#7033FF] to-[#B899FF] text-[#EAEDFA] text-lg font-bold font-['Space_Grotesk'] hover:opacity-90 transition-opacity shadow-[0_4px_20px_rgba(112,51,255,0.4)]">
                  Sign up
                </button> */}
                {/* Submit Btn with Link */}
                <Link to="/goals">
                    <button className="w-full h-[56px] mt-6 rounded-full bg-gradient-to-r from-[#7033FF] to-[#B899FF] text-[#EAEDFA] text-lg font-bold font-['Space_Grotesk'] hover:opacity-90 transition-opacity shadow-[0_4px_20px_rgba(112,51,255,0.4)]">
                        Sign up
                    </button>
                </Link>
            </form>

            <div className="relative flex items-center justify-center my-2">
                <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-gray-700/50"></div></div>
                <div className="relative bg-[#0A0F2B] px-4 text-sm text-gray-500 text-center">Or <br/> Continue with</div>
            </div>

            <div className="flex gap-4">
                <button className="flex-1 h-[50px] rounded-full border border-gray-700 flex items-center justify-center gap-3 hover:border-[#B899FF] hover:bg-white/5 transition-all group">
                   <span className="text-gray-300 font-medium group-hover:text-white">Github</span>
                   <img src={GithubIcon} alt="Github" className="w-5 h-5 opacity-80 group-hover:opacity-100" />
                </button>
                <button className="flex-1 h-[50px] rounded-full border border-gray-700 flex items-center justify-center gap-3 hover:border-[#B899FF] hover:bg-white/5 transition-all group">
                   <span className="text-gray-300 font-medium group-hover:text-white">Google</span>
                   {/* Google Icon Here */}
                   {/* <div className="w-5 h-5 bg-white rounded-full flex items-center justify-center text-black font-bold text-xs">G</div> */}
                    <img src={googleIcon} alt="Google" className="w-5 h-5 opacity-80 group-hover:opacity-100" />
                </button>
            </div>

            <div className="text-sm text-gray-400 font-medium text-center">
                Already have an account? <Link to="/login" className="text-[#B899FF] hover:underline">Sign in</Link>
            </div>

        </div>
      </div>
    </div>
  );
}