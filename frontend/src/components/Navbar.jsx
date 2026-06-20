function Navbar() {
  return (
    <div className="bg-white shadow-sm border-b px-8 py-4 flex justify-between items-center">

      <div>
        <h2 className="text-2xl font-bold text-slate-800">
          Welcome, Ayush 👋
        </h2>

        <p className="text-gray-500 text-sm">
          Track your placements and improve your ATS score
        </p>
      </div>

      <div className="flex items-center gap-4">

        <div className="text-right">
          <p className="font-semibold text-slate-800">
            Ayush Yadav
          </p>

          <p className="text-sm text-gray-500">
            CSE Student
          </p>
        </div>

        <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold">
          A
        </div>

      </div>

    </div>
  );
}

export default Navbar;