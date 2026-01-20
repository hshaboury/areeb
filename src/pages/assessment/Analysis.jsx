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

// Loading Animation Icon
const LoadingIcon = () => (
  <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="animate-spin">
    <path d="M21 12a9 9 0 1 1-6.219-8.56" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const ArrowRight = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M5 12h14" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export default function Analysis() {
  const navigate = useNavigate();

  // Simulate analysis completion after a delay
  React.useEffect(() => {
    // TODO: In the future, this will make an API call to analyze quiz results using AI
    const timer = setTimeout(() => {
      navigate('/results/final');
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate]);

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

        {/* Central Content */}
        <div className="max-w-[600px] w-full text-center">
          
          {/* Loading Icon */}
          <div className="flex justify-center mb-8">
            <div className="text-[#7033FF]">
              <LoadingIcon />
            </div>
          </div>

          {/* Title */}
          <h1 className="text-[48px] font-bold font-['Space_Grotesk'] text-[#EAEDFA] mb-4 leading-tight">
            Analyzing Your Results
          </h1>

          {/* Description */}
          <p className="text-xl text-[#EAEDFA]/70 mb-8 leading-relaxed">
            Our AI is evaluating your answers to create a personalized learning roadmap just for you.
          </p>

          {/* Analysis Steps */}
          <div className="bg-white/5 border border-[#EAEDFA]/10 rounded-2xl p-8 backdrop-blur-sm">
            <div className="space-y-6 text-left">
              <div className="flex items-center gap-4">
                <div className="w-2 h-2 rounded-full bg-[#7033FF] animate-pulse"></div>
                <span className="text-[#EAEDFA]/80">Evaluating your responses...</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-2 h-2 rounded-full bg-[#7033FF] animate-pulse delay-100"></div>
                <span className="text-[#EAEDFA]/80">Identifying knowledge gaps...</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-2 h-2 rounded-full bg-[#7033FF] animate-pulse delay-200"></div>
                <span className="text-[#EAEDFA]/80">Creating your personalized roadmap...</span>
              </div>
            </div>
          </div>

          {/* Note */}
          <p className="text-sm text-[#EAEDFA]/50 mt-6">
            This usually takes a few seconds...
          </p>

        </div>
      </div>
    </div>
  );
}
