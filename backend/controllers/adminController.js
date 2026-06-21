const ATSReport = require("../models/ATSReport");

const getAdminStats = async (req, res) => {
  try {
    const reports = await ATSReport.find();

    const totalReports = reports.length;

    const averageATS =
      totalReports > 0
        ? Math.round(
            reports.reduce(
              (sum, report) =>
                sum + report.atsScore,
              0
            ) / totalReports
          )
        : 0;

    const highestATS =
      totalReports > 0
        ? Math.max(
            ...reports.map(
              (r) => r.atsScore
            )
          )
        : 0;

    const skills = {};

    reports.forEach((report) => {
      report.foundSkills.forEach(
        (skill) => {
          skills[skill] =
            (skills[skill] || 0) + 1;
        }
      );
    });

    const topSkills =
      Object.entries(skills)
        .sort(
          (a, b) => b[1] - a[1]
        )
        .slice(0, 5)
        .map((item) => item[0]);

    res.json({
      totalReports,
      averageATS,
      highestATS,
      topSkills,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  getAdminStats,
};