const recommendJobs = async (req, res) => {
  try {
    const { skills } = req.body;

    const jobs = [];

    const lowerSkills =
      skills.map(skill =>
        skill.toLowerCase()
      );

    if (
      lowerSkills.includes("react") &&
      lowerSkills.includes("node") &&
      lowerSkills.includes("mongodb")
    ) {
      jobs.push(
        "MERN Stack Developer"
      );
    }

    if (
      lowerSkills.includes("react")
    ) {
      jobs.push(
        "Frontend Developer"
      );
    }

    if (
      lowerSkills.includes("java")
    ) {
      jobs.push(
        "Java Developer"
      );
    }

    if (
      lowerSkills.includes("python")
    ) {
      jobs.push(
        "Python Developer"
      );
    }

    jobs.push(
      "Software Engineer"
    );

    res.json({
      recommendedJobs: jobs
    });

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }
};

module.exports = {
  recommendJobs
};