import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div
      style={{
        width: "250px",
        minHeight: "100vh",
        backgroundColor: "#1e293b",
        color: "white",
        padding: "20px",
        boxSizing: "border-box",
      }}
    >
      <h2>Placement AI</h2>

      <nav
        style={{
          marginTop: "30px",
          display: "flex",
          flexDirection: "column",
          gap: "15px",
        }}
      >
        <Link
          to="/dashboard"
          style={{
            color: "white",
            textDecoration: "none",
          }}
        >
          Dashboard
        </Link>

        <Link
          to="/upload"
          style={{
            color: "white",
            textDecoration: "none",
          }}
        >
          Resume Upload
        </Link>

        <Link
          to="/interview"
          style={{
            color: "white",
            textDecoration: "none",
          }}
        >
          Interview Prep
        </Link>

        <Link
          to="/jobs"
          style={{
            color: "white",
            textDecoration: "none",
          }}
        >
          Job Recommendations
        </Link>

        <Link
          to="/history"
          style={{
            color: "white",
            textDecoration: "none",
          }}
        >
          ATS History
        </Link>

        <Link
          to="/admin"
          style={{
            color: "white",
            textDecoration: "none",
          }}
        >
          Admin Dashboard
        </Link>

        <Link
          to="/suggestions"
          style={{
            color: "white",
            textDecoration: "none",
          }}
        >
          Resume Suggestions
        </Link>
      </nav>
    </div>
  );
}

export default Sidebar;