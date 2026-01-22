import mongoose from 'mongoose';

const planSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
    unique: true
  },
  planType: {
    type: String,
    enum: ['intensive', 'balanced', 'relaxed'],
    required: true
  },
  duration: {
    type: String,
    required: true
  },
  hoursPerWeek: {
    type: Number,
    required: true
  },
  startDate: {
    type: Date,
    default: Date.now
  },
  phases: [{
    phaseId: Number,
    title: String,
    duration: String,
    topics: [String],
    isCompleted: {
      type: Boolean,
      default: false
    },
    progress: {
      type: Number,
      default: 0
    }
  }]
}, {
  timestamps: true
});

const Plan = mongoose.model('Plan', planSchema);

export default Plan;
