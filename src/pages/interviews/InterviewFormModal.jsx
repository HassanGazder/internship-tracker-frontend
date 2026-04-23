import { useState } from "react";
import { X } from "lucide-react";
import { useApplications } from "../../context/useApplicationsContext";

const buildFormData = (initialData) => ({
  application: initialData?.application?._id || initialData?.application || "",
  interviewDate: initialData?.interviewDate?.split("T")[0] || "",
  questionsAsked: initialData?.questionsAsked || "",
  whatWentWell: initialData?.whatWentWell || "",
  improvements: initialData?.improvements || "",
  rating: initialData?.rating || 5,
});

const InterviewFormModal = ({ isOpen, onClose, onSubmit, initialData }) => {
  const { applications } = useApplications();

  const [formData, setFormData] = useState(() => buildFormData(initialData));

  if (!isOpen) return null;

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await onSubmit(formData);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-dark/70 p-4 backdrop-blur-sm">
      <div className="w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl border border-white/10 bg-slate-950 p-6 shadow-2xl">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-white">
            {initialData ? "Edit Interview Reflection" : "Add Interview Reflection"}
          </h2>
          <button
            onClick={onClose}
            className="rounded-xl p-2 text-slate-400 hover:bg-white/10 hover:text-white"
          >
            <X />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="grid gap-5">
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-300">
              Select Application
            </label>
            <select
              name="application"
              value={formData.application}
              onChange={handleChange}
              required
              className="w-full rounded-2xl border border-white/10 bg-slate-900 px-4 py-3 text-white outline-none focus:border-indigo-500"
            >
              <option value="">Choose an application</option>
              {applications.map((app) => (
                <option key={app._id} value={app._id}>
                  {app.jobTitle} - {app.companyName}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-slate-300">
              Interview Date
            </label>
            <input
              type="date"
              name="interviewDate"
              value={formData.interviewDate}
              onChange={handleChange}
              required
              className="w-full rounded-2xl border border-white/10 bg-slate-900 px-4 py-3 text-white outline-none focus:border-indigo-500"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-slate-300">
              Questions Asked
            </label>
            <textarea
              name="questionsAsked"
              rows="3"
              value={formData.questionsAsked}
              onChange={handleChange}
              className="w-full rounded-2xl border border-white/10 bg-slate-900 px-4 py-3 text-white outline-none focus:border-indigo-500"
              placeholder="Example: Tell me about yourself, Why should we hire you?"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-slate-300">
              What Went Well
            </label>
            <textarea
              name="whatWentWell"
              rows="3"
              value={formData.whatWentWell}
              onChange={handleChange}
              className="w-full rounded-2xl border border-white/10 bg-slate-900 px-4 py-3 text-white outline-none focus:border-indigo-500"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-slate-300">
              Improvements
            </label>
            <textarea
              name="improvements"
              rows="3"
              value={formData.improvements}
              onChange={handleChange}
              className="w-full rounded-2xl border border-white/10 bg-slate-900 px-4 py-3 text-white outline-none focus:border-indigo-500"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-slate-300">
              Confidence Rating (1–10)
            </label>
            <input
              type="number"
              name="rating"
              min="1"
              max="10"
              value={formData.rating}
              onChange={handleChange}
              className="w-full rounded-2xl border border-white/10 bg-slate-900 px-4 py-3 text-white outline-none focus:border-indigo-500"
            />
          </div>

          <div className="flex justify-end gap-3 pt-3">
            <button
              type="button"
              onClick={onClose}
              className="rounded-xl border border-white/10 px-5 py-3 text-sm font-semibold text-slate-300 hover:bg-white/5"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="rounded-xl bg-indigo-600 px-5 py-3 text-sm font-semibold text-white hover:bg-indigo-500"
            >
              {initialData ? "Update Reflection" : "Save Reflection"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default InterviewFormModal;