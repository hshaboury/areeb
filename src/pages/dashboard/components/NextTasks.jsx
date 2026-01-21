import React from 'react';

// Task Type Icons
const StudyIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const PracticeIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <polyline points="16 18 22 12 16 6" strokeLinecap="round" strokeLinejoin="round"/>
    <polyline points="8 6 2 12 8 18" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const ProjectIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" strokeLinecap="round" strokeLinejoin="round"/>
    <polyline points="14 2 14 8 20 8" strokeLinecap="round" strokeLinejoin="round"/>
    <line x1="16" y1="13" x2="8" y2="13" strokeLinecap="round" strokeLinejoin="round"/>
    <line x1="16" y1="17" x2="8" y2="17" strokeLinecap="round" strokeLinejoin="round"/>
    <polyline points="10 9 9 9 8 9" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const CheckIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <polyline points="20 6 9 17 4 12" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const taskIcons = {
  study: StudyIcon,
  practice: PracticeIcon,
  project: ProjectIcon
};

export default function NextTasks({ tasks, title = "Next Steps" }) {
  return (
    <div className="bg-white/5 border border-[#EAEDFA]/10 rounded-xl p-6 backdrop-blur-sm">
      <h3 className="text-lg font-bold text-[#EAEDFA] font-['Space_Grotesk'] mb-4">
        {title}
      </h3>
      
      <div className="space-y-3">
        {tasks.map((task) => {
          const Icon = taskIcons[task.type] || StudyIcon;
          
          return (
            <div
              key={task.id}
              className={`flex items-center gap-3 p-3 rounded-lg transition-all ${
                task.completed
                  ? 'bg-green-500/10 border border-green-500/20'
                  : 'bg-white/5 border border-[#EAEDFA]/10 hover:border-[#7033FF]/30'
              }`}
            >
              {/* Checkbox/Check Icon */}
              <div className={`flex-shrink-0 w-6 h-6 rounded flex items-center justify-center ${
                task.completed
                  ? 'bg-green-500 text-white'
                  : 'bg-white/5 border border-[#EAEDFA]/20'
              }`}>
                {task.completed && <CheckIcon />}
              </div>

              {/* Task Icon */}
              <div className={`flex-shrink-0 ${
                task.completed ? 'text-green-400' : 'text-[#7033FF]'
              }`}>
                <Icon />
              </div>

              {/* Task Text */}
              <span className={`flex-1 font-['Plus_Jakarta_Sans'] ${
                task.completed
                  ? 'text-[#EAEDFA]/60 line-through'
                  : 'text-[#EAEDFA]'
              }`}>
                {task.text}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
