import { MessageSquareQuote } from "lucide-react";

const InterviewEmptyState = ({ onAdd }) => {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-10 text-center">
      <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-indigo-500/20">
        <MessageSquareQuote className="h-8 w-8 text-indigo-400" />
      </div>
      <h3 className="text-2xl font-bold text-white">No interview reflections yet</h3>
      <p className="mt-2 text-slate-400 max-w-xl mx-auto">
        Start documenting your interviews so you can track what went well,
        improve your answers, and become more confident over time.
      </p>
      <button
        onClick={onAdd}
        className="mt-6 rounded-xl bg-indigo-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-indigo-500"
      >
        Add First Reflection
      </button>
    </div>
  );
};

export default InterviewEmptyState;