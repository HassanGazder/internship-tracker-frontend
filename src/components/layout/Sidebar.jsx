import { GraduationCap } from "lucide-react";
import { navLinks } from "./NavLinks";
import NavItem from "./NavItems";

const Sidebar = () => {
  return (
    <aside className="hidden lg:flex w-72 min-h-screen bg-slate-950/80 border-r border-white/10 backdrop-blur-xl flex-col px-5 py-6 sticky top-0">
      {/* Logo */}
      <div className="flex items-center gap-3 mb-10 px-2">
        <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-indigo-500 to-cyan-500 flex items-center justify-center shadow-lg">
          <GraduationCap className="text-white" size={22} />
        </div>
        <div>
          <h1 className="text-white text-lg font-bold leading-tight">
            Internship Tracker
          </h1>
          <p className="text-slate-400 text-sm">Student Portal</p>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex flex-col gap-3">
        {navLinks.map((item) => (
          <NavItem
            key={item.name}
            to={item.path}
            icon={item.icon}
            label={item.name}
          />
        ))}
      </nav>

      {/* Bottom info */}
      <div className="mt-auto p-4 rounded-3xl bg-white/5 border border-white/10">
        <p className="text-sm text-slate-300 font-medium">
          Track smarter. Apply better.
        </p>
        <p className="text-xs text-slate-400 mt-1">
          Stay organized with your internship journey.
        </p>
      </div>
    </aside>
  );
};

export default Sidebar;