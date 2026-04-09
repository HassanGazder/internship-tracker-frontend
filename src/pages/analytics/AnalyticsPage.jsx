import DashboardLayout from "../../components/layout/DashboardLayout";
import PageHeader from "../../components/ui/PageHeader";
import { useApplications } from "../../context/useApplicationsContext";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";

const AnalyticsPage = () => {
  const { applications } = useApplications();

  const total = applications.length;
  const applied = applications.filter((a) => a.status === "Applied").length;
  const interview = applications.filter((a) => a.status === "Interview").length;
  const offer = applications.filter((a) => a.status === "Offer").length;
  const rejected = applications.filter((a) => a.status === "Rejected").length;

  const pieData = [
    { name: "Applied", value: applied },
    { name: "Interview", value: interview },
    { name: "Offer", value: offer },
    { name: "Rejected", value: rejected },
  ];

  const barData = [
    { name: "Applied", count: applied },
    { name: "Interview", count: interview },
    { name: "Offer", count: offer },
    { name: "Rejected", count: rejected },
  ];

  const COLORS = ["#38bdf8", "#facc15", "#34d399", "#f87171"];

  return (
    <DashboardLayout>
      <PageHeader
        title="Analytics"
        subtitle="Understand your internship application journey with smart insights."
      />

      <div className="mb-8 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
        {[
          { label: "Total Applications", value: total },
          { label: "Interviews", value: interview },
          { label: "Offers", value: offer },
          { label: "Rejected", value: rejected },
        ].map((card, index) => (
          <div
            key={index}
            className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-lg backdrop-blur-xl"
          >
            <p className="text-sm text-slate-400">{card.label}</p>
            <h3 className="mt-3 text-3xl font-bold text-white">{card.value}</h3>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-lg backdrop-blur-xl">
          <h2 className="mb-6 text-lg font-semibold text-white">Status Breakdown</h2>
          <div className="h-[320px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={pieData} dataKey="value" outerRadius={110} label>
                  {pieData.map((entry, index) => (
                    <Cell key={index} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-lg backdrop-blur-xl">
          <h2 className="mb-6 text-lg font-semibold text-white">Applications Overview</h2>
          <div className="h-[320px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={barData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                <XAxis dataKey="name" stroke="#94a3b8" />
                <YAxis stroke="#94a3b8" />
                <Tooltip />
                <Bar dataKey="count" fill="#38bdf8" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default AnalyticsPage;