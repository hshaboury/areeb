import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./pages/public/Landing";
import SignIn from "./pages/auth/SignIn";
import SignUp from "./pages/auth/SignUp";
import Goals from "./pages/Goals";
import Track from "./pages/Track";
import Profile from "./pages/Profile";
import KnowledgeCheck from "./pages/assessment/KnowledgeCheck";
import Quiz from "./pages/assessment/Quiz";
import Analysis from "./pages/assessment/Analysis";
import FinalResult from "./pages/results/FinalResult";
import RoadmapResult from "./pages/results/RoadmapResult";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/register" element={<SignUp />} />
        <Route path="/goals" element={<Goals />} />
        <Route path="/track" element={<Track />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/assessment/knowledge-check" element={<KnowledgeCheck />} />
        <Route path="/assessment/quiz" element={<Quiz />} />
        <Route path="/assessment/analysis" element={<Analysis />} />
        <Route path="/results/final" element={<FinalResult />} />
        <Route path="/results/roadmap" element={<RoadmapResult />} />
      </Routes>
    </Router>
  );
}

export default App;
