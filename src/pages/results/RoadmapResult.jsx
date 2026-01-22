import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import areeb from '../../assets/icons/areeb-logo.svg';
import PhaseSection from '../../components/ui/PhaseSection';
import { getRoadmap } from '../../services/planService';

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

const ArrowRight = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M5 12h14" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const ArrowLeft = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M19 12H5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);



export default function RoadmapResult() {
  const navigate = useNavigate();
  
  const [roadmapPhases, setRoadmapPhases] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchRoadmap();
  }, []);

  const fetchRoadmap = async () => {
    setIsLoading(true);
    setError(null);
    
    try {
      const data = await getRoadmap();
      setRoadmapPhases(data.phases || []);
    } catch (err) {
      console.error('Failed to fetch roadmap:', err);
      setError('Failed to load your roadmap. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleBack = () => {
    navigate('/results/choose-plan');
  };

  const handleStartLearning = () => {
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen w-full flex bg-[#0A0F2B] font-['Plus_Jakarta_Sans']">
      
      {/* Background Effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
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
              Your Personalized Roadmap
            </h1>
            
            <p className="text-xl text-[#EAEDFA]/70 max-w-[600px] mx-auto">
              Here&apos;s your step-by-step learning journey. Follow these phases to master your goals efficiently.
            </p>
          </div>

          {/* Roadmap Phases */}
          {isLoading ? (
            <div className="flex justify-center items-center py-12">
              <div className="text-center">
                <div className="inline-block w-12 h-12 border-4 border-[#7033FF] border-t-transparent rounded-full animate-spin mb-4"></div>
                <p className="text-[#EAEDFA]/70 text-lg">Loading your roadmap...</p>
              </div>
            </div>
          ) : error ? (
            <div className="bg-red-500/10 border border-red-500/30 rounded-2xl p-6 backdrop-blur-sm mb-8">
              <p className="text-red-400 text-center text-lg">{error}</p>
              <div className="flex justify-center mt-4">
                <button 
                  onClick={fetchRoadmap}
                  className="px-6 py-2 rounded-full bg-red-500/20 text-red-400 hover:bg-red-500/30 transition-all"
                >
                  Try Again
                </button>
              </div>
            </div>
          ) : roadmapPhases.length > 0 ? (
            <div className="space-y-6 mb-8">
              {roadmapPhases.map((phase) => (
                <PhaseSection key={phase.phase} phase={phase} />
              ))}
            </div>
          ) : (
            <div className="bg-white/5 border border-[#EAEDFA]/10 rounded-2xl p-6 backdrop-blur-sm mb-8">
              <p className="text-[#EAEDFA]/70 text-center">No roadmap data available.</p>
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex gap-4 justify-center">
            <button 
              onClick={handleBack}
              className="px-8 h-[56px] rounded-full border border-gray-600 text-white text-lg font-medium font-['Space_Grotesk'] hover:border-white hover:bg-white/5 transition-all flex items-center justify-center gap-2"
            >
              <ArrowLeft />
              Back
            </button>
            
            <button 
              onClick={handleStartLearning}
              disabled={isLoading}
              className="px-8 h-[56px] rounded-full bg-gradient-to-r from-[#7033FF] to-[#B899FF] text-[#EAEDFA] text-lg font-bold font-['Space_Grotesk'] hover:opacity-90 transition-opacity shadow-[0_4px_20px_rgba(112,51,255,0.4)] flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Start Learning Journey
              <ArrowRight />
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
