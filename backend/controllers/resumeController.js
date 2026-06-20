const Resume = require("../models/Resume");

const uploadResume = async (req, res) => {
  try {
    const resume = await Resume.create({
      filename: req.file.filename,
      filepath: req.file.path,
    });

    res.status(201).json({
      message: "Resume Uploaded",
      resume,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  uploadResume,
};