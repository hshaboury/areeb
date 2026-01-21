# Areeb - Learning Platform

> Team Repository – Frontend Implementation

## Overview

**Areeb** is a learning platform that helps users assess their skills and receive personalized learning roadmaps based on their goals, selected track, and available time.

This repository contains the **frontend-only implementation** of the platform.  
It focuses on user flow, UI/UX, routing, and state management.

**Current Status:** Backend and AI logic are **not implemented yet** and will be integrated later.
---

### ✅ What's Implemented:

### Frontend Features

- **Landing & Auth** (UI only)
- **Onboarding Flow**
  - Goals & preferences
  - Track selection
  - Skill level
  - Profile setup
- **Assessment Flow (Mocked)**
  - Quick Skill Check
  - Topics Analysis
  - AI Quiz
  - Quiz Review
- **Results & Planning**
  - Plan selection (time-based)
  - Progressive roadmap flow
- **Dashboard (UI Only)**
  - Home
  - Roadmap view
  - Other sections as placeholders

**Note:** All data is currently mocked using static JSON files in the `src/data/` folder.

---

## ❌ Not Implemented Yet

- Backend APIs & database
- Real authentication
- Real AI logic (quiz generation, analysis, recommendations)
- Progress tracking & persistence
- Course content & community features

---

## User Flow Summary

### 1. **Landing & Authentication**
User arrives at the landing page → Signs up or logs in

### 2. **Onboarding (4 Steps)**
- **Step 1:** Set goals and study preferences
- **Step 2:** Define learning goals and time commitment
- **Step 3:** Choose a track and declare skill level
- **Step 4:** Complete profile setup

### 3. **Assessment Flow**
- **Quick Skill Check:** Answer 3 basic questions
- **Topics Analysis:** AI analyzes skills (mocked)
- **AI Quiz:** Take 15 personalized questions
- **Quiz Review:** Review answers with feedback

### 4. **Results & Planning**
- **Choose Plan:** Select learning intensity (Relaxed/Balanced/Intensive)
- **View Roadmap:** See personalized learning phases

### 5. **Dashboard**
Access learning materials, track progress, and engage with community (UI mockup)

---

## Tech Stack

- **React 19.2.0** 
- **React Router DOM 7.10.1** 
- **Tailwind CSS 4.1.17** 
- **Vite 7.2.4** 
- **Context API** 
- **ESLint** 

---

## Project Structure
src/
├── assets/
├── components/
├── pages/
│ ├── public/
│ ├── auth/
│ ├── onboarding/
│ ├── assessment/
│ ├── results/
│ └── dashboard/
├── context/
├── data/
├── utils/
├── App.jsx
├── main.jsx
└── index.css
  
---

## Run Locally

```bash
npm install
npm run dev
```
---

## Team Notes

- **Frontend:** UI, routing, flow, mocked logic
- **Backend (Planned):** Auth, data storage, progress tracking
- **AI (Planned):** Quiz generation, skill analysis, roadmap recommendations