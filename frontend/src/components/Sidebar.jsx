import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="w-64 min-h-screen bg-slate-900 text-white p-6 shadow-lg">
      <h1 className="text-2xl font-bold mb-8 text-center">
        Placement AI
      </h1>

      <nav className="flex flex-col gap-3">

        <Link
          to="/dashboard"
          className="px-4 py-3 rounded-lg hover:bg-slate-700 transition duration-300"
        >
          📊 Dashboard
        </Link>

        <Link
          to="/upload"
          className="px-4 py-3 rounded-lg hover:bg-slate-700 transition duration-300"
        >
          📄 Resume Upload
        </Link>

        <Link
          to="/interview"
          className="px-4 py-3 rounded-lg hover:bg-slate-700 transition duration-300"
        >
          🎯 Interview Prep
        </Link>

        <Link
          to="/jobs"
          className="px-4 py-3 rounded-lg hover:bg-slate-700 transition duration-300"
        >
          💼 Job Recommendations
        </Link>

        <Link
          to="/history"
          className="px-4 py-3 rounded-lg hover:bg-slate-700 transition duration-300"
        >
          📈 ATS History
        </Link>

        <Link
          to="/admin"
          className="px-4 py-3 rounded-lg hover:bg-slate-700 transition duration-300"
        >
          ⚙️ Admin Dashboard
        </Link>

        <Link
          to="/suggestions"
          className="px-4 py-3 rounded-lg hover:bg-slate-700 transition duration-300"
        >
          🚀 Resume Suggestions
        </Link>

      </nav>

      <div className="mt-12 border-t border-slate-700 pt-4">
        <p className="text-sm text-slate-400 text-center">
          AI Placement Assistant
        </p>
      </div>
    </div>
  );
}

export default Sidebar;