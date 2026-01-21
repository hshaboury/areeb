import React from 'react';
import NextTasks from './NextTasks';

export default function PhaseCard({ phase, isExpanded = false }) {
  const completedTasks = phase.tasks.filter(task => task.completed).length;
  const totalTasks = phase.tasks.length;
  
  return (
    <div className={`bg-white/5 border rounded-2xl overflow-hidden transition-all ${
      phase.isActive
        ? 'border-[#7033FF]/50 shadow-lg shadow-[#7033FF]/10'
        : 'border-[#EAEDFA]/10 hover:border-[#7033FF]/30'
    }`}>
      {/* Phase Header */}
      <div className={`p-6 ${
        phase.isActive
          ? 'bg-gradient-to-r from-[#7033FF] to-[#B899FF]'
          : 'bg-white/5'
      }`}>
        <div className="flex items-center justify-between mb-2">
          <span className={`text-sm font-medium font-['Plus_Jakarta_Sans'] ${
            phase.isActive ? 'text-white/80' : 'text-[#EAEDFA]/60'
          }`}>
            Phase {phase.id}
          </span>
          {phase.isActive && (
            <span className="px-3 py-1 rounded-full bg-white/20 text-xs font-medium text-white font-['Plus_Jakarta_Sans']">
              Current
            </span>
          )}
        </div>
        
        <h3 className={`text-2xl font-bold font-['Space_Grotesk'] mb-2 ${
          phase.isActive ? 'text-white' : 'text-[#EAEDFA]'
        }`}>
          {phase.title}
        </h3>
        
        <p className={`font-['Plus_Jakarta_Sans'] ${
          phase.isActive ? 'text-white/80' : 'text-[#EAEDFA]/70'
        }`}>
          {phase.subtitle}
        </p>
      </div>

      {/* Phase Content */}
      <div className="p-6 space-y-4">
        {/* Topics */}
        {isExpanded && phase.topics && phase.topics.length > 0 && (
          <div>
            <h4 className="text-sm font-medium text-[#EAEDFA]/80 font-['Plus_Jakarta_Sans'] mb-2">
              Key Topics:
            </h4>
            <div className="flex flex-wrap gap-2">
              {phase.topics.map((topic, index) => (
                <span
                  key={index}
                  className="px-3 py-1.5 rounded-full bg-[#7033FF]/20 border border-[#7033FF]/30 text-sm text-[#EAEDFA]/90 font-['Plus_Jakarta_Sans']"
                >
                  {topic}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Tasks */}
        {phase.tasks && phase.tasks.length > 0 && (
          <NextTasks tasks={phase.tasks} title="Tasks" />
        )}

        {/* Progress Bar */}
        <div className="space-y-2">
          <div className="flex items-center justify-between text-sm text-[#EAEDFA]/80 font-['Plus_Jakarta_Sans']">
            <span>Progress</span>
            <span className="font-medium">
              {completedTasks} of {totalTasks} tasks • {phase.progress}%
            </span>
          </div>
          
          {/* Segmented Progress Bar */}
          <div className="flex gap-1">
            {Array.from({ length: totalTasks }).map((_, index) => (
              <div
                key={index}
                className={`h-2 flex-1 rounded-full transition-all ${
                  index < completedTasks
                    ? 'bg-gradient-to-r from-[#7033FF] to-[#B899FF]'
                    : 'bg-white/10'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
