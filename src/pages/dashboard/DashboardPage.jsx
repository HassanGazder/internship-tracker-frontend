import { useEffect, useState } from "react";
import DashboardLayout from "../../components/layout/DashboardLayout";
import api from "../../lib/axios";
import {
  Briefcase,
  Clock3,
  CheckCircle2,
  XCircle,
} from "lucide-react";

function DashboardPage() {
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchApplications = async () => {
    try {
      const res = await api.get("/applications");
      setApplications(res.data.applications || []);
    } catch (error) {
      console.error("Dashboard fetch error:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchApplications();
  }, []);

  const total = applications.length;
  const applied = applications.filter((app) => app.status === "Applied").length;
  const interviews = applications.filter((app) => app.status === "Interview").length;
  const offers = applications.filter((app) => app.status === "Offer").length;
  const rejected = applications.filter((app) => app.status === "Rejected").length;

  const stats = [
    {
      title: "Total Applications",
      value: total,
      icon: Briefcase,
    },
    {
      title: "Applied",
      value: applied,
      icon: Clock3,
    },
    {
      title: "Offers",
      value: offers,
      icon: CheckCircle2,
    },
    {
      title: "Rejected",
      value: rejected,
      icon: XCircle,
    },
  ];

  return (
    <DashboardLayout>
      <div className="space-y-8">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-white">
            Dashboard
          </h1>
          <p className="mt-2 text-slate-400">
            Overview of your internship journey.
          </p>
        </div>

        {/* Stats */}
        {loading ? (
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {[...Array(4)].map((_, i) => (
              <div
                key={i}
                className="h-32 animate-pulse rounded-3xl border border-slate-800 bg-slate-900"
              />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {stats.map((stat, index) => {
              const Icon = stat.icon;

              return (
                <div
                  key={index}
                  className="rounded-3xl border border-slate-800 bg-slate-900/80 p-6 shadow-xl shadow-black/10"
                >
                  <div className="mb-4 flex items-center justify-between">
                    <span className="text-sm text-slate-400">{stat.title}</span>
                    <div className="rounded-2xl bg-slate-800 p-3 text-indigo-400">
                      <Icon size={20} />
                    </div>
                  </div>

                  <h2 className="text-3xl font-bold text-white">{stat.value}</h2>
                </div>
              );
            })}
          </div>
        )}

        {/* Recent Applications */}
        <div className="rounded-3xl border border-slate-800 bg-slate-900/80 p-6 shadow-xl shadow-black/10">
          <div className="mb-6 flex items-center justify-between">
            <div>
              <h2 className="text-xl font-semibold text-white">
                Recent Applications
              </h2>
              <p className="mt-1 text-sm text-slate-400">
                Your latest internship submissions.
              </p>
            </div>
          </div>

          {loading ? (
            <div className="space-y-3">
              {[...Array(4)].map((_, i) => (
                <div
                  key={i}
                  className="h-16 animate-pulse rounded-2xl bg-slate-800"
                />
              ))}
            </div>
          ) : applications.length === 0 ? (
            <div className="rounded-2xl border border-dashed border-slate-700 bg-slate-950/50 p-10 text-center">
              <h3 className="text-lg font-semibold text-white">
                No applications yet
              </h3>
              <p className="mt-2 text-sm text-slate-400">
                Start by adding your first internship application.
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              {applications.slice(0, 5).map((app) => (
                <div
                  key={app._id}
                  className="flex flex-col gap-3 rounded-2xl border border-slate-800 bg-slate-950/60 p-4 md:flex-row md:items-center md:justify-between"
                >
                  <div>
                    <h3 className="font-semibold text-white">{app.jobTitle}</h3>
                    <p className="text-sm text-slate-400">{app.companyName}</p>
                  </div>

                  <div className="flex flex-wrap items-center gap-3">
                    <span className="rounded-full border border-slate-700 px-3 py-1 text-xs text-slate-300">
                      {app.location || "N/A"}
                    </span>

                    <span className="rounded-full bg-indigo-500/15 px-3 py-1 text-xs font-medium text-indigo-300">
                      {app.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Interview Summary */}
        <div className="rounded-3xl border border-slate-800 bg-slate-900/80 p-6 shadow-xl shadow-black/10">
          <h2 className="text-xl font-semibold text-white">
            Interview Progress
          </h2>
          <p className="mt-2 text-sm text-slate-400">
            You currently have <span className="font-semibold text-white">{interviews}</span> application(s) in interview stage.
          </p>
        </div>
      </div>
    </DashboardLayout>
  );
}

export default DashboardPage;