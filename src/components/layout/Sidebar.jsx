import React from "react";

const Sidebar = () => {
  return (
    <aside className="hidden md:flex w-64 bg-[var(--color-surface)] border-r border-[var(--color-border)] h-screen flex-col">
      <div className="p-6 font-bold text-lg">Internship Tracker</div>
      <nav className="flex-1 px-4">
        {/* Navigation items will go here */}
      </nav>
    </aside>
  );
};

export default Sidebar;
