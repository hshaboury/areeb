import express from 'express';
import {
  submitQuickCheck,
  analyzeTopicsEndpoint,
  getAIQuiz,
  submitAIQuiz,
  getAssessmentResults
} from '../controllers/assessmentController.js';
import protect from '../middleware/auth.js';

const router = express.Router();

// All routes are protected
router.use(protect);

router.post('/quick-check', submitQuickCheck);
router.post('/analyze-topics', analyzeTopicsEndpoint);
router.get('/ai-quiz', getAIQuiz);
router.post('/ai-quiz/submit', submitAIQuiz);
router.get('/results', getAssessmentResults);

export default router;
