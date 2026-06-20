import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

function Dashboard() {
  return (
    <div className="flex">
      <Sidebar />

      <div className="flex-1 bg-gray-100 min-h-screen">
        <Navbar />

        <div className="p-6">
          <h1 className="text-3xl font-bold mb-6">
            Dashboard
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            <div className="bg-white shadow-lg rounded-xl p-6">
              <h3 className="text-gray-500">
                ATS Score
              </h3>

              <h1 className="text-4xl font-bold text-green-600 mt-2">
                83%
              </h1>
            </div>

            <div className="bg-white shadow-lg rounded-xl p-6">
              <h3 className="text-gray-500">
                Skills Found
              </h3>

              <h1 className="text-4xl font-bold text-blue-600 mt-2">
                10
              </h1>
            </div>

            <div className="bg-white shadow-lg rounded-xl p-6">
              <h3 className="text-gray-500">
                Interview Questions
              </h3>

              <h1 className="text-4xl font-bold text-purple-600 mt-2">
                4
              </h1>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;