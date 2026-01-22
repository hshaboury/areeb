import apiClient from '../utils/apiClient';

/**
 * Profile Service
 * Handles all profile-related API calls
 */

/**
 * Get user profile
 * @returns {Promise<object>} - User profile data
 */
export const getProfile = async () => {
  const response = await apiClient.get('/profile');
  return response.data;
};

/**
 * Update user profile
 * @param {object} profileData - Profile data to update
 * @returns {Promise<object>} - Updated profile data
 */
export const updateProfile = async (profileData) => {
  const response = await apiClient.put('/profile', profileData);
  return response.data;
};

/**
 * Complete onboarding process
 * @param {object} onboardingData - Onboarding data
 * @param {array} onboardingData.learningGoals - User's learning goals
 * @param {string} onboardingData.studyStyle - User's study style
 * @param {number} onboardingData.availableHours - Available hours per week
 * @param {string} onboardingData.selectedTrack - Selected learning track
 * @param {string} onboardingData.skillLevel - User's skill level
 * @returns {Promise<object>} - Completion response
 */
export const completeOnboarding = async (onboardingData) => {
  const response = await apiClient.post('/profile/onboarding', onboardingData);
  return response.data;
};
