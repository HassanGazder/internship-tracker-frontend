import { CalendarDays, Pencil, Trash2, Star } from "lucide-react";

const InterviewCard = ({ interview, onEdit, onDelete }) => {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 shadow-xl transition hover:border-indigo-400/40">
      <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
        <div>
          <h3 className="text-xl font-bold text-white">
            {interview.application?.jobTitle || "Untitled Role"}
          </h3>
          <p className="text-sm text-slate-400">
            {interview.application?.companyName || "Unknown Company"}
          </p>
        </div>

        <div className="flex items-center gap-2 rounded-xl border border-yellow-400/20 bg-yellow-400/10 px-3 py-2 text-yellow-300">
          <Star className="h-4 w-4" />
          <span className="text-sm font-semibold">{interview.rating}/10</span>
        </div>
      </div>

      <div className="mt-4 flex items-center gap-2 text-sm text-slate-400">
        <CalendarDays className="h-4 w-4" />
        {new Date(interview.interviewDate).toLocaleDateString()}
      </div>

      <div className="mt-5 grid gap-4 md:grid-cols-3">
        <div className="rounded-2xl bg-slate-900/60 p-4">
          <p className="text-xs font-semibold uppercase tracking-wider text-indigo-400">
            Questions Asked
          </p>
          <p className="mt-2 text-sm text-slate-300 whitespace-pre-line">
            {interview.questionsAsked || "No questions added"}
          </p>
        </div>

        <div className="rounded-2xl bg-slate-900/60 p-4">
          <p className="text-xs font-semibold uppercase tracking-wider text-emerald-400">
            What Went Well
          </p>
          <p className="mt-2 text-sm text-slate-300 whitespace-pre-line">
            {interview.whatWentWell || "No notes added"}
          </p>
        </div>

        <div className="rounded-2xl bg-slate-900/60 p-4">
          <p className="text-xs font-semibold uppercase tracking-wider text-rose-400">
            Improvements
          </p>
          <p className="mt-2 text-sm text-slate-300 whitespace-pre-line">
            {interview.improvements || "No improvement notes added"}
          </p>
        </div>
      </div>

      <div className="mt-6 flex flex-wrap gap-3">
        <button
          onClick={() => onEdit(interview)}
          className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white hover:bg-white/10"
        >
          <Pencil className="h-4 w-4" />
          Edit
        </button>

        <button
          onClick={() => onDelete(interview._id)}
          className="inline-flex items-center gap-2 rounded-xl border border-rose-500/20 bg-rose-500/10 px-4 py-2 text-sm font-medium text-rose-300 hover:bg-rose-500/20"
        >
          <Trash2 className="h-4 w-4" />
          Delete
        </button>
      </div>
    </div>
  );
};

export default InterviewCard;