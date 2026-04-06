import { NavLink } from "react-router-dom";

// eslint-disable-next-line no-unused-vars
const NavItem = ({ to, icon: IconComponent, label }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition-all ${
          isActive
            ? "bg-[var(--color-primary)] text-white"
            : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
        }`
      }
    >
      <IconComponent size={18} />
      <span>{label}</span>
    </NavLink>
  );
};

export default NavItem;