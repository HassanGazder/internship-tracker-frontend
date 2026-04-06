import { Briefcase, Clock3, CheckCircle2, XCircle } from "lucide-react";
import { getStatusCount } from "../../utils/ApplicationHelper";

const ApplicationStats = ({ applications }) => {
  const stats = [
    {
      label: "Total Applications",
      value: applications.length,
      icon: <Briefcase size={20} />,
      bg: "bg-indigo-100 text-indigo-700",
    },
    {
      label: "Interviews",
      value: getStatusCount(applications, "Interview"),
      icon: <Clock3 size={20} />,
      bg: "bg-amber-100 text-amber-700",
    },
    {
      label: "Offers",
      value: getStatusCount(applications, "Offer"),
      icon: <CheckCircle2 size={20} />,
      bg: "bg-emerald-100 text-emerald-700",
    },
    {
      label: "Rejected",
      value: getStatusCount(applications, "Rejected"),
      icon: <XCircle size={20} />,
      bg: "bg-rose-100 text-rose-700",
    },
  ];

  return (
    <div className="mb-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {stats.map((item) => (
        <div
          key={item.label}
          className="rounded-3xl border border-slate-200 bg-white/80 p-5 shadow-sm backdrop-blur"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-slate-500">{item.label}</p>
              <h3 className="mt-2 text-3xl font-bold text-slate-900">
                {item.value}
              </h3>
            </div>
            <div className={`rounded-2xl p-3 ${item.bg}`}>{item.icon}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ApplicationStats;