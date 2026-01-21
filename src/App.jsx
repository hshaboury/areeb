import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AssessmentProvider } from "./context/AssessmentContext";
import Landing from "./pages/public/Landing";
import SignIn from "./pages/auth/SignIn";
import SignUp from "./pages/auth/SignUp";
import Goals from "./pages/Goals";
import Track from "./pages/Track";
import Profile from "./pages/Profile";
import KnowledgeCheck from "./pages/assessment/KnowledgeCheck";
import Quiz from "./pages/assessment/Quiz";
import Analysis from "./pages/assessment/Analysis";
import QuickSkillCheck from "./pages/assessment/QuickSkillCheck";
import TopicsAnalysis from "./pages/assessment/TopicsAnalysis";
import AIQuiz from "./pages/assessment/AIQuiz";
import AIQuizReview from "./pages/assessment/AIQuizReview";
import FinalResult from "./pages/results/FinalResult";
import ChoosePlan from "./pages/results/ChoosePlan";
import RoadmapResult from "./pages/results/RoadmapResult";

function App() {
  return (
    <AssessmentProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<SignIn />} />
          <Route path="/register" element={<SignUp />} />
          <Route path="/goals" element={<Goals />} />
          <Route path="/track" element={<Track />} />
          <Route path="/profile" element={<Profile />} />
          
          {/* New Assessment Flow */}
          <Route path="/assessment/quick-skill-check" element={<QuickSkillCheck />} />
          <Route path="/assessment/topics-analysis" element={<TopicsAnalysis />} />
          <Route path="/assessment/ai-quiz" element={<AIQuiz />} />
          <Route path="/assessment/ai-quiz-review" element={<AIQuizReview />} />
          
          {/* Legacy assessment routes - keeping for backwards compatibility */}
          <Route path="/assessment/knowledge-check" element={<KnowledgeCheck />} />
          <Route path="/assessment/quiz" element={<Quiz />} />
          <Route path="/assessment/analysis" element={<Analysis />} />
          
          {/* Results Flow */}
          <Route path="/results/final" element={<FinalResult />} />
          <Route path="/results/choose-plan" element={<ChoosePlan />} />
          <Route path="/results/roadmap" element={<RoadmapResult />} />
        </Routes>
      </Router>
    </AssessmentProvider>
  );
}

export default App;
