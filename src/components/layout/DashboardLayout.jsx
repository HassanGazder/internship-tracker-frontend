import { useState } from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import MobileSidebar from "./MobileSidebar";

const DashboardLayout = ({ children }) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[var(--color-surface)] flex">
      <Sidebar />
      <MobileSidebar mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} />

      <div className="flex-1 flex flex-col min-w-0">
        <Navbar setMobileOpen={setMobileOpen} />
        <main className="p-4 md:p-6 lg:p-8">{children}</main>
      </div>
    </div>
  );
};

export default DashboardLayout;