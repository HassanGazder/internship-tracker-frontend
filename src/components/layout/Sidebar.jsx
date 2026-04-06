import NavLinks from "./NavLinks";

function Sidebar() {
  return (
    <aside className="hidden lg:flex lg:w-72 lg:flex-col border-r border-slate-800 bg-slate-950 px-6 py-6">
      <div className="mb-10">
        <h1 className="text-2xl font-bold tracking-tight text-white">
          InternTrack
        </h1>
        <p className="mt-2 text-sm text-slate-400">
          Student Internship Portal
        </p>
      </div>

      <NavLinks />

      <div className="mt-auto rounded-2xl border border-slate-800 bg-slate-900 p-4">
        <p className="text-sm font-medium text-white">Stay Consistent</p>
        <p className="mt-1 text-xs text-slate-400">
          Track every application, interview, and progress step.
        </p>
      </div>
    </aside>
  );
}

export default Sidebar;