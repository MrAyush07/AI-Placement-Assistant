import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import api from "../services/api";

function ResumeSuggestions() {
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    fetchSuggestions();
  }, []);

  const fetchSuggestions = async () => {
    try {
      const atsData = JSON.parse(
        localStorage.getItem("atsData")
      );

      if (!atsData) return;

      const response = await api.post(
        "/suggestions/generate",
        {
          atsScore: atsData.atsScore,
          missingSkills: atsData.missingSkills,
        }
      );

      setSuggestions(
        response.data.suggestions
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div style={{ display: "flex" }}>
      <Sidebar />

      <div style={{ flex: 1 }}>
        <Navbar />

        <div style={{ padding: "20px" }}>
          <h1>Resume Suggestions</h1>

          {suggestions.map(
            (item, index) => (
              <div
                key={index}
                style={{
                  border: "1px solid #ddd",
                  padding: "15px",
                  marginTop: "15px",
                  borderRadius: "10px",
                }}
              >
                ✔ {item}
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
}

export default ResumeSuggestions;