import apiClient from '../utils/apiClient';
import { setAuthToken, setUser } from '../utils/auth';

/**
 * Authentication Service
 * Handles all authentication-related API calls
 */

/**
 * Register a new user
 * @param {object} userData - User registration data
 * @param {string} userData.email - User email
 * @param {string} userData.password - User password
 * @param {string} userData.faculty - User faculty
 * @param {string} userData.major - User major
 * @returns {Promise<object>} - User data and token
 */
export const register = async (userData) => {
  try {
    const response = await apiClient.post('/auth/register', userData);
    
    if (response.data.success && response.data.token) {
      // Store token and user data
      setAuthToken(response.data.token);
      setUser(response.data.user);
    }
    
    return response.data;
  } catch (error) {
    throw error;
  }
};

/**
 * Login user
 * @param {object} credentials - User login credentials
 * @param {string} credentials.email - User email
 * @param {string} credentials.password - User password
 * @returns {Promise<object>} - User data and token
 */
export const login = async (credentials) => {
  try {
    const response = await apiClient.post('/auth/login', credentials);
    
    if (response.data.success && response.data.token) {
      // Store token and user data
      setAuthToken(response.data.token);
      setUser(response.data.user);
    }
    
    return response.data;
  } catch (error) {
    throw error;
  }
};

/**
 * Get current authenticated user
 * @returns {Promise<object>} - Current user data
 */
export const getCurrentUser = async () => {
  try {
    const response = await apiClient.get('/auth/me');
    
    if (response.data.success && response.data.user) {
      // Update stored user data
      setUser(response.data.user);
    }
    
    return response.data;
  } catch (error) {
    throw error;
  }
};
