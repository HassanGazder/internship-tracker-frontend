import DashboardLayout from "../../components/layout/DashboardLayout";
import { useAuth } from "../../context/AuthContext";

function ProfilePage() {
  const { user } = useAuth();

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <h1 className="text-3xl font-bold text-white">Profile</h1>
        <p className="text-slate-400">
          Manage your personal information and account details.
        </p>

        <div className="rounded-3xl border border-slate-800 bg-slate-900/80 p-8">
          <div className="space-y-4">
            <div>
              <p className="text-sm text-slate-400">Name</p>
              <p className="text-white">{user?.name || "N/A"}</p>
            </div>

            <div>
              <p className="text-sm text-slate-400">Email</p>
              <p className="text-white">{user?.email || "N/A"}</p>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}

export default ProfilePage;