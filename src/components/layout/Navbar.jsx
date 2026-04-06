import { Menu, Bell, Search, LogOut } from "lucide-react";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Navbar = ({ onMenuClick }) => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  return (
    <header className="sticky top-0 z-30 bg-slate-950/70 backdrop-blur-xl border-b border-white/10 px-4 md:px-6 py-4">
      <div className="flex items-center justify-between gap-4">
        {/* Left */}
        <div className="flex items-center gap-3">
          <button
            onClick={onMenuClick}
            className="lg:hidden text-slate-300 hover:text-white"
          >
            <Menu size={24} />
          </button>

          <div>
            <h2 className="text-white text-lg md:text-xl font-semibold">
              Welcome back 👋
            </h2>
            <p className="text-slate-400 text-sm">
              Let’s manage your internship journey today.
            </p>
          </div>
        </div>

        {/* Right */}
        <div className="flex items-center gap-3">
          {/* Search */}
          <div className="hidden md:flex items-center gap-2 px-4 py-2 rounded-2xl bg-white/5 border border-white/10 min-w-[220px]">
            <Search size={16} className="text-slate-400" />
            <input
              type="text"
              placeholder="Search..."
              className="bg-transparent outline-none text-sm text-white placeholder:text-slate-400 w-full"
            />
          </div>

          {/* Bell */}
          <button className="w-11 h-11 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:text-white hover:bg-white/10 transition">
            <Bell size={18} />
          </button>

          {/* User */}
          <div className="hidden sm:flex items-center gap-3 px-4 py-2 rounded-2xl bg-white/5 border border-white/10">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-cyan-500 flex items-center justify-center text-white font-bold">
              {user?.name?.charAt(0)?.toUpperCase() || "U"}
            </div>
            <div className="text-left">
              <p className="text-white text-sm font-medium leading-tight">
                {user?.name || "Student"}
              </p>
              <p className="text-slate-400 text-xs">
                {user?.university || "University"}
              </p>
            </div>
          </div>

          {/* Logout */}
          <button
            onClick={() => {
              logout();
              navigate("/login");
            }}
            className="w-11 h-11 rounded-2xl bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-400 hover:bg-red-500/20 transition"
          >
            <LogOut size={18} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
