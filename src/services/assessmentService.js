import apiClient from '../utils/apiClient';

/**
 * Assessment Service
 * Handles all assessment-related API calls
 */

/**
 * Submit quick skill check
 * @param {object} data - Quick check data
 * @param {object} data.answers - User answers (e.g., {"1": "a", "2": "b"})
 * @param {string} data.track - Selected track
 * @returns {Promise<object>} - Quick check results
 */
export const submitQuickCheck = async (data) => {
  const response = await apiClient.post('/assessment/quick-check', data);
  return response.data;
};

/**
 * Analyze topics based on quick check results
 * @param {object} data - Analysis data
 * @param {array} data.proficientTopics - Topics user is proficient in
 * @param {array} data.needsReviewTopics - Topics that need review
 * @param {array} data.needsLearningTopics - Topics to learn
 * @returns {Promise<object>} - Analysis results
 */
export const analyzeTopics = async (data) => {
  const response = await apiClient.post('/assessment/analyze-topics', data);
  return response.data;
};

/**
 * Get AI-generated quiz
 * @returns {Promise<object>} - AI quiz data
 */
export const getAIQuiz = async () => {
  const response = await apiClient.get('/assessment/ai-quiz');
  return response.data;
};

/**
 * Submit AI quiz answers
 * @param {object} data - Quiz submission data
 * @param {object} data.answers - User answers (e.g., {"1": "a", "2": "b"})
 * @returns {Promise<object>} - Quiz results
 */
export const submitAIQuiz = async (data) => {
  const response = await apiClient.post('/assessment/ai-quiz/submit', data);
  return response.data;
};

/**
 * Get assessment results
 * @returns {Promise<object>} - Complete assessment results
 */
export const getAssessmentResults = async () => {
  const response = await apiClient.get('/assessment/results');
  return response.data;
};
