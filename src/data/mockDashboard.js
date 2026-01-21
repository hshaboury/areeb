// Mock dashboard data
// TODO: In the future, this data will come from backend API

export const mockDashboardData = {
  user: {
    name: "User",
    avatar: null,
    track: "Frontend Development"
  },
  selectedPlan: {
    id: "balanced",
    name: "Balanced Path",
    duration: "6 Months",
    hoursPerWeek: 10
  },
  stats: [
    { label: "Beginner", value: 0, icon: "trophy" },
    { label: "Intermediate", value: 0, icon: "star" },
    { label: "Advanced", value: 0, icon: "fire" },
    { label: "Expert", value: 0, icon: "crown" }
  ],
  phases: [
    {
      id: 1,
      title: "Foundations",
      subtitle: "We'll focus on 5 topics in your roadmap",
      isActive: true,
      progress: 0,
      topics: ["HTML Basics", "CSS Fundamentals", "JavaScript Basics", "Git & GitHub", "Developer Tools"],
      tasks: [
        { id: 1, text: "Study core concepts and theory", completed: false, type: "study" },
        { id: 2, text: "Hands-on coding exercises", completed: false, type: "practice" },
        { id: 3, text: "Build real-world project", completed: false, type: "project" }
      ]
    },
    {
      id: 2,
      title: "React Fundamentals",
      subtitle: "We'll focus on 6 topics in your roadmap",
      isActive: false,
      progress: 0,
      topics: ["React Basics", "Components", "Props & State", "Hooks", "Event Handling", "Conditional Rendering"],
      tasks: [
        { id: 4, text: "Learn React components and JSX", completed: false, type: "study" },
        { id: 5, text: "Build interactive components", completed: false, type: "practice" },
        { id: 6, text: "Create a React application", completed: false, type: "project" }
      ]
    },
    {
      id: 3,
      title: "State Management",
      subtitle: "We'll focus on 4 topics in your roadmap",
      isActive: false,
      progress: 0,
      topics: ["Context API", "Redux Basics", "Redux Toolkit", "Data Fetching"],
      tasks: [
        { id: 7, text: "Master state management patterns", completed: false, type: "study" },
        { id: 8, text: "Implement Redux in projects", completed: false, type: "practice" },
        { id: 9, text: "Build app with global state", completed: false, type: "project" }
      ]
    },
    {
      id: 4,
      title: "Advanced Patterns",
      subtitle: "We'll focus on 5 topics in your roadmap",
      isActive: false,
      progress: 0,
      topics: ["Performance Optimization", "Testing", "TypeScript", "Best Practices", "Deployment"],
      tasks: [
        { id: 10, text: "Learn advanced React patterns", completed: false, type: "study" },
        { id: 11, text: "Write tests for components", completed: false, type: "practice" },
        { id: 12, text: "Deploy production app", completed: false, type: "project" }
      ]
    }
  ]
};

// Helper function to get current phase
export const getCurrentPhase = (phases) => {
  return phases.find(phase => phase.isActive) || phases[0];
};

// Helper function to calculate overall progress
export const calculateOverallProgress = (phases) => {
  if (phases.length === 0) return 0;
  const totalProgress = phases.reduce((sum, phase) => sum + phase.progress, 0);
  return Math.round(totalProgress / phases.length);
};

// TODO: Implement actual progress tracking logic
// TODO: Connect to backend API for saving progress
// TODO: Add AI-powered recommendations based on progress
// TODO: Implement completion logic for tasks/phases
// TODO: Add streak tracking and gamification
