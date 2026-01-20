import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import areeb from '../../assets/icons/areeb-logo.svg';

// Neon Effect Component
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

// Icons
const StarIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const TrophyIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M4 22h16" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M18 2H6v7a6 6 0 0 0 12 0V2z" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const ArrowRight = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M5 12h14" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export default function FinalResult() {
  const navigate = useNavigate();

  // TODO: In the future, get actual results from API/state management
  const mockResults = {
    score: 4,
    total: 5,
    percentage: 80,
    level: "Intermediate",
    strengths: ["React Hooks", "Component Design", "State Management"],
    improvements: ["Performance Optimization", "Testing"]
  };

  const handleViewRoadmap = () => {
    navigate('/results/roadmap');
  };

  return (
    <div className="min-h-screen w-full flex bg-[#0A0F2B] font-['Plus_Jakarta_Sans'] overflow-hidden">
      
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute inset-0 bg-[#0A0F2B] opacity-20 z-10" />
        <NeonEffect className="w-[600px] h-[600px] -right-[200px] -top-[200px] opacity-90" variant="variant4" />
        <NeonEffect className="w-[500px] h-[500px] left-[-100px] top-[30%] opacity-80" variant="default" />
        <NeonEffect className="w-[400px] h-[400px] right-[5%] bottom-[-100px] opacity-60" variant="variant2" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 w-full flex flex-col items-center justify-center px-6 py-12">
        
        {/* Logo Header */}
        <Link to="/" className="absolute top-8 left-8 flex items-center gap-3">
          <Logo className="w-8 h-8" />
          <span className="text-2xl font-semibold text-[#EAEDFA] font-['Space_Grotesk'] tracking-wide">
            AREEB
          </span>
        </Link>

        {/* Results Container */}
        <div className="max-w-[800px] w-full">
          
          {/* Icon Container */}
          <div className="flex justify-center mb-8">
            <div className="w-20 h-20 rounded-full bg-gradient-to-r from-[#7033FF] to-[#B899FF] flex items-center justify-center shadow-[0_4px_30px_rgba(112,51,255,0.4)]">
              <TrophyIcon />
            </div>
          </div>

          {/* Title */}
          <h1 className="text-[48px] font-bold font-['Space_Grotesk'] text-center text-[#EAEDFA] mb-4 leading-tight">
            Great Job!
          </h1>

          {/* Score */}
          <div className="text-center mb-8">
            <div className="text-6xl font-bold font-['Space_Grotesk'] bg-gradient-to-r from-[#7033FF] to-[#B899FF] bg-clip-text text-transparent">
              {mockResults.score}/{mockResults.total}
            </div>
            <p className="text-xl text-[#EAEDFA]/70 mt-2">
              {mockResults.percentage}% Correct - {mockResults.level} Level
            </p>
          </div>

          {/* Results Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            
            {/* Strengths */}
            <div className="bg-white/5 border border-[#EAEDFA]/10 rounded-2xl p-6 backdrop-blur-sm">
              <h3 className="text-xl font-semibold font-['Space_Grotesk'] text-[#EAEDFA] mb-4 flex items-center gap-2">
                <span className="text-green-400">✓</span>
                Your Strengths
              </h3>
              <ul className="space-y-2">
                {mockResults.strengths.map((strength, index) => (
                  <li key={index} className="text-[#EAEDFA]/70 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400"></span>
                    {strength}
                  </li>
                ))}
              </ul>
            </div>

            {/* Areas to Improve */}
            <div className="bg-white/5 border border-[#EAEDFA]/10 rounded-2xl p-6 backdrop-blur-sm">
              <h3 className="text-xl font-semibold font-['Space_Grotesk'] text-[#EAEDFA] mb-4 flex items-center gap-2">
                <span className="text-yellow-400">⚡</span>
                Areas to Improve
              </h3>
              <ul className="space-y-2">
                {mockResults.improvements.map((improvement, index) => (
                  <li key={index} className="text-[#EAEDFA]/70 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-yellow-400"></span>
                    {improvement}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4">
            <Link to="/assessment/quiz" className="flex-1">
              <button className="w-full h-[56px] rounded-full border border-gray-600 text-white text-lg font-medium font-['Space_Grotesk'] hover:border-white hover:bg-white/5 transition-all">
                Retake Quiz
              </button>
            </Link>
            
            <button 
              onClick={handleViewRoadmap}
              className="flex-1 h-[56px] rounded-full bg-gradient-to-r from-[#7033FF] to-[#B899FF] text-[#EAEDFA] text-lg font-bold font-['Space_Grotesk'] hover:opacity-90 transition-opacity shadow-[0_4px_20px_rgba(112,51,255,0.4)] flex items-center justify-center gap-2"
            >
              View Your Roadmap
              <ArrowRight />
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
