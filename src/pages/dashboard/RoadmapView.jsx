import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import PhaseCard from './components/PhaseCard';
import { getRoadmap } from '../../services/planService';
import { markTaskComplete, updatePhaseProgress } from '../../services/progressService';
import { mockDashboardData } from '../../data/mockDashboard';

export default function RoadmapView() {
  const [roadmapData, setRoadmapData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [processingTask, setProcessingTask] = useState(null);

  useEffect(() => {
    fetchRoadmapData();
  }, []);

  const fetchRoadmapData = async () => {
    try {
      setLoading(true);
      setError(null);
      
      const roadmap = await getRoadmap();
      
      setRoadmapData(roadmap);
    } catch (err) {
      console.error('Error fetching roadmap data:', err);
      setError('Failed to load roadmap data');
    } finally {
      setLoading(false);
    }
  };

  const handleTaskComplete = async (taskId) => {
    try {
      setProcessingTask(taskId);
      await markTaskComplete({ taskId });
      // Refresh roadmap data after marking task complete
      await fetchRoadmapData();
    } catch (err) {
      console.error('Error marking task complete:', err);
      alert('Failed to mark task as complete. Please try again.');
    } finally {
      setProcessingTask(null);
    }
  };

  const handlePhaseProgressUpdate = async (phaseId, progress) => {
    try {
      await updatePhaseProgress({ phaseId, progress });
      // Refresh roadmap data after updating phase progress
      await fetchRoadmapData();
    } catch (err) {
      console.error('Error updating phase progress:', err);
      alert('Failed to update phase progress. Please try again.');
    }
  };

  // Use API data if available, otherwise fallback to mock data
  // const { selectedPlan, phases } = roadmapData || mockDashboardData;
  // const track = roadmapData?.user?.track || mockDashboardData.user.track;
  const resolvedData = roadmapData?.phases?.length ? roadmapData : mockDashboardData;
  const selectedPlan = resolvedData?.selectedPlan || mockDashboardData.selectedPlan;
  const phases = Array.isArray(resolvedData?.phases) ? resolvedData.phases : mockDashboardData.phases;
  const track = roadmapData?.user?.track || mockDashboardData.user.track;

  if (loading) {
    return (
      <div className="min-h-screen bg-[#0A0F2B] flex">
        <Sidebar />
        <div className="flex-1 ml-64">
          <Header />
          <main className="p-8 flex items-center justify-center">
            <div className="text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#7033FF] mx-auto mb-4"></div>
              <p className="text-[#EAEDFA]/70 font-['Plus_Jakarta_Sans']">Loading roadmap...</p>
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
              Complete Learning Roadmap
            </h1>
            <p className="text-[#EAEDFA]/70 font-['Plus_Jakarta_Sans']">
              {selectedPlan?.name || 'Learning Plan'} - {selectedPlan?.duration || '--'} • {selectedPlan?.hoursPerWeek || '--'} hours per week
            </p>
          </div>

          {/* All Phases */}
          <div className="space-y-6">
            {Array.isArray(phases) && phases.map((phase) => (
              <PhaseCard 
                key={phase.id} 
                phase={phase} 
                isExpanded={true}
                onTaskComplete={handleTaskComplete}
                onPhaseProgressUpdate={handlePhaseProgressUpdate}
                processingTask={processingTask}
              />
            ))}
          </div>

          {/* Footer Info */}
          <div className="mt-8 p-6 bg-white/5 border border-[#EAEDFA]/10 rounded-xl">
            <p className="text-[#EAEDFA]/70 font-['Plus_Jakarta_Sans'] text-center">
              Complete all phases to master {track}
            </p>
          </div>
        </main>
      </div>
    </div>
  );
}
