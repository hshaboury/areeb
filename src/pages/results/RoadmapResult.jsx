import React from 'react';
import { Link } from 'react-router-dom';
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
const MapIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M3 6l6-3 6 3 6-3v15l-6 3-6-3-6 3V6z" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M9 3v15" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M15 6v15" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const CheckIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M22 4L12 14.01l-3-3" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const ArrowRight = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M5 12h14" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

// Roadmap Phase Component
const RoadmapPhase = ({ phase, title, duration, topics, isCompleted }) => {
  return (
    <div className={`relative bg-white/5 border rounded-2xl p-6 backdrop-blur-sm transition-all ${
      isCompleted 
        ? 'border-green-400/50 bg-green-400/5' 
        : 'border-[#EAEDFA]/10 hover:border-[#7033FF]/50'
    }`}>
      
      {/* Phase Header */}
      <div className="flex items-start justify-between mb-4">
        <div>
          <div className="text-sm text-[#EAEDFA]/50 mb-1">Phase {phase}</div>
          <h3 className="text-2xl font-bold font-['Space_Grotesk'] text-[#EAEDFA]">
            {title}
          </h3>
        </div>
        {isCompleted && (
          <div className="text-green-400">
            <CheckIcon />
          </div>
        )}
      </div>

      {/* Duration */}
      <div className="text-[#EAEDFA]/60 mb-4">
        ⏱️ Estimated: {duration}
      </div>

      {/* Topics */}
      <div className="space-y-2">
        <div className="text-sm font-medium text-[#EAEDFA]/80 mb-2">Key Topics:</div>
        <div className="flex flex-wrap gap-2">
          {topics.map((topic, index) => (
            <span 
              key={index}
              className="px-3 py-1.5 rounded-full bg-[#7033FF]/20 border border-[#7033FF]/30 text-sm text-[#EAEDFA]/90"
            >
              {topic}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default function RoadmapResult() {
  // TODO: In the future, get personalized roadmap from API based on quiz analysis
  const mockRoadmap = [
    {
      phase: 1,
      title: "Foundation Building",
      duration: "2-3 weeks",
      topics: ["HTML Basics", "CSS Fundamentals", "JavaScript Basics"],
      isCompleted: false
    },
    {
      phase: 2,
      title: "Advanced Concepts",
      duration: "3-4 weeks",
      topics: ["React Basics", "Component Lifecycle", "Hooks"],
      isCompleted: false
    },
    {
      phase: 3,
      title: "State Management",
      duration: "2-3 weeks",
      topics: ["Context API", "Redux", "Data Fetching"],
      isCompleted: false
    },
    {
      phase: 4,
      title: "Advanced Patterns",
      duration: "3-4 weeks",
      topics: ["Performance", "Testing", "Best Practices"],
      isCompleted: false
    }
  ];

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
      <div className="relative z-10 w-full flex flex-col px-6 py-12">
        
        {/* Logo Header */}
        <Link to="/" className="absolute top-8 left-8 flex items-center gap-3">
          <Logo className="w-8 h-8" />
          <span className="text-2xl font-semibold text-[#EAEDFA] font-['Space_Grotesk'] tracking-wide">
            AREEB
          </span>
        </Link>

        {/* Roadmap Container */}
        <div className="max-w-[1000px] w-full mx-auto mt-24">
          
          {/* Header */}
          <div className="text-center mb-12">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-[#7033FF] to-[#B899FF] flex items-center justify-center shadow-[0_4px_30px_rgba(112,51,255,0.4)]">
                <MapIcon />
              </div>
            </div>
            
            <h1 className="text-[48px] font-bold font-['Space_Grotesk'] text-[#EAEDFA] mb-4 leading-tight">
              Your Learning Roadmap
            </h1>
            
            <p className="text-xl text-[#EAEDFA]/70 max-w-[600px] mx-auto">
              Based on your assessment, we've created a personalized path to help you achieve your goals.
            </p>
          </div>

          {/* Roadmap Phases */}
          <div className="space-y-6 mb-8">
            {mockRoadmap.map((phase) => (
              <RoadmapPhase key={phase.phase} {...phase} />
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4 justify-center">
            <Link to="/results/final">
              <button className="px-8 h-[56px] rounded-full border border-gray-600 text-white text-lg font-medium font-['Space_Grotesk'] hover:border-white hover:bg-white/5 transition-all">
                Back to Results
              </button>
            </Link>
            
            <Link to="/dashboard">
              <button className="px-8 h-[56px] rounded-full bg-gradient-to-r from-[#7033FF] to-[#B899FF] text-[#EAEDFA] text-lg font-bold font-['Space_Grotesk'] hover:opacity-90 transition-opacity shadow-[0_4px_20px_rgba(112,51,255,0.4)] flex items-center justify-center gap-2">
                Go to Dashboard
                <ArrowRight />
              </button>
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
}
