import React, { createContext, useContext, useState } from 'react';

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
  // 0: Profile, 1: Quick Skill Check, 2: Topics Analysis, 3: AI Quiz, 4: AI Quiz Review, 5: Choose Plan, 6: Roadmap, 7: Dashboard
  const [currentStep, setCurrentStep] = useState(0);

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
    setCurrentStep(0);
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
    
    // Setters
    setCurrentStep,
    setSelectedTrack,
    setQuickCheckResult,
    setTopicsAnalysis,
    setAiQuizAnswers,
    setAiQuizResults,
    setSelectedPlan,
    
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
