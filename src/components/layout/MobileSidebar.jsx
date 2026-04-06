import { X } from "lucide-react";
import NavLinks from "./NavLinks";

function MobileSidebar({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />

      <div className="absolute left-0 top-0 h-full w-72 bg-slate-950 border-r border-slate-800 p-6 shadow-2xl">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-xl font-bold text-white">InternTrack</h1>
            <p className="text-sm text-slate-400">Student Portal</p>
          </div>

          <button
            onClick={onClose}
            className="rounded-xl border border-slate-700 p-2 text-slate-300 hover:bg-slate-800"
          >
            <X size={18} />
          </button>
        </div>

        <NavLinks />
      </div>
    </div>
  );
}

export default MobileSidebar;