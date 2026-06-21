import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import api from "../services/api";

function AdminDashboard() {
  const [stats, setStats] = useState({
    totalReports: 0,
    averageATS: 0,
    highestATS: 0,
    topSkills: [],
  });

  useEffect(() => {
    fetchStats();
  }, []);

  const fetchStats = async () => {
    try {
      const response = await api.get(
        "/admin/stats"
      );

      setStats(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex">
      <Sidebar />

      <div className="flex-1 bg-gray-100 min-h-screen">
        <Navbar />

        <div className="p-6">

          <h1 className="text-3xl font-bold mb-6">
            Admin Dashboard
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-gray-500">
                Total Reports
              </h3>

              <h1 className="text-4xl font-bold text-blue-600">
                {stats.totalReports}
              </h1>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-gray-500">
                Average ATS
              </h3>

              <h1 className="text-4xl font-bold text-green-600">
                {stats.averageATS}%
              </h1>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-gray-500">
                Highest ATS
              </h3>

              <h1 className="text-4xl font-bold text-purple-600">
                {stats.highestATS}%
              </h1>
            </div>

          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg mt-8">

            <h2 className="text-2xl font-semibold mb-4">
              Top Skills
            </h2>

            <div className="flex flex-wrap gap-3">

              {stats.topSkills.map(
                (skill, index) => (
                  <span
                    key={index}
                    className="bg-blue-100 text-blue-700 px-3 py-2 rounded-full"
                  >
                    {skill}
                  </span>
                )
              )}

            </div>

          </div>

        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;