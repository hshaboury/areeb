// Auth utility functions for token and user management

/**
 * Store JWT token in localStorage
 * @param {string} token - JWT token
 */
export const setAuthToken = (token) => {
  if (token) {
    localStorage.setItem('token', token);
  } else {
    localStorage.removeItem('token');
  }
};

/**
 * Get JWT token from localStorage
 * @returns {string|null} - JWT token or null
 */
export const getAuthToken = () => {
  return localStorage.getItem('token');
};

/**
 * Store user data in localStorage
 * @param {object} user - User object
 */
export const setUser = (user) => {
  if (user) {
    localStorage.setItem('user', JSON.stringify(user));
  } else {
    localStorage.removeItem('user');
  }
};

/**
 * Get user data from localStorage
 * @returns {object|null} - User object or null
 */
export const getUser = () => {
  const user = localStorage.getItem('user');
  return user ? JSON.parse(user) : null;
};

/**
 * Check if user is authenticated
 * @returns {boolean} - True if token exists
 */
export const isAuthenticated = () => {
  return !!getAuthToken();
};

/**
 * Clear all auth data (logout)
 */
export const clearAuth = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('user');
};

/**
 * Handle API error and return user-friendly message
 * @param {object} error - Error object from API
 * @returns {string} - User-friendly error message
 */
export const handleApiError = (error) => {
  if (error.response?.data?.message) {
    return error.response.data.message;
  } else if (error.message) {
    return error.message;
  } else {
    return 'An unexpected error occurred. Please try again.';
  }
};
