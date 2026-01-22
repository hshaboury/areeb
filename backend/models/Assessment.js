import mongoose from 'mongoose';

const assessmentSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
    unique: true
  },
  trackSelected: {
    type: String,
    default: ''
  },
  quickSkillCheck: {
    answers: {
      type: Map,
      of: String,
      default: {}
    },
    score: {
      type: Number,
      default: 0
    },
    completedAt: {
      type: Date,
      default: null
    }
  },
  topicsAnalysis: {
    proficient: [{
      name: String,
      score: Number
    }],
    needsReview: [{
      name: String,
      score: Number
    }],
    needsLearning: [{
      name: String,
      score: Number
    }]
  },
  aiQuiz: {
    questions: [{
      id: Number,
      question: String,
      answers: [{
        id: String,
        text: String
      }],
      correctAnswer: String,
      topic: String,
      difficulty: String,
      aiExplanation: String
    }],
    answers: {
      type: Map,
      of: String,
      default: {}
    },
    results: {
      score: {
        type: Number,
        default: 0
      },
      total: {
        type: Number,
        default: 0
      },
      correct: {
        type: Number,
        default: 0
      },
      wrong: {
        type: Number,
        default: 0
      },
      needsLearning: {
        type: Number,
        default: 0
      },
      strengths: [{
        topic: String,
        score: Number
      }],
      weaknesses: [{
        topic: String,
        score: Number
      }]
    },
    completedAt: {
      type: Date,
      default: null
    }
  }
}, {
  timestamps: true
});

const Assessment = mongoose.model('Assessment', assessmentSchema);

export default Assessment;
