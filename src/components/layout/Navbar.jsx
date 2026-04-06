import React from "react";

const Navbar = ({ setMobileOpen }) => {
  return (
    <nav className="bg-white border-b border-[var(--color-border)] px-6 py-4 flex justify-between items-center">
      <h1 className="text-xl font-semibold">Dashboard</h1>
      <div className="flex items-center gap-4">
        <button
          className="md:hidden p-2"
          onClick={() => setMobileOpen(true)}
        >
          {/* Menu icon */}
          ☰
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
