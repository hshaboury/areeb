import express from 'express';
import { createPlan, getCurrentPlan, getRoadmap } from '../controllers/planController.js';
import protect from '../middleware/auth.js';

const router = express.Router();

// All routes are protected
router.use(protect);

router.post('/', createPlan);
router.get('/current', getCurrentPlan);
router.get('/roadmap', getRoadmap);

export default router;
