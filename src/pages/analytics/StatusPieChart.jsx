import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

const COLORS = ["#38bdf8", "#facc15", "#4ade80", "#f87171"];

const StatusPieChart = ({ data }) => {
  return (
    <div className="h-[350px] rounded-3xl border border-slate-800 bg-slate-900/60 p-6">
      <h3 className="mb-4 text-xl font-semibold text-white">Application Status Breakdown</h3>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie data={data} dataKey="value" nameKey="name" outerRadius={110}>
            {data.map((entry, index) => (
              <Cell key={index} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default StatusPieChart;