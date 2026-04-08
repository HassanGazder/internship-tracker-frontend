import { useState } from "react";
import { X } from "lucide-react";

const initialState = {
  companyName: "",
  jobTitle: "",
  location: "",
  applicationDate: "",
  deadline: "",
  status: "Applied",
  salary: "",
  notes: "",
  jobLink: "",
};

const ApplicationFormModal = ({ isOpen, onClose, onSubmit, editData }) => {
  const [formData, setFormData] = useState(() => {
    if (editData) {
      return {
        companyName: editData.companyName || "",
        jobTitle: editData.jobTitle || "",
        location: editData.location || "",
        applicationDate: editData.applicationDate?.slice(0, 10) || "",
        deadline: editData.deadline?.slice(0, 10) || "",
        status: editData.status || "Applied",
        salary: editData.salary || "",
        notes: editData.notes || "",
        jobLink: editData.jobLink || "",
      };
    } else {
      return initialState;
    }
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    onClose();
    setFormData(initialState);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4">
      <div className="max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-3xl border border-slate-800 bg-slate-950 p-6 shadow-2xl">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-white">
            {editData ? "Edit Application" : "Add New Application"}
          </h2>
          <button
            onClick={onClose}
            className="rounded-full p-2 text-slate-400 hover:bg-slate-800 hover:text-white"
          >
            <X size={20} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <input name="companyName" placeholder="Company Name" value={formData.companyName} onChange={handleChange} className="rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-white outline-none" required />
          <input name="jobTitle" placeholder="Job Title" value={formData.jobTitle} onChange={handleChange} className="rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-white outline-none" required />
          <input name="location" placeholder="Location" value={formData.location} onChange={handleChange} className="rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-white outline-none" />
          <input type="date" name="applicationDate" value={formData.applicationDate} onChange={handleChange} className="rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-white outline-none" />
          <input type="date" name="deadline" value={formData.deadline} onChange={handleChange} className="rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-white outline-none" />
          
          <select name="status" value={formData.status} onChange={handleChange} className="rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-white outline-none">
            <option>Applied</option>
            <option>Interview</option>
            <option>Offer</option>
            <option>Rejected</option>
          </select>

          <input name="salary" placeholder="Salary (optional)" value={formData.salary} onChange={handleChange} className="rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-white outline-none" />
          <input name="jobLink" placeholder="Job Link" value={formData.jobLink} onChange={handleChange} className="rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-white outline-none" />

          <textarea
            name="notes"
            placeholder="Notes"
            value={formData.notes}
            onChange={handleChange}
            className="md:col-span-2 min-h-[120px] rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-white outline-none"
          />

          <button
            type="submit"
            className="md:col-span-2 rounded-xl bg-cyan-500 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-400"
          >
            {editData ? "Update Application" : "Save Application"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ApplicationFormModal;