import mongoose from 'mongoose';

const profileSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
    unique: true
  },
  learningGoals: {
    type: String,
    default: ''
  },
  studyStyle: {
    type: String,
    default: ''
  },
  availableHours: {
    type: Number,
    default: 0
  },
  selectedTrack: {
    type: String,
    enum: ['frontend', 'backend', 'fullstack', 'mobile', 'datascience', ''],
    default: ''
  },
  skillLevel: {
    type: String,
    enum: ['beginner', 'intermediate', 'professional', ''],
    default: ''
  },
  completedOnboarding: {
    type: Boolean,
    default: false
  }
}, {
  timestamps: true
});

const Profile = mongoose.model('Profile', profileSchema);

export default Profile;
