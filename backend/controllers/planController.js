import Plan from '../models/Plan.js';
import Profile from '../models/Profile.js';
import Progress from '../models/Progress.js';

// Learning plan configurations
const PLAN_CONFIGS = {
  intensive: {
    duration: '8 weeks',
    hoursPerWeek: 15
  },
  balanced: {
    duration: '12 weeks',
    hoursPerWeek: 10
  },
  relaxed: {
    duration: '16 weeks',
    hoursPerWeek: 6
  }
};

// Generate roadmap phases based on track
const generateRoadmapPhases = (track) => {
  const roadmaps = {
    frontend: [
      {
        phaseId: 1,
        title: "Foundation Building",
        duration: "2-3 weeks",
        topics: ["HTML Basics", "CSS Fundamentals", "JavaScript Basics", "Git & GitHub", "Developer Tools"],
        isCompleted: false,
        progress: 0
      },
      {
        phaseId: 2,
        title: "React Fundamentals",
        duration: "3-4 weeks",
        topics: ["React Basics", "Components", "Props & State", "Hooks", "Event Handling", "Conditional Rendering"],
        isCompleted: false,
        progress: 0
      },
      {
        phaseId: 3,
        title: "State Management",
        duration: "2-3 weeks",
        topics: ["Context API", "Redux Basics", "Redux Toolkit", "Data Fetching"],
        isCompleted: false,
        progress: 0
      },
      {
        phaseId: 4,
        title: "Advanced Patterns",
        duration: "3-4 weeks",
        topics: ["Performance Optimization", "Testing", "TypeScript", "Best Practices", "Deployment"],
        isCompleted: false,
        progress: 0
      }
    ],
    backend: [
      {
        phaseId: 1,
        title: "Server Basics",
        duration: "2-3 weeks",
        topics: ["Node.js Fundamentals", "Express.js", "HTTP Methods", "REST APIs"],
        isCompleted: false,
        progress: 0
      },
      {
        phaseId: 2,
        title: "Database Integration",
        duration: "3-4 weeks",
        topics: ["MongoDB Basics", "Mongoose", "Database Design", "CRUD Operations"],
        isCompleted: false,
        progress: 0
      },
      {
        phaseId: 3,
        title: "Authentication & Security",
        duration: "2-3 weeks",
        topics: ["JWT", "Password Hashing", "Authorization", "Security Best Practices"],
        isCompleted: false,
        progress: 0
      },
      {
        phaseId: 4,
        title: "Advanced Backend",
        duration: "3-4 weeks",
        topics: ["API Documentation", "Testing", "Deployment", "Performance"],
        isCompleted: false,
        progress: 0
      }
    ],
    fullstack: [
      {
        phaseId: 1,
        title: "Frontend Foundations",
        duration: "3-4 weeks",
        topics: ["HTML/CSS/JS", "React Basics", "Component Design", "State Management"],
        isCompleted: false,
        progress: 0
      },
      {
        phaseId: 2,
        title: "Backend Foundations",
        duration: "3-4 weeks",
        topics: ["Node.js", "Express", "REST APIs", "MongoDB"],
        isCompleted: false,
        progress: 0
      },
      {
        phaseId: 3,
        title: "Full-Stack Integration",
        duration: "3-4 weeks",
        topics: ["API Integration", "Authentication", "CORS", "Data Flow"],
        isCompleted: false,
        progress: 0
      },
      {
        phaseId: 4,
        title: "Deployment & DevOps",
        duration: "2-3 weeks",
        topics: ["Docker", "CI/CD", "Cloud Deployment", "Monitoring"],
        isCompleted: false,
        progress: 0
      }
    ],
    mobile: [
      {
        phaseId: 1,
        title: "Mobile Basics",
        duration: "3-4 weeks",
        topics: ["React Native Setup", "Components", "Styling", "Navigation"],
        isCompleted: false,
        progress: 0
      },
      {
        phaseId: 2,
        title: "Mobile Features",
        duration: "3-4 weeks",
        topics: ["AsyncStorage", "API Integration", "Push Notifications", "Camera & Media"],
        isCompleted: false,
        progress: 0
      },
      {
        phaseId: 3,
        title: "Native Integration",
        duration: "2-3 weeks",
        topics: ["Native Modules", "Platform-specific Code", "Permissions", "Device Features"],
        isCompleted: false,
        progress: 0
      },
      {
        phaseId: 4,
        title: "App Publishing",
        duration: "2-3 weeks",
        topics: ["Testing", "Performance", "App Store", "Play Store"],
        isCompleted: false,
        progress: 0
      }
    ],
    datascience: [
      {
        phaseId: 1,
        title: "Python & Data Basics",
        duration: "3-4 weeks",
        topics: ["Python Fundamentals", "NumPy", "Pandas", "Data Visualization"],
        isCompleted: false,
        progress: 0
      },
      {
        phaseId: 2,
        title: "Machine Learning",
        duration: "4-5 weeks",
        topics: ["Supervised Learning", "Unsupervised Learning", "Model Evaluation", "Feature Engineering"],
        isCompleted: false,
        progress: 0
      },
      {
        phaseId: 3,
        title: "Deep Learning",
        duration: "3-4 weeks",
        topics: ["Neural Networks", "TensorFlow/PyTorch", "CNNs", "RNNs"],
        isCompleted: false,
        progress: 0
      },
      {
        phaseId: 4,
        title: "ML Projects & Deployment",
        duration: "3-4 weeks",
        topics: ["Model Deployment", "MLOps", "Real-world Projects", "Portfolio"],
        isCompleted: false,
        progress: 0
      }
    ]
  };

  return roadmaps[track] || roadmaps.frontend;
};

// @desc    Create learning plan
// @route   POST /api/plans
// @access  Private
export const createPlan = async (req, res, next) => {
  try {
    const { planType } = req.body;

    if (!['intensive', 'balanced', 'relaxed'].includes(planType)) {
      return res.status(400).json({
        success: false,
        message: 'Invalid plan type'
      });
    }

    // Get user's track
    const profile = await Profile.findOne({ userId: req.user._id });
    const track = profile?.selectedTrack || 'frontend';

    // Get plan config
    const config = PLAN_CONFIGS[planType];

    // Generate phases
    const phases = generateRoadmapPhases(track);

    // Create or update plan
    const plan = await Plan.findOneAndUpdate(
      { userId: req.user._id },
      {
        planType,
        duration: config.duration,
        hoursPerWeek: config.hoursPerWeek,
        phases,
        startDate: new Date()
      },
      { new: true, upsert: true }
    );

    // Initialize progress if not exists
    await Progress.findOneAndUpdate(
      { userId: req.user._id },
      {
        currentPhaseId: 1,
        completedTasks: [],
        phaseProgress: {}
      },
      { upsert: true }
    );

    res.json({
      success: true,
      message: 'Learning plan created successfully',
      plan: {
        planType: plan.planType,
        duration: plan.duration,
        hoursPerWeek: plan.hoursPerWeek,
        startDate: plan.startDate
      }
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Get current learning plan
// @route   GET /api/plans/current
// @access  Private
export const getCurrentPlan = async (req, res, next) => {
  try {
    const plan = await Plan.findOne({ userId: req.user._id });

    if (!plan) {
      return res.status(404).json({
        success: false,
        message: 'No learning plan found'
      });
    }

    res.json({
      success: true,
      plan: {
        planType: plan.planType,
        duration: plan.duration,
        hoursPerWeek: plan.hoursPerWeek,
        startDate: plan.startDate,
        phases: plan.phases
      }
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Get roadmap
// @route   GET /api/roadmap
// @access  Private
export const getRoadmap = async (req, res, next) => {
  try {
    const plan = await Plan.findOne({ userId: req.user._id });
    const progress = await Progress.findOne({ userId: req.user._id });

    if (!plan) {
      return res.status(404).json({
        success: false,
        message: 'No learning plan found. Please create a plan first.'
      });
    }

    // Merge plan phases with progress
    const phasesWithProgress = plan.phases.map(phase => ({
      id: phase.phaseId,
      title: phase.title,
      subtitle: `We'll focus on ${phase.topics.length} topics in your roadmap`,
      duration: phase.duration,
      topics: phase.topics,
      isActive: progress?.currentPhaseId === phase.phaseId,
      progress: progress?.phaseProgress?.get(phase.phaseId.toString())?.progress || 0,
      isCompleted: phase.isCompleted
    }));

    res.json({
      success: true,
      plan: {
        type: plan.planType,
        duration: plan.duration,
        hoursPerWeek: plan.hoursPerWeek
      },
      phases: phasesWithProgress
    });
  } catch (error) {
    next(error);
  }
};
