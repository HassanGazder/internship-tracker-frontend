import { Eye, Pencil, Trash2, ExternalLink } from "lucide-react";
import StatusBadge from "./StatusBadge";
import { formatDate } from "../../utils/FormDate";

const ApplicationTable = ({
  applications,
  onView,
  onEdit,
  onDelete,
}) => {
  return (
    <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white/80 shadow-sm">
      <div className="overflow-x-auto">
        <table className="min-w-full text-left">
          <thead className="bg-slate-50">
            <tr className="text-sm text-slate-500">
              <th className="px-6 py-4 font-semibold">Company</th>
              <th className="px-6 py-4 font-semibold">Role</th>
              <th className="px-6 py-4 font-semibold">Status</th>
              <th className="px-6 py-4 font-semibold">Applied</th>
              <th className="px-6 py-4 font-semibold">Deadline</th>
              <th className="px-6 py-4 font-semibold">Actions</th>
            </tr>
          </thead>
          <tbody>
            {applications.map((app) => (
              <tr
                key={app._id}
                className="border-t border-slate-100 transition hover:bg-slate-50/70"
              >
                <td className="px-6 py-4 font-semibold text-slate-800">
                  {app.companyName}
                </td>
                <td className="px-6 py-4 text-slate-600">{app.jobTitle}</td>
                <td className="px-6 py-4">
                  <StatusBadge status={app.status} />
                </td>
                <td className="px-6 py-4 text-slate-600">
                  {formatDate(app.applicationDate)}
                </td>
                <td className="px-6 py-4 text-slate-600">
                  {formatDate(app.deadline)}
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => onView(app)}
                      className="rounded-xl p-2 text-slate-600 transition hover:bg-indigo-100 hover:text-indigo-700"
                    >
                      <Eye size={18} />
                    </button>
                    <button
                      onClick={() => onEdit(app)}
                      className="rounded-xl p-2 text-slate-600 transition hover:bg-amber-100 hover:text-amber-700"
                    >
                      <Pencil size={18} />
                    </button>
                    <button
                      onClick={() => onDelete(app)}
                      className="rounded-xl p-2 text-slate-600 transition hover:bg-rose-100 hover:text-rose-700"
                    >
                      <Trash2 size={18} />
                    </button>
                    {app.linkToJobPost && (
                      <a
                        href={app.linkToJobPost}
                        target="_blank"
                        rel="noreferrer"
                        className="rounded-xl p-2 text-slate-600 transition hover:bg-emerald-100 hover:text-emerald-700"
                      >
                        <ExternalLink size={18} />
                      </a>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ApplicationTable;