import { useEffect, useState } from "react";
import { ApplicationStatuses } from "../../data/ApplicationStatuses";

const initialState = {
  companyName: "",
  jobTitle: "",
  location: "",
  applicationDate: "",
  deadline: "",
  status: "Applied",
  salary: "",
  notes: "",
  linkToJobPost: "",
};

const ApplicationForm = ({ onSubmit, initialData = null, onClose }) => {
  const [formData, setFormData] = useState(initialState);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (initialData) {
      setFormData({
        companyName: initialData.companyName || "",
        jobTitle: initialData.jobTitle || "",
        location: initialData.location || "",
        applicationDate: initialData.applicationDate?.slice(0, 10) || "",
        deadline: initialData.deadline?.slice(0, 10) || "",
        status: initialData.status || "Applied",
        salary: initialData.salary || "",
        notes: initialData.notes || "",
        linkToJobPost: initialData.linkToJobPost || "",
      });
    }
  }, [initialData]);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      await onSubmit(formData);
      if (!initialData) setFormData(initialState);
      onClose?.();
    } catch (error) {
      console.error(error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-4 md:grid-cols-2">
        <InputField
          label="Company Name"
          name="companyName"
          value={formData.companyName}
          onChange={handleChange}
          required
        />
        <InputField
          label="Job Title"
          name="jobTitle"
          value={formData.jobTitle}
          onChange={handleChange}
          required
        />
        <InputField
          label="Location"
          name="location"
          value={formData.location}
          onChange={handleChange}
        />
        <InputField
          label="Application Date"
          name="applicationDate"
          type="date"
          value={formData.applicationDate}
          onChange={handleChange}
        />
        <InputField
          label="Deadline"
          name="deadline"
          type="date"
          value={formData.deadline}
          onChange={handleChange}
        />
        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700">
            Status
          </label>
          <select
            name="status"
            value={formData.status}
            onChange={handleChange}
            className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:border-indigo-500 focus:bg-white"
          >
            {ApplicationStatuses.map((status) => (
              <option key={status} value={status}>
                {status}
              </option>
            ))}
          </select>
        </div>
        <InputField
          label="Salary (Optional)"
          name="salary"
          value={formData.salary}
          onChange={handleChange}
        />
      </div>

      <InputField
        label="Job Post Link"
        name="linkToJobPost"
        value={formData.linkToJobPost}
        onChange={handleChange}
      />

      <div>
        <label className="mb-2 block text-sm font-medium text-slate-700">
          Notes
        </label>
        <textarea
          name="notes"
          rows="4"
          value={formData.notes}
          onChange={handleChange}
          className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:border-indigo-500 focus:bg-white"
          placeholder="Add notes about this application..."
        />
      </div>

      <div className="flex items-center justify-end gap-3 pt-2">
        {onClose && (
          <button
            type="button"
            onClick={onClose}
            className="rounded-2xl border border-slate-300 px-5 py-3 font-medium text-slate-700 transition hover:bg-slate-100"
          >
            Cancel
          </button>
        )}
        <button
          type="submit"
          disabled={submitting}
          className="rounded-2xl bg-indigo-600 px-6 py-3 font-semibold text-white transition hover:bg-indigo-700 disabled:opacity-50"
        >
          {submitting ? "Saving..." : initialData ? "Update" : "Add Application"}
        </button>
      </div>
    </form>
  );
};

const InputField = ({ label, ...props }) => (
  <div>
    <label className="mb-2 block text-sm font-medium text-slate-700">
      {label}
    </label>
    <input
      {...props}
      className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:border-indigo-500 focus:bg-white"
    />
  </div>
);

export default ApplicationForm;