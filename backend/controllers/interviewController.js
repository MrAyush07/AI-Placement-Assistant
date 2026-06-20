const questionBank = {
  java: [
    "What is JVM?",
    "Difference between JDK and JRE?",
    "Explain OOP concepts."
  ],

  react: [
    "What are React Hooks?",
    "Explain useEffect().",
    "What is Virtual DOM?"
  ],

  mongodb: [
    "What is Aggregation?",
    "Difference between SQL and MongoDB?",
    "What are Indexes?"
  ],

  node: [
    "What is Node.js?",
    "What is Event Loop?",
    "Difference between Node.js and Express?"
  ],

  python: [
    "What are Python decorators?",
    "Difference between List and Tuple?",
    "Explain OOP in Python."
  ],

  sql: [
    "What is a Primary Key?",
    "Difference between DELETE and TRUNCATE?",
    "What are Joins?"
  ],

  javascript: [
    "What is Closure?",
    "Difference between var, let and const?",
    "Explain Event Loop in JavaScript."
  ]
};

const generateQuestions = async (req, res) => {
  try {

    const { skills } = req.body;

    const questions = {};

    skills.forEach((skill) => {
      const skillName =
        skill.toLowerCase();

      if (
        questionBank[skillName]
      ) {
        questions[skillName] =
          questionBank[skillName];
      }
    });

    res.json({
      questions
    });

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }
};

module.exports = {
  generateQuestions
};