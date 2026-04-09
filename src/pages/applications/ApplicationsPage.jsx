/* eslint-disable no-unused-vars */
import { useMemo, useState } from "react";
import { Plus, Pencil, Trash2, Search } from "lucide-react";
import toast from "react-hot-toast";
import DashboardLayout from "../../components/layout/DashboardLayout";
import PageHeader from "../../components/ui/PageHeader";
import EmptyState from "../../components/ui/EmptyState";
import LoadingSpinner from "../../components/ui/LoadingSpinner";
import ConfirmModal from "../../components/ui/ConfirmModal";
import ApplicationFormModal from "./ApplicationFormModal";
import { useApplications } from "../../context/useApplicationsContext";

const statusOptions = ["All", "Applied", "Interview", "Offer", "Rejected"];

const ApplicationsPage = () => {
  const {
    applications,
    loading,
    createApplication,
    updateApplication,
    deleteApplication,
  } = useApplications();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingApplication, setEditingApplication] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [sortBy, setSortBy] = useState("newest");
  const [deleteTarget, setDeleteTarget] = useState(null);

  const filteredApplications = useMemo(() => {
    let filtered = [...applications];

    if (searchTerm.trim()) {
      const search = searchTerm.toLowerCase();
      filtered = filtered.filter(
        (app) =>
          app.companyName?.toLowerCase().includes(search) ||
          app.jobTitle?.toLowerCase().includes(search) ||
          app.location?.toLowerCase().includes(search)
      );
    }

    if (statusFilter !== "All") {
      filtered = filtered.filter((app) => app.status === statusFilter);
    }

    if (sortBy === "newest") {
      filtered.sort(
        (a, b) => new Date(b.applicationDate) - new Date(a.applicationDate)
      );
    } else if (sortBy === "oldest") {
      filtered.sort(
        (a, b) => new Date(a.applicationDate) - new Date(b.applicationDate)
      );
    } else if (sortBy === "deadline") {
      filtered.sort((a, b) => new Date(a.deadline) - new Date(b.deadline));
    }

    return filtered;
  }, [applications, searchTerm, statusFilter, sortBy]);

  const handleAddNew = () => {
    setEditingApplication(null);
    setIsModalOpen(true);
  };

  const handleEdit = (application) => {
    setEditingApplication(application);
    setIsModalOpen(true);
  };

  const handleDelete = async () => {
    if (!deleteTarget) return;
    try {
      await deleteApplication(deleteTarget._id);
      toast.success("Application deleted successfully");
      setDeleteTarget(null);
    } catch (error) {
      toast.error("Failed to delete application");
    }
  };

  const handleSubmit = async (formData) => {
    try {
      if (editingApplication) {
        await updateApplication(editingApplication._id, formData);
        toast.success("Application updated successfully");
      } else {
        await createApplication(formData);
        toast.success("Application added successfully");
      }

      setIsModalOpen(false);
      setEditingApplication(null);
    } catch (error) {
      toast.error("Something went wrong");
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "Applied":
        return "bg-blue-500/20 text-blue-300 border border-blue-400/20";
      case "Interview":
        return "bg-yellow-500/20 text-yellow-300 border border-yellow-400/20";
      case "Offer":
        return "bg-emerald-500/20 text-emerald-300 border border-emerald-400/20";
      case "Rejected":
        return "bg-red-500/20 text-red-300 border border-red-400/20";
      default:
        return "bg-slate-700 text-slate-300";
    }
  };

  return (
    <DashboardLayout>
      <PageHeader
        title="Applications"
        subtitle="Track, manage, and update all your internship applications in one place."
        action={
          <button
            onClick={handleAddNew}
            className="inline-flex items-center gap-2 rounded-2xl bg-cyan-500 px-5 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-500/20 transition hover:scale-[1.02] hover:bg-cyan-400"
          >
            <Plus size={18} />
            Add Application
          </button>
        }
      />

      <div className="mb-6 grid grid-cols-1 gap-4 lg:grid-cols-4">
        <div className="relative lg:col-span-2">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
          <input
            type="text"
            placeholder="Search by company, job title, or location..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full rounded-2xl border border-white/10 bg-white/5 py-3 pl-11 pr-4 text-sm text-white outline-none backdrop-blur-xl placeholder:text-slate-500 focus:border-cyan-400/40"
          />
        </div>

        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none backdrop-blur-xl focus:border-cyan-400/40"
        >
          {statusOptions.map((status) => (
            <option key={status} value={status} className="bg-slate-900">
              {status}
            </option>
          ))}
        </select>

        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none backdrop-blur-xl focus:border-cyan-400/40"
        >
          <option value="newest" className="bg-slate-900">Newest</option>
          <option value="oldest" className="bg-slate-900">Oldest</option>
          <option value="deadline" className="bg-slate-900">Deadline</option>
        </select>
      </div>

      <div className="rounded-3xl border border-white/10 bg-white/5 p-4 shadow-xl backdrop-blur-xl">
        {loading ? (
          <LoadingSpinner text="Loading applications..." />
        ) : filteredApplications.length === 0 ? (
          <EmptyState
            title="No applications found"
            description="You haven’t added any applications yet or no results match your filters."
            action={
              <button
                onClick={handleAddNew}
                className="rounded-2xl bg-cyan-500 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400"
              >
                Add Your First Application
              </button>
            }
          />
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full text-left text-sm text-slate-300">
              <thead>
                <tr className="border-b border-white/10 text-slate-400">
                  <th className="px-4 py-4 font-medium">Company</th>
                  <th className="px-4 py-4 font-medium">Role</th>
                  <th className="px-4 py-4 font-medium">Location</th>
                  <th className="px-4 py-4 font-medium">Applied</th>
                  <th className="px-4 py-4 font-medium">Deadline</th>
                  <th className="px-4 py-4 font-medium">Status</th>
                  <th className="px-4 py-4 font-medium">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredApplications.map((app) => (
                  <tr
                    key={app._id}
                    className="border-b border-white/5 transition hover:bg-white/[0.03]"
                  >
                    <td className="px-4 py-4 font-medium text-white">{app.companyName}</td>
                    <td className="px-4 py-4">{app.jobTitle}</td>
                    <td className="px-4 py-4">{app.location}</td>
                    <td className="px-4 py-4">
                      {app.applicationDate
                        ? new Date(app.applicationDate).toLocaleDateString()
                        : "-"}
                    </td>
                    <td className="px-4 py-4">
                      {app.deadline
                        ? new Date(app.deadline).toLocaleDateString()
                        : "-"}
                    </td>
                    <td className="px-4 py-4">
                      <span className={`rounded-full px-3 py-1 text-xs font-medium ${getStatusColor(app.status)}`}>
                        {app.status}
                      </span>
                    </td>
                    <td className="px-4 py-4">
                      <div className="flex items-center gap-3">
                        <button
                          onClick={() => handleEdit(app)}
                          className="rounded-xl bg-white/5 p-2 text-slate-300 transition hover:bg-cyan-500/20 hover:text-cyan-300"
                        >
                          <Pencil size={16} />
                        </button>
                        <button
                          onClick={() => setDeleteTarget(app)}
                          className="rounded-xl bg-white/5 p-2 text-slate-300 transition hover:bg-red-500/20 hover:text-red-300"
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
        )}
      </div>

      <ApplicationFormModal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setEditingApplication(null);
        }}
        onSubmit={handleSubmit}
        initialData={editingApplication}
      />

      <ConfirmModal
        isOpen={!!deleteTarget}
        onClose={() => setDeleteTarget(null)}
        onConfirm={handleDelete}
        title="Delete Application?"
        description={`Are you sure you want to delete ${
          deleteTarget?.jobTitle || "this application"
        } at ${deleteTarget?.companyName || ""}?`}
      />
    </DashboardLayout>
  );
};

export default ApplicationsPage;