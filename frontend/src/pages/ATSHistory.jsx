import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import api from "../services/api";

function ATSHistory() {

  const [reports, setReports] =
    useState([]);

  useEffect(() => {
    fetchReports();
  }, []);

  const fetchReports =
    async () => {
      try {

        const response =
          await api.get(
            "/reports/history"
          );

        setReports(
          response.data
        );

      } catch (error) {

        console.log(error);

      }
    };

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
            ATS History
          </h1>

          {reports.map(
            (report) => (
              <div
                key={report._id}
                style={{
                  border:
                    "1px solid #ddd",
                  padding: "15px",
                  marginTop:
                    "15px",
                  borderRadius:
                    "10px",
                }}
              >
                <h3>
                  ATS Score:
                  {report.atsScore}%
                </h3>

                <p>
                  Date:
                  {new Date(
                    report.createdAt
                  ).toLocaleDateString()}
                </p>

              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
}

export default ATSHistory;