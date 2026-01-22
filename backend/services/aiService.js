// Mock AI Service for quiz generation and analysis
// TODO: Replace with actual AI integration (OpenAI, Anthropic, etc.)

import { quizData } from '../data/mockQuiz.js';
import { aiQuizData } from '../data/mockAIQuiz.js';

// Helper function to normalize track key
const normalizeTrackKey = (track) => {
  if (!track) return 'frontend';
  return track.toLowerCase().replace(/\s+/g, '');
};

// Generate AI quiz questions based on track
export const generateAIQuiz = async (track, topicsAnalysis = null) => {
  // For now, return mock data based on track
  const trackKey = normalizeTrackKey(track);
  const questions = aiQuizData[trackKey] || aiQuizData.frontend;
  
  // In the future, this would call an AI API to generate personalized questions
  // based on the user's topics analysis and skill level
  
  return questions;
};

// Analyze topics based on quick skill check
export const analyzeTopics = async (track, quickCheckAnswers, quickCheckScore) => {
  // Mock analysis based on score
  // In the future, this would use AI to analyze the user's answers
  
  const trackKey = normalizeTrackKey(track);
  
  // Generate mock analysis based on score
  let proficient = [];
  let needsReview = [];
  let needsLearning = [];
  
  if (trackKey === 'frontend') {
    if (quickCheckScore >= 80) {
      proficient = [
        { name: "React Basics", score: 95 },
        { name: "Component Lifecycle", score: 90 },
        { name: "JavaScript ES6+", score: 88 }
      ];
      needsReview = [
        { name: "State Management", score: 65 }
      ];
      needsLearning = [
        { name: "Performance Optimization", score: 35 },
        { name: "Testing", score: 40 }
      ];
    } else if (quickCheckScore >= 60) {
      proficient = [
        { name: "HTML/CSS", score: 85 }
      ];
      needsReview = [
        { name: "React Basics", score: 65 },
        { name: "JavaScript ES6+", score: 60 }
      ];
      needsLearning = [
        { name: "State Management", score: 40 },
        { name: "Performance Optimization", score: 30 },
        { name: "Testing", score: 25 }
      ];
    } else {
      proficient = [];
      needsReview = [
        { name: "HTML/CSS", score: 55 }
      ];
      needsLearning = [
        { name: "JavaScript Basics", score: 35 },
        { name: "React Basics", score: 30 },
        { name: "State Management", score: 25 },
        { name: "Testing", score: 20 }
      ];
    }
  } else {
    // Similar logic for other tracks
    proficient = [{ name: "Basic Concepts", score: 80 }];
    needsReview = [{ name: "Intermediate Topics", score: 60 }];
    needsLearning = [{ name: "Advanced Topics", score: 35 }];
  }
  
  return { proficient, needsReview, needsLearning };
};

// Analyze AI quiz results
export const analyzeAIQuizResults = (questions, answers) => {
  let correct = 0;
  let wrong = 0;
  let needsLearning = 0;
  const topicScores = {};

  questions.forEach((question) => {
    const userAnswer = answers[question.id];
    const isCorrect = userAnswer === question.correctAnswer;
    
    if (isCorrect) {
      correct++;
    } else if (userAnswer) {
      wrong++;
    } else {
      needsLearning++;
    }

    // Track topic performance
    if (!topicScores[question.topic]) {
      topicScores[question.topic] = { correct: 0, total: 0 };
    }
    topicScores[question.topic].total++;
    if (isCorrect) {
      topicScores[question.topic].correct++;
    }
  });

  // Determine strengths and weaknesses
  const strengths = [];
  const weaknesses = [];

  Object.entries(topicScores).forEach(([topic, scores]) => {
    const percentage = (scores.correct / scores.total) * 100;
    if (percentage >= 70) {
      strengths.push({ topic, score: Math.round(percentage) });
    } else if (percentage < 50) {
      weaknesses.push({ topic, score: Math.round(percentage) });
    }
  });

  return {
    score: Math.round((correct / questions.length) * 100),
    total: questions.length,
    correct,
    wrong,
    needsLearning,
    strengths,
    weaknesses,
    topicScores
  };
};

// Generate personalized recommendations
export const generateRecommendations = async (userProfile, assessmentResults) => {
  // Mock recommendations
  // In the future, this would use AI to generate personalized learning recommendations
  
  return {
    recommendations: [
      "Focus on testing fundamentals to improve code quality",
      "Practice state management patterns with Redux or Context API",
      "Build projects to solidify your understanding"
    ],
    suggestedResources: [
      { title: "React Testing Library Guide", type: "article" },
      { title: "State Management Patterns", type: "video" },
      { title: "Build a Todo App", type: "project" }
    ]
  };
};
