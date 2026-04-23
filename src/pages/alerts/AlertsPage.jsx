import { useEffect, useState } from "react";
import {
  AlertTriangle,
  BellRing,
  CalendarClock,
  CircleAlert,
  Briefcase,
  RefreshCw,
} from "lucide-react";
import DashboardLayout from "../../components/layout/DashboardLayout";
import PageHeader from "../../components/common/PageHeader";
import { getDeadlineAlerts } from "../../services/alertServices";

const formatDate = (value) => {
  if (!value) {
    return "-";
  }

  return new Date(value).toLocaleDateString();
};

const getDaysLabel = (value) => {
  if (!value) {
    return "";
  }

  const today = new Date();
  const deadline = new Date(value);

  today.setHours(0, 0, 0, 0);
  deadline.setHours(0, 0, 0, 0);

  const diffInDays = Math.round((deadline - today) / (1000 * 60 * 60 * 24));

  if (diffInDays < 0) {
    const overdueDays = Math.abs(diffInDays);
    return overdueDays === 1 ? "1 day overdue" : `${overdueDays} days overdue`;
  }

  if (diffInDays === 0) {
    return "Due today";
  }

  if (diffInDays === 1) {
    return "Due in 1 day";
  }

  return `Due in ${diffInDays} days`;
};

const getStatusBadgeClass = (status) => {
  switch (status) {
    case "Interview":
      return "bg-amber-500/15 text-amber-300";
    case "Offer":
      return "bg-emerald-500/15 text-emerald-300";
    case "Rejected":
      return "bg-rose-500/15 text-rose-300";
    default:
      return "bg-indigo-500/15 text-indigo-300";
  }
};

const getDeadlineBadgeClass = (tone) => {
  switch (tone) {
    case "urgent":
      return "bg-amber-500/15 text-amber-300";
    case "overdue":
      return "bg-rose-500/15 text-rose-300";
    default:
      return "bg-cyan-500/15 text-cyan-300";
  }
};

const AlertSection = ({
  title,
  description,
  items,
  icon,
  tone,
  emptyMessage,
}) => {
  const SectionIcon = icon;

  return (
    <section className="rounded-3xl border border-slate-800 bg-slate-900/80 p-6 shadow-xl shadow-black/10">
      <div className="mb-6 flex items-start justify-between gap-4">
        <div>
          <h2 className="text-xl font-semibold text-white">{title}</h2>
          <p className="mt-1 text-sm text-slate-400">{description}</p>
        </div>
        <div className={`rounded-2xl p-3 ${getDeadlineBadgeClass(tone)}`}>
          <SectionIcon size={20} />
        </div>
      </div>

      {items.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-slate-700 bg-slate-950/50 p-8 text-center">
          <p className="text-sm text-slate-400">{emptyMessage}</p>
        </div>
      ) : (
        <div className="space-y-4">
          {items.map((item) => (
            <div
              key={item._id}
              className="flex flex-col gap-4 rounded-2xl border border-slate-800 bg-slate-950/60 p-4 md:flex-row md:items-center md:justify-between"
            >
              <div className="flex items-start gap-3">
                <div className="rounded-2xl bg-slate-800 p-3 text-cyan-300">
                  <Briefcase size={18} />
                </div>
                <div>
                  <h3 className="font-semibold text-white">{item.jobTitle}</h3>
                  <p className="mt-1 text-sm text-slate-400">
                    {item.companyName}
                  </p>
                  <p className="mt-2 text-xs uppercase tracking-wide text-slate-500">
                    Deadline {formatDate(item.deadline)}
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <span
                  className={`rounded-full px-3 py-1 text-xs font-medium ${getStatusBadgeClass(item.status)}`}
                >
                  {item.status}
                </span>
                <span
                  className={`rounded-full px-3 py-1 text-xs font-medium ${getDeadlineBadgeClass(tone)}`}
                >
                  {getDaysLabel(item.deadline)}
                </span>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

const AlertsPage = () => {
  const [alerts, setAlerts] = useState({
    urgentCount: 0,
    upcomingCount: 0,
    overdueCount: 0,
    urgentDeadlines: [],
    upcomingDeadlines: [],
    overdueDeadlines: [],
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchAlerts = async () => {
    try {
      setLoading(true);
      setError("");

      const response = await getDeadlineAlerts();
      setAlerts(response.data);
    } catch (fetchError) {
      setError(
        fetchError?.response?.data?.message ||
          "Failed to load deadline alerts.",
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAlerts();
  }, []);

  const summaryCards = [
    {
      title: "Urgent",
      value: alerts.urgentCount,
      icon: AlertTriangle,
      iconClass: "bg-amber-500/15 text-amber-300",
    },
    {
      title: "Upcoming",
      value: alerts.upcomingCount,
      icon: BellRing,
      iconClass: "bg-cyan-500/15 text-cyan-300",
    },
    {
      title: "Overdue",
      value: alerts.overdueCount,
      icon: CircleAlert,
      iconClass: "bg-rose-500/15 text-rose-300",
    },
  ];

  const totalAlerts =
    alerts.urgentCount + alerts.upcomingCount + alerts.overdueCount;

  return (
    <DashboardLayout>
      <div className="space-y-8">
        <PageHeader
          title="Deadline Alerts"
          subtitle="Stay on top of urgent, upcoming, and overdue internship deadlines."
          actions={
            <button
              onClick={fetchAlerts}
              className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              <RefreshCw size={16} />
              Refresh
            </button>
          }
        />

        {loading ? (
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {[...Array(3)].map((_, index) => (
              <div
                key={index}
                className="rounded-3xl border border-slate-800 bg-slate-900/80 p-6 shadow-xl shadow-black/10"
              />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {summaryCards.map((card) => {
              const CardIcon = card.icon;

              return (
                <div
                  key={card.title}
                  className="rounded-3xl border border-slate-800 bg-slate-900/80 p-6 shadow-xl shadow-black/10"
                >
                  <div className="mb-4 flex items-center justify-between">
                    <span className="text-sm text-slate-400">{card.title}</span>
                    <div className={`rounded-2xl p-3 ${card.iconClass}`}>
                      <CardIcon size={20} />
                    </div>
                  </div>

                  <h2 className="text-3xl font-bold text-white">{card.value}</h2>
                </div>
              );
            })}
          </div>
        )}

        {loading ? (
          <div className="space-y-6">
            {[...Array(3)].map((_, index) => (
              <div
                key={index}
                className="h-64 animate-pulse rounded-3xl border border-slate-800 bg-slate-900"
              />
            ))}
          </div>
        ) : error ? (
          <div className="rounded-3xl border border-rose-500/20 bg-rose-500/10 p-6 shadow-xl shadow-black/10">
            <h2 className="text-lg font-semibold text-rose-200">
              Could not load alerts
            </h2>
            <p className="mt-2 text-sm text-rose-200/80">{error}</p>
          </div>
        ) : totalAlerts === 0 ? (
          <div className="rounded-3xl border border-slate-800 bg-slate-900/80 p-10 text-center shadow-xl shadow-black/10">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-800 text-cyan-300">
              <CalendarClock size={26} />
            </div>
            <h2 className="mt-5 text-xl font-semibold text-white">
              No deadline alerts right now
            </h2>
            <p className="mt-2 text-sm text-slate-400">
              Add applications with deadlines in the next 7 days and they will
              appear here automatically.
            </p>
          </div>
        ) : (
          <div className="space-y-6">
            <AlertSection
              title="Urgent Deadlines"
              description="These applications need attention within the next 3 days."
              items={alerts.urgentDeadlines}
              icon={AlertTriangle}
              tone="urgent"
              emptyMessage="No urgent deadlines at the moment."
            />

            <AlertSection
              title="Upcoming Deadlines"
              description="These deadlines are approaching within the next 7 days."
              items={alerts.upcomingDeadlines}
              icon={BellRing}
              tone="upcoming"
              emptyMessage="No upcoming deadlines in the next 7 days."
            />

            <AlertSection
              title="Overdue Deadlines"
              description="These applications have already passed their deadline."
              items={alerts.overdueDeadlines}
              icon={CircleAlert}
              tone="overdue"
              emptyMessage="No overdue deadlines right now."
            />
          </div>
        )}
      </div>
    </DashboardLayout>
  );
};

export default AlertsPage;
