import React from 'react';

// Icons
const SearchIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="11" cy="11" r="8" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="m21 21-4.35-4.35" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const BellIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M13.73 21a2 2 0 0 1-3.46 0" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const SettingsIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="3" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 1v6m0 6v6" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="m4.93 4.93 4.24 4.24m5.66 5.66 4.24 4.24" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M1 12h6m6 0h6" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="m4.93 19.07 4.24-4.24m5.66-5.66 4.24-4.24" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const UserIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="12" cy="7" r="4" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export default function Header() {
  return (
    <header className="h-20 bg-[#0A0F2B] border-b border-[#EAEDFA]/10 flex items-center justify-between px-8">
      {/* Search Bar */}
      <div className="flex-1 max-w-2xl">
        <div className="relative">
          <div className="absolute left-4 top-1/2 -translate-y-1/2 text-[#EAEDFA]/40">
            <SearchIcon />
          </div>
          <input
            type="text"
            placeholder="Search courses, topics, resources..."
            className="w-full h-12 pl-12 pr-4 bg-white/5 border border-[#EAEDFA]/10 rounded-xl text-[#EAEDFA] placeholder:text-[#EAEDFA]/40 font-['Plus_Jakarta_Sans'] focus:outline-none focus:border-[#7033FF]/50 focus:bg-white/10 transition-all"
          />
        </div>
      </div>

      {/* Right Side - Icons and Profile */}
      <div className="flex items-center gap-4 ml-8">
        {/* Notification Icon */}
        <button className="w-10 h-10 rounded-lg bg-white/5 border border-[#EAEDFA]/10 flex items-center justify-center text-[#EAEDFA]/60 hover:text-[#EAEDFA] hover:bg-white/10 transition-all">
          <BellIcon />
        </button>

        {/* Settings Icon */}
        <button className="w-10 h-10 rounded-lg bg-white/5 border border-[#EAEDFA]/10 flex items-center justify-center text-[#EAEDFA]/60 hover:text-[#EAEDFA] hover:bg-white/10 transition-all">
          <SettingsIcon />
        </button>

        {/* Profile Avatar */}
        <button className="w-10 h-10 rounded-lg bg-gradient-to-r from-[#7033FF] to-[#B899FF] flex items-center justify-center text-[#EAEDFA] hover:opacity-90 transition-all">
          <UserIcon />
        </button>
      </div>
    </header>
  );
}
