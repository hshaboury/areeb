import React, { useState } from 'react';
import { Link } from "react-router-dom";

// Import Icons
import areeb from '../assets/icons/areeb-logo.svg'; 

// --- Neon Component ---
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

// --- Icons ---
const ChevronDown = () => (
  <svg width="12" height="8" viewBox="0 0 12 8" fill="none" stroke="currentColor" className="text-gray-400">
    <path d="M1 1.5L6 6.5L11 1.5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

// Level Icons
const BeginnerIcon = () => (<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>);
const IntermediateIcon = () => (<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 20h9M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>);
const ProIcon = () => (<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>);

// Answer Icons (Yes/Maybe/No)
const CheckCircle = () => (<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="M22 4L12 14.01l-3-3"/></svg>);
const QuestionCircle = () => (<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><path d="M12 17h.01"/></svg>);
const XCircle = () => (<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><path d="M15 9l-6 6"/><path d="M9 9l6 6"/></svg>);

const ArrowRight = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M5 12h14" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

// --- Option Button ---
const OptionButton = ({ label, icon: Icon, isSelected, onClick }) => {
    const getActiveStyle = () => {
        // Levels Logic
        if (label === "Beginner") return "bg-[#7033FF] border-[#7033FF] shadow-[0_0_15px_rgba(112,51,255,0.4)]";
        if (label === "Intermediate") return "bg-[#D1D5DB] border-[#D1D5DB] text-[#0A0F2B] shadow-[0_0_15px_rgba(209,213,219,0.4)]";
        if (label === "Professional") return "bg-[#1E3A8A] border-[#1E3A8A] shadow-[0_0_15px_rgba(30,58,138,0.4)]";
        
        // Answers Logic (Yes/Maybe/No)
        if (label === "Yes") return "bg-[#7033FF] border-[#7033FF] shadow-[0_0_15px_rgba(112,51,255,0.4)]";
        if (label === "Maybe") return "bg-[#D1D5DB] border-[#D1D5DB] text-[#0A0F2B] shadow-[0_0_15px_rgba(209,213,219,0.4)]";
        if (label === "No") return "bg-[#1E3A8A] border-[#1E3A8A] shadow-[0_0_15px_rgba(30,58,138,0.4)]";
        
        return "bg-[#7033FF] border-[#7033FF]";
    };

    return (
        <button 
            type="button"
            onClick={onClick}
            className={`flex-1 h-[45px] rounded-full flex items-center justify-center gap-2 border transition-all duration-200 px-2
                ${isSelected 
                    ? `${getActiveStyle()} ${['Intermediate', 'Maybe'].includes(label) ? 'text-[#0A0F2B]' : 'text-white'}` 
                    : 'bg-transparent border-[#EAEDFA]/20 text-gray-400 hover:border-[#EAEDFA]/50 hover:bg-white/5'
                }`}
        >
            <span className="text-[13px] font-medium whitespace-nowrap">{label}</span>
            <div className="scale-75 hidden sm:block"><Icon /></div>
        </button>
    );
};

// --- Skill Row Component ---
// (Modified to accept custom options for flexibility)
const SkillRow = ({ label, options, selectedOption, onSelect }) => (
    <div className="flex flex-col gap-3 fade-in"> 
        <label className="text-sm text-gray-400 font-medium pl-1">{label}</label>
        <div className="flex gap-3">
            {options.map((opt, idx) => (
                <OptionButton 
                    key={idx}
                    label={opt.label} 
                    icon={opt.icon} 
                    isSelected={selectedOption === opt.label} 
                    onClick={() => onSelect(opt.label)} 
                />
            ))}
        </div>
    </div>
);

// --- DATA STRUCTURE (The Core Logic) ---
const tracksData = {
    "UI/UX Design": {
        "Beginner": [
            "Understanding of UI vs UX",
            "Figma Interface Basics",
            "Color Theory Basics",
            "Typography Fundamentals"
        ],
        "Intermediate": [
            "Auto Layout & Components",
            "User Journey Mapping",
            "Wireframing Proficiency",
            "Responsive Design Principles"
        ],
        "Professional": [
            "Design Systems Management",
            "Advanced Prototyping",
            "Usability Testing Leadership",
            "Stakeholder Management"
        ]
    },
    "Front-End Development": {
        "Beginner": [
            "HTML5 Structure",
            "CSS Box Model",
            "JavaScript Syntax",
            "Git Basics"
        ],
        "Intermediate": [
            "React / Vue / Angular Hooks",
            "API Integration (Fetch/Axios)",
            "CSS Frameworks (Tailwind)",
            "State Management"
        ],
        "Professional": [
            "Performance Optimization",
            "Next.js / SSR",
            "Unit Testing (Jest/Cypress)",
            "System Architecture"
        ]
    },
    // Add Back-End similiar structure...
    "Back-End Development": {
        "Beginner": ["Basic Python/Node", "Database Concepts", "HTTP Methods"],
        "Intermediate": ["RESTful APIs", "SQL Joins", "Authentication (JWT)"],
        "Professional": ["Microservices", "System Scaling", "Cloud Infrastructure"]
    }
};

const LEVEL_OPTIONS = [
    { label: "Beginner", icon: BeginnerIcon },
    { label: "Intermediate", icon: IntermediateIcon },
    { label: "Professional", icon: ProIcon }
];

const ANSWER_OPTIONS = [
    { label: "Yes", icon: CheckCircle },
    { label: "Maybe", icon: QuestionCircle },
    { label: "No", icon: XCircle }
];

export default function Track() {
  const [selectedTrack, setSelectedTrack] = useState("");
  const [selectedLevel, setSelectedLevel] = useState(null); // New state for Level
  const [skills, setSkills] = useState({});

  const handleTrackChange = (e) => {
      const newTrack = e.target.value;
      setSelectedTrack(newTrack);
      setSelectedLevel(null); // Reset level when track changes
      setSkills({}); // Reset answers
  };

  const handleLevelChange = (level) => {
      setSelectedLevel(level);
      setSkills({}); // Reset answers when level changes (optional)
  };

  const handleSkillChange = (question, value) => {
      setSkills(prev => ({ ...prev, [question]: value }));
  };

  return (
    <div className="min-h-screen w-full flex bg-[#0A0F2B] font-['Plus_Jakarta_Sans'] overflow-hidden">
      
      {/* ================= Left Section (Identical to previous) ================= */}
      <div className="hidden lg:flex w-[55%] relative flex-col justify-between px-16 py-12 xl:px-24 xl:py-16">
        {/* ... Background and Steps code remains exactly the same ... */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
            <div className="absolute inset-0 bg-[#0A0F2B] opacity-20 z-10" />
            <NeonEffect className="w-[600px] h-[600px] -right-[200px] -top-[200px] opacity-90" variant="variant4" />
            <NeonEffect className="w-[500px] h-[500px] left-[-100px] top-[30%] opacity-80" variant="default" />
            <NeonEffect className="w-[400px] h-[400px] right-[5%] bottom-[-100px] opacity-60" variant="variant2" />
        </div>

        <div className="relative z-10 flex flex-col gap-10">
            <Link to="/" className="flex items-center gap-3 w-fit">
                <Logo className="w-8 h-8" />
                <span className="text-2xl font-semibold text-[#EAEDFA] font-['Space_Grotesk'] tracking-wide">AREEB</span>
            </Link>
            <div className="flex flex-row items-end justify-between w-full gap-4 mt-100 mb-8">
              <h1 className="text-[56px] font-bold font-['Space_Grotesk'] leading-[1.1] text-[#EAEDFA]">Get Started <br /> with us</h1>
              <p className="text-xl font-medium text-[#EAEDFA] max-w-[400px] text-left pb-6">Choose your preferred track to start <br/> your learning journey</p>
          </div>
        </div>

        <div className="relative z-10 w-full mt-auto mb-10 pt-10">
            <div className="flex gap-3 w-full">
                <div className="flex-1 min-w-[215px] h-[154px] p-8 rounded-[24px] bg-gradient-to-r from-[#7033FF]/40 to-[#B899FF]/40 border border-[#7033FF]/20 flex flex-col items-start gap-4 text-[#EAEDFA]/70 hover:border-[#B899FF]/50 transition-all">
                    <div className="w-8 h-8 rounded-full border border-[#EAEDFA] flex items-center justify-center text-sm font-medium shrink-0">1</div>
                    <p className="text-xl font-medium leading-tight font-['Space_Grotesk']">Sign up your <br/> account</p>
                </div>
                <div className="flex-1 min-w-[215px] h-[154px] p-8 rounded-[24px] bg-gradient-to-r from-[#7033FF]/40 to-[#B899FF]/40 border border-[#7033FF]/20 flex flex-col items-start gap-4 text-[#EAEDFA]/70 hover:border-[#B899FF]/50 transition-all">
                    <div className="w-8 h-8 rounded-full border border-[#EAEDFA] flex items-center justify-center text-sm font-medium shrink-0">2</div>
                    <p className="text-xl font-medium leading-tight font-['Space_Grotesk']">Goal & <br/> preferences</p>
                </div>
                <div className="flex-1 min-w-[215px] h-[154px] p-8 rounded-[24px] bg-gradient-to-r from-[#7033FF] to-[#B899FF] flex flex-col items-start gap-4 shadow-[0_4px_30px_rgba(112,51,255,0.4)] hover:scale-[1.02] transition-transform border border-[#B899FF]/50">
                    <div className="w-8 h-8 rounded-full border border-white flex items-center justify-center text-sm font-bold text-white shrink-0">3</div>
                    <p className="text-xl font-bold leading-tight text-white font-['Space_Grotesk']">Choose your <br/> Track</p>
                </div>
                <div className="flex-1 min-w-[201px] h-[154px] p-8 rounded-[24px] bg-gradient-to-r from-[#7033FF]/40 to-[#B899FF]/40 border border-[#7033FF]/20 flex flex-col items-start gap-4 text-[#EAEDFA]/70 hover:border-[#B899FF]/50 transition-all">
                    <div className="w-8 h-8 rounded-full border border-[#EAEDFA] flex items-center justify-center text-sm font-medium shrink-0">4</div>
                    <p className="text-xl font-medium leading-tight font-['Space_Grotesk']">Profile Set</p>
                </div>
            </div>
        </div>
      </div>

      {/* ================= Right Section (Dynamic Logic) ================= */}
      <div className="-translate-y-6 w-full lg:w-[45%] flex items-center justify-center p-6 bg-[#0A0F2B] relative z-20 shadow-[-20px_0_40px_rgba(0,0,0,0.2)]">
        <div className="w-full max-w-[520px] flex flex-col h-full justify-center py-10">
            
            <h2 className="text-[47px] font-bold font-['Space_Grotesk'] text-white mb-8">Define your Track</h2>

            <div className="flex flex-col gap-6 overflow-y-auto no-scrollbar pr-2 max-h-[70vh]">
                
                {/* 1. Track Selection */}
                <div className="flex flex-col gap-2 relative">
                    <label className="text-sm text-gray-400 font-medium pl-1">Choose preferred Track</label>
                    <div className="relative">
                        <select 
                            value={selectedTrack}
                            onChange={handleTrackChange}
                            className="w-full h-[56px] px-4 bg-transparent border border-[#EAEDFA]/20 rounded-xl outline-none focus:border-[#B899FF] focus:bg-white/5 transition-all text-white appearance-none cursor-pointer"
                        >
                            <option className="bg-[#0A0F2B]" value="">Enter your track</option>
                            <option className="bg-[#0A0F2B]" value="UI/UX Design">UI/UX Design</option>
                            <option className="bg-[#0A0F2B]" value="Front-End Development">Front-End Development</option>
                            <option className="bg-[#0A0F2B]" value="Back-End Development">Back-End Development</option>
                        </select>
                        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                            <ChevronDown />
                        </div>
                    </div>
                </div>

                {/* 2. Level Selection (يظهر فقط لما تختار تراك) */}
                {selectedTrack && (
                    <div className="animate-fade-in-up">
                        <SkillRow 
                            label="What is your current Level?" 
                            options={LEVEL_OPTIONS} // بنبعت خيارات الليفيل
                            selectedOption={selectedLevel} 
                            onSelect={handleLevelChange} 
                        />
                    </div>
                )}

                {/* 3. Specific Questions (تظهر فقط لما تختار تراك + ليفيل) */}
                {selectedTrack && selectedLevel && (
                    <div className="flex flex-col gap-6 animate-fade-in-up">
                        <div className="border-t border-gray-800 my-2"></div> {/* خط فاصل شيك */}
                        <p className="text-sm text-[#B899FF] font-medium">Let's check your {selectedLevel} skills:</p>
                        
                        {tracksData[selectedTrack][selectedLevel].map((questionText, index) => (
                            <SkillRow 
                                key={index}
                                label={questionText} 
                                options={ANSWER_OPTIONS} // بنبعت خيارات (Yes/Maybe/No)
                                selectedOption={skills[questionText]} 
                                onSelect={(val) => handleSkillChange(questionText, val)} 
                            />
                        ))}
                    </div>
                )}

                {/* رسالة توجيه لو لسه مختارش */}
                {!selectedTrack && (
                    <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-center text-gray-400 text-sm mt-4">
                        Please select a track to start your assessment.
                    </div>
                )}

            </div>

            {/* Footer / Continue */}
            <div className="mt-8 pt-4 border-t border-gray-800">
                <p className="text-sm text-gray-400 mb-4">
                    Quick Skill Check (optional) 
                    <br />help us fine-tune your roadmap
                </p>
                <Link to="/profile">
                    <button className="w-full h-[56px] rounded-full bg-gradient-to-r from-[#7033FF] to-[#B899FF] text-[#EAEDFA] text-lg font-bold font-['Space_Grotesk'] hover:opacity-90 transition-opacity shadow-[0_4px_20px_rgba(112,51,255,0.4)] flex items-center justify-between px-6">
                        <span>Continue</span>
                        <div className="bg-white/20 rounded-full p-1">
                            <ArrowRight />
                        </div>
                    </button>
                </Link>
            </div>

        </div>
      </div>
    </div>
  );
}