import DashboardLayout from "../../components/layout/DashboardLayout";
import PageHeader from "../../components/ui/PageHeader";
import { useAuth } from "../../context/useAuthContext";

const ProfilePage = () => {
  const { user } = useAuth();

  return (
    <DashboardLayout>
      <PageHeader
        title="Profile"
        subtitle="Manage your account and view your personal details."
      />

      <div className="grid grid-cols-1 gap-6 xl:grid-cols-3">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-lg backdrop-blur-xl xl:col-span-1">
          <div className="flex flex-col items-center text-center">
            <div className="mb-4 flex h-24 w-24 items-center justify-center rounded-full bg-cyan-500/20 text-3xl font-bold text-cyan-300">
              {user?.name?.charAt(0)?.toUpperCase() || "U"}
            </div>

            <h2 className="text-2xl font-bold text-white">{user?.name || "Student"}</h2>
            <p className="mt-2 text-sm text-slate-400">{user?.email || "No email"}</p>
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-lg backdrop-blur-xl xl:col-span-2">
          <h3 className="mb-6 text-xl font-semibold text-white">Account Details</h3>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-slate-900/40 p-4">
              <p className="text-xs uppercase tracking-wide text-slate-500">Full Name</p>
              <p className="mt-2 text-sm font-medium text-white">{user?.name || "-"}</p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-slate-900/40 p-4">
              <p className="text-xs uppercase tracking-wide text-slate-500">Email</p>
              <p className="mt-2 text-sm font-medium text-white">{user?.email || "-"}</p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-slate-900/40 p-4">
              <p className="text-xs uppercase tracking-wide text-slate-500">University</p>
              <p className="mt-2 text-sm font-medium text-white">{user?.university || "-"}</p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-slate-900/40 p-4">
              <p className="text-xs uppercase tracking-wide text-slate-500">Account Type</p>
              <p className="mt-2 text-sm font-medium text-white">Student</p>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default ProfilePage;