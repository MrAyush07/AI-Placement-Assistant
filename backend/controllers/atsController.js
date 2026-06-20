const fs = require("fs");
const pdfParse = require("pdf-parse");

const ATSReport = require("../models/ATSReport");

const analyzeResume = async (req, res) => {
  try {

    if (!req.file) {
      return res.status(400).json({
        message: "Please upload a resume"
      });
    }

    const pdfBuffer = fs.readFileSync(
      req.file.path
    );

    const pdfData = await pdfParse(
      pdfBuffer
    );

    const resumeText =
      pdfData.text.toLowerCase();

    const skillsDatabase = [
      "java",
      "python",
      "react",
      "node",
      "mongodb",
      "sql",
      "javascript",
      "html",
      "css",
      "git",
      "aws",
      "docker"
    ];

    const foundSkills = [];

    const missingSkills = [];

    skillsDatabase.forEach(
      (skill) => {

        if (
          resumeText.includes(skill)
        ) {
          foundSkills.push(skill);
        } else {
          missingSkills.push(skill);
        }

      }
    );

    const atsScore = Math.round(
      (
        foundSkills.length /
        skillsDatabase.length
      ) * 100
    );

    await ATSReport.create({
      atsScore,
      foundSkills,
      missingSkills
    });

    res.json({
      atsScore,
      foundSkills,
      missingSkills
    });

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }
};

module.exports = {
  analyzeResume
};