import mongoose from 'mongoose';

const progressSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
    unique: true
  },
  currentPhaseId: {
    type: Number,
    default: 1
  },
  completedTasks: [{
    type: Number
  }],
  phaseProgress: {
    type: Map,
    of: {
      progress: Number,
      completedTopics: [String],
      lastActivity: Date
    },
    default: {}
  },
  stats: {
    beginner: {
      type: Number,
      default: 0
    },
    intermediate: {
      type: Number,
      default: 0
    },
    advanced: {
      type: Number,
      default: 0
    },
    expert: {
      type: Number,
      default: 0
    }
  }
}, {
  timestamps: true
});

const Progress = mongoose.model('Progress', progressSchema);

export default Progress;
