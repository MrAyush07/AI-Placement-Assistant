const generateSuggestions = async (
  req,
  res
) => {
  try {

    const {
      atsScore,
      missingSkills
    } = req.body;

    const suggestions = [];

    if (
      missingSkills.includes("aws")
    ) {
      suggestions.push(
        "Learn AWS Cloud Fundamentals"
      );
    }

    if (
      missingSkills.includes(
        "docker"
      )
    ) {
      suggestions.push(
        "Learn Docker Containerization"
      );
    }

    if (atsScore < 90) {
      suggestions.push(
        "Add more industry-relevant projects"
      );

      suggestions.push(
        "Add quantified achievements"
      );

      suggestions.push(
        "Add certifications section"
      );
    }

    res.json({
      suggestions
    });

  } catch (error) {

    res.status(500).json({
      message:
        error.message
    });

  }
};

module.exports = {
  generateSuggestions
};