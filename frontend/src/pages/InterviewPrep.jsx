import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import api from "../services/api";

function InterviewPrep() {
  const [questions, setQuestions] = useState({});

  const fetchQuestions = async () => {
    try {
      const atsData = JSON.parse(
        localStorage.getItem("atsData")
      );

      if (!atsData) {
        return;
      }

      const response = await api.post(
        "/interview/generate",
        {
          skills: atsData.foundSkills,
        }
      );

      setQuestions(response.data.questions);
    } catch (error) {
      console.error(
        "Error fetching questions:",
        error
      );
    }
  };

  useEffect(() => {
    fetchQuestions();
  }, []);

  return (
    <div style={{ display: "flex" }}>
      <Sidebar />

      <div style={{ flex: 1 }}>
        <Navbar />

        <div style={{ padding: "20px" }}>
          <h1>Interview Preparation</h1>

          {Object.keys(questions).length === 0 ? (
            <p>No questions available.</p>
          ) : (
            Object.entries(questions).map(
              ([skill, skillQuestions]) => (
                <div
                  key={skill}
                  style={{
                    border: "1px solid #ddd",
                    padding: "15px",
                    marginTop: "20px",
                    borderRadius: "10px",
                  }}
                >
                  <h2>
                    {skill.toUpperCase()}
                  </h2>

                  <ul>
                    {skillQuestions.map(
                      (question, index) => (
                        <li key={index}>
                          {question}
                        </li>
                      )
                    )}
                  </ul>
                </div>
              )
            )
          )}
        </div>
      </div>
    </div>
  );
}

export default InterviewPrep;