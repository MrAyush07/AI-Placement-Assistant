require("dotenv").config();

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

// Routes
const authRoutes = require("./routes/authRoutes");
const resumeRoutes = require("./routes/resumeRoutes");
const atsRoutes = require("./routes/atsRoutes");
const interviewRoutes = require("./routes/interviewRoutes");
const jobRoutes = require("./routes/jobRoutes");
const reportRoutes = require("./routes/reportRoutes");
const adminRoutes = require("./routes/adminRoutes");
const suggestionRoutes = require("./routes/suggestionRoutes");

const app = express();

// ====================================
// Middleware
// ====================================

app.use(cors());
app.use(express.json());

// Serve uploaded resumes
app.use("/uploads", express.static("uploads"));

// ====================================
// Environment Check
// ====================================

console.log("ENV TEST:");
console.log(process.env.MONGO_URI);

// ====================================
// MongoDB Connection
// ====================================

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB Connected");
  })
  .catch((err) => {
    console.log("MongoDB Error:", err.message);
  });

// ====================================
// Home Route
// ====================================

app.get("/", (req, res) => {
  res.send("Backend Running Successfully");
});

// ====================================
// API Routes
// ====================================

// Authentication
app.use("/api/auth", authRoutes);

// Resume Upload
app.use("/api/resume", resumeRoutes);

// ATS Analyzer
app.use("/api/ats", atsRoutes);

// Interview Question Generator
app.use("/api/interview", interviewRoutes);

// Job Recommendation Engine
app.use("/api/jobs", jobRoutes);

// ATS History
app.use("/api/reports", reportRoutes);

// Admin Dashboard
app.use("/api/admin", adminRoutes);

// AI Resume Suggestions
app.use("/api/suggestions", suggestionRoutes);

// ====================================
// 404 Handler
// ====================================

app.use((req, res) => {
  res.status(404).json({
    message: "Route not found",
  });
});

// ====================================
// Server Start
// ====================================

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});