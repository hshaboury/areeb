import express from 'express';
import {
  generateQuiz,
  analyzeSkills,
  getRecommendations,
  summarizeMaterial
} from '../controllers/aiController.js';
import protect from '../middleware/auth.js';

const router = express.Router();

// All routes are protected
router.use(protect);

router.post('/generate-quiz', generateQuiz);
router.post('/analyze-skills', analyzeSkills);
router.post('/recommend', getRecommendations);
router.post('/summarize', summarizeMaterial);

export default router;
