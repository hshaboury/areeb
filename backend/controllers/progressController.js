import Progress from '../models/Progress.js';
import Plan from '../models/Plan.js';

// @desc    Get user progress
// @route   GET /api/progress
// @access  Private
export const getProgress = async (req, res, next) => {
  try {
    const progress = await Progress.findOne({ userId: req.user._id });
    const plan = await Plan.findOne({ userId: req.user._id });

    if (!progress) {
      return res.status(404).json({
        success: false,
        message: 'No progress found'
      });
    }

    // Get current phase details from plan
    const currentPhase = plan?.phases.find(p => p.phaseId === progress.currentPhaseId);

    res.json({
      success: true,
      progress: {
        currentPhaseId: progress.currentPhaseId,
        currentPhase: currentPhase ? {
          id: currentPhase.phaseId,
          title: currentPhase.title,
          topics: currentPhase.topics,
          progress: progress.phaseProgress?.get(currentPhase.phaseId.toString())?.progress || 0
        } : null,
        completedTasks: progress.completedTasks,
        stats: progress.stats
      }
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Mark task as complete
// @route   POST /api/progress/task
// @access  Private
export const completeTask = async (req, res, next) => {
  try {
    const { taskId } = req.body;

    if (!taskId) {
      return res.status(400).json({
        success: false,
        message: 'Task ID is required'
      });
    }

    const progress = await Progress.findOne({ userId: req.user._id });

    if (!progress) {
      return res.status(404).json({
        success: false,
        message: 'Progress not found'
      });
    }

    // Add task to completed tasks if not already there
    if (!progress.completedTasks.includes(taskId)) {
      progress.completedTasks.push(taskId);
      await progress.save();
    }

    res.json({
      success: true,
      message: 'Task marked as complete',
      completedTasks: progress.completedTasks
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Update phase progress
// @route   PUT /api/progress/phase
// @access  Private
export const updatePhaseProgress = async (req, res, next) => {
  try {
    const { phaseId, progress: progressValue, completedTopics } = req.body;

    if (!phaseId) {
      return res.status(400).json({
        success: false,
        message: 'Phase ID is required'
      });
    }

    const progress = await Progress.findOne({ userId: req.user._id });

    if (!progress) {
      return res.status(404).json({
        success: false,
        message: 'Progress not found'
      });
    }

    // Update phase progress
    const phaseKey = phaseId.toString();
    const currentPhaseProgress = progress.phaseProgress.get(phaseKey) || {
      progress: 0,
      completedTopics: [],
      lastActivity: new Date()
    };

    progress.phaseProgress.set(phaseKey, {
      progress: progressValue !== undefined ? progressValue : currentPhaseProgress.progress,
      completedTopics: completedTopics || currentPhaseProgress.completedTopics,
      lastActivity: new Date()
    });

    await progress.save();

    res.json({
      success: true,
      message: 'Phase progress updated',
      phaseProgress: progress.phaseProgress.get(phaseKey)
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Get achievement stats
// @route   GET /api/progress/stats
// @access  Private
export const getStats = async (req, res, next) => {
  try {
    const progress = await Progress.findOne({ userId: req.user._id });

    if (!progress) {
      return res.status(404).json({
        success: false,
        message: 'No progress found'
      });
    }

    res.json({
      success: true,
      stats: progress.stats
    });
  } catch (error) {
    next(error);
  }
};
