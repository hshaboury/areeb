import express from 'express';
import { getProfile, updateProfile, completeOnboarding } from '../controllers/profileController.js';
import protect from '../middleware/auth.js';

const router = express.Router();

// All routes are protected
router.use(protect);

router.get('/', getProfile);
router.put('/', updateProfile);
router.post('/onboarding', completeOnboarding);

export default router;
