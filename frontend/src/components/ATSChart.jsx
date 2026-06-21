import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

function ATSChart() {
  const data = [
    {
      name: "Attempt 1",
      score: 65,
    },
    {
      name: "Attempt 2",
      score: 72,
    },
    {
      name: "Attempt 3",
      score: 78,
    },
    {
      name: "Attempt 4",
      score: 83,
    },
  ];

  return (
    <div className="bg-white p-6 rounded-xl shadow-lg">
      <h2 className="text-xl font-bold mb-4">
        ATS Score Trend
      </h2>

      <ResponsiveContainer
        width="100%"
        height={300}
      >
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />

          <XAxis dataKey="name" />

          <YAxis />

          <Tooltip />

          <Line
            type="monotone"
            dataKey="score"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default ATSChart;