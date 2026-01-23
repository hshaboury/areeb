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
  const response = await apiClient.get('/progress');
  return response.data;
};

/**
 * Mark a task as complete
 * @param {object} data - Task data
 * @param {string} data.taskId - Task ID to mark as complete
 * @returns {Promise<object>} - Updated progress data
 */
export const markTaskComplete = async (data) => {
  const response = await apiClient.post('/progress/task', data);
  return response.data;
};

/**
 * Update phase progress
 * @param {object} data - Phase data
 * @param {string} data.phaseId - Phase ID
 * @param {number} data.progress - Progress percentage (0-100)
 * @returns {Promise<object>} - Updated phase progress
 */
export const updatePhaseProgress = async (data) => {
  const response = await apiClient.put('/progress/phase', data);
  return response.data;
};

/**
 * Get achievement stats
 * @returns {Promise<object>} - Achievement statistics
 */
export const getAchievementStats = async () => {
  const response = await apiClient.get('/progress/stats');
  return response.data;
};
