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
const CheckIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M22 4L12 14.01l-3-3" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const BrainIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const ArrowRight = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M5 12h14" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export default function KnowledgeCheck() {
  const navigate = useNavigate();

  const handleStartQuiz = () => {
    // TODO: In the future, this will trigger AI logic to fetch personalized questions
    navigate('/assessment/quiz');
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

        {/* Central Card */}
        <div className="max-w-[700px] w-full">
          
          {/* Icon Container */}
          <div className="flex justify-center mb-8">
            <div className="w-20 h-20 rounded-full bg-gradient-to-r from-[#7033FF] to-[#B899FF] flex items-center justify-center shadow-[0_4px_30px_rgba(112,51,255,0.4)]">
              <BrainIcon />
            </div>
          </div>

          {/* Title */}
          <h1 className="text-[48px] font-bold font-['Space_Grotesk'] text-center text-[#EAEDFA] mb-4 leading-tight">
            Knowledge Check
          </h1>

          {/* Description */}
          <p className="text-xl text-center text-[#EAEDFA]/70 mb-12 leading-relaxed">
            Let's assess your current knowledge to personalize your learning path. 
            This quick quiz will help us understand your skill level better.
          </p>

          {/* Info Card */}
          <div className="bg-white/5 border border-[#EAEDFA]/10 rounded-2xl p-8 mb-8 backdrop-blur-sm">
            <h3 className="text-2xl font-semibold font-['Space_Grotesk'] text-[#EAEDFA] mb-6">
              What to expect:
            </h3>
            
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="mt-1 text-[#7033FF]">
                  <CheckIcon />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-[#EAEDFA] mb-1">5 Questions</h4>
                  <p className="text-[#EAEDFA]/60">Quick and focused on your selected track</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="mt-1 text-[#7033FF]">
                  <CheckIcon />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-[#EAEDFA] mb-1">5-10 Minutes</h4>
                  <p className="text-[#EAEDFA]/60">Take your time, there's no rush</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="mt-1 text-[#7033FF]">
                  <CheckIcon />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-[#EAEDFA] mb-1">Personalized Results</h4>
                  <p className="text-[#EAEDFA]/60">Get a customized learning roadmap based on your answers</p>
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4">
            <Link to="/profile" className="flex-1">
              <button className="w-full h-[56px] rounded-full border border-gray-600 text-white text-lg font-medium font-['Space_Grotesk'] hover:border-white hover:bg-white/5 transition-all">
                Back
              </button>
            </Link>
            
            <button 
              onClick={handleStartQuiz}
              className="flex-1 h-[56px] rounded-full bg-gradient-to-r from-[#7033FF] to-[#B899FF] text-[#EAEDFA] text-lg font-bold font-['Space_Grotesk'] hover:opacity-90 transition-opacity shadow-[0_4px_20px_rgba(112,51,255,0.4)] flex items-center justify-center gap-2"
            >
              Start Quiz
              <ArrowRight />
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
