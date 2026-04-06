import { useEffect, useState } from "react";
import DashboardLayout from "../../components/layout/DashboardLayout";
import api from "../../lib/axios";

function ApplicationsPage() {
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchApplications = async () => {
    try {
      const res = await api.get("/applications");
      setApplications(res.data.applications || []);
    } catch (error) {
      console.error("Applications fetch error:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchApplications();
  }, []);

  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold text-white">Applications</h1>
          <p className="mt-2 text-slate-400">
            Manage and review all your internship applications.
          </p>
        </div>

        <div className="rounded-3xl border border-slate-800 bg-slate-900/80 p-6 shadow-xl shadow-black/10">
          {loading ? (
            <div className="space-y-3">
              {[...Array(6)].map((_, i) => (
                <div
                  key={i}
                  className="h-16 animate-pulse rounded-2xl bg-slate-800"
                />
              ))}
            </div>
          ) : applications.length === 0 ? (
            <div className="rounded-2xl border border-dashed border-slate-700 bg-slate-950/50 p-10 text-center">
              <h3 className="text-lg font-semibold text-white">
                No applications found
              </h3>
              <p className="mt-2 text-sm text-slate-400">
                Add your first internship application.
              </p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="min-w-full text-left text-sm text-slate-300">
                <thead className="border-b border-slate-800 text-slate-400">
                  <tr>
                    <th className="px-4 py-3">Company</th>
                    <th className="px-4 py-3">Job Title</th>
                    <th className="px-4 py-3">Location</th>
                    <th className="px-4 py-3">Status</th>
                    <th className="px-4 py-3">Applied Date</th>
                  </tr>
                </thead>
                <tbody>
                  {applications.map((app) => (
                    <tr
                      key={app._id}
                      className="border-b border-slate-800 hover:bg-slate-800/40"
                    >
                      <td className="px-4 py-4">{app.companyName}</td>
                      <td className="px-4 py-4">{app.jobTitle}</td>
                      <td className="px-4 py-4">{app.location || "N/A"}</td>
                      <td className="px-4 py-4">
                        <span className="rounded-full bg-indigo-500/15 px-3 py-1 text-xs font-medium text-indigo-300">
                          {app.status}
                        </span>
                      </td>
                      <td className="px-4 py-4">
                        {app.applicationDate
                          ? new Date(app.applicationDate).toLocaleDateString()
                          : "N/A"}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </DashboardLayout>
  );
}

export default ApplicationsPage;