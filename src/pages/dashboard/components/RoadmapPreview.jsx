import React from 'react';
import { Link } from 'react-router-dom';

const ArrowRightIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M5 12h14" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

// export default function RoadmapPreview({ phases }) {
export default function RoadmapPreview({ phases = [] }) {
  if (!Array.isArray(phases) || phases.length === 0) {
    return (
      <div className="bg-white/5 border border-[#EAEDFA]/10 rounded-2xl p-6 text-center text-[#EAEDFA]/60 text-sm">
        Your learning roadmap will appear here once it’s generated.
      </div>
    );
  }

  return (
    <div className="bg-white/5 border border-[#EAEDFA]/10 rounded-2xl p-6 backdrop-blur-sm">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-bold text-[#EAEDFA] font-['Space_Grotesk']">
          Learning Roadmap
        </h3>
        <Link
          to="/dashboard/roadmap"
          className="flex items-center gap-2 text-[#7033FF] hover:text-[#B899FF] transition-colors text-sm font-medium font-['Plus_Jakarta_Sans']"
        >
          View Full Roadmap
          <ArrowRightIcon />
        </Link>
      </div>

      <div className="space-y-4">
        {phases.map((phase, index) => {
          const isLocked = !phase.isActive && index > phases.findIndex(p => p.isActive);
          
          return (
            // <div key={phase.id} className="relative">
            <div key={phase.id ?? index} className="relative">
              {/* Phase Item */}
              <div className={`flex items-center gap-4 p-4 rounded-xl transition-all ${
                phase.isActive
                  ? 'bg-gradient-to-r from-[#7033FF]/20 to-[#B899FF]/20 border border-[#7033FF]/40'
                  : isLocked
                  ? 'bg-white/5 border border-[#EAEDFA]/10 opacity-50'
                  : 'bg-white/5 border border-[#EAEDFA]/10 hover:border-[#7033FF]/30'
              }`}>
                {/* Phase Number */}
                <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center font-bold font-['Space_Grotesk'] ${
                  phase.isActive
                    ? 'bg-gradient-to-r from-[#7033FF] to-[#B899FF] text-white'
                    : isLocked
                    ? 'bg-white/5 text-[#EAEDFA]/40'
                    : 'bg-white/10 text-[#EAEDFA]/60'
                }`}>
                  {isLocked ? '🔒' : phase.id}
                </div>

                {/* Phase Info */}
                <div className="flex-1">
                  <h4 className={`font-bold font-['Space_Grotesk'] ${
                    phase.isActive ? 'text-[#EAEDFA]' : 'text-[#EAEDFA]/80'
                  }`}>
                    {phase.title}
                  </h4>
                  <p className={`text-sm font-['Plus_Jakarta_Sans'] ${
                    phase.isActive ? 'text-[#EAEDFA]/80' : 'text-[#EAEDFA]/60'
                  }`}>
                    {/* {phase.topics.length} topics */}
                    {(phase.topics?.length ?? 0)} topics
                  </p>
                </div>

                {/* Progress */}
                <div className="flex-shrink-0 text-right">
                  <div className={`text-2xl font-bold font-['Space_Grotesk'] ${
                    phase.isActive ? 'text-[#7033FF]' : 'text-[#EAEDFA]/60'
                  }`}>
                    {phase.progress}%
                  </div>
                </div>
              </div>

              {/* Connector Line */}
              {index < phases.length - 1 && (
                <div className="ml-[28px] h-4 w-0.5 bg-[#EAEDFA]/10" />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
