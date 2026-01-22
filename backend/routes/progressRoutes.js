import express from 'express';
import { getProgress, completeTask, updatePhaseProgress, getStats } from '../controllers/progressController.js';
import protect from '../middleware/auth.js';

const router = express.Router();

// All routes are protected
router.use(protect);

router.get('/', getProgress);
router.post('/task', completeTask);
router.put('/phase', updatePhaseProgress);
router.get('/stats', getStats);

export default router;
