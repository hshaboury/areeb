import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import areeb from '../../assets/icons/areeb-logo.svg';
import PlanCard from '../../components/ui/PlanCard';
import { mockLearningPlans } from '../../data/mockRoadmap';

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
const CalendarIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M16 2v4" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M8 2v4" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M3 10h18" strokeLinecap="round" strokeLinejoin="round"/>
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

export default function ChoosePlan() {
  const navigate = useNavigate();
  
  // TODO: In the future, this will be managed by a state management solution (e.g., Context API, Redux)
  // Find the recommended plan by default
  const defaultPlan = mockLearningPlans.find(plan => plan.recommended)?.id || mockLearningPlans[0].id;
  const [selectedPlanId, setSelectedPlanId] = useState(defaultPlan);

  const handleBack = () => {
    navigate('/results/topics-analysis');
  };

  const handleContinue = () => {
    // TODO: Store selected plan in state management
    // For now, we'll navigate directly to roadmap
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
      <div className="relative z-10 w-full flex flex-col px-6 py-12">
        
        {/* Logo Header */}
        <Link to="/" className="absolute top-8 left-8 flex items-center gap-3">
          <Logo className="w-8 h-8" />
          <span className="text-2xl font-semibold text-[#EAEDFA] font-['Space_Grotesk'] tracking-wide">
            AREEB
          </span>
        </Link>

        {/* Choose Plan Container */}
        <div className="max-w-[1100px] w-full mx-auto mt-24">
          
          {/* Header */}
          <div className="text-center mb-12">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-[#7033FF] to-[#B899FF] flex items-center justify-center shadow-[0_4px_30px_rgba(112,51,255,0.4)]">
                <CalendarIcon />
              </div>
            </div>
            
            <h1 className="text-[48px] font-bold font-['Space_Grotesk'] text-[#EAEDFA] mb-4 leading-tight">
              Choose Your Learning Plan
            </h1>
            
            <p className="text-xl text-[#EAEDFA]/70 max-w-[600px] mx-auto">
              Select the plan that best fits your schedule and commitment level. You can always adjust it later.
            </p>
          </div>

          {/* Plans Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {mockLearningPlans.map((plan) => (
              <PlanCard 
                key={plan.id}
                plan={plan}
                isSelected={selectedPlanId === plan.id}
                onSelect={setSelectedPlanId}
              />
            ))}
          </div>

          {/* Info Box */}
          <div className="bg-white/5 border border-[#EAEDFA]/10 rounded-2xl p-6 backdrop-blur-sm mb-6">
            <h3 className="text-lg font-semibold font-['Space_Grotesk'] text-[#EAEDFA] mb-2">
              💡 Tip: Be Realistic
            </h3>
            <p className="text-[#EAEDFA]/70">
              Choose a plan that matches your actual availability. Consistency is more important than intensity. You can always speed up or slow down as you progress.
            </p>
          </div>

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
              onClick={handleContinue}
              disabled={!selectedPlanId}
              className="px-8 h-[56px] rounded-full bg-gradient-to-r from-[#7033FF] to-[#B899FF] text-[#EAEDFA] text-lg font-bold font-['Space_Grotesk'] hover:opacity-90 transition-opacity shadow-[0_4px_20px_rgba(112,51,255,0.4)] flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
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
