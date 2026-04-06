import { X } from "lucide-react";
import StatusBadge from "./StatusBadge";
import { formatDate } from "../../utils/FormDate";

const ViewApplicationModal = ({ application, onClose }) => {
  if (!application) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4">
      <div className="w-full max-w-2xl rounded-3xl bg-white p-6 shadow-2xl">
        <div className="mb-6 flex items-start justify-between">
          <div>
            <h2 className="text-2xl font-bold text-slate-900">
              {application.jobTitle}
            </h2>
            <p className="mt-1 text-slate-500">{application.companyName}</p>
          </div>
          <button
            onClick={onClose}
            className="rounded-xl p-2 text-slate-500 transition hover:bg-slate-100"
          >
            <X size={20} />
          </button>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <Info label="Location" value={application.location} />
          <Info label="Status" value={<StatusBadge status={application.status} />} />
          <Info label="Application Date" value={formatDate(application.applicationDate)} />
          <Info label="Deadline" value={formatDate(application.deadline)} />
          <Info label="Salary" value={application.salary || "N/A"} />
          <Info
            label="Job Link"
            value={
              application.linkToJobPost ? (
                <a
                  href={application.linkToJobPost}
                  target="_blank"
                  rel="noreferrer"
                  className="text-indigo-600 underline"
                >
                  Open Job Post
                </a>
              ) : (
                "N/A"
              )
            }
          />
        </div>

        <div className="mt-6">
          <h3 className="mb-2 text-sm font-semibold text-slate-700">Notes</h3>
          <div className="rounded-2xl bg-slate-50 p-4 text-slate-600">
            {application.notes || "No notes added yet."}
          </div>
        </div>
      </div>
    </div>
  );
};

const Info = ({ label, value }) => (
  <div className="rounded-2xl bg-slate-50 p-4">
    <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
      {label}
    </p>
    <div className="mt-2 text-slate-800">{value || "N/A"}</div>
  </div>
);

export default ViewApplicationModal;