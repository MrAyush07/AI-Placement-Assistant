const ATSReport = require("../models/ATSReport");

const getReports = async (
  req,
  res
) => {
  try {

    const reports =
      await ATSReport.find()
      .sort({
        createdAt: -1
      });

    res.json(reports);

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }
};

module.exports = {
  getReports,
};