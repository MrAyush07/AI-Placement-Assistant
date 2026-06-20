import { Routes, Route } from "react-router-dom";

import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import ResumeUpload from "../pages/ResumeUpload";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />

      <Route
        path="/dashboard"
        element={<Dashboard />}
      />

      <Route
        path="/upload"
        element={<ResumeUpload />}
      />
    </Routes>
  );
}

export default AppRoutes;