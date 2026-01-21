import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AssessmentProvider } from "./context/AssessmentContext";
import Landing from "./pages/public/Landing";
import SignIn from "./pages/auth/SignIn";
import SignUp from "./pages/auth/SignUp";
import Goals from "./pages/onboarding/Goals";
import Track from "./pages/onboarding/Track";
import Profile from "./pages/onboarding/Profile";
import QuickSkillCheck from "./pages/assessment/QuickSkillCheck";
import TopicsAnalysis from "./pages/assessment/TopicsAnalysis";
import AIQuiz from "./pages/assessment/AIQuiz";
import AIQuizReview from "./pages/assessment/AIQuizReview";
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
          
          {/* Results Flow */}
          <Route path="/results/choose-plan" element={<ChoosePlan />} />
          <Route path="/results/roadmap" element={<RoadmapResult />} />
        </Routes>
      </Router>
    </AssessmentProvider>
  );
}

export default App;
