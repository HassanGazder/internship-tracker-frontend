import { useAuth } from "../../context/AuthContext";

const DashboardPage = () => {
  const { user, logout } = useAuth();

  return (
    <div className="min-h-screen bg-slate-950 text-white p-8">
      <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
      <p className="text-slate-300 mb-4">Welcome, {user?.name}</p>

      <button
        onClick={logout}
        className="bg-red-500 hover:bg-red-400 px-5 py-2 rounded-xl"
      >
        Logout
      </button>
    </div>
  );
};

export default DashboardPage;