import React from 'react';

export default function CurrentPhase({ phase }) {
  if (!phase) return null;

  return (
    <div className="relative overflow-hidden rounded-2xl mb-6">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#7033FF] to-[#B899FF]" />
      
      {/* Content */}
      <div className="relative p-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-white/80 font-['Plus_Jakarta_Sans']">
            Current Phase
          </span>
          <span className="px-3 py-1 rounded-full bg-white/20 text-xs font-medium text-white font-['Plus_Jakarta_Sans']">
            Active
          </span>
        </div>
        
        <h2 className="text-3xl font-bold text-white font-['Space_Grotesk'] mb-2">
          Phase {phase.id}: {phase.title}
        </h2>
        
        <p className="text-white/80 font-['Plus_Jakarta_Sans'] mb-4">
          {phase.subtitle}
        </p>

        {/* Progress Bar */}
        <div className="space-y-2">
          <div className="flex items-center justify-between text-sm text-white/80 font-['Plus_Jakarta_Sans']">
            <span>Progress</span>
            <span className="font-medium">{phase.progress}%</span>
          </div>
          <div className="h-2 bg-white/20 rounded-full overflow-hidden">
            <div
              className="h-full bg-white transition-all duration-500"
              style={{ width: `${phase.progress}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
