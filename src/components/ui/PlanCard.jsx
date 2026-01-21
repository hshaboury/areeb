import React from 'react';

// Icon for plan card
const ClockIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="10" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 6v6l4 2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const CheckIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

// PlanCard component
export default function PlanCard({ plan, isSelected, onSelect }) {
  const handleClick = () => {
    onSelect(plan.id);
  };

  return (
    <div 
      onClick={handleClick}
      className={`relative cursor-pointer rounded-2xl p-6 backdrop-blur-sm transition-all ${
        isSelected 
          ? 'bg-gradient-to-br from-[#7033FF]/20 to-[#B899FF]/20 border-2 border-[#7033FF] shadow-[0_4px_30px_rgba(112,51,255,0.3)]' 
          : 'bg-white/5 border border-[#EAEDFA]/10 hover:border-[#7033FF]/50 hover:bg-white/10'
      }`}
    >
      {/* Recommended Badge */}
      {/* {plan.recommended && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
          <div className="px-4 py-1 rounded-full bg-gradient-to-r from-[#7033FF] to-[#B899FF] text-white text-xs font-bold">
            RECOMMENDED
          </div>
        </div>
      )} */}

      {/* Selection Indicator */}
      {isSelected && (
        <div className="absolute top-4 right-4">
          <div className="w-6 h-6 rounded-full bg-[#7033FF] flex items-center justify-center text-white">
            <CheckIcon />
          </div>
        </div>
      )}

      {/* Plan Header */}
      <div className="mb-4">
        <h3 className="text-2xl font-bold font-['Space_Grotesk'] text-[#EAEDFA] mb-2">
          {plan.name}
        </h3>
        <p className="text-[#EAEDFA]/60 text-sm">
          {plan.description}
        </p>
      </div>

      {/* Duration Info */}
      <div className="flex items-center gap-6 mb-6 pb-6 border-b border-[#EAEDFA]/10">
        <div>
          <div className="text-3xl font-bold font-['Space_Grotesk'] text-[#EAEDFA]">
            {plan.duration}
          </div>
          <div className="text-[#EAEDFA]/50 text-sm mt-1">Duration</div>
        </div>
        <div>
          <div className="flex items-center gap-2">
            <ClockIcon />
            <span className="text-2xl font-bold font-['Space_Grotesk'] text-[#EAEDFA]">
              {plan.hoursPerWeek}h
            </span>
          </div>
          <div className="text-[#EAEDFA]/50 text-sm mt-1">Per Week</div>
        </div>
      </div>

      {/* Features List */}
      <div className="space-y-3">
        {plan.features.map((feature, index) => (
          <div key={index} className="flex items-start gap-2">
            <div className="w-5 h-5 rounded-full bg-[#7033FF]/20 flex items-center justify-center text-[#7033FF] mt-0.5">
              <CheckIcon />
            </div>
            <span className="text-[#EAEDFA]/80 text-sm">{feature}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
