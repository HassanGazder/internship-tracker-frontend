import { FolderOpen } from "lucide-react";

const EmptyState = ({ title, description }) => {
  return (
    <div className="flex flex-col items-center justify-center rounded-3xl border border-dashed border-white/10 bg-white/5 py-20 text-center">
      <div className="mb-4 rounded-2xl bg-white/5 p-4">
        <FolderOpen className="text-slate-300" size={32} />
      </div>
      <h3 className="text-xl font-semibold text-white">{title}</h3>
      <p className="mt-2 max-w-md text-sm text-slate-400">{description}</p>
    </div>
  );
};

export default EmptyState;