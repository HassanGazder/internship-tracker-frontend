import { useMemo, useState } from "react";
import DashboardLayout from "../../components/layout/DashboardLayout";
import { useApplications } from "../../context/useApplicationsContext";
import { exportApplicationsToCSV } from "../../utils/exportToCSV";
import ExportButton from "../applications/ExportButton";
import StatusBadge from "../applications/StatusBadge";
import EmptyState from "../../components/common/EmptyState";
import LoadingSpinner from "../../components/common/LoadingSpinner";
import PageHeader from "../../components/common/PageHeader";
import ConfirmModal from "../../components/ui/ConfirmModal";
import toast from "react-hot-toast";
import { Pencil, Plus, Trash2, Search } from "lucide-react";

const initialForm = {
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

const ApplicationsPage = () => {
  const {
    applications,
    loading,
    createApplication,
    updateApplication,
    deleteApplication,
  } = useApplications();

  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingApp, setEditingApp] = useState(null);
  const [formData, setFormData] = useState(initialForm);
  const [deleteId, setDeleteId] = useState(null);

  const filteredApplications = useMemo(() => {
    return applications.filter((app) => {
      const matchesSearch =
        app.companyName?.toLowerCase().includes(search.toLowerCase()) ||
        app.jobTitle?.toLowerCase().includes(search.toLowerCase()) ||
        app.location?.toLowerCase().includes(search.toLowerCase());

      const matchesStatus =
        statusFilter === "All" || app.status === statusFilter;

      return matchesSearch && matchesStatus;
    });
  }, [applications, search, statusFilter]);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const openAddModal = () => {
    setEditingApp(null);
    setFormData(initialForm);
    setIsModalOpen(true);
  };

  const openEditModal = (app) => {
    setEditingApp(app);
    setFormData({
      companyName: app.companyName || "",
      jobTitle: app.jobTitle || "",
      location: app.location || "",
      applicationDate: app.applicationDate?.slice(0, 10) || "",
      deadline: app.deadline?.slice(0, 10) || "",
      status: app.status || "Applied",
      salary: app.salary || "",
      notes: app.notes || "",
      jobLink: app.jobLink || "",
    });
    setIsModalOpen(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (editingApp) {
        const result = await updateApplication(editingApp._id, formData);
        if (!result?.success) {
          toast.error(result?.message || "Failed to update application");
          return;
        }
        toast.success("Application updated successfully");
      } else {
        const result = await createApplication(formData);
        if (!result?.success) {
          toast.error(result?.message || "Failed to add application");
          return;
        }
        toast.success("Application added successfully");
      }

      setIsModalOpen(false);
      setFormData(initialForm);
      setEditingApp(null);
    // eslint-disable-next-line no-unused-vars
    } catch (error) {
      toast.error("Something went wrong");
    }
  };

  const handleDelete = async () => {
    try {
      const result = await deleteApplication(deleteId);
      if (!result?.success) {
        toast.error(result?.message || "Failed to delete application");
        return;
      }
      toast.success("Application deleted successfully");
      setDeleteId(null);
    // eslint-disable-next-line no-unused-vars
    } catch (error) {
      toast.error("Failed to delete application");
    }
  };

  return (
    <DashboardLayout>
      <PageHeader
        title="Applications"
        subtitle="Manage, track, and export all your internship applications in one place."
        actions={
          <>
            <ExportButton
              onClick={() => {
                exportApplicationsToCSV(filteredApplications, "internship_applications");
                toast.success("CSV exported successfully");
              }}
            />
            <button
              onClick={openAddModal}
              className="inline-flex items-center gap-2 rounded-xl bg-cyan-500 px-4 py-2.5 text-sm font-semibold text-slate-950 hover:bg-cyan-400 transition"
            >
              <Plus size={16} />
              Add Application
            </button>
          </>
        }
      />

      <div className="mb-6 grid gap-4 md:grid-cols-3">
        <div className="relative">
          <Search
            size={18}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
          />
          <input
            type="text"
            placeholder="Search company, role, location..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full rounded-2xl border border-white/10 bg-white/5 py-3 pl-10 pr-4 text-white outline-none placeholder:text-slate-500 focus:border-cyan-400"
          />
        </div>

        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none focus:border-cyan-400"
        >
          <option className="bg-slate-900">All</option>
          <option className="bg-slate-900">Applied</option>
          <option className="bg-slate-900">Interview</option>
          <option className="bg-slate-900">Offer</option>
          <option className="bg-slate-900">Rejected</option>
        </select>

        <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-300">
          Showing <span className="font-semibold text-white">{filteredApplications.length}</span> applications
        </div>
      </div>

      {loading ? (
        <LoadingSpinner />
      ) : filteredApplications.length === 0 ? (
        <EmptyState
          title="No applications found"
          description="Start by adding your first internship application and track everything in one place."
        />
      ) : (
        <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-xl">
          <div className="overflow-x-auto">
            <table className="min-w-full text-left text-sm text-slate-300">
              <thead className="border-b border-white/10 bg-white/5 text-xs uppercase tracking-wider text-slate-400">
                <tr>
                  <th className="px-6 py-4">Company</th>
                  <th className="px-6 py-4">Role</th>
                  <th className="px-6 py-4">Location</th>
                  <th className="px-6 py-4">Applied</th>
                  <th className="px-6 py-4">Deadline</th>
                  <th className="px-6 py-4">Status</th>
                  <th className="px-6 py-4">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredApplications.map((app) => (
                  <tr
                    key={app._id}
                    className="border-b border-white/5 hover:bg-white/[0.03] transition"
                  >
                    <td className="px-6 py-4 font-medium text-white">{app.companyName}</td>
                    <td className="px-6 py-4">{app.jobTitle}</td>
                    <td className="px-6 py-4">{app.location}</td>
                    <td className="px-6 py-4">
                      {app.applicationDate
                        ? new Date(app.applicationDate).toLocaleDateString()
                        : "-"}
                    </td>
                    <td className="px-6 py-4">
                      {app.deadline
                        ? new Date(app.deadline).toLocaleDateString()
                        : "-"}
                    </td>
                    <td className="px-6 py-4">
                      <StatusBadge status={app.status} />
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex gap-2">
                        <button
                          onClick={() => openEditModal(app)}
                          className="rounded-xl border border-white/10 bg-white/5 p-2 text-slate-300 hover:bg-white/10"
                        >
                          <Pencil size={16} />
                        </button>
                        <button
                          onClick={() => setDeleteId(app._id)}
                          className="rounded-xl border border-red-500/20 bg-red-500/10 p-2 text-red-300 hover:bg-red-500/20"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Add/Edit Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4">
          <div className="w-full max-w-3xl rounded-3xl border border-white/10 bg-slate-900 p-6 shadow-2xl">
            <h2 className="mb-6 text-2xl font-bold text-white">
              {editingApp ? "Edit Application" : "Add New Application"}
            </h2>

            <form onSubmit={handleSubmit} className="grid gap-4 md:grid-cols-2">
              {[
                { label: "Company Name", name: "companyName", type: "text" },
                { label: "Job Title", name: "jobTitle", type: "text" },
                { label: "Location", name: "location", type: "text" },
                { label: "Application Date", name: "applicationDate", type: "date" },
                { label: "Deadline", name: "deadline", type: "date" },
                { label: "Salary", name: "salary", type: "text" },
                { label: "Job Link", name: "jobLink", type: "url" },
              ].map((field) => (
                <div key={field.name}>
                  <label className="mb-2 block text-sm text-slate-300">{field.label}</label>
                  <input
                    type={field.type}
                    name={field.name}
                    value={formData[field.name]}
                    onChange={handleChange}
                    className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none placeholder:text-slate-500 focus:border-cyan-400"
                  />
                </div>
              ))}

              <div>
                <label className="mb-2 block text-sm text-slate-300">Status</label>
                <select
                  name="status"
                  value={formData.status}
                  onChange={handleChange}
                  className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none focus:border-cyan-400"
                >
                  <option className="bg-slate-900">Applied</option>
                  <option className="bg-slate-900">Interview</option>
                  <option className="bg-slate-900">Offer</option>
                  <option className="bg-slate-900">Rejected</option>
                </select>
              </div>

              <div className="md:col-span-2">
                <label className="mb-2 block text-sm text-slate-300">Notes</label>
                <textarea
                  name="notes"
                  rows="4"
                  value={formData.notes}
                  onChange={handleChange}
                  className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none placeholder:text-slate-500 focus:border-cyan-400"
                />
              </div>

              <div className="md:col-span-2 mt-4 flex justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="rounded-xl border border-white/10 px-5 py-2.5 text-sm text-slate-300 hover:bg-white/5"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="rounded-xl bg-cyan-500 px-5 py-2.5 text-sm font-semibold text-slate-950 hover:bg-cyan-400"
                >
                  {editingApp ? "Update Application" : "Save Application"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <ConfirmModal
        isOpen={!!deleteId}
        onClose={() => setDeleteId(null)}
        onConfirm={handleDelete}
        title="Delete Application"
        message="Are you sure you want to delete this application? This action cannot be undone."
      />
    </DashboardLayout>
  );
};

export default ApplicationsPage;
