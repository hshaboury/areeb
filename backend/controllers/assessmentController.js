import Assessment from '../models/Assessment.js';
import Profile from '../models/Profile.js';
import { quizData, getQuestionsByTrack } from '../data/mockQuiz.js';
import { generateAIQuiz, analyzeTopics, analyzeAIQuizResults } from '../services/aiService.js';

// @desc    Submit quick skill check
// @route   POST /api/assessment/quick-check
// @access  Private
export const submitQuickCheck = async (req, res, next) => {
  try {
    const { answers, track } = req.body;

    // Get profile to check track
    const profile = await Profile.findOne({ userId: req.user._id });
    const selectedTrack = track || profile?.selectedTrack || 'frontend';

    // Calculate score
    const questions = getQuestionsByTrack(selectedTrack);
    let correct = 0;
    
    Object.entries(answers).forEach(([questionId, answerId]) => {
      const question = questions.find(q => q.id === parseInt(questionId));
      if (question) {
        const answer = question.answers.find(a => a.id === answerId);
        if (answer && answer.isCorrect) {
          correct++;
        }
      }
    });

    const score = Math.round((correct / questions.length) * 100);

    // Save or update assessment
    const assessment = await Assessment.findOneAndUpdate(
      { userId: req.user._id },
      {
        trackSelected: selectedTrack,
        'quickSkillCheck.answers': answers,
        'quickSkillCheck.score': score,
        'quickSkillCheck.completedAt': new Date()
      },
      { new: true, upsert: true }
    );

    res.json({
      success: true,
      message: 'Quick skill check submitted successfully',
      result: {
        score,
        correct,
        total: questions.length
      }
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Analyze topics based on quick check
// @route   POST /api/assessment/analyze-topics
// @access  Private
export const analyzeTopicsEndpoint = async (req, res, next) => {
  try {
    const assessment = await Assessment.findOne({ userId: req.user._id });

    if (!assessment || !assessment.quickSkillCheck.completedAt) {
      return res.status(400).json({
        success: false,
        message: 'Please complete the quick skill check first'
      });
    }

    const { trackSelected, quickSkillCheck } = assessment;

    // Use AI service to analyze topics
    const analysis = await analyzeTopics(
      trackSelected,
      quickSkillCheck.answers,
      quickSkillCheck.score
    );

    // Save analysis
    assessment.topicsAnalysis = analysis;
    await assessment.save();

    res.json({
      success: true,
      analysis
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Get AI quiz questions
// @route   GET /api/assessment/ai-quiz
// @access  Private
export const getAIQuiz = async (req, res, next) => {
  try {
    const assessment = await Assessment.findOne({ userId: req.user._id });

    if (!assessment || !assessment.topicsAnalysis.needsLearning) {
      return res.status(400).json({
        success: false,
        message: 'Please complete topics analysis first'
      });
    }

    const { trackSelected, topicsAnalysis } = assessment;

    // Generate AI quiz
    const questions = await generateAIQuiz(trackSelected, topicsAnalysis);

    // Save questions to assessment
    assessment.aiQuiz.questions = questions;
    await assessment.save();

    res.json({
      success: true,
      questions
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Submit AI quiz answers
// @route   POST /api/assessment/ai-quiz/submit
// @access  Private
export const submitAIQuiz = async (req, res, next) => {
  try {
    const { answers } = req.body;

    const assessment = await Assessment.findOne({ userId: req.user._id });

    if (!assessment || !assessment.aiQuiz.questions.length) {
      return res.status(400).json({
        success: false,
        message: 'Please get the AI quiz first'
      });
    }

    // Analyze results
    const results = analyzeAIQuizResults(assessment.aiQuiz.questions, answers);

    // Save results
    assessment.aiQuiz.answers = answers;
    assessment.aiQuiz.results = results;
    assessment.aiQuiz.completedAt = new Date();
    await assessment.save();

    res.json({
      success: true,
      message: 'AI quiz submitted successfully',
      results
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Get assessment results
// @route   GET /api/assessment/results
// @access  Private
export const getAssessmentResults = async (req, res, next) => {
  try {
    const assessment = await Assessment.findOne({ userId: req.user._id });

    if (!assessment) {
      return res.status(404).json({
        success: false,
        message: 'No assessment found'
      });
    }

    res.json({
      success: true,
      assessment: {
        trackSelected: assessment.trackSelected,
        quickSkillCheck: assessment.quickSkillCheck,
        topicsAnalysis: assessment.topicsAnalysis,
        aiQuiz: {
          results: assessment.aiQuiz.results,
          completedAt: assessment.aiQuiz.completedAt
        }
      }
    });
  } catch (error) {
    next(error);
  }
};
