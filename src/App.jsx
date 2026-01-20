import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./pages/public/Landing";
import SignIn from "./pages/auth/SignIn";
import SignUp from "./pages/auth/SignUp";
import Goals from "./pages/Goals";
import Track from "./pages/Track";
import Profile from "./pages/Profile";
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
      </Routes>
    </Router>
  );
}

export default App;
