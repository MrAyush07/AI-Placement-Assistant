import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import api from "../services/api";

function JobRecommendations() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    try {
      const atsData = JSON.parse(
        localStorage.getItem("atsData")
      );

      if (!atsData) return;

      const response = await api.post(
        "/jobs/recommend",
        {
          skills: atsData.foundSkills,
        }
      );

      setJobs(
        response.data.recommendedJobs
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
          <h1>
            Recommended Jobs
          </h1>

          {jobs.length === 0 ? (
            <p>
              No recommendations found.
            </p>
          ) : (
            jobs.map((job, index) => (
              <div
                key={index}
                style={{
                  border:
                    "1px solid #ddd",
                  padding: "15px",
                  marginTop: "15px",
                  borderRadius:
                    "10px",
                }}
              >
                <h3>{job}</h3>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default JobRecommendations;