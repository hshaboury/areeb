import apiClient from '../utils/apiClient';

/**
 * Progress Service
 * Handles all progress tracking-related API calls
 */

/**
 * Get user progress
 * @returns {Promise<object>} - User progress data
 */
export const getProgress = async () => {
  try {
    const response = await apiClient.get('/progress');
    return response.data;
  } catch (error) {
    throw error;
  }
};

/**
 * Mark a task as complete
 * @param {object} data - Task data
 * @param {string} data.taskId - Task ID to mark as complete
 * @returns {Promise<object>} - Updated progress data
 */
export const markTaskComplete = async (data) => {
  try {
    const response = await apiClient.post('/progress/task', data);
    return response.data;
  } catch (error) {
    throw error;
  }
};

/**
 * Update phase progress
 * @param {object} data - Phase data
 * @param {string} data.phaseId - Phase ID
 * @param {number} data.progress - Progress percentage (0-100)
 * @returns {Promise<object>} - Updated phase progress
 */
export const updatePhaseProgress = async (data) => {
  try {
    const response = await apiClient.put('/progress/phase', data);
    return response.data;
  } catch (error) {
    throw error;
  }
};

/**
 * Get achievement stats
 * @returns {Promise<object>} - Achievement statistics
 */
export const getAchievementStats = async () => {
  try {
    const response = await apiClient.get('/progress/stats');
    return response.data;
  } catch (error) {
    throw error;
  }
};
