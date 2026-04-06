import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  Briefcase,
  MessageSquareText,
  BarChart3,
  User,
} from "lucide-react";

const links = [
  {
    name: "Dashboard",
    path: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    name: "Applications",
    path: "/applications",
    icon: Briefcase,
  },
  {
    name: "Interviews",
    path: "/interviews",
    icon: MessageSquareText,
  },
  {
    name: "Analytics",
    path: "/analytics",
    icon: BarChart3,
  },
  {
    name: "Profile",
    path: "/profile",
    icon: User,
  },
];

function NavLinks() {
  return (
    <div className="space-y-2">
      {links.map((link) => {
        const Icon = link.icon;

        return (
          <NavLink
            key={link.path}
            to={link.path}
            className={({ isActive }) =>
              `flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-medium transition-all duration-200 ${
                isActive
                  ? "bg-indigo-600 text-white shadow-lg shadow-indigo-500/20"
                  : "text-slate-300 hover:bg-slate-800 hover:text-white"
              }`
            }
          >
            <Icon size={18} />
            <span>{link.name}</span>
          </NavLink>
        );
      })}
    </div>
  );
}

export default NavLinks;