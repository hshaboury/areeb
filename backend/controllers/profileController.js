import User from '../models/User.js';
import Profile from '../models/Profile.js';

// @desc    Get user profile
// @route   GET /api/profile
// @access  Private
export const getProfile = async (req, res, next) => {
  try {
    const user = await User.findById(req.user._id);
    const profile = await Profile.findOne({ userId: req.user._id });

    if (!profile) {
      return res.status(404).json({
        success: false,
        message: 'Profile not found'
      });
    }

    res.json({
      success: true,
      user: {
        id: user._id,
        email: user.email,
        name: user.name,
        avatar: user.avatar,
        linkedIn: user.linkedIn,
        github: user.github,
        faculty: user.faculty,
        major: user.major
      },
      profile: {
        learningGoals: profile.learningGoals,
        studyStyle: profile.studyStyle,
        availableHours: profile.availableHours,
        selectedTrack: profile.selectedTrack,
        skillLevel: profile.skillLevel,
        completedOnboarding: profile.completedOnboarding
      }
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Update user profile
// @route   PUT /api/profile
// @access  Private
export const updateProfile = async (req, res, next) => {
  try {
    const { name, avatar, linkedIn, github } = req.body;

    // Update user data
    const user = await User.findById(req.user._id);
    if (name !== undefined) user.name = name;
    if (avatar !== undefined) user.avatar = avatar;
    if (linkedIn !== undefined) user.linkedIn = linkedIn;
    if (github !== undefined) user.github = github;
    
    await user.save();

    res.json({
      success: true,
      message: 'Profile updated successfully',
      user: {
        id: user._id,
        email: user.email,
        name: user.name,
        avatar: user.avatar,
        linkedIn: user.linkedIn,
        github: user.github
      }
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Complete onboarding
// @route   POST /api/profile/onboarding
// @access  Private
export const completeOnboarding = async (req, res, next) => {
  try {
    const {
      learningGoals,
      studyStyle,
      availableHours,
      selectedTrack,
      skillLevel,
      name,
      avatar,
      linkedIn,
      github
    } = req.body;

    // Update user data
    const user = await User.findById(req.user._id);
    if (name) user.name = name;
    if (avatar) user.avatar = avatar;
    if (linkedIn) user.linkedIn = linkedIn;
    if (github) user.github = github;
    await user.save();

    // Update profile
    const profile = await Profile.findOneAndUpdate(
      { userId: req.user._id },
      {
        learningGoals: learningGoals || '',
        studyStyle: studyStyle || '',
        availableHours: availableHours || 0,
        selectedTrack: selectedTrack || '',
        skillLevel: skillLevel || '',
        completedOnboarding: true
      },
      { new: true, upsert: true }
    );

    res.json({
      success: true,
      message: 'Onboarding completed successfully',
      profile: {
        learningGoals: profile.learningGoals,
        studyStyle: profile.studyStyle,
        availableHours: profile.availableHours,
        selectedTrack: profile.selectedTrack,
        skillLevel: profile.skillLevel,
        completedOnboarding: profile.completedOnboarding
      }
    });
  } catch (error) {
    next(error);
  }
};
