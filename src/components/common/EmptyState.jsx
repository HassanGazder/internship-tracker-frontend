import { Briefcase } from "lucide-react";

const EmptyState = ({ title, description, action }) => {
  return (
    <div className="flex flex-col items-center justify-center rounded-3xl border border-dashed border-slate-300 bg-white/60 p-12 text-center shadow-sm">
      <div className="mb-4 rounded-2xl bg-indigo-100 p-4 text-indigo-600">
        <Briefcase size={32} />
      </div>
      <h3 className="text-xl font-bold text-slate-800">{title}</h3>
      <p className="mt-2 max-w-md text-slate-500">{description}</p>
      {action && <div className="mt-6">{action}</div>}
    </div>
  );
};

export default EmptyState;