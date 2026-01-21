import React from 'react';

// Icons for different proficiency levels
const TrophyIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M4 22h16" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M18 2H6v7a6 6 0 0 0 12 0V2z" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const StarIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const FireIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const CrownIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M2 19h20" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M2 6l6.5 7.5L12 6l3.5 7.5L22 6v13H2V6z" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const icons = {
  trophy: TrophyIcon,
  star: StarIcon,
  fire: FireIcon,
  crown: CrownIcon
};

export default function ProgressStats({ stats }) {
  return (
    <div className="grid grid-cols-4 gap-4 mb-6">
      {stats.map((stat, index) => {
        const Icon = icons[stat.icon] || TrophyIcon;
        
        return (
          <div
            key={index}
            className="bg-white/5 border border-[#EAEDFA]/10 rounded-xl p-6 backdrop-blur-sm hover:border-[#7033FF]/30 transition-all"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="text-[#7033FF]">
                <Icon />
              </div>
              <div className="text-3xl font-bold text-[#EAEDFA] font-['Space_Grotesk']">
                {stat.value}
              </div>
            </div>
            <div className="text-sm text-[#EAEDFA]/60 font-['Plus_Jakarta_Sans']">
              {stat.label}
            </div>
          </div>
        );
      })}
    </div>
  );
}
