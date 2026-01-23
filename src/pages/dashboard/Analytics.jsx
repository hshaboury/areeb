import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import { getAchievementStats, getProgress } from '../../services/progressService';

export default function Analytics() {
  const [stats, setStats] = useState(null);
  const [progress, setProgress] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAnalytics = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const [statsData, progressData] = await Promise.all([
          getAchievementStats(),
          getProgress()
        ]);
        
        setStats(statsData);
        setProgress(progressData);
      } catch (err) {
        console.error('Error fetching analytics data:', err);
        setError('Failed to load analytics data');
      } finally {
        setLoading(false);
      }
    };

    fetchAnalytics();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#0A0F2B] flex">
        <Sidebar />
        <div className="flex-1 ml-64">
          <Header />
          <main className="p-8 flex items-center justify-center">
            <div className="text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#7033FF] mx-auto mb-4"></div>
              <p className="text-[#EAEDFA]/70 font-['Plus_Jakarta_Sans']">Loading analytics...</p>
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
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-[#EAEDFA] font-['Space_Grotesk'] mb-2">
              Analytics
            </h1>
            <p className="text-[#EAEDFA]/70 font-['Plus_Jakarta_Sans']">
              Track your learning progress and achievements
            </p>
          </div>

          {/* Analytics Grid */}
          {stats && progress ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Learning Streak */}
              <div className="bg-white/5 border border-[#EAEDFA]/10 rounded-xl p-6">
                <h3 className="text-sm font-medium text-[#EAEDFA]/60 font-['Plus_Jakarta_Sans'] mb-2">
                  Learning Streak
                </h3>
                <p className="text-3xl font-bold text-[#EAEDFA] font-['Space_Grotesk']">
                  {stats.learningStreak || 0} days
                </p>
              </div>

              {/* Total Tasks Completed */}
              <div className="bg-white/5 border border-[#EAEDFA]/10 rounded-xl p-6">
                <h3 className="text-sm font-medium text-[#EAEDFA]/60 font-['Plus_Jakarta_Sans'] mb-2">
                  Tasks Completed
                </h3>
                <p className="text-3xl font-bold text-[#EAEDFA] font-['Space_Grotesk']">
                  {stats.totalTasksCompleted || 0}
                </p>
              </div>

              {/* Completion Rate */}
              <div className="bg-white/5 border border-[#EAEDFA]/10 rounded-xl p-6">
                <h3 className="text-sm font-medium text-[#EAEDFA]/60 font-['Plus_Jakarta_Sans'] mb-2">
                  Completion Rate
                </h3>
                <p className="text-3xl font-bold text-[#EAEDFA] font-['Space_Grotesk']">
                  {stats.completionRate || 0}%
                </p>
              </div>

              {/* Time Spent */}
              <div className="bg-white/5 border border-[#EAEDFA]/10 rounded-xl p-6">
                <h3 className="text-sm font-medium text-[#EAEDFA]/60 font-['Plus_Jakarta_Sans'] mb-2">
                  Time Spent
                </h3>
                <p className="text-3xl font-bold text-[#EAEDFA] font-['Space_Grotesk']">
                  {stats.totalTimeSpent || 0}h
                </p>
              </div>
            </div>
          ) : (
            <div className="flex items-center justify-center min-h-[40vh]">
              <div className="text-center">
                <p className="text-[#EAEDFA]/70 font-['Plus_Jakarta_Sans'] text-lg">
                  No analytics data available yet. Start learning to see your stats!
                </p>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
