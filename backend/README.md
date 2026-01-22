# Areeb Learning Platform - Backend API

> RESTful API for the Areeb personalized learning platform

## Overview

This is the backend API for the Areeb Learning Platform, built with Node.js, Express, and MongoDB. It provides authentication, user profiles, assessment management, learning plans, and AI-powered recommendations.

## Tech Stack

- **Node.js** - JavaScript runtime
- **Express.js** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB ODM
- **JWT** - Authentication
- **bcryptjs** - Password hashing
- **express-validator** - Input validation

## Prerequisites

- Node.js (v16 or higher)
- MongoDB (local or MongoDB Atlas)
- npm or yarn

## Installation

1. Navigate to the backend directory:
```bash
cd backend
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file based on `.env.example`:
```bash
cp .env.example .env
```

4. Update the `.env` file with your configuration:
```env
PORT=5000
NODE_ENV=development
MONGODB_URI=mongodb://localhost:27017/areeb
JWT_SECRET=your-super-secret-jwt-key-change-this-in-production
JWT_EXPIRE=30d
FRONTEND_URL=http://localhost:5173
```

## Running the Server

### Development mode (with auto-reload):
```bash
npm run dev
```

### Production mode:
```bash
npm start
```

The server will start on `http://localhost:5000`

## API Endpoints

### Authentication
```
POST   /api/auth/register     - Register new user
POST   /api/auth/login        - Login user
GET    /api/auth/me           - Get current user (protected)
```

### Profile
```
GET    /api/profile           - Get user profile (protected)
PUT    /api/profile           - Update profile (protected)
POST   /api/profile/onboarding - Complete onboarding (protected)
```

### Assessment
```
POST   /api/assessment/quick-check       - Submit quick skill check (protected)
POST   /api/assessment/analyze-topics    - Analyze topics (protected)
GET    /api/assessment/ai-quiz           - Get AI quiz (protected)
POST   /api/assessment/ai-quiz/submit    - Submit AI quiz (protected)
GET    /api/assessment/results           - Get results (protected)
```

### Learning Plans
```
POST   /api/plans             - Create learning plan (protected)
GET    /api/plans/current     - Get current plan (protected)
GET    /api/roadmap           - Get roadmap (protected)
```

### Progress Tracking
```
GET    /api/progress          - Get user progress (protected)
POST   /api/progress/task     - Mark task complete (protected)
PUT    /api/progress/phase    - Update phase progress (protected)
GET    /api/progress/stats    - Get achievement stats (protected)
```

### AI Services
```
POST   /api/ai/generate-quiz  - Generate AI quiz (protected)
POST   /api/ai/analyze-skills - Analyze skills (protected)
POST   /api/ai/recommend      - Get recommendations (protected)
POST   /api/ai/summarize      - Summarize content (protected)
```

### Health Check
```
GET    /api/health            - Server health check
```

## Authentication

Protected routes require a JWT token in the Authorization header:

```
Authorization: Bearer <token>
```

The token is returned upon successful registration or login.

## Request/Response Examples

### Register User
**POST** `/api/auth/register`

Request:
```json
{
  "email": "user@example.com",
  "password": "password123",
  "faculty": "Engineering",
  "major": "Computer Science"
}
```

Response:
```json
{
  "success": true,
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "id": "507f1f77bcf86cd799439011",
    "email": "user@example.com",
    "name": ""
  }
}
```

### Submit Quick Check
**POST** `/api/assessment/quick-check`

Request:
```json
{
  "answers": {
    "1": "a",
    "2": "b",
    "3": "c",
    "4": "a",
    "5": "c"
  },
  "track": "frontend"
}
```

Response:
```json
{
  "success": true,
  "message": "Quick skill check submitted successfully",
  "result": {
    "score": 80,
    "correct": 4,
    "total": 5
  }
}
```

### Create Learning Plan
**POST** `/api/plans`

Request:
```json
{
  "planType": "balanced"
}
```

Response:
```json
{
  "success": true,
  "message": "Learning plan created successfully",
  "plan": {
    "planType": "balanced",
    "duration": "12 weeks",
    "hoursPerWeek": 10,
    "startDate": "2024-01-22T00:00:00.000Z"
  }
}
```

## Error Handling

All errors follow this format:

```json
{
  "success": false,
  "message": "Error message here",
  "errors": [
    {
      "field": "email",
      "message": "Please provide a valid email"
    }
  ]
}
```

## Database Models

### User
- email, password, name, faculty, major, avatar, linkedIn, github

### Profile
- userId, learningGoals, studyStyle, availableHours, selectedTrack, skillLevel, completedOnboarding

### Assessment
- userId, trackSelected, quickSkillCheck, topicsAnalysis, aiQuiz

### Plan
- userId, planType, duration, hoursPerWeek, startDate, phases

### Progress
- userId, currentPhaseId, completedTasks, phaseProgress, stats

## Project Structure

```
backend/
├── config/
│   └── db.js              # Database connection
├── controllers/           # Route controllers
│   ├── authController.js
│   ├── profileController.js
│   ├── assessmentController.js
│   ├── planController.js
│   ├── progressController.js
│   └── aiController.js
├── middleware/            # Custom middleware
│   ├── auth.js           # JWT authentication
│   ├── errorHandler.js   # Error handling
│   └── validate.js       # Input validation
├── models/               # Mongoose models
│   ├── User.js
│   ├── Profile.js
│   ├── Assessment.js
│   ├── Plan.js
│   └── Progress.js
├── routes/               # API routes
│   ├── authRoutes.js
│   ├── profileRoutes.js
│   ├── assessmentRoutes.js
│   ├── planRoutes.js
│   ├── progressRoutes.js
│   └── aiRoutes.js
├── services/             # Business logic
│   └── aiService.js      # AI integration (mocked)
├── utils/                # Utility functions
│   └── auth.js          # Auth helpers
├── data/                 # Mock data
│   ├── mockQuiz.js
│   └── mockAIQuiz.js
├── .env.example          # Environment variables template
├── .gitignore
├── package.json
├── server.js             # Entry point
└── README.md
```

## AI Integration

Currently, AI features are mocked with static data. To integrate real AI:

1. Choose an AI provider (OpenAI, Anthropic, etc.)
2. Update `services/aiService.js` with actual API calls
3. Add API keys to `.env`
4. Implement proper rate limiting and error handling

## CORS Configuration

The API allows requests from `http://localhost:5173` by default (Vite dev server). Update `FRONTEND_URL` in `.env` for production.

## Security Considerations

- Passwords are hashed using bcrypt before storage
- JWT tokens expire after 30 days (configurable)
- Input validation on all endpoints
- MongoDB injection protection via Mongoose
- CORS enabled for specified origins only

## Development Notes

- Use Nodemon for auto-reload during development
- MongoDB must be running before starting the server
- Check `/api/health` to verify server is running
- All protected routes require valid JWT token

## Future Enhancements

- [ ] Real AI integration for quiz generation
- [ ] File upload for avatars (multer + cloudinary)
- [ ] Email verification for registration
- [ ] Password reset functionality
- [ ] Rate limiting on API endpoints
- [ ] Comprehensive API testing suite
- [ ] Swagger/OpenAPI documentation
- [ ] WebSocket for real-time features
- [ ] Course content management system
- [ ] Admin panel endpoints

## License

ISC
