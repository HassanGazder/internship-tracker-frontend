import React from "react";

const MobileSidebar = ({ mobileOpen, setMobileOpen }) => {
  if (!mobileOpen) return null;

  return (
    <div className="fixed inset-0 z-40 md:hidden">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/50"
        onClick={() => setMobileOpen(false)}
      />
      {/* Sidebar */}
      <aside className="absolute left-0 top-0 h-full w-64 bg-[var(--color-surface)] flex flex-col">
        <div className="p-6 font-bold text-lg flex justify-between items-center">
          <span>Internship Tracker</span>
          <button onClick={() => setMobileOpen(false)}>✕</button>
        </div>
        <nav className="flex-1 px-4">
          {/* Navigation items will go here */}
        </nav>
      </aside>
    </div>
  );
};

export default MobileSidebar;
