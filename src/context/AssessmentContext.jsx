import React, { createContext, useContext, useState } from 'react';

// Assessment flow steps - for route protection
export const ASSESSMENT_STEPS = {
  PROFILE: 0,
  QUICK_SKILL_CHECK: 1,
  TOPICS_ANALYSIS: 2,
  AI_QUIZ: 3,
  AI_QUIZ_REVIEW: 4,
  CHOOSE_PLAN: 5,
  ROADMAP: 6,
  DASHBOARD: 7
};

// Create the Assessment Context
const AssessmentContext = createContext();

// Custom hook to use the Assessment Context
// eslint-disable-next-line react-refresh/only-export-components
export const useAssessment = () => {
  const context = useContext(AssessmentContext);
  if (!context) {
    throw new Error('useAssessment must be used within AssessmentProvider');
  }
  return context;
};

// Assessment Provider Component
export const AssessmentProvider = ({ children }) => {
  // Step tracking (for route protection)
  const [currentStep, setCurrentStep] = useState(ASSESSMENT_STEPS.PROFILE);

  // Selected track from profile setup
  const [selectedTrack, setSelectedTrack] = useState('');

  // Quick Skill Check results
  const [quickCheckResult, setQuickCheckResult] = useState({
    answers: {},
    score: 0,
    completedAt: null
  });

  // Topics Analysis results
  const [topicsAnalysis, setTopicsAnalysis] = useState({
    proficient: [],
    needsReview: [],
    needsLearning: []
  });

  // AI Quiz answers and results
  const [aiQuizAnswers, setAiQuizAnswers] = useState({});
  const [aiQuizResults, setAiQuizResults] = useState({
    score: 0,
    total: 0,
    correct: 0,
    wrong: 0,
    needsLearning: 0,
    strengths: [],
    weaknesses: []
  });

  // Selected learning plan
  const [selectedPlan, setSelectedPlan] = useState('');

  // Dashboard progress data
  const [dashboardProgress, setDashboardProgress] = useState({
    currentPhaseId: 1,
    completedTasks: [],
    phaseProgress: {}
  });

  // Helper function to check if user can access a specific step
  const canAccessStep = (step) => {
    return step <= currentStep + 1; // Allow access to current step and next step only
  };

  // Helper function to complete a step and unlock the next one
  const completeStep = (step) => {
    if (step >= currentStep) {
      setCurrentStep(step);
    }
  };

  // Reset all assessment data (useful for starting over)
  const resetAssessment = () => {
    setCurrentStep(ASSESSMENT_STEPS.PROFILE);
    setSelectedTrack('');
    setQuickCheckResult({ answers: {}, score: 0, completedAt: null });
    setTopicsAnalysis({ proficient: [], needsReview: [], needsLearning: [] });
    setAiQuizAnswers({});
    setAiQuizResults({ score: 0, total: 0, correct: 0, wrong: 0, needsLearning: 0, strengths: [], weaknesses: [] });
    setSelectedPlan('');
  };

  const value = {
    // State
    currentStep,
    selectedTrack,
    quickCheckResult,
    topicsAnalysis,
    aiQuizAnswers,
    aiQuizResults,
    selectedPlan,
    dashboardProgress,
    
    // Setters
    setCurrentStep,
    setSelectedTrack,
    setQuickCheckResult,
    setTopicsAnalysis,
    setAiQuizAnswers,
    setAiQuizResults,
    setSelectedPlan,
    setDashboardProgress,
    
    // Helper functions
    canAccessStep,
    completeStep,
    resetAssessment
  };

  return (
    <AssessmentContext.Provider value={value}>
      {children}
    </AssessmentContext.Provider>
  );
};

export default AssessmentContext;
