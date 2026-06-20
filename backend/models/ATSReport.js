const mongoose = require("mongoose");

const ATSReportSchema = new mongoose.Schema({
  atsScore: {
    type: Number,
    required: true,
  },

  foundSkills: [
    String
  ],

  missingSkills: [
    String
  ],

  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model(
  "ATSReport",
  ATSReportSchema
);