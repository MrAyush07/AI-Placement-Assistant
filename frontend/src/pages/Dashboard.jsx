import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import ATSChart from "../components/ATSChart";

function Dashboard() {
  const [atsData, setAtsData] = useState(null);

  useEffect(() => {
    const data = JSON.parse(
      localStorage.getItem("atsData")
    );

    if (data) {
      setAtsData(data);
    }
  }, []);

  return (
    <div className="flex">
      <Sidebar />

      <div className="flex-1 bg-gray-100 min-h-screen">
        <Navbar />

        <div className="p-6">
          <h1 className="text-3xl font-bold mb-6">
            Dashboard
          </h1>

          {/* Stats Cards */}

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            {/* ATS Score */}

            <div className="bg-white shadow-lg rounded-xl p-6">
              <h3 className="text-gray-500">
                ATS Score
              </h3>

              <h1 className="text-4xl font-bold text-green-600 mt-2">
                {atsData?.atsScore || 0}%
              </h1>
            </div>

            {/* Skills Found */}

            <div className="bg-white shadow-lg rounded-xl p-6">
              <h3 className="text-gray-500">
                Skills Found
              </h3>

              <h1 className="text-4xl font-bold text-blue-600 mt-2">
                {atsData?.foundSkills?.length || 0}
              </h1>
            </div>

            {/* Missing Skills */}

            <div className="bg-white shadow-lg rounded-xl p-6">
              <h3 className="text-gray-500">
                Missing Skills
              </h3>

              <h1 className="text-4xl font-bold text-red-600 mt-2">
                {atsData?.missingSkills?.length || 0}
              </h1>
            </div>

          </div>

          {/* ATS Chart */}

          <div className="mt-8">
            <ATSChart />
          </div>

          {/* Recent Activity */}

          <div className="bg-white shadow-lg rounded-xl p-6 mt-8">
            <h2 className="text-2xl font-semibold mb-4">
              Recent Activity
            </h2>

            <ul className="space-y-3">

              <li>
                ✅ Resume analyzed successfully
              </li>

              <li>
                ✅ ATS Score generated
              </li>

              <li>
                ✅ Interview questions generated
              </li>

              <li>
                ✅ Job recommendations updated
              </li>

              <li>
                ✅ Resume suggestions generated
              </li>

            </ul>
          </div>

          {/* Skills Section */}

          <div className="bg-white shadow-lg rounded-xl p-6 mt-8">
            <h2 className="text-2xl font-semibold mb-4">
              Extracted Skills
            </h2>

            <div className="flex flex-wrap gap-3">

              {atsData?.foundSkills?.map(
                (skill, index) => (
                  <span
                    key={index}
                    className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full"
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

export default Dashboard;