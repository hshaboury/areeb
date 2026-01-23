import apiClient from '../utils/apiClient';

/**
 * Learning Plan Service
 * Handles all learning plan-related API calls
 */

/**
 * Create a new learning plan
 * @param {object} data - Plan data
 * @param {string} data.planType - Type of plan ("intensive", "balanced", or "relaxed")
 * @returns {Promise<object>} - Created plan data
 */
export const createPlan = async (data) => {
  const response = await apiClient.post('/plans', data);
  return response.data;
};

/**
 * Get current learning plan
 * @returns {Promise<object>} - Current plan data
 */
export const getCurrentPlan = async () => {
  const response = await apiClient.get('/plans/current');
  return response.data;
};

/**
 * Get learning roadmap
 * @returns {Promise<object>} - Roadmap data
 */
export const getRoadmap = async () => {
  const response = await apiClient.get('/plans/roadmap');
  return response.data;
};
