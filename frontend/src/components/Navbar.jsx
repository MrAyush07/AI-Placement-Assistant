import { useEffect, useState } from "react";

function Navbar() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = JSON.parse(
      localStorage.getItem("user")
    );

    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  return (
    <div className="bg-white px-8 py-4 border-b flex justify-between items-center">
      <div>
        <h1 className="text-4xl font-bold">
          Welcome, {user?.name || "Riya"} 👋
        </h1>

        <p className="text-gray-500">
          Track your placements and improve your ATS score
        </p>
      </div>

      <div className="flex items-center gap-4">
        <div className="text-right">
          <h3 className="font-semibold">
            {user?.name || "Riya Sahu"}
          </h3>

          <p className="text-gray-500 text-sm">
            CSE Student
          </p>
        </div>

        <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">
          {(user?.name || "Riya")
            .charAt(0)
            .toUpperCase()}
        </div>
      </div>
    </div>
  );
}

export default Navbar;