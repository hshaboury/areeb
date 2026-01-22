# Areeb - Learning Platform

> Full-Stack Implementation: React Frontend + Node.js Backend

## Overview

**Areeb** is a personalized learning platform that helps users assess their skills and receive AI-powered learning roadmaps based on their goals, selected track, and available time.

This repository contains both the **frontend** (React) and **backend** (Node.js/Express/MongoDB) implementations.

**Current Status:** ✅ Frontend complete | ✅ Backend complete | ⏳ AI integration ready (mocked)

---

## 🎯 Features

### Frontend (React + Tailwind CSS)
- **Landing & Authentication** - Beautiful UI with social auth options
- **Onboarding Flow** - 4-step guided setup for goals, track selection, and profile
- **Assessment System** - Quick skill check, AI-powered quiz, and detailed results
- **Learning Plans** - Choose from Intensive/Balanced/Relaxed study paths
- **Interactive Dashboard** - Track progress, view roadmap, manage learning

### Backend (Node.js + Express + MongoDB)
- **RESTful API** - 23 endpoints covering all features
- **JWT Authentication** - Secure token-based auth with password hashing
- **User Profiles** - Comprehensive profile and onboarding management
- **Assessment Engine** - Quiz generation, submission, and AI-powered analysis
- **Learning Plans** - Dynamic roadmap generation based on track and skill level
- **Progress Tracking** - Task completion, phase progress, and achievement stats
- **AI Service Layer** - Abstraction ready for real AI integration

---

## 🚀 Quick Start

### Frontend Setup
```bash
# Install dependencies
npm install

# Start dev server (Vite)
npm run dev
```

Frontend runs on `http://localhost:5173`

### Backend Setup
```bash
# Navigate to backend
cd backend

# Install dependencies
npm install

# Configure environment
cp .env.example .env
# Update .env with your MongoDB connection

# Start server
npm run dev
```

Backend runs on `http://localhost:5000`

📖 **Detailed Setup:** See [backend/SETUP.md](backend/SETUP.md) for complete installation and testing guide

---

## 📁 Project Structure

```
areeb-prototype/
├── src/                    # Frontend (React)
│   ├── assets/
│   ├── components/
│   ├── pages/
│   │   ├── auth/          # Login/Register
│   │   ├── onboarding/    # 4-step onboarding
│   │   ├── assessment/    # Quiz flow
│   │   ├── results/       # Plan selection & roadmap
│   │   └── dashboard/     # User dashboard
│   ├── context/           # State management
│   ├── data/              # Mock data
│   └── utils/
│
└── backend/               # Backend (Node.js)
    ├── config/            # DB connection
    ├── controllers/       # Route handlers
    ├── middleware/        # Auth, validation, errors
    ├── models/            # Mongoose schemas
    ├── routes/            # API routes
    ├── services/          # Business logic (AI)
    ├── utils/             # Helper functions
    └── data/              # Quiz data
```

---

## 🔌 API Endpoints

### Authentication
```
POST   /api/auth/register     - Register new user
POST   /api/auth/login        - Login user
GET    /api/auth/me           - Get current user
```

### Profile & Onboarding
```
GET    /api/profile           - Get user profile
PUT    /api/profile           - Update profile
POST   /api/profile/onboarding - Complete onboarding
```

### Assessment
```
POST   /api/assessment/quick-check       - Submit quick skill check
POST   /api/assessment/analyze-topics    - AI topic analysis
GET    /api/assessment/ai-quiz           - Get personalized quiz
POST   /api/assessment/ai-quiz/submit    - Submit quiz answers
GET    /api/assessment/results           - Get assessment results
```

### Learning Plans
```
POST   /api/plans             - Create learning plan
GET    /api/plans/current     - Get current plan
GET    /api/roadmap           - Get full roadmap
```

### Progress
```
GET    /api/progress          - Get user progress
POST   /api/progress/task     - Mark task complete
PUT    /api/progress/phase    - Update phase progress
GET    /api/progress/stats    - Get achievement stats
```

📖 **Full API Documentation:** See [backend/README.md](backend/README.md)

---

## 🧪 Testing

### Using Postman
Import the collection: `backend/Areeb_API_Collection.postman_collection.json`

### Using cURL
```bash
# Register
curl -X POST http://localhost:5000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{"email":"test@example.com","password":"password123"}'

# Health check
curl http://localhost:5000/api/health
```

---

## 🛠️ Tech Stack

### Frontend
- React 19.2.0
- React Router DOM 7.10.1
- Tailwind CSS 4.1.17
- Vite 7.2.4
- Context API

### Backend
- Node.js + Express
- MongoDB + Mongoose
- JWT (jsonwebtoken + bcryptjs)
- Express Validator
- CORS

---

## 📊 Database Models

- **User** - Authentication and profile data
- **Profile** - Learning preferences and onboarding info
- **Assessment** - Quiz results and AI analysis
- **Plan** - Learning plans and roadmap phases
- **Progress** - Task completion and achievement tracking

---

## 🎯 User Flow

1. **Landing** → Register/Login
2. **Onboarding** → Set goals → Choose track → Setup profile
3. **Assessment** → Quick check → AI analysis → Personalized quiz → Results
4. **Planning** → Choose intensity → View generated roadmap
5. **Dashboard** → Track progress → Complete tasks → Advance through phases

---

## 🔐 Security Features

✅ Password hashing with bcrypt  
✅ JWT-based authentication  
✅ Protected API routes  
✅ Input validation on all endpoints  
✅ MongoDB injection protection  
✅ CORS configuration  

---

## 🤖 AI Integration

Currently using **mocked AI logic** for:
- Quiz question generation
- Topics analysis based on skill checks
- Personalized recommendations

**Ready for integration** with:
- OpenAI GPT-4
- Anthropic Claude
- Google Gemini
- Custom ML models

Implementation in: `backend/services/aiService.js`

---

## 📦 Installation Requirements

- Node.js v16+
- MongoDB (local or MongoDB Atlas)
- npm or yarn

---