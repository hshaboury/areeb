import React from 'react';

// Icons
const CheckIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M22 4L12 14.01l-3-3" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

// PhaseSection component
export default function PhaseSection({ phase }) {
  return (
    <div className={`relative bg-white/5 border rounded-2xl p-6 backdrop-blur-sm transition-all ${
      phase.isCompleted 
        ? 'border-green-400/50 bg-green-400/5' 
        : 'border-[#EAEDFA]/10 hover:border-[#7033FF]/50'
    }`}>
      
      {/* Phase Header */}
      <div className="flex items-start justify-between mb-4">
        <div>
          <div className="text-sm text-[#EAEDFA]/50 mb-1">Phase {phase.phase}</div>
          <h3 className="text-2xl font-bold font-['Space_Grotesk'] text-[#EAEDFA]">
            {phase.title}
          </h3>
        </div>
        {phase.isCompleted && (
          <div className="text-green-400">
            <CheckIcon />
          </div>
        )}
      </div>

      {/* Duration */}
      <div className="text-[#EAEDFA]/60 mb-3">
        ⏱️ Estimated: {phase.duration}
      </div>

      {/* Description */}
      {phase.description && (
        <p className="text-[#EAEDFA]/70 text-sm mb-4">
          {phase.description}
        </p>
      )}

      {/* Topics */}
      <div className="space-y-2">
        <div className="text-sm font-medium text-[#EAEDFA]/80 mb-2">Key Topics:</div>
        <div className="flex flex-wrap gap-2">
          {phase.topics.map((topic, index) => (
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
}
