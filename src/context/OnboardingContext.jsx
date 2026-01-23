import React, { createContext, useContext, useState } from 'react';

// Create Onboarding Context
const OnboardingContext = createContext();

// eslint-disable-next-line react-refresh/only-export-components
export const useOnboarding = () => {
  const context = useContext(OnboardingContext);
  if (!context) {
    throw new Error('useOnboarding must be used within OnboardingProvider');
  }
  return context;
};

export const OnboardingProvider = ({ children }) => {
  const [onboardingData, setOnboardingData] = useState({
    learningGoals: [],
    studyStyle: '',
    availableHours: null,
    selectedTrack: '',
    skillLevel: '',
    name: '',
    linkedIn: '',
    github: ''
  });

  const updateOnboardingData = (data) => {
    setOnboardingData(prev => ({ ...prev, ...data }));
  };

  const resetOnboardingData = () => {
    setOnboardingData({
      learningGoals: [],
      studyStyle: '',
      availableHours: null,
      selectedTrack: '',
      skillLevel: '',
      name: '',
      linkedIn: '',
      github: ''
    });
  };

  const value = {
    onboardingData,
    updateOnboardingData,
    resetOnboardingData
  };

  return (
    <OnboardingContext.Provider value={value}>
      {children}
    </OnboardingContext.Provider>
  );
};

export default OnboardingContext;
