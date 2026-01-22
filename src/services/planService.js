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
  try {
    const response = await apiClient.post('/plans', data);
    return response.data;
  } catch (error) {
    throw error;
  }
};

/**
 * Get current learning plan
 * @returns {Promise<object>} - Current plan data
 */
export const getCurrentPlan = async () => {
  try {
    const response = await apiClient.get('/plans/current');
    return response.data;
  } catch (error) {
    throw error;
  }
};

/**
 * Get learning roadmap
 * @returns {Promise<object>} - Roadmap data
 */
export const getRoadmap = async () => {
  try {
    const response = await apiClient.get('/roadmap');
    return response.data;
  } catch (error) {
    throw error;
  }
};
