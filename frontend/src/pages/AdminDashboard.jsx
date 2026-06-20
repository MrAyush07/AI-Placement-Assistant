import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import api from "../services/api";

function AdminDashboard() {

  const [stats, setStats] =
    useState(null);

  useEffect(() => {
    fetchStats();
  }, []);

  const fetchStats =
    async () => {
      try {

        const response =
          await api.get(
            "/admin/stats"
          );

        setStats(
          response.data
        );

      } catch (error) {

        console.log(error);

      }
    };

  if (!stats) {
    return (
      <h2>
        Loading...
      </h2>
    );
  }

  return (
    <div
      style={{
        display: "flex"
      }}
    >
      <Sidebar />

      <div
        style={{
          flex: 1
        }}
      >
        <Navbar />

        <div
          style={{
            padding: "20px"
          }}
        >
          <h1>
            Admin Dashboard
          </h1>

          <div
            style={{
              display:
                "flex",
              gap: "20px",
              marginTop:
                "20px"
            }}
          >
            <div
              style={{
                border:
                  "1px solid #ddd",
                padding:
                  "20px",
                width:
                  "220px"
              }}
            >
              <h3>
                Total Reports
              </h3>

              <h1>
                {
                  stats.totalReports
                }
              </h1>
            </div>

            <div
              style={{
                border:
                  "1px solid #ddd",
                padding:
                  "20px",
                width:
                  "220px"
              }}
            >
              <h3>
                Average ATS
              </h3>

              <h1>
                {
                  stats.averageATS
                }
                %
              </h1>
            </div>

            <div
              style={{
                border:
                  "1px solid #ddd",
                padding:
                  "20px",
                width:
                  "220px"
              }}
            >
              <h3>
                Highest ATS
              </h3>

              <h1>
                {
                  stats.highestATS
                }
                %
              </h1>
            </div>
          </div>

          <div
            style={{
              marginTop:
                "30px"
            }}
          >
            <h2>
              Top Skills
            </h2>

            <ul>
              {stats.topSkills.map(
                (
                  skill,
                  index
                ) => (
                  <li
                    key={
                      index
                    }
                  >
                    {skill}
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;