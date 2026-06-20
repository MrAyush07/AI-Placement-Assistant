import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import ResumeUpload from "./pages/ResumeUpload";
import InterviewPrep from "./pages/InterviewPrep";
import JobRecommendations from "./pages/JobRecommendations";
import ATSHistory from "./pages/ATSHistory";
import AdminDashboard from "./pages/AdminDashboard";
import ResumeSuggestions from "./pages/ResumeSuggestions";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Login */}
        <Route
          path="/"
          element={<Login />}
        />

        {/* Dashboard */}
        <Route
          path="/dashboard"
          element={<Dashboard />}
        />

        {/* Resume Upload */}
        <Route
          path="/upload"
          element={<ResumeUpload />}
        />

        {/* Interview Preparation */}
        <Route
          path="/interview"
          element={<InterviewPrep />}
        />

        {/* Job Recommendations */}
        <Route
          path="/jobs"
          element={<JobRecommendations />}
        />

        {/* ATS History */}
        <Route
          path="/history"
          element={<ATSHistory />}
        />

        {/* Admin Dashboard */}
        <Route
          path="/admin"
          element={<AdminDashboard />}
        />

        {/* Resume Suggestions */}
        <Route
          path="/suggestions"
          element={<ResumeSuggestions />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;