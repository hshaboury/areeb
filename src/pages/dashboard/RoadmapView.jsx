import React from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import PhaseCard from './components/PhaseCard';
import { mockDashboardData } from '../../data/mockDashboard';

export default function RoadmapView() {
  const { selectedPlan, phases } = mockDashboardData;

  return (
    <div className="min-h-screen bg-[#0A0F2B] flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 ml-64">
        {/* Header */}
        <Header />

        {/* Content Area */}
        <main className="p-8">
          {/* Page Title */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-[#EAEDFA] font-['Space_Grotesk'] mb-2">
              Complete Learning Roadmap
            </h1>
            <p className="text-[#EAEDFA]/70 font-['Plus_Jakarta_Sans']">
              {selectedPlan.name} - {selectedPlan.duration} • {selectedPlan.hoursPerWeek} hours per week
            </p>
          </div>

          {/* All Phases */}
          <div className="space-y-6">
            {phases.map((phase) => (
              <PhaseCard key={phase.id} phase={phase} isExpanded={true} />
            ))}
          </div>

          {/* Footer Info */}
          <div className="mt-8 p-6 bg-white/5 border border-[#EAEDFA]/10 rounded-xl">
            <p className="text-[#EAEDFA]/70 font-['Plus_Jakarta_Sans'] text-center">
              Complete all phases to master {mockDashboardData.user.track}
            </p>
          </div>
        </main>
      </div>
    </div>
  );
}
