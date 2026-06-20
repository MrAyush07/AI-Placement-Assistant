import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import { useState } from "react";
import api from "../services/api";

function ResumeUpload() {
  const [file, setFile] = useState(null);
  const [atsData, setAtsData] = useState(null);

  const handleUpload = async () => {
    try {
      if (!file) {
        alert("Please select a resume");
        return;
      }

      const formData = new FormData();

      formData.append("resume", file);

      const response = await api.post(
        "/ats/analyze",
        formData,
        {
          headers: {
            "Content-Type":
              "multipart/form-data",
          },
        }
      );

      console.log(response.data);

      setAtsData(response.data);

      localStorage.setItem(
        "atsData",
        JSON.stringify(response.data)
      );

      alert("ATS Analysis Complete");

    } catch (error) {
      console.log(error);

      alert("Upload Failed");
    }
  };

  return (
    <div style={{ display: "flex" }}>
      <Sidebar />

      <div style={{ flex: 1 }}>
        <Navbar />

        <div style={{ padding: "20px" }}>
          <h1>Upload Resume</h1>

          <input
            type="file"
            accept=".pdf"
            onChange={(e) =>
              setFile(e.target.files[0])
            }
          />

          <button
            onClick={handleUpload}
            style={{
              marginLeft: "10px",
              padding: "10px",
            }}
          >
            Analyze Resume
          </button>

          {file && (
            <p>
              Selected: {file.name}
            </p>
          )}

          {atsData && (
            <div
              style={{
                marginTop: "20px",
                border: "1px solid #ccc",
                padding: "15px",
                borderRadius: "10px",
              }}
            >
              <h2>
                ATS Score: {atsData.atsScore}%
              </h2>

              <h3>Skills Found</h3>

              <ul>
                {atsData.foundSkills.map(
                  (skill, index) => (
                    <li key={index}>
                      {skill}
                    </li>
                  )
                )}
              </ul>

              <h3>Missing Skills</h3>

              <ul>
                {atsData.missingSkills.map(
                  (skill, index) => (
                    <li key={index}>
                      {skill}
                    </li>
                  )
                )}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ResumeUpload;