import { normalizeTrackKey } from '../utils/dataUtils';

// Mock quiz data for different tracks
// TODO: In the future, these questions will be fetched dynamically based on AI analysis of the user's track and skill level

export const quizData = {
  frontend: [
    {
      id: 1,
      question: "What is the Virtual DOM in React?",
      answers: [
        { id: "a", text: "A lightweight copy of the actual DOM", isCorrect: true },
        { id: "b", text: "A database for storing components", isCorrect: false },
        { id: "c", text: "A CSS framework", isCorrect: false },
        { id: "d", text: "A testing library", isCorrect: false }
      ]
    },
    {
      id: 2,
      question: "Which hook is used for side effects in React?",
      answers: [
        { id: "a", text: "useState", isCorrect: false },
        { id: "b", text: "useEffect", isCorrect: true },
        { id: "c", text: "useContext", isCorrect: false },
        { id: "d", text: "useReducer", isCorrect: false }
      ]
    },
    {
      id: 3,
      question: "What is the purpose of CSS Flexbox?",
      answers: [
        { id: "a", text: "To create animations", isCorrect: false },
        { id: "b", text: "To style text", isCorrect: false },
        { id: "c", text: "To create flexible layouts", isCorrect: true },
        { id: "d", text: "To add interactivity", isCorrect: false }
      ]
    },
    {
      id: 4,
      question: "What does 'npm' stand for?",
      answers: [
        { id: "a", text: "Node Package Manager", isCorrect: true },
        { id: "b", text: "New Programming Method", isCorrect: false },
        { id: "c", text: "Network Protocol Manager", isCorrect: false },
        { id: "d", text: "Node Process Module", isCorrect: false }
      ]
    },
    {
      id: 5,
      question: "Which of these is NOT a valid JavaScript data type?",
      answers: [
        { id: "a", text: "String", isCorrect: false },
        { id: "b", text: "Boolean", isCorrect: false },
        { id: "c", text: "Character", isCorrect: true },
        { id: "d", text: "Number", isCorrect: false }
      ]
    }
  ],
  backend: [
    {
      id: 1,
      question: "What is REST API?",
      answers: [
        { id: "a", text: "A database system", isCorrect: false },
        { id: "b", text: "An architectural style for web services", isCorrect: true },
        { id: "c", text: "A programming language", isCorrect: false },
        { id: "d", text: "A frontend framework", isCorrect: false }
      ]
    },
    {
      id: 2,
      question: "Which HTTP method is used to update a resource?",
      answers: [
        { id: "a", text: "GET", isCorrect: false },
        { id: "b", text: "POST", isCorrect: false },
        { id: "c", text: "PUT", isCorrect: true },
        { id: "d", text: "DELETE", isCorrect: false }
      ]
    },
    {
      id: 3,
      question: "What is middleware in Express.js?",
      answers: [
        { id: "a", text: "A database connector", isCorrect: false },
        { id: "b", text: "Functions that execute during request-response cycle", isCorrect: true },
        { id: "c", text: "A testing framework", isCorrect: false },
        { id: "d", text: "A CSS preprocessor", isCorrect: false }
      ]
    },
    {
      id: 4,
      question: "What does SQL stand for?",
      answers: [
        { id: "a", text: "Structured Query Language", isCorrect: true },
        { id: "b", text: "Simple Question Language", isCorrect: false },
        { id: "c", text: "Server Query Logic", isCorrect: false },
        { id: "d", text: "System Quality Level", isCorrect: false }
      ]
    },
    {
      id: 5,
      question: "Which database is NoSQL?",
      answers: [
        { id: "a", text: "MySQL", isCorrect: false },
        { id: "b", text: "PostgreSQL", isCorrect: false },
        { id: "c", text: "MongoDB", isCorrect: true },
        { id: "d", text: "Oracle", isCorrect: false }
      ]
    }
  ],
  fullstack: [
    {
      id: 1,
      question: "What is the purpose of a web server?",
      answers: [
        { id: "a", text: "To style web pages", isCorrect: false },
        { id: "b", text: "To handle HTTP requests and serve content", isCorrect: true },
        { id: "c", text: "To compile JavaScript", isCorrect: false },
        { id: "d", text: "To manage databases only", isCorrect: false }
      ]
    },
    {
      id: 2,
      question: "What is JWT used for?",
      answers: [
        { id: "a", text: "Styling components", isCorrect: false },
        { id: "b", text: "Authentication and authorization", isCorrect: true },
        { id: "c", text: "Database queries", isCorrect: false },
        { id: "d", text: "Creating animations", isCorrect: false }
      ]
    },
    {
      id: 3,
      question: "What is CORS?",
      answers: [
        { id: "a", text: "A CSS framework", isCorrect: false },
        { id: "b", text: "Cross-Origin Resource Sharing", isCorrect: true },
        { id: "c", text: "A database type", isCorrect: false },
        { id: "d", text: "A React hook", isCorrect: false }
      ]
    },
    {
      id: 4,
      question: "What is the purpose of Docker?",
      answers: [
        { id: "a", text: "To containerize applications", isCorrect: true },
        { id: "b", text: "To write better code", isCorrect: false },
        { id: "c", text: "To style web pages", isCorrect: false },
        { id: "d", text: "To test components", isCorrect: false }
      ]
    },
    {
      id: 5,
      question: "What is CI/CD?",
      answers: [
        { id: "a", text: "A programming language", isCorrect: false },
        { id: "b", text: "Continuous Integration/Continuous Deployment", isCorrect: true },
        { id: "c", text: "A database system", isCorrect: false },
        { id: "d", text: "A CSS methodology", isCorrect: false }
      ]
    }
  ],
  mobile: [
    {
      id: 1,
      question: "What is React Native?",
      answers: [
        { id: "a", text: "A native iOS language", isCorrect: false },
        { id: "b", text: "A framework for building mobile apps using React", isCorrect: true },
        { id: "c", text: "A database for mobile", isCorrect: false },
        { id: "d", text: "A testing tool", isCorrect: false }
      ]
    },
    {
      id: 2,
      question: "What is the difference between iOS and Android development?",
      answers: [
        { id: "a", text: "iOS uses Swift/Objective-C, Android uses Java/Kotlin", isCorrect: true },
        { id: "b", text: "They use the same programming languages", isCorrect: false },
        { id: "c", text: "iOS is only for tablets", isCorrect: false },
        { id: "d", text: "Android doesn't support mobile apps", isCorrect: false }
      ]
    },
    {
      id: 3,
      question: "What is an APK file?",
      answers: [
        { id: "a", text: "An iOS app package", isCorrect: false },
        { id: "b", text: "Android Package Kit", isCorrect: true },
        { id: "c", text: "A database file", isCorrect: false },
        { id: "d", text: "A CSS file", isCorrect: false }
      ]
    },
    {
      id: 4,
      question: "What is Flutter?",
      answers: [
        { id: "a", text: "A cross-platform mobile development framework", isCorrect: true },
        { id: "b", text: "A database system", isCorrect: false },
        { id: "c", text: "An iOS-only framework", isCorrect: false },
        { id: "d", text: "A backend framework", isCorrect: false }
      ]
    },
    {
      id: 5,
      question: "What is push notification?",
      answers: [
        { id: "a", text: "A way to update the app's UI", isCorrect: false },
        { id: "b", text: "A message sent from server to app when app is not running", isCorrect: true },
        { id: "c", text: "A database query", isCorrect: false },
        { id: "d", text: "A CSS animation", isCorrect: false }
      ]
    }
  ],
  datascience: [
    {
      id: 1,
      question: "What is Machine Learning?",
      answers: [
        { id: "a", text: "A type of database", isCorrect: false },
        { id: "b", text: "A subset of AI that enables systems to learn from data", isCorrect: true },
        { id: "c", text: "A programming language", isCorrect: false },
        { id: "d", text: "A web framework", isCorrect: false }
      ]
    },
    {
      id: 2,
      question: "What is a DataFrame in Pandas?",
      answers: [
        { id: "a", text: "A 2D labeled data structure", isCorrect: true },
        { id: "b", text: "A type of neural network", isCorrect: false },
        { id: "c", text: "A database table", isCorrect: false },
        { id: "d", text: "A visualization tool", isCorrect: false }
      ]
    },
    {
      id: 3,
      question: "What is supervised learning?",
      answers: [
        { id: "a", text: "Learning without labels", isCorrect: false },
        { id: "b", text: "Learning from labeled training data", isCorrect: true },
        { id: "c", text: "Learning by trial and error", isCorrect: false },
        { id: "d", text: "Learning without data", isCorrect: false }
      ]
    },
    {
      id: 4,
      question: "What library is commonly used for data visualization in Python?",
      answers: [
        { id: "a", text: "NumPy", isCorrect: false },
        { id: "b", text: "Pandas", isCorrect: false },
        { id: "c", text: "Matplotlib", isCorrect: true },
        { id: "d", text: "Flask", isCorrect: false }
      ]
    },
    {
      id: 5,
      question: "What is overfitting in machine learning?",
      answers: [
        { id: "a", text: "When a model performs well on training but poorly on new data", isCorrect: true },
        { id: "b", text: "When a model is too simple", isCorrect: false },
        { id: "c", text: "When data is too clean", isCorrect: false },
        { id: "d", text: "When a model has no parameters", isCorrect: false }
      ]
    }
  ]
};

// Helper function to get questions by track
// Supports track names: frontend, backend, fullstack, mobile, datascience (or "data science")
export const getQuestionsByTrack = (track) => {
  const trackKey = normalizeTrackKey(track);
  return quizData[trackKey] || quizData.frontend; // Default to frontend if track not found
};
