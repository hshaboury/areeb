import jwt from 'jsonwebtoken';

// Generate JWT token
export const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRE || '30d'
  });
};

// Create response with user data and token
export const createAuthResponse = (user, token) => {
  return {
    success: true,
    token,
    user: {
      id: user._id,
      email: user.email,
      name: user.name || ''
    }
  };
};
