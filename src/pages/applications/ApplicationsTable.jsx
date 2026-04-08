import { Pencil, Trash2, ExternalLink } from "lucide-react";

const statusStyles = {
  Applied: "bg-blue-500/20 text-blue-300",
  Interview: "bg-yellow-500/20 text-yellow-300",
  Offer: "bg-green-500/20 text-green-300",
  Rejected: "bg-red-500/20 text-red-300",
};

const ApplicationsTable = ({ applications, onEdit, onDelete }) => {
  return (
    <div className="overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/60">
      <div className="overflow-x-auto">
        <table className="min-w-full text-left text-sm text-slate-300">
          <thead className="bg-slate-950/80 text-slate-400">
            <tr>
              <th className="px-6 py-4">Company</th>
              <th className="px-6 py-4">Role</th>
              <th className="px-6 py-4">Location</th>
              <th className="px-6 py-4">Status</th>
              <th className="px-6 py-4">Deadline</th>
              <th className="px-6 py-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {applications.map((app) => (
              <tr key={app._id} className="border-t border-slate-800 hover:bg-slate-800/40">
                <td className="px-6 py-4 font-medium text-white">{app.companyName}</td>
                <td className="px-6 py-4">{app.jobTitle}</td>
                <td className="px-6 py-4">{app.location || "-"}</td>
                <td className="px-6 py-4">
                  <span className={`rounded-full px-3 py-1 text-xs font-medium ${statusStyles[app.status]}`}>
                    {app.status}
                  </span>
                </td>
                <td className="px-6 py-4">
                  {app.deadline ? new Date(app.deadline).toLocaleDateString() : "-"}
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    {app.jobLink && (
                      <a href={app.jobLink} target="_blank" rel="noreferrer">
                        <ExternalLink size={18} className="text-cyan-400 hover:text-cyan-300" />
                      </a>
                    )}
                    <button onClick={() => onEdit(app)}>
                      <Pencil size={18} className="text-yellow-400 hover:text-yellow-300" />
                    </button>
                    <button onClick={() => onDelete(app._id)}>
                      <Trash2 size={18} className="text-red-400 hover:text-red-300" />
                    </button>
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

export default ApplicationsTable;