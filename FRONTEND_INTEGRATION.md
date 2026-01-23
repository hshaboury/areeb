# Frontend-Backend Integration - Areeb Learning Platform

## Overview

This document describes the complete integration of the Areeb Learning Platform frontend with the backend API. All frontend pages have been updated to use real API calls instead of mock data.

## Architecture

### API Client
- **Location**: `src/utils/apiClient.js`
- **Base URL**: `http://localhost:5000/api`
- **Features**:
  - Axios instance with automatic JWT token injection
  - Request/response interceptors
  - Global error handling
  - 401 handling (auto token cleanup)

### Auth Utilities
- **Location**: `src/utils/auth.js`
- **Features**:
  - Token management (localStorage)
  - User data persistence
  - Authentication state checks
  - API error formatting

## Services

All API services are located in `src/services/`:

### 1. authService.js
- `register(userData)` - Register new user
- `login(credentials)` - Login user
- `getCurrentUser()` - Get authenticated user

### 2. profileService.js
- `getProfile()` - Get user profile
- `updateProfile(profileData)` - Update profile
- `completeOnboarding(onboardingData)` - Complete onboarding

### 3. assessmentService.js
- `submitQuickCheck(data)` - Submit quick skill check
- `analyzeTopics(data)` - Analyze topics
- `getAIQuiz()` - Get AI-generated quiz
- `submitAIQuiz(data)` - Submit AI quiz answers
- `getAssessmentResults()` - Get complete results

### 4. planService.js
- `createPlan(data)` - Create learning plan
- `getCurrentPlan()` - Get current plan
- `getRoadmap()` - Get roadmap

### 5. progressService.js
- `getProgress()` - Get user progress
- `markTaskComplete(data)` - Mark task as complete
- `updatePhaseProgress(data)` - Update phase progress
- `getAchievementStats()` - Get achievement stats

## Page Integrations

### Authentication Pages

#### SignUp.jsx (`src/pages/auth/SignUp.jsx`)
- **API Call**: `POST /api/auth/register`
- **Data**: email, password, faculty, major
- **On Success**: Navigate to `/goals`
- **Features**: Form validation, loading state, error handling

#### SignIn.jsx (`src/pages/auth/SignIn.jsx`)
- **API Call**: `POST /api/auth/login`
- **Data**: email, password
- **On Success**: Navigate to `/dashboard`
- **Features**: Form validation, loading state, error handling

### Onboarding Pages

#### Goals.jsx (`src/pages/onboarding/Goals.jsx`)
- **Context**: OnboardingContext
- **Data Collected**: learningGoals, studyStyle, availableHours
- **On Submit**: Store in context, navigate to `/track`

#### Track.jsx (`src/pages/onboarding/Track.jsx`)
- **Context**: OnboardingContext, AssessmentContext
- **Data Collected**: selectedTrack, skillLevel
- **On Submit**: Store track in AssessmentContext, navigate to `/profile`

#### Profile.jsx (`src/pages/onboarding/Profile.jsx`)
- **API Call**: `POST /api/profile/onboarding`
- **Data**: All data from Goals + Track + Profile (name, linkedIn, github)
- **On Success**: Navigate to `/assessment/quick-skill-check`
- **Features**: Loading state, error handling

### Assessment Pages

#### QuickSkillCheck.jsx (`src/pages/assessment/QuickSkillCheck.jsx`)
- **API Call**: `POST /api/assessment/quick-check`
- **Data**: answers object, track
- **Uses**: Local mock questions for display
- **On Success**: Store result in AssessmentContext, navigate to `/assessment/topics-analysis`

#### TopicsAnalysis.jsx (`src/pages/assessment/TopicsAnalysis.jsx`)
- **API Call**: `POST /api/assessment/analyze-topics`
- **Data**: proficientTopics, needsReviewTopics, needsLearningTopics
- **On Success**: Store in AssessmentContext, navigate to `/assessment/ai-quiz`

#### AIQuiz.jsx (`src/pages/assessment/AIQuiz.jsx`)
- **API Call**: `GET /api/assessment/ai-quiz`
- **Uses**: API data for quiz questions (not mock)
- **On Submit**: Store answers in AssessmentContext, navigate to `/assessment/ai-quiz-review`

#### AIQuizReview.jsx (`src/pages/assessment/AIQuizReview.jsx`)
- **API Calls**: 
  1. `POST /api/assessment/ai-quiz/submit`
  2. `GET /api/assessment/results`
- **On Success**: Store results in AssessmentContext, navigate to `/results/choose-plan`

### Results Pages

#### ChoosePlan.jsx (`src/pages/results/ChoosePlan.jsx`)
- **API Call**: `POST /api/plans`
- **Data**: planType (intensive, balanced, relaxed)
- **On Success**: Store in AssessmentContext, navigate to `/results/roadmap`

#### RoadmapResult.jsx (`src/pages/results/RoadmapResult.jsx`)
- **API Call**: `GET /api/roadmap`
- **Uses**: API data for roadmap display
- **On Success**: Navigate to `/dashboard`

### Dashboard Pages

#### Home.jsx (`src/pages/dashboard/Home.jsx`)
- **API Calls**:
  1. `GET /api/progress`
  2. `GET /api/progress/stats`
- **Uses**: API data for progress and stats
- **Features**: Loading state, error handling, graceful fallback to mock data

#### RoadmapView.jsx (`src/pages/dashboard/RoadmapView.jsx`)
- **API Calls**:
  1. `GET /api/roadmap`
  2. `POST /api/progress/task` (on task complete)
  3. `PUT /api/progress/phase` (on phase update)
- **Features**: Interactive task completion, progress updates, data refresh

#### Analytics.jsx (`src/pages/dashboard/Analytics.jsx`)
- **API Calls**:
  1. `GET /api/progress/stats`
  2. `GET /api/progress`
- **Uses**: API data for analytics display
- **Features**: Learning streaks, completion rates, time spent

## Context Providers

### AssessmentContext (`src/context/AssessmentContext.jsx`)
- Manages assessment flow state
- Stores: selectedTrack, quickCheckResult, topicsAnalysis, aiQuizAnswers, aiQuizResults, selectedPlan, dashboardProgress
- Used by: All assessment, results, and dashboard pages

### OnboardingContext (`src/context/OnboardingContext.jsx`)
- Manages onboarding data flow between pages
- Stores: learningGoals, studyStyle, availableHours, selectedTrack, skillLevel
- Used by: Goals, Track, Profile pages

## Error Handling

All pages implement consistent error handling:

1. **Try-Catch Blocks**: All API calls wrapped in try-catch
2. **User-Friendly Messages**: Errors displayed to users in UI
3. **Console Logging**: Errors logged to console in development
4. **Retry Options**: Some pages include retry buttons
5. **Graceful Degradation**: Dashboard falls back to mock data if API fails

## Loading States

All pages with API calls include loading states:

1. **Loading Indicators**: Spinners or loading messages
2. **Disabled Buttons**: Prevent duplicate submissions
3. **Loading Text**: Clear feedback to users

## Data Flow

```
1. User Signs Up → JWT token stored in localStorage
2. User Completes Onboarding → Data sent to backend
3. User Takes Assessments → Results stored in backend
4. User Chooses Plan → Plan created in backend
5. User Views Dashboard → Data fetched from backend
6. User Completes Tasks → Progress updated in backend
```

## Token Management

- JWT token stored in localStorage after login/register
- Token automatically attached to all API requests via axios interceptor
- Token cleared on 401 responses
- Token persists across page refreshes

## Testing the Integration

### Prerequisites
1. Backend server running on `http://localhost:5000`
2. MongoDB connected
3. Frontend dev server running on `http://localhost:5173`

### Test Flow
1. Register a new user
2. Complete onboarding (Goals → Track → Profile)
3. Take quick skill check
4. Analyze topics
5. Complete AI quiz
6. Choose learning plan
7. View roadmap
8. Navigate to dashboard
9. Mark tasks complete
10. View analytics

## Configuration

### API Base URL
To change the API URL, update `src/utils/apiClient.js`:
```javascript
baseURL: 'http://localhost:5000/api'
```

For production, set:
```javascript
baseURL: process.env.VITE_API_URL || 'https://api.yourdomain.com/api'
```

## Security Considerations

1. **Token Storage**: JWT stored in localStorage (consider httpOnly cookies for production)
2. **CORS**: Backend configured to allow requests from frontend URL
3. **Input Validation**: All forms validate input before submission
4. **Error Messages**: No sensitive data exposed in error messages
5. **Password Requirements**: Minimum 6 characters enforced

## Future Enhancements

1. **Token Refresh**: Implement automatic token refresh
2. **Offline Support**: Add service worker for offline functionality
3. **Real-time Updates**: WebSocket integration for live updates
4. **File Upload**: Avatar upload functionality
5. **Password Reset**: Forgot password flow
6. **Email Verification**: Email verification on registration
7. **Protected Routes**: Add route guards for authenticated routes

## Troubleshooting

### Common Issues

**Issue**: API calls failing with CORS error
- **Solution**: Ensure backend CORS is configured to allow frontend URL

**Issue**: Token not being sent with requests
- **Solution**: Check that token is stored in localStorage and apiClient interceptor is working

**Issue**: 401 errors after token expires
- **Solution**: Implement token refresh or redirect user to login

**Issue**: Mock data still showing
- **Solution**: Verify backend is running and API calls are successful

## Summary

The frontend is now fully integrated with the backend API. All mock data has been replaced with real API calls, and the application provides a complete end-to-end user experience from registration to dashboard tracking.
