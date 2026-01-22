import { generateAIQuiz, generateRecommendations } from '../services/aiService.js';
import Assessment from '../models/Assessment.js';
import Profile from '../models/Profile.js';

// @desc    Generate AI quiz
// @route   POST /api/ai/generate-quiz
// @access  Private
export const generateQuiz = async (req, res, next) => {
  try {
    const { track, topicsAnalysis } = req.body;

    const profile = await Profile.findOne({ userId: req.user._id });
    const selectedTrack = track || profile?.selectedTrack || 'frontend';

    const questions = await generateAIQuiz(selectedTrack, topicsAnalysis);

    res.json({
      success: true,
      questions
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Analyze skills
// @route   POST /api/ai/analyze-skills
// @access  Private
export const analyzeSkills = async (req, res, next) => {
  try {
    const { answers, track } = req.body;

    // This would call an AI service to analyze the user's skills
    // For now, return a mock response
    
    res.json({
      success: true,
      message: 'Skills analyzed successfully',
      analysis: {
        overallLevel: 'intermediate',
        strengths: ['Problem Solving', 'Code Structure'],
        weaknesses: ['Testing', 'Performance Optimization'],
        recommendations: [
          'Focus on writing unit tests',
          'Learn about code optimization techniques',
          'Practice with real-world projects'
        ]
      }
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Get AI recommendations
// @route   POST /api/ai/recommend
// @access  Private
export const getRecommendations = async (req, res, next) => {
  try {
    const profile = await Profile.findOne({ userId: req.user._id });
    const assessment = await Assessment.findOne({ userId: req.user._id });

    if (!assessment) {
      return res.status(400).json({
        success: false,
        message: 'Please complete the assessment first'
      });
    }

    const recommendations = await generateRecommendations(profile, assessment);

    res.json({
      success: true,
      ...recommendations
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Summarize learning material
// @route   POST /api/ai/summarize
// @access  Private
export const summarizeMaterial = async (req, res, next) => {
  try {
    const { content } = req.body;

    if (!content) {
      return res.status(400).json({
        success: false,
        message: 'Content is required'
      });
    }

    // Mock summarization
    // In the future, this would use AI to summarize content
    
    res.json({
      success: true,
      summary: 'This is a mock summary of the content. In production, this would use AI to generate a concise summary.',
      keyPoints: [
        'Key concept 1',
        'Key concept 2',
        'Key concept 3'
      ]
    });
  } catch (error) {
    next(error);
  }
};
