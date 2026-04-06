import { NavLink } from "react-router-dom";

const NavItem = ({ to, label, icon: Icon, onClick }) => { // eslint-disable-line no-unused-vars
  return (
    <NavLink
      to={to}
      onClick={onClick}
      className={({ isActive }) =>
        `flex items-center gap-3 px-4 py-3 rounded-2xl transition-all duration-200 text-sm font-medium group ${
          isActive
            ? "bg-indigo-600 text-white shadow-lg"
            : "text-slate-300 hover:bg-white/5 hover:text-white"
        }`
      }
    >
      <Icon size={18} className="shrink-0" />
      <span>{label}</span>
    </NavLink>
  );
};

export default NavItem;