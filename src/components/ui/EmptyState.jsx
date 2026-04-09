import { Inbox } from "lucide-react";

const EmptyState = ({
  title = "No data found",
  description = "There is nothing to show here yet.",
  action = null,
}) => {
  return (
    <div className="flex min-h-[320px] flex-col items-center justify-center rounded-3xl border border-white/10 bg-white/5 p-10 text-center backdrop-blur-xl">
      <div className="mb-4 rounded-2xl bg-slate-800/80 p-4">
        <Inbox className="h-10 w-10 text-cyan-400" />
      </div>

      <h3 className="text-xl font-semibold text-white">{title}</h3>
      <p className="mt-2 max-w-md text-sm text-slate-400">{description}</p>

      {action && <div className="mt-6">{action}</div>}
    </div>
  );
};

export default EmptyState;