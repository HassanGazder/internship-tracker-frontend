import DashboardLayout from "../../components/layout/DashboardLayout";
import PageHeader from "../../components/common/PageHeader";
import AnalyticsCard from "../../pages/analytics/AnalyticsCard";
import StatusPieChart from "../../pages/analytics/StatusPieChart";
import { useApplications } from "../../context/useApplicationsContext";

const AnalyticsPage = () => {
  const { applications } = useApplications();

  const total = applications.length;
  const applied = applications.filter((app) => app.status === "Applied").length;
  const interview = applications.filter((app) => app.status === "Interview").length;
  const offer = applications.filter((app) => app.status === "Offer").length;
  const rejected = applications.filter((app) => app.status === "Rejected").length;

  const chartData = [
    { name: "Applied", value: applied },
    { name: "Interview", value: interview },
    { name: "Offer", value: offer },
    { name: "Rejected", value: rejected },
  ];

  return (
    <DashboardLayout>
      <PageHeader
        title="Analytics"
        subtitle="Understand your internship application progress through insights and stats."
      />

      <div className="mb-8 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
        <AnalyticsCard title="Total Applications" value={total} />
        <AnalyticsCard title="Applied" value={applied} />
        <AnalyticsCard title="Interviews" value={interview} />
        <AnalyticsCard title="Offers" value={offer} />
      </div>

      <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
        <StatusPieChart data={chartData} />

        <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-6">
          <h3 className="mb-4 text-xl font-semibold text-white">Quick Insights</h3>
          <div className="space-y-4 text-slate-300">
            <p>📌 You have applied to <span className="font-semibold text-white">{total}</span> internships.</p>
            <p>🎯 You currently have <span className="font-semibold text-white">{interview}</span> interview-stage applications.</p>
            <p>🏆 You have received <span className="font-semibold text-white">{offer}</span> offer(s).</p>
            <p>⚠️ Rejected applications: <span className="font-semibold text-white">{rejected}</span>.</p>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default AnalyticsPage;