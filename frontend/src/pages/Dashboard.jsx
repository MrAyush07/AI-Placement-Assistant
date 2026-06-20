import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

function Dashboard() {
  const atsData = JSON.parse(
    localStorage.getItem("atsData")
  );

  return (
    <div style={{ display: "flex" }}>
      <Sidebar />

      <div style={{ flex: 1 }}>
        <Navbar />

        <div style={{ padding: "20px" }}>
          <h1>Dashboard</h1>

          {/* Stats Cards */}
          <div
            style={{
              display: "flex",
              gap: "20px",
              marginTop: "20px",
              flexWrap: "wrap",
            }}
          >
            <div
              style={{
                border: "1px solid #ddd",
                padding: "20px",
                width: "220px",
                borderRadius: "10px",
              }}
            >
              <h3>ATS Score</h3>
              <h1>
                {atsData
                  ? `${atsData.atsScore}%`
                  : "N/A"}
              </h1>
            </div>

            <div
              style={{
                border: "1px solid #ddd",
                padding: "20px",
                width: "220px",
                borderRadius: "10px",
              }}
            >
              <h3>Skills Found</h3>
              <h1>
                {atsData
                  ? atsData.foundSkills.length
                  : 0}
              </h1>
            </div>

            <div
              style={{
                border: "1px solid #ddd",
                padding: "20px",
                width: "220px",
                borderRadius: "10px",
              }}
            >
              <h3>Missing Skills</h3>
              <h1>
                {atsData
                  ? atsData.missingSkills.length
                  : 0}
              </h1>
            </div>
          </div>

          {/* Skills Section */}
          {atsData && (
            <div
              style={{
                marginTop: "30px",
                display: "flex",
                gap: "30px",
              }}
            >
              <div
                style={{
                  border: "1px solid #ddd",
                  padding: "20px",
                  width: "350px",
                  borderRadius: "10px",
                }}
              >
                <h2>Skills Found</h2>

                <ul>
                  {atsData.foundSkills.map(
                    (skill, index) => (
                      <li key={index}>
                        {skill}
                      </li>
                    )
                  )}
                </ul>
              </div>

              <div
                style={{
                  border: "1px solid #ddd",
                  padding: "20px",
                  width: "350px",
                  borderRadius: "10px",
                }}
              >
                <h2>Missing Skills</h2>

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
            </div>
          )}

          {!atsData && (
            <div
              style={{
                marginTop: "30px",
              }}
            >
              <h3>
                No ATS report found.
              </h3>

              <p>
                Upload a resume first to
                view ATS analysis.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;