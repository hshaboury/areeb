import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import ProgressStats from './components/ProgressStats';
import CurrentPhase from './components/CurrentPhase';
import NextTasks from './components/NextTasks';
import RoadmapPreview from './components/RoadmapPreview';
import { getProgress, getAchievementStats } from '../../services/progressService';
import { mockDashboardData, getCurrentPhase } from '../../data/mockDashboard';

export default function Home() {
  const [progressData, setProgressData] = useState(null);
  const [achievementStats, setAchievementStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const [progress, stats] = await Promise.all([
          getProgress(),
          getAchievementStats()
        ]);
        
        setProgressData(progress);
        setAchievementStats(stats);
      } catch (err) {
        console.error('Error fetching dashboard data:', err);
        setError('Failed to load dashboard data');
      } finally {
        setLoading(false);
      }
    };

    fetchDashboardData();
  }, []);

  // Use API data if available, otherwise fallback to mock data
  // const { selectedPlan, stats, phases } = progressData || mockDashboardData;
  const {
    selectedPlan = mockDashboardData.selectedPlan,
    stats,
    phases
  } = progressData || mockDashboardData;

  const currentPhase = progressData?.phases ? getCurrentPhase(progressData.phases) : getCurrentPhase(mockDashboardData.phases);
  const displayStats = achievementStats || stats;

  if (loading) {
    return (
      <div className="min-h-screen bg-[#0A0F2B] flex">
        <Sidebar />
        <div className="flex-1 ml-64">
          <Header />
          <main className="p-8 flex items-center justify-center">
            <div className="text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#7033FF] mx-auto mb-4"></div>
              <p className="text-[#EAEDFA]/70 font-['Plus_Jakarta_Sans']">Loading dashboard...</p>
            </div>
          </main>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-[#0A0F2B] flex">
        <Sidebar />
        <div className="flex-1 ml-64">
          <Header />
          <main className="p-8">
            <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-6">
              <p className="text-red-400 font-['Plus_Jakarta_Sans']">{error}</p>
            </div>
          </main>
        </div>
      </div>
    );
  }

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
          <ProgressStats stats={displayStats} />

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
