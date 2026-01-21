import React from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import ProgressStats from './components/ProgressStats';
import CurrentPhase from './components/CurrentPhase';
import NextTasks from './components/NextTasks';
import RoadmapPreview from './components/RoadmapPreview';
import { mockDashboardData, getCurrentPhase } from '../../data/mockDashboard';

export default function Home() {
  const { selectedPlan, stats, phases } = mockDashboardData;
  const currentPhase = getCurrentPhase(phases);

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
              Learning Roadmap
            </h1>
            <p className="text-[#EAEDFA]/70 font-['Plus_Jakarta_Sans']">
              {selectedPlan.name} - {selectedPlan.duration} • {selectedPlan.hoursPerWeek} hours per week
            </p>
          </div>

          {/* Progress Stats */}
          <ProgressStats stats={stats} />

          {/* Main Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Left Column - Current Phase & Tasks */}
            <div className="lg:col-span-2 space-y-6">
              {/* Current Phase */}
              <CurrentPhase phase={currentPhase} />

              {/* Next Tasks */}
              {currentPhase && currentPhase.tasks && (
                <NextTasks 
                  tasks={currentPhase.tasks} 
                  title={`Phase ${currentPhase.id}: Next Steps`}
                />
              )}
            </div>

            {/* Right Column - Roadmap Preview */}
            <div className="lg:col-span-1">
              <RoadmapPreview phases={phases} />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
