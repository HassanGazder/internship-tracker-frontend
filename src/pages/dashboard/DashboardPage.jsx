import DashboardLayout from "../../components/layout/DashboardLayout";
import PageHeader from "../../components/common/PageHeader";
import StatCard from "../../components/common/StatCard";
import SectionCard from "../../components/common/SectionCard";
import EmptyState from "../../components/common/EmptyState";
import {
  BriefcaseBusiness,
  Clock3,
  CircleCheckBig,
  CalendarClock,
  Plus,
} from "lucide-react";

const DashboardPage = () => {
  // Temporary dummy data for UI preview
  const stats = [
    {
      title: "Total Applications",
      value: 12,
      subtitle: "Applications tracked so far",
      icon: BriefcaseBusiness,
      gradient: "bg-gradient-to-br from-indigo-500 to-violet-500",
    },
    {
      title: "Interviews",
      value: 3,
      subtitle: "Interview opportunities received",
      icon: CalendarClock,
      gradient: "bg-gradient-to-br from-cyan-500 to-sky-500",
    },
    {
      title: "Offers",
      value: 1,
      subtitle: "Internship offers received",
      icon: CircleCheckBig,
      gradient: "bg-gradient-to-br from-emerald-500 to-green-500",
    },
    {
      title: "Upcoming Deadlines",
      value: 4,
      subtitle: "Deadlines approaching soon",
      icon: Clock3,
      gradient: "bg-gradient-to-br from-amber-500 to-orange-500",
    },
  ];

  const recentApplications = [
    {
      company: "Careem",
      role: "Frontend Intern",
      status: "Applied",
      date: "12 Apr 2026",
    },
    {
      company: "Talabat",
      role: "Software Engineering Intern",
      status: "Interview",
      date: "14 Apr 2026",
    },
    {
      company: "Noon",
      role: "UI/UX Intern",
      status: "Offer",
      date: "16 Apr 2026",
    },
  ];

  const upcomingDeadlines = [
    {
      company: "Amazon",
      role: "Product Intern",
      deadline: "18 Apr 2026",
    },
    {
      company: "Microsoft",
      role: "Cloud Support Intern",
      deadline: "20 Apr 2026",
    },
  ];

  const getStatusBadge = (status) => {
    const base =
      "px-3 py-1 rounded-full text-xs font-medium border inline-flex items-center";

    switch (status) {
      case "Applied":
        return `${base} bg-blue-500/10 text-blue-400 border-blue-500/20`;
      case "Interview":
        return `${base} bg-yellow-500/10 text-yellow-400 border-yellow-500/20`;
      case "Offer":
        return `${base} bg-green-500/10 text-green-400 border-green-500/20`;
      case "Rejected":
        return `${base} bg-red-500/10 text-red-400 border-red-500/20`;
      default:
        return `${base} bg-slate-500/10 text-slate-400 border-slate-500/20`;
    }
  };

  return (
    <DashboardLayout>
      <PageHeader
        title="Student Dashboard"
        subtitle="Track your internship progress, applications, and opportunities in one place."
        action={
          <button className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-indigo-600 hover:bg-indigo-500 transition text-white font-medium shadow-lg">
            <Plus size={18} />
            Add Application
          </button>
        }
      />

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 mb-8">
        {stats.map((item) => (
          <StatCard key={item.title} {...item} />
        ))}
      </div>

      {/* Main grid */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        {/* Recent Applications */}
        <div className="xl:col-span-2">
          <SectionCard
            title="Recent Applications"
            subtitle="Your latest tracked internship applications."
            action={
              <button className="text-sm text-indigo-400 hover:text-indigo-300">
                View all
              </button>
            }
          >
            {recentApplications.length > 0 ? (
              <div className="space-y-4">
                {recentApplications.map((app, index) => (
                  <div
                    key={index}
                    className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 p-4 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition"
                  >
                    <div>
                      <h4 className="text-white font-semibold">{app.role}</h4>
                      <p className="text-slate-400 text-sm mt-1">{app.company}</p>
                    </div>

                    <div className="flex items-center gap-3">
                      <span className={getStatusBadge(app.status)}>
                        {app.status}
                      </span>
                      <span className="text-slate-400 text-sm">{app.date}</span>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <EmptyState
                title="No applications yet"
                description="Start by adding your first internship application."
              />
            )}
          </SectionCard>
        </div>

        {/* Upcoming Deadlines */}
        <div>
          <SectionCard
            title="Upcoming Deadlines"
            subtitle="Stay ahead of your important dates."
          >
            {upcomingDeadlines.length > 0 ? (
              <div className="space-y-4">
                {upcomingDeadlines.map((item, index) => (
                  <div
                    key={index}
                    className="p-4 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition"
                  >
                    <h4 className="text-white font-semibold">{item.role}</h4>
                    <p className="text-slate-400 text-sm mt-1">{item.company}</p>
                    <p className="text-amber-400 text-sm mt-3 font-medium">
                      Deadline: {item.deadline}
                    </p>
                  </div>
                ))}
              </div>
            ) : (
              <EmptyState
                title="No deadlines found"
                description="You currently don’t have any upcoming deadlines."
              />
            )}
          </SectionCard>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default DashboardPage;