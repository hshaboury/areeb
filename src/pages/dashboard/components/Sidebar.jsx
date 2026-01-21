import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import areeb from '../../../assets/icons/areeb-logo.svg';

// Navigation Icons
const OverviewIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="3" y="3" width="7" height="7" strokeLinecap="round" strokeLinejoin="round"/>
    <rect x="14" y="3" width="7" height="7" strokeLinecap="round" strokeLinejoin="round"/>
    <rect x="14" y="14" width="7" height="7" strokeLinecap="round" strokeLinejoin="round"/>
    <rect x="3" y="14" width="7" height="7" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const CoursesIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const RoadmapIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M3 6l6-3 6 3 6-3v15l-6 3-6-3-6 3V6z" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M9 3v15" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M15 6v15" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const AnalyticsIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M18 20V10" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 20V4" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M6 20v-6" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const CommunityIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="9" cy="7" r="4" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M23 21v-2a4 4 0 0 0-3-3.87" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M16 3.13a4 4 0 0 1 0 7.75" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const navItems = [
  { name: 'Overview', path: '/dashboard', icon: OverviewIcon },
  { name: 'Courses', path: '/dashboard/courses', icon: CoursesIcon },
  { name: 'Roadmap', path: '/dashboard/roadmap', icon: RoadmapIcon },
  { name: 'Analytics', path: '/dashboard/analytics', icon: AnalyticsIcon },
  { name: 'Community', path: '/dashboard/community', icon: CommunityIcon }
];

export default function Sidebar() {
  const location = useLocation();

  return (
    <div className="w-64 h-screen bg-[#0A0F2B] border-r border-[#EAEDFA]/10 flex flex-col fixed left-0 top-0">
      {/* Logo */}
      <Link to="/" className="flex items-center gap-3 px-6 py-6">
        <img src={areeb} alt="Areeb Logo" className="w-8 h-8" />
        <span className="text-2xl font-bold text-[#EAEDFA] font-['Space_Grotesk'] tracking-wide">
          AREEB
        </span>
      </Link>

      {/* Navigation */}
      <nav className="flex-1 px-3 mt-8">
        <ul className="space-y-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            
            return (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                    isActive
                      ? 'bg-[#7033FF]/20 text-[#EAEDFA] border-l-2 border-[#7033FF]'
                      : 'text-[#EAEDFA]/60 hover:text-[#EAEDFA] hover:bg-white/5'
                  }`}
                >
                  <Icon />
                  <span className="font-medium font-['Plus_Jakarta_Sans']">{item.name}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Footer */}
      <div className="px-6 py-4 border-t border-[#EAEDFA]/10">
        <p className="text-xs text-[#EAEDFA]/40 font-['Plus_Jakarta_Sans']">
          © 2024 AREEB
        </p>
      </div>
    </div>
  );
}
