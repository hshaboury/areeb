import React from 'react';

// Icon for topic status
const CheckIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M22 4L12 14.01l-3-3" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const AlertIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 9v4" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 17h.01" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const BookIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

// TopicStatusRow component
export default function TopicStatusRow({ topic, status }) {
  const getStatusConfig = () => {
    switch (status) {
      case 'proficient':
        return {
          icon: <CheckIcon />,
          iconBg: 'bg-green-500/20',
          iconColor: 'text-green-400',
          borderColor: 'border-green-400/30',
          bgColor: 'bg-green-400/5',
          label: 'Proficient',
          labelColor: 'text-green-400'
        };
      case 'needsReview':
        return {
          icon: <AlertIcon />,
          iconBg: 'bg-yellow-500/20',
          iconColor: 'text-yellow-400',
          borderColor: 'border-yellow-400/30',
          bgColor: 'bg-yellow-400/5',
          label: 'Needs Review',
          labelColor: 'text-yellow-400'
        };
      case 'needsLearning':
        return {
          icon: <BookIcon />,
          iconBg: 'bg-red-500/20',
          iconColor: 'text-red-400',
          borderColor: 'border-red-400/30',
          bgColor: 'bg-red-400/5',
          label: 'Needs Learning',
          labelColor: 'text-red-400'
        };
      default:
        return {};
    }
  };

  const config = getStatusConfig();

  return (
    <div className={`flex items-center justify-between p-4 rounded-xl border ${config.borderColor} ${config.bgColor} backdrop-blur-sm transition-all hover:border-opacity-50`}>
      <div className="flex items-center gap-3">
        <div className={`w-10 h-10 rounded-full ${config.iconBg} flex items-center justify-center ${config.iconColor}`}>
          {config.icon}
        </div>
        <span className="text-[#EAEDFA] font-medium">{topic.name}</span>
      </div>
      <div className="flex items-center gap-3">
        {topic.score !== undefined && (
          <span className="text-[#EAEDFA]/60 text-sm">{topic.score}%</span>
        )}
        <span className={`text-sm font-medium ${config.labelColor}`}>
          {config.label}
        </span>
      </div>
    </div>
  );
}
